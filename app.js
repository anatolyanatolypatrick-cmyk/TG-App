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
      report: "Отчёт по циклу",
      referralBalance: "Реферальный баланс",
      team: "Команда",
      savedAddresses: "Сохранённые адреса",
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
      reportTitle: "Отчёт по циклу",
    },
    profile: {
      title: "Мой профиль",
      description: "Управляйте циклами, адресами и реферальными начислениями в одном месте.",
      cycleBalance: "Баланс циклов",
      referralBalance: "Реферальный баланс",
      team: "Команда",
      teamHint: "Рефералы, уровни и начисления",
      savedAddresses: "Сохранённые адреса",
      savedAddressesHint: "Адреса, связанные с циклами и выплатами",
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
      pending: "Ожидающие",
      active: "Активные",
      completed: "Завершённые",
      cancelled: "Отменённые",
      all: "Все",
      title: "Фильтр циклов",
      empty: "В этом фильтре пока нет созданных циклов.",
      activeEmpty: "Активных запущенных циклов нет.",
    },
    statuses: {
      CREATED: "Ожидает перевод",
      AWAITING_TRANSFER: "Ожидает перевод",
      DETECTED: "Перевод найден",
      CONFIRMING: "Подтверждается",
      CONFIRMED: "Подтверждён",
      ACTIVE: "Активен",
      COMPLETED: "Ожидает отчёт",
      REPORT_READY: "Отчёт готов",
      PAYOUT_PENDING: "Отчёт готов",
      PAYOUT_APPROVED: "Отчёт готов",
      PAYOUT_SENT: "Средства отправлены",
      PAYOUT_CONFIRMED: "Завершён",
      ON_HOLD: "На проверке",
      MANUAL_REVIEW: "На проверке",
      CANCELLED: "Отменён",
      REJECTED: "Отклонён",
      UNKNOWN: "Неизвестный статус",
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
      timelineWaitingReport: "Формируется отчёт",
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
      reportAction: "Открыть отчёт",
      cancelCycle: "Отменить цикл",
      timelineSteps: {
        created: "Цикл создан",
        awaitingTransfer: "Ожидает перевод",
        detected: "Перевод обнаружен",
        confirming: "Ожидает подтверждение",
        confirmed: "Перевод подтверждён",
        active: "Цикл активен",
        working: "Алгоритм работает",
        completed: "Алгоритм завершил работу",
        report: "Отчёт готов",
        payoutSent: "Средства отправлены",
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
      report: "Cycle report",
      referralBalance: "Referral balance",
      team: "Team",
      savedAddresses: "Saved addresses",
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
      reportTitle: "Cycle report",
    },
    profile: {
      title: "My profile",
      description: "Manage cycles, addresses, and referral accruals in one place.",
      cycleBalance: "Cycle balance",
      referralBalance: "Referral balance",
      team: "Team",
      teamHint: "Referrals, levels, and accruals",
      savedAddresses: "Saved addresses",
      savedAddressesHint: "Addresses linked to cycles and payouts",
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
      pending: "Pending",
      active: "Active",
      completed: "Completed",
      cancelled: "Cancelled",
      all: "All",
      title: "Cycle filter",
      empty: "There are no cycles in this filter yet.",
      activeEmpty: "There are no active running cycles.",
    },
    statuses: {
      CREATED: "Awaiting transfer",
      AWAITING_TRANSFER: "Awaiting transfer",
      DETECTED: "Transfer detected",
      CONFIRMING: "Confirming",
      CONFIRMED: "Confirmed",
      ACTIVE: "Active",
      COMPLETED: "Awaiting report",
      REPORT_READY: "Report ready",
      PAYOUT_PENDING: "Report ready",
      PAYOUT_APPROVED: "Report ready",
      PAYOUT_SENT: "Funds sent",
      PAYOUT_CONFIRMED: "Completed",
      ON_HOLD: "Under review",
      MANUAL_REVIEW: "Under review",
      CANCELLED: "Cancelled",
      REJECTED: "Rejected",
      UNKNOWN: "Unknown status",
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
      timelineWaitingReport: "Report is being prepared",
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
      reportAction: "Open report",
      cancelCycle: "Cancel cycle",
      timelineSteps: {
        created: "Cycle created",
        awaitingTransfer: "Awaiting transfer",
        detected: "Transfer detected",
        confirming: "Awaiting confirmation",
        confirmed: "Transfer confirmed",
        active: "Cycle active",
        working: "Algorithm working",
        completed: "Algorithm finished working",
        report: "Report ready",
        payoutSent: "Funds sent",
        cancelled: "Cycle cancelled",
      },
    },
  },
};

let language = "ru";
let activeInfo = null;
let activeSelect = null;
let activeCycleFilter = "";
let cycleFilterTouched = false;
let cycleFilterOpen = false;
let activeDetailCycle = null;
let timelineExpanded = false;
let returnAddressOpen = false;
let returnAddressDraft = "";
let returnMemoDraft = "";
let activeAddressModal = null;
let activeAddressId = null;
let addressNameDraft = "";
let toastMessage = "";
let toastTimer = null;
let activeReferralModal = null;
let selectedWithdrawalAddressId = "";
let activeWithdrawalRequest = null;
let activeTeamFilter = "all";
let teamFilterOpen = false;
let activeTeamMemberId = null;
let activeTeamLevelInfo = null;
let notificationsOpen = false;
let activeNotificationCategory = "cycle";
const routeHistory = [];
const routeHistoryLimit = 30;
let currentRoute = "home";
let activeHelpView = "home";
let activeInfoArticleId = "";
let activeFaqQuestion = "";
let helpSubjectOpen = false;
let supportSubject = "Проблема с циклом";
let supportMessageDraft = "";
let activeSupportModal = null;
let supportReplyDraft = "";

const profileMock = {
  referralBalance: "24.80 USDT",
};

const referralBalanceMock = {
  available: 24.8,
  withdrawn: 128.4,
  asset: "USDT",
  minWithdrawal: 5,
  history: [
    {
      id: "withdraw-history-1",
      amount: 24.8,
      asset: "USDT",
      addressId: "addr-bybit",
      createdAt: "12.05.26, 14:32",
    },
    {
      id: "withdraw-history-2",
      amount: 18.6,
      asset: "USDT",
      addressId: "addr-empty-name",
      createdAt: "04.05.26, 11:18",
    },
  ],
};

const teamMock = {
  referralLink: "deplex.app/ref/abc123",
  level1: {
    title: "1 уровень",
    invited: 12,
    active: 8,
    earned: "42.80 USDT",
    cycleRate: "0.6%",
    profitRate: "7%",
  },
  level2: {
    title: "2 уровень",
    invited: 8,
    active: 3,
    earned: "18.20 USDT",
    cycleRate: "0.4%",
    profitRate: "5%",
  },
};

const notificationCategories = [
  { id: "cycle", label: "Цикл" },
  { id: "team", label: "Команда" },
  { id: "withdrawal", label: "Вывод" },
  { id: "support", label: "Поддержка" },
];

let notificationItems = [
  { id: "cycle-active", category: "cycle", title: "Цикл активирован", text: "Перевод подтверждён. В цикл зачислено 250 USDT.", date: "12.05.26, 14:32", isNew: true },
  { id: "cycle-started", category: "cycle", title: "Алгоритм начал работу", text: "Торговый цикл запущен. Алгоритм работает в рамках выбранного периода.", date: "12.05.26, 14:36", isNew: true },
  { id: "cycle-completed", category: "cycle", title: "Цикл завершён", text: "Алгоритм завершил работу. Отчёт по циклу скоро будет готов.", date: "11.05.26, 18:00", isNew: false },
  { id: "cycle-report", category: "cycle", title: "Отчёт готов", text: "Отчёт по циклу готов. Результаты доступны в деталях.", date: "11.05.26, 18:12", isNew: false },
  { id: "cycle-cancelled", category: "cycle", title: "Цикл отменён", text: "Цикл отменён. Подробности доступны в деталях цикла.", date: "10.05.26, 10:24", isNew: false },
  { id: "cycle-sent", category: "cycle", title: "Средства отправлены", text: "Распределение по циклу завершено согласно выбранному режиму.", date: "09.05.26, 19:05", isNew: false },
  { id: "team-level-1", category: "team", title: "Реферальное начисление", text: "Начислено 12.40 USDT по 1 уровню.", date: "12.05.26, 15:10", isNew: true },
  { id: "team-level-2", category: "team", title: "Реферальное начисление", text: "Начислено 5.20 USDT по 2 уровню.", date: "11.05.26, 12:40", isNew: false },
  { id: "withdrawal-done", category: "withdrawal", title: "Вывод завершён", text: "Реферальный вывод на сумму 24.80 USDT отправлен на выбранный адрес.", date: "12.05.26, 16:45", isNew: true },
  { id: "withdrawal-rejected", category: "withdrawal", title: "Вывод отклонён", text: "Заявка на вывод не была выполнена. Проверьте данные или обратитесь в поддержку.", date: "08.05.26, 09:20", isNew: false },
  { id: "support-answer", category: "support", title: "Ответ поддержки", text: "Поддержка ответила на ваше обращение.", date: "12.05.26, 13:05", isNew: true },
  { id: "support-closed", category: "support", title: "Обращение закрыто", text: "Ваше обращение было закрыто.", date: "06.05.26, 17:30", isNew: false },
];

const fallbackFaqItems = [
  { category: "cycles", question: "Можно ли пополнить цикл повторно?", answer: "Нет. Цикл можно пополнить только один раз до запуска." },
  { category: "withdrawals", question: "Когда можно вывести реферальный баланс?", answer: "Вывод доступен от 5 USDT." },
];

const fallbackInfoItems = [
  {
    id: "cycles",
    title: "О циклах",
    description: "Что такое торговый цикл и как он работает",
    blocks: [
      { type: "text", content: "Цикл — это период работы выбранного алгоритма." },
      { type: "note", content: "Пополнить цикл можно только один раз." },
    ],
  },
  {
    id: "start-cycle",
    title: "Как запустить цикл",
    description: "Короткая инструкция по запуску",
    blocks: [
      { type: "steps", items: ["Выберите алгоритм", "Задайте параметры цикла", "Отправьте средства", "Дождитесь подтверждения", "Следите за статусом в деталях цикла"] },
    ],
  },
];

let faqItems = fallbackFaqItems;
let infoItems = fallbackInfoItems;
let faqLoadFailed = false;
let infoLoadFailed = false;

const supportSubjects = [
  "Проблема с циклом",
  "Проблема с переводом",
  "Проблема с выплатой",
  "Вопрос по отчёту",
  "Вопрос по аккаунту",
  "Другое",
];

let activeSupportTicket = null;

