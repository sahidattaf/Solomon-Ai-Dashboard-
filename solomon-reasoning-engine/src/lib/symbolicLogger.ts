export type SymbolicLog = {
  timestamp: number;
  level: string;
  message: string;
};

class SymbolicLogger {
  private logs: SymbolicLog[] = [];

  log(level: string, message: string) {
    const entry: SymbolicLog = { timestamp: Date.now(), level, message };
    this.logs.push(entry);
    return entry;
  }

  info(message: string) {
    return this.log('info', message);
  }

  error(message: string) {
    return this.log('error', message);
  }

  getLogs(filter?: Partial<SymbolicLog>): SymbolicLog[] {
    return this.logs.filter((l) => {
      if (filter?.level && l.level !== filter.level) return false;
      if (filter?.message && !l.message.includes(filter.message)) return false;
      return true;
    });
  }

  clear() {
    this.logs = [];
  }

  export(): string {
    return JSON.stringify(this.logs, null, 2);
  }
}

export const symbolicLogger = new SymbolicLogger();
