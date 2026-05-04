import { motion } from 'motion/react';
import { Phone, Mail, Instagram } from 'lucide-react';
import { PremiumButton } from './PremiumButton';

export function ContactPage() {
  const fadeIn = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6 }
  };

  const contacts = [
    {
      icon: Phone,
      label: 'WhatsApp',
      value: '(11) 99823-4317',
      link: 'https://wa.me/5511998234317'
    },
    {
      icon: Mail,
      label: 'Email',
      value: 'lucicroccia@gmail.com',
      link: 'mailto:lucicroccia@gmail.com'
    },
    {
      icon: Instagram,
      label: 'Instagram',
      value: '@luciana.croccia.donofrio',
      link: 'https://instagram.com/luciana.croccia.donofrio'
    }
  ];

  return (
    <div className="min-h-screen pt-32 pb-24">
      <div className="max-w-4xl mx-auto px-6">
        <motion.h1
          className="text-5xl md:text-6xl mb-12 text-center text-[#2B2B2B]"
          style={{ fontFamily: 'var(--font-titles)' }}
          {...fadeIn}
        >
          O primeiro passo é<br />decidir olhar para si.
        </motion.h1>

        <motion.div
          className="text-center mb-16 space-y-6"
          {...fadeIn}
          transition={{ delay: 0.2 }}
        >
          <p className="text-xl text-[#2B2B2B]" style={{ fontFamily: 'var(--font-body)' }}>
            Se você chegou até aqui, não foi por acaso.
          </p>

          <p className="text-xl text-[#2B2B2B]" style={{ fontFamily: 'var(--font-body)' }}>
            Algo dentro de você já sabe que precisa de mudança.
          </p>

          <p className="text-xl text-[#B8863B] italic" style={{ fontFamily: 'var(--font-subtitles)' }}>
            E essa mudança começa quando você decide se escutar.
          </p>
        </motion.div>

        <motion.div
          className="bg-white rounded-2xl p-12 mb-12"
          style={{ boxShadow: '0 20px 60px rgba(200, 164, 107, 0.2)' }}
          {...fadeIn}
          transition={{ delay: 0.4 }}
        >
          <h2
            className="text-3xl mb-8 text-center text-[#2B2B2B]"
            style={{ fontFamily: 'var(--font-titles)' }}
          >
            Entre em contato
          </h2>

          <div className="space-y-6">
            {contacts.map((contact, index) => {
              const Icon = contact.icon;
              return (
                <motion.a
                  key={index}
                  href={contact.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-6 bg-[#F8F4EC] rounded-lg border border-[#C8A46B]/30 transition-all"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5 + index * 0.1 }}
                  whileHover={{
                    scale: 1.02,
                    boxShadow: '0 8px 30px rgba(200, 164, 107, 0.25)',
                    backgroundColor: '#EADBC1'
                  }}
                >
                  <div className="w-12 h-12 bg-gradient-to-br from-[#C8A46B] to-[#B8863B] rounded-full flex items-center justify-center flex-shrink-0">
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="text-sm text-[#B8863B] mb-1" style={{ fontFamily: 'var(--font-body)' }}>
                      {contact.label}
                    </p>
                    <p className="text-lg text-[#2B2B2B]" style={{ fontFamily: 'var(--font-body)' }}>
                      {contact.value}
                    </p>
                  </div>
                </motion.a>
              );
            })}
          </div>

          <motion.div
            className="mt-12 text-center"
            {...fadeIn}
            transition={{ delay: 0.9 }}
          >
            <PremiumButton onClick={() => window.open('https://wa.me/5511998234317', '_blank')}>
              Agendar atendimento →
            </PremiumButton>
          </motion.div>
        </motion.div>

        <motion.div
          className="text-center p-8 bg-[#EADBC1]/30 rounded-xl border border-[#C8A46B]/30"
          {...fadeIn}
          transition={{ delay: 1.0 }}
        >
          <p className="text-lg text-[#2B2B2B]" style={{ fontFamily: 'var(--font-body)' }}>
            <span className="text-[#B8863B]">•</span> Atendimentos podem ser realizados à distância<br />
            (com a mesma eficácia no campo energético).
          </p>
        </motion.div>
      </div>
    </div>
  );
}
