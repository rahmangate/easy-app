type LogLevel = "info" | "warn" | "error" | "debug";

class Logger {
  private static isDevelopment = process.env.NODE_ENV === "development";

  private static formatMessage(level: LogLevel, message: string): string {
    const timestamp = new Date().toISOString();
    return `[${timestamp}] [${level.toUpperCase()}]: ${message}`;
  }

  public static info(message: string, ...optionalParams: unknown[]): void {
    if (this.isDevelopment) {
      console.info(this.formatMessage("info", message), ...optionalParams);
    }
  }

  public static warn(message: string, ...optionalParams: unknown[]): void {
    if (this.isDevelopment) {
      console.warn(this.formatMessage("warn", message), ...optionalParams);
    }
  }

  public static error(message: string, ...optionalParams: unknown[]): void {
    console.error(this.formatMessage("error", message), ...optionalParams);
  }

  public static debug(message: string, ...optionalParams: unknown[]): void {
    if (this.isDevelopment) {
      console.debug(this.formatMessage("debug", message), ...optionalParams);
    }
  }
}

export default Logger;
