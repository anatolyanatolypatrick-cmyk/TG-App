const routes = {
  home: "Главная",
  algorithms: "Алгоритмы",
  cycles: "Мои циклы",
  profile: "Профиль",
  help: "Помощь",
  notifications: "Уведомления",
  aurum: "Aurum Prime",
  flux: "Flux Node",
  detail: "Детали цикла",
};

let language = "RU";
let activeInfo = null;
let activeSelect = null;
let activeCycleFilter = "active";
let cycleFilterOpen = false;
let activeDetailCycle = null;

const startState = {
  aurum: {
    period: 0,
    network: 0,
    asset: 0,
    transfer: "wallet",
    finish: "partial",
    walletAddress: "OpBaND1NBen9s10a3-PtUrg_ZLQ76Kgf8PXuIa5LDOFRnBa_8dGGHkjgHG8N",
  },
  flux: {
    period: 0,
    network: 0,
    asset: 0,
    transfer: "wallet",
    finish: "partial",
    walletAddress: "0x7B18e2F9A24c4f8D9a35e43a19b5E30F46A812C7",
  },
};

function initTelegramWebApp() {
  const webApp = window.Telegram?.WebApp;
  if (!webApp) return;

  const isTelegramApp = Boolean(webApp.initData || webApp.initDataUnsafe?.user);
  if (!isTelegramApp) return;

  document.documentElement.classList.add("is-telegram");
  webApp.ready();
  webApp.expand();
  webApp.disableVerticalSwipes?.();
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
  const knownRoutes = new Set(["home", "algorithms", "cycles", "profile", "help", "notifications", "aurum", "flux", "detail"]);
  return knownRoutes.has(route) ? route : "home";
}

const startCycleData = {
  aurum: {
    title: "Aurum Prime",
    subtitle: "Gold Hunter",
    image: "./Images/Start_Cycle/AurumPrimeStart.webp",
    periods: ["Aurum Prime (04.05.26 - 10.05.26)"],
    networks: ["TON", "BSC"],
    assets: ["USDT"],
    walletAddress: "OpBaND1NBen9s10a3-PtUrg_ZLQ76Kgf8PXuIa5LDOFRnBa_8dGGHkjgHG8N",
  },
  flux: {
    title: "Flux Node",
    subtitle: "Liquid Hunter",
    image: "./Images/Start_Cycle/FluxNodeStart.webp",
    periods: ["Flux Node (04.05.26 - 10.05.26)"],
    networks: ["Arbitrum"],
    assets: ["USDC"],
    walletAddress: "0x7B18e2F9A24c4f8D9a35e43a19b5E30F46A812C7",
  },
};

const finishModes = [
  { id: "full", label: "Полное завершение" },
  { id: "partial", label: "Частичное завершение" },
  { id: "continue", label: "Продолжение цикла" },
];

function canUseExchange(network) {
  return network === "TON";
}

const cycleFilters = [
  { id: "active", label: "Активные", statuses: ["AWAITING_TRANSFER", "DETECTED", "CONFIRMING", "CONFIRMED", "ACTIVE"] },
  { id: "completed", label: "Завершённые", statuses: ["COMPLETED"] },
  { id: "report", label: "Отчёт готов", statuses: ["REPORT_READY"] },
  { id: "cancelled", label: "Отменённые", statuses: ["CANCELLED", "REJECTED"] },
  { id: "all", label: "Все", statuses: null },
];

const cycleStatusMeta = {
  AWAITING_TRANSFER: { label: "Ожидает перевод", tone: "waiting" },
  DETECTED: { label: "Перевод найден", tone: "active" },
  CONFIRMING: { label: "Подтверждается", tone: "active" },
  CONFIRMED: { label: "Подтверждён", tone: "active" },
  ACTIVE: { label: "Активен", tone: "active" },
  COMPLETED: { label: "Завершён", tone: "completed" },
  REPORT_READY: { label: "Отчёт готов", tone: "report" },
  CANCELLED: { label: "Отменён", tone: "cancelled" },
  REJECTED: { label: "Отклонён", tone: "cancelled" },
};

