import androidStudioIcon from "@/assets/icons/android studio.svg";
import angularIcon from "@/assets/icons/angular.svg";
import bootstrapIcon from "@/assets/icons/bootstrap.svg";
import codeigniterIcon from "@/assets/icons/codeigniter.svg";
import cssIcon from "@/assets/icons/css.svg";
import dartIcon from "@/assets/icons/dart.svg";
import docsIcon from "@/assets/icons/docs.svg";
import drawioIcon from "@/assets/icons/drawio.svg";
import expressIcon from "@/assets/icons/express.svg";
import figmaIcon from "@/assets/icons/figma.svg";
import firebaseIcon from "@/assets/icons/firebase.svg";
import flutterIcon from "@/assets/icons/flutter.svg";
import framerMotionIcon from "@/assets/icons/framer motion.svg";
import gitIcon from "@/assets/icons/git.svg";
import githubIcon from "@/assets/icons/github.svg";
import gmailIcon from "@/assets/icons/gmail.svg";
import graphqlIcon from "@/assets/icons/graphql.svg";
import htmlIcon from "@/assets/icons/html.svg";
import javascriptIcon from "@/assets/icons/javascript.svg";
import jiraIcon from "@/assets/icons/jira.svg";
import laravelIcon from "@/assets/icons/laravel.svg";
import materialUiIcon from "@/assets/icons/material ui.svg";
import mysqlIcon from "@/assets/icons/mysql.svg";
import nextJsIcon from "@/assets/icons/next js.svg";
import nodeJsIcon from "@/assets/icons/node js.svg";
import phpIcon from "@/assets/icons/php.svg";
import reactNativeIcon from "@/assets/icons/react native.svg";
import reactIcon from "@/assets/icons/react.svg";
import tailwindIcon from "@/assets/icons/tailwind.svg";
import telegramIcon from "@/assets/icons/telegram.svg";
import typescriptIcon from "@/assets/icons/typescript.svg";
import visualStudioCodeIcon from "@/assets/icons/visual studio code.svg";
import viteIcon from "@/assets/icons/vite.svg";
import vueIcon from "@/assets/icons/vue.svg";
import whatsappIcon from "@/assets/icons/whatsapp.svg";
import xamppIcon from "@/assets/icons/xampp.svg";
import leftGapuraIcon from "@/assets/icons/left gapura.svg";
import rightGapuraIcon from "@/assets/icons/right gapura.svg";
import topBorder from "@/assets/icons/top border.svg";
import bottomBorder from "@/assets/icons/bottom border.svg";
import titleOrnament from "@/assets/icons/title ornament.svg";
import sectionOrnament from "@/assets/icons/section ornament.svg";
import arrow from "@/assets/icons/arrow.svg";

export const icons = {
  // Mobile & IDE
  androidStudio: androidStudioIcon,
  visualStudioCode: visualStudioCodeIcon,

  // Frontend Frameworks
  angular: angularIcon,
  react: reactIcon,
  reactNative: reactNativeIcon,
  vue: vueIcon,
  nextJs: nextJsIcon,

  // UI Libraries & Tools
  bootstrap: bootstrapIcon,
  tailwind: tailwindIcon,
  materialUi: materialUiIcon,
  figma: figmaIcon,
  framerMotion: framerMotionIcon,
  drawio: drawioIcon,

  // Languages
  javascript: javascriptIcon,
  typescript: typescriptIcon,
  dart: dartIcon,
  php: phpIcon,
  html: htmlIcon,
  css: cssIcon,

  // Backend & APIs
  nodeJs: nodeJsIcon,
  express: expressIcon,
  laravel: laravelIcon,
  codeigniter: codeigniterIcon,
  graphql: graphqlIcon,

  // Database & Services
  firebase: firebaseIcon,
  mysql: mysqlIcon,

  // Mobile Development
  flutter: flutterIcon,

  // Build Tools
  vite: viteIcon,

  // Database Tools
  xampp: xamppIcon,

  // Version Control & Project Management
  git: gitIcon,
  github: githubIcon,
  jira: jiraIcon,

  // Communication
  gmail: gmailIcon,
  telegram: telegramIcon,
  whatsapp: whatsappIcon,

  // Documentation
  docs: docsIcon,

  // Decorative
  leftGapura: leftGapuraIcon,
  rightGapura: rightGapuraIcon,
  topBorder: topBorder,
  bottomBorder: bottomBorder,
  titleOrnament: titleOrnament,
  sectionOrnament: sectionOrnament,
  arrow: arrow,
} as const;

// Grouped icons for easier categorization
export const techStackIcons = {
  frontend: {
    frameworks: [
      { name: "React", icon: icons.react },
      { name: "Next.js", icon: icons.nextJs },
      { name: "Vue", icon: icons.vue },
      { name: "Angular", icon: icons.angular },
    ],
    styling: [
      { name: "Tailwind CSS", icon: icons.tailwind },
      { name: "Bootstrap", icon: icons.bootstrap },
      { name: "Material UI", icon: icons.materialUi },
      { name: "CSS", icon: icons.css },
    ],
    languages: [
      { name: "JavaScript", icon: icons.javascript },
      { name: "TypeScript", icon: icons.typescript },
      { name: "HTML", icon: icons.html },
    ],
  },
  backend: {
    runtime: [
      { name: "Node.js", icon: icons.nodeJs },
      { name: "PHP", icon: icons.php },
    ],
    frameworks: [
      { name: "Express", icon: icons.express },
      { name: "Laravel", icon: icons.laravel },
      { name: "CodeIgniter", icon: icons.codeigniter },
    ],
    database: [
      { name: "MySQL", icon: icons.mysql },
      { name: "Firebase", icon: icons.firebase },
    ],
  },
  mobile: {
    frameworks: [
      { name: "Flutter", icon: icons.flutter },
      { name: "React Native", icon: icons.reactNative },
    ],
    languages: [{ name: "Dart", icon: icons.dart }],
  },
  tools: {
    ide: [
      { name: "VS Code", icon: icons.visualStudioCode },
      { name: "Android Studio", icon: icons.androidStudio },
    ],
    design: [{ name: "Figma", icon: icons.figma }],
    versionControl: [
      { name: "Git", icon: icons.git },
      { name: "GitHub", icon: icons.github },
    ],
    projectManagement: [{ name: "Jira", icon: icons.jira }],
    buildTools: [
      { name: "Vite", icon: icons.vite },
      { name: "XAMPP", icon: icons.xampp },
    ],
  },
  communication: [
    { name: "Gmail", icon: icons.gmail },
    { name: "Telegram", icon: icons.telegram },
    { name: "WhatsApp", icon: icons.whatsapp },
  ],
};

// Type-safe keys
export type IconKey = keyof typeof icons;
export type TechCategory = keyof typeof techStackIcons;
