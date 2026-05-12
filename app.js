const translations = {
  ru: {
    routes: {
      home: "Главная",
      algorithms: "Алгоритмы",
      cycles: "Мои циклы",
      profile: "Профиль",
      help: "Помощь",
      notifications: "Уведомления",
      aurum: "Aurum Prime",
      flux: "Flux Node",
      detail: "Детали цикла",
      metrics: "Текущие показатели",
    },
    home: {
      bannerAlt: "Начните торговлю алгоритмами Deplex",
      welcome: "Добро пожаловать, Singular",
      chooseAlgorithm: "Выбрать алгоритм",
      chooseAlgorithmHint: "Начать новый цикл",
      myCycles: "Мои циклы",
      myCyclesHint: "Управлять своими циклами",
    },
    nav: {
      profile: "Профиль",
      home: "Главная",
      help: "Помощь",
      mainMenu: "Основное меню",
    },
    common: {
      back: "Назад",
      close: "Закрыть",
      notifications: "Уведомления",
      period: "Период",
      created: "Создан",
      amount: "Сумма",
      available: "Доступен",
      copy: "Копировать",
      copied: "Скопировано",
      save: "Сохранить",
      section: "Раздел",
      comingNext: "Экран добавим следующим шагом",
    },
    pages: {
      algorithmsTitle: "Алгоритмы",
      algorithmsDescription: "Выберите подходящий алгоритм для запуска торгового цикла.",
      cyclesTitle: "Мои циклы",
      cyclesDescription: "Отслеживайте статусы, результаты и открывайте детали цикла",
      startTitle: "Начните цикл",
      startDescription: "Задайте параметры цикла и выберите режим завершения.",
      detailTitle: "Детали цикла",
      detailDescription: "Проверьте статус перевода, данные цикла, адрес возврата и доступные действия.",
      metricsTitle: "Текущие показатели",
    },
    algorithms: {
      aurumDescription: [
        "Алгоритм рассчитан на быстрый внутридневной скальпинг и может адаптировать позиции для удержания прибыли в течение недели.",
        "Разработан командой Deplex.",
        "Результаты тестирования: winrate 76,5%, средняя прибыль за цикл — 56%.",
      ],
      fluxDescription: [
        "Алгоритм работает на децентрализованной платформе Hyperliquid, используя высоколиквидные бессрочные фьючерсы.",
        "Все сделки проходят в открытой среде — полностью прозрачны.",
        "Разработан командой Deplex.",
      ],
      startCycle: "Начать цикл",
    },
    filters: {
      active: "Активные",
      completed: "Завершённые",
      report: "Отчёт готов",
      cancelled: "Отменённые",
      all: "Все",
      title: "Фильтр циклов",
      empty: "В этом фильтре пока нет созданных циклов.",
    },
    statuses: {
      AWAITING_TRANSFER: "Ожидает перевод",
      DETECTED: "Перевод найден",
      CONFIRMING: "Подтверждается",
      CONFIRMED: "Подтверждён",
      ACTIVE: "Активен",
      COMPLETED: "Завершён",
      REPORT_READY: "Отчёт готов",
      CANCELLED: "Отменён",
      REJECTED: "Отклонён",
    },
    cycles: {
      emptyTitle: "Циклов нет",
    },
    start: {
      periodLabel: "Период цикла:",
      networkLabel: "Сеть:",
      assetLabel: "Актив:",
      transferMethod: "Способ отправки:",
      transferInfoAria: "Подробнее о способе отправки",
      wallet: "С личного кошелька",
      exchange: "С биржи или сервиса",
      walletAddress: "Адрес вашего кошелька:",
      walletNote: "Укажите адрес личного кошелька, с которого будете отправлять средства в цикл. По этому адресу система определит ваш перевод.",
      exchangeNote: "После создания цикла вы получите адрес и memo для перевода. Адрес возврата средств нужно будет указать отдельно.",
      networkNote: "Для этой сети отправка с биржи недоступна.",
      finishMode: "Режим завершения:",
      finishInfoAria: "Подробнее о режиме завершения",
      finishDescription: "Выберите, как будет завершён цикл и обработан результат.",
      finishDetailDescription: "Цикл будет закрыт по выбранному режиму, если не изменить его до начала обработки результата.",
      finishDetailNote: "Открыт для изменения.<br />Сумма ниже 5 USDT остаётся в системе до достижения минимального порога вывода (5 USDT).",
      createCycle: "Создать цикл",
      selectLabels: {
        period: "Период цикла",
        network: "Сеть",
        asset: "Актив",
      },
      finishModes: {
        full: "Полное завершение",
        partial: "Частичное завершение",
        continue: "Продолжение цикла",
      },
      info: {
        transferTitle: "Способ отправки",
        finishTitle: "Режим завершения",
        transferText: "Личный кошелёк — это ваш собственный wallet, например Tonkeeper или Trust Wallet. Биржа или сервис используют общий адрес, поэтому для TON на следующем шаге понадобится персональный memo.",
        finishText: "Полное завершение возвращает всю сумму и результат. Частичное завершение возвращает только результат, а основа остаётся в работе. Продолжение цикла переносит весь итог в следующий цикл.",
      },
    },
    detail: {
      sendTitle: "Отправьте ${asset} на этот адрес",
      addressAria: "Адрес для перевода",
      addressNote: "Переводите только ${asset} в сети ${network}. Неверный актив или сеть могут привести к потере средств.",
      memoTitle: "Ваш персональный memo",
      memoNote: "Укажите этот memo при отправке с биржи. Без memo перевод не будет определён.",
      activeSummary: "Цикл уже создан. Следующим шагом здесь появятся сумма, таймлайн и текущие показатели.",
      timelineTitle: "Таймлайн цикла",
      timelineWaitingTransfer: "Ожидание перевода",
      timelineWaitingReport: "Ожидание отчёта",
      returnAddressTitle: "Ваш адрес для возврата",
      returnAddressEmpty: "Введите ваш адрес",
      returnAddressNote: "На этот адрес будет отправлен результат по текущему циклу.",
      returnMemoLabel: "Memo",
      returnMemoHint: "Укажите memo, если этого требует биржа или сервис.",
      returnModalTitle: "Адрес для возврата",
      returnAddressInput: "Введите адрес кошелька",
      returnMemoInput: "Введите memo",
      detailActionsTitle: "Действия",
      metricsAction: "Текущие показатели",
      cancelCycle: "Отменить цикл",
      timelineSteps: {
        created: "Цикл создан",
        awaitingTransfer: "Ожидает перевод",
        detected: "Перевод обнаружен",
        confirming: "Ожидает подтверждение",
        confirmed: "Перевод подтверждён",
        active: "Цикл активен",
        working: "Алгоритм работает",
        completed: "Завершено",
        report: "Отчёт готов",
        cancelled: "Цикл отменён",
      },
    },
  },
  en: {
    routes: {
      home: "Home",
      algorithms: "Algorithms",
      cycles: "My cycles",
      profile: "Profile",
      help: "Help",
      notifications: "Notifications",
      aurum: "Aurum Prime",
      flux: "Flux Node",
      detail: "Cycle details",
      metrics: "Current metrics",
    },
    home: {
      bannerAlt: "Start trading with Deplex algorithms",
      welcome: "Welcome, Singular",
      chooseAlgorithm: "Choose algorithm",
      chooseAlgorithmHint: "Start a new cycle",
      myCycles: "My cycles",
      myCyclesHint: "Manage your cycles",
    },
    nav: {
      profile: "Profile",
      home: "Home",
      help: "Help",
      mainMenu: "Main menu",
    },
    common: {
      back: "Back",
      close: "Close",
      notifications: "Notifications",
      period: "Period",
      created: "Created",
      amount: "Amount",
      available: "Available",
      copy: "Copy",
      copied: "Copied",
      save: "Save",
      section: "Section",
      comingNext: "This screen will be added next",
    },
    pages: {
      algorithmsTitle: "Algorithms",
      algorithmsDescription: "Start a new cycle",
      cyclesTitle: "My cycles",
      cyclesDescription: "Track statuses, results, and open cycle details",
      startTitle: "Start cycle",
      startDescription: "Set cycle parameters and completion mode",
      detailTitle: "Cycle details",
      detailDescription: "Check transfer status, address route, and timeline.",
      metricsTitle: "Current metrics",
    },
    algorithms: {
      aurumDescription: [
        "The algorithm is built for fast intraday scalping and can adapt positions to hold profit throughout the week.",
        "Developed by the Deplex team.",
        "Backtest results: win rate 76.5%, average profit per cycle — 56%.",
      ],
      fluxDescription: [
        "The algorithm runs on the decentralized Hyperliquid platform using highly liquid perpetual futures.",
        "All trades happen in an open environment and remain fully transparent.",
        "Developed by the Deplex team.",
      ],
      startCycle: "Start cycle",
    },
    filters: {
      active: "Active",
      completed: "Completed",
      report: "Report ready",
      cancelled: "Cancelled",
      all: "All",
      title: "Cycle filter",
      empty: "There are no cycles in this filter yet.",
    },
    statuses: {
      AWAITING_TRANSFER: "Awaiting transfer",
      DETECTED: "Transfer detected",
      CONFIRMING: "Confirming",
      CONFIRMED: "Confirmed",
      ACTIVE: "Active",
      COMPLETED: "Completed",
      REPORT_READY: "Report ready",
      CANCELLED: "Cancelled",
      REJECTED: "Rejected",
    },
    cycles: {
      emptyTitle: "No cycles",
    },
    start: {
      periodLabel: "Cycle period:",
      networkLabel: "Network:",
      assetLabel: "Asset:",
      transferMethod: "Transfer method:",
      transferInfoAria: "More about transfer method",
      wallet: "Personal wallet",
      exchange: "Exchange or service",
      walletAddress: "Your wallet address:",
      walletNote: "Enter the personal wallet address you will use to send funds into the cycle. The system will identify your transfer by this address.",
      exchangeNote: "You will add the payout address on the next step after creating the cycle.",
      networkNote: "Exchange transfers are unavailable for this network.",
      finishMode: "Completion mode:",
      finishInfoAria: "More about completion mode",
      finishDescription: "Choose how the cycle will finish and how the result will be handled",
      finishDetailDescription: "The cycle will close by the selected mode unless you change it before result processing starts.",
      finishDetailNote: "Open for changes.<br />An amount below 5 USDT remains in the system until the minimum payout threshold is reached (5 USDT).",
      createCycle: "Create cycle",
      selectLabels: {
        period: "Cycle period",
        network: "Network",
        asset: "Asset",
      },
      finishModes: {
        full: "Full completion",
        partial: "Partial completion",
        continue: "Continue cycle",
      },
      info: {
        transferTitle: "Transfer method",
        finishTitle: "Completion mode",
        transferText: "A personal wallet is your own wallet, such as Tonkeeper or Trust Wallet. An exchange or service uses a shared address, so for TON the next step will require a personal memo.",
        finishText: "Full completion returns the entire amount and result. Partial completion returns only the result while the base remains in work. Continue cycle moves the full outcome into the next cycle.",
      },
    },
    detail: {
      sendTitle: "Send ${asset} to this address",
      addressAria: "Transfer address",
      addressNote: "Send only ${asset} on the ${network} network. Wrong asset or network may lead to loss of funds.",
      memoTitle: "Your personal memo",
      memoNote: "Enter this memo when sending from an exchange.<br />Without memo, the transfer will not be identified.",
      activeSummary: "The cycle has already been created. Amount, timeline, and current metrics will appear here next.",
      timelineTitle: "Cycle timeline",
      timelineWaitingTransfer: "Awaiting transfer",
      timelineWaitingReport: "Awaiting report",
      returnAddressTitle: "Return address",
      returnAddressEmpty: "Enter your address",
      returnAddressNote: "The result for this cycle will be sent to this address.",
      returnMemoLabel: "Memo",
      returnMemoHint: "Enter memo if required by the exchange or service.",
      returnModalTitle: "Return address",
      returnAddressInput: "Enter wallet address",
      returnMemoInput: "Enter memo",
      detailActionsTitle: "Actions",
      metricsAction: "Current metrics",
      cancelCycle: "Cancel cycle",
      timelineSteps: {
        created: "Cycle created",
        awaitingTransfer: "Awaiting transfer",
        detected: "Transfer detected",
        confirming: "Awaiting confirmation",
        confirmed: "Transfer confirmed",
        active: "Cycle active",
        working: "Algorithm working",
        completed: "Completed",
        report: "Report ready",
        cancelled: "Cycle cancelled",
      },
    },
  },
};