const supportHistory = [
  {
    id: "ticket-history-1",
    subject: "Проблема с переводом",
    status: "Закрыто",
    date: "08.05.26",
    messages: [
      { author: "user", text: "Перевод долго не определяется.", date: "08.05.26, 11:10" },
      { author: "support", text: "Перевод был найден и обращение закрыто.", date: "08.05.26, 11:42" },
    ],
  },
  {
    id: "ticket-history-2",
    subject: "Вопрос по отчёту",
    status: "Закрыто",
    date: "02.05.26",
    messages: [
      { author: "user", text: "Когда будет доступен отчёт?", date: "02.05.26, 09:20" },
      { author: "support", text: "Отчёт появится после завершения обработки результата.", date: "02.05.26, 10:05" },
    ],
  },
];

const level1Members = [
  {
    id: "level1-singular",
    name: "Singular",
    status: "active",
    activeAmount: 100,
    completedCycles: 4,
    earnedTotal: 18.4,
    earnedFromCycles: 7.5,
    earnedFromProfit: 10.9,
    pendingAmount: 0.6,
    lastEarningDate: "12.05.26",
  },
  {
    id: "level1-user123",
    name: "User123",
    status: "inactive",
    activeAmount: 0,
    completedCycles: 3,
    earnedTotal: 7.2,
    earnedFromCycles: 3.1,
    earnedFromProfit: 4.1,
    pendingAmount: 0,
    lastEarningDate: "09.05.26",
  },
  {
    id: "level1-user456",
    name: "User456",
    status: "inactive",
    activeAmount: 0,
    completedCycles: 0,
    earnedTotal: 0,
    earnedFromCycles: 0,
    earnedFromProfit: 0,
    pendingAmount: 0,
    lastEarningDate: "—",
  },
];

const level2Members = [
  {
    id: "level2-nova",
    name: "Nova",
    status: "active",
    activeAmount: 80,
    completedCycles: 2,
    earnedTotal: 8.4,
    earnedFromCycles: 3.4,
    earnedFromProfit: 5,
    pendingAmount: 0.4,
    lastEarningDate: "11.05.26",
  },
  {
    id: "level2-user789",
    name: "User789",
    status: "inactive",
    activeAmount: 0,
    completedCycles: 1,
    earnedTotal: 2.2,
    earnedFromCycles: 0.9,
    earnedFromProfit: 1.3,
    pendingAmount: 0,
    lastEarningDate: "03.05.26",
  },
  {
    id: "level2-user101",
    name: "User101",
    status: "inactive",
    activeAmount: 0,
    completedCycles: 0,
    earnedTotal: 0,
    earnedFromCycles: 0,
    earnedFromProfit: 0,
    pendingAmount: 0,
    lastEarningDate: "—",
  },
];

let savedAddressItems = [
  {
    id: "addr-bybit",
    name: "Bybit",
    network: "TON",
    asset: "USDT",
    address: "UQDx9tN1Ben9s10a3PtUrgZLQ76Kgf8PXuIa5LDOFRnBa7kLm",
    addedAt: "12.05.26",
    activeCycle: false,
  },
  {
    id: "addr-empty-name",
    name: "",
    network: "Arbitrum",
    asset: "USDC",
    address: "0x7B18e2F9A24c4f8D9a35e43a19b5E30F46A812C7",
    addedAt: "10.05.26",
    activeCycle: false,
  },
  {
    id: "addr-active-cycle",
    name: "Trust Wallet",
    network: "TON",
    asset: "USDT",
    address: "UQCm3rT8DeplexActiveCycleWallet92nZ4qS5vWk7pQr",
    addedAt: "09.05.26",
    activeCycle: true,
  },
];

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

function displayCycleStatus(status) {
  return displayCycleStatusMap[status] || "UNKNOWN";
}

function displayStatusLabel(status) {
  const displayStatus = displayCycleStatus(status);
  return displayStatus === "UNKNOWN" && status ? status : statusLabel(displayStatus);
}

function displayStatusMeta(status) {
  return cycleStatusMeta[displayCycleStatus(status)] || cycleStatusMeta.UNKNOWN;
}

function filterLabel(filter) {
  return t(`filters.${filter.id}`);
}

function defaultCycleFilterId() {
  const pendingFilter = cycleFilters.find((filter) => filter.id === "pending");
  const activeFilter = cycleFilters.find((filter) => filter.id === "active");
  if (pendingFilter?.statuses?.some((status) => cycleItems.some((cycle) => cycle.status === status))) return "pending";
  if (activeFilter?.statuses?.some((status) => cycleItems.some((cycle) => cycle.status === status))) return "active";
  return "active";
}

function finishLabel(id) {
  return t(`start.finishModes.${id}`);
}

function go(route, { skipHistory = false } = {}) {
  const previousRoute = currentRoute || getRoute();
  if (!skipHistory && previousRoute && previousRoute !== route) {
    routeHistory.push(previousRoute);
    if (routeHistory.length > routeHistoryLimit) routeHistory.shift();
  }
  currentRoute = route;
  window.location.hash = route === "home" ? "" : route;
}

function goBack(fallbackRoute = "home") {
  const previousRoute = routeHistory.pop() || fallbackRoute || "home";
  go(previousRoute, { skipHistory: true });
  if (getRoute() === previousRoute) render();
}

const routeTitleKeys = {
  "referral-balance": "routes.referralBalance",
  team: "routes.team",
  "saved-addresses": "routes.savedAddresses",
  "team-level-1": "routes.team",
  "team-level-2": "routes.team",
};

const profileSectionRoutes = new Set(["profile", "referral-balance", "team", "saved-addresses", "team-level-1", "team-level-2"]);

function getRoute() {
  const rawHash = window.location.hash.replace("#", "");
  const route = rawHash.split(/[?&=]/)[0];
  const knownRoutes = new Set(["home", "algorithms", "cycles", "profile", "help", "aurum", "flux", "detail", "metrics", "report", "referral-balance", "team", "saved-addresses", "team-level-1", "team-level-2"]);
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
  { id: "pending", statuses: ["CREATED", "AWAITING_TRANSFER", "DETECTED", "CONFIRMING", "CONFIRMED"] },
  { id: "active", statuses: ["ACTIVE", "COMPLETED", "REPORT_READY", "PAYOUT_PENDING", "PAYOUT_APPROVED", "PAYOUT_SENT", "ON_HOLD", "MANUAL_REVIEW"] },
  { id: "completed", statuses: ["PAYOUT_CONFIRMED"] },
  { id: "cancelled", statuses: ["CANCELLED", "REJECTED"] },
  { id: "all", statuses: null },
];

const cycleStatusMeta = {
  CREATED: { tone: "waiting" },
  AWAITING_TRANSFER: { tone: "waiting" },
  DETECTED: { tone: "waiting" },
  CONFIRMING: { tone: "waiting" },
  CONFIRMED: { tone: "active" },
  ACTIVE: { tone: "active" },
  COMPLETED: { tone: "completed" },
  REPORT_READY: { tone: "report" },
  PAYOUT_PENDING: { tone: "report" },
  PAYOUT_APPROVED: { tone: "report" },
  PAYOUT_SENT: { tone: "report" },
  PAYOUT_CONFIRMED: { tone: "completed" },
  ON_HOLD: { tone: "waiting" },
  MANUAL_REVIEW: { tone: "waiting" },
  CANCELLED: { tone: "cancelled" },
  REJECTED: { tone: "cancelled" },
  UNKNOWN: { tone: "default" },
};

const displayCycleStatusMap = {
  CREATED: "AWAITING_TRANSFER",
  AWAITING_TRANSFER: "AWAITING_TRANSFER",
  DETECTED: "AWAITING_TRANSFER",
  CONFIRMING: "AWAITING_TRANSFER",
  CONFIRMED: "ACTIVE",
  ACTIVE: "ACTIVE",
  COMPLETED: "COMPLETED",
  REPORT_READY: "REPORT_READY",
  PAYOUT_PENDING: "REPORT_READY",
  PAYOUT_APPROVED: "REPORT_READY",
  PAYOUT_SENT: "PAYOUT_SENT",
  PAYOUT_CONFIRMED: "PAYOUT_CONFIRMED",
  ON_HOLD: "MANUAL_REVIEW",
  MANUAL_REVIEW: "MANUAL_REVIEW",
  CANCELLED: "CANCELLED",
  REJECTED: "REJECTED",
};

