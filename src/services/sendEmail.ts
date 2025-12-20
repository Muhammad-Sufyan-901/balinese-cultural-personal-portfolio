import emailjs from "@emailjs/browser";
import { toast } from "sonner";

const EMAIL_JS_SERVICE_ID = import.meta.env.VITE_PUBLIC_EMAIL_JS_SERVICE_ID;
const EMAIL_JS_TEMPLATE_ID = import.meta.env.VITE_PUBLIC_EMAIL_JS_TEMPLATE_ID;
const EMAIL_JS_PUBLIC_KEY = import.meta.env.VITE_PUBLIC_EMAIL_JS_PUBLIC_KEY;

export interface EmailFormData {
  first_name: string;
  last_name: string;
  email: string;
  subject: string;
  message: string;
}

export async function sendEmail(data: EmailFormData): Promise<boolean> {
  try {
    await emailjs.send(
      EMAIL_JS_SERVICE_ID,
      EMAIL_JS_TEMPLATE_ID,
      { ...data },
      EMAIL_JS_PUBLIC_KEY
    );

    toast.success("Berhasil!", {
      description: "Pesan anda telah terkirim.",
      duration: 5000,
    });

    return true;
  } catch (error) {
    console.error("Email send error:", error);

    toast.error("Oops...", {
      description: "Terjadi kesalahan saat mengirim pesan. Silahkan coba lagi.",
      duration: 5000,
    });

    return false;
  }
}
