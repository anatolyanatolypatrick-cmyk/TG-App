const routes = {
  home: "Главная",
  algorithms: "Алгоритмы",
  cycles: "Мои циклы",
  profile: "Профиль",
  help: "Помощь",
  notifications: "Уведомления",
  aurum: "Aurum Prime",
};

const icons = {
  cube: `<svg viewBox="0 0 48 48" fill="none" aria-hidden="true"><path d="M24 7 39 14.3 24 21.5 9 14.3 24 7Z" fill="currentColor"/><path d="M11 18.6v13.2L22 37V24.1L11 18.6Z" fill="currentColor"/><path d="M37 18.6v13.2L26 37V24.1l11-5.5Z" fill="currentColor"/><path d="M7 12.2 24 21l17-8.8M24 37v5" stroke="currentColor" stroke-width="3" stroke-linecap="round"/></svg>`,
  bell: `<svg viewBox="0 0 48 48" fill="none" aria-hidden="true"><path d="M15 21.5c0-6.1 3.9-11 9-11s9 4.9 9 11v7.2l3.6 4.3c1 1.2.2 3-1.4 3H12.8c-1.6 0-2.4-1.8-1.4-3l3.6-4.3v-7.2Z" stroke="currentColor" stroke-width="3" stroke-linejoin="round"/><path d="M21 40h6" stroke="currentColor" stroke-width="3" stroke-linecap="round"/></svg>`,
  profile: `<svg viewBox="0 0 48 48" fill="none" aria-hidden="true"><path d="M24 23.5c4.6 0 8.3-3.7 8.3-8.3S28.6 7 24 7s-8.3 3.7-8.3 8.2 3.7 8.3 8.3 8.3Z" stroke="currentColor" stroke-width="2.8"/><path d="M11 40c1.4-8.4 6-12.6 13-12.6S35.6 31.6 37 40" stroke="currentColor" stroke-width="2.8" stroke-linecap="round"/><path d="M16 40h16" stroke="currentColor" stroke-width="2.8" stroke-linecap="round"/></svg>`,
  home: `<svg viewBox="0 0 48 48" fill="none" aria-hidden="true"><path d="M9 24.5 24 10l15 14.5" stroke="currentColor" stroke-width="2.8" stroke-linecap="round" stroke-linejoin="round"/><path d="M14 22v18h20V22" stroke="currentColor" stroke-width="2.8" stroke-linejoin="round"/><path d="M20 40V29h8v11M24 10v6M18 18h12" stroke="currentColor" stroke-width="2.8" stroke-linecap="round" stroke-linejoin="round"/></svg>`,
  help: `<svg viewBox="0 0 48 48" fill="none" aria-hidden="true"><path d="M11 15.5h26a4 4 0 0 1 4 4v12a4 4 0 0 1-4 4H24l-8 5v-5h-5a4 4 0 0 1-4-4v-12a4 4 0 0 1 4-4Z" stroke="currentColor" stroke-width="2.8" stroke-linejoin="round"/><path d="M20.5 23.2c.3-3 2.5-4.8 5.2-4.8 3 0 5.2 1.9 5.2 4.6 0 4-5.2 4-5.2 8M25.7 35.2h.1" stroke="currentColor" stroke-width="2.8" stroke-linecap="round"/></svg>`,
};

let language = "RU";

function go(route) {
  window.location.hash = route === "home" ? "" : route;
}

function getRoute() {
  return window.location.hash.replace("#", "") || "home";
}

function homeScreen() {
  return `
    <div class="home-screen">
      <section class="hero-card">
        <div class="top-bar">
          <div class="brand-card">
            <div class="brand-mark">${icons.cube}</div>
            <div class="brand-name">Deplex</div>
          </div>
          <div class="top-actions">
            <button class="icon-button" type="button" data-route="notifications" aria-label="Уведомления">${icons.bell}</button>
            <button class="lang-button" type="button" data-lang>${language}</button>
          </div>
        </div>

        <div class="intro">
          <div>
            <h1>
  <span>Начните</span>
  <span>торговлю ИИ</span>
  <span>ассистентом</span>
</h1>
            <p class="welcome">Добро пожаловать, Singular</p>
          </div>
          <div class="bot-frame">
            <img src="./Home/Bot.png" alt="Deplex bot" />
          </div>
        </div>

        <div class="divider"></div>

        <div class="primary-actions">
          <button class="nav-card" type="button" data-route="algorithms">
            <span>
              <span class="nav-title">Выбрать алгоритм</span>
              <span class="nav-subtitle">Начать новый цикл</span>
            </span>
          </button>
          <button class="nav-card" type="button" data-route="cycles">
            <span>
              <span class="nav-title">Мои циклы</span>
              <span class="nav-subtitle">Управлять своими циклами</span>
            </span>
          </button>
        </div>
      </section>

      <section class="cycle-card">
        <div class="cycle-top">
          <div>
            <p class="eyebrow">Рекордный цикл</p>
            <h2 class="cycle-name">Aurum Prime</h2>
            <p class="cycle-subtitle">Gold Hunter</p>
          </div>
          <div class="status-pill">Рекорд</div>
        </div>

        <div class="metric-grid">
          <div class="metric-box metric-box-profit">
            <p class="metric-label">Показатель прибыли</p>
            <div class="record-row">
              <div class="profit">+56%</div>
              <div class="record-meter" aria-label="Рекордный показатель 56%">
                <span style="--value: 56%"></span>
              </div>
            </div>
            <p class="metric-note">Лучший результат среди завершённых циклов</p>
          </div>
          <div class="metric-box">
            <p class="metric-label">Дата цикла</p>
            <div class="period">15.04.26 - 18.04.26</div>
          </div>
        </div>

        <button class="start-button" type="button" data-route="aurum">Начать цикл</button>
      </section>

      ${bottomNav("home")}
    </div>
  `;
}

function emptyScreen(route) {
  const title = routes[route] || "Раздел";
  return `
    <div class="empty-screen">
      <section class="empty-card">
        <div>
          <h1>${title}</h1>
          <p>Экран добавим следующим шагом</p>
        </div>
      </section>
      ${bottomNav(route)}
    </div>
  `;
}

function bottomNav(active) {
  return `
    <nav class="bottom-nav" aria-label="Основное меню">
      <button class="tab-button ${active === "profile" ? "is-active" : ""}" type="button" data-route="profile">
        <img src="./Icons/Profile.png" alt="" /><span>Профиль</span>
      </button>
      <button class="tab-button ${active === "home" ? "is-active" : ""}" type="button" data-route="home">
        <img src="./Icons/Home.png" alt="" /><span>Главная</span>
      </button>
      <button class="tab-button ${active === "help" ? "is-active" : ""}" type="button" data-route="help">
        <img src="./Icons/Support.png" alt="" /><span>Помощь</span>
      </button>
    </nav>
  `;
}

function render() {
  const route = getRoute();
  const app = document.querySelector("#app");
  app.innerHTML = route === "home" ? homeScreen() : emptyScreen(route);
  app.querySelectorAll("[data-route]").forEach((button) => {
    button.addEventListener("click", () => go(button.dataset.route));
  });
  const langButton = app.querySelector("[data-lang]");
  if (langButton) {
    langButton.addEventListener("click", () => {
      language = language === "RU" ? "EN" : "RU";
      render();
    });
  }
}

window.addEventListener("hashchange", render);
render();
