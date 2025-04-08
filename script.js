import { showNotification } from "./notification.js";

const buttons = [
  { id: "successBtn", type: "success", text: "Well done!" },
  { id: "failBtn", type: "fail", text: "Oh snap! Change a few things up   submitting again." },
  { id: "warningBtn", type: "warning", text: "Warning!" }
];

buttons.forEach(({ id, type, text }) => {
  const btn = document.getElementById(id);
  btn.onclick = () => showNotification(type, text);

  // Стили кнопки
  btn.style.padding = "10px 20px";
  btn.style.border = "none";
  btn.style.borderRadius = "8px";
  btn.style.cursor = "pointer";
  btn.style.fontSize = "16px";
  btn.style.color = "white";
  btn.style.fontWeight = "bold";
  btn.style.transition = "background 0.3s";

  // Цвет и hover
  if (type === "success") {
    btn.style.backgroundColor = "#28a745";
    btn.onmouseover = () => (btn.style.backgroundColor = "#218838");
    btn.onmouseout = () => (btn.style.backgroundColor = "#28a745");
  }

  if (type === "fail") {
    btn.style.backgroundColor = "#dc3545";
    btn.onmouseover = () => (btn.style.backgroundColor = "#c82333");
    btn.onmouseout = () => (btn.style.backgroundColor = "#dc3545");
  }

  if (type === "warning") {
    btn.style.backgroundColor = "#fd7e14";
    btn.onmouseover = () => (btn.style.backgroundColor = "#e96c0a");
    btn.onmouseout = () => (btn.style.backgroundColor = "#fd7e14");
  }
});
