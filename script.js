const todayClasses = [
  { time: "10:00 AM", mode: "Online", detail: "ENGR 201 – Zoom on Blackboard" },
  { time: "1:00 PM", mode: "In-Person", detail: "CSCI 210 – Room E421" },
  { time: "3:30 PM", mode: "Online", detail: "WLDC 202 – Recorded lecture" }
];

const weekData = [
  { day: "Sunday", mode: "In-person" },
  { day: "Monday", mode: "Online" },
  { day: "Tuesday", mode: "In-person" },
  { day: "Wednesday", mode: "Online" },
  { day: "Thursday", mode: "In-person" }
];

const notifications = [];

function renderToday() {
  const box = document.getElementById("today-list");
  box.innerHTML = "";
  todayClasses.forEach(c => {
    const card = document.createElement("div");
    card.className = "card";

    card.innerHTML = `
      <h3>${c.time} – ${c.mode}</h3>
      <p>${c.detail}</p>
    `;
    box.appendChild(card);
  });
}

function renderWeek() {
  const grid = document.getElementById("week-grid");
  grid.innerHTML = "";

  weekData.forEach(d => {
    const cell = document.createElement("div");
    cell.className = "week-cell " + (d.mode === "Online" ? "online" : "inperson");
    cell.textContent = `${d.day} – ${d.mode}`;
    grid.appendChild(cell);
  });
}

function renderNotifications() {
  const list = document.getElementById("notification-list");
  list.innerHTML = "";

  notifications.forEach(n => {
    const card = document.createElement("div");
    card.className = "card";
    card.textContent = n;
    list.appendChild(card);
  });
}

function generateTestNotification() {
  notifications.unshift("Hybrid update: One of your classes changed mode.");
  renderNotifications();
}

function switchScreen(name, btn) {
  document.querySelectorAll(".screen").forEach(s => s.classList.remove("active"));
  document.getElementById(`screen-${name}`).classList.add("active");

  document.querySelectorAll(".nav-btn").forEach(b => b.classList.remove("active"));
  btn.classList.add("active");
}

function sendScheduleEmail() {
  document.getElementById("email-status").textContent =
    "Email feature not yet added.";
}

document.addEventListener("DOMContentLoaded", () => {
  renderToday();
  renderWeek();
  renderNotifications();
});
