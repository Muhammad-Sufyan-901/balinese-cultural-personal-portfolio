import { useState, useCallback, useEffect } from "react";

interface UseRateLimitOptions {
  maxAttempts: number;
  windowMs: number; // time window in milliseconds
  storageKey: string;
}

interface RateLimitData {
  attempts: number;
  resetTime: number;
}

export function useRateLimit({
  maxAttempts,
  windowMs,
  storageKey,
}: UseRateLimitOptions) {
  const getRateLimitData = useCallback((): RateLimitData => {
    const now = Date.now();
    const stored = localStorage.getItem(storageKey);

    let data: RateLimitData = stored
      ? JSON.parse(stored)
      : { attempts: 0, resetTime: now + windowMs };

    // Reset if window has passed
    if (now > data.resetTime) {
      data = { attempts: 0, resetTime: now + windowMs };
      localStorage.setItem(storageKey, JSON.stringify(data));
    }

    return data;
  }, [windowMs, storageKey]);

  // Lazy initialization - compute initial state only once
  const [isBlocked, setIsBlocked] = useState(() => {
    const now = Date.now();
    const data = getRateLimitData();

    if (data.attempts >= maxAttempts) {
      const timeLeft = Math.ceil((data.resetTime - now) / 1000);
      return timeLeft > 0;
    }

    return false;
  });

  const [remainingTime, setRemainingTime] = useState(() => {
    const now = Date.now();
    const data = getRateLimitData();

    if (data.attempts >= maxAttempts) {
      const timeLeft = Math.ceil((data.resetTime - now) / 1000);
      return timeLeft > 0 ? timeLeft : 0;
    }

    return 0;
  });

  const checkRateLimit = useCallback((): boolean => {
    const now = Date.now();
    const data = getRateLimitData();

    // Check if blocked
    if (data.attempts >= maxAttempts) {
      const timeLeft = Math.ceil((data.resetTime - now) / 1000);
      return timeLeft <= 0; // Return true if time has passed (not blocked)
    }

    return true; // Not blocked
  }, [maxAttempts, getRateLimitData]);

  const incrementAttempt = useCallback(() => {
    const now = Date.now();
    const data = getRateLimitData();

    data.attempts += 1;
    localStorage.setItem(storageKey, JSON.stringify(data));

    // Update state after incrementing
    const timeLeft = Math.ceil((data.resetTime - now) / 1000);
    if (data.attempts >= maxAttempts && timeLeft > 0) {
      setIsBlocked(true);
      setRemainingTime(timeLeft);
    }
  }, [maxAttempts, getRateLimitData, storageKey]);

  const reset = useCallback(() => {
    localStorage.removeItem(storageKey);
    setIsBlocked(false);
    setRemainingTime(0);
  }, [storageKey]);

  // Update remaining time countdown
  useEffect(() => {
    if (!isBlocked) return;

    const interval = setInterval(() => {
      const now = Date.now();
      const stored = localStorage.getItem(storageKey);

      if (stored) {
        const data: RateLimitData = JSON.parse(stored);
        const timeLeft = Math.ceil((data.resetTime - now) / 1000);

        if (timeLeft <= 0) {
          reset();
        } else {
          setRemainingTime(timeLeft);
        }
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [isBlocked, storageKey, reset]);

  return {
    isBlocked,
    remainingTime,
    checkRateLimit,
    incrementAttempt,
    reset,
  };
}
