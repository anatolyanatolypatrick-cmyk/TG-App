const routes = {
  home: "Главная",
  algorithms: "Алгоритмы",
  cycles: "Мои циклы",
  profile: "Профиль",
  help: "Помощь",
  notifications: "Уведомления",
  aurum: "Aurum Prime",
};

let language = "RU";

function initTelegramWebApp() {
  const webApp = window.Telegram?.WebApp;
  if (!webApp) return;

  webApp.ready();
  webApp.expand();
  setTimeout(() => webApp.expand(), 250);
}

const bellIcon = `
  <svg viewBox="0 0 48 48" fill="none" aria-hidden="true">
    <path d="M15 21.5c0-6.1 3.9-11 9-11s9 4.9 9 11v7.2l3.6 4.3c1 1.2.2 3-1.4 3H12.8c-1.6 0-2.4-1.8-1.4-3l3.6-4.3v-7.2Z" stroke="currentColor" stroke-width="3" stroke-linejoin="round"/>
    <path d="M21 40h6" stroke="currentColor" stroke-width="3" stroke-linecap="round"/>
  </svg>
`;

function go(route) {
  window.location.hash = route === "home" ? "" : route;
}

function getRoute() {
  const rawHash = window.location.hash.replace("#", "");
  const route = rawHash.split(/[?&=]/)[0];
  const knownRoutes = new Set(["home", "algorithms", "cycles", "profile", "help", "notifications", "aurum", "flux"]);
  return knownRoutes.has(route) ? route : "home";
}

function homeScreen() {
  return `
    <div class="home-screen">
      <section class="glass-card hero-card">
        <div class="top-bar">
          <div class="brand-card glass-panel">
            <div class="brand-mark">
              <img src="./Icons/Лого.svg" alt="" />
            </div>
            <div class="brand-name">Deplex</div>
          </div>
          <div class="top-actions">
            <button class="icon-button glass-panel" type="button" data-route="notifications" aria-label="Уведомления">${bellIcon}</button>
            <button class="lang-button glass-panel" type="button" data-lang>${language}</button>
          </div>
        </div>

        <div class="banner-frame glass-panel">
          <img src="./Images/Home/Banner.webp" alt="Начните торговлю алгоритмами Deplex" />
        </div>

        <p class="welcome">Добро пожаловать, Singular</p>
        <div class="divider"></div>

        <div class="primary-actions">
          <button class="nav-card glass-panel action-primary" type="button" data-route="algorithms">
            <span class="nav-arrow" aria-hidden="true"></span>
            <span>
              <span class="nav-title">Выбрать алгоритм</span>
              <span class="nav-subtitle">Начать новый цикл</span>
            </span>
          </button>
          <button class="nav-card glass-panel" type="button" data-route="cycles">
            <span class="nav-arrow" aria-hidden="true"></span>
            <span>
              <span class="nav-title">Мои циклы</span>
              <span class="nav-subtitle">Управлять своими циклами</span>
            </span>
          </button>
        </div>
      </section>

      <section class="glass-card result-card">
        <p class="result-kicker">Лучший результат</p>

        <div class="result-head">
          <div>
            <h2>Aurum Prime</h2>
            <p>Gold Hunter</p>
          </div>
          <div class="result-period">
            <img src="./Icons/Calendar.png" alt="" />
            <div>
              <span>Период</span>
              <strong>15.04.26 - 18.04.26</strong>
            </div>
          </div>
        </div>

        <div class="chart-panel glass-panel">
          <div class="profit-value">+56%</div>
          <div class="chart-badge">
            <span class="badge-arrow"></span>
            <span>+56%</span>
          </div>
          <span class="chart-dot" aria-hidden="true"></span>
          <svg class="profit-chart" viewBox="0 0 620 250" preserveAspectRatio="none" aria-hidden="true">
            <defs>
              <linearGradient id="chartFill" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stop-color="#2ee8ee" stop-opacity="0.3" />
                <stop offset="58%" stop-color="#2ee8ee" stop-opacity="0.08" />
                <stop offset="100%" stop-color="#2ee8ee" stop-opacity="0" />
              </linearGradient>
              <linearGradient id="areaFade" x1="0" y1="0" x2="1" y2="0">
                <stop offset="0%" stop-color="#fff" stop-opacity="0" />
                <stop offset="16%" stop-color="#fff" stop-opacity="0.12" />
                <stop offset="34%" stop-color="#fff" stop-opacity="0.56" />
                <stop offset="52%" stop-color="#fff" stop-opacity="1" />
                <stop offset="100%" stop-color="#000" stop-opacity="1" />
              </linearGradient>
              <mask id="areaMask">
                <rect width="620" height="250" fill="url(#areaFade)" />
              </mask>
              <linearGradient id="lineFade" x1="0" y1="0" x2="1" y2="0">
                <stop offset="0%" stop-color="#2ee8ee" stop-opacity="0" />
                <stop offset="22%" stop-color="#2ee8ee" stop-opacity="0.18" />
                <stop offset="42%" stop-color="#2ee8ee" stop-opacity="1" />
                <stop offset="100%" stop-color="#2ee8ee" stop-opacity="1" />
              </linearGradient>
              <filter id="chartGlow" x="-35%" y="-90%" width="190%" height="280%">
                <feGaussianBlur stdDeviation="4" result="blur" />
                <feMerge>
                  <feMergeNode in="blur" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>
            </defs>
            <path class="chart-area" mask="url(#areaMask)" d="M92 176 C150 122 184 136 236 168 C310 204 382 140 448 140 C512 140 488 236 552 224 C600 214 582 46 620 28 L620 250 L92 250 Z" />
            <path class="chart-line" d="M92 176 C150 122 184 136 236 168 C310 204 382 140 448 140 C512 140 488 236 552 224 C600 214 582 46 620 28" />
          </svg>
        </div>

        <button class="start-button glass-panel" type="button" data-route="aurum">Запустить алгоритм</button>
      </section>

      ${bottomNav("home")}
    </div>
  `;
}

