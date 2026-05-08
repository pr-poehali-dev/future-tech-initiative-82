import { motion, useInView } from "framer-motion"
import { useRef, useState } from "react"
import Icon from "@/components/ui/icon"

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
}

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
}

function Section({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: "-80px" })
  return (
    <motion.div ref={ref} initial="hidden" animate={inView ? "visible" : "hidden"} variants={stagger} className={className}>
      {children}
    </motion.div>
  )
}

const glassCard = {
  background: "rgba(255,255,255,0.55)",
  backdropFilter: "blur(24px) saturate(180%)",
  WebkitBackdropFilter: "blur(24px) saturate(180%)",
  border: "1px solid rgba(255,255,255,0.7)",
  boxShadow: "0 4px 32px rgba(139,92,246,0.06), 0 1px 2px rgba(0,0,0,0.04), inset 0 1px 1px rgba(255,255,255,0.9)",
}

const glassCardHover = "hover:shadow-xl hover:-translate-y-1 transition-all duration-300"

export function HomePage() {
  const [chatOpen, setChatOpen] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [faqOpen, setFaqOpen] = useState<number | null>(null)

  return (
    <div className="relative min-h-screen overflow-x-hidden font-sans">
      {/* ─── BACKGROUND ─── */}
      <div className="fixed inset-0 z-0" style={{ background: "linear-gradient(135deg, #fafafe 0%, #f0f4ff 25%, #fdf0f8 50%, #f5f0ff 75%, #eef4ff 100%)" }} />

      {/* Animated orbs */}
      <motion.div className="fixed z-0 rounded-full pointer-events-none"
        style={{ width: 700, height: 700, top: "-15%", left: "-10%", background: "radial-gradient(circle, rgba(167,139,250,0.18) 0%, transparent 70%)", filter: "blur(80px)" }}
        animate={{ x: [0, 80, 30, 0], y: [0, 60, 100, 0], scale: [1, 1.15, 0.95, 1] }}
        transition={{ duration: 22, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div className="fixed z-0 rounded-full pointer-events-none"
        style={{ width: 600, height: 600, top: "30%", right: "-12%", background: "radial-gradient(circle, rgba(236,136,195,0.15) 0%, transparent 70%)", filter: "blur(90px)" }}
        animate={{ x: [0, -70, -30, 0], y: [0, 90, -50, 0], scale: [1, 0.85, 1.2, 1] }}
        transition={{ duration: 28, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div className="fixed z-0 rounded-full pointer-events-none"
        style={{ width: 500, height: 500, bottom: "-5%", left: "25%", background: "radial-gradient(circle, rgba(125,175,250,0.15) 0%, transparent 70%)", filter: "blur(70px)" }}
        animate={{ x: [0, 50, -40, 0], y: [0, -60, 30, 0], scale: [1, 1.1, 0.92, 1] }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div className="fixed z-0 rounded-full pointer-events-none"
        style={{ width: 400, height: 400, top: "55%", left: "-8%", background: "radial-gradient(circle, rgba(196,181,253,0.12) 0%, transparent 70%)", filter: "blur(60px)" }}
        animate={{ x: [0, 40, 70, 0], y: [0, -40, 20, 0] }}
        transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Noise overlay */}
      <div className="pointer-events-none fixed inset-0 z-[1]"
        style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`, opacity: 0.02 }}
      />

      {/* ─── HEADER ─── */}
      <header className="fixed top-0 left-0 right-0 z-50 px-4 py-3">
        <div className="max-w-7xl mx-auto">
          <div className="rounded-2xl px-5 py-3 flex items-center justify-between"
            style={{ background: "rgba(255,255,255,0.7)", backdropFilter: "blur(24px) saturate(180%)", WebkitBackdropFilter: "blur(24px) saturate(180%)", border: "1px solid rgba(255,255,255,0.8)", boxShadow: "0 4px 24px rgba(139,92,246,0.08), inset 0 1px 1px rgba(255,255,255,0.9)" }}>
            
            {/* Logo */}
            <a href="#" className="flex items-center gap-2.5 shrink-0">
              <div className="w-8 h-8 rounded-xl flex items-center justify-center" style={{ background: "linear-gradient(135deg, #a78bfa, #ec8cc3)" }}>
                <Icon name="Zap" size={16} className="text-white" />
              </div>
              <span className="text-[15px] font-bold text-gray-800 tracking-tight">SalesFlow</span>
            </a>

            {/* Desktop nav */}
            <nav className="hidden lg:flex items-center gap-1">
              {[
                { label: "Главная", href: "#" },
                { label: "Услуги", href: "#services" },
                { label: "CRM", href: "#crm" },
                { label: "WhatsApp", href: "#whatsapp" },
                { label: "Телефония", href: "#telephony" },
                { label: "Кейсы", href: "#cases" },
                { label: "Блог", href: "#blog" },
                { label: "Контакты", href: "#contacts" },
              ].map((item) => (
                <a key={item.label} href={item.href}
                  className="px-3 py-1.5 text-[13px] font-medium text-gray-600 hover:text-gray-900 rounded-lg hover:bg-white/60 transition-all duration-200">
                  {item.label}
                </a>
              ))}
            </nav>

            <div className="flex items-center gap-3">
              <a href="#cta"
                className="hidden sm:inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-[13px] font-semibold text-white transition-all duration-200 hover:opacity-90 hover:scale-[1.02]"
                style={{ background: "linear-gradient(135deg, #a78bfa, #ec8cc3)", boxShadow: "0 4px 16px rgba(167,139,250,0.35)" }}>
                <Icon name="MessageCircle" size={14} />
                Консультация
              </a>
              <button onClick={() => setMenuOpen(!menuOpen)} className="lg:hidden p-2 rounded-xl hover:bg-white/60 transition-colors">
                <Icon name={menuOpen ? "X" : "Menu"} size={20} className="text-gray-700" />
              </button>
            </div>
          </div>

          {/* Mobile menu */}
          {menuOpen && (
            <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} className="mt-2 rounded-2xl px-4 py-4"
              style={{ background: "rgba(255,255,255,0.85)", backdropFilter: "blur(24px)", WebkitBackdropFilter: "blur(24px)", border: "1px solid rgba(255,255,255,0.8)" }}>
              {["Главная", "Услуги", "CRM", "WhatsApp", "Телефония", "Кейсы", "Блог", "Контакты"].map((item) => (
                <a key={item} href="#" onClick={() => setMenuOpen(false)}
                  className="block px-3 py-2.5 text-[14px] font-medium text-gray-700 hover:text-gray-900 rounded-lg hover:bg-white/60 transition-all">
                  {item}
                </a>
              ))}
              <a href="#cta" onClick={() => setMenuOpen(false)}
                className="mt-2 flex items-center justify-center gap-2 w-full py-2.5 rounded-xl text-[14px] font-semibold text-white"
                style={{ background: "linear-gradient(135deg, #a78bfa, #ec8cc3)" }}>
                Получить консультацию
              </a>
            </motion.div>
          )}
        </div>
      </header>

      {/* ─── MAIN CONTENT ─── */}
      <main className="relative z-10 pt-20">

        {/* ═══════════════════════════════════════
            HERO
        ═══════════════════════════════════════ */}
        <section className="min-h-[92vh] flex items-center px-4 py-16 lg:py-24">
          <div className="max-w-7xl mx-auto w-full">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              
              {/* Left */}
              <motion.div initial="hidden" animate="visible" variants={stagger}>
                <motion.div variants={fadeUp}
                  className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-[12px] font-semibold text-purple-700 mb-6"
                  style={{ background: "rgba(167,139,250,0.12)", border: "1px solid rgba(167,139,250,0.25)" }}>
                  <span className="w-1.5 h-1.5 rounded-full bg-purple-500 animate-pulse" />
                  CRM · WhatsApp · Телефония · Аналитика
                </motion.div>

                <motion.h1 variants={fadeUp}
                  className="text-4xl lg:text-6xl font-extrabold text-gray-900 leading-[1.1] tracking-tight mb-6">
                  Автоматизируем продажи, CRM и коммуникации, чтобы вы не теряли заявки и клиентов
                </motion.h1>

                <motion.p variants={fadeUp} className="text-lg text-gray-500 leading-relaxed mb-8 max-w-xl">
                  Настраиваем CRM, WhatsApp, телефонию, контроль менеджеров и аналитику под реальные процессы бизнеса
                </motion.p>

                <motion.div variants={fadeUp} className="flex flex-col sm:flex-row gap-3">
                  <a href="#cta"
                    className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-2xl text-[15px] font-semibold text-white transition-all duration-200 hover:opacity-90 hover:scale-[1.02]"
                    style={{ background: "linear-gradient(135deg, #a78bfa, #ec8cc3)", boxShadow: "0 8px 32px rgba(167,139,250,0.4)" }}>
                    <Icon name="MessageCircle" size={17} />
                    Получить консультацию
                  </a>
                  <a href="#services"
                    className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-2xl text-[15px] font-semibold text-gray-700 transition-all duration-200 hover:bg-white"
                    style={{ background: "rgba(255,255,255,0.6)", backdropFilter: "blur(12px)", WebkitBackdropFilter: "blur(12px)", border: "1px solid rgba(255,255,255,0.8)" }}>
                    Посмотреть решения
                    <Icon name="ArrowRight" size={16} />
                  </a>
                </motion.div>

                <motion.div variants={fadeUp} className="mt-10 flex flex-wrap items-center gap-6">
                  {[
                    { num: "200+", label: "Проектов внедрено" },
                    { num: "98%", label: "Клиентов довольны" },
                    { num: "3 дня", label: "Старт внедрения" },
                  ].map((stat) => (
                    <div key={stat.num} className="flex flex-col">
                      <span className="text-2xl font-black text-gray-900">{stat.num}</span>
                      <span className="text-[12px] text-gray-400 font-medium">{stat.label}</span>
                    </div>
                  ))}
                </motion.div>
              </motion.div>

              {/* Right — CRM Dashboard Illustration */}
              <motion.div initial={{ opacity: 0, x: 40 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8, delay: 0.3 }}
                className="relative hidden lg:block">
                <div className="relative rounded-[28px] p-6" style={{ ...glassCard, boxShadow: "0 24px 80px rgba(139,92,246,0.15), 0 4px 16px rgba(0,0,0,0.06), inset 0 1px 1px rgba(255,255,255,0.9)" }}>
                  
                  {/* Dashboard header */}
                  <div className="flex items-center justify-between mb-5">
                    <div>
                      <div className="text-[11px] text-gray-400 font-medium uppercase tracking-wider">Дашборд продаж</div>
                      <div className="text-[18px] font-bold text-gray-800 mt-0.5">Сегодня, 14:35</div>
                    </div>
                    <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full text-[11px] font-semibold text-emerald-700"
                      style={{ background: "rgba(52,211,153,0.12)", border: "1px solid rgba(52,211,153,0.25)" }}>
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                      Онлайн
                    </div>
                  </div>

                  {/* Metrics row */}
                  <div className="grid grid-cols-3 gap-3 mb-5">
                    {[
                      { label: "Новые заявки", value: "24", color: "#a78bfa", icon: "Inbox" },
                      { label: "В работе", value: "47", color: "#60a5fa", icon: "Users" },
                      { label: "Закрыто", value: "12", color: "#34d399", icon: "CheckCircle" },
                    ].map((m) => (
                      <div key={m.label} className="rounded-xl p-3" style={{ background: "rgba(255,255,255,0.6)", border: "1px solid rgba(255,255,255,0.7)" }}>
                        <Icon name={m.icon} size={16} style={{ color: m.color }} />
                        <div className="text-[22px] font-black text-gray-800 mt-1">{m.value}</div>
                        <div className="text-[10px] text-gray-400 font-medium">{m.label}</div>
                      </div>
                    ))}
                  </div>

                  {/* Channels */}
                  <div className="rounded-xl p-3 mb-3" style={{ background: "rgba(255,255,255,0.6)", border: "1px solid rgba(255,255,255,0.7)" }}>
                    <div className="text-[11px] font-semibold text-gray-500 mb-2.5 uppercase tracking-wider">Каналы коммуникации</div>
                    {[
                      { name: "WhatsApp", count: 18, pct: 72, color: "#25d366" },
                      { name: "Телефония", count: 9, pct: 36, color: "#60a5fa" },
                      { name: "Email", count: 5, pct: 20, color: "#a78bfa" },
                    ].map((ch) => (
                      <div key={ch.name} className="flex items-center gap-2 mb-1.5">
                        <div className="text-[12px] font-medium text-gray-600 w-20">{ch.name}</div>
                        <div className="flex-1 h-1.5 rounded-full bg-gray-100">
                          <div className="h-full rounded-full transition-all" style={{ width: `${ch.pct}%`, background: ch.color }} />
                        </div>
                        <div className="text-[11px] font-semibold text-gray-600 w-6 text-right">{ch.count}</div>
                      </div>
                    ))}
                  </div>

                  {/* Recent leads */}
                  <div className="space-y-2">
                    {[
                      { name: "Алексей М.", status: "Новая заявка", time: "2 мин", dot: "#a78bfa" },
                      { name: "ООО Техпром", status: "Демо назначено", time: "14 мин", dot: "#60a5fa" },
                      { name: "Мария С.", status: "КП отправлено", time: "1 ч", dot: "#f59e0b" },
                    ].map((lead) => (
                      <div key={lead.name} className="flex items-center gap-3 px-3 py-2.5 rounded-xl"
                        style={{ background: "rgba(255,255,255,0.6)", border: "1px solid rgba(255,255,255,0.7)" }}>
                        <div className="w-7 h-7 rounded-full flex items-center justify-center text-[11px] font-bold text-white shrink-0"
                          style={{ background: `linear-gradient(135deg, ${lead.dot}, #ec8cc3)` }}>
                          {lead.name[0]}
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="text-[12px] font-semibold text-gray-800">{lead.name}</div>
                          <div className="text-[11px] text-gray-400">{lead.status}</div>
                        </div>
                        <div className="text-[10px] text-gray-400 shrink-0">{lead.time}</div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Floating badges */}
                <motion.div className="absolute -top-4 -right-4 px-4 py-2.5 rounded-2xl"
                  style={{ ...glassCard, boxShadow: "0 8px 32px rgba(167,139,250,0.2)" }}
                  animate={{ y: [0, -6, 0] }} transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                    <span className="text-[12px] font-semibold text-gray-700">+3 заявки за час</span>
                  </div>
                </motion.div>

                <motion.div className="absolute -bottom-4 -left-4 px-4 py-2.5 rounded-2xl"
                  style={{ ...glassCard, boxShadow: "0 8px 32px rgba(236,136,195,0.2)" }}
                  animate={{ y: [0, 6, 0] }} transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}>
                  <div className="flex items-center gap-2">
                    <Icon name="TrendingUp" size={14} className="text-purple-500" />
                    <span className="text-[12px] font-semibold text-gray-700">Конверсия +34%</span>
                  </div>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* ═══════════════════════════════════════
            PROBLEMS
        ═══════════════════════════════════════ */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <Section>
              <motion.div variants={fadeUp} className="text-center mb-12">
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-[12px] font-semibold text-pink-700 mb-4"
                  style={{ background: "rgba(236,72,153,0.08)", border: "1px solid rgba(236,72,153,0.2)" }}>
                  Знакомые ситуации?
                </div>
                <h2 className="text-3xl lg:text-4xl font-extrabold text-gray-900 tracking-tight">
                  Эти проблемы мешают вашим продажам расти
                </h2>
              </motion.div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {[
                  { icon: "AlertTriangle", title: "Теряются заявки", desc: "Лиды падают в почту, мессенджеры, звонки — менеджеры не успевают фиксировать всё", color: "#f59e0b" },
                  { icon: "Clock", title: "Долгие ответы", desc: "Клиент написал в WhatsApp, ждёт час. За это время уже купил у конкурента", color: "#ec4899" },
                  { icon: "Smartphone", title: "Личные номера менеджеров", desc: "Когда менеджер уходит — уходит и клиентская база. Переписки нет, звонков нет", color: "#8b5cf6" },
                  { icon: "EyeOff", title: "Нет контроля", desc: "Что говорят менеджеры на звонках? Как ведут переговоры? Непрозрачно", color: "#3b82f6" },
                  { icon: "Database", title: "CRM используется хаотично", desc: "Часть сделок в CRM, часть — в таблицах, часть — только в голове менеджера", color: "#10b981" },
                  { icon: "BarChart2", title: "Нет аналитики", desc: "Непонятно, какой канал приводит клиентов. Деньги в рекламу вложены — результата не видно", color: "#a78bfa" },
                ].map((problem, i) => (
                  <motion.div key={i} variants={fadeUp}
                    className={`rounded-2xl p-5 cursor-default ${glassCardHover}`}
                    style={glassCard}>
                    <div className="w-10 h-10 rounded-xl flex items-center justify-center mb-4"
                      style={{ background: `${problem.color}18`, border: `1px solid ${problem.color}30` }}>
                      <Icon name={problem.icon} size={20} style={{ color: problem.color }} />
                    </div>
                    <h3 className="text-[15px] font-bold text-gray-800 mb-1.5">{problem.title}</h3>
                    <p className="text-[13px] text-gray-500 leading-relaxed">{problem.desc}</p>
                  </motion.div>
                ))}
              </div>
            </Section>
          </div>
        </section>

        {/* ═══════════════════════════════════════
            SOLUTIONS
        ═══════════════════════════════════════ */}
        <section id="services" className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <Section>
              <motion.div variants={fadeUp} className="text-center mb-12">
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-[12px] font-semibold text-purple-700 mb-4"
                  style={{ background: "rgba(167,139,250,0.1)", border: "1px solid rgba(167,139,250,0.25)" }}>
                  Наши решения
                </div>
                <h2 className="text-3xl lg:text-4xl font-extrabold text-gray-900 tracking-tight mb-3">
                  Всё, что нужно для работающих продаж
                </h2>
                <p className="text-gray-500 max-w-xl mx-auto">Внедряем комплексно или по шагам — в зависимости от задач вашего бизнеса</p>
              </motion.div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {[
                  { icon: "Database", title: "Внедрение CRM", desc: "Bitrix24 и AmoCRM под процессы вашего бизнеса, а не «из коробки»", href: "#crm" },
                  { icon: "MessageCircle", title: "WhatsApp в CRM", desc: "Все переписки менеджеров — в одном окне. История сохраняется", href: "#whatsapp" },
                  { icon: "Phone", title: "Телефония", desc: "Виртуальная АТС, запись звонков, контроль разговоров", href: "#telephony" },
                  { icon: "BarChart3", title: "Аналитика", desc: "Дашборды и отчёты по каждому менеджеру, воронке и каналу", href: "#" },
                  { icon: "Zap", title: "Автоматизация", desc: "Задачи, уведомления, шаблоны — убираем рутину из работы команды", href: "#" },
                  { icon: "ShieldCheck", title: "Контроль качества", desc: "Оцениваем звонки и переписки. Растим конверсию менеджеров", href: "#" },
                  { icon: "Lock", title: "Защита базы", desc: "Клиентская база остаётся у компании. Даже если менеджер уходит", href: "#" },
                  { icon: "Headphones", title: "Сопровождение", desc: "Поддержка после внедрения. Доработки, обновления, консультации", href: "#" },
                ].map((s, i) => (
                  <motion.a key={i} href={s.href} variants={fadeUp}
                    className={`group rounded-2xl p-5 ${glassCardHover} cursor-pointer`}
                    style={glassCard}>
                    <div className="w-10 h-10 rounded-xl flex items-center justify-center mb-4"
                      style={{ background: "linear-gradient(135deg, rgba(167,139,250,0.15), rgba(236,136,195,0.15))", border: "1px solid rgba(167,139,250,0.2)" }}>
                      <Icon name={s.icon} size={20} className="text-purple-600" />
                    </div>
                    <h3 className="text-[14px] font-bold text-gray-800 mb-1.5 group-hover:text-purple-700 transition-colors">{s.title}</h3>
                    <p className="text-[12px] text-gray-500 leading-relaxed">{s.desc}</p>
                  </motion.a>
                ))}
              </div>
            </Section>
          </div>
        </section>

        {/* ═══════════════════════════════════════
            HOW WE WORK
        ═══════════════════════════════════════ */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <Section>
              <motion.div variants={fadeUp} className="text-center mb-12">
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-[12px] font-semibold text-blue-700 mb-4"
                  style={{ background: "rgba(96,165,250,0.1)", border: "1px solid rgba(96,165,250,0.25)" }}>
                  Как мы работаем
                </div>
                <h2 className="text-3xl lg:text-4xl font-extrabold text-gray-900 tracking-tight">
                  6 шагов от хаоса к системе
                </h2>
              </motion.div>

              <div className="grid grid-cols-2 lg:grid-cols-6 gap-4">
                {[
                  { num: "01", icon: "Search", title: "Аудит", desc: "Изучаем текущие процессы, инструменты и боли команды" },
                  { num: "02", icon: "PenTool", title: "Проектирование", desc: "Разрабатываем архитектуру CRM под ваши воронки" },
                  { num: "03", icon: "Settings", title: "Настройка", desc: "Настраиваем CRM, роли, поля, воронки, автоматизации" },
                  { num: "04", icon: "GitMerge", title: "Интеграции", desc: "Подключаем WhatsApp, телефонию, сайт, рекламу" },
                  { num: "05", icon: "GraduationCap", title: "Обучение", desc: "Обучаем команду и готовим инструкции для работы" },
                  { num: "06", icon: "Headphones", title: "Поддержка", desc: "Сопровождаем, дорабатываем, отвечаем на вопросы" },
                ].map((step, i) => (
                  <motion.div key={i} variants={fadeUp}
                    className="rounded-2xl p-4 text-center"
                    style={glassCard}>
                    <div className="text-[10px] font-black text-purple-400 mb-2 tracking-widest">{step.num}</div>
                    <div className="w-10 h-10 rounded-xl flex items-center justify-center mx-auto mb-3"
                      style={{ background: "linear-gradient(135deg, rgba(167,139,250,0.15), rgba(96,165,250,0.15))", border: "1px solid rgba(167,139,250,0.2)" }}>
                      <Icon name={step.icon} size={18} className="text-purple-600" />
                    </div>
                    <div className="text-[13px] font-bold text-gray-800 mb-1">{step.title}</div>
                    <div className="text-[11px] text-gray-400 leading-relaxed">{step.desc}</div>
                  </motion.div>
                ))}
              </div>
            </Section>
          </div>
        </section>

        {/* ═══════════════════════════════════════
            FOR WHOM
        ═══════════════════════════════════════ */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <Section>
              <motion.div variants={fadeUp} className="text-center mb-12">
                <h2 className="text-3xl lg:text-4xl font-extrabold text-gray-900 tracking-tight mb-3">
                  Для кого это
                </h2>
                <p className="text-gray-500">Работаем с компаниями, у которых есть отдел продаж и задача расти</p>
              </motion.div>

              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-7 gap-3">
                {[
                  { icon: "ShoppingCart", label: "Интернет-магазины" },
                  { icon: "Briefcase", label: "Услуги" },
                  { icon: "Building2", label: "Недвижимость" },
                  { icon: "Heart", label: "Медицина" },
                  { icon: "BookOpen", label: "Образование" },
                  { icon: "TrendingUp", label: "B2B продажи" },
                  { icon: "Wrench", label: "Сервисный бизнес" },
                ].map((item, i) => (
                  <motion.div key={i} variants={fadeUp}
                    className={`rounded-2xl p-4 text-center ${glassCardHover}`}
                    style={glassCard}>
                    <div className="w-10 h-10 rounded-xl flex items-center justify-center mx-auto mb-2.5"
                      style={{ background: "linear-gradient(135deg, rgba(167,139,250,0.12), rgba(236,136,195,0.12))", border: "1px solid rgba(167,139,250,0.2)" }}>
                      <Icon name={item.icon} size={18} className="text-purple-600" />
                    </div>
                    <div className="text-[11px] font-semibold text-gray-700 leading-tight">{item.label}</div>
                  </motion.div>
                ))}
              </div>
            </Section>
          </div>
        </section>

        {/* ═══════════════════════════════════════
            ADVANTAGES
        ═══════════════════════════════════════ */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <Section>
              <div className="rounded-3xl p-8 lg:p-12" style={{ ...glassCard, boxShadow: "0 24px 80px rgba(139,92,246,0.1), 0 4px 16px rgba(0,0,0,0.04), inset 0 1px 1px rgba(255,255,255,0.9)" }}>
                <motion.div variants={fadeUp} className="text-center mb-10">
                  <h2 className="text-3xl lg:text-4xl font-extrabold text-gray-900 tracking-tight mb-3">
                    Что получает ваш бизнес
                  </h2>
                  <p className="text-gray-500">Конкретные результаты, без размытых обещаний</p>
                </motion.div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                  {[
                    { icon: "Inbox", title: "Все заявки в одной системе", desc: "Сайт, звонки, WhatsApp, соцсети — всё попадает в CRM автоматически" },
                    { icon: "Mic", title: "Контроль звонков и переписок", desc: "Слушайте записи звонков, читайте переписки прямо из карточки сделки" },
                    { icon: "Zap", title: "Меньше ручной работы", desc: "Автоматические задачи, шаблоны сообщений, напоминания — без ручного труда" },
                    { icon: "PieChart", title: "Прозрачные отчёты", desc: "Видите выручку, конверсию и KPI каждого менеджера в реальном времени" },
                    { icon: "Lock", title: "Защита клиентской базы", desc: "Данные хранятся в CRM, а не у менеджера. При увольнении ничего не теряете" },
                    { icon: "UserCheck", title: "Контроль менеджеров", desc: "Скрипты, оценки звонков, планы — системный подход к росту команды" },
                  ].map((adv, i) => (
                    <motion.div key={i} variants={fadeUp} className="flex gap-4 items-start">
                      <div className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0 mt-0.5"
                        style={{ background: "linear-gradient(135deg, rgba(167,139,250,0.15), rgba(236,136,195,0.15))", border: "1px solid rgba(167,139,250,0.2)" }}>
                        <Icon name={adv.icon} size={18} className="text-purple-600" />
                      </div>
                      <div>
                        <div className="text-[14px] font-bold text-gray-800 mb-1">{adv.title}</div>
                        <div className="text-[13px] text-gray-500 leading-relaxed">{adv.desc}</div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </Section>
          </div>
        </section>

        {/* ═══════════════════════════════════════
            CASES
        ═══════════════════════════════════════ */}
        <section id="cases" className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <Section>
              <motion.div variants={fadeUp} className="text-center mb-12">
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-[12px] font-semibold text-emerald-700 mb-4"
                  style={{ background: "rgba(52,211,153,0.1)", border: "1px solid rgba(52,211,153,0.25)" }}>
                  Кейсы
                </div>
                <h2 className="text-3xl lg:text-4xl font-extrabold text-gray-900 tracking-tight">
                  Реальные результаты клиентов
                </h2>
              </motion.div>

              <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
                {[
                  {
                    industry: "Недвижимость",
                    color: "#a78bfa",
                    before: "Заявки терялись в 4 мессенджерах. Менеджеры работали с личных номеров. Нет понимания, на каком этапе каждый клиент.",
                    action: "Внедрили AmoCRM, подключили WhatsApp через официальный API, настроили автоворонки по этапам сделки.",
                    result: "Время ответа снизилось с 2 часов до 7 минут. Конверсия в показ выросла на 28%.",
                  },
                  {
                    industry: "Медицинская клиника",
                    color: "#60a5fa",
                    before: "Запись на приём велась в таблицах и блокнотах. Напоминания не отправлялись. 30% пациентов не приходили.",
                    action: "Настроили Bitrix24, подключили телефонию и автоотправку напоминаний в WhatsApp за 24 часа до визита.",
                    result: "Доля неявок снизилась до 8%. Нагрузка на администратора сократилась на 40%.",
                  },
                  {
                    industry: "B2B оборудование",
                    color: "#34d399",
                    before: "КП отправлялись вручную. Сделки зависали на этапах неделями. Нет отчётности по менеджерам.",
                    action: "Построили воронку с автозадачами, шаблонами КП и дашбордом руководителя в реальном времени.",
                    result: "Цикл сделки сократился с 45 до 18 дней. Выручка отдела выросла на 22% за квартал.",
                  },
                ].map((c, i) => (
                  <motion.div key={i} variants={fadeUp} className="rounded-2xl overflow-hidden" style={glassCard}>
                    <div className="h-1.5 w-full" style={{ background: `linear-gradient(90deg, ${c.color}, #ec8cc3)` }} />
                    <div className="p-6">
                      <div className="text-[11px] font-black text-purple-500 uppercase tracking-widest mb-3">{c.industry}</div>
                      <div className="space-y-4">
                        <div>
                          <div className="text-[10px] font-bold text-red-400 uppercase tracking-wider mb-1.5">Было</div>
                          <p className="text-[13px] text-gray-600 leading-relaxed">{c.before}</p>
                        </div>
                        <div>
                          <div className="text-[10px] font-bold text-blue-400 uppercase tracking-wider mb-1.5">Что сделали</div>
                          <p className="text-[13px] text-gray-600 leading-relaxed">{c.action}</p>
                        </div>
                        <div className="rounded-xl p-3" style={{ background: "rgba(52,211,153,0.08)", border: "1px solid rgba(52,211,153,0.2)" }}>
                          <div className="text-[10px] font-bold text-emerald-500 uppercase tracking-wider mb-1">Результат</div>
                          <p className="text-[13px] font-semibold text-gray-700 leading-relaxed">{c.result}</p>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </Section>
          </div>
        </section>

        {/* ═══════════════════════════════════════
            FAQ
        ═══════════════════════════════════════ */}
        <section className="py-20 px-4">
          <div className="max-w-3xl mx-auto">
            <Section>
              <motion.div variants={fadeUp} className="text-center mb-10">
                <h2 className="text-3xl lg:text-4xl font-extrabold text-gray-900 tracking-tight">
                  Частые вопросы
                </h2>
              </motion.div>

              <div className="space-y-3">
                {[
                  { q: "Какую CRM вы внедряете?", a: "Работаем с Bitrix24 и AmoCRM. Выбор зависит от специфики бизнеса, размера команды и задач. На консультации поможем определиться — без лишних уговоров." },
                  { q: "Можно ли подключить WhatsApp к CRM официально?", a: "Да. Используем официальный WhatsApp Business API. Это легальный способ без риска блокировок. Переписки ведутся прямо из CRM, история сохраняется." },
                  { q: "Сколько времени занимает внедрение?", a: "Базовое внедрение CRM — от 5 рабочих дней. Комплексный проект с интеграциями и обучением — 2–4 недели. Всё зависит от сложности процессов." },
                  { q: "Сколько стоит внедрение CRM?", a: "Стоимость начинается от 30 000 рублей за базовую настройку. Точную цену озвучиваем после аудита — без скрытых платежей. Первый разбор бесплатно." },
                  { q: "Нужна ли поддержка после внедрения?", a: "Рекомендуем, но не навязываем. После передачи проекта вы получаете инструкции и обученную команду. Поддержку подключаете по желанию." },
                  { q: "Вы работаете с существующей CRM или только с нуля?", a: "Работаем с обоими случаями. Если CRM уже есть, но настроена хаотично — аудируем и дорабатываем под ваши процессы." },
                ].map((faq, i) => (
                  <motion.div key={i} variants={fadeUp}
                    className="rounded-2xl overflow-hidden cursor-pointer"
                    style={glassCard}
                    onClick={() => setFaqOpen(faqOpen === i ? null : i)}>
                    <div className="flex items-center justify-between px-6 py-4">
                      <span className="text-[14px] font-semibold text-gray-800 pr-4">{faq.q}</span>
                      <Icon name={faqOpen === i ? "ChevronUp" : "ChevronDown"} size={18} className="text-gray-400 shrink-0 transition-transform duration-200" />
                    </div>
                    {faqOpen === i && (
                      <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: "auto" }}
                        className="px-6 pb-4">
                        <p className="text-[13px] text-gray-500 leading-relaxed">{faq.a}</p>
                      </motion.div>
                    )}
                  </motion.div>
                ))}
              </div>
            </Section>
          </div>
        </section>

        {/* ═══════════════════════════════════════
            CTA
        ═══════════════════════════════════════ */}
        <section id="cta" className="py-20 px-4">
          <div className="max-w-4xl mx-auto">
            <Section>
              <motion.div variants={fadeUp}
                className="rounded-3xl p-8 lg:p-12 text-center"
                style={{ background: "linear-gradient(135deg, rgba(167,139,250,0.12) 0%, rgba(236,136,195,0.1) 50%, rgba(96,165,250,0.1) 100%)", backdropFilter: "blur(24px) saturate(180%)", WebkitBackdropFilter: "blur(24px) saturate(180%)", border: "1px solid rgba(255,255,255,0.7)", boxShadow: "0 24px 80px rgba(139,92,246,0.12), inset 0 1px 1px rgba(255,255,255,0.9)" }}>
                
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-[12px] font-semibold text-purple-700 mb-5"
                  style={{ background: "rgba(167,139,250,0.12)", border: "1px solid rgba(167,139,250,0.25)" }}>
                  Бесплатно
                </div>

                <h2 className="text-3xl lg:text-4xl font-extrabold text-gray-900 tracking-tight mb-3">
                  Получите бесплатный разбор CRM и продаж
                </h2>
                <p className="text-gray-500 mb-8 max-w-xl mx-auto">
                  Расскажем, что мешает вашим продажам расти, и покажем, как это исправить. Без продаж в лоб.
                </p>

                <form id="contacts" className="max-w-xl mx-auto space-y-3" onSubmit={(e) => e.preventDefault()}>
                  <div className="grid sm:grid-cols-2 gap-3">
                    <input type="text" placeholder="Ваше имя" required
                      className="w-full px-4 py-3 rounded-xl text-[14px] text-gray-700 placeholder-gray-400 outline-none focus:ring-2 focus:ring-purple-300 transition-all"
                      style={{ background: "rgba(255,255,255,0.7)", border: "1px solid rgba(255,255,255,0.8)", backdropFilter: "blur(12px)" }} />
                    <input type="tel" placeholder="Телефон" required
                      className="w-full px-4 py-3 rounded-xl text-[14px] text-gray-700 placeholder-gray-400 outline-none focus:ring-2 focus:ring-purple-300 transition-all"
                      style={{ background: "rgba(255,255,255,0.7)", border: "1px solid rgba(255,255,255,0.8)", backdropFilter: "blur(12px)" }} />
                  </div>
                  <div className="grid sm:grid-cols-2 gap-3">
                    <select className="w-full px-4 py-3 rounded-xl text-[14px] text-gray-500 outline-none focus:ring-2 focus:ring-purple-300 transition-all appearance-none"
                      style={{ background: "rgba(255,255,255,0.7)", border: "1px solid rgba(255,255,255,0.8)", backdropFilter: "blur(12px)" }}>
                      <option value="">Мессенджер</option>
                      <option>WhatsApp</option>
                      <option>Telegram</option>
                      <option>Позвоните мне</option>
                    </select>
                    <select className="w-full px-4 py-3 rounded-xl text-[14px] text-gray-500 outline-none focus:ring-2 focus:ring-purple-300 transition-all appearance-none"
                      style={{ background: "rgba(255,255,255,0.7)", border: "1px solid rgba(255,255,255,0.8)", backdropFilter: "blur(12px)" }}>
                      <option value="">Ваша CRM</option>
                      <option>Bitrix24</option>
                      <option>AmoCRM</option>
                      <option>Другая</option>
                      <option>Нет CRM</option>
                    </select>
                  </div>
                  <button type="submit"
                    className="w-full py-3.5 rounded-xl text-[15px] font-bold text-white transition-all duration-200 hover:opacity-90 hover:scale-[1.01]"
                    style={{ background: "linear-gradient(135deg, #a78bfa, #ec8cc3)", boxShadow: "0 8px 32px rgba(167,139,250,0.4)" }}>
                    Получить бесплатный разбор
                  </button>
                  <p className="text-[11px] text-gray-400">Нажимая кнопку, вы соглашаетесь с политикой конфиденциальности</p>
                </form>
              </motion.div>
            </Section>
          </div>
        </section>

        {/* ═══════════════════════════════════════
            FOOTER
        ═══════════════════════════════════════ */}
        <footer className="py-10 px-4 border-t border-white/40">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="flex items-center gap-2">
                <div className="w-7 h-7 rounded-lg flex items-center justify-center" style={{ background: "linear-gradient(135deg, #a78bfa, #ec8cc3)" }}>
                  <Icon name="Zap" size={14} className="text-white" />
                </div>
                <span className="text-[14px] font-bold text-gray-700">SalesFlow</span>
              </div>
              <div className="flex flex-wrap justify-center gap-x-6 gap-y-1">
                {["Услуги", "Кейсы", "Блог", "Контакты", "Тарифы"].map((link) => (
                  <a key={link} href="#" className="text-[12px] text-gray-400 hover:text-gray-700 transition-colors">{link}</a>
                ))}
              </div>
              <p className="text-[11px] text-gray-400">© 2025 SalesFlow. Все права защищены.</p>
            </div>
          </div>
        </footer>
      </main>

      {/* ═══════════════════════════════════════
          FLOATING CHAT
      ═══════════════════════════════════════ */}
      <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3">
        {chatOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            className="w-80 rounded-3xl overflow-hidden"
            style={{ ...glassCard, boxShadow: "0 24px 64px rgba(139,92,246,0.2), 0 4px 16px rgba(0,0,0,0.08)" }}>
            
            {/* Chat header */}
            <div className="px-5 py-4" style={{ background: "linear-gradient(135deg, rgba(167,139,250,0.15), rgba(236,136,195,0.12))" }}>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-full flex items-center justify-center" style={{ background: "linear-gradient(135deg, #a78bfa, #ec8cc3)" }}>
                    <Icon name="MessageCircle" size={16} className="text-white" />
                  </div>
                  <div>
                    <div className="text-[13px] font-bold text-gray-800">Команда SalesFlow</div>
                    <div className="flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                      <span className="text-[11px] text-emerald-600 font-medium">Онлайн · обычно отвечаем за 5 мин</span>
                    </div>
                  </div>
                </div>
                <button onClick={() => setChatOpen(false)} className="p-1.5 rounded-lg hover:bg-white/60 transition-colors">
                  <Icon name="X" size={16} className="text-gray-500" />
                </button>
              </div>
            </div>

            {/* Chat body */}
            <div className="px-5 py-4 space-y-3">
              <div className="flex gap-2.5">
                <div className="w-7 h-7 rounded-full shrink-0 flex items-center justify-center text-[10px] font-bold text-white" style={{ background: "linear-gradient(135deg, #a78bfa, #ec8cc3)" }}>А</div>
                <div className="rounded-2xl rounded-tl-sm px-3.5 py-2.5 max-w-[200px]"
                  style={{ background: "rgba(255,255,255,0.8)", border: "1px solid rgba(255,255,255,0.9)" }}>
                  <p className="text-[13px] text-gray-700 leading-relaxed">Привет! Расскажите о вашем проекте, и я помогу подобрать решение 👋</p>
                </div>
              </div>

              <div className="space-y-2">
                {["Хочу внедрить CRM", "Подключить WhatsApp", "Нужна консультация"].map((msg) => (
                  <button key={msg}
                    className="block w-full text-left px-3.5 py-2 rounded-2xl text-[12px] font-medium text-purple-700 hover:bg-white/80 transition-all"
                    style={{ background: "rgba(167,139,250,0.08)", border: "1px solid rgba(167,139,250,0.2)" }}>
                    {msg}
                  </button>
                ))}
              </div>
            </div>

            {/* Chat input */}
            <div className="px-4 py-3 border-t border-white/40">
              <div className="flex gap-2">
                <input type="text" placeholder="Напишите сообщение..."
                  className="flex-1 px-3.5 py-2 rounded-xl text-[13px] text-gray-700 placeholder-gray-400 outline-none focus:ring-2 focus:ring-purple-200 transition-all"
                  style={{ background: "rgba(255,255,255,0.7)", border: "1px solid rgba(255,255,255,0.8)" }} />
                <button className="w-9 h-9 rounded-xl flex items-center justify-center shrink-0 transition-all hover:opacity-90"
                  style={{ background: "linear-gradient(135deg, #a78bfa, #ec8cc3)" }}>
                  <Icon name="Send" size={15} className="text-white" />
                </button>
              </div>
            </div>
          </motion.div>
        )}

        <motion.button
          onClick={() => setChatOpen(!chatOpen)}
          className="w-14 h-14 rounded-2xl flex items-center justify-center shadow-lg transition-all duration-200 hover:scale-110 relative"
          style={{ background: "linear-gradient(135deg, #a78bfa, #ec8cc3)", boxShadow: "0 8px 32px rgba(167,139,250,0.45)" }}
          whileTap={{ scale: 0.92 }}>
          <Icon name={chatOpen ? "X" : "MessageCircle"} size={22} className="text-white" />
          {!chatOpen && (
            <span className="absolute -top-1 -right-1 w-3 h-3 rounded-full bg-emerald-400 border-2 border-white animate-pulse" />
          )}
        </motion.button>
      </div>
    </div>
  )
}

export default HomePage