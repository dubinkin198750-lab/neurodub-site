import Image from 'next/image';

const services = [
  {
    title: 'Разработка AI-алгоритмов',
    text: 'Создаём прикладные алгоритмы для обработки данных, классификации заявок, анализа документов и принятия решений.',
  },
  {
    title: 'Workflow-автоматизация на n8n',
    text: 'Проектируем и внедряем автоматические сценарии: лиды, CRM, уведомления, документы, интеграции и отчёты.',
  },
  {
    title: 'Интеграция в реальный бизнес',
    text: 'Встраиваем AI и автоматизацию в существующие процессы компании: продажи, поддержка, операционка, маркетинг.',
  },
];

const workflows = [
  {
    title: 'Обработка заявок',
    steps: ['Заявка клиента', 'AI-анализ', 'Квалификация', 'Запись в CRM', 'Уведомление менеджера'],
  },
  {
    title: 'Документооборот',
    steps: ['Документ', 'Распознавание и анализ', 'Извлечение данных', 'Запись в базу', 'Отчёт / задача'],
  },
  {
    title: 'Маркетинг и лидогенерация',
    steps: ['Лид', 'AI-сегментация', 'Запуск сценария', 'Коммуникация', 'Аналитика'],
  },
];

const benefits = [
  'Сокращение ручной работы и операционных ошибок',
  'Ускорение обработки заявок, документов и обращений',
  'Прозрачность процессов и контроль статусов',
  'Масштабирование без пропорционального роста команды',
];

const industries = ['E-commerce', 'Услуги', 'IT-компании', 'Маркетинговые агентства', 'Производство'];

