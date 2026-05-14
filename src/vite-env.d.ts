/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_EMAIL: string;
  readonly VITE_PHONE: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