const algorithms = [
  {
    id: "aurum",
    title: "Aurum Prime",
    asset: "USDT",
    network: "TON/BSC",
    image: "./Images/Algorithms/AurumPrime.webp",
    description: [
      "Алгоритм рассчитан на быстрый внутридневной скальпинг и может адаптировать позиции для удержания прибыли в течение недели.",
      "Разработан командой Deplex.",
      "Результаты тестирования: winrate 76,5%, средняя прибыль за цикл — 56%."
    ],
  },
  {
    id: "flux",
    title: "Flux Node",
    asset: "USDC",
    network: "Arbitrum",
    image: "./Images/Algorithms/FluxNode.webp",
    description: [
      "Алгоритм работает на децентрализованной платформе Hyperliquid, используя высоколиквидные бессрочные фьючерсы.",
      "Все сделки проходят в открытой среде — полностью прозрачны.",
      "Разработан командой Deplex."
    ],
  },
];

function algorithmsScreen() {
  return `
    <div class="algorithms-screen">
      <section class="glass-card page-hero">
        <div class="top-bar">
          <button class="back-button glass-panel" type="button" data-route="home" aria-label="Назад">
            <span aria-hidden="true"></span>
          </button>
          <p class="page-eyebrow">Алгоритмы</p>
          <div class="top-actions">
            <button class="icon-button glass-panel" type="button" data-route="notifications" aria-label="Уведомления">${bellIcon}</button>
            <button class="lang-button glass-panel" type="button" data-lang>${language}</button>
          </div>
        </div>

        <div class="page-title-block">
          <h1>Алгоритмы</h1>
          <span>Начать новый цикл</span>
        </div>
      </section>

      <section class="algorithm-list">
        ${algorithms.map(algorithmCard).join("")}
      </section>

      ${bottomNav("home")}
    </div>
  `;
}

function algorithmCard(item) {
  return `
    <article class="glass-card algorithm-card">
      <header class="algorithm-head">
        <div class="algorithm-title-row">
          <h2>${item.title}</h2>
          <div class="algorithm-tags">
            <span class="glass-panel">${item.asset}</span>
            <span class="glass-panel">${item.network}</span>
          </div>
        </div>
        <span class="availability-pill">Доступен</span>
      </header>

      <div class="algorithm-divider"></div>

      <div class="algorithm-body">
        <div class="algorithm-copy">
          ${item.description.map((text) => `<p>${text}</p>`).join("")}
        </div>
        <div class="algorithm-image glass-panel">
          <img src="${item.image}" alt="${item.title}" />
        </div>
      </div>

      <button class="start-button glass-panel" type="button" data-route="${item.id}">Начать цикл</button>
    </article>
  `;
}

function emptyScreen(route) {
  const title = routes[route] || "Раздел";
  return `
    <div class="empty-screen">
      <section class="glass-card empty-card">
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
    <nav class="bottom-nav glass-card" aria-label="Основное меню">
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
  if (route === "home") {
    app.innerHTML = homeScreen();
  } else if (route === "algorithms") {
    app.innerHTML = algorithmsScreen();
  } else {
    app.innerHTML = emptyScreen(route);
  }

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
initTelegramWebApp();
render();
