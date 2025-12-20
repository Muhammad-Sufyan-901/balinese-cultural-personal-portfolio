export function useWindowOnEvent(
  event: keyof WindowEventMap,
  callback: VoidFunction
): void {
  if (typeof window === "undefined") return;

  window.addEventListener(event, callback);
}

export function useWindowOffEvent(
  event: keyof WindowEventMap,
  callback: VoidFunction
): void {
  if (typeof window === "undefined") return;

  window.removeEventListener(event, callback);
}
