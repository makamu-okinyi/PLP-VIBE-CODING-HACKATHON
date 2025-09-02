interface Env {
  DB: D1Database;
  OPENAI_API_KEY: string;
  MOCHA_USERS_SERVICE_API_KEY: string;
  MOCHA_USERS_SERVICE_API_URL: string;
  PAYSTACK_SECRET_KEY: string;
  PAYSTACK_PUBLIC_KEY: string;
}

declare function fetch(input: RequestInfo, init?: RequestInit): Promise<Response>;
