const CARDS_DATA = [
	{
		id: 1,
		cat: 'finance',
		categoryName: 'Финансовая безопасность',
		title: 'Перевели неизвестные деньги на карту',
		icon: (
			<svg viewBox='0 0 24 24'>
				<path d='M11.8 10.9c-2.27-.59-3-1.2-3-2.15 0-1.09 1.01-1.85 2.7-1.85 1.78 0 2.44.85 2.5 2.1h2.21c-.07-1.72-1.12-3.3-3.21-3.81V3h-3v2.16c-1.94.42-3.5 1.68-3.5 3.61 0 2.31 1.91 3.46 4.7 4.13 2.5.6 3 1.48 3 2.41 0 .69-.49 1.79-2.7 1.79-2.06 0-2.87-.92-2.98-2.1H6.01c.12 2.19 1.76 3.42 3.68 3.83V21h3v-2.15c1.95-.37 3.5-1.5 3.5-3.55 0-2.84-2.43-3.81-4.39-4.4Z' />
			</svg>
		),
		steps: [
			'Не тратьте переведенные средства (это уголовно наказуемо).',
			'Ни в коем случае не переводите деньги обратно по указанным вам реквизитам.',
			'Обратитесь в свой банк и попросите совершить возврат ошибочного платежа.',
		],
	},
	{
		id: 2,
		cat: 'finance',
		categoryName: 'Финансовая безопасность',
		title: 'Звонят из «банка» или «полиции»',
		icon: (
			<svg viewBox='0 0 24 24'>
				<path d='M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z' />
			</svg>
		),
		steps: [
			'Немедленно положите трубку. Настоящие сотрудники не требуют переводить деньги на "безопасный счет".',
			'Никогда не сообщайте коды из СМС, CVC-код и пароли.',
			'Перезвоните на официальный номер банка с обратной стороны вашей карты.',
		],
	},
	{
		id: 3,
		cat: 'accounts',
		categoryName: 'Защита аккаунтов',
		title: 'Взломали аккаунт в Госуслугах или соцсети',
		icon: (
			<svg viewBox='0 0 24 24'>
				<path d='M18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zm-6 9c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zm3.1-9H8.9V6c0-1.71 1.39-3.1 3.1-3.1 1.71 0 3.1 1.39 3.1 3.1v2z' />
			</svg>
		),
		steps: [
			'Попробуйте сбросить пароль через официальную форму восстановления.',
			'Завершите все активные сессии на других устройствах в настройках безопасности.',
			'При невозможности входа обратитесь в МФЦ (для Госуслуг) или техподдержку.',
		],
	},
	{
		id: 4,
		cat: 'cyber',
		categoryName: 'Кибергигиена',
		title: 'Прислали сомнительную ссылку',
		icon: (
			<svg viewBox='0 0 24 24'>
				<path d='M3.9 12c0-1.71 1.39-3.1 3.1-3.1h4V7H7c-2.76 0-5 2.24-5 5s2.24 5 5 5h4v-1.9H7c-1.71 0-3.1-1.39-3.1-3.1zM8 13h8v-2H8v2zm9-6h-4v1.9h4c1.71 0 3.1 1.39 3.1 3.1s-1.39 3.1-3.1 3.1h-4V17h4c2.76 0 5-2.24 5-5s-2.24-5-5-5z' />
			</svg>
		),
		steps: [
			'Не переходите по ссылке, даже если ее прислал знакомый (его могли взломать).',
			'Внимательно проверьте адрес сайта (фишинговые сайты отличаются на 1-2 буквы).',
			'Свяжитесь с отправителем по другому каналу связи и уточните, отправлял ли он ссылку.',
		],
	},
	{
		id: 5,
		cat: 'finance',
		categoryName: 'Финансовая безопасность',
		title: 'Утеря или кража банковской карты',
		icon: (
			<svg viewBox='0 0 24 24'>
				<path d='M20 4H4c-1.11 0-1.99.89-1.99 2L2 18c0 1.1.89 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.11-.9-2-2-2zm0 14H4v-6h16v6zm0-10H4V6h16v2z' />
			</svg>
		),
		steps: [
			'Мгновенно заблокируйте карту в мобильном приложении банка.',
			'Если нет доступа к приложению — позвоните на горячую линию банка.',
			'Закажите перевыпуск карты с новыми реквизитами.',
		],
	},
	{
		id: 6,
		cat: 'cyber',
		categoryName: 'Кибергигиена',
		title: 'Безопасное использование публичного Wi-Fi',
		icon: (
			<svg viewBox='0 0 24 24'>
				<path d='M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm-2 16l-4-4 1.41-1.41L10 14.17l6.59-6.59L18 9l-8 8z' />
			</svg>
		),
		steps: [
			'Не совершайте банковские операции и не вводите пароли через открытые сети.',
			'Используйте надежный VPN при подключении к незащищенным точкам.',
			'Отключите автоподключение к открытым Wi-Fi сетям в настройках телефона.',
		],
	},
]