let language = "ru";
let activeInfo = null;
let activeSelect = null;
let activeCycleFilter = "active";
let cycleFilterOpen = false;
let activeDetailCycle = null;
let timelineExpanded = false;
let returnAddressOpen = false;
let returnAddressDraft = "";
let returnMemoDraft = "";

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

function t(path, values = {}) {
  const keys = path.split(".");
  let value = translations[language];

  keys.forEach((key) => {
    value = value?.[key];
  });

  if (value === undefined) return path;
  if (typeof value !== "string") return value;

  return value.replace(/\$\{(\w+)\}/g, (_, key) => values[key] ?? "");
}

function langLabel() {
  return language.toUpperCase();
}

function statusLabel(status) {
  return t(`statuses.${status}`);
}

function filterLabel(filter) {
  return t(`filters.${filter.id}`);
}

function finishLabel(id) {
  return t(`start.finishModes.${id}`);
}

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
  { id: "full" },
  { id: "partial" },
  { id: "continue" },
];

function canUseExchange(network) {
  return network === "TON";
}

const cycleFilters = [
  { id: "active", statuses: ["AWAITING_TRANSFER", "DETECTED", "CONFIRMING", "CONFIRMED", "ACTIVE"] },
  { id: "completed", statuses: ["COMPLETED"] },
  { id: "report", statuses: ["REPORT_READY"] },
  { id: "cancelled", statuses: ["CANCELLED", "REJECTED"] },
  { id: "all", statuses: null },
];

