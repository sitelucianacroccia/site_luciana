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

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [mobileMenuOpen]);

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
        className={`fixed left-0 right-0 top-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'border-b border-[#D8C4A4] bg-[#FBF8F1]/96 shadow-[0_14px_40px_rgba(36,50,43,0.08)] backdrop-blur-xl'
            : 'border-b border-white/12 bg-[#FBF8F1]/90 backdrop-blur-md'
        }`}
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ type: 'spring', stiffness: 100, damping: 20 }}
        style={{
          boxShadow: scrolled ? '0 14px 40px rgba(36, 50, 43, 0.08)' : 'none'
        }}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3 sm:px-6 lg:px-10">
        <motion.div
          className="group relative min-w-0 cursor-pointer"
          onClick={() => onNavigate('home')}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          <div className="flex min-w-0 items-center gap-3">
            <motion.div
              className="relative overflow-hidden rounded-md bg-[#24322B] p-2"
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
              <h1
                className="max-w-[13rem] truncate text-lg tracking-tight text-[#24322B] transition-colors group-hover:text-[#8E6535] sm:max-w-none sm:text-xl"
                style={{ fontFamily: 'var(--font-titles)' }}
              >
                Luciana Croccia D'Onofrio
              </h1>
              <p
                className="mt-0.5 hidden text-xs italic text-[#8E6535] sm:block"
                style={{ fontFamily: 'var(--font-subtitles)' }}
              >
                Equilíbrio, Reconexão e Autoconhecimento
              </p>
            </div>
          </div>
        </motion.div>

        <div className="hidden items-center gap-1 lg:flex xl:gap-2">
          {links.map((link) => {
            const isActive = currentPage === link.id;
            return (
              <motion.button
                key={link.id}
                onClick={() => onNavigate(link.id)}
                className={`
                  relative rounded-md px-3.5 py-2 text-sm uppercase tracking-[0.08em] transition-colors xl:px-4
                  ${
                    isActive
                      ? 'text-[#24322B]'
                      : 'text-[#56645B] hover:bg-[#EFE5D5] hover:text-[#24322B]'
                  }
                `}
                style={{ fontFamily: 'var(--font-body)', fontWeight: isActive ? 500 : 400 }}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.95 }}
              >
                {isActive && (
                  <motion.div
                    className="absolute inset-x-3 bottom-1 h-px bg-[#B58A4A]"
                    layoutId="activeNav"
                    transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                  />
                )}
                <span className="relative z-10 flex items-center gap-2">
                  {link.name}
                  {isActive && (
                    <motion.span
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      className="hidden"
                    />
                  )}
                </span>
              </motion.button>
            );
          })}
        </div>

        <motion.button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="rounded-md bg-[#24322B] p-3 text-white lg:hidden"
          whileTap={{ scale: 0.9 }}
          aria-label="Menu de navegação"
          aria-expanded={mobileMenuOpen}
        >
          <Menu className="h-6 w-6" />
        </motion.button>
        </div>
      </motion.nav>
      <AnimatePresence>
        {mobileMenuOpen && (
          <>
            <motion.div
              className="fixed inset-0 z-40 bg-[#121A16]/60 backdrop-blur-sm lg:hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMobileMenuOpen(false)}
            />

            <motion.div
              className="fixed bottom-0 right-0 top-0 z-50 w-[min(22rem,calc(100vw-1.25rem))] overflow-y-auto bg-[#FBF8F1] shadow-2xl lg:hidden"
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', stiffness: 300, damping: 30 }}
            >
              <div className="p-6">
                <div className="flex items-center justify-between mb-8">
                  <h2
                    className="text-xl text-[#24322B]"
                    style={{ fontFamily: 'var(--font-titles)' }}
                  >
                    Menu
                  </h2>
                  <motion.button
                    onClick={() => setMobileMenuOpen(false)}
                    className="rounded-md bg-[#EFE5D5] p-2 text-[#24322B]"
                    whileTap={{ scale: 0.9 }}
                    aria-label="Fechar menu"
                  >
                    <X className="w-6 h-6" />
                  </motion.button>
                </div>

                <div className="space-y-3">
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
                          w-full rounded-md px-5 py-4 text-left transition-all
                          ${
                            isActive
                              ? 'bg-[#24322B] text-white'
                              : 'text-[#24322B] hover:bg-[#EFE5D5]'
                          }
                        `}
                        style={{ fontFamily: 'var(--font-body)', fontWeight: isActive ? 500 : 400 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <span className="flex items-center justify-between">
                          {link.name}
                          {isActive && (
                            <motion.span
                              initial={{ scale: 0 }}
                              animate={{ scale: 1 }}
                              className="w-2 h-2 bg-white rounded-full"
                            />
                          )}
                        </span>
                      </motion.button>
                    );
                  })}
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
