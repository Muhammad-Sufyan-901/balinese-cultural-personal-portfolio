import React from "react";
import { ArrowRight } from "lucide-react";
import { Box } from "@/components/common/Box";
import { Heading } from "@/components/common/Heading";
import { Text } from "@/components/common/Text";
import { Link } from "@/components/common/Link";
import { Button } from "@/components/ui/button";

type NotFoundPageProps = {
  title?: string;
  description?: string;
  backButtonText?: string;
  backButtonHref?: string;
};

export default function NotFoundPage({
  title = "404 - Halaman Tidak Ditemukan",
  description = "Halaman yang anda tuju tidak ditemukan, silahkan kembali ke halaman beranda melalui tombol dibawah",
  backButtonText = "Kembali ke Beranda",
  backButtonHref = "/",
}: NotFoundPageProps): React.JSX.Element {
  return (
    <Box className="flex flex-col gap-y-6 items-center justify-center min-h-screen">
      <Heading className="text-5xl text-primary font-black">{title}</Heading>
      <Text
        variant="default"
        className="text-center max-w-xl"
      >
        {description}
      </Text>
      <Button
        className="px-8 py-4"
        asChild
      >
        <Link href={backButtonHref}>
          {backButtonText} <ArrowRight />
        </Link>
      </Button>
    </Box>
  );
}
