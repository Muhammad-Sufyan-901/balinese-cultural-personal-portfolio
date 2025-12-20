import { icons, images } from "@/constants";
import type { Portfolio } from "@/types";

export const portfolioList: Portfolio[] = [
  {
    title: "KNA Landing Page",
    imageThumbnail: images.projects.project17,
    description:
      "KNA (Keanu Abimanyu Construction) Landing Page adalah sebuah website yang saya buat menggunakan HTML, CSS, JavaScript, dan Tailwind CSS. Website ini menampilkan informasi mengenai perusahaan konstruksi yang bergerak di bidang pembangunan, renovasi, dan perawatan bangunan. Selain itu, website ini juga dilengkapi dengan fitur portofolio, testimoni, dan konsultasi untuk memudahkan pengunjung dalam mengetahui kualitas dan keunggulan perusahaan.",
    livePreviewURL: null,
    repositoryURL: null,
    techStack: [
      { tech: "HTML", logo: icons.html },
      { tech: "CSS", logo: icons.css },
      { tech: "Tailwind", logo: icons.tailwind },
      { tech: "JavaScript", logo: icons.javascript },
    ],
  },
  {
    title: "KHASS E-Ticketing",
    imageThumbnail: images.projects.project16,
    description:
      "KHASS adalah website e-ticketing untuk penjualan tiket teater dan promosi pertunjukan teater yang dikembangkan menggunakan Next JS, Tailwind CSS, dan Express JS bersama tim. Website ini memungkinkan pengguna untuk menemukan dan membeli tiket berbagai pertunjukan teater, serta menyediakan informasi lengkap mengenai jadwal, harga, dan ketersediaan tiket. KHASS bertujuan untuk menghubungkan penonton dengan pertunjukan teater melalui platform online yang mudah digunakan.",
    livePreviewURL: "https://khass.my.id/",
    repositoryURL: null,
    techStack: [
      { tech: "Next JS", logo: icons.nextJs },
      { tech: "Tailwind", logo: icons.tailwind },
      { tech: "Express JS", logo: icons.express },
    ],
  },
  {
    title: "Portfolio Pribadi",
    imageThumbnail: images.projects.project1,
    description:
      "Ini adalah proyek personal branding yang saya buat menggunakan Next JS, Tailwind CSS, dan Framer Motion. Website ini menampilkan informasi mengenai skill, pencapaian, serta kepribadian saya. Terdapat tujuh section utama yaitu Home, About, Experiences, Services, Portfolio, Articles, dan Contact. Website ini dirancang agar responsif, interaktif, dan menarik untuk membangun koneksi dengan klien, recruiter, maupun kolaborator.",
    livePreviewURL: "https://muhammad-sufyan-portfolio.vercel.app/",
    repositoryURL: "https://github.com/Muhammad-Sufyan-901/personal-portfolio",
    techStack: [
      { tech: "Next JS", logo: icons.nextJs },
      { tech: "Tailwind", logo: icons.tailwind },
      { tech: "Framer Motion", logo: icons.framerMotion },
    ],
  },
  {
    title: "Phantom Landing Page",
    imageThumbnail: images.projects.project2,
    description:
      "Phantom adalah website landing page yang dibuat menggunakan HTML, CSS, dan JavaScript. Website ini menampilkan informasi mengenai produk smartphone dengan brand Phantom, termasuk fitur, spesifikasi, harga, serta ulasan pelanggan. Website ini bertujuan untuk menarik minat calon pembeli dan memberikan informasi produk secara jelas.",
    livePreviewURL: "https://lomba-web-design.vercel.app/",
    repositoryURL: "https://github.com/Muhammad-Sufyan-901/lomba-web-design",
    techStack: [
      { tech: "HTML", logo: icons.html },
      { tech: "CSS", logo: icons.css },
      { tech: "JavaScript", logo: icons.javascript },
    ],
  },
  {
    title: "Petabyte Landing Page",
    imageThumbnail: images.projects.project3,
    description:
      "Petabyte Landing Page adalah website yang dibuat menggunakan HTML, CSS, dan Bootstrap. Website ini menampilkan informasi mengenai software house di bidang edukasi yang menyediakan layanan pembuatan aplikasi, website, dan game edukasi. Website ini juga dilengkapi dengan fitur portofolio, testimoni, dan konsultasi.",
    livePreviewURL: "https://petabyte-landing-page.vercel.app/",
    repositoryURL:
      "https://github.com/Muhammad-Sufyan-901/petabyte-landing-page",
    techStack: [
      { tech: "HTML", logo: icons.html },
      { tech: "CSS", logo: icons.css },
      { tech: "Bootstrap", logo: icons.bootstrap },
      { tech: "JavaScript", logo: icons.javascript },
    ],
  },
  {
    title: "HooBank Landing Page",
    imageThumbnail: images.projects.project4,
    description:
      "HooBank adalah website landing page yang dibuat menggunakan React JS, Tailwind CSS, dan Vite. Website ini menampilkan layanan digital finansial seperti pembayaran, transfer, dan investasi online. Website ini menonjolkan kemudahan, keamanan, dan kenyamanan dalam mengelola keuangan secara digital.",
    livePreviewURL: "https://hoobank-landing-page-rouge.vercel.app/",
    repositoryURL:
      "https://github.com/Muhammad-Sufyan-901/hoobank-landing-page",
    techStack: [
      { tech: "React JS", logo: icons.react },
      { tech: "Tailwind", logo: icons.tailwind },
      { tech: "Vite", logo: icons.vite },
    ],
  },
  {
    title: "OurTube",
    imageThumbnail: images.projects.project5,
    description:
      "OurTube adalah website yang dibuat menggunakan React JS dan Material UI sebagai proyek pembelajaran. Website ini merupakan tiruan YouTube yang memungkinkan pengguna untuk mencari dan menonton video dari berbagai kategori. Proyek ini bertujuan untuk menunjukkan kemampuan saya dalam membangun aplikasi web yang kompleks.",
    livePreviewURL: "https://ourtube-ochre.vercel.app/",
    repositoryURL: "https://github.com/Muhammad-Sufyan-901/ourtube",
    techStack: [
      { tech: "React JS", logo: icons.react },
      { tech: "Material UI", logo: icons.materialUi },
    ],
  },
  {
    title: "Twitter Clone",
    imageThumbnail: images.projects.project6,
    description:
      "Twitter Clone adalah website yang dibuat menggunakan Next JS, TypeScript, dan Tailwind CSS untuk keperluan pembelajaran. Website ini memungkinkan pengguna untuk membuat, menyukai, dan me-retweet postingan, serta dilengkapi dengan fitur autentikasi.",
    livePreviewURL: "https://twitter-web-clone-mauve.vercel.app/",
    repositoryURL: "https://github.com/Muhammad-Sufyan-901/twitter-web-clone",
    techStack: [
      { tech: "Next JS", logo: icons.nextJs },
      { tech: "Tailwind", logo: icons.tailwind },
      { tech: "TypeScript", logo: icons.typescript },
    ],
  },
  {
    title: "YoDoo",
    imageThumbnail: images.projects.project7,
    description:
      "YoDoo adalah aplikasi website to-do list sederhana yang dibuat menggunakan React JS. Website ini memungkinkan pengguna untuk menambah, mengedit, menghapus, dan menandai tugas yang telah selesai.",
    livePreviewURL: "https://yodoo.vercel.app/",
    repositoryURL: "https://github.com/Muhammad-Sufyan-901/yodoo",
    techStack: [{ tech: "React JS", logo: icons.react }],
  },
  {
    title: "Crappo Landing Page",
    imageThumbnail: images.projects.project8,
    description:
      "Crappo adalah website landing page tentang investasi cryptocurrency yang dibuat menggunakan React JS dan Tailwind CSS. Website ini menampilkan informasi berbagai aset crypto serta bertujuan memberikan gambaran platform investasi yang modern dan informatif.",
    livePreviewURL: "https://crappo-landing-page-eight.vercel.app/",
    repositoryURL: "https://github.com/Muhammad-Sufyan-901/crappo-landing-page",
    techStack: [
      { tech: "React JS", logo: icons.react },
      { tech: "Tailwind", logo: icons.tailwind },
    ],
  },
  {
    title: "Geritch Landing Page",
    imageThumbnail: images.projects.project9,
    description:
      "Geritch adalah website landing page restoran mewah yang dibuat menggunakan React JS. Website ini menampilkan menu, galeri, dan ulasan pelanggan untuk menarik minat pengunjung.",
    livePreviewURL: "https://geritch-restaurant.vercel.app/",
    repositoryURL: "https://github.com/Muhammad-Sufyan-901/geritch-restaurant",
    techStack: [{ tech: "React JS", logo: icons.react }],
  },
  {
    title: "XPense Landing Page",
    imageThumbnail: images.projects.project10,
    description:
      "XPense adalah website landing page yang dibuat menggunakan React JS dan Tailwind CSS. Website ini menampilkan layanan cloud server yang memungkinkan pengguna memilih, menyesuaikan, dan mengelola server sesuai kebutuhan dan anggaran mereka. Website ini juga menampilkan fitur billing, support, dan analytics.",
    livePreviewURL: "https://xpense-landing-page-kappa.vercel.app/",
    repositoryURL: "https://github.com/Muhammad-Sufyan-901/xpense-landing-page",
    techStack: [
      { tech: "React JS", logo: icons.react },
      { tech: "Tailwind", logo: icons.tailwind },
    ],
  },
  {
    title: "Elecar Landing Page",
    imageThumbnail: images.projects.project11,
    description:
      "Elecar adalah website landing page yang dibuat menggunakan HTML, CSS, dan JavaScript. Website ini menampilkan informasi penjualan mobil listrik yang ramah lingkungan, efisien, dan modern, lengkap dengan fitur testimonial, FAQ, dan kontak.",
    livePreviewURL: "https://elecar-landing-page.vercel.app/",
    repositoryURL: "https://github.com/Muhammad-Sufyan-901/elecar-landing-page",
    techStack: [
      { tech: "HTML", logo: icons.html },
      { tech: "CSS", logo: icons.css },
      { tech: "JavaScript", logo: icons.javascript },
    ],
  },
  {
    title: "Coffee Landing Page",
    imageThumbnail: images.projects.project12,
    description:
      "Coffee adalah website landing page kafe yang dibuat menggunakan HTML, CSS, dan JavaScript. Website ini menampilkan menu, lokasi, jam operasional, serta bertujuan menarik pelanggan dengan tampilan yang sederhana dan menarik.",
    livePreviewURL: "https://coffee-landing-page-xi.vercel.app/",
    repositoryURL: "https://github.com/Muhammad-Sufyan-901/coffee-landing-page",
    techStack: [
      { tech: "HTML", logo: icons.html },
      { tech: "CSS", logo: icons.css },
      { tech: "JavaScript", logo: icons.javascript },
    ],
  },
  {
    title: "Holux Landing Page",
    imageThumbnail: images.projects.project13,
    description:
      "Holux adalah website landing page properti yang dibuat menggunakan HTML, CSS, dan JavaScript. Website ini memungkinkan pengguna melihat, memfilter, dan menghubungi agen terkait properti seperti rumah, apartemen, dan tanah.",
    livePreviewURL: "https://holux-landing-page.vercel.app/",
    repositoryURL: "https://github.com/Muhammad-Sufyan-901/holux-landing-page",
    techStack: [
      { tech: "HTML", logo: icons.html },
      { tech: "CSS", logo: icons.css },
      { tech: "JavaScript", logo: icons.javascript },
    ],
  },
  {
    title: "Shop Landing Page",
    imageThumbnail: images.projects.project14,
    description:
      "Shop adalah website landing page toko fashion yang dibuat menggunakan HTML, CSS, dan JavaScript. Website ini menampilkan produk pakaian, aksesoris, dan sepatu, serta memberikan pengalaman belanja yang menarik.",
    livePreviewURL: "https://shop-landing-page-six.vercel.app/",
    repositoryURL: "https://github.com/Muhammad-Sufyan-901/shop-landing-page",
    techStack: [
      { tech: "HTML", logo: icons.html },
      { tech: "CSS", logo: icons.css },
      { tech: "JavaScript", logo: icons.javascript },
    ],
  },
  {
    title: "Berotot Landing Page",
    imageThumbnail: images.projects.project15,
    description:
      "Berotot adalah website landing page gym yang dibuat menggunakan HTML, CSS, dan JavaScript. Website ini menampilkan program kebugaran, fasilitas gym, jadwal latihan, serta paket keanggotaan untuk menarik dan memotivasi calon member.",
    livePreviewURL: "https://berotot-landing-page.vercel.app/",
    repositoryURL:
      "https://github.com/Muhammad-Sufyan-901/berotot-landing-page",
    techStack: [
      { tech: "HTML", logo: icons.html },
      { tech: "CSS", logo: icons.css },
      { tech: "JavaScript", logo: icons.javascript },
    ],
  },
] as const;
