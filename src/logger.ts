class Logger {
  debugModeEnabled: boolean;

  constructor(debugModeEnabled?: boolean) {
    this.debugModeEnabled = !!debugModeEnabled;
  }

  debug(...args: any) {
    if (!this.debugModeEnabled) {
      return;
    }

    console.debug('[@mqrcups/browser]', ...args);
  }

  log(...args: any) {
    if (!this.debugModeEnabled) {
      return;
    }

    console.log('[@mqrcups/browser]', ...args);
  }

  info(...args: any) {
    console.info('[@mqrcups/browser]', ...args);
  }

  warn(...args: any) {
    console.warn('[@mqrcups/browser]', ...args);
  }

  error(...args: any) {
    console.error('[@mqrcups/browser]', ...args);
  }
}

export default Logger;
