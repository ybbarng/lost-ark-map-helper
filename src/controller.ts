let alwaysOnTop = true;

document.getElementById("alwaysOnTopButton").addEventListener("click", () => {
  console.log("clicked!");
  alwaysOnTop = !alwaysOnTop;
  (window as any).electron.setAlwaysOnTop(alwaysOnTop);
});
