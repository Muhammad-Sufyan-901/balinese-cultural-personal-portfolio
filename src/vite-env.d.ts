/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_PUBLIC_BASE_URL: string;
  // tambahkan env variable lain di sini
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
