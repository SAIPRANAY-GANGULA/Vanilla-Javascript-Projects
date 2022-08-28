window.addEventListener("keydown", (event) => {
  document.getElementById("key").innerText =
    event.key === " " ? "Space" : event.key;
  document.getElementById("keyCode").innerText = `${event.keyCode}`;
  document.getElementById("code").innerText = event.code;
});
