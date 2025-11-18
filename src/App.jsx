import { useState, useEffect, useRef } from 'react';
import { Mail, Phone, Github, Linkedin, Code2, Briefcase, GraduationCap, Home, User, Eye, Brain, Users, Puzzle, MessageCircle, Send, FileText, Sun, Moon } from 'lucide-react';
import emailjs from '@emailjs/browser';
import portfolioImg from './assets/porfolio.png';
// CV file is now in public folder

function App() {
  const [activeTab, setActiveTab] = useState('accueil');
  const [theme, setTheme] = useState('dark');

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      const yOffset = -90; // Adjust for nav height
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_1v7q7qk', 'template_7q7q7qk', form.current, 'user_1234567890abcdef')
      .then((result) => {
          alert('Message envoyé avec succès !');
          e.target.reset();
      }, (error) => {
          alert('Erreur lors de l\'envoi du message, veuillez réessayer.');
      });
  };

  useEffect(() => {
    const sections = ['accueil', 'qualites', 'apropos', 'projets', 'cv'];
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 100;
      for (let section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveTab(section);
            break;
          }
        }
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    document.documentElement.classList.toggle('dark', theme === 'dark');
  }, [theme]);

  return (
    <div className="min-h-screen bg-white text-gray-900 dark:bg-slate-900 dark:text-gray-100 relative overflow-hidden">
      <div className="fixed inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-100 via-gray-200 to-gray-100 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900 animate-pulse"></div>
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-emerald-400/10 rounded-full blur-3xl animate-bounce"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-400/10 rounded-full blur-3xl animate-ping"></div>
        <div className="absolute top-1/2 left-1/2 w-48 h-48 bg-purple-400/10 rounded-full blur-2xl animate-spin"></div>
        <div className="absolute top-3/4 right-1/3 w-32 h-32 bg-yellow-400/10 rounded-full blur-xl animate-pulse"></div>
      </div>

      <nav className="fixed top-0 z-50 w-full backdrop-blur-md bg-white/90 dark:bg-slate-900/90 border-b border-gray-300 dark:border-slate-700 shadow-sm">
        <div className="max-w-6xl mx-auto px-6 py-4">
        <div className="flex items-center">
            <div className="flex gap-1 ml-auto">
              <button
                onClick={() => { setActiveTab('accueil'); scrollToSection('accueil'); }}
                className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-all ${
                  activeTab === 'accueil'
                    ? 'bg-emerald-500/10 text-emerald-500 border border-emerald-500/50'
                    : 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-200 hover:bg-gray-200/50 dark:hover:bg-slate-800/50'
                }`}
              >
                <Home size={18} />
                <span className="hidden sm:inline">Accueil</span>
              </button>
              <button
                onClick={() => { setActiveTab('qualites'); scrollToSection('qualites'); }}
                className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-all ${
                  activeTab === 'qualites'
                    ? 'bg-emerald-500/10 text-emerald-500 border border-emerald-500/50'
                    : 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-200 hover:bg-gray-200/50 dark:hover:bg-slate-800/50'
                }`}
              >
                <Code2 size={18} />
                <span className="hidden sm:inline">Qualités</span>
              </button>
              <button
                onClick={() => { setActiveTab('apropos'); scrollToSection('apropos'); }}
                className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-all ${
                  activeTab === 'apropos'
                    ? 'bg-emerald-500/10 text-emerald-500 border border-emerald-500/50'
                    : 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-200 hover:bg-gray-200/50 dark:hover:bg-slate-800/50'
                }`}
              >
                <User size={18} />
                <span className="hidden sm:inline">À propos</span>
              </button>
              <button
                onClick={() => { setActiveTab('projets'); scrollToSection('projets'); }}
                className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-all ${
                  activeTab === 'projets'
                    ? 'bg-emerald-500/10 text-emerald-500 border border-emerald-500/50'
                    : 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-200 hover:bg-gray-200/50 dark:hover:bg-slate-800/50'
                }`}
              >
                <Briefcase size={18} />
                <span className="hidden sm:inline">Projets</span>
              </button>

              <button
                onClick={() => { setActiveTab('cv'); scrollToSection('cv'); }}
                className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-all ${
                  activeTab === 'cv'
                    ? 'bg-emerald-500/10 text-emerald-500 border border-emerald-500/50'
                    : 'text-gray-400 hover:text-gray-200 hover:bg-slate-800/50'
                }`}
              >
                <FileText size={18} />
                <span className="hidden sm:inline">CV</span>
              </button>
              <button
                onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
                className="p-2 rounded-lg text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-200 hover:bg-gray-200/50 dark:hover:bg-slate-800/50 transition-all"
              >
                {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
              </button>
            </div>
          </div>
        </div>
      </nav>

      <header id="accueil" className="mb-0 flex items-start gap-4 animate-slideInRight pl-6 pr-6 py-16">
        <img src={portfolioImg} alt="Jacky Heriniaina" className="w-[500px] h-[500px] rounded-full object-cover shadow-lg" />
        <div className="flex flex-col">
          <br />
          <h1 className="text-5xl md:text-7xl font-extrabold bg-gradient-to-r from-emerald-500 to-cyan-500 bg-clip-text text-transparent font-['Inter',sans-serif]">
            RANDRIAMANANTENA Jacky Heriniaina
          </h1>
          <p className="text-2xl md:text-3xl text-gray-600 dark:text-gray-300 mt-4 font-light max-w-xl leading-relaxed">
            Développeur Web & Mobile Native passionné, je crée des applications modernes et performantes avec React et Node.js.
          </p>
          <div className="flex flex-wrap gap-4 text-sm text-gray-500 dark:text-gray-400 mt-4">
            <div className="flex items-center gap-2 hover:text-emerald-500 transition-colors cursor-pointer">
              <Mail size={18} />
              <a href="mailto:jackyheriniaina02@gmail.com">jackyheriniaina02@gmail.com</a>
            </div>
            <div className="flex items-center gap-2 hover:text-emerald-500 transition-colors">
              <Phone size={18} />
              <span>034 86 985 24</span>
            </div>
            <div className="flex items-center gap-2 hover:text-emerald-500 transition-colors">
              <MessageCircle size={18} />
              <span>034 86 985 24</span>
            </div>
            <a href="https://github.com/Jaikciylegars95" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-emerald-500 transition-colors">
              <Github size={18} />
              <span>GitHub</span>
            </a>
            <a href="https://www.linkedin.com/in/jacky-randriamanantena-488a62248" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-emerald-500 transition-colors">
              <Linkedin size={18} />
              <span>LinkedIn</span>
            </a>
          </div>
        </div>
      </header>

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <div className="animate-fadeIn">
          <section id="qualites" className="mb-16">
            <div className="flex items-center gap-3 mb-8">
              <Code2 className="text-emerald-500" size={28} />
              <h2 className="text-3xl font-bold font-['Inter',sans-serif]">Qualités techniques</h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                  <div className="flex flex-col items-center bg-gray-100/50 dark:bg-slate-800/50 backdrop-blur border border-gray-300 dark:border-slate-700 rounded-lg p-6 md:p-10 hover:border-emerald-500/50 transition-all group">
                    <Eye className="text-emerald-500 mb-4" size={40} />
                    <h3 className="text-lg md:text-xl font-semibold mb-4 text-emerald-500 text-center">Curieux et passionné</h3>
                    <p className="text-gray-600 dark:text-gray-300 font-light text-center text-sm md:text-base">Toujours en veille sur les nouvelles technologies du web.</p>
                  </div>
                  <div className="flex flex-col items-center bg-gray-100/50 dark:bg-slate-800/50 backdrop-blur border border-gray-300 dark:border-slate-700 rounded-lg p-6 md:p-10 hover:border-emerald-500/50 transition-all group">
                    <Brain className="text-emerald-500 mb-4" size={40} />
                    <h3 className="text-lg md:text-xl font-semibold mb-4 text-emerald-500 text-center">Logique et analytique</h3>
                    <p className="text-gray-600 dark:text-gray-300 font-light text-center text-sm md:text-base">Capable de résoudre efficacement les problèmes techniques.</p>
                  </div>
                  <div className="flex flex-col items-center bg-gray-100/50 dark:bg-slate-800/50 backdrop-blur border border-gray-300 dark:border-slate-700 rounded-lg p-6 md:p-10 hover:border-emerald-500/50 transition-all group">
                    <Users className="text-emerald-500 mb-4" size={40} />
                    <h3 className="text-lg md:text-xl font-semibold mb-4 text-emerald-500 text-center">Collaboratif</h3>
                    <p className="text-gray-600 dark:text-gray-300 font-light text-center text-sm md:text-base">Bonne communication et esprit d'équipe dans les projets.</p>
                  </div>
                  <div className="flex flex-col items-center bg-gray-100/50 dark:bg-slate-800/50 backdrop-blur border border-gray-300 dark:border-slate-700 rounded-lg p-6 md:p-10 hover:border-emerald-500/50 transition-all group">
                    <Puzzle className="text-emerald-500 mb-4" size={40} />
                    <h3 className="text-lg md:text-xl font-semibold mb-4 text-emerald-500 text-center">Rigoureux</h3>
                    <p className="text-gray-600 dark:text-gray-300 font-light text-center text-sm md:text-base">Code propre, structuré et orienté vers la qualité.</p>
                  </div>

            </div>
          </section>

          <section id="formation" className="mb-16">
            <div className="flex items-center gap-3 mb-8">
              <GraduationCap className="text-emerald-500" size={28} />
              <h2 className="text-2xl md:text-3xl font-bold font-['Inter',sans-serif]">Formation</h2>
            </div>
            <div className="bg-gray-100/50 dark:bg-slate-800/50 backdrop-blur border border-gray-300 dark:border-slate-700 rounded-lg p-4 md:p-6 hover:border-emerald-500/50 transition-all">
              <h3 className="text-lg md:text-xl font-semibold text-emerald-500">Diplôme de Licence en Informatique</h3>
              <p className="text-gray-500 dark:text-gray-400 mt-2 font-light text-sm md:text-base">University FJKM Ravelojaona Ampandrana</p>
              <p className="text-gray-600 dark:text-gray-500 mt-1 font-light text-sm md:text-base">25 ans</p>
            </div>
          </section>

          <section id="apropos" className="mb-16">
            <div className="flex items-center gap-3 mb-8">
              <User className="text-emerald-500" size={28} />
              <h2 className="text-2xl md:text-3xl font-bold font-['Inter',sans-serif]">À propos de moi</h2>
            </div>
            <div className="bg-gray-100/50 dark:bg-slate-800/50 backdrop-blur border border-gray-300 dark:border-slate-700 rounded-lg p-4 md:p-8">
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-4 font-light text-base md:text-lg">
              Développeur passionné avec une solide formation en informatique, je me spécialise dans la création d'applications web et mobile performantes et intuitives. J'ai également des compétences en développement logiciel, en maintenance informatique et en administration réseau, ce qui me permet d'intervenir aussi bien sur la conception que sur le support technique et les infrastructures.
              </p>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-4 font-light text-base md:text-lg">
                Mon approche combine créativité technique et attention aux détails pour livrer
                des solutions qui répondent aux besoins réels des utilisateurs. Je suis toujours
                en quête d'apprentissage et d'amélioration continue.
              </p>

            </div>
          </section>

          <section id="projets" className="mb-16">
            <div className="flex items-center gap-3 mb-8">
              <Briefcase className="text-emerald-500" size={28} />
              <h2 className="text-3xl font-bold font-['Inter',sans-serif]">Mes Projets</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-gray-100/50 dark:bg-slate-800/50 backdrop-blur border border-gray-300 dark:border-slate-700 rounded-lg p-8 hover:border-emerald-500/50 transition-all group">
                <div className="flex items-center gap-3 mb-4">
                  <Code2 className="text-emerald-500" size={32} />
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100">Application Web E-Assist</h3>
                </div>
                <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
                  Application de gestion de tâches avec un tableau Kanban intuitif. Développée avec React pour le frontend,
                  Node.js et Express pour le backend, et MySQL pour la base de données.
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  <span className="px-3 py-1 bg-emerald-100 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-300 rounded-full text-sm font-medium">
                    React
                  </span>
                  <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded-full text-sm font-medium">
                    Node.js
                  </span>
                  <span className="px-3 py-1 bg-green-100 dark:dark:bg-green-900/30 text-green-700 dark:text-green-300 rounded-full text-sm font-medium">
                    Express
                  </span>
                  <span className="px-3 py-1 bg-orange-100 dark:bg-orange-900/30 text-orange-700 dark:text-orange-300 rounded-full text-sm font-medium">
                    MySQL
                  </span>
                </div>
                <div className="flex gap-4">
                  <a
                    href="https://github.com/Jaikciylegars95"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 bg-emerald-500 hover:bg-emerald-600 text-white rounded-lg transition-all"
                  >
                    <Github size={18} />
                    Voir sur GitHub
                  </a>
                </div>
              </div>
            </div>
          </section>



          <section id="cv" className="mb-16">
            <div className="flex items-center gap-3 mb-8">
              <FileText className="text-emerald-500" size={28} />
              <h2 className="text-2xl md:text-3xl font-bold font-['Inter',sans-serif]">Mon CV</h2>
            </div>
            <div className="bg-gray-100/50 dark:bg-slate-800/50 backdrop-blur border border-gray-300 dark:border-slate-700 rounded-lg p-4 md:p-8 max-w-4xl mx-auto">
              <div className="text-center mb-6">
                <p className="text-gray-600 dark:text-gray-300 mb-4 text-sm md:text-base">Votre CV est disponible au téléchargement ci-dessous.</p>
                <a
                  href="/cv.jpg"
                  download="CV_Jacky_Heriniaina.jpg"
                  className="inline-block bg-emerald-500 hover:bg-emerald-600 text-white font-semibold px-6 py-3 rounded transition text-sm md:text-base"
                >
                  Télécharger le CV
                </a>
              </div>
              <div className="flex justify-center">
                <img
                  src="/cv.jpg"
                  alt="CV de Jacky Heriniaina"
                  className="max-w-full h-auto rounded-lg shadow-lg"
                  style={{ maxHeight: '600px' }}
                />
              </div>
            </div>
          </section>
        </div>



        <footer className="border-t border-gray-300 dark:border-slate-700 pt-8 mt-20">
          <div className="flex justify-center gap-6">
            <a href="https://github.com/Jaikciylegars95" target="_blank" rel="noopener noreferrer" className="p-3 bg-gray-100/50 dark:bg-slate-800/50 rounded-lg hover:bg-emerald-500/10 hover:text-emerald-500 transition-all border border-gray-300 dark:border-slate-700 hover:border-emerald-500/50">
              <Github size={24} />
            </a>
            <a href="https://www.linkedin.com/in/jacky-randriamanantena-488a62248" target="_blank" rel="noopener noreferrer" className="p-3 bg-gray-100/50 dark:bg-slate-800/50 rounded-lg hover:bg-emerald-500/10 hover:text-emerald-500 transition-all border border-gray-300 dark:border-slate-700 hover:border-emerald-500/50">
              <Linkedin size={24} />
            </a>
          </div>
          <p className="text-center text-gray-600 dark:text-gray-500 mt-6 text-sm">
            © 2025 Jacky Heriniaina. Tous droits réservés.
          </p>
        </footer>
      </div>
    </div>
  );
}

export default App;
