declare global {
  interface Window {
    electron: {
      setAlwaysOnTop(alwaysOnTop: boolean): void;
    };
  }
}
