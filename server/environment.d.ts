declare namespace NodeJS {
  export interface ProcessEnv {
    PORT: string;
    SQL_DIALECT?: string;
    DATABASE_HOST?: string;
    DATABASE_PORT?: string;
    DATABASE_USER?: string;
    DATABASE_PASSWORD?: string;
    DATABASE_NAME?: string;
  }
}