const cycleStatusMeta = {
  AWAITING_TRANSFER: { tone: "waiting" },
  DETECTED: { tone: "active" },
  CONFIRMING: { tone: "active" },
  CONFIRMED: { tone: "active" },
  ACTIVE: { tone: "active" },
  COMPLETED: { tone: "completed" },
  REPORT_READY: { tone: "report" },
  CANCELLED: { tone: "cancelled" },
  REJECTED: { tone: "cancelled" },
};

const timelineByStatus = {
  AWAITING_TRANSFER: [
    { id: "created", state: "current" },
  ],
  DETECTED: [
    { id: "created", state: "complete" },
    { id: "detected", state: "current" },
    { id: "confirming", state: "pending" },
  ],
  CONFIRMING: [
    { id: "created", state: "complete" },
    { id: "detected", state: "complete" },
    { id: "confirming", state: "current" },
  ],
  CONFIRMED: [
    { id: "created", state: "complete" },
    { id: "detected", state: "complete" },
    { id: "confirmed", state: "current" },
    { id: "active", state: "pending" },
  ],
  ACTIVE: [
    { id: "created", state: "complete" },
    { id: "detected", state: "complete" },
    { id: "confirmed", state: "complete" },
    { id: "active", state: "complete" },
    { id: "working", state: "current" },
  ],
  COMPLETED: [
    { id: "created", state: "complete" },
    { id: "detected", state: "complete" },
    { id: "confirmed", state: "complete" },
    { id: "active", state: "complete" },
    { id: "completed", state: "current" },
  ],
  REPORT_READY: [
    { id: "created", state: "complete" },
    { id: "detected", state: "complete" },
    { id: "confirmed", state: "complete" },
    { id: "active", state: "complete" },
    { id: "report", state: "current" },
  ],
  CANCELLED: [
    { id: "created", state: "complete" },
    { id: "cancelled", state: "current" },
  ],
  REJECTED: [
    { id: "created", state: "complete" },
    { id: "cancelled", state: "current" },
  ],
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
    amount: statusLabel("AWAITING_TRANSFER"),
    createdAt: "10.05.26",
    status: "AWAITING_TRANSFER",
    transfer,
    finish: state.finish,
    returnAddress: transfer === "wallet" ? (state.walletAddress || data.walletAddress) : "",
    returnMemo: "",
    address: detailCopy.address,
    memo: detailCopy.memo,
    requiresMemo: transfer === "exchange" && canUseExchange(network),
  };
}

