import { z } from "zod";

export const contactFormSchema = z.object({
  first_name: z
    .string()
    .min(2, "Nama Depan harus memiliki minimal 2 karakter")
    .max(50, "Nama Depan tidak boleh melebihi 50 karakter"),
  last_name: z
    .string()
    .min(2, "Nama Belakang harus memiliki minimal 2 karakter")
    .max(50, "Nama Belakang tidak boleh melebihi 50 karakter"),
  email: z.email("Email tidak valid").min(1, "Email tidak boleh kosong"),
  subject: z
    .string()
    .min(5, "Subjek harus memiliki minimal 5 karakter")
    .max(100, "Subjek tidak boleh melebihi 100 karakter"),
  message: z
    .string()
    .min(10, "Pesan harus memiliki minimal 10 karakter")
    .max(2000, "Pesan tidak boleh melebihi 2000 karakter"),
});

export type ContactFormValues = z.infer<typeof contactFormSchema>;
