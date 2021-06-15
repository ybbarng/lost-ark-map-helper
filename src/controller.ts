let alwaysOnTop = true;

document.getElementById("alwaysOnTopButton").addEventListener("click", () => {
  alwaysOnTop = !alwaysOnTop;
  electron.setAlwaysOnTop(alwaysOnTop);
});

document
  .getElementById("opacityInput")
  .addEventListener("change", (event: any) => {
    const opacity = event.target.value;
    electron.setOpacity(opacity);
  });
