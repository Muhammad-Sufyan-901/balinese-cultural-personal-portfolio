/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_PUBLIC_BASE_URL: string;
  readonly VITE_PUBLIC_EMAIL_JS_SERVICE_ID: string;
  readonly VITE_PUBLIC_EMAIL_JS_TEMPLATE_ID: string;
  readonly VITE_PUBLIC_EMAIL_JS_PUBLIC_KEY: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
