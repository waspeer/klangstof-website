// eslint-disable-next-line unicorn/prevent-abbreviations
interface ImportMetaEnv {
  MODE: 'test' | 'development' | 'production';
  SNOWPACK_PUBLIC_SANITY_PROJECT: string;
  SNOWPACK_PUBLIC_SANITY_DATASET: string;
}

interface ImportMeta {
  env: ImportMetaEnv;
}
