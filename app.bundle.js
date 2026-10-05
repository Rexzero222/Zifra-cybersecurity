const CARDS_DATA = [{
  id: 1,
  cat: 'finance',
  categoryName: 'Финансовая безопасность',
  title: 'Перевели неизвестные деньги на карту',
  icon: /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 24 24"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M11.8 10.9c-2.27-.59-3-1.2-3-2.15 0-1.09 1.01-1.85 2.7-1.85 1.78 0 2.44.85 2.5 2.1h2.21c-.07-1.72-1.12-3.3-3.21-3.81V3h-3v2.16c-1.94.42-3.5 1.68-3.5 3.61 0 2.31 1.91 3.46 4.7 4.13 2.5.6 3 1.48 3 2.41 0 .69-.49 1.79-2.7 1.79-2.06 0-2.87-.92-2.98-2.1H6.01c.12 2.19 1.76 3.42 3.68 3.83V21h3v-2.15c1.95-.37 3.5-1.5 3.5-3.55 0-2.84-2.43-3.81-4.39-4.4Z"
  })),
  steps: ['Не тратьте переведенные средства (это уголовно наказуемо).', 'Ни в коем случае не переводите деньги обратно по указанным вам реквизитам.', 'Обратитесь в свой банк и попросите совершить возврат ошибочного платежа.']
}, {
  id: 2,
  cat: 'finance',
  categoryName: 'Финансовая безопасность',
  title: 'Звонят из «банка» или «полиции»',
  icon: /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 24 24"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"
  })),
  steps: ['Немедленно положите трубку. Настоящие сотрудники не требуют переводить деньги на "безопасный счет".', 'Никогда не сообщайте коды из СМС, CVC-код и пароли.', 'Перезвоните на официальный номер банка с обратной стороны вашей карты.']
}, {
  id: 3,
  cat: 'accounts',
  categoryName: 'Защита аккаунтов',
  title: 'Взломали аккаунт в Госуслугах или соцсети',
  icon: /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 24 24"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zm-6 9c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zm3.1-9H8.9V6c0-1.71 1.39-3.1 3.1-3.1 1.71 0 3.1 1.39 3.1 3.1v2z"
  })),
  steps: ['Попробуйте сбросить пароль через официальную форму восстановления.', 'Завершите все активные сессии на других устройствах в настройках безопасности.', 'При невозможности входа обратитесь в МФЦ (для Госуслуг) или техподдержку по номеру: 8 800 100-70-10']
}, {
  id: 4,
  cat: 'cyber',
  categoryName: 'Кибергигиена',
  title: 'Прислали сомнительную ссылку',
  icon: /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 24 24"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M3.9 12c0-1.71 1.39-3.1 3.1-3.1h4V7H7c-2.76 0-5 2.24-5 5s2.24 5 5 5h4v-1.9H7c-1.71 0-3.1-1.39-3.1-3.1zM8 13h8v-2H8v2zm9-6h-4v1.9h4c1.71 0 3.1 1.39 3.1 3.1s-1.39 3.1-3.1 3.1h-4V17h4c2.76 0 5-2.24 5-5s-2.24-5-5-5z"
  })),
  steps: ['Не переходите по ссылке, даже если ее прислал знакомый (его могли взломать).', 'Внимательно проверьте адрес сайта (фишинговые сайты отличаются на 1-2 буквы).', 'Свяжитесь с отправителем по другому каналу связи и уточните, отправлял ли он ссылку.']
}, {
  id: 5,
  cat: 'finance',
  categoryName: 'Финансовая безопасность',
  title: 'Утеря или кража банковской карты',
  icon: /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 24 24"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M20 4H4c-1.11 0-1.99.89-1.99 2L2 18c0 1.1.89 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.11-.9-2-2-2zm0 14H4v-6h16v6zm0-10H4V6h16v2z"
  })),
  steps: ['Мгновенно заблокируйте карту в мобильном приложении банка.', 'Если нет доступа к приложению — позвоните на горячую линию банка.', 'Закажите перевыпуск карты с новыми реквизитами.']
}, {
  id: 6,
  cat: 'cyber',
  categoryName: 'Кибергигиена',
  title: 'Безопасное использование публичного Wi-Fi',
  icon: /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 24 24"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm-2 16l-4-4 1.41-1.41L10 14.17l6.59-6.59L18 9l-8 8z"
  })),
  steps: ['Не совершайте банковские операции и не вводите пароли через открытые сети.', 'Используйте надежный VPN при подключении к незащищенным точкам.', 'Отключите автоподключение к открытым Wi-Fi сетям в настройках телефона.']
}];
const CHECKLIST_ITEMS = ['Включена двухфакторная аутентификация (2FA) везде, где можно', 'Установлен уникальный пароль для каждого сервиса', 'Установлен лимит на онлайн-операции по карте', 'Отключен показ уведомлений с кодами СМС на заблокированном экране'];
const CATEGORIES = [{
  id: 'all',
  label: 'Все ситуации'
}, {
  id: 'finance',
  label: 'Финансовая безопасность'
}, {
  id: 'cyber',
  label: 'Кибергигиена'
}, {
  id: 'accounts',
  label: 'Защита аккаунтов'
}];
function App() {
  const [activeCategory, setActiveCategory] = React.useState('all');
  const [checkedItems, setCheckedItems] = React.useState({});

  // Мемоизация фильтрации
  const filteredCards = React.useMemo(() => {
    return activeCategory === 'all' ? CARDS_DATA : CARDS_DATA.filter(card => card.cat === activeCategory);
  }, [activeCategory]);

  // Мемоизация рассчета прогресса
  const progressPercent = React.useMemo(() => {
    const checkedCount = Object.values(checkedItems).filter(Boolean).length;
    return Math.round(checkedCount / CHECKLIST_ITEMS.length * 100);
  }, [checkedItems]);
  const handleToggleCheck = React.useCallback(idx => {
    setCheckedItems(prev => ({
      ...prev,
      [idx]: !prev[idx]
    }));
  }, []);
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("header", null, /*#__PURE__*/React.createElement("div", {
    className: "container header-content"
  }, /*#__PURE__*/React.createElement("div", {
    className: "brand"
  }, /*#__PURE__*/React.createElement("img", {
    src: "https://zifra42.ru/newzifra/assets/logo.png",
    alt: "\u041A\u043E\u043B\u043B\u0435\u0434\u0436 \u0426\u0418\u0424\u0420\u0410",
    loading: "lazy"
  }), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "brand-title"
  }, "\u0426\u0418\u0424\u0420\u0410"), /*#__PURE__*/React.createElement("div", {
    className: "brand-subtitle"
  }, "\u041A\u0438\u0431\u0435\u0440\u0431\u0435\u0437\u043E\u043F\u0430\u0441\u043D\u043E\u0441\u0442\u044C & \u0424\u0438\u043D\u0433\u0440\u0430\u043C\u043E\u0442\u043D\u043E\u0441\u0442\u044C"))))), /*#__PURE__*/React.createElement("main", {
    className: "container"
  }, /*#__PURE__*/React.createElement("section", {
    className: "hero"
  }, /*#__PURE__*/React.createElement("h1", null, "\u041F\u0440\u0430\u043A\u0442\u0438\u0447\u0435\u0441\u043A\u0438\u0435 \u0430\u043B\u0433\u043E\u0440\u0438\u0442\u043C\u044B ", /*#__PURE__*/React.createElement("span", null, "\u0437\u0430\u0449\u0438\u0442\u044B \u0438 \u0434\u0435\u0439\u0441\u0442\u0432\u0438\u0439")), /*#__PURE__*/React.createElement("p", null, "\u041F\u043E\u0448\u0430\u0433\u043E\u0432\u044B\u0435 \u0438\u043D\u0441\u0442\u0440\u0443\u043A\u0446\u0438\u0438 \u043D\u0430 \u0441\u043B\u0443\u0447\u0430\u0439 \u044D\u043A\u0441\u0442\u0440\u0435\u043D\u043D\u044B\u0445 \u0441\u0438\u0442\u0443\u0430\u0446\u0438\u0439 \u0432 \u0441\u0435\u0442\u0438, \u0431\u043E\u0440\u044C\u0431\u044B \u0441 \u043C\u043E\u0448\u0435\u043D\u043D\u0438\u043A\u0430\u043C\u0438 \u0438 \u0437\u0430\u0449\u0438\u0442\u044B \u0432\u0430\u0448\u0438\u0445 \u0444\u0438\u043D\u0430\u043D\u0441\u043E\u0432."), /*#__PURE__*/React.createElement("div", {
    className: "controls-wrapper"
  }, /*#__PURE__*/React.createElement("div", {
    className: "categories"
  }, CATEGORIES.map(cat => /*#__PURE__*/React.createElement("button", {
    key: cat.id,
    className: `cat-btn ${activeCategory === cat.id ? 'active' : ''}`,
    onClick: () => setActiveCategory(cat.id)
  }, cat.label))))), /*#__PURE__*/React.createElement("div", {
    className: "grid"
  }, filteredCards.map(card => /*#__PURE__*/React.createElement("div", {
    key: card.id,
    className: "card"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("span", {
    className: "card-category"
  }, card.categoryName), /*#__PURE__*/React.createElement("div", {
    className: "card-header"
  }, /*#__PURE__*/React.createElement("div", {
    className: "card-icon"
  }, card.icon), /*#__PURE__*/React.createElement("h2", {
    className: "card-title"
  }, card.title)), /*#__PURE__*/React.createElement("ul", {
    className: "steps-list"
  }, card.steps.map((step, idx) => /*#__PURE__*/React.createElement("li", {
    key: idx,
    className: "step-item"
  }, /*#__PURE__*/React.createElement("span", {
    className: "step-num"
  }, idx + 1), /*#__PURE__*/React.createElement("span", null, step)))))))), /*#__PURE__*/React.createElement("section", {
    className: "checklist-section"
  }, /*#__PURE__*/React.createElement("h2", {
    className: "checklist-title"
  }, "\u0427\u0435\u043A-\u043B\u0438\u0441\u0442 \u0432\u0430\u0448\u0435\u0439 \u0446\u0438\u0444\u0440\u043E\u0432\u043E\u0439 \u0431\u0435\u0437\u043E\u043F\u0430\u0441\u043D\u043E\u0441\u0442\u0438"), /*#__PURE__*/React.createElement("p", {
    className: "checklist-subtitle"
  }, "\u041E\u0442\u043C\u0435\u0442\u044C\u0442\u0435 \u043F\u0443\u043D\u043A\u0442\u044B, \u043A\u043E\u0442\u043E\u0440\u044B\u0435 \u0432\u044B \u0443\u0436\u0435 \u0441\u043E\u0431\u043B\u044E\u0434\u0430\u0435\u0442\u0435, \u0447\u0442\u043E\u0431\u044B \u043F\u0440\u043E\u0432\u0435\u0440\u0438\u0442\u044C \u0441\u0432\u043E\u0439 \u0443\u0440\u043E\u0432\u0435\u043D\u044C \u0437\u0430\u0449\u0438\u0442\u044B:"), /*#__PURE__*/React.createElement("div", {
    className: "checklist-items"
  }, CHECKLIST_ITEMS.map((itemText, idx) => /*#__PURE__*/React.createElement("label", {
    key: idx,
    className: "check-item"
  }, /*#__PURE__*/React.createElement("input", {
    type: "checkbox",
    checked: !!checkedItems[idx],
    onChange: () => handleToggleCheck(idx)
  }), /*#__PURE__*/React.createElement("span", {
    className: "custom-check"
  }), /*#__PURE__*/React.createElement("span", {
    className: "check-text"
  }, itemText)))), /*#__PURE__*/React.createElement("div", {
    className: "progress-bar-container"
  }, /*#__PURE__*/React.createElement("div", {
    className: "progress-bar",
    style: {
      width: `${progressPercent}%`
    }
  })), /*#__PURE__*/React.createElement("div", {
    className: "score-text"
  }, "\u0411\u0435\u0437\u043E\u043F\u0430\u0441\u043D\u043E\u0441\u0442\u044C: ", progressPercent, "%"))), /*#__PURE__*/React.createElement("footer", null, /*#__PURE__*/React.createElement("div", {
    className: "container"
  }, /*#__PURE__*/React.createElement("p", null, "\xA9 2026 \u0426\u0418\u0424\u0420\u0410 \u2014 \u041F\u0430\u043C\u044F\u0442\u043A\u0430 \u043F\u043E \u043A\u0438\u0431\u0435\u0440\u0431\u0435\u0437\u043E\u043F\u0430\u0441\u043D\u043E\u0441\u0442\u0438 \u0438 \u0444\u0438\u043D\u0430\u043D\u0441\u043E\u0432\u043E\u0439 \u0433\u0440\u0430\u043C\u043E\u0442\u043D\u043E\u0441\u0442\u0438."))));
}
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(/*#__PURE__*/React.createElement(App, null));
