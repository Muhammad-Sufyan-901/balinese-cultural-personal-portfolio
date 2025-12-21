import React from "react";
import ReactMarkdown from "react-markdown";
import { FaCalendarAlt } from "react-icons/fa";
import { Box } from "@/components/common/Box";
import { Container } from "@/components/common/Container";
import { Heading } from "@/components/common/Heading";
import { Text } from "@/components/common/Text";
import { Link } from "@/components/common/Link";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";
import { Image } from "@/components/common/Image";
import {
  AuthorSocialMedia,
  OtherArticleCard,
} from "@/components/article/fragments";
import {
  articleCategories,
  shareToSocialMediaList,
  socialMediaList,
} from "@/constants";
import { cn, fadeInTransition, staggeredContainer, truncateList } from "@/lib";
import { getArticleBySlug, getOtherArticlesBySlug } from "@/services";
import { NotFoundPage } from "@/pages";
import type { SocialMedia } from "@/types";

type DetailArticleSectionComponentProps = {
  slug: string;
};

export default function DetailArticleSectionComponent({
  slug,
}: DetailArticleSectionComponentProps): React.JSX.Element {
  const article = getArticleBySlug(slug);
  const otherArticles = getOtherArticlesBySlug(slug);

  if (!article) {
    return (
      <NotFoundPage
        title="404 - Artikel Tidak Ditemukan"
        description="Artikel yang anda tuju tidak ditemukan, silahkan kembali ke halaman beranda melalui tombol dibawah"
      />
    );
  }

  const { title, thumbnailImage, description, categories, uploadedAt, author } =
    article;
  const { name, avatar } = author;

  const truncatedSocialMediaList: SocialMedia[] = truncateList(
    socialMediaList,
    3
  );

  const formattedUploadedAt: string = uploadedAt.toLocaleString("id-ID", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  return (
    <Container
      as="section"
      id="artikel"
      maxWidth="xl"
      className="max-w-7xl h-full mx-auto py-24 px-12 pt-30"
    >
      {/* Detail Blog Page Section Container */}
      <Box
        as="motion.div"
        variants={staggeredContainer(0.1, 0.1)}
        viewport={{ once: true }}
        whileInView="show"
        initial="hidden"
        className="grid grid-cols-1 lg:grid-cols-[1fr_30%] gap-0 lg:gap-12 xl:gap-16"
      >
        {/* Detail Blog Page Section Content */}
        <Box as="main">
          <Box
            as="motion.nav"
            variants={fadeInTransition("up", "tween", 0, 1)}
            className="my-4"
          >
            <Breadcrumb>
              <BreadcrumbList>
                <BreadcrumbItem>
                  <BreadcrumbLink asChild>
                    <Link
                      href="/"
                      className="text-foreground font-medium hover:text-primary"
                    >
                      Beranda
                    </Link>
                  </BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator />
                <BreadcrumbItem>
                  <BreadcrumbLink asChild>
                    <Link
                      href="/artikel"
                      className="text-foreground font-medium hover:text-primary"
                    >
                      Artikel
                    </Link>
                  </BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator />
                <BreadcrumbItem>
                  <BreadcrumbPage className="text-muted-foreground font-medium">
                    Detail Artikel
                  </BreadcrumbPage>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
          </Box>

          {/* Detail Blog Page Section Blog Title */}
          <Box
            as="motion.div"
            variants={fadeInTransition("up", "tween", 0.1, 1)}
          >
            <Heading
              level={1}
              className="my-4 text-4xl font-bold"
            >
              {title}
            </Heading>
          </Box>

          {/* Detail Blog Page Section Blog Upload Date */}
          <Box
            as="motion.div"
            variants={fadeInTransition("up", "tween", 0.2, 1)}
            className="flex items-center gap-2"
          >
            <FaCalendarAlt className="text-primary" />
            <Text className="text-muted-foreground">{formattedUploadedAt}</Text>
          </Box>

          {/* Detail Blog Page Section Blog Thumbnail Image */}
          <Box
            as="motion.div"
            variants={fadeInTransition("up", "tween", 0.3, 1)}
            className="my-8 rounded-lg overflow-hidden"
          >
            <Image
              src={thumbnailImage}
              alt="Blog Thumbnail Image"
              className="w-full h-64 md:h-80 lg:h-96 object-cover"
            />
          </Box>

          {/* Detail Blog Page Section Blog Description */}
          <Box
            as="motion.div"
            variants={fadeInTransition("up", "tween", 0.4, 1)}
          >
            <ReactMarkdown
              // className="prose prose-lg max-w-none"
              components={{
                h1: ({ ...props }) => (
                  <h1
                    className="text-4xl font-bold mb-6 mt-8 text-gray-900"
                    {...props}
                  />
                ),
                h2: ({ ...props }) => (
                  <h2
                    className="text-3xl font-bold mb-5 mt-8 text-gray-800"
                    {...props}
                  />
                ),
                h3: ({ ...props }) => (
                  <h3
                    className="text-2xl font-semibold mb-4 mt-6 text-gray-800"
                    {...props}
                  />
                ),
                p: ({ ...props }) => (
                  <p
                    className="mb-6 leading-relaxed text-gray-700 text-lg"
                    {...props}
                  />
                ),
                ul: ({ ...props }) => (
                  <ul
                    className="mb-6 ml-6 space-y-3 list-disc"
                    {...props}
                  />
                ),
                ol: ({ ...props }) => (
                  <ol
                    className="mb-6 ml-6 space-y-3 list-decimal"
                    {...props}
                  />
                ),
                li: ({ ...props }) => (
                  <li
                    className="leading-relaxed text-gray-700"
                    {...props}
                  />
                ),
                strong: ({ ...props }) => (
                  <strong
                    className="font-bold text-gray-900"
                    {...props}
                  />
                ),
                code: ({
                  inline,
                  ...props
                }: { inline?: boolean } & React.HTMLAttributes<HTMLElement>) =>
                  inline ? (
                    <code
                      className="bg-gray-100 text-red-600 px-2 py-1 rounded text-sm font-mono"
                      {...props}
                    />
                  ) : (
                    <code
                      className="block bg-gray-100 p-4 rounded-lg overflow-x-auto text-sm font-mono"
                      {...props}
                    />
                  ),
              }}
            >
              {description}
            </ReactMarkdown>
          </Box>

          {/* Detail Blog Page Section Categories & Share Blog */}
          <Box
            as="motion.div"
            variants={fadeInTransition("up", "tween", 0.4, 1)}
            className="flex flex-col md:flex-row justify-between my-4 lg:my-8 xl:my-12"
          >
            <Box>
              <Heading
                level={4}
                className="text-xl font-semibold"
              >
                Tag
              </Heading>

              <Box className="flex flex-wrap items-center gap-2 my-5">
                {categories.map(
                  (category, index): React.ReactNode => (
                    <Badge
                      key={`${category.name} - ${index}`}
                      variant="secondary"
                      className="flex items-center gap-2 py-1 dark:bg-input"
                    >
                      <Text className={cn("text-xs", category.color)}>
                        #{category.name}
                      </Text>
                    </Badge>
                  )
                )}
              </Box>
            </Box>

            <Box>
              <Heading
                level={4}
                className="text-xl font-semibold text-start lg:text-end"
              >
                Bagikan Artikel
              </Heading>

              <Box className="flex items-center gap-4 my-3">
                {shareToSocialMediaList.map(
                  ({ SocialMediaIcon, link }, index): React.ReactNode => (
                    <Link
                      href={`${link}${slug}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      key={`share-to-social-media-${index}`}
                    >
                      <Box className="p-4 rounded-full transition-all duration-300 shadow-md hover:text-primary hover:shadow-lg">
                        <SocialMediaIcon size="1.15rem" />
                      </Box>
                    </Link>
                  )
                )}
              </Box>
            </Box>
          </Box>
        </Box>

        {/* Detail Blog Page Section Sidebar */}
        <Box
          as="motion.aside"
          variants={fadeInTransition("left", "tween", 0, 1)}
          className="hidden lg:block shadow-lg rounded-xl px-8 py-12 h-fit"
        >
          {/* Detail Blog Page Section Other Blog */}
          <Heading
            level={4}
            className="text-xl font-semibold"
          >
            Artikel Lainnya
          </Heading>

          <Box className="flex flex-col gap-8 my-8">
            {otherArticles.map(
              (otherArticle, index): React.ReactNode => (
                <OtherArticleCard
                  key={index}
                  {...otherArticle}
                />
              )
            )}
          </Box>

          <Separator className="my-8" />

          {/* Detail Blog Page Section Categories */}
          <Heading
            level={4}
            className="text-xl font-semibold"
          >
            Semua Kategori
          </Heading>

          <Box className="flex flex-wrap gap-4 my-8">
            {articleCategories.map(
              (articleCategory, index): React.ReactNode => (
                <Badge
                  key={`${articleCategory.name} - ${index}`}
                  variant="secondary"
                  className="flex items-center gap-2 py-1 dark:bg-input"
                >
                  <Text className={cn("text-xs", articleCategory.color)}>
                    #{articleCategory.name}
                  </Text>
                </Badge>
              )
            )}
          </Box>

          <Separator className="my-8" />

          {/* Detail Blog Page Section Blog Author */}
          <Heading
            level={4}
            className="text-xl font-semibold"
          >
            Author
          </Heading>

          <Box className="flex gap-4 mt-4">
            <Avatar className="h-12 w-12 rounded-full object-cover">
              <AvatarImage
                src={avatar}
                alt={`${name} Avatar`}
              />
              <AvatarFallback>ID</AvatarFallback>
            </Avatar>

            <Box>
              <Text className="font-semibold mb-2">{name}</Text>
              <Box className="flex items-center gap-4">
                {truncatedSocialMediaList.map(
                  (socialMedia, index): React.ReactNode => (
                    <AuthorSocialMedia
                      key={index}
                      {...socialMedia}
                    />
                  )
                )}
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </Container>
  );
}