function buildDetailFromCycle(cycle) {
  const transfer = cycle.network === "TON" && cycle.status === "AWAITING_TRANSFER" ? "exchange" : "wallet";

  return {
    ...cycle,
    transfer,
    finish: cycle.finish || "partial",
    returnAddress: cycle.returnAddress || (transfer === "wallet" ? detailCopy.address : ""),
    returnMemo: cycle.returnMemo || "",
    address: detailCopy.address,
    memo: detailCopy.memo,
    requiresMemo: cycle.network === "TON" && cycle.status === "AWAITING_TRANSFER",
  };
}

function getActiveDetailCycle() {
  if (activeDetailCycle) return activeDetailCycle;
  return buildDetailFromCycle(cycleItems[1]);
}

function cycleTimeline(cycle) {
  const steps = timelineByStatus[cycle.status] || timelineByStatus.AWAITING_TRANSFER;
  const baseDate = cycle.createdAt || "10.05.26";
  const demoTimes = ["10:24", "10:31", "10:34", "10:38", "10:40", "18:00", "18:12"];

  return steps.map((step, index) => {
    const next = steps[index + 1];

    return {
      id: step.id,
      label: t(`detail.timelineSteps.${step.id}`),
      note: cycle.status === "AWAITING_TRANSFER" && step.id === "created"
        ? t("detail.timelineWaitingTransfer")
        : cycle.status === "COMPLETED" && step.id === "completed"
          ? t("detail.timelineWaitingReport")
          : "",
      time: step.state === "pending" ? "" : `${baseDate} ${demoTimes[Math.min(index, demoTimes.length - 1)]}`,
      state: step.state,
      mutedLine: next?.state === "pending",
    };
  });
}

function timelineVisualState(step, cycle) {
  if (step.state === "complete") return "completed";
  if (step.state === "current") return "active";
  return "pending";
}

function timelineMarkerMode(step, cycle) {
  const visualState = timelineVisualState(step, cycle);
  if (visualState !== "active") return visualState;
  if (step.id === "working") return "charge";
  return "glow";
}

function currentTimelineStep(cycle, steps) {
  const current = steps.find((step) => step.state === "current");
  return current || steps.slice().reverse().find((step) => timelineVisualState(step, cycle) === "completed") || steps[0];
}

function timelineMarker(step, cycle) {
  const mode = timelineMarkerMode(step, cycle);
  if (mode === "charge") {
    return `
      <span class="timeline-marker is-charge" aria-hidden="true">
        <span class="timeline-charge"><i></i><i></i><i></i><i></i><i></i><i></i></span>
      </span>
    `;
  }

  if (mode === "glow") {
    return `<span class="timeline-marker is-glow" aria-hidden="true"></span>`;
  }

  return `<span class="timeline-marker" aria-hidden="true"></span>`;
}

function timelineStepRow(step, cycle, options = {}) {
  const visualState = timelineVisualState(step, cycle);
  const mode = timelineMarkerMode(step, cycle);
  const isLast = Boolean(options.last);
  const showLine = options.line !== false && !isLast;
  const lineState = step.mutedLine ? "pending" : visualState;

  return `
    <div class="timeline-row is-${visualState} is-${mode} ${isLast ? "is-last" : ""}">
      <div class="timeline-rail">
        ${timelineMarker(step, cycle)}
        ${showLine ? `<span class="timeline-line is-${lineState}" aria-hidden="true"></span>` : ""}
      </div>
      <div class="timeline-copy">
        <strong>${step.label}</strong>
        ${step.note ? `<span class="timeline-note">${step.note}</span>` : ""}
        ${step.time ? `<span class="timeline-time">${step.time}</span>` : ""}
      </div>
    </div>
  `;
}

