import { ipcRenderer, contextBridge } from "electron";
import { IpcRequest } from "./ipc";

contextBridge.exposeInMainWorld("electron", {
  setAlwaysOnTop: (alwaysOnTop: boolean) => {
    const request: IpcRequest = {
      method: "alwaysOnTop",
      params: {
        alwaysOnTop,
      },
    };
    ipcRenderer.send("asynchronous-message", request);
  },
});
