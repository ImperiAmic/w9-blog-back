declare namespace NodeJS {
  interface ProcessEnv {
    PORT?: number;
    DATABASE_CONNECTION_STRING: string;
    ALLOWED_ORIGINS: string;
  }
}