export default function HomePage() {
  return (
    <main className="page-shell">
      <header className="site-header container">
        <div className="brand">
          <Image src="/logo.png" alt="Neurodub" width={48} height={48} priority />
          <span>Neurodub</span>
        </div>
        <nav className="site-nav">
          <a href="#services">Услуги</a>
          <a href="#workflows">Сценарии</a>
          <a href="#process">Как работаем</a>
          <a href="#contact" className="nav-cta">
            Обсудить проект
          </a>
        </nav>
      </header>

      <section className="hero container">
        <div className="hero-copy">
          <div className="eyebrow">AI + n8n + бизнес-процессы</div>
          <h1>Алгоритмы, которые управляют бизнес-процессами</h1>
          <p>
            Проектируем и внедряем AI-workflow для обработки заявок, документов, данных и клиентских
            обращений. Подключаем n8n, интеграции и автоматические сценарии к реальным процессам компании.
          </p>
          <div className="hero-actions">
            <a href="#contact" className="btn btn-primary">
              Получить аудит процессов
            </a>
            <a href="#workflows" className="btn btn-secondary">
              Посмотреть сценарии
            </a>
          </div>
          <div className="hero-badges">
            <span>AI-алгоритмы</span>
            <span>n8n workflow</span>
            <span>Интеграции</span>
            <span>Бизнес в России</span>
          </div>
        </div>

        <div className="hero-visual glass-card">
          <div className="tree-wrap">
            <Image src="/logo.png" alt="Логотип Neurodub" width={220} height={220} priority />
          </div>
          <div className="signal-grid">
            <div>
              <strong>Корни</strong>
              <span>CRM, данные, заявки, документы</span>
            </div>
            <div>
              <strong>Ствол</strong>
              <span>Алгоритмы, workflow, интеграции</span>
            </div>
            <div>
              <strong>Крона</strong>
              <span>AI-аналитика, решения, масштабирование</span>
            </div>
          </div>
        </div>
      </section>

      <section className="section container section-intro">
        <div className="section-heading">
          <div className="eyebrow">Что делает Neurodub</div>
          <h2>Не просто автоматизация, а архитектура процессов</h2>
          <p>
            Мы не продаём абстрактный «AI для бизнеса». Мы проектируем конкретные сценарии, которые работают
            в операционке: от квалификации лидов до документооборота и аналитики.
          </p>
        </div>
      </section>

      <section id="services" className="section container cards-grid">
        {services.map((item) => (
          <article key={item.title} className="glass-card service-card">
            <h3>{item.title}</h3>
            <p>{item.text}</p>
          </article>
        ))}
      </section>

      <section id="workflows" className="section container">
        <div className="section-heading">
          <div className="eyebrow">Типовые сценарии</div>
          <h2>Примеры workflow, которые можно внедрить в бизнес</h2>
        </div>
        <div className="workflow-grid">
          {workflows.map((workflow) => (
            <article key={workflow.title} className="glass-card workflow-card">
              <h3>{workflow.title}</h3>
              <ol>
                {workflow.steps.map((step) => (
                  <li key={step}>{step}</li>
                ))}
              </ol>
            </article>
          ))}
        </div>
      </section>

      <section className="section container results-grid">
        <div className="glass-card">
          <div className="eyebrow">Результат внедрения</div>
          <h2>Что получает бизнес</h2>
          <ul className="bullet-list">
            {benefits.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
        <div className="glass-card stats-card">
          <div className="stat">
            <strong>до 80%</strong>
            <span>типовых операций можно автоматизировать</span>
          </div>
          <div className="stat">
            <strong>24/7</strong>
            <span>workflow работают без ручного контроля</span>
          </div>
          <div className="stat">
            <strong>1 окно</strong>
            <span>для CRM, уведомлений, AI и бизнес-логики</span>
          </div>
        </div>
      </section>

      <section id="process" className="section container process-section">
        <div className="section-heading">
          <div className="eyebrow">Как проходит внедрение</div>
          <h2>От аудита процессов до запуска в продакшн</h2>
        </div>
        <div className="timeline">
          {[
            'Аудит бизнес-процессов и поиск точек автоматизации',
            'Проектирование логики, алгоритмов и сценариев',
            'Разработка workflow, интеграций и AI-блоков',
            'Тестирование, запуск и обучение команды',
            'Поддержка, оптимизация и развитие системы',
          ].map((step, index) => (
            <div key={step} className="timeline-item glass-card">
              <span className="timeline-index">0{index + 1}</span>
              <p>{step}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="section container industry-section">
        <div className="section-heading">
          <div className="eyebrow">Для кого</div>
          <h2>Подходит для компаний, где есть повторяемые процессы и данные</h2>
        </div>
        <div className="industry-tags">
          {industries.map((industry) => (
            <span key={industry}>{industry}</span>
          ))}
        </div>
      </section>

      <section id="contact" className="section container contact-grid">
        <div className="glass-card contact-copy">
          <div className="eyebrow">Старт проекта</div>
          <h2>Узнайте, какие процессы можно автоматизировать уже сейчас</h2>
          <p>
            Оставьте заявку — мы посмотрим на текущие процессы, предложим сценарии внедрения и подскажем, где
            AI и n8n дадут самый быстрый эффект.
          </p>
          <div className="contact-points">
            <span>Аудит процессов</span>
            <span>Карта автоматизации</span>
            <span>План внедрения</span>
          </div>
        </div>

        <form className="glass-card contact-form">
          <label>
            Имя
            <input type="text" name="name" placeholder="Ваше имя" />
          </label>
          <label>
            Компания
            <input type="text" name="company" placeholder="Название компании" />
          </label>
          <label>
            Телефон или Telegram
            <input type="text" name="contact" placeholder="Как с вами связаться" />
          </label>
          <label>
            Что хотите автоматизировать
            <textarea name="task" rows={5} placeholder="Например: обработку заявок, документы, лиды, CRM, отчёты" />
          </label>
          <button type="submit" className="btn btn-primary wide">
            Отправить заявку
          </button>
          <small>Сейчас форма демонстрационная. Подключите отправку в Telegram, email, CRM или webhook n8n.</small>
        </form>
      </section>
    </main>
  );
}