const timelineByStatus = {
  CREATED: [
    { id: "created", state: "current" },
  ],
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
  PAYOUT_PENDING: [
    { id: "created", state: "complete" },
    { id: "detected", state: "complete" },
    { id: "confirmed", state: "complete" },
    { id: "active", state: "complete" },
    { id: "report", state: "current" },
  ],
  PAYOUT_APPROVED: [
    { id: "created", state: "complete" },
    { id: "detected", state: "complete" },
    { id: "confirmed", state: "complete" },
    { id: "active", state: "complete" },
    { id: "report", state: "current" },
  ],
  PAYOUT_SENT: [
    { id: "created", state: "complete" },
    { id: "detected", state: "complete" },
    { id: "confirmed", state: "complete" },
    { id: "active", state: "complete" },
    { id: "report", state: "complete" },
    { id: "payoutSent", state: "current" },
  ],
  PAYOUT_CONFIRMED: [
    { id: "created", state: "complete" },
    { id: "detected", state: "complete" },
    { id: "confirmed", state: "complete" },
    { id: "active", state: "complete" },
    { id: "report", state: "complete" },
    { id: "payoutSent", state: "current" },
  ],
  ON_HOLD: [
    { id: "created", state: "complete" },
    { id: "detected", state: "complete" },
    { id: "confirmed", state: "complete" },
    { id: "active", state: "complete" },
    { id: "working", state: "current" },
  ],
  MANUAL_REVIEW: [
    { id: "created", state: "complete" },
    { id: "detected", state: "complete" },
    { id: "confirmed", state: "complete" },
    { id: "active", state: "complete" },
    { id: "working", state: "current" },
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

const mockLiveMetricsByCycleId = {
  "cycle-aurum-active": {
    cycleId: "cycle-aurum-active",
    algorithmName: "Aurum Prime",
    statusLabel: "Алгоритм работает",
    period: "12.05.26 — 19.05.26",
    currentResultPercent: 4.8,
    currentResultAmount: "+14.40 USDT",
    tradesCount: 24,
    winRate: 83,
    lastUpdated: "Сегодня, 14:32",
    chartPoints: [0, 0.6, 0.3, 1.4, 1.1, 2.2, 1.8, 3.1, 2.7, 3.8, 3.5, 4.8],
  },
  "cycle-ton-awaiting": {
    cycleId: "cycle-ton-awaiting",
    algorithmName: "Aurum Prime",
    statusLabel: "Ожидает запуск",
    period: "12.05.26 — 19.05.26",
    currentResultPercent: 0,
    tradesCount: 0,
    winRate: 0,
    lastUpdated: "Пока нет данных",
    chartPoints: [],
  },
  "cycle-flux-report": {
    cycleId: "cycle-flux-report",
    algorithmName: "Flux Node",
    statusLabel: "Отчёт готов",
    period: "04.05.26 — 10.05.26",
    currentResultPercent: 7.4,
    currentResultAmount: "+37.00 USDT",
    tradesCount: 31,
    winRate: 78,
    lastUpdated: "10.05.26, 18:12",
    chartPoints: [0, 0.8, 0.4, 1.9, 2.6, 2.1, 3.4, 4.2, 3.8, 5.6, 6.1, 7.4],
  },
  "new-aurum": {
    cycleId: "new-aurum",
    algorithmName: "Aurum Prime",
    statusLabel: "Ожидает запуск",
    period: "12.05.26 — 19.05.26",
    currentResultPercent: 0,
    tradesCount: 0,
    winRate: 0,
    lastUpdated: "Пока нет данных",
    chartPoints: [],
  },
  "new-flux": {
    cycleId: "new-flux",
    algorithmName: "Flux Node",
    statusLabel: "Ожидает запуск",
    period: "12.05.26 — 19.05.26",
    currentResultPercent: 0,
    tradesCount: 0,
    winRate: 0,
    lastUpdated: "Пока нет данных",
    chartPoints: [],
  },
};

const mockReportsByCycleId = {
  "cycle-flux-report": {
    cycleId: "cycle-flux-report",
    algorithmName: "Flux Node",
    period: "04.05.26 — 10.05.26",
    initialAmount: "100 USDT",
    grossResult: "+10.00 USDT",
    grossResultPercent: 10,
    referralDeductions: "-1.00 USDT",
    feeAmount: "-0.50 USDT",
    netResult: "+8.50 USDT",
    netResultPercent: 8.5,
    payoutAmount: "108.50 USDT",
    reportChartPoints: [0, 1.2, 0.7, 2.8, 3.5, 2.9, 5.4, 6.1, 5.7, 7.8, 8.6, 10],
    publishedAt: "10.05.26, 18:12",
  },
  "cycle-aurum-completed": {
    cycleId: "cycle-aurum-completed",
    algorithmName: "Aurum Prime",
    period: "28.04.26 — 04.05.26",
    initialAmount: "100 USDT",
    grossResult: "-6.00 USDT",
    grossResultPercent: -6,
    referralDeductions: "-1.00 USDT",
    feeAmount: "-0.50 USDT",
    netResult: "-7.50 USDT",
    netResultPercent: -7.5,
    payoutAmount: "92.50 USDT",
    reportChartPoints: [0, -0.8, -0.4, -1.6, -2.4, -1.9, -3.8, -3.1, -4.9, -4.5, -5.6, -6],
    publishedAt: "04.05.26, 18:12",
  },
};

function cycleBalanceTotal() {
  const activeStatuses = new Set(["AWAITING_TRANSFER", "DETECTED", "CONFIRMING", "CONFIRMED", "ACTIVE"]);
  const totals = cycleItems.reduce((result, cycle) => {
    if (!activeStatuses.has(cycle.status)) return result;
    const [rawAmount, asset] = cycle.amount.split(" ");
    const amount = Number(rawAmount.replace(/\s/g, ""));
    if (!asset || Number.isNaN(amount)) return result;
    result[asset] = (result[asset] || 0) + amount;
    return result;
  }, {});

  return Object.entries(totals).map(([asset, amount]) => `${amount.toLocaleString("ru-RU")} ${asset}`).join(" · ") || "0 USDT";
}

function telegramUserName() {
  const user = window.Telegram?.WebApp?.initDataUnsafe?.user;
  return user?.username ? `@${user.username}` : user?.first_name || "Singular";
}

function savedAddressName(address) {
  return address.name?.trim() || "Без названия";
}

function shortAddress(value) {
  if (!value || value.length <= 13) return value;
  return `${value.slice(0, 5)}...${value.slice(-5)}`;
}

function addressRoute(address) {
  return `${address.network} · ${address.asset}`;
}

function currentAddress() {
  return savedAddressItems.find((address) => address.id === activeAddressId);
}

function formatUsdt(amount) {
  return `${amount.toFixed(2)} USDT`;
}

function formatSignedPercent(value) {
  const number = Number(value) || 0;
  if (Math.abs(number) < 0.05) return "0.0%";
  return `${number > 0 ? "+" : ""}${number.toFixed(1)}%`;
}

function performanceTone(value) {
  const number = Number(value) || 0;
  if (number > 0.05) return "positive";
  if (number < -0.05) return "negative";
  return "neutral";
}

function chartPath(points, width = 100, height = 44) {
  if (!Array.isArray(points) || points.length < 2) return null;
  const min = Math.min(...points);
  const max = Math.max(...points);
  const range = max - min || 1;
  const topPadding = 5;
  const bottomPadding = 7;
  const usableHeight = height - topPadding - bottomPadding;
  const coords = points.map((point, index) => {
    const x = points.length === 1 ? 0 : (index / (points.length - 1)) * width;
    const y = topPadding + (1 - (point - min) / range) * usableHeight;
    return [Number(x.toFixed(2)), Number(y.toFixed(2))];
  });

  return coords.map(([x, y], index) => `${index === 0 ? "M" : "L"}${x} ${y}`).join(" ");
}

function performanceChart({ title, percent, points }) {
  const path = chartPath(points);
  const tone = performanceTone(percent);
  const gradientId = `chart-gradient-${tone}`;

  return `
    <div class="performance-chart glass-panel is-${tone}">
      <div class="performance-chart-head">
        <span>${title}</span>
        <strong>${formatSignedPercent(percent)}</strong>
      </div>
      ${path ? `
        <svg class="performance-chart-svg" viewBox="0 0 100 44" preserveAspectRatio="none" aria-hidden="true">
          <defs>
            <linearGradient id="${gradientId}" x1="0" x2="0" y1="0" y2="1">
              <stop offset="0%" stop-color="currentColor" stop-opacity="0.22" />
              <stop offset="100%" stop-color="currentColor" stop-opacity="0" />
            </linearGradient>
          </defs>
          <path class="performance-chart-area" d="${path} L100 44 L0 44 Z" fill="url(#${gradientId})"></path>
          <path class="performance-chart-line" d="${path}"></path>
        </svg>
      ` : `<div class="performance-chart-empty">Данных для графика пока нет</div>`}
    </div>
  `;
}

function formatMemberUsdt(amount) {
  return amount === 0 ? "0 USDT" : formatUsdt(amount);
}

function amountValueClass(value) {
  return typeof value === "string" && /\bUSDT\b/.test(value) ? "amount-value" : "";
}

function withdrawalAddress() {
  return savedAddressItems.find((address) => address.id === selectedWithdrawalAddressId);
}

function withdrawalHistoryAddress(item) {
  return savedAddressItems.find((address) => address.id === item.addressId) || savedAddressItems[0];
}

function memberStatusLabel(member) {
  return member.status === "active" ? "Активен" : "Неактивен";
}

function teamLevelConfig(level) {
  const isLevel1 = level === "1";
  return {
    id: level,
    data: isLevel1 ? teamMock.level1 : teamMock.level2,
    members: isLevel1 ? level1Members : level2Members,
    description: isLevel1
      ? "Прямые приглашённые участники и начисления по их активности."
      : "Участники второго уровня и начисления по их активности.",
  };
}

function filteredTeamMembers(members) {
  if (activeTeamFilter === "active") return members.filter((member) => member.status === "active");
  if (activeTeamFilter === "inactive") return members.filter((member) => member.status !== "active");
  return members;
}

function teamFilterLabel() {
  const labels = { all: "Все", active: "Активные", inactive: "Неактивные" };
  return labels[activeTeamFilter] || labels.all;
}

function activeTeamMember() {
  return [...level1Members, ...level2Members].find((member) => member.id === activeTeamMemberId);
}

function showToast(message) {
  toastMessage = message;
  window.clearTimeout(toastTimer);
  render();
  toastTimer = window.setTimeout(() => {
    toastMessage = "";
    render();
  }, 1600);
}

function toastMarkup() {
  return toastMessage ? `<div class="app-toast glass-panel" role="status">${toastMessage}</div>` : "";
}

function notificationCategoryLabel() {
  return notificationCategories.find((category) => category.id === activeNotificationCategory)?.label || "Цикл";
}

function visibleNotifications() {
  return notificationItems.filter((item) => item.category === activeNotificationCategory);
}

function notificationsModal() {
  if (!notificationsOpen) return "";
  const items = visibleNotifications();

  return `
    <div class="modal-layer" data-notifications-close>
      <div class="compact-modal notifications-modal glass-card" role="dialog" aria-modal="true">
        <button class="modal-close" type="button" data-notifications-close aria-label="${t("common.close")}">×</button>
        <h2>${t("common.notifications")}</h2>
        <div class="notification-tabs" role="tablist" aria-label="Категории уведомлений">
          ${notificationCategories.map((category) => `
            <button class="notification-tab glass-panel ${activeNotificationCategory === category.id ? "is-active" : ""}" type="button" data-notification-category="${category.id}">
              ${category.label}
            </button>
          `).join("")}
        </div>
        <div class="notification-list" aria-label="${notificationCategoryLabel()}">
          ${items.length ? items.map(notificationCard).join("") : `
            <div class="empty-cycles glass-panel">
              <h2>Уведомлений пока нет</h2>
            </div>
          `}
        </div>
      </div>
    </div>
  `;
}

function notificationCard(item) {
  return `
    <button class="notification-card glass-panel ${item.isNew ? "is-new" : "is-read"}" type="button" data-notification-read="${item.id}">
      <span class="notification-title-row">
        <strong>${item.title}</strong>
        ${item.isNew ? `<span class="notification-new-badge">Новое</span>` : ""}
      </span>
      <span>${item.text}</span>
      <small>${item.date}</small>
    </button>
  `;
}

async function loadHelpData() {
  try {
    const response = await fetch("./data/faq.json");
    if (!response.ok) throw new Error("FAQ unavailable");
    faqItems = await response.json();
    faqLoadFailed = false;
  } catch (error) {
    faqItems = fallbackFaqItems;
    faqLoadFailed = true;
  }

  try {
    const response = await fetch("./data/info.json");
    if (!response.ok) throw new Error("Info unavailable");
    infoItems = await response.json();
    infoLoadFailed = false;
  } catch (error) {
    infoItems = fallbackInfoItems;
    infoLoadFailed = true;
  }

  render();
}

function currentInfoArticle() {
  return infoItems.find((item) => item.id === activeInfoArticleId);
}

function activeSupportConversation() {
  if (activeSupportModal === "active") return activeSupportTicket;
  return supportHistory.find((ticket) => ticket.id === activeSupportModal);
}

function currentCycleReport() {
  const cycle = getActiveDetailCycle();
  return cycle ? mockReportsByCycleId[cycle.id] : null;
}

function isReportAvailable(cycle) {
  return ["REPORT_READY", "PAYOUT_PENDING", "PAYOUT_APPROVED", "PAYOUT_SENT", "PAYOUT_CONFIRMED"].includes(cycle?.status);
}

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
      note: ["CREATED", "AWAITING_TRANSFER"].includes(cycle.status) && step.id === "created"
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
            <button class="icon-button glass-panel" type="button" data-notifications-open aria-label="${t("common.notifications")}">${bellIcon}</button>
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
            <img class="nav-arrow" src="./Icons/Arrow_Balance.png" alt="" aria-hidden="true" />
            <span>
              <span class="nav-title">${t("home.chooseAlgorithm")}</span>
              <span class="nav-subtitle">${t("home.chooseAlgorithmHint")}</span>
            </span>
          </button>
          <button class="nav-card glass-panel" type="button" data-route="cycles">
            <img class="nav-arrow" src="./Icons/Arrow_Balance.png" alt="" aria-hidden="true" />
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

function profileScreen() {
  return `
    <div class="profile-screen">
      <section class="glass-card page-hero">
        <div class="top-bar">
          <button class="back-button glass-panel" type="button" data-route="home" aria-label="${t("common.back")}">
            <img src="./Icons/Arrow.png" alt="" aria-hidden="true" />
          </button>
          <h1 class="page-top-title">${t("profile.title")}</h1>
          <div class="top-actions">
            <button class="icon-button glass-panel" type="button" data-notifications-open aria-label="${t("common.notifications")}">${bellIcon}</button>
            <button class="lang-button glass-panel" type="button" data-lang>${langLabel()}</button>
          </div>
        </div>

        <div class="page-title-block profile-title-block">
          <span class="profile-user-name">${telegramUserName()}</span>
          <span>${t("profile.description")}</span>
        </div>
      </section>

      <section class="glass-card cycles-card profile-card">
        <div class="profile-summary-grid">
          <button class="detail-metric balance-card balance-card-action profile-stat-card glass-panel" type="button" data-route="cycles">
            <span class="balance-label">${t("profile.cycleBalance")}</span>
            <strong class="balance-amount ${amountValueClass(cycleBalanceTotal())}">${cycleBalanceTotal()}</strong>
            <img class="balance-arrow" src="./Icons/Arrow_Balance.png" alt="" aria-hidden="true" />
          </button>
          <button class="detail-metric balance-card balance-card-action profile-stat-card glass-panel" type="button" data-route="referral-balance">
            <span class="balance-label">${t("profile.referralBalance")}</span>
            <strong class="balance-amount ${amountValueClass(profileMock.referralBalance)}">${profileMock.referralBalance}</strong>
            <img class="balance-arrow" src="./Icons/Arrow_Balance.png" alt="" aria-hidden="true" />
          </button>
        </div>

        <div class="profile-actions">
          <button class="nav-card glass-panel" type="button" data-route="team">
            <img class="nav-arrow" src="./Icons/Arrow_Balance.png" alt="" aria-hidden="true" />
            <span>
              <span class="nav-title">${t("profile.team")}</span>
              <span class="nav-subtitle">${t("profile.teamHint")}</span>
            </span>
          </button>
          <button class="nav-card glass-panel" type="button" data-route="saved-addresses">
            <img class="nav-arrow" src="./Icons/Arrow_Balance.png" alt="" aria-hidden="true" />
            <span>
              <span class="nav-title">${t("profile.savedAddresses")}</span>
              <span class="nav-subtitle">${t("profile.savedAddressesHint")}</span>
            </span>
          </button>
        </div>
      </section>

      ${bottomNav("profile")}
    </div>
  `;
}

function savedAddressesScreen() {
  return `
    <div class="saved-addresses-screen profile-screen">
      <section class="glass-card page-hero">
        <div class="top-bar">
          <button class="back-button glass-panel" type="button" data-route="profile" aria-label="${t("common.back")}">
            <img src="./Icons/Arrow.png" alt="" aria-hidden="true" />
          </button>
          <h1 class="page-top-title">Сохранённые адреса</h1>
          <div class="top-actions">
            <button class="icon-button glass-panel" type="button" data-notifications-open aria-label="${t("common.notifications")}">${bellIcon}</button>
            <button class="lang-button glass-panel" type="button" data-lang>${langLabel()}</button>
          </div>
        </div>

        <div class="page-title-block">
          <span>Адреса, связанные с вашими циклами и выплатами.</span>
        </div>
      </section>

      <section class="glass-card cycles-card saved-addresses-card">
        ${savedAddressItems.length ? `
          <div class="address-list">
            ${savedAddressItems.map(savedAddressCard).join("")}
          </div>
        ` : `
          <div class="empty-cycles glass-panel">
            <h2>Сохранённых адресов пока нет</h2>
            <p>Адрес появится здесь после создания цикла.</p>
          </div>
        `}
      </section>

      ${bottomNav("profile")}
      ${addressModal()}
      ${toastMarkup()}
    </div>
  `;
}

function savedAddressCard(address) {
  return `
    <article class="address-card glass-panel">
      <header class="address-card-head">
        <button class="address-name-button" type="button" data-address-rename="${address.id}">
          <span>${savedAddressName(address)}</span>
          <span aria-hidden="true">✎</span>
        </button>
        <button class="address-delete-button detail-action-danger glass-panel" type="button" data-address-delete="${address.id}">
          Удалить
        </button>
      </header>

      <div class="cycle-asset-row address-route-row">
        <span class="cycle-token">${address.network}</span>
        <span class="cycle-token">${address.asset}</span>
        ${address.activeCycle ? `<span class="cycle-status is-active">Активный цикл</span>` : ""}
      </div>

      <button class="address-short-field glass-panel" type="button" data-address-full="${address.id}">
        <span>${shortAddress(address.address)}</span>
        <span class="copy-icon-button" aria-hidden="true"><span class="copy-icon-shape"></span></span>
      </button>

      <span class="cycle-created">Добавлен: ${address.addedAt}</span>
    </article>
  `;
}

function addressModal() {
  const address = currentAddress();
  if (!activeAddressModal || !address) return "";

  if (activeAddressModal === "rename") return renameAddressModal(address);
  if (activeAddressModal === "delete") return deleteAddressModal(address);
  if (activeAddressModal === "full") return fullAddressModal(address);
  return "";
}

function renameAddressModal(address) {
  return `
    <div class="modal-layer" data-address-modal-close>
      <div class="compact-modal glass-card" role="dialog" aria-modal="true">
        <button class="modal-close" type="button" data-address-modal-close aria-label="${t("common.close")}">×</button>
        <h2>Переименовать адрес</h2>
        <textarea class="wallet-address compact-textarea glass-panel" data-address-name-input rows="1">${addressNameDraft}</textarea>
        <div class="modal-actions-row">
          <button class="detail-action-button glass-panel" type="button" data-address-modal-cancel>Отмена</button>
          <button class="detail-action-button glass-panel" type="button" data-address-rename-save>Сохранить</button>
        </div>
      </div>
    </div>
  `;
}

function deleteAddressModal(address) {
  return `
    <div class="modal-layer" data-address-modal-close>
      <div class="compact-modal glass-card" role="dialog" aria-modal="true">
        <button class="modal-close" type="button" data-address-modal-close aria-label="${t("common.close")}">×</button>
        <h2>Удалить адрес?</h2>
        <p class="section-description">Адрес будет удалён из сохранённых. Если он понадобится снова, добавить можно через создание цикла.</p>
        <div class="modal-actions-row">
          <button class="detail-action-button glass-panel" type="button" data-address-modal-cancel>Отмена</button>
          <button class="detail-action-button detail-action-danger glass-panel" type="button" data-address-delete-confirm="${address.id}">Удалить</button>
        </div>
      </div>
    </div>
  `;
}

function fullAddressModal(address) {
  return `
    <div class="modal-layer" data-address-modal-close>
      <div class="compact-modal glass-card" role="dialog" aria-modal="true">
        <button class="modal-close" type="button" data-address-modal-close aria-label="${t("common.close")}">×</button>
        <h2>Полный адрес</h2>
        <div class="address-modal-summary glass-panel">
          <strong>${savedAddressName(address)}</strong>
          <span>${addressRoute(address)}</span>
          <button class="address-full-value" type="button" data-copy="${address.address}" data-copy-toast="Адрес скопирован">${address.address}</button>
        </div>
        <button class="create-cycle-button compact-command" type="button" data-copy="${address.address}" data-copy-toast="Адрес скопирован">Скопировать</button>
      </div>
    </div>
  `;
}

function referralBalanceScreen() {
  const selectedAddress = withdrawalAddress();

  return `
    <div class="referral-balance-screen profile-screen">
      <section class="glass-card page-hero">
        <div class="top-bar">
          <button class="back-button glass-panel" type="button" data-route="profile" aria-label="${t("common.back")}">
            <img src="./Icons/Arrow.png" alt="" aria-hidden="true" />
          </button>
          <h1 class="page-top-title">Реферальный баланс</h1>
          <div class="top-actions">
            <button class="icon-button glass-panel" type="button" data-notifications-open aria-label="${t("common.notifications")}">${bellIcon}</button>
            <button class="lang-button glass-panel" type="button" data-lang>${langLabel()}</button>
          </div>
        </div>

        <div class="page-title-block">
          <span>Выберите сохранённый адрес и запросите вывод начислений.</span>
        </div>
      </section>

      <section class="glass-card cycles-card referral-card">
        <div class="profile-summary-grid">
          <div class="detail-metric balance-card glass-panel">
            <span class="balance-label">Доступно</span>
            <strong class="balance-amount ${amountValueClass(formatUsdt(referralBalanceMock.available))}">${formatUsdt(referralBalanceMock.available)}</strong>
          </div>
          <div class="detail-metric balance-card glass-panel">
            <span class="balance-label">Выведено</span>
            <strong class="balance-amount ${amountValueClass(formatUsdt(referralBalanceMock.withdrawn))}">${formatUsdt(referralBalanceMock.withdrawn)}</strong>
          </div>
        </div>
        <p class="section-description referral-note">Минимальная сумма вывода — 5 USDT.</p>

        <div class="form-group referral-address-group">
          <span class="section-label">Адрес для вывода</span>
          ${selectedAddress ? selectedWithdrawalAddressCard(selectedAddress) : `
            <button class="return-address-empty glass-panel" type="button" data-referral-address-open>
              <span>Выберите сохранённый адрес</span>
              <img src="./Icons/Arrow.png" alt="" aria-hidden="true" />
            </button>
          `}
        </div>

        <button class="create-cycle-button" type="button" data-withdraw-request>Запросить вывод</button>
        ${activeWithdrawalRequest ? withdrawalRequestCard() : ""}
        <button class="detail-action-button glass-panel history-button" type="button" data-withdraw-history>История выводов</button>
      </section>

      ${bottomNav("profile")}
      ${referralModal()}
      ${toastMarkup()}
    </div>
  `;
}

function selectedWithdrawalAddressCard(address) {
  return `
    <button class="withdraw-address-card glass-panel" type="button" data-referral-address-open>
      <span class="withdraw-address-top">
        <strong>${savedAddressName(address)}</strong>
        <span>${addressRoute(address)}</span>
      </span>
      <span class="withdraw-address-bottom">
        <span>${shortAddress(address.address)}</span>
        <span aria-hidden="true">✎</span>
      </span>
    </button>
  `;
}

function referralModal() {
  if (activeReferralModal === "address") return referralAddressModal();
  if (activeReferralModal === "confirm") return referralConfirmModal();
  if (activeReferralModal === "history") return referralHistoryModal();
  return "";
}

function referralAddressModal() {
  return `
    <div class="modal-layer" data-referral-modal-close>
      <div class="compact-modal glass-card" role="dialog" aria-modal="true">
        <button class="modal-close" type="button" data-referral-modal-close aria-label="${t("common.close")}">×</button>
        <h2>Выберите адрес</h2>
        <div class="address-list">
          ${savedAddressItems.map((address) => `
            <button class="withdraw-address-card glass-panel ${selectedWithdrawalAddressId === address.id ? "is-active" : ""}" type="button" data-referral-address-select="${address.id}">
              <span class="withdraw-address-top">
                <strong>${savedAddressName(address)}</strong>
                <span>${addressRoute(address)}</span>
              </span>
              <span class="withdraw-address-bottom">
                <span>${shortAddress(address.address)}</span>
              </span>
            </button>
          `).join("")}
        </div>
      </div>
    </div>
  `;
}

function referralConfirmModal() {
  const address = withdrawalAddress();
  if (!address) return "";

  return `
    <div class="modal-layer" data-referral-modal-close>
      <div class="compact-modal glass-card" role="dialog" aria-modal="true">
        <button class="modal-close" type="button" data-referral-modal-close aria-label="${t("common.close")}">×</button>
        <h2>Подтвердите вывод</h2>
        <div class="address-modal-summary glass-panel">
          <span class="withdraw-summary-row"><strong>${referralBalanceMock.available.toFixed(2)}</strong><span>${addressRoute(address)}</span></span>
          <strong>${savedAddressName(address)}</strong>
          <span>${shortAddress(address.address)}</span>
        </div>
        <p class="section-description modal-description">После подтверждения заявка будет отправлена на обработку.</p>
        <div class="modal-actions-row">
          <button class="detail-action-button glass-panel" type="button" data-referral-modal-cancel>Отмена</button>
          <button class="detail-action-button glass-panel" type="button" data-withdraw-confirm>Подтвердить</button>
        </div>
      </div>
    </div>
  `;
}

function withdrawalRequestCard() {
  const address = savedAddressItems.find((item) => item.id === activeWithdrawalRequest.addressId);
  if (!address) return "";

  return `
    <article class="withdraw-request-card glass-panel">
      <div class="withdraw-request-head">
        <strong class="${amountValueClass(formatUsdt(activeWithdrawalRequest.amount))}">${formatUsdt(activeWithdrawalRequest.amount)}</strong>
        <span class="cycle-status is-waiting">${activeWithdrawalRequest.status}</span>
      </div>
      <div class="transfer-divider"></div>
      <div class="withdraw-address-top">
        <strong>${savedAddressName(address)}</strong>
        <span>${addressRoute(address)}</span>
      </div>
      <span class="section-description">${shortAddress(address.address)}</span>
    </article>
  `;
}

function referralHistoryModal() {
  return `
    <div class="modal-layer" data-referral-modal-close>
      <div class="compact-modal glass-card" role="dialog" aria-modal="true">
        <button class="modal-close" type="button" data-referral-modal-close aria-label="${t("common.close")}">×</button>
        <h2>История выводов</h2>
        <div class="withdraw-history-list">
          ${referralBalanceMock.history.map((item) => {
            const address = withdrawalHistoryAddress(item);
            return `
              <article class="address-modal-summary glass-panel">
              <span class="withdraw-summary-row"><strong class="${amountValueClass(formatUsdt(item.amount))}">${formatUsdt(item.amount)}</strong><span>${addressRoute(address)}</span></span>
                <span>${shortAddress(address.address)}</span>
                <span>${item.createdAt}</span>
              </article>
            `;
          }).join("")}
        </div>
      </div>
    </div>
  `;
}

function teamScreen() {
  return `
    <div class="team-screen profile-screen">
      <section class="glass-card page-hero">
        <div class="top-bar">
          <button class="back-button glass-panel" type="button" data-route="profile" aria-label="${t("common.back")}">
            <img src="./Icons/Arrow.png" alt="" aria-hidden="true" />
          </button>
          <h1 class="page-top-title">Команда</h1>
          <div class="top-actions">
            <button class="icon-button glass-panel" type="button" data-notifications-open aria-label="${t("common.notifications")}">${bellIcon}</button>
            <button class="lang-button glass-panel" type="button" data-lang>${langLabel()}</button>
          </div>
        </div>

        <div class="page-title-block">
          <span>Приглашайте участников и отслеживайте начисления по двум уровням команды.</span>
        </div>
      </section>

      <section class="glass-card cycles-card team-card">
        <div class="profile-summary-grid">
          ${teamSummaryCard(teamMock.level1)}
          ${teamSummaryCard(teamMock.level2)}
        </div>

        <div class="form-group team-link-group">
          <span class="section-label">Ссылка для приглашения</span>
          <button class="team-link-field glass-panel" type="button" data-copy="${teamMock.referralLink}" data-copy-toast="Ссылка скопирована">
            <span>${teamMock.referralLink}</span>
            <span class="copy-icon-button" aria-hidden="true"><span class="copy-icon-shape"></span></span>
          </button>
        </div>

        <div class="profile-actions">
          ${teamLevelAction(teamMock.level1, "team-level-1")}
          ${teamLevelAction(teamMock.level2, "team-level-2")}
        </div>
      </section>

      ${bottomNav("profile")}
      ${teamLevelInfoModal()}
      ${toastMarkup()}
    </div>
  `;
}

function teamSummaryCard(level) {
  return `
    <div class="detail-metric team-summary-card glass-panel">
      <div class="team-summary-head">
        <span>${level.title}</span>
        <button class="team-info-button" type="button" data-team-level-info="${level.title === "1 уровень" ? "level1" : "level2"}" aria-label="${level.title}">
          <img src="./Icons/Info.png" alt="" />
        </button>
      </div>
      <p>${level.cycleRate} с суммы цикла</p>
      <p>${level.profitRate} с прибыли</p>
    </div>
  `;
}

function teamLevelAction(level, route) {
  return `
    <button class="nav-card glass-panel team-level-action" type="button" data-route="${route}">
      <img class="nav-arrow" src="./Icons/Arrow_Balance.png" alt="" aria-hidden="true" />
      <span>
        <span class="nav-title">${level.title}</span>
        <span class="nav-subtitle">${level.invited} приглашено · ${level.active} активных</span>
        <span class="team-earned">Начислено: ${level.earned}</span>
      </span>
    </button>
  `;
}

function teamLevelInfoModal() {
  if (!activeTeamLevelInfo) return "";
  const isLevel1 = activeTeamLevelInfo === "level1";
  return `
    <div class="modal-layer" data-team-level-info-close>
      <div class="compact-modal glass-card" role="dialog" aria-modal="true">
        <button class="modal-close" type="button" data-team-level-info-close aria-label="${t("common.close")}">×</button>
        <h2>${isLevel1 ? "1 уровень" : "2 уровень"}</h2>
        <p class="section-description">
          ${isLevel1
            ? "Это участники, которых вы пригласили напрямую. По каждому их циклу начисляется 0.6% от суммы цикла. Если по циклу есть прибыль, дополнительно начисляется 7% с прибыли."
            : "Это участники, приглашённые вашей командой. По каждому их циклу начисляется 0.4% от суммы цикла. Если по циклу есть прибыль, дополнительно начисляется 5% с прибыли."}
        </p>
      </div>
    </div>
  `;
}

function teamLevelScreen(level) {
  const config = teamLevelConfig(level);
  const members = filteredTeamMembers(config.members);

  return `
    <div class="team-level-screen profile-screen">
      <section class="glass-card page-hero">
        <div class="top-bar">
          <button class="back-button glass-panel" type="button" data-route="team" aria-label="${t("common.back")}">
            <img src="./Icons/Arrow.png" alt="" aria-hidden="true" />
          </button>
          <h1 class="page-top-title">Команда</h1>
          <div class="top-actions">
            <button class="icon-button glass-panel" type="button" data-notifications-open aria-label="${t("common.notifications")}">${bellIcon}</button>
            <button class="lang-button glass-panel" type="button" data-lang>${langLabel()}</button>
          </div>
        </div>

        <div class="page-title-block">
          <span>${config.description}</span>
        </div>
      </section>

      <section class="glass-card cycles-card team-level-card">
        <div class="team-level-stats glass-panel">
          <strong>${config.data.title}</strong>
          <span>${config.data.invited} участников</span>
          <span>${config.data.active} активных</span>
          <span>Начислено: ${config.data.earned}</span>
        </div>

        <div class="cycle-toolbar">
          <button class="cycle-filter-trigger glass-panel" type="button" data-team-filter-open aria-label="Фильтр участников">
            <img src="./Icons/filter.png" alt="" />
            <span>${teamFilterLabel()}</span>
          </button>
        </div>

        <div class="member-list">
          ${members.map(teamMemberCard).join("") || `<div class="empty-cycles glass-panel"><h2>Участников нет</h2><p>В этом фильтре пока нет участников.</p></div>`}
        </div>
      </section>

      ${bottomNav("profile")}
      ${teamFilterOpen ? teamFilterModal() : ""}
      ${activeTeamMemberId ? teamMemberModal() : ""}
    </div>
  `;
}

function teamFilterModal() {
  const filters = [
    { id: "all", label: "Все" },
    { id: "active", label: "Активные" },
    { id: "inactive", label: "Неактивные" },
  ];

  return `
    <div class="modal-layer" data-team-filter-close>
      <div class="select-modal glass-card" role="dialog" aria-modal="true">
        <button class="modal-close" type="button" data-team-filter-close aria-label="${t("common.close")}">×</button>
        <h2>Фильтр участников</h2>
        <div class="select-menu glass-panel">
          ${filters.map((filter) => `
            <button class="select-option ${activeTeamFilter === filter.id ? "is-active" : ""}" type="button" data-team-filter="${filter.id}">
              ${filter.label}
            </button>
          `).join("")}
        </div>
      </div>
    </div>
  `;
}

function teamMemberCard(member) {
  const hasCycles = member.completedCycles > 0;
  return `
    <button class="member-card glass-panel" type="button" data-team-member="${member.id}">
      <span class="member-card-head">
        <strong>${member.name}</strong>
        <span class="cycle-status is-${member.status === "active" ? "active" : "cancelled"}">${memberStatusLabel(member)}</span>
      </span>
      <span class="member-lines">
        ${member.activeAmount > 0 ? `<span>В активных циклах: ${formatMemberUsdt(member.activeAmount)}</span>` : ""}
        ${hasCycles ? `<span>Пройдено циклов: ${member.completedCycles}</span>` : `<span>Циклов пока нет</span>`}
        <span>Начислено: ${formatMemberUsdt(member.earnedTotal)}</span>
        <span>Ожидает: ${formatMemberUsdt(member.pendingAmount)}</span>
      </span>
    </button>
  `;
}

function teamMemberModal() {
  const member = activeTeamMember();
  if (!member) return "";

  return `
    <div class="modal-layer" data-team-member-close>
      <div class="compact-modal glass-card" role="dialog" aria-modal="true">
        <button class="modal-close" type="button" data-team-member-close aria-label="${t("common.close")}">×</button>
        <h2>${member.name}</h2>
        <div class="member-modal-lines glass-panel">
          <span>Статус: ${memberStatusLabel(member)}</span>
          <span>Пройдено циклов: ${member.completedCycles}</span>
          ${member.activeAmount > 0 ? `<span>В активных циклах: ${formatMemberUsdt(member.activeAmount)}</span>` : ""}
          <span>Начислено всего: ${formatMemberUsdt(member.earnedTotal)}</span>
          <span>С суммы циклов: ${formatMemberUsdt(member.earnedFromCycles)}</span>
          <span>С прибыли: ${formatMemberUsdt(member.earnedFromProfit)}</span>
          <span>Ожидает: ${formatMemberUsdt(member.pendingAmount)}</span>
          <span>Последнее начисление: ${member.lastEarningDate}</span>
        </div>
      </div>
    </div>
  `;
}

function helpScreen() {
  if (activeHelpView === "info") return helpInfoScreen();
  if (activeHelpView === "faq") return helpFaqScreen();
  if (activeHelpView === "article") return helpArticleScreen();

  return `
    <div class="help-screen profile-screen">
      ${helpHero("Помощь", "Найдите информацию по проекту или отправьте вопрос в поддержку.", "home")}
      <section class="glass-card cycles-card help-card">
        <div class="profile-actions">
          <button class="nav-card glass-panel" type="button" data-help-view="info">
            <img class="nav-arrow" src="./Icons/Arrow_Balance.png" alt="" aria-hidden="true" />
            <span>
              <span class="nav-title">Инфо</span>
              <span class="nav-subtitle">Короткие инструкции по циклам, выплатам и реферальной системе</span>
            </span>
          </button>
          <button class="nav-card glass-panel" type="button" data-help-view="faq">
            <img class="nav-arrow" src="./Icons/Arrow_Balance.png" alt="" aria-hidden="true" />
            <span>
              <span class="nav-title">FAQ</span>
              <span class="nav-subtitle">Ответы на частые вопросы</span>
            </span>
          </button>
        </div>

        <div class="support-block">
          <h2 class="section-label">Связаться с поддержкой</h2>
          <button class="select-control glass-panel" type="button" data-help-subject-open>
            <span>${supportSubject}</span>
            <img class="select-chevron" src="./Icons/Arrow.png" alt="" aria-hidden="true" />
          </button>
          <textarea class="wallet-address compact-textarea glass-panel" data-support-message rows="3" placeholder="Сообщение">${supportMessageDraft}</textarea>
          <button class="create-cycle-button compact-command" type="button" data-support-submit>Отправить сообщение</button>
        </div>

        ${activeSupportTicket ? supportTicketCard(activeSupportTicket, true) : ""}
        <button class="detail-action-button glass-panel history-button" type="button" data-support-history>История обращений</button>
      </section>
      ${bottomNav("help")}
      ${helpSubjectOpen ? helpSubjectModal() : ""}
      ${activeSupportModal === "history" ? supportHistoryModal() : supportConversationModal()}
      ${toastMarkup()}
    </div>
  `;
}

function helpHero(title, description, backRoute) {
  const backAttrs = backRoute === "help-home" ? `data-help-view="home"` : `data-route="${backRoute}"`;
  return `
    <section class="glass-card page-hero">
      <div class="top-bar">
        <button class="back-button glass-panel" type="button" ${backAttrs} aria-label="${t("common.back")}">
          <img src="./Icons/Arrow.png" alt="" aria-hidden="true" />
        </button>
        <h1 class="page-top-title">${title}</h1>
        <div class="top-actions">
          <button class="icon-button glass-panel" type="button" data-notifications-open aria-label="${t("common.notifications")}">${bellIcon}</button>
          <button class="lang-button glass-panel" type="button" data-lang>${langLabel()}</button>
        </div>
      </div>
      <div class="page-title-block">
        <span>${description}</span>
      </div>
    </section>
  `;
}

function helpInfoScreen() {
  return `
    <div class="help-screen profile-screen">
      ${helpHero("Инфо", "Лёгкий мини-гайд по основным разделам Deplex.", "help-home")}
      <section class="glass-card cycles-card help-card">
        ${infoLoadFailed ? `<div class="empty-cycles glass-panel"><h2>Информация временно недоступна.</h2></div>` : ""}
        <div class="help-topic-list">
          ${infoItems.map((item) => `
            <button class="nav-card glass-panel help-topic-card" type="button" data-info-article="${item.id}">
              <img class="nav-arrow" src="./Icons/Arrow_Balance.png" alt="" aria-hidden="true" />
              <span>
                <span class="nav-title">${item.title}</span>
                <span class="nav-subtitle">${item.description}</span>
              </span>
            </button>
          `).join("")}
        </div>
      </section>
      ${bottomNav("help")}
    </div>
  `;
}

function helpArticleScreen() {
  const article = currentInfoArticle() || infoItems[0];
  return `
    <div class="help-screen profile-screen">
      ${helpHero(article?.title || "Инфо", article?.description || "Информация временно недоступна.", "help-home")}
      <section class="glass-card cycles-card help-card">
        <div class="info-block-list">
          ${article ? article.blocks.map(infoBlock).join("") : `<div class="empty-cycles glass-panel"><h2>Информация временно недоступна.</h2></div>`}
        </div>
      </section>
      ${bottomNav("help")}
    </div>
  `;
}

function infoBlock(block) {
  if (block.type === "steps") {
    return `
      <ol class="info-steps glass-panel">
        ${(block.items || []).map((item) => `<li>${item}</li>`).join("")}
      </ol>
    `;
  }
  if (block.type === "note") return `<div class="info-note glass-panel">${block.content}</div>`;
  if (block.type === "image") return `<div class="info-note glass-panel">Изображение будет добавлено позже.</div>`;
  return `<p class="info-text glass-panel">${block.content}</p>`;
}

function helpFaqScreen() {
  return `
    <div class="help-screen profile-screen">
      ${helpHero("FAQ", "Ответы на частые вопросы.", "help-home")}
      <section class="glass-card cycles-card help-card">
        ${faqLoadFailed ? `<div class="empty-cycles glass-panel"><h2>FAQ временно недоступен.</h2></div>` : ""}
        <div class="faq-list">
          ${faqItems.map((item, index) => {
            const id = `${item.category}-${index}`;
            const open = activeFaqQuestion === id;
            return `
              <button class="faq-item glass-panel ${open ? "is-open" : ""}" type="button" data-faq-toggle="${id}">
                <span class="faq-question">${item.question}</span>
                ${open ? `<span class="faq-answer">${item.answer}</span>` : ""}
              </button>
            `;
          }).join("")}
        </div>
      </section>
      ${bottomNav("help")}
    </div>
  `;
}

function helpSubjectModal() {
  return `
    <div class="modal-layer" data-help-subject-close>
      <div class="select-modal glass-card" role="dialog" aria-modal="true">
        <button class="modal-close" type="button" data-help-subject-close aria-label="${t("common.close")}">×</button>
        <h2>Тема обращения</h2>
        <div class="select-menu glass-panel">
          ${supportSubjects.map((subject) => `
            <button class="select-option ${supportSubject === subject ? "is-active" : ""}" type="button" data-help-subject="${subject}">${subject}</button>
          `).join("")}
        </div>
      </div>
    </div>
  `;
}

function supportTicketCard(ticket, active) {
  return `
    <button class="support-ticket-card glass-panel" type="button" data-support-ticket="${active ? "active" : ticket.id}">
      <span class="withdraw-address-top">
        <strong>${active ? "Активное обращение" : ticket.subject}</strong>
        <span class="cycle-status is-${ticket.status === "Закрыто" ? "completed" : "active"}">${ticket.status}</span>
      </span>
      <span class="section-description">${ticket.subject}</span>
      <span class="section-description">${ticket.date}</span>
    </button>
  `;
}

function supportConversationModal() {
  const ticket = activeSupportConversation();
  if (!ticket) return "";
  const readOnly = activeSupportModal !== "active";
  return `
    <div class="modal-layer" data-support-modal-close>
      <div class="compact-modal support-modal glass-card" role="dialog" aria-modal="true">
        <button class="modal-close" type="button" data-support-modal-close aria-label="${t("common.close")}">×</button>
        <h2>${ticket.subject}</h2>
        <div class="support-chat">
          ${ticket.messages.map((message) => `
            <div class="support-message is-${message.author}">
              <span>${message.text}</span>
              <small>${message.date}</small>
            </div>
          `).join("")}
        </div>
        ${readOnly ? "" : `
          <textarea class="wallet-address compact-textarea glass-panel" data-support-reply rows="2" placeholder="Написать сообщение">${supportReplyDraft}</textarea>
          <button class="create-cycle-button compact-command" type="button" data-support-reply-send>Отправить</button>
        `}
      </div>
    </div>
  `;
}

function supportHistoryModal() {
  return `
    <div class="modal-layer" data-support-modal-close>
      <div class="compact-modal glass-card" role="dialog" aria-modal="true">
        <button class="modal-close" type="button" data-support-modal-close aria-label="${t("common.close")}">×</button>
        <h2>История обращений</h2>
        <div class="withdraw-history-list">
          ${supportHistory.map((ticket) => supportTicketCard(ticket, false)).join("")}
        </div>
      </div>
    </div>
  `;
}

function metricsScreen() {
  const cycle = getActiveDetailCycle();
  const metrics = mockLiveMetricsByCycleId[cycle?.id];

  return `
    <div class="metrics-screen profile-screen">
      <section class="glass-card page-hero">
        <div class="top-bar">
          <button class="back-button glass-panel" type="button" data-route="detail" aria-label="${t("common.back")}">
            <img src="./Icons/Arrow.png" alt="" aria-hidden="true" />
          </button>
          <h1 class="page-top-title">${t("pages.metricsTitle")}</h1>
          <div class="top-actions">
            <button class="icon-button glass-panel" type="button" data-notifications-open aria-label="${t("common.notifications")}">${bellIcon}</button>
            <button class="lang-button glass-panel" type="button" data-lang>${langLabel()}</button>
          </div>
        </div>

        <div class="page-title-block">
          <span>Актуальные данные работы алгоритма в рамках текущего цикла.</span>
        </div>
      </section>

      <section class="glass-card cycles-card metrics-card">
        ${metrics ? metricsContent(metrics) : `
          <div class="empty-cycles glass-panel">
            <h2>Показатели пока недоступны</h2>
            <p>Для текущего цикла ещё нет live-данных.</p>
          </div>
        `}
      </section>

      ${bottomNav("cycles")}
    </div>
  `;
}

function metricsContent(metrics) {
  return `
    ${performanceChart({ title: "Динамика результата", percent: metrics.currentResultPercent, points: metrics.chartPoints })}
    <div class="profile-summary-grid metrics-summary-grid">
      <div class="detail-metric glass-panel">
        <span>${metrics.algorithmName}</span>
        <strong>${metrics.statusLabel}</strong>
      </div>
      <div class="detail-metric glass-panel">
        <span>Период</span>
        <strong>${metrics.period}</strong>
      </div>
    </div>
    <div class="metric-list glass-panel">
      ${metricRow("Текущий результат", formatSignedPercent(metrics.currentResultPercent), metrics.currentResultAmount)}
      ${metricRow("Сделок", metrics.tradesCount)}
      ${metricRow("Win rate", `${metrics.winRate}%`)}
      ${metricRow("Последнее обновление", metrics.lastUpdated)}
    </div>
  `;
}

function metricRow(label, value, note = "") {
  return `
    <div class="metric-row">
      <span>${label}</span>
      <strong class="${amountValueClass(value)}">${value}</strong>
      ${note ? `<small class="${amountValueClass(note)}">${note}</small>` : ""}
    </div>
  `;
}

function cycleReportScreen() {
  const report = currentCycleReport();

  return `
    <div class="report-screen profile-screen">
      <section class="glass-card page-hero">
        <div class="top-bar">
          <button class="back-button glass-panel" type="button" data-route="detail" aria-label="${t("common.back")}">
            <img src="./Icons/Arrow.png" alt="" aria-hidden="true" />
          </button>
          <h1 class="page-top-title">${t("pages.reportTitle")}</h1>
          <div class="top-actions">
            <button class="icon-button glass-panel" type="button" data-notifications-open aria-label="${t("common.notifications")}">${bellIcon}</button>
            <button class="lang-button glass-panel" type="button" data-lang>${langLabel()}</button>
          </div>
        </div>

        <div class="page-title-block">
          <span>Финальный результат и распределение по завершённому циклу.</span>
        </div>
      </section>

      <section class="glass-card cycles-card report-card">
        ${report ? reportContent(report) : `
          <div class="empty-cycles glass-panel">
            <h2>Отчёт пока недоступен</h2>
            <p>Для текущего цикла ещё нет готового отчёта.</p>
          </div>
        `}
      </section>

      ${bottomNav("cycles")}
    </div>
  `;
}

function reportContent(report) {
  return `
    ${performanceChart({ title: "Динамика результата", percent: report.grossResultPercent, points: report.reportChartPoints })}
    <div class="metric-list glass-panel">
      ${metricRow("Начальная сумма", report.initialAmount)}
      ${metricRow("Результат цикла", report.grossResult)}
      ${metricRow("Результат цикла, %", formatSignedPercent(report.grossResultPercent))}
      ${metricRow("Реферальные отчисления", report.referralDeductions)}
      ${metricRow("Комиссионные издержки", report.feeAmount)}
    </div>
    <div class="profile-summary-grid report-final-grid">
      <div class="detail-metric glass-panel is-${performanceTone(report.netResultPercent)}">
        <span>Чистый результат</span>
        <strong class="${amountValueClass(report.netResult)}">${report.netResult}</strong>
      </div>
      <div class="detail-metric glass-panel is-${performanceTone(report.netResultPercent)}">
        <span>Чистый результат, %</span>
        <strong>${formatSignedPercent(report.netResultPercent)}</strong>
      </div>
    </div>
    <div class="report-payout-card glass-panel">
      <span>Сумма выплаты</span>
      <strong class="${amountValueClass(report.payoutAmount)}">${report.payoutAmount}</strong>
      ${report.publishedAt ? `<small>Отчёт опубликован: ${report.publishedAt}</small>` : ""}
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
            <button class="icon-button glass-panel" type="button" data-notifications-open aria-label="${t("common.notifications")}">${bellIcon}</button>
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
  if (!cycleFilterTouched || !cycleFilters.some((filter) => filter.id === activeCycleFilter)) {
    activeCycleFilter = defaultCycleFilterId();
  }
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
            <button class="icon-button glass-panel" type="button" data-notifications-open aria-label="${t("common.notifications")}">${bellIcon}</button>
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
          ${visibleCycles.length ? visibleCycles.map(cycleCard).join("") : emptyCycles(activeFilter)}
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
  const status = displayStatusMeta(cycle.status);

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
        <span class="cycle-status is-${status.tone}">${displayStatusLabel(cycle.status)}</span>
        <strong class="${amountValueClass(cycle.amount)}">${cycle.amount}</strong>
      </div>
    </button>
  `;
}

function emptyCycles(activeFilter = {}) {
  const message = activeFilter.id === "active" ? t("filters.activeEmpty") : t("filters.empty");
  return `
    <div class="empty-cycles glass-panel">
      <h2>${t("cycles.emptyTitle")}</h2>
      <p>${message}</p>
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
            <button class="icon-button glass-panel" type="button" data-notifications-open aria-label="${t("common.notifications")}">${bellIcon}</button>
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
  const status = displayStatusMeta(cycle.status);
  const waiting = ["CREATED", "AWAITING_TRANSFER"].includes(cycle.status);

  return `
    <div class="detail-cycle-screen">
      <section class="glass-card page-hero detail-hero">
        <div class="top-bar">
          <button class="back-button glass-panel" type="button" data-route="cycles" aria-label="${t("common.back")}">
            <img src="./Icons/Arrow.png" alt="" aria-hidden="true" />
          </button>
          <h1 class="page-top-title">${t("pages.detailTitle")}</h1>
          <div class="top-actions">
            <button class="icon-button glass-panel" type="button" data-notifications-open aria-label="${t("common.notifications")}">${bellIcon}</button>
            <button class="lang-button glass-panel" type="button" data-lang>${langLabel()}</button>
          </div>
        </div>

        <div class="page-title-block detail-title-block">
          <p class="detail-lead">${t("pages.detailDescription")}</p>
        </div>

        <div class="detail-cycle-meta">
          <div class="cycle-route-pill glass-panel">${cycle.network} / ${cycle.asset}</div>
          <div class="detail-status-panel glass-panel">
            <span class="cycle-status is-${status.tone}">${displayStatusLabel(cycle.status)}</span>
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
  const reportReady = isReportAvailable(cycle);

  return `
    <section class="glass-card detail-actions-card">
      <h2 class="section-label">${t("detail.detailActionsTitle")}</h2>
      <div class="detail-actions-list">
        <button class="detail-action-button glass-panel" type="button" data-route="metrics">
          <span>${t("detail.metricsAction")}</span>
        </button>
        <button class="detail-action-button report-action-button glass-panel ${reportReady ? "is-ready" : "is-disabled"}" type="button" ${reportReady ? `data-route="report"` : "disabled"}>
          <span>${t("detail.reportAction")}</span>
        </button>
        ${canCancel ? `
          <button class="detail-action-button detail-action-danger detail-action-wide glass-panel" type="button" data-cancel-cycle>
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
        <h2 class="section-label">${displayStatusLabel(cycle.status)}</h2>
        <p class="section-description">${t("detail.activeSummary")}</p>
      </header>
      <div class="detail-metric-grid">
        <div class="detail-metric glass-panel">
          <span>${t("common.amount")}</span>
          <strong class="${amountValueClass(cycle.amount)}">${cycle.amount}</strong>
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
  const title = t(routeTitleKeys[route] || `routes.${route}`) || t("common.section");
  const activeNav = profileSectionRoutes.has(route) ? "profile" : route;
  return `
    <div class="empty-screen">
      <section class="glass-card empty-card">
        <div>
          <h1>${title}</h1>
          <p>${t("common.comingNext")}</p>
        </div>
      </section>
      ${bottomNav(activeNav)}
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
  currentRoute = route;
  const app = document.querySelector("#app");
  if (route === "home") {
    app.innerHTML = homeScreen();
  } else if (route === "profile") {
    app.innerHTML = profileScreen();
  } else if (route === "saved-addresses") {
    app.innerHTML = savedAddressesScreen();
  } else if (route === "referral-balance") {
    app.innerHTML = referralBalanceScreen();
  } else if (route === "team") {
    app.innerHTML = teamScreen();
  } else if (route === "team-level-1") {
    app.innerHTML = teamLevelScreen("1");
  } else if (route === "team-level-2") {
    app.innerHTML = teamLevelScreen("2");
  } else if (route === "help") {
    app.innerHTML = helpScreen();
  } else if (route === "algorithms") {
    app.innerHTML = algorithmsScreen();
  } else if (route === "cycles") {
    app.innerHTML = cyclesScreen();
  } else if (route === "aurum" || route === "flux") {
    app.innerHTML = startCycleScreen(route);
  } else if (route === "detail") {
    app.innerHTML = detailCycleScreen();
  } else if (route === "metrics") {
    app.innerHTML = metricsScreen();
  } else if (route === "report") {
    app.innerHTML = cycleReportScreen();
  } else {
    activeSelect = null;
    app.innerHTML = emptyScreen(route);
  }

  app.insertAdjacentHTML("beforeend", notificationsModal());

  app.querySelectorAll("[data-route]").forEach((button) => {
    button.addEventListener("click", () => {
      if (button.classList.contains("back-button")) {
        goBack(button.dataset.route || "home");
        return;
      }
      if (button.dataset.route === "help") {
        activeHelpView = "home";
        activeInfoArticleId = "";
      }
      if (button.dataset.route === "cycles") {
        cycleFilterTouched = false;
      }
      go(button.dataset.route);
      if (getRoute() === button.dataset.route) render();
    });
  });

  app.querySelectorAll("input, textarea, select").forEach((field) => {
    field.addEventListener("focus", () => {
      document.documentElement.classList.add("is-input-focused");
    });
    field.addEventListener("blur", () => {
      document.documentElement.classList.remove("is-input-focused");
    });
  });

  app.querySelectorAll("[data-help-view]").forEach((button) => {
    button.addEventListener("click", () => {
      activeHelpView = button.dataset.helpView;
      if (activeHelpView === "home") activeInfoArticleId = "";
      render();
    });
  });

  app.querySelectorAll("[data-info-article]").forEach((button) => {
    button.addEventListener("click", () => {
      activeInfoArticleId = button.dataset.infoArticle;
      activeHelpView = "article";
      render();
    });
  });

  app.querySelectorAll("[data-faq-toggle]").forEach((button) => {
    button.addEventListener("click", () => {
      activeFaqQuestion = activeFaqQuestion === button.dataset.faqToggle ? "" : button.dataset.faqToggle;
      render();
    });
  });

  app.querySelectorAll("[data-help-subject-open]").forEach((button) => {
    button.addEventListener("click", () => {
      helpSubjectOpen = true;
      render();
    });
  });

  app.querySelectorAll("[data-help-subject]").forEach((button) => {
    button.addEventListener("click", () => {
      supportSubject = button.dataset.helpSubject;
      helpSubjectOpen = false;
      render();
    });
  });

  app.querySelectorAll("[data-help-subject-close]").forEach((element) => {
    element.addEventListener("click", (event) => {
      if (event.target !== element && !element.classList.contains("modal-close")) return;
      helpSubjectOpen = false;
      render();
    });
  });

  app.querySelectorAll("[data-support-message]").forEach((field) => {
    resizeTextarea(field);
    field.addEventListener("input", () => {
      supportMessageDraft = field.value;
      resizeTextarea(field);
    });
  });

  app.querySelectorAll("[data-support-submit]").forEach((button) => {
    button.addEventListener("click", () => {
      const message = supportMessageDraft.trim() || "Пользователь создал обращение.";
      activeSupportTicket = {
        id: "ticket-active",
        subject: supportSubject,
        status: "Открыто",
        date: "12.05.26",
        messages: [{ author: "user", text: message, date: "12.05.26, 14:32" }],
      };
      supportMessageDraft = "";
      showToast("Обращение создано.");
    });
  });

  app.querySelectorAll("[data-support-history]").forEach((button) => {
    button.addEventListener("click", () => {
      activeSupportModal = "history";
      render();
    });
  });

  app.querySelectorAll("[data-support-ticket]").forEach((button) => {
    button.addEventListener("click", () => {
      activeSupportModal = button.dataset.supportTicket;
      render();
    });
  });

  app.querySelectorAll("[data-support-reply]").forEach((field) => {
    resizeTextarea(field);
    field.addEventListener("input", () => {
      supportReplyDraft = field.value;
      resizeTextarea(field);
    });
  });

  app.querySelectorAll("[data-support-reply-send]").forEach((button) => {
    button.addEventListener("click", () => {
      if (!activeSupportTicket || !supportReplyDraft.trim()) return;
      activeSupportTicket.messages.push({ author: "user", text: supportReplyDraft.trim(), date: "12.05.26, 14:40" });
      supportReplyDraft = "";
      render();
    });
  });

  app.querySelectorAll("[data-support-modal-close]").forEach((element) => {
    element.addEventListener("click", (event) => {
      if (event.target !== element && !element.classList.contains("modal-close")) return;
      activeSupportModal = null;
      render();
    });
  });

  app.querySelectorAll("[data-notifications-open]").forEach((button) => {
    button.addEventListener("click", () => {
      notificationsOpen = true;
      activeSelect = null;
      activeInfo = null;
      render();
    });
  });

  app.querySelectorAll("[data-notification-category]").forEach((button) => {
    button.addEventListener("click", () => {
      activeNotificationCategory = button.dataset.notificationCategory;
      render();
    });
  });

  app.querySelectorAll("[data-notification-read]").forEach((button) => {
    button.addEventListener("click", () => {
      const notification = notificationItems.find((item) => item.id === button.dataset.notificationRead);
      if (!notification) return;
      notification.isNew = false;
      render();
    });
  });

  app.querySelectorAll("[data-notifications-close]").forEach((element) => {
    element.addEventListener("click", (event) => {
      if (event.target !== element && !element.classList.contains("modal-close")) return;
      notificationsOpen = false;
      render();
    });
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
      cycleFilterTouched = true;
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

  app.querySelectorAll("[data-address-rename]").forEach((button) => {
    button.addEventListener("click", () => {
      const address = savedAddressItems.find((item) => item.id === button.dataset.addressRename);
      if (!address) return;
      activeAddressId = address.id;
      activeAddressModal = "rename";
      addressNameDraft = savedAddressName(address);
      render();
    });
  });

  app.querySelectorAll("[data-address-delete]").forEach((button) => {
    button.addEventListener("click", () => {
      const address = savedAddressItems.find((item) => item.id === button.dataset.addressDelete);
      if (!address) return;
      if (address.activeCycle) {
        showToast("Адрес привязан к активному циклу. Удалить можно после завершения.");
        return;
      }
      activeAddressId = address.id;
      activeAddressModal = "delete";
      render();
    });
  });

  app.querySelectorAll("[data-address-full]").forEach((button) => {
    button.addEventListener("click", () => {
      const address = savedAddressItems.find((item) => item.id === button.dataset.addressFull);
      if (!address) return;
      activeAddressId = address.id;
      activeAddressModal = "full";
      render();
    });
  });

  app.querySelectorAll("[data-address-name-input]").forEach((field) => {
    resizeTextarea(field);
    field.addEventListener("input", () => {
      addressNameDraft = field.value;
      resizeTextarea(field);
    });
  });

  app.querySelectorAll("[data-address-rename-save]").forEach((button) => {
    button.addEventListener("click", () => {
      const address = currentAddress();
      if (!address) return;
      address.name = addressNameDraft.trim();
      activeAddressModal = null;
      activeAddressId = null;
      render();
    });
  });

  app.querySelectorAll("[data-address-delete-confirm]").forEach((button) => {
    button.addEventListener("click", () => {
      savedAddressItems = savedAddressItems.filter((address) => address.id !== button.dataset.addressDeleteConfirm || address.activeCycle);
      activeAddressModal = null;
      activeAddressId = null;
      render();
    });
  });

  app.querySelectorAll("[data-address-modal-cancel]").forEach((button) => {
    button.addEventListener("click", () => {
      activeAddressModal = null;
      activeAddressId = null;
      render();
    });
  });

  app.querySelectorAll("[data-address-modal-close]").forEach((element) => {
    element.addEventListener("click", (event) => {
      if (event.target !== element && !element.classList.contains("modal-close")) return;
      activeAddressModal = null;
      activeAddressId = null;
      render();
    });
  });

  app.querySelectorAll("[data-referral-address-open]").forEach((button) => {
    button.addEventListener("click", () => {
      activeReferralModal = "address";
      render();
    });
  });

  app.querySelectorAll("[data-referral-address-select]").forEach((button) => {
    button.addEventListener("click", () => {
      selectedWithdrawalAddressId = button.dataset.referralAddressSelect;
      activeReferralModal = null;
      render();
    });
  });

  app.querySelectorAll("[data-withdraw-request]").forEach((button) => {
    button.addEventListener("click", () => {
      if (referralBalanceMock.available < referralBalanceMock.minWithdrawal) {
        showToast("Минимальная сумма вывода — 5 USDT");
        return;
      }
      if (!withdrawalAddress()) {
        showToast("Выберите адрес для вывода");
        return;
      }
      activeReferralModal = "confirm";
      render();
    });
  });

  app.querySelectorAll("[data-withdraw-confirm]").forEach((button) => {
    button.addEventListener("click", () => {
      const address = withdrawalAddress();
      if (!address) return;
      activeWithdrawalRequest = {
        amount: referralBalanceMock.available,
        asset: referralBalanceMock.asset,
        status: "Запрошено",
        addressId: address.id,
      };
      activeReferralModal = null;
      render();
    });
  });

  app.querySelectorAll("[data-withdraw-history]").forEach((button) => {
    button.addEventListener("click", () => {
      activeReferralModal = "history";
      render();
    });
  });

  app.querySelectorAll("[data-referral-modal-cancel]").forEach((button) => {
    button.addEventListener("click", () => {
      activeReferralModal = null;
      render();
    });
  });

  app.querySelectorAll("[data-referral-modal-close]").forEach((element) => {
    element.addEventListener("click", (event) => {
      if (event.target !== element && !element.classList.contains("modal-close")) return;
      activeReferralModal = null;
      render();
    });
  });

  app.querySelectorAll("[data-team-filter-open]").forEach((button) => {
    button.addEventListener("click", () => {
      teamFilterOpen = true;
      render();
    });
  });

  app.querySelectorAll("[data-team-filter]").forEach((button) => {
    button.addEventListener("click", () => {
      activeTeamFilter = button.dataset.teamFilter;
      teamFilterOpen = false;
      render();
    });
  });

  app.querySelectorAll("[data-team-filter-close]").forEach((element) => {
    element.addEventListener("click", (event) => {
      if (event.target !== element && !element.classList.contains("modal-close")) return;
      teamFilterOpen = false;
      render();
    });
  });

  app.querySelectorAll("[data-team-member]").forEach((button) => {
    button.addEventListener("click", () => {
      activeTeamMemberId = button.dataset.teamMember;
      render();
    });
  });

  app.querySelectorAll("[data-team-member-close]").forEach((element) => {
    element.addEventListener("click", (event) => {
      if (event.target !== element && !element.classList.contains("modal-close")) return;
      activeTeamMemberId = null;
      render();
    });
  });

  app.querySelectorAll("[data-team-level-info]").forEach((button) => {
    button.addEventListener("click", (event) => {
      event.stopPropagation();
      activeTeamLevelInfo = button.dataset.teamLevelInfo;
      render();
    });
  });

  app.querySelectorAll("[data-team-level-info-close]").forEach((element) => {
    element.addEventListener("click", (event) => {
      if (event.target !== element && !element.classList.contains("modal-close")) return;
      activeTeamLevelInfo = null;
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
      if (button.dataset.copyToast) {
        showToast(button.dataset.copyToast);
      } else {
        button.textContent = t("common.copied");
        setTimeout(() => {
          button.innerHTML = previousContent;
        }, 1200);
      }
    });
  });
}

window.addEventListener("hashchange", () => {
  currentRoute = getRoute();
  render();
});
initTelegramWebApp();
currentRoute = getRoute();
render();
loadHelpData();