const cycleItems = [
  {
    id: "cycle-aurum-active",
    algorithm: "Aurum Prime",
    subtitle: "Gold Hunter",
    accent: "gold",
    network: "TON",
    asset: "USDT",
    amount: "300 USDT",
    createdAt: "10.05.26",
    period: "04.05.26 - 10.05.26",
    status: "ACTIVE",
  },
  {
    id: "cycle-ton-awaiting",
    algorithm: "Aurum Prime",
    subtitle: "Gold Hunter",
    accent: "gold",
    network: "TON",
    asset: "USDT",
    amount: "200 USDT",
    createdAt: "10.05.26",
    period: "04.05.26 - 10.05.26",
    status: "AWAITING_TRANSFER",
  },
  {
    id: "cycle-flux-report",
    algorithm: "Flux Node",
    subtitle: "Liquid Hunter",
    accent: "blue",
    network: "Arbitrum",
    asset: "USDC",
    amount: "500 USDC",
    createdAt: "06.05.26",
    period: "04.05.26 - 10.05.26",
    status: "REPORT_READY",
  },
  {
    id: "cycle-aurum-completed",
    algorithm: "Aurum Prime",
    subtitle: "Gold Hunter",
    accent: "gold",
    network: "TON",
    asset: "USDT",
    amount: "150 USDT",
    createdAt: "28.04.26",
    period: "28.04.26 - 04.05.26",
    status: "COMPLETED",
  },
  {
    id: "cycle-cancelled",
    algorithm: "Flux Node",
    subtitle: "Liquid Hunter",
    accent: "blue",
    network: "Arbitrum",
    asset: "USDC",
    amount: "250 USDC",
    createdAt: "24.04.26",
    period: "24.04.26 - 30.04.26",
    status: "CANCELLED",
  },
];

const detailCopy = {
  address: "OpBaND1NBen9s10a3-PtUrg_ZLQ76Kgf8PXuIa5LDOFRnBa_8dGGHkjgHG8N",
  memo: "788973ucdiuUihUYGouihoiuhoIUHOIhoikhHB",
};

function buildDetailFromStart(id) {
  const data = startCycleData[id];
  const state = startState[id];
  const network = data.networks[state.network];
  const asset = data.assets[state.asset];
  const transfer = canUseExchange(network) ? state.transfer : "wallet";

  return {
    id: `new-${id}`,
    algorithm: data.title,
    subtitle: data.subtitle,
    network,
    asset,
    period: data.periods[state.period],
    amount: "Ожидает перевод",
    createdAt: "10.05.26",
    status: "AWAITING_TRANSFER",
    transfer,
    address: detailCopy.address,
    memo: detailCopy.memo,
    requiresMemo: transfer === "exchange" && canUseExchange(network),
  };
}

function buildDetailFromCycle(cycle) {
  return {
    ...cycle,
    transfer: cycle.network === "TON" && cycle.status === "AWAITING_TRANSFER" ? "exchange" : "wallet",
    address: detailCopy.address,
    memo: detailCopy.memo,
    requiresMemo: cycle.network === "TON" && cycle.status === "AWAITING_TRANSFER",
  };
}

