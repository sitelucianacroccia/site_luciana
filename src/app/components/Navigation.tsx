import { motion, AnimatePresence } from 'motion/react';
import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import fenixLogo from '../../imports/Fenix_fundo_transparente.png';

interface NavigationProps {
  currentPage: string;
  onNavigate: (page: string) => void;
}

export function Navigation({ currentPage, onNavigate }: NavigationProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const links = [
    { name: 'Início', id: 'home' },
    { name: 'Quem Sou', id: 'about' },
    { name: 'Meu Trabalho', id: 'work' },
    { name: 'Perguntas', id: 'blog' },
    { name: 'Contato', id: 'contact' }
  ];

  return (
    <>
      <motion.nav
        className="pointer-events-none fixed left-0 right-0 top-0 z-50 px-4 pt-4 transition-all duration-300 sm:px-6 lg:px-10"
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ type: 'spring', stiffness: 100, damping: 20 }}
      >
        <div
          className={`pointer-events-auto mx-auto flex w-fit max-w-[calc(100vw-2rem)] items-center justify-between gap-3 rounded-full border px-3 py-2 transition-all duration-300 sm:max-w-[calc(100vw-3rem)] ${
            scrolled
              ? 'border-[#D8C4A4]/80 bg-[#FBF8F1]/94 shadow-[0_18px_50px_rgba(43,35,24,0.12)] backdrop-blur-xl'
              : 'border-white/30 bg-[#FBF8F1]/80 shadow-[0_16px_44px_rgba(43,35,24,0.08)] backdrop-blur-lg'
          }`}
        >
          <motion.button
            type="button"
            className="group flex min-w-0 items-center gap-3 rounded-full py-1 pl-1 pr-3 text-left"
            onClick={() => {
              onNavigate('home');
              setMobileMenuOpen(false);
            }}
            whileHover={{ scale: 1.01 }}
            whileTap={{ scale: 0.98 }}
            aria-label="Ir para início"
          >
            <motion.div
              className="relative grid h-11 w-11 shrink-0 place-items-center overflow-hidden rounded-full bg-[#304238]"
              whileHover={{ scale: 1.03 }}
              transition={{ duration: 0.4 }}
            >
              <motion.img
                src={fenixLogo}
                alt="Logo Fênix"
                className="h-7 w-7 object-contain"
              />
            </motion.div>

            <div className="min-w-0">
              <span
                className="block max-w-[13rem] truncate text-base tracking-tight text-[#304238] transition-colors group-hover:text-[#8E6535] sm:max-w-none sm:text-lg"
                style={{ fontFamily: 'var(--font-titles)' }}
              >
                Luciana Croccia D'Onofrio
              </span>
              <p
                className="mt-0.5 hidden text-xs italic text-[#8E6535] xl:block"
                style={{ fontFamily: 'var(--font-subtitles)' }}
              >
                Equilíbrio, Reconexão e Autoconhecimento
              </p>
            </div>
          </motion.button>

          <div className="hidden items-center gap-1 rounded-full border border-[#D8C4A4]/55 bg-white/35 p-1 xl:flex xl:gap-1.5">
            {links.map((link) => {
              const isActive = currentPage === link.id;
              return (
                <motion.button
                  key={link.id}
                  onClick={() => onNavigate(link.id)}
                  className={`
                    relative rounded-full px-4 py-2.5 text-xs uppercase tracking-[0.1em] transition-colors xl:px-5
                    ${
                      isActive
                        ? 'text-white'
                        : 'text-[#56645B] hover:bg-[#EFE5D5]/80 hover:text-[#304238]'
                    }
                  `}
                  style={{ fontFamily: 'var(--font-body)', fontWeight: isActive ? 600 : 500 }}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.96 }}
                >
                  {isActive && (
                    <motion.span
                      className="absolute inset-0 rounded-full bg-[#304238]"
                      layoutId="activeNavPill"
                      transition={{ type: 'spring', stiffness: 360, damping: 32 }}
                    />
                  )}
                  <span className="relative z-10">{link.name}</span>
                </motion.button>
              );
            })}
          </div>

          <motion.button
            type="button"
            onClick={() => setMobileMenuOpen((open) => !open)}
            className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-[#304238] text-white xl:hidden"
            whileTap={{ scale: 0.9 }}
            aria-label={mobileMenuOpen ? 'Fechar menu de navegação' : 'Abrir menu de navegação'}
            aria-expanded={mobileMenuOpen}
          >
            <AnimatePresence mode="wait" initial={false}>
              {mobileMenuOpen ? (
                <motion.span
                  key="close"
                  initial={{ opacity: 0, rotate: -45, scale: 0.8 }}
                  animate={{ opacity: 1, rotate: 0, scale: 1 }}
                  exit={{ opacity: 0, rotate: 45, scale: 0.8 }}
                  transition={{ duration: 0.18 }}
                >
                  <X className="h-5 w-5" />
                </motion.span>
              ) : (
                <motion.span
                  key="menu"
                  initial={{ opacity: 0, rotate: 45, scale: 0.8 }}
                  animate={{ opacity: 1, rotate: 0, scale: 1 }}
                  exit={{ opacity: 0, rotate: -45, scale: 0.8 }}
                  transition={{ duration: 0.18 }}
                >
                  <Menu className="h-5 w-5" />
                </motion.span>
              )}
            </AnimatePresence>
          </motion.button>
        </div>
      </motion.nav>

      <AnimatePresence>
        {mobileMenuOpen && (
          <>
            <motion.div
              className="fixed inset-0 z-40 bg-[#121A16]/18 backdrop-blur-[2px] xl:hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMobileMenuOpen(false)}
            />

            <motion.div
              className="fixed left-4 right-4 top-[5.6rem] z-50 overflow-hidden rounded-[1.75rem] border border-[#D8C4A4]/75 bg-[#FBF8F1]/96 p-3 shadow-[0_24px_70px_rgba(43,35,24,0.18)] backdrop-blur-xl sm:left-6 sm:right-6 xl:hidden"
              initial={{ opacity: 0, y: -12, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -12, scale: 0.98 }}
              transition={{ duration: 0.22, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className="space-y-2">
                {links.map((link) => {
                  const isActive = currentPage === link.id;
                  return (
                    <motion.button
                      key={link.id}
                      onClick={() => {
                        onNavigate(link.id);
                        setMobileMenuOpen(false);
                      }}
                      className={`
                        w-full rounded-full px-5 py-4 text-left text-sm uppercase tracking-[0.1em] transition-all
                        ${
                          isActive
                            ? 'bg-[#304238] text-white'
                            : 'text-[#304238] hover:bg-[#EFE5D5]'
                        }
                      `}
                      style={{ fontFamily: 'var(--font-body)', fontWeight: isActive ? 600 : 500 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <span className="flex items-center justify-between gap-3">
                        {link.name}
                        {isActive && (
                          <motion.span
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            className="h-1.5 w-1.5 rounded-full bg-white"
                          />
                        )}
                      </span>
                    </motion.button>
                  );
                })}
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