const CHECKLIST_ITEMS = [
	'Включена двухфакторная аутентификация (2FA) везде, где можно',
	'Установлен уникальный пароль для каждого сервиса',
	'Установлен лимит на онлайн-операции по карте',
	'Отключен показ уведомлений с кодами СМС на заблокированном экране',
]

const CATEGORIES = [
	{ id: 'all', label: 'Все ситуации' },
	{ id: 'finance', label: 'Финансовая безопасность' },
	{ id: 'cyber', label: 'Кибергигиена' },
	{ id: 'accounts', label: 'Защита аккаунтов' },
]

function App() {
	const [activeCategory, setActiveCategory] = React.useState('all')
	const [checkedItems, setCheckedItems] = React.useState({})

	// Мемоизация фильтрации
	const filteredCards = React.useMemo(() => {
		return activeCategory === 'all'
			? CARDS_DATA
			: CARDS_DATA.filter(card => card.cat === activeCategory)
	}, [activeCategory])

	// Мемоизация рассчета прогресса
	const progressPercent = React.useMemo(() => {
		const checkedCount = Object.values(checkedItems).filter(Boolean).length
		return Math.round((checkedCount / CHECKLIST_ITEMS.length) * 100)
	}, [checkedItems])

	const handleToggleCheck = React.useCallback(idx => {
		setCheckedItems(prev => ({ ...prev, [idx]: !prev[idx] }))
	}, [])

	return (
		<React.Fragment>
			<header>
				<div className='container header-content'>
					<div className='brand'>
						<img
							src='https://zifra42.ru/newzifra/assets/logo.png'
							alt='Колледж ЦИФРА'
							loading='lazy'
						/>
						<div>
							<div className='brand-title'>ЦИФРА</div>
							<div className='brand-subtitle'>
								Кибербезопасность & Финграмотность
							</div>
						</div>
					</div>
				</div>
			</header>

			<main className='container'>
				<section className='hero'>
					<h1>
						Практические алгоритмы <span>защиты и действий</span>
					</h1>
					<p>
						Пошаговые инструкции на случай экстренных ситуаций в сети, борьбы с
						мошенниками и защиты ваших финансов.
					</p>

					<div className='controls-wrapper'>
						<div className='categories'>
							{CATEGORIES.map(cat => (
								<button
									key={cat.id}
									className={`cat-btn ${activeCategory === cat.id ? 'active' : ''}`}
									onClick={() => setActiveCategory(cat.id)}
								>
									{cat.label}
								</button>
							))}
						</div>
					</div>
				</section>

				<div className='grid'>
					{filteredCards.map(card => (
						<div key={card.id} className='card'>
							<div>
								<span className='card-category'>{card.categoryName}</span>
								<div className='card-header'>
									<div className='card-icon'>{card.icon}</div>
									<h2 className='card-title'>{card.title}</h2>
								</div>
								<ul className='steps-list'>
									{card.steps.map((step, idx) => (
										<li key={idx} className='step-item'>
											<span className='step-num'>{idx + 1}</span>
											<span>{step}</span>
										</li>
									))}
								</ul>
							</div>
						</div>
					))}
				</div>

				<section className='checklist-section'>
					<h2 className='checklist-title'>
						Чек-лист вашей цифровой безопасности
					</h2>
					<p className='checklist-subtitle'>
						Отметьте пункты, которые вы уже соблюдаете, чтобы проверить свой
						уровень защиты:
					</p>

					<div className='checklist-items'>
						{CHECKLIST_ITEMS.map((itemText, idx) => (
							<label key={idx} className='check-item'>
								<input
									type='checkbox'
									checked={!!checkedItems[idx]}
									onChange={() => handleToggleCheck(idx)}
								/>
								<span className='custom-check'></span>
								<span className='check-text'>{itemText}</span>
							</label>
						))}
					</div>

					<div className='progress-bar-container'>
						<div
							className='progress-bar'
							style={{ width: `${progressPercent}%` }}
						></div>
					</div>
					<div className='score-text'>Безопасность: {progressPercent}%</div>
				</section>
			</main>

			<footer>
				<div className='container'>
					<p>
						© 2026 ЦИФРА — Памятка по кибербезопасности и финансовой
						грамотности.
					</p>
				</div>
			</footer>
		</React.Fragment>
	)
}

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(<App />)
