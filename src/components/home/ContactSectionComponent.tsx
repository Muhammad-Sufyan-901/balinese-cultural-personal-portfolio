import React from "react";
import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "sonner";
import { AlertCircle, RotateCcw, SendHorizonal } from "lucide-react";
import { Box } from "@/components/common/Box";
import { SectionTitle } from "@/components/common/SectionTitle";
import { Container } from "@/components/common/Container";
import { Text } from "@/components/common/Text";
import { Heading } from "@/components/common/Heading";
import { QuickContactCard } from "@/components/home/fragments";
import { Separator } from "@/components/ui/separator";
import { Alert, AlertDescription } from "@/components/ui/alert";
import {
  Field,
  FieldError,
  FieldGroup,
  FieldLabel,
} from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupText,
  InputGroupTextarea,
} from "@/components/ui/input-group";
import { quickContactList } from "@/constants";
import { useRateLimit } from "@/hooks";
import { sendEmail } from "@/services";
import {
  boldWordsToReact,
  contactFormSchema,
  fadeInTransition,
  staggeredContainer,
  textVariantTransition,
  type ContactFormValues,
} from "@/lib";
import { Spinner } from "../ui/spinner";

export default function ContactSectionComponent(): React.JSX.Element {
  const {
    handleSubmit,
    control,
    formState: { isValid, isSubmitting },
    reset,
  } = useForm<ContactFormValues>({
    resolver: zodResolver(contactFormSchema),
    mode: "onBlur",
    defaultValues: {
      first_name: "",
      last_name: "",
      email: "",
      subject: "",
      message: "",
    },
  });

  // Rate limiter: 3 attempts per 5 minutes
  const rateLimit = useRateLimit({
    maxAttempts: 3,
    windowMs: 5 * 60 * 1000, // 5 minutes
    storageKey: "contact_form_rate_limit",
  });

  const onSubmit = async (data: ContactFormValues): Promise<void> => {
    // Check rate limit before submitting
    if (!rateLimit.checkRateLimit()) {
      toast.error("Anda sudah mencapai batas pengiriman pesan.", {
        description: `Silahkan tunggu ${rateLimit.remainingTime} detik sebelum mencoba lagi.`,
        duration: 5000,
      });
      return;
    }

    try {
      const success = await sendEmail(data);

      if (success) {
        rateLimit.incrementAttempt();
        reset();
      }
    } catch (error) {
      console.error("Failed to send email:", error);
      toast.error("Oops...", {
        description:
          "Terjadi kesalahan saat mengirim pesan. Silahkan coba lagi.",
        duration: 5000,
      });
    }
  };

  const formatTime = (seconds: number): string => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, "0")}`;
  };

  return (
    <Box
      as="section"
      id="kontak"
      className="pt-16 lg:pt-30 pb-12"
    >
      {/* ========== CONTACT SECTION TITLE ========== */}
      <SectionTitle title="Kontak" />

      {/* ========== CONTACT SECTION CONTENT ========== */}
      <Container
        as="motion.div"
        maxWidth="xl"
        variants={staggeredContainer(0.1, 0.1)}
        viewport={{ once: true }}
        initial="hidden"
        whileInView="show"
        className="xl:max-w-7xl mt-4 lg:mt-8"
      >
        {/* ========== CONTACT SECTION SUBTITLE & DESCRIPTION ========== */}
        <Box className="flex flex-col gap-2">
          <Heading
            level={4}
            as="motion.h4"
            variants={textVariantTransition(0.4)}
            className="text-primary font-bold mb-1"
          >
            Hubungi Saya
          </Heading>

          <Text
            variant="small"
            as="motion.p"
            variants={textVariantTransition(0.5)}
            className="text-foreground text-base"
          >
            {boldWordsToReact(
              "Jika ada pertanyaan, saran, atau kritik, silakan hubungi saya melalui kontak di bawah ini.",
              ["pertanyaan", "saran", "kritik", "hubungi saya"]
            )}
          </Text>
        </Box>

        {/* ========== CONTACT SECTION QUICK CONTACT CARDS ========== */}
        <Box
          as="motion.div"
          variants={fadeInTransition("right", "spring", 0.2)}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-[90%] lg:w-full mx-auto lg:mx-0 mt-12"
        >
          {quickContactList.map(
            (quickContact, index): React.ReactNode => (
              <Box
                as="motion.div"
                key={`quick-contact-${index}`}
                variants={fadeInTransition("up", "tween", ++index * 0.5, 0.25)}
              >
                <QuickContactCard {...quickContact} />
              </Box>
            )
          )}
        </Box>

        {/* ========== CONTACT SECTION LINE DIVIDER ========== */}
        <Box className="relative my-10 w-[90%] lg:w-full mx-auto lg:mx-0">
          <Separator />
          <Box className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-background px-4">
            <Text className="text-primary text-sm">Atau</Text>
          </Box>
        </Box>

        {/* ========== CONTACT SECTION SUBTITLE & DESCRIPTION ========== */}
        <Box className="flex flex-col gap-2 mb-8">
          <Heading
            level={4}
            as="motion.h4"
            variants={textVariantTransition(0.4)}
            className="text-primary font-bold mb-1"
          >
            Isi Formulir Berikut
          </Heading>

          <Text
            variant="small"
            as="motion.p"
            variants={textVariantTransition(0.5)}
            className="text-foreground text-base"
          >
            {boldWordsToReact(
              "Anda dapat mengirimkan pertanyaan, saran, atau kritik melalui formulir di bawah ini.",
              ["pertanyaan", "saran", "kritik", "hubungi saya"]
            )}
          </Text>
        </Box>

        {/* Rate Limit Warning */}
        {rateLimit.isBlocked && (
          <Alert
            variant="destructive"
            className="w-[90%] lg:w-full mx-auto lg:mx-0 mb-6 border-destructive"
          >
            <AlertCircle className="h-4 w-4" />
            <AlertDescription className="flex items-center gap-2">
              Anda sudah mencapai batas pengiriman pesan. Silahkan tunggu{" "}
              {formatTime(rateLimit.remainingTime)} sebelum mencoba lagi.
            </AlertDescription>
          </Alert>
        )}

        {/* ========== CONTACT SECTION FORM ========== */}
        <Box
          as="motion.div"
          variants={fadeInTransition("up", "tween", 0.5, 0.5)}
          className="w-[90%] lg:w-full mx-auto lg:mx-0"
        >
          <Box
            as="form"
            id="contact-form"
            onSubmit={handleSubmit(onSubmit)}
          >
            <FieldGroup className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Controller
                name="first_name"
                control={control}
                render={({ field, fieldState }): React.ReactElement => (
                  <Field data-invalid={fieldState.invalid}>
                    <FieldLabel htmlFor="contact-form-first-name">
                      Nama Depan{" "}
                      <Box
                        as="span"
                        className="text-destructive"
                      >
                        *
                      </Box>
                    </FieldLabel>
                    <Input
                      {...field}
                      id="contact-form-first-name"
                      aria-invalid={fieldState.invalid}
                      placeholder="Contoh: John"
                      autoComplete="off"
                      className="border-2 border-primary rounded-sm px-4 py-6 focus:ring-2 focus:ring-primary focus:ring-offset-2"
                      required
                    />
                    {fieldState.invalid && (
                      <FieldError errors={[fieldState.error]} />
                    )}
                  </Field>
                )}
              />

              <Controller
                name="last_name"
                control={control}
                render={({ field, fieldState }): React.ReactElement => (
                  <Field data-invalid={fieldState.invalid}>
                    <FieldLabel htmlFor="contact-form-last-name">
                      Nama Belakang{" "}
                      <Box
                        as="span"
                        className="text-destructive"
                      >
                        *
                      </Box>
                    </FieldLabel>
                    <Input
                      {...field}
                      id="contact-form-last-name"
                      aria-invalid={fieldState.invalid}
                      placeholder="Contoh: Doe"
                      autoComplete="off"
                      className="border-2 border-primary rounded-sm px-4 py-6 focus:ring-2 focus:ring-primary focus:ring-offset-2"
                      required
                    />
                    {fieldState.invalid && (
                      <FieldError errors={[fieldState.error]} />
                    )}
                  </Field>
                )}
              />
            </FieldGroup>

            <FieldGroup className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
              <Controller
                name="email"
                control={control}
                render={({ field, fieldState }): React.ReactElement => (
                  <Field data-invalid={fieldState.invalid}>
                    <FieldLabel htmlFor="contact-form-email">
                      Email{" "}
                      <Box
                        as="span"
                        className="text-destructive"
                      >
                        *
                      </Box>
                    </FieldLabel>
                    <Input
                      {...field}
                      id="contact-form-email"
                      aria-invalid={fieldState.invalid}
                      placeholder="Contoh: johndoe@gmail.com"
                      autoComplete="off"
                      className="border-2 border-primary rounded-sm px-4 py-6 focus:ring-2 focus:ring-primary focus:ring-offset-2"
                      required
                    />
                    {fieldState.invalid && (
                      <FieldError errors={[fieldState.error]} />
                    )}
                  </Field>
                )}
              />

              <Controller
                name="subject"
                control={control}
                render={({ field, fieldState }): React.ReactElement => (
                  <Field data-invalid={fieldState.invalid}>
                    <FieldLabel htmlFor="contact-form-subject">
                      Subjek{" "}
                      <Box
                        as="span"
                        className="text-destructive"
                      >
                        *
                      </Box>
                    </FieldLabel>
                    <Input
                      {...field}
                      id="contact-form-subject"
                      aria-invalid={fieldState.invalid}
                      placeholder="Contoh: Hei mari kita bekerja sama!"
                      autoComplete="off"
                      className="border-2 border-primary rounded-sm px-4 py-6 focus:ring-2 focus:ring-primary focus:ring-offset-2"
                      required
                    />
                    {fieldState.invalid && (
                      <FieldError errors={[fieldState.error]} />
                    )}
                  </Field>
                )}
              />
            </FieldGroup>

            <FieldGroup className="mt-8">
              <Controller
                name="message"
                control={control}
                render={({ field, fieldState }): React.ReactElement => (
                  <Field data-invalid={fieldState.invalid}>
                    <FieldLabel htmlFor="contact-form-email">
                      Pesan{" "}
                      <Box
                        as="span"
                        className="text-destructive"
                      >
                        *
                      </Box>
                    </FieldLabel>
                    <InputGroup className="group">
                      <InputGroupTextarea
                        {...field}
                        id="contact-form-message"
                        placeholder="Hai, saya ingin mendiskusikan tentang proyek yang akan kita buat!"
                        rows={20}
                        className="border-2 border-primary rounded-t-sm rounded-b-none border-b-0 min-h-80 focus:ring-2 focus:ring-primary focus:ring-offset-2 resize-none peer data-[invalid=true]:border-destructive focus:data-[invalid=true]:ring-destructive focus:data-[invalid=true]:ring-offset-0"
                        aria-invalid={fieldState.invalid}
                        data-invalid={fieldState.invalid}
                        required
                      />
                      <InputGroupAddon
                        className="border-2 border-primary border-t-0 rounded-b-sm rounded-t-none peer-data-[invalid=true]:border-destructive peer-focus:border-gray-400 peer-focus:data-[invalid=true]:border-gray-400 transition-all"
                        align="block-end"
                      >
                        <InputGroupText className="tabular-nums">
                          {field.value.length}/2000 karakter
                        </InputGroupText>
                      </InputGroupAddon>
                    </InputGroup>
                    {fieldState.invalid && (
                      <FieldError errors={[fieldState.error]} />
                    )}
                  </Field>
                )}
              />
            </FieldGroup>

            <Field
              orientation="horizontal"
              className="mt-8"
            >
              <Button
                type="button"
                variant="destructive"
                onClick={() => reset()}
                size="icon-lg"
                className="px-8 py-4 w-fit"
              >
                Reset <RotateCcw />
              </Button>
              <Button
                type="submit"
                form="contact-form"
                disabled={!isValid || isSubmitting}
                size="icon-lg"
                className="px-8 py-4 w-fit"
              >
                {isSubmitting ? (
                  <Spinner />
                ) : (
                  <React.Fragment>
                    Kirim Pesan <SendHorizonal />
                  </React.Fragment>
                )}
              </Button>
            </Field>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}
