import { motion } from 'motion/react';
import { PremiumButton } from './PremiumButton';

interface HomePageProps {
  onNavigate: (page: string) => void;
}

export function HomePage({ onNavigate }: HomePageProps) {
  const fadeIn = {
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  const stagger = {
    animate: {
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const symptoms = [
    'Cansaço sem explicação',
    'Ansiedade constante',
    'Insônia ou pensamentos repetitivos',
    'Tristeza ou sensação de vazio',
    'Dores físicas sem causa aparente',
    'Ciclos que se repetem na vida'
  ];

  const steps = [
    {
      number: '01',
      title: 'Diagnóstico energético',
      description: 'Radiestesia / Mesa quântica'
    },
    {
      number: '02',
      title: 'Identificação da origem',
      description: 'Do desequilíbrio'
    },
    {
      number: '03',
      title: 'Aplicação das técnicas',
      description: 'Necessárias'
    },
    {
      number: '04',
      title: 'Reequilíbrio e reconexão',
      description: 'Com sua essência'
    }
  ];

  const results = [
    'Clareza',
    'Direção',
    'Leveza',
    'Consciência sobre si'
  ];

  return (
    <div className="min-h-screen">
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[#EADBC1]/30 to-transparent" />

        <motion.div
          className="relative z-10 max-w-5xl mx-auto px-6 text-center"
          initial="initial"
          animate="animate"
          variants={stagger}
        >
          <motion.h1
            className="text-6xl md:text-7xl mb-8 text-[#2B2B2B] leading-tight"
            style={{ fontFamily: 'var(--font-titles)' }}
            variants={fadeIn}
          >
            Desperte para a raiz<br />do que você sente.
          </motion.h1>

          <motion.p
            className="text-xl md:text-2xl mb-4 text-[#2B2B2B] max-w-3xl mx-auto leading-relaxed"
            style={{ fontFamily: 'var(--font-subtitles)' }}
            variants={fadeIn}
          >
            Nem tudo que você vive é apenas emocional ou físico.
          </motion.p>

          <motion.p
            className="text-xl md:text-2xl mb-12 text-[#2B2B2B] max-w-3xl mx-auto leading-relaxed"
            style={{ fontFamily: 'var(--font-subtitles)' }}
            variants={fadeIn}
          >
            Existe uma origem mais profunda — e é nela que começa a verdadeira transformação.
          </motion.p>

          <motion.div variants={fadeIn}>
            <PremiumButton onClick={() => onNavigate('contact')}>
              Agendar avaliação →
            </PremiumButton>
          </motion.div>
        </motion.div>

        <motion.div
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
        >
          <div className="w-6 h-10 border-2 border-[#C8A46B] rounded-full flex items-start justify-center p-2">
            <motion.div
              className="w-1.5 h-1.5 bg-[#C8A46B] rounded-full"
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
            />
          </div>
        </motion.div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2
              className="text-4xl md:text-5xl mb-12 text-center text-[#2B2B2B]"
              style={{ fontFamily: 'var(--font-titles)' }}
            >
              O que você está sentindo
            </h2>

            <p className="text-xl text-center mb-12 text-[#2B2B2B]" style={{ fontFamily: 'var(--font-body)' }}>
              Você pode estar passando por:
            </p>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {symptoms.map((symptom, index) => (
                <motion.div
                  key={index}
                  className="p-6 bg-[#F8F4EC] rounded-lg border border-[#C8A46B]/20"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{
                    scale: 1.03,
                    boxShadow: '0 8px 30px rgba(200, 164, 107, 0.2)'
                  }}
                  style={{ fontFamily: 'var(--font-body)' }}
                >
                  <div className="flex items-start gap-3">
                    <span className="text-[#C8A46B] text-2xl">•</span>
                    <p className="text-[#2B2B2B] text-lg">{symptom}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.p
              className="text-xl text-center mt-12 text-[#B8863B] italic"
              style={{ fontFamily: 'var(--font-subtitles)' }}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.8 }}
            >
              E mesmo assim… nada parece resolver de verdade.
            </motion.p>
          </motion.div>
        </div>
      </section>

      <section className="py-24 bg-gradient-to-b from-[#EADBC1]/20 to-white">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2
              className="text-4xl md:text-5xl mb-8 text-[#2B2B2B]"
              style={{ fontFamily: 'var(--font-titles)' }}
            >
              O que eu faço
            </h2>

            <p className="text-2xl mb-6 text-[#B8863B]" style={{ fontFamily: 'var(--font-subtitles)' }}>
              Eu não trato apenas sintomas.
            </p>

            <p className="text-xl mb-6 text-[#2B2B2B] max-w-3xl mx-auto leading-relaxed" style={{ fontFamily: 'var(--font-body)' }}>
              Investigo a origem do seu desequilíbrio —<br />
              nos níveis espiritual, emocional, mental, físico e energético.
            </p>

            <p className="text-xl text-[#2B2B2B] max-w-3xl mx-auto leading-relaxed" style={{ fontFamily: 'var(--font-body)' }}>
              A partir desse diagnóstico, conduzo um processo de alinhamento profundo,<br />
              para que você volte ao seu estado natural de equilíbrio.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <motion.h2
            className="text-4xl md:text-5xl mb-16 text-center text-[#2B2B2B]"
            style={{ fontFamily: 'var(--font-titles)' }}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Como funciona
          </motion.h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                className="relative p-8 bg-gradient-to-br from-[#F8F4EC] to-white rounded-lg border border-[#C8A46B]/30"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                whileHover={{
                  scale: 1.05,
                  boxShadow: '0 12px 40px rgba(200, 164, 107, 0.25)'
                }}
              >
                <div
                  className="text-6xl text-[#C8A46B]/30 mb-4"
                  style={{ fontFamily: 'var(--font-titles)' }}
                >
                  {step.number}
                </div>
                <h3
                  className="text-xl mb-2 text-[#2B2B2B]"
                  style={{ fontFamily: 'var(--font-titles)' }}
                >
                  {step.title}
                </h3>
                <p className="text-[#2B2B2B]" style={{ fontFamily: 'var(--font-body)' }}>
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-gradient-to-b from-white to-[#EADBC1]/20">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2
              className="text-4xl md:text-5xl mb-8 text-[#2B2B2B]"
              style={{ fontFamily: 'var(--font-titles)' }}
            >
              Resultado
            </h2>

            <p className="text-2xl mb-12 text-[#B8863B]" style={{ fontFamily: 'var(--font-subtitles)' }}>
              Você não sai apenas melhor.
            </p>

            <p className="text-xl mb-12 text-[#2B2B2B]" style={{ fontFamily: 'var(--font-body)' }}>
              Você sai com:
            </p>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
              {results.map((result, index) => (
                <motion.div
                  key={index}
                  className="p-8 bg-white rounded-lg"
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  whileHover={{
                    scale: 1.08,
                    boxShadow: '0 10px 35px rgba(200, 164, 107, 0.3)'
                  }}
                  style={{ boxShadow: '0 4px 20px rgba(200, 164, 107, 0.15)' }}
                >
                  <p
                    className="text-2xl text-[#C8A46B]"
                    style={{ fontFamily: 'var(--font-titles)' }}
                  >
                    {result}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-24 bg-gradient-to-b from-[#C8A46B] to-[#B8863B] text-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p
              className="text-2xl md:text-3xl mb-8 leading-relaxed"
              style={{ fontFamily: 'var(--font-subtitles)' }}
            >
              Se você sente que algo não está certo…<br />
              mesmo quando tudo parece estar —<br />
              esse é o momento de olhar mais profundo.
            </p>

            <PremiumButton variant="secondary" onClick={() => onNavigate('contact')}>
              Agendar seu atendimento →
            </PremiumButton>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