function homeScreen() {
  return `
    <div class="home-screen">
      <section class="glass-card hero-card">
        <div class="top-bar">
          <div class="brand-card glass-panel">
            <div class="brand-mark">
              <img src="./Icons/Logo.svg" alt="" />
            </div>
            <div class="brand-name">Deplex</div>
          </div>
          <div class="top-actions">
            <button class="icon-button glass-panel" type="button" data-route="notifications" aria-label="${t("common.notifications")}">${bellIcon}</button>
            <button class="lang-button glass-panel" type="button" data-lang>${langLabel()}</button>
          </div>
        </div>

        <div class="banner-frame glass-panel">
          <img src="./Images/Home/Banner.webp" alt="${t("home.bannerAlt")}" />
        </div>

        <p class="welcome">${t("home.welcome")}</p>
        <div class="divider"></div>

        <div class="primary-actions">
          <button class="nav-card glass-panel action-primary" type="button" data-route="algorithms">
            <span class="nav-arrow" aria-hidden="true"></span>
            <span>
              <span class="nav-title">${t("home.chooseAlgorithm")}</span>
              <span class="nav-subtitle">${t("home.chooseAlgorithmHint")}</span>
            </span>
          </button>
          <button class="nav-card glass-panel" type="button" data-route="cycles">
            <span class="nav-arrow" aria-hidden="true"></span>
            <span>
              <span class="nav-title">${t("home.myCycles")}</span>
              <span class="nav-subtitle">${t("home.myCyclesHint")}</span>
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
    descriptionKey: "aurumDescription",
  },
  {
    id: "flux",
    title: "Flux Node",
    asset: "USDC",
    network: "Arbitrum",
    image: "./Images/Algorithms/FluxNode.webp",
    descriptionKey: "fluxDescription",
  },
];

function algorithmsScreen() {
  return `
    <div class="algorithms-screen">
      <section class="glass-card page-hero">
        <div class="top-bar">
          <button class="back-button glass-panel" type="button" data-route="home" aria-label="${t("common.back")}">
            <img src="./Icons/Arrow.png" alt="" aria-hidden="true" />
          </button>
          <h1 class="page-top-title">${t("pages.algorithmsTitle")}</h1>
          <div class="top-actions">
            <button class="icon-button glass-panel" type="button" data-route="notifications" aria-label="${t("common.notifications")}">${bellIcon}</button>
            <button class="lang-button glass-panel" type="button" data-lang>${langLabel()}</button>
          </div>
        </div>

        <div class="page-title-block">
          <span>${t("pages.algorithmsDescription")}</span>
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
          <button class="back-button glass-panel" type="button" data-route="home" aria-label="${t("common.back")}">
            <img src="./Icons/Arrow.png" alt="" aria-hidden="true" />
          </button>
          <h1 class="page-top-title">${t("pages.cyclesTitle")}</h1>
          <div class="top-actions">
            <button class="icon-button glass-panel" type="button" data-route="notifications" aria-label="${t("common.notifications")}">${bellIcon}</button>
            <button class="lang-button glass-panel" type="button" data-lang>${langLabel()}</button>
          </div>
        </div>

        <div class="page-title-block">
          <span>${t("pages.cyclesDescription")}</span>
        </div>
      </section>

      <section class="glass-card cycles-card">
        <div class="cycle-toolbar">
          <button class="cycle-filter-trigger glass-panel" type="button" data-cycle-filter-open aria-label="${t("filters.title")}">
            <img src="./Icons/filter.png" alt="" />
            <span>${filterLabel(activeFilter)}</span>
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
        <button class="modal-close" type="button" data-cycle-filter-close aria-label="${t("common.close")}">×</button>
        <h2>${t("filters.title")}</h2>
        <div class="select-menu glass-panel">
          ${cycleFilters.map((filter) => `
            <button class="select-option ${activeCycleFilter === filter.id ? "is-active" : ""}" type="button" data-cycle-filter="${filter.id}">
              ${filterLabel(filter)}
            </button>
          `).join("")}
        </div>
      </div>
    </div>
  `;
}

function cycleCard(cycle) {
  const status = cycleStatusMeta[cycle.status] || { tone: "default" };

  return `
    <button class="cycle-card glass-panel" type="button" data-open-cycle="${cycle.id}">
      <div class="cycle-main">
        <div class="cycle-asset-row">
          <span class="cycle-token">${cycle.network}</span>
          <span class="cycle-token">${cycle.asset}</span>
        </div>
        <h2>${cycle.algorithm}</h2>
        <p>${cycle.subtitle}</p>
        <span class="cycle-created">${t("common.created")} ${cycle.createdAt}</span>
      </div>

      <div class="cycle-side">
        <span class="cycle-status is-${status.tone}">${statusLabel(cycle.status)}</span>
        <strong>${cycle.amount}</strong>
      </div>
    </button>
  `;
}

function emptyCycles() {
  return `
    <div class="empty-cycles glass-panel">
      <h2>${t("cycles.emptyTitle")}</h2>
      <p>${t("filters.empty")}</p>
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
        <span class="availability-pill">${t("common.available")}</span>
      </header>

      <div class="algorithm-divider"></div>

      <div class="algorithm-body">
        <div class="algorithm-copy">
          ${t(`algorithms.${item.descriptionKey}`).map((text) => `<p>${text}</p>`).join("")}
        </div>
        <div class="algorithm-image glass-panel">
          <img src="${item.image}" alt="${item.title}" />
        </div>
      </div>

      <button class="start-button glass-panel" type="button" data-route="${item.id}">${t("algorithms.startCycle")}</button>
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
          <button class="back-button glass-panel" type="button" data-route="algorithms" aria-label="${t("common.back")}">
            <img src="./Icons/Arrow.png" alt="" aria-hidden="true" />
          </button>
          <h1 class="page-top-title">${t("pages.startTitle")}</h1>
          <div class="top-actions">
            <button class="icon-button glass-panel" type="button" data-route="notifications" aria-label="${t("common.notifications")}">${bellIcon}</button>
            <button class="lang-button glass-panel" type="button" data-lang>${langLabel()}</button>
          </div>
        </div>

        <div class="page-title-block">
          <span>${t("pages.startDescription")}</span>
        </div>
      </section>

      <section class="glass-card start-form-card">
        <div class="start-algorithm-banner glass-panel">
          <img src="${data.image}" alt="${data.title}" />
        </div>

        ${selectField(t("start.periodLabel"), period, "period")}
        ${selectField(t("start.networkLabel"), network, "network")}
        ${selectField(t("start.assetLabel"), asset, "asset")}

        <div class="form-group">
          <div class="section-label with-info">
            <span>${t("start.transferMethod")}</span>
            <button class="info-button" type="button" data-info="transfer" aria-label="${t("start.transferInfoAria")}">
              <img src="./Icons/Info.png" alt="" />
            </button>
          </div>

          <div class="transfer-grid">
            ${transferOption("wallet", t("start.wallet"), "./Icons/Wallet.png", transfer === "wallet", false)}
            ${transferOption("exchange", t("start.exchange"), "./Icons/Exchange.png", transfer === "exchange", !exchangeAvailable)}
          </div>

          ${transferDetails(transfer, exchangeAvailable, state.walletAddress || data.walletAddress)}
        </div>
      </section>

      <section class="glass-card finish-card">
        ${finishModeContent(state.finish, t("start.finishDescription"))}
      </section>

      <button class="create-cycle-button" type="button" data-create-cycle>${t("start.createCycle")}</button>

      ${bottomNav("home")}
      ${activeSelect ? selectModal(id, activeSelect) : ""}
      ${activeInfo ? infoModal(activeInfo) : ""}
    </div>
  `;
}

function finishModeContent(activeMode, description, note = "") {
  return `
    <div class="section-label with-info finish-label">
      <span>${t("start.finishMode")}</span>
      <button class="info-button" type="button" data-info="finish" aria-label="${t("start.finishInfoAria")}">
        <img src="./Icons/Info.png" alt="" />
      </button>
    </div>
    <p class="section-description">${description}</p>
    <div class="finish-options">
      ${finishModes.map((mode) => `
        <button class="choice-option finish-option glass-panel ${activeMode === mode.id ? "is-active" : ""}" type="button" data-finish="${mode.id}">
          ${finishLabel(mode.id)}
        </button>
      `).join("")}
    </div>
    ${note ? `<p class="section-description">${note}</p>` : ""}
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
    period: t("start.selectLabels.period"),
    network: t("start.selectLabels.network"),
    asset: t("start.selectLabels.asset"),
  };

  if (!data || !state) return "";

  const options = data[`${key}s`];
  const activeIndex = state[key];

  return `
    <div class="modal-layer select-modal-layer" data-select-close>
      <div class="select-modal glass-card" role="dialog" aria-modal="true">
        <button class="modal-close" type="button" data-select-close aria-label="${t("common.close")}">×</button>
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
    <button class="choice-option transfer-option glass-panel ${active ? "is-active" : ""} ${disabled ? "is-disabled" : ""}" type="button" data-transfer="${id}" ${disabled ? "disabled" : ""}>
      <img src="${icon}" alt="" />
      <span>${label}</span>
    </button>
  `;
}

