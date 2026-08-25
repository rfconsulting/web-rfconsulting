export interface Environment {
  readonly nodeEnv: "development" | "test" | "production";
  readonly port: number;
  readonly publicOrigin: string;
}

const validEnvironments = new Set(["development", "test", "production"]);

export function getEnvironment(source: NodeJS.ProcessEnv = process.env): Environment {
  const requestedEnvironment = source.NODE_ENV ?? "development";

  if (!validEnvironments.has(requestedEnvironment)) {
    throw new Error(`NODE_ENV no soportado: ${requestedEnvironment}`);
  }

  const port = Number(source.PORT ?? 3000);
  if (!Number.isInteger(port) || port < 1 || port > 65_535) {
    throw new Error("PORT debe ser un entero entre 1 y 65535");
  }

  const publicOrigin = source.PUBLIC_ORIGIN ?? `http://localhost:${port}`;
  const parsedOrigin = new URL(publicOrigin);

  return {
    nodeEnv: requestedEnvironment as Environment["nodeEnv"],
    port,
    publicOrigin: parsedOrigin.origin
  };
}