function getActiveDetailCycle() {
  if (activeDetailCycle) return activeDetailCycle;
  return buildDetailFromCycle(cycleItems[1]);
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
            <img src="./Icons/Arrow.png" alt="" aria-hidden="true" />
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

function cyclesScreen() {
  const activeFilter = cycleFilters.find((filter) => filter.id === activeCycleFilter) || cycleFilters[0];
  const visibleCycles = activeFilter.statuses
    ? cycleItems.filter((cycle) => activeFilter.statuses.includes(cycle.status))
    : cycleItems;

  return `
    <div class="cycles-screen">
      <section class="glass-card page-hero">
        <div class="top-bar">
          <button class="back-button glass-panel" type="button" data-route="home" aria-label="Назад">
            <img src="./Icons/Arrow.png" alt="" aria-hidden="true" />
          </button>
          <p class="page-eyebrow">Циклы</p>
          <div class="top-actions">
            <button class="icon-button glass-panel" type="button" data-route="notifications" aria-label="Уведомления">${bellIcon}</button>
            <button class="lang-button glass-panel" type="button" data-lang>${language}</button>
          </div>
        </div>

        <div class="page-title-block">
          <h1>Мои циклы</h1>
          <span>Отслеживайте статусы, результаты и открывайте детали цикла</span>
        </div>
      </section>

      <section class="glass-card cycles-card">
        <div class="cycle-toolbar">
          <button class="cycle-filter-trigger glass-panel" type="button" data-cycle-filter-open aria-label="Фильтр циклов">
            <img src="./Icons/filter.png" alt="" />
            <span>${activeFilter.label}</span>
          </button>
        </div>

        <div class="cycle-list">
          ${visibleCycles.length ? visibleCycles.map(cycleCard).join("") : emptyCycles()}
        </div>
      </section>

      ${bottomNav("home")}
      ${cycleFilterOpen ? cycleFilterModal() : ""}
    </div>
  `;
}

function cycleFilterModal() {
  return `
    <div class="modal-layer" data-cycle-filter-close>
      <div class="select-modal glass-card" role="dialog" aria-modal="true">
        <button class="modal-close" type="button" data-cycle-filter-close aria-label="Закрыть">×</button>
        <h2>Фильтр циклов</h2>
        <div class="select-menu glass-panel">
          ${cycleFilters.map((filter) => `
            <button class="select-option ${activeCycleFilter === filter.id ? "is-active" : ""}" type="button" data-cycle-filter="${filter.id}">
              ${filter.label}
            </button>
          `).join("")}
        </div>
      </div>
    </div>
  `;
}

function cycleCard(cycle) {
  const status = cycleStatusMeta[cycle.status] || { label: cycle.status, tone: "default" };

  return `
    <button class="cycle-card glass-panel" type="button" data-open-cycle="${cycle.id}">
      <div class="cycle-main">
        <div class="cycle-asset-row">
          <span class="cycle-token">${cycle.network}</span>
          <span class="cycle-token">${cycle.asset}</span>
        </div>
        <h2>${cycle.algorithm}</h2>
        <p>${cycle.subtitle}</p>
        <span class="cycle-created">Создан ${cycle.createdAt}</span>
      </div>

      <div class="cycle-side">
        <span class="cycle-status is-${status.tone}">${status.label}</span>
        <strong>${cycle.amount}</strong>
        <span>Период</span>
        <em>${cycle.period}</em>
      </div>
    </button>
  `;
}

function emptyCycles() {
  return `
    <div class="empty-cycles glass-panel">
      <h2>Циклов нет</h2>
      <p>В этом фильтре пока нет созданных циклов.</p>
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

function startCycleScreen(id) {
  const data = startCycleData[id];
  const state = startState[id];
  const network = data.networks[state.network];
  const asset = data.assets[state.asset];
  const period = data.periods[state.period];
  const exchangeAvailable = canUseExchange(network);
  const transfer = exchangeAvailable ? state.transfer : "wallet";

  return `
    <div class="start-cycle-screen">
      <section class="glass-card page-hero">
        <div class="top-bar">
          <button class="back-button glass-panel" type="button" data-route="algorithms" aria-label="Назад">
            <img src="./Icons/Arrow.png" alt="" aria-hidden="true" />
          </button>
          <p class="page-eyebrow">Новый цикл</p>
          <div class="top-actions">
            <button class="icon-button glass-panel" type="button" data-route="notifications" aria-label="Уведомления">${bellIcon}</button>
            <button class="lang-button glass-panel" type="button" data-lang>${language}</button>
          </div>
        </div>

        <div class="page-title-block">
          <h1>Начните цикл</h1>
          <span>Задайте параметры цикла и режим завершения</span>
        </div>
      </section>

      <section class="glass-card start-form-card">
        <div class="start-algorithm-banner glass-panel">
          <img src="${data.image}" alt="${data.title}" />
        </div>

        ${selectField("Период цикла:", period, "period")}
        ${selectField("Сеть:", network, "network")}
        ${selectField("Актив:", asset, "asset")}

        <div class="form-group">
          <div class="section-label with-info">
            <span>Способ отправки:</span>
            <button class="info-button" type="button" data-info="transfer" aria-label="Подробнее о способе отправки">
              <img src="./Icons/Info.png" alt="" />
            </button>
          </div>

          <div class="transfer-grid">
            ${transferOption("wallet", "С личного кошелька", "./Icons/Wallet.png", transfer === "wallet", false)}
            ${transferOption("exchange", "С биржи или сервиса", "./Icons/Exchange.png", transfer === "exchange", !exchangeAvailable)}
          </div>

          ${transferDetails(transfer, exchangeAvailable, state.walletAddress || data.walletAddress)}
        </div>
      </section>

      <section class="glass-card finish-card">
        <div class="section-label with-info finish-label">
          <span>Режим завершения:</span>
          <button class="info-button" type="button" data-info="finish" aria-label="Подробнее о режиме завершения">
            <img src="./Icons/Info.png" alt="" />
          </button>
        </div>
        <p class="section-description">Выберите, как будет завершён цикл и обработан результат</p>
        <div class="finish-options">
          ${finishModes.map((mode) => `
            <button class="finish-option glass-panel ${state.finish === mode.id ? "is-active" : ""}" type="button" data-finish="${mode.id}">
              ${mode.label}
            </button>
          `).join("")}
        </div>
      </section>

      <button class="create-cycle-button" type="button" data-create-cycle>Создать цикл</button>

      ${bottomNav("home")}
      ${activeSelect ? selectModal(id, activeSelect) : ""}
      ${activeInfo ? infoModal(activeInfo) : ""}
    </div>
  `;
}

function selectField(label, value, key) {
  const isOpen = activeSelect === key;

  return `
    <div class="form-group">
      <span class="field-label">${label}</span>
      <button class="select-control glass-panel" type="button" data-cycle-select="${key}" aria-expanded="${isOpen}">
        <span>${value}</span>
        <img class="select-chevron" src="./Icons/Arrow.png" alt="" aria-hidden="true" />
      </button>
    </div>
  `;
}

function selectModal(route, key) {
  const data = startCycleData[route];
  const state = startState[route];
  const labels = {
    period: "Период цикла",
    network: "Сеть",
    asset: "Актив",
  };

  if (!data || !state) return "";

  const options = data[`${key}s`];
  const activeIndex = state[key];

  return `
    <div class="modal-layer select-modal-layer" data-select-close>
      <div class="select-modal glass-card" role="dialog" aria-modal="true">
        <button class="modal-close" type="button" data-select-close aria-label="Закрыть">×</button>
        <h2>${labels[key]}</h2>
        <div class="select-menu glass-panel">
          ${options.map((option, index) => `
            <button class="select-option ${index === activeIndex ? "is-active" : ""}" type="button" data-select-option="${key}" data-select-index="${index}">
              ${option}
            </button>
          `).join("")}
        </div>
      </div>
    </div>
  `;
}

function transferOption(id, label, icon, active, disabled) {
  return `
    <button class="transfer-option glass-panel ${active ? "is-active" : ""} ${disabled ? "is-disabled" : ""}" type="button" data-transfer="${id}" ${disabled ? "disabled" : ""}>
      <img src="${icon}" alt="" />
      <span>${label}</span>
    </button>
  `;
}

function transferDetails(transfer, exchangeAvailable, walletAddress) {
  if (transfer === "exchange" && exchangeAvailable) {
    return `
      <p class="exchange-note">
        Адрес для получения средств укажете на следующем шаге после создания цикла.
      </p>
    `;
  }

  return `
    <div class="wallet-address-group">
      <span class="field-label">Адрес вашего кошелька:</span>
      <textarea class="wallet-address glass-panel" data-wallet-address rows="2">${walletAddress}</textarea>
      ${exchangeAvailable ? "" : "<p class=\"network-note\">Для этой сети отправка с биржи недоступна. Используйте только личный кошелёк.</p>"}
    </div>
  `;
}

function infoModal(type) {
  const isTransfer = type === "transfer";
  return `
    <div class="modal-layer" data-modal-close>
      <div class="info-modal glass-card" role="dialog" aria-modal="true">
        <button class="modal-close" type="button" data-modal-close aria-label="Закрыть">×</button>
        <h2>${isTransfer ? "Способ отправки" : "Режим завершения"}</h2>
        <p>
          ${isTransfer
            ? "Личный кошелёк — это ваш собственный wallet, например Tonkeeper или Trust Wallet. Биржа или сервис используют общий адрес, поэтому для TON на следующем шаге понадобится персональный memo."
            : "Полное завершение возвращает всю сумму и результат. Частичное завершение возвращает только результат, а основа остаётся в работе. Продолжение цикла переносит весь итог в следующий цикл."}
        </p>
      </div>
    </div>
  `;
}

function detailCycleScreen() {
  const cycle = getActiveDetailCycle();
  const status = cycleStatusMeta[cycle.status] || cycleStatusMeta.AWAITING_TRANSFER;
  const waiting = cycle.status === "AWAITING_TRANSFER";

  return `
    <div class="detail-cycle-screen">
      <section class="glass-card page-hero detail-hero">
        <div class="top-bar">
          <button class="back-button glass-panel" type="button" data-route="cycles" aria-label="Назад">
            <img src="./Icons/Arrow.png" alt="" aria-hidden="true" />
          </button>
          <p class="page-eyebrow">Детали цикла</p>
          <div class="top-actions">
            <button class="icon-button glass-panel" type="button" data-route="notifications" aria-label="Уведомления">${bellIcon}</button>
            <button class="lang-button glass-panel" type="button" data-lang>${language}</button>
          </div>
        </div>

        <div class="page-title-block detail-title-block">
          <h1>${cycle.network} - ${cycle.asset}</h1>
          <p class="detail-lead">Проверьте статус перевода, адресный маршрут и таймлайн.</p>

          <div class="detail-status-panel glass-panel">
            <span class="cycle-status is-${status.tone}">${status.label}</span>
          </div>
        </div>
      </section>

      ${waiting ? transferRouteCard(cycle) : activeCycleSummary(cycle, status)}

      ${bottomNav("cycles")}
    </div>
  `;
}

function transferRouteCard(cycle) {
  return `
    <section class="glass-card transfer-route-card">
      <header class="transfer-route-head">
        <h2>Отправьте ${cycle.asset} на этот адрес</h2>
        <p>Переводите только ${cycle.asset} в сети ${cycle.network}.</p>
      </header>

      ${copyField(cycle.address, "Копировать", "Адрес для перевода")}

      ${cycle.requiresMemo ? `
        <div class="transfer-divider"></div>

        <div class="memo-block">
          <h3>Ваш персональный memo</h3>
          ${copyField(cycle.memo, "Копировать", "Memo")}
          <p class="memo-note">Укажите этот memo при отправке с биржи.<br />Без memo перевод не будет определён.</p>
        </div>
      ` : ""}

      <div class="transfer-divider"></div>

      <div class="transfer-warning">
        <img src="./Icons/Info.png" alt="" />
        <p>Отправка других токенов или через другую сеть может привести к потере средств.</p>
      </div>
    </section>
  `;
}

function copyField(value, label, ariaLabel) {
  return `
    <div class="copy-field glass-panel">
      <span aria-label="${ariaLabel}">${value}</span>
      <button type="button" data-copy="${value}">${label}</button>
    </div>
  `;
}

function activeCycleSummary(cycle, status) {
  return `
    <section class="glass-card transfer-route-card">
      <header class="transfer-route-head">
        <h2>${status.label}</h2>
        <p>Цикл уже создан. Следующим шагом здесь появятся сумма, таймлайн и текущие показатели.</p>
      </header>
      <div class="detail-metric-grid">
        <div class="detail-metric glass-panel">
          <span>Сумма</span>
          <strong>${cycle.amount}</strong>
        </div>
        <div class="detail-metric glass-panel">
          <span>Создан</span>
          <strong>${cycle.createdAt}</strong>
        </div>
      </div>
    </section>
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
  } else if (route === "cycles") {
    app.innerHTML = cyclesScreen();
  } else if (route === "aurum" || route === "flux") {
    app.innerHTML = startCycleScreen(route);
  } else if (route === "detail") {
    app.innerHTML = detailCycleScreen();
  } else {
    activeSelect = null;
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

  app.querySelectorAll("[data-cycle-select]").forEach((button) => {
    button.addEventListener("click", () => {
      const key = button.dataset.cycleSelect;
      const currentRoute = getRoute();
      const data = startCycleData[currentRoute];
      const state = startState[currentRoute];
      if (!data || !state || !data[`${key}s`]) return;

      activeSelect = activeSelect === key ? null : key;
      render();
    });
  });

  app.querySelectorAll("[data-select-option]").forEach((button) => {
    button.addEventListener("click", () => {
      const key = button.dataset.selectOption;
      const currentRoute = getRoute();
      const data = startCycleData[currentRoute];
      const state = startState[currentRoute];
      if (!data || !state) return;

      state[key] = Number(button.dataset.selectIndex);
      if (key === "network" && !canUseExchange(data.networks[state.network])) {
        state.transfer = "wallet";
      }
      activeSelect = null;
      render();
    });
  });

  app.querySelectorAll("[data-transfer]").forEach((button) => {
    button.addEventListener("click", () => {
      const currentRoute = getRoute();
      const state = startState[currentRoute];
      if (!state || button.disabled) return;
      state.transfer = button.dataset.transfer;
      activeSelect = null;
      render();
    });
  });

  app.querySelectorAll("[data-wallet-address]").forEach((field) => {
    field.addEventListener("input", () => {
      const currentRoute = getRoute();
      const state = startState[currentRoute];
      if (!state) return;
      state.walletAddress = field.value;
    });
  });

  app.querySelectorAll("[data-create-cycle]").forEach((button) => {
    button.addEventListener("click", () => {
      const currentRoute = getRoute();
      if (!startCycleData[currentRoute]) return;
      activeDetailCycle = buildDetailFromStart(currentRoute);
      activeSelect = null;
      activeInfo = null;
      cycleFilterOpen = false;
      go("detail");
    });
  });

  app.querySelectorAll("[data-open-cycle]").forEach((button) => {
    button.addEventListener("click", () => {
      const cycle = cycleItems.find((item) => item.id === button.dataset.openCycle);
      if (!cycle) return;
      activeDetailCycle = buildDetailFromCycle(cycle);
      activeSelect = null;
      activeInfo = null;
      cycleFilterOpen = false;
      go("detail");
    });
  });

  app.querySelectorAll("[data-finish]").forEach((button) => {
    button.addEventListener("click", () => {
      const currentRoute = getRoute();
      const state = startState[currentRoute];
      if (!state) return;
      state.finish = button.dataset.finish;
      activeSelect = null;
      render();
    });
  });

  app.querySelectorAll("[data-cycle-filter]").forEach((button) => {
    button.addEventListener("click", () => {
      activeCycleFilter = button.dataset.cycleFilter;
      cycleFilterOpen = false;
      render();
    });
  });

  app.querySelectorAll("[data-cycle-filter-open]").forEach((button) => {
    button.addEventListener("click", () => {
      cycleFilterOpen = true;
      activeSelect = null;
      activeInfo = null;
      render();
    });
  });

  app.querySelectorAll("[data-info]").forEach((button) => {
    button.addEventListener("click", () => {
      activeInfo = button.dataset.info;
      activeSelect = null;
      render();
    });
  });

  app.querySelectorAll("[data-modal-close]").forEach((element) => {
    element.addEventListener("click", (event) => {
      if (event.target !== element && !element.classList.contains("modal-close")) return;
      activeInfo = null;
      render();
    });
  });

  app.querySelectorAll("[data-select-close]").forEach((element) => {
    element.addEventListener("click", (event) => {
      if (event.target !== element && !element.classList.contains("modal-close")) return;
      activeSelect = null;
      render();
    });
  });

  app.querySelectorAll("[data-cycle-filter-close]").forEach((element) => {
    element.addEventListener("click", (event) => {
      if (event.target !== element && !element.classList.contains("modal-close")) return;
      cycleFilterOpen = false;
      render();
    });
  });

  app.querySelectorAll("[data-copy]").forEach((button) => {
    button.addEventListener("click", async () => {
      try {
        await navigator.clipboard?.writeText(button.dataset.copy);
      } catch (error) {
        // Clipboard can be blocked in preview; the visual prototype still keeps the route visible.
      }
      button.textContent = "Скопировано";
      setTimeout(() => {
        button.textContent = "Копировать";
      }, 1200);
    });
  });
}

window.addEventListener("hashchange", render);
initTelegramWebApp();
render();