function transferDetails(transfer, exchangeAvailable, walletAddress) {
  if (transfer === "exchange" && exchangeAvailable) {
    return `
      <p class="section-description">
        ${t("start.exchangeNote")}
      </p>
    `;
  }

  return `
    <div class="wallet-address-group">
      <span class="field-label">${t("start.walletAddress")}</span>
      <textarea class="wallet-address glass-panel" data-wallet-address rows="2">${walletAddress}</textarea>
      ${exchangeAvailable ? "" : `<p class="section-description">${t("start.networkNote")}</p>`}
      <p class="section-description">${t("start.walletNote")}</p>
    </div>
  `;
}

function infoModal(type) {
  const isTransfer = type === "transfer";
  return `
    <div class="modal-layer" data-modal-close>
      <div class="info-modal glass-card" role="dialog" aria-modal="true">
        <button class="modal-close" type="button" data-modal-close aria-label="${t("common.close")}">×</button>
        <h2>${isTransfer ? t("start.info.transferTitle") : t("start.info.finishTitle")}</h2>
        <p>
          ${isTransfer
            ? t("start.info.transferText")
            : t("start.info.finishText")}
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
          <button class="back-button glass-panel" type="button" data-route="cycles" aria-label="${t("common.back")}">
            <img src="./Icons/Arrow.png" alt="" aria-hidden="true" />
          </button>
          <h1 class="page-top-title">${t("pages.detailTitle")}</h1>
          <div class="top-actions">
            <button class="icon-button glass-panel" type="button" data-route="notifications" aria-label="${t("common.notifications")}">${bellIcon}</button>
            <button class="lang-button glass-panel" type="button" data-lang>${langLabel()}</button>
          </div>
        </div>

        <div class="page-title-block detail-title-block">
          <p class="detail-lead">${t("pages.detailDescription")}</p>
        </div>

        <div class="detail-cycle-meta">
          <div class="cycle-route-pill glass-panel">${cycle.network} / ${cycle.asset}</div>
          <div class="detail-status-panel glass-panel">
            <span class="cycle-status is-${status.tone}">${statusLabel(cycle.status)}</span>
          </div>
        </div>
      </section>

      ${waiting ? transferRouteCard(cycle) : activeCycleSummary(cycle, status)}

      ${cycleTimelineCard(cycle)}

      <section class="glass-card finish-card detail-finish-card">
        ${finishModeContent(cycle.finish || "partial", t("start.finishDetailDescription"), t("start.finishDetailNote"))}
      </section>

      ${returnAddressCard(cycle)}
      ${detailActionsCard(cycle)}

      ${bottomNav("cycles")}
      ${activeInfo ? infoModal(activeInfo) : ""}
      ${returnAddressOpen ? returnAddressModal(cycle) : ""}
    </div>
  `;
}

