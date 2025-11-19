import { useState, useEffect, useRef } from 'react';
import { Mail, Phone, Github, Linkedin, Code2, Briefcase, GraduationCap, Home, User, Eye, Brain, Users, Puzzle, MessageCircle, FileText, Sun, Moon } from 'lucide-react';
import emailjs from '@emailjs/browser';
import portfolioImg from './assets/porfolio.png';

function App() {
  const [activeTab, setActiveTab] = useState('accueil');
  const [theme, setTheme] = useState('dark');
  const form = useRef();
  const [showPreview, setShowPreview] = useState(false);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      const yOffset = -90; // Adjust for nav height
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

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
      {/* Background */}
      <div className="fixed inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-100 via-gray-200 to-gray-100 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900 animate-pulse"></div>
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-emerald-400/10 rounded-full blur-3xl animate-bounce"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-400/10 rounded-full blur-3xl animate-ping"></div>
        <div className="absolute top-1/2 left-1/2 w-48 h-48 bg-purple-400/10 rounded-full blur-2xl animate-spin"></div>
        <div className="absolute top-3/4 right-1/3 w-32 h-32 bg-yellow-400/10 rounded-full blur-xl animate-pulse"></div>
      </div>

      {/* Navigation */}
      <nav className="fixed top-0 z-50 w-full backdrop-blur-md bg-white/90 dark:bg-slate-900/90 border-b border-gray-300 dark:border-slate-700 shadow-sm">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-end gap-2">
          {['accueil','qualites','apropos','projets','cv'].map((tab) => (
            <button
              key={tab}
              onClick={() => { setActiveTab(tab); scrollToSection(tab); }}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-all ${
                activeTab === tab
                  ? 'bg-emerald-500/10 text-emerald-500 border border-emerald-500/50'
                  : 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-200 hover:bg-gray-200/50 dark:hover:bg-slate-800/50'
              }`}
            >
              {{
                accueil: <Home size={18} />,
                qualites: <Code2 size={18} />,
                apropos: <User size={18} />,
                projets: <Briefcase size={18} />,
                cv: <FileText size={18} />
              }[tab]}
              <span className="hidden sm:inline">{tab === 'apropos' ? 'À propos' : tab.charAt(0).toUpperCase() + tab.slice(1)}</span>
            </button>
          ))}
          <button
            onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
            className="p-2 rounded-lg text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-200 hover:bg-gray-200/50 dark:hover:bg-slate-800/50 transition-all"
          >
            {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
          </button>
        </div>
      </nav>

     {/* Header */}
<header id="accueil" className="flex flex-col md:flex-row items-center md:items-start gap-6 md:gap-8 px-4 sm:px-6 md:px-6 py-16 md:py-20">
  <img 
    src={portfolioImg} 
    alt="Jacky Heriniaina" 
    className="w-48 sm:w-64 md:w-80 lg:w-96 h-48 sm:h-64 md:h-80 lg:h-96 rounded-full object-cover shadow-lg flex-shrink-0"
  />
  <div className="flex flex-col w-full max-w-full">
    <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold bg-gradient-to-r from-emerald-500 to-cyan-500 bg-clip-text text-transparent break-words">
      RANDRIAMANANTENA
    </h1>
    <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold bg-gradient-to-r from-emerald-500 to-cyan-400 bg-clip-text text-transparent break-words mt-1">
      Jacky Heriniaina
    </h2>
    <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-600 dark:text-gray-300 mt-4 font-light leading-relaxed break-words max-w-full">
      Développeur Web & Mobile Native passionné, je crée des applications modernes et performantes adaptées aux besoins des utilisateurs.
    </p>
    <div className="flex flex-wrap gap-3 mt-4 text-sm sm:text-base md:text-base lg:text-lg">
      <div className="flex items-center gap-2 hover:text-emerald-500 transition-colors cursor-pointer break-words">
        <Mail size={18} />
        <a href="mailto:jackyheriniaina02@gmail.com" className="break-words">jackyheriniaina02@gmail.com</a>
      </div>
      <a href="https://wa.me/261348698524" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-emerald-500 transition-colors break-words">
        <MessageCircle size={18} />
        <span className="break-words">034 86 985 24</span>
      </a>
      <a href="https://github.com/Jaikciylegars95" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-emerald-500 transition-colors break-words">
        <Github size={18} />
        <span className="break-words">GitHub</span>
      </a>
      <a href="https://www.linkedin.com/in/jacky-randriamanantena-488a62248" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-emerald-500 transition-colors break-words">
        <Linkedin size={18} />
        <span className="break-words">LinkedIn</span>
      </a>
    </div>
  </div>
</header>


      {/* Main content */}
      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <div className="animate-fadeIn">
          {/* Qualités */}
          <section id="qualites" className="mb-16">
            <div className="flex items-center gap-3 mb-8">
              <Code2 className="text-emerald-500" size={28} />
              <h2 className="text-3xl font-bold font-['Inter',sans-serif]">Qualités techniques</h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {[{
                icon: Eye, title: "Curieux et passionné", desc: "Toujours en veille sur les nouvelles technologies."
              },{
                icon: Brain, title: "Logique et analytique", desc: "Capable de résoudre efficacement les problèmes techniques."
              },{
                icon: Users, title: "Collaboratif", desc: "Bonne communication et esprit d'équipe dans les projets."
              },{
                icon: Puzzle, title: "Rigoureux", desc: "Code propre, structuré et orienté vers la qualité."
              }].map((qualite, idx) => (
                <div key={idx} className="flex flex-col items-center bg-gray-100/50 dark:bg-slate-800/50 backdrop-blur border border-gray-300 dark:border-slate-700 rounded-lg p-6 md:p-10 hover:border-emerald-500/50 transition-all group">
                  <qualite.icon className="text-emerald-500 mb-4" size={40} />
                  <h3 className="text-lg md:text-xl font-semibold mb-4 text-emerald-500 text-center">{qualite.title}</h3>
                  <p className="text-gray-600 dark:text-gray-300 font-light text-center text-sm md:text-base">{qualite.desc}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Formation */}
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

          {/* À propos */}
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
                Mon approche combine créativité technique et attention aux détails pour livrer des solutions qui répondent aux besoins réels des utilisateurs. Je suis toujours en quête d'apprentissage et d'amélioration continue.
              </p>
            </div>
          </section>

          {/* Projets */}
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
                  {['React','Node.js','Express','MySQL'].map((tech, i) => (
                    <span key={i} className="px-3 py-1 bg-emerald-100 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-300 rounded-full text-sm font-medium">{tech}</span>
                  ))}
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

  {/* CV */}
<section id="cv" className="mb-16">
  <div className="flex items-center gap-3 mb-8">
    <FileText className="text-emerald-500" size={28} />
    <h2 className="text-2xl md:text-3xl font-bold font-['Inter',sans-serif]">Mon CV</h2>
  </div>

  <div className="bg-gray-100/50 dark:bg-slate-800/50 backdrop-blur border border-gray-300 dark:border-slate-700 rounded-lg p-4 md:p-8 max-w-4xl mx-auto">

    <div className="text-center mb-6">
      <p className="text-gray-600 dark:text-gray-300 mb-4 text-sm md:text-base">
        Téléchargez ou affichez un aperçu de mon CV ci-dessous.
      </p>

      {/* Bouton Télécharger */}
      <a
        href="/cv.pdf"
        download="CV_Jacky_Heriniaina.pdf"
        className="inline-block bg-emerald-500 hover:bg-emerald-600 text-white font-semibold px-6 py-3 rounded transition text-sm md:text-base"
      >
        Télécharger le CV
      </a>

      {/* Bouton voir aperçu */}
      <button
        onClick={() => setShowPreview(!showPreview)}
        className="ml-4 inline-block bg-gray-300 dark:bg-slate-700 hover:bg-gray-400 dark:hover:bg-slate-600 text-gray-900 dark:text-gray-100 font-semibold px-6 py-3 rounded transition text-sm md:text-base"
      >
        📄 {showPreview ? "Masquer l'aperçu" : "Voir un aperçu"}
      </button>
    </div>

    {/* Aperçu du CV (iframe, pas de téléchargement) */}
    {showPreview && (
      <div className="flex justify-center mt-6">
        <iframe
          src="/cv.pdf#page=1&toolbar=0"
          title="Aperçu du CV"
          className="w-full max-w-3xl h-[600px] rounded-lg shadow-lg border"
          style={{ pointerEvents: 'auto' }} // permet le scroll mais pas le téléchargement
        ></iframe>
      </div>
    )}
  </div>
</section>

        </div>
      </div>

      {/* Footer */}
      <footer className="border-t border-gray-300 dark:border-slate-700 pt-8 mt-20">
          <div className="flex flex-wrap justify-center gap-6">
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
  );
}

export default App;
