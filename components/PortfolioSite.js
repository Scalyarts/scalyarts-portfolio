import React from "react";
import { motion } from "framer-motion";
import { Card, CardContent } from "./ui/card";
import { Mail, Send, Globe, Briefcase } from "lucide-react";

// Твои проекты (замени пути к картинкам, если нужно)
const projects = [
  {
    title: "Twils ETAN (диван)",
    thumb: "/images/twils-etan.jpg",
    description: "Фотореалистичная визуализация дивана в интерьере. Corona Render + постобработка."
  },
  {
    title: "Флетхаус кухня/гостиная",
    thumb: "/images/flethouse.jpg",
    description: "Визуализация современного жилого пространства: 3ds Max + Corona."
  },
  {
    title: "Гостиничный номер + санузел",
    thumb: "/images/hotel-room.jpg",
    description: "Интерьер коммерческого типа с учётом ТЗ. Текстуры + свет."
  },
  {
    title: "Пример визуализации мебели (мягкая группа)",
    thumb: "/images/sofa-group.jpg",
    description: "Смоделирована и визуализирована мягкая мебель. Marvelous Designer + Corona."
  },
  {
    title: "Визуализация кухонного гарнитура",
    thumb: "/images/kitchen-set.jpg",
    description: "Модель под заказ. Все материалы и освещение проработаны в Corona Render."
  },
  {
    title: "Сцена спальни",
    thumb: "/images/bedroom-scene.jpg",
    description: "Фотореализм: моделинг + свет + текстуры."
  },
];

// Ссылки на соцсети
const socials = [
  { icon: <Briefcase className="w-5 h-5" />, href: "https://kwork.ru/user/scalyarts" },
  { icon: <Send className="w-5 h-5" />, href: "https://t.me/Scalyarts" },
  { icon: <Globe className="w-5 h-5" />, href: "https://3ddd.ru/users/scalyarts" },
];

const stagger = {
  hidden: { opacity: 0, y: 20 },
  show: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.15, duration: 0.6, ease: "easeOut" },
  }),
};

export default function PortfolioSite() {
  return (
    <div className="font-sans text-gray-100 bg-gradient-to-b from-black via-slate-800 to-slate-900 min-h-screen">
      {/* Header */}
      <header className="max-w-6xl mx-auto px-4 py-8 flex items-center justify-between">
        <h1 className="text-2xl sm:text-3xl font-bold tracking-tight text-red-500">ScalyArts</h1>
        <nav className="flex gap-6 text-sm text-gray-300">
          <a href="#about" className="hover:text-red-400 transition-colors">Обо мне</a>
          <a href="#projects" className="hover:text-red-400 transition-colors">Проекты</a>
          <a href="#contact" className="hover:text-red-400 transition-colors">Контакты</a>
        </nav>
      </header>

      {/* Hero */}
      <section className="relative overflow-hidden">
        <motion.div
          initial={{ scale: 1.1, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="max-w-6xl mx-auto px-4 pt-20 pb-32 text-center"
        >
          <h2 className="text-4xl sm:text-5xl font-extrabold leading-tight mb-6 text-white">
            Фотореалистичная 3D‑мебель & интерьеры
          </h2>
          <p className="text-lg sm:text-xl max-w-2xl mx-auto text-gray-300">
            Создаю 3D‑модели мебели и визуализации жилых / коммерческих помещений по&nbsp;вашему ТЗ.
          </p>
        </motion.div>
      </section>

      {/* About */}
      <section id="about" className="max-w-6xl mx-auto px-4 py-16 grid md:grid-cols-2 gap-12">
        <motion.img
          src="/images/profile-placeholder.jpg"
          alt="ScalyArts portrait"
          className="w-full h-64 object-cover rounded-2xl shadow-lg"
          initial={{ x: -40, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        />
        <motion.div
          initial={{ x: 40, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h3 className="text-3xl font-semibold mb-4 text-white">Привет! Я ScalyArts 👋</h3>
          <p className="mb-4 text-gray-300">
            3D‑художник, специализуюсь на моделировании мебели и интерьерных визуализациях, близких к фотореализму. Работаю в 3ds Max + Corona Render, Marvelous Designer, Adobe Photoshop.
          </p>
          <p className="text-gray-300">
            Сотрудничаю с дизайнерами, архитекторами и студиями CG, создавая реалистичные сцены и оптимизированные low/high‑poly модели для рендеров, AR/VR и игровых движков.
          </p>
        </motion.div>
      </section>

      {/* Projects */}
      <section id="projects" className="bg-slate-800 py-16">
        <div className="max-w-6xl mx-auto px-4">
          <h3 className="text-3xl font-semibold text-center mb-12 text-white">Избранные проекты</h3>

          <div className="grid md:grid-cols-3 gap-8">
            {projects.map((p, i) => (
              <motion.div
                variants={stagger}
                initial="hidden"
                whileInView="show"
                custom={i}
                viewport={{ once: true }}
                key={p.title}
              >
                <Card className="overflow-hidden rounded-2xl shadow-xl hover:shadow-2xl transition-shadow duration-300 bg-slate-900">
                  <img src={p.thumb} alt={p.title} className="w-full h-48 object-cover" />
                  <CardContent className="p-4">
                    <h4 className="font-medium text-lg mb-2 text-red-400">{p.title}</h4>
                    <p className="text-sm text-gray-400">{p.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="max-w-6xl mx-auto px-4 py-20 text-center">
        <h3 className="text-3xl font-semibold mb-6 text-white">Свяжитесь со мной</h3>
        <p className="mb-8 max-w-lg mx-auto text-gray-300">
          Обсудим вашу задачу, сроки и стоимость. Пишите любым удобным способом или используйте форму.
        </p>

        <form className="max-w-xl mx-auto grid gap-4">
          <input placeholder="Имя" className="p-3 rounded-xl border border-gray-700 bg-slate-900 text-gray-200 focus:outline-none focus:ring-2 focus:ring-red-500" />
          <input placeholder="Email" type="email" className="p-3 rounded-xl border border-gray-700 bg-slate-900 text-gray-200 focus:outline-none focus:ring-2 focus:ring-red-500" />
          <textarea placeholder="Сообщение" rows="5" className="p-3 rounded-xl border border-gray-700 bg-slate-900 text-gray-200 focus:outline-none focus:ring-2 focus:ring-red-500"></textarea>
          <button type="submit" className="bg-red-600 text-white py-3 rounded-xl font-semibold shadow-md hover:bg-red-700 transition-colors">
            Отправить
          </button>
        </form>

        {/* Social icons */}
        <div className="flex justify-center gap-4 mt-10">
          <a href="mailto:scalyarts3d@gmail.com" className="p-3 rounded-full bg-slate-800 shadow-lg hover:shadow-xl">
            <Mail className="w-5 h-5 text-red-500" />
          </a>
          {socials.map((s) => (
            <a key={s.href} href={s.href} target="_blank" rel="noopener noreferrer" className="p-3 rounded-full bg-slate-800 shadow-lg hover:shadow-xl">
              {s.icon}
            </a>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="text-center py-6 text-sm text-gray-500">
        © {new Date().getFullYear()} ScalyArts • Все права защищены
      </footer>
    </div>
  );
}
