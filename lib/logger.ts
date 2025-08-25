const isDev = process.env.NODE_ENV === "development";

export const log = {
  info: (...args: any[]) => {
    if (isDev) console.log("[INFO]", ...args);
  },
  warn: (...args: any[]) => {
    if (isDev) console.warn("[WARN]", ...args);
  },
  error: (...args: any[]) => {
    console.error("[ERROR]", ...args);
  },
};