function cycleTimelineCard(cycle) {
  const steps = cycleTimeline(cycle);
  const currentStep = currentTimelineStep(cycle, steps);

  return `
    <section class="glass-card cycle-timeline-card">
      <button class="cycle-timeline-toggle" type="button" data-timeline-toggle aria-expanded="${timelineExpanded}">
        <span class="timeline-toggle-content">
          ${timelineStepRow(currentStep, cycle, { line: false, last: true })}
        </span>
        <span class="timeline-chevron" aria-hidden="true"></span>
      </button>
    </section>
    ${timelineExpanded ? timelineModal(cycle, steps) : ""}
  `;
}

function timelineModal(cycle, steps) {
  return `
    <div class="modal-layer timeline-modal-layer" data-timeline-close>
      <div class="timeline-modal glass-card" role="dialog" aria-modal="true">
        <button class="modal-close" type="button" data-timeline-close aria-label="${t("common.close")}">×</button>
        <div class="cycle-timeline">
          ${steps.map((step, index) => timelineStepRow(step, cycle, { last: index === steps.length - 1 })).join("")}
        </div>
      </div>
    </div>
  `;
}

function transferRouteCard(cycle) {
  return `
    <section class="glass-card transfer-route-card">
      <div class="memo-block">
        <header class="transfer-route-head">
          <h2 class="section-label">${t("detail.sendTitle", { asset: cycle.asset })}</h2>
        </header>
        ${copyField(cycle.address, t("common.copy"), t("detail.addressAria"))}
        <p class="section-description">${t("detail.addressNote", { asset: cycle.asset, network: cycle.network })}</p>
      </div>

      ${cycle.requiresMemo ? `
        <div class="transfer-divider"></div>

        <div class="memo-block">
          <h3 class="section-label">${t("detail.memoTitle")}</h3>
          ${copyField(cycle.memo, t("common.copy"), "Memo")}
          <p class="section-description">${t("detail.memoNote")}</p>
        </div>
      ` : ""}

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

function returnAddressCard(cycle) {
  const hasAddress = Boolean(cycle.returnAddress);

  return `
    <section class="glass-card return-address-card">
      <h2 class="section-label">${t("detail.returnAddressTitle")}</h2>
      ${hasAddress ? `
        <div class="return-address-field glass-panel">
          <button class="return-address-value" type="button" data-copy="${cycle.returnAddress}" aria-label="${t("detail.returnAddressTitle")}">
            <span>${cycle.returnAddress}</span>
          </button>
        </div>
        ${cycle.returnMemo ? `
          <div class="return-address-field return-memo-field glass-panel">
            <button class="return-address-value" type="button" data-copy="${cycle.returnMemo}" aria-label="${t("detail.returnMemoLabel")}">
              <span>${t("detail.returnMemoLabel")}: ${cycle.returnMemo}</span>
            </button>
          </div>
        ` : ""}
      ` : `
        <button class="return-address-empty glass-panel" type="button" data-return-address-open>
          <span>${t("detail.returnAddressEmpty")}</span>
          <img src="./Icons/Arrow.png" alt="" aria-hidden="true" />
        </button>
      `}
      <p class="section-description">${t("detail.returnAddressNote")}</p>
    </section>
  `;
}

function returnAddressModal() {
  return `
    <div class="modal-layer" data-return-address-close>
      <div class="return-address-modal glass-card" role="dialog" aria-modal="true">
        <button class="modal-close" type="button" data-return-address-close aria-label="${t("common.close")}">×</button>
        <h2>${t("detail.returnModalTitle")}</h2>
        <div class="return-modal-fields">
          <label class="return-modal-field">
            <span class="section-label">${t("detail.returnAddressInput")}</span>
            <textarea class="wallet-address return-modal-textarea glass-panel" data-return-address-input rows="2">${returnAddressDraft}</textarea>
          </label>
          <label class="return-modal-field">
            <span class="section-label">${t("detail.returnMemoInput")}</span>
            <textarea class="wallet-address return-modal-textarea glass-panel" data-return-memo-input rows="2">${returnMemoDraft}</textarea>
            <span class="section-description">${t("detail.returnMemoHint")}</span>
          </label>
        </div>
        <button class="create-cycle-button return-save-button" type="button" data-return-address-save>${t("common.save")}</button>
      </div>
    </div>
  `;
}

function detailActionsCard(cycle) {
  const canCancel = cycle.status === "AWAITING_TRANSFER";

  return `
    <section class="glass-card detail-actions-card">
      <h2 class="section-label">${t("detail.detailActionsTitle")}</h2>
      <div class="detail-actions-list">
        <button class="detail-action-button glass-panel" type="button" data-route="metrics">
          <span>${t("detail.metricsAction")}</span>
        </button>
        ${canCancel ? `
          <button class="detail-action-button detail-action-danger glass-panel" type="button" data-cancel-cycle>
            <span>${t("detail.cancelCycle")}</span>
          </button>
        ` : ""}
      </div>
    </section>
  `;
}

function resizeTextarea(field) {
  field.style.height = "auto";
  field.style.height = `${field.scrollHeight}px`;
}

function activeCycleSummary(cycle, status) {
  return `
    <section class="glass-card transfer-route-card">
      <header class="transfer-route-head">
        <h2 class="section-label">${statusLabel(cycle.status)}</h2>
        <p class="section-description">${t("detail.activeSummary")}</p>
      </header>
      <div class="detail-metric-grid">
        <div class="detail-metric glass-panel">
          <span>${t("common.amount")}</span>
          <strong>${cycle.amount}</strong>
        </div>
        <div class="detail-metric glass-panel">
          <span>${t("common.period")}</span>
          <strong>${cycle.period}</strong>
        </div>
      </div>
    </section>
  `;
}

function emptyScreen(route) {
  const title = t(`routes.${route}`) || t("common.section");
  return `
    <div class="empty-screen">
      <section class="glass-card empty-card">
        <div>
          <h1>${title}</h1>
          <p>${t("common.comingNext")}</p>
        </div>
      </section>
      ${bottomNav(route)}
    </div>
  `;
}

function bottomNav(active) {
  return `
    <nav class="bottom-nav glass-card" aria-label="${t("nav.mainMenu")}">
      <button class="tab-button ${active === "profile" ? "is-active" : ""}" type="button" data-route="profile">
        <img src="./Icons/Profile.png" alt="" /><span>${t("nav.profile")}</span>
      </button>
      <button class="tab-button ${active === "home" ? "is-active" : ""}" type="button" data-route="home">
        <img src="./Icons/Home.png" alt="" /><span>${t("nav.home")}</span>
      </button>
      <button class="tab-button ${active === "help" ? "is-active" : ""}" type="button" data-route="help">
        <img src="./Icons/Support.png" alt="" /><span>${t("nav.help")}</span>
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
      language = language === "ru" ? "en" : "ru";
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
      timelineExpanded = false;
      returnAddressOpen = false;
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
      timelineExpanded = false;
      returnAddressOpen = false;
      go("detail");
    });
  });

  app.querySelectorAll("[data-finish]").forEach((button) => {
    button.addEventListener("click", () => {
      const currentRoute = getRoute();
      if (currentRoute === "detail" && activeDetailCycle) {
        activeDetailCycle.finish = button.dataset.finish;
        activeInfo = null;
        render();
        return;
      }

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

  app.querySelectorAll("[data-return-address-open]").forEach((button) => {
    button.addEventListener("click", () => {
      returnAddressDraft = activeDetailCycle?.returnAddress || "";
      returnMemoDraft = activeDetailCycle?.returnMemo || "";
      returnAddressOpen = true;
      activeSelect = null;
      activeInfo = null;
      render();
    });
  });

  app.querySelectorAll("[data-return-address-input]").forEach((field) => {
    resizeTextarea(field);
    field.addEventListener("input", () => {
      returnAddressDraft = field.value;
      resizeTextarea(field);
    });
  });

  app.querySelectorAll("[data-return-memo-input]").forEach((field) => {
    resizeTextarea(field);
    field.addEventListener("input", () => {
      returnMemoDraft = field.value;
      resizeTextarea(field);
    });
  });

  app.querySelectorAll("[data-return-address-save]").forEach((button) => {
    button.addEventListener("click", () => {
      if (!activeDetailCycle) return;
      activeDetailCycle.returnAddress = returnAddressDraft.trim();
      activeDetailCycle.returnMemo = returnMemoDraft.trim();
      returnAddressOpen = false;
      render();
    });
  });

  app.querySelectorAll("[data-return-address-close]").forEach((element) => {
    element.addEventListener("click", (event) => {
      if (event.target !== element && !element.classList.contains("modal-close")) return;
      returnAddressOpen = false;
      render();
    });
  });

  app.querySelectorAll("[data-cancel-cycle]").forEach((button) => {
    button.addEventListener("click", () => {
      if (!activeDetailCycle || activeDetailCycle.status !== "AWAITING_TRANSFER") return;
      activeDetailCycle.status = "CANCELLED";
      activeDetailCycle.requiresMemo = false;
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

  app.querySelectorAll("[data-timeline-toggle]").forEach((button) => {
    button.addEventListener("click", () => {
      timelineExpanded = true;
      activeSelect = null;
      activeInfo = null;
      render();
    });
  });

  app.querySelectorAll("[data-timeline-close]").forEach((element) => {
    element.addEventListener("click", (event) => {
      if (event.target !== element && !element.classList.contains("modal-close")) return;
      timelineExpanded = false;
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
      const previousContent = button.innerHTML;
      try {
        await navigator.clipboard?.writeText(button.dataset.copy);
      } catch (error) {
        // Clipboard can be blocked in preview; the visual prototype still keeps the route visible.
      }
      button.textContent = t("common.copied");
      setTimeout(() => {
        button.innerHTML = previousContent;
      }, 1200);
    });
  });
}

window.addEventListener("hashchange", render);
initTelegramWebApp();
render();
