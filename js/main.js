import { initTheme } from "./theme.js";

const GREETINGS = {
  morning: "Buenos días",
  afternoon: "Buenas tardes",
  night: "Buenas noches",
};

const getGreeting = (date = new Date()) => {
  const hour = date.getHours();
  if (hour >= 6 && hour < 13) return GREETINGS.morning;
  if (hour >= 13 && hour < 20) return GREETINGS.afternoon;
  return GREETINGS.night;
};

const renderGreeting = () => {
  const el = document.getElementById("greeting");
  if (el) el.textContent = getGreeting();
};

const renderYear = () => {
  const el = document.getElementById("year");
  if (el) el.textContent = String(new Date().getFullYear());
};

const init = () => {
  renderGreeting();
  renderYear();
  initTheme();
};

init();
