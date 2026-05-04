import { motion } from 'motion/react';
import fenixLogo from '../../imports/Fenix_fundo_transparente.png';

interface FooterProps {
  onNavigate?: (page: string) => void;
}

export function Footer({ onNavigate }: FooterProps) {
  const keyPhrases = [
    'Nem tudo que você sente é apenas emocional.',
    'O problema não está onde você acha.',
    'A raiz precisa ser tratada.',
    'Consciência gera transformação real.',
    'Você não precisa continuar repetindo os mesmos ciclos.'
  ];

  return (
    <footer className="bg-[#18231E] py-16 text-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="mb-12 grid gap-12 md:grid-cols-3">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <motion.img
                src={fenixLogo}
                alt="Logo Fênix"
                className="h-12 w-12 object-contain"
              />
              <h3
                className="text-2xl"
                style={{ fontFamily: 'var(--font-titles)' }}
              >
                Luciana Croccia D'Onofrio
              </h3>
            </div>
            <p
            className="mb-6 italic text-[#D6B680]"
              style={{ fontFamily: 'var(--font-subtitles)' }}
            >
              Uma investigadora da origem.<br />
              Uma tradutora do invisível.<br />
              Uma facilitadora de reconexão real.
            </p>
            <p className="text-sm text-white/60" style={{ fontFamily: 'var(--font-body)' }}>
              CRTH-BR: 1527
            </p>
          </div>

          <div>
            <h4
              className="mb-4 text-lg text-[#D6B680]"
              style={{ fontFamily: 'var(--font-titles)' }}
            >
              Navegação
            </h4>
            <div className="space-y-2" style={{ fontFamily: 'var(--font-body)' }}>
              {onNavigate && (
                <>
                  <button
                    onClick={() => onNavigate('home')}
                    className="block text-white/74 transition-colors hover:text-[#D6B680]"
                  >
                    Início
                  </button>
                  <button
                    onClick={() => onNavigate('about')}
                    className="block text-white/74 transition-colors hover:text-[#D6B680]"
                  >
                    Quem Sou
                  </button>
                  <button
                    onClick={() => onNavigate('work')}
                    className="block text-white/74 transition-colors hover:text-[#D6B680]"
                  >
                    Meu Trabalho
                  </button>
                  <button
                    onClick={() => onNavigate('blog')}
                    className="block text-white/74 transition-colors hover:text-[#D6B680]"
                  >
                    Perguntas Frequentes
                  </button>
                  <button
                    onClick={() => onNavigate('contact')}
                    className="block text-white/74 transition-colors hover:text-[#D6B680]"
                  >
                    Contato
                  </button>
                </>
              )}
            </div>
          </div>

          <div>
            <h4
              className="mb-4 text-lg text-[#D6B680]"
              style={{ fontFamily: 'var(--font-titles)' }}
            >
              Essência
            </h4>
            <div className="space-y-2 text-sm" style={{ fontFamily: 'var(--font-body)' }}>
              {keyPhrases.slice(0, 3).map((phrase, index) => (
                <motion.p
                  key={index}
                  className="text-white/74"
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  {phrase}
                </motion.p>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-white/20 pt-8 text-center">
          <p className="text-sm text-white/60" style={{ fontFamily: 'var(--font-body)' }}>
            © {new Date().getFullYear()} Luciana Croccia D'Onofrio. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
