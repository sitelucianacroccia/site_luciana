import { motion } from 'motion/react';
import {
  ArrowRight,
  Brain,
  CheckCircle2,
  Compass,
  Heart,
  Layers3,
  Lightbulb,
  MessageCircle,
  ShieldCheck,
  Sparkles,
  Target,
  Zap
} from 'lucide-react';
import { PremiumButton } from './PremiumButton';
import fenixLogo from '../../imports/Fenix_fundo_transparente.png';
import lucianaFlores from '../../imports/WhatsApp_Image_2020-04-25_at_16.44.49_(2).jpeg';
import lucianaLiberacao from '../../imports/WhatsApp_Image_2020-04-25_at_16.44.51_(2).jpeg';
import lucianaAtendimento from '../../imports/WhatsApp_Image_2020-04-25_at_16.43.36.jpeg';

interface HomePageRevisedProps {
  onNavigate: (page: string) => void;
}

const reveal = {
  initial: { opacity: 0, y: 22 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-80px' },
  transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] }
};

const symptoms = [
  { icon: Brain, text: 'Cansaço sem explicação' },
  { icon: Zap, text: 'Ansiedade constante' },
  { icon: Heart, text: 'Insônia ou pensamentos repetitivos' },
  { icon: Target, text: 'Tristeza ou sensação de vazio' },
  { icon: Sparkles, text: 'Dores físicas sem causa aparente' },
  { icon: Lightbulb, text: 'Ciclos que se repetem na vida' }
];

const processSteps = [
  {
    number: '01',
    title: 'Leitura do campo',
    description: 'Avaliação inicial com radiestesia e mesa quântica para mapear o desequilíbrio.'
  },
  {
    number: '02',
    title: 'Origem do padrão',
    description: 'Investigação do ponto real de bloqueio nos níveis espiritual, emocional, mental e energético.'
  },
  {
    number: '03',
    title: 'Tratamento direcionado',
    description: 'Combinação das técnicas necessárias para cada processo, sem protocolo genérico.'
  },
  {
    number: '04',
    title: 'Integração',
    description: 'Reequilíbrio e orientação para sustentar clareza, leveza e reconexão.'
  }
];

const outcomes = [
  'Clareza mental',
  'Direção de vida',
  'Leveza interior',
  'Consciência profunda'
];

const patientReviews = [
  {
    name: 'Marina Azevedo',
    review: 'A Luciana conduziu meu processo com muita seriedade e sensibilidade. Saí da avaliação com clareza sobre padrões que eu não conseguia enxergar.'
  },
  {
    name: 'Renata Martins',
    review: 'O atendimento foi profundo, acolhedor e muito objetivo. Senti confiança no método e percebi leveza já nos primeiros dias.'
  },
  {
    name: 'Claudia Ribeiro',
    review: 'Cheguei confusa e ansiosa, mas encontrei uma condução firme e respeitosa. A leitura trouxe direção para um momento muito importante.'
  },
  {
    name: 'Patricia Almeida',
    review: 'A abordagem da Luciana vai além do óbvio. Ela identifica a raiz do processo e explica tudo com cuidado, sem pressa e sem julgamento.'
  },
  {
    name: 'Beatriz Carvalho',
    review: 'Foi uma experiência transformadora e muito humana. O atendimento me ajudou a entender ciclos repetidos e escolher novos caminhos.'
  }
];

export function HomePageRevised({ onNavigate }: HomePageRevisedProps) {
  const marqueeReviews = [...patientReviews, ...patientReviews];
  const whatsappMessage = encodeURIComponent('Olá, Luciana. Gostaria de agendar uma avaliação.');
  const whatsappUrl = `https://wa.me/5511998234317?text=${whatsappMessage}`;

  return (
    <main className="min-h-screen bg-[#F7F2EA] text-[#304238]">
      <section className="relative isolate min-h-[calc(100svh-4rem)] overflow-hidden pt-20 text-white">
        <img
          src={lucianaFlores}
          alt="Luciana em ambiente natural"
          className="absolute inset-0 h-full w-full object-cover object-[50%_32%]"
        />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(42,58,49,0.92)_0%,rgba(42,58,49,0.74)_42%,rgba(42,58,49,0.34)_100%)]" />
        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-[#F7F2EA] to-transparent" />

        <div className="relative z-10 mx-auto flex min-h-[calc(100svh-5rem)] max-w-7xl flex-col justify-center px-5 py-12 sm:px-8 lg:px-10">
          <motion.div
            className="max-w-3xl"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
          >
            <img src={fenixLogo} alt="Logo Fênix" className="mb-8 h-16 w-16 object-contain opacity-95 sm:h-20 sm:w-20" />
            <h1
              className="text-5xl leading-[0.95] text-white sm:text-6xl lg:text-7xl"
              style={{ fontFamily: 'var(--font-titles)' }}
            >
              Luciana Croccia D'Onofrio
            </h1>
            <p
              className="mt-6 max-w-2xl text-2xl leading-tight text-[#EFE5D5] sm:text-3xl"
              style={{ fontFamily: 'var(--font-subtitles)' }}
            >
              Terapia holística com diagnóstico, profundidade e condução individual.
            </p>
            <p className="mt-6 max-w-2xl text-base leading-8 text-white/82 sm:text-lg" style={{ fontFamily: 'var(--font-body)' }}>
              Um trabalho para investigar a raiz do desequilíbrio, tratar padrões repetitivos e restaurar presença nos níveis espiritual, emocional, mental, físico e energético.
            </p>

            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <PremiumButton onClick={() => onNavigate('contact')}>
                <span className="flex items-center gap-2">
                  Agendar avaliação
                  <ArrowRight className="h-4 w-4" />
                </span>
              </PremiumButton>
              <PremiumButton variant="secondary" onClick={() => onNavigate('work')}>
                Conhecer técnicas
              </PremiumButton>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="relative z-10 -mt-12 px-5 sm:px-8 lg:px-10">
        <div className="mx-auto grid max-w-7xl overflow-hidden rounded-lg border border-[#D8C4A4] bg-[#FBF8F1] shadow-[0_24px_80px_rgba(43,35,24,0.12)] md:grid-cols-3">
          {[
            ['20+', 'anos de experiência'],
            ['CRTH-BR 1527', 'terapeuta holística registrada'],
            ['Presencial ou remoto', 'atendimento conforme a técnica indicada']
          ].map(([value, label]) => (
            <div key={value} className="border-b border-[#D8C4A4] p-6 md:border-b-0 md:border-r last:md:border-r-0">
              <p className="text-2xl text-[#8E6535]" style={{ fontFamily: 'var(--font-titles)' }}>
                {value}
              </p>
              <p className="mt-1 text-sm uppercase tracking-[0.12em] text-[#56645B]" style={{ fontFamily: 'var(--font-body)' }}>
                {label}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="px-5 py-24 sm:px-8 lg:px-10">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
          <motion.div {...reveal}>
            <p className="mb-4 text-sm uppercase tracking-[0.18em] text-[#8E6535]" style={{ fontFamily: 'var(--font-body)' }}>
              Quando procurar ajuda
            </p>
            <h2 className="text-4xl leading-tight text-[#304238] md:text-5xl" style={{ fontFamily: 'var(--font-titles)' }}>
              O sintoma quase nunca é o começo da história.
            </h2>
            <p className="mt-6 text-lg leading-8 text-[#56645B]" style={{ fontFamily: 'var(--font-body)' }}>
              A proposta é olhar além do incômodo aparente e entender a origem do padrão que continua drenando sua energia.
            </p>
          </motion.div>

          <div className="grid gap-3 sm:grid-cols-2">
            {symptoms.map((symptom, index) => {
              const Icon = symptom.icon;
              return (
                <motion.div
                  key={symptom.text}
                  className="flex min-h-28 items-start gap-4 rounded-lg border border-[#D8C4A4] bg-white/72 p-5 shadow-[0_12px_32px_rgba(43,35,24,0.06)]"
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.45, delay: index * 0.04 }}
                >
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-md bg-[#304238] text-[#EFE5D5]">
                    <Icon className="h-5 w-5" />
                  </span>
                  <p className="text-lg leading-7 text-[#304238]" style={{ fontFamily: 'var(--font-body)' }}>
                    {symptom.text}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="bg-[#304238] px-5 py-24 text-white sm:px-8 lg:px-10">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[1fr_0.9fr] lg:items-center">
          <motion.div {...reveal}>
            <p className="mb-4 text-sm uppercase tracking-[0.18em] text-[#D6B680]" style={{ fontFamily: 'var(--font-body)' }}>
              Método
            </p>
            <h2 className="text-4xl leading-tight md:text-5xl" style={{ fontFamily: 'var(--font-titles)' }}>
              Diagnóstico antes da técnica. Presença antes da pressa.
            </h2>
            <p className="mt-6 text-lg leading-8 text-white/72" style={{ fontFamily: 'var(--font-body)' }}>
              O atendimento não parte de fórmulas prontas. Cada processo combina leitura, identificação de origem e aplicação terapêutica conforme o que aparece no campo.
            </p>
            <div className="mt-9 grid gap-3 sm:grid-cols-2">
              {['Espiritual', 'Emocional', 'Mental', 'Físico', 'Energético'].map((level) => (
                <div key={level} className="flex items-center gap-3 border-t border-white/15 py-4">
                  <CheckCircle2 className="h-5 w-5 text-[#D6B680]" />
                  <span className="text-white/88" style={{ fontFamily: 'var(--font-body)' }}>
                    {level}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            className="overflow-hidden rounded-lg border border-white/15 bg-white/6"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <img src={lucianaAtendimento} alt="Atendimento terapêutico" className="h-80 w-full object-cover sm:h-[30rem]" />
            <div className="p-6">
              <p className="text-2xl text-[#EFE5D5]" style={{ fontFamily: 'var(--font-subtitles)' }}>
                Não trabalho com achismo.
              </p>
              <p className="mt-3 leading-7 text-white/72" style={{ fontFamily: 'var(--font-body)' }}>
                Trabalho com leitura, método e acompanhamento individualizado.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="overflow-hidden bg-[#FBF8F1] py-24 md:py-28">
        <div className="mx-auto mb-14 max-w-7xl px-5 text-center sm:px-8 lg:px-10">
          <motion.div className="mx-auto max-w-3xl" {...reveal}>
            <p className="mb-4 text-sm uppercase tracking-[0.18em] text-[#8E6535]" style={{ fontFamily: 'var(--font-body)' }}>
              Avaliações de pacientes
            </p>
            <h2 className="text-4xl leading-tight text-[#304238] md:text-5xl" style={{ fontFamily: 'var(--font-titles)' }}>
              Histórias de quem começou olhando para a raiz.
            </h2>
          </motion.div>
        </div>

        <div className="testimonial-marquee" aria-label="Avaliações de pacientes">
          <div className="testimonial-track">
            {marqueeReviews.map((item, index) => (
              <article
                key={`${item.name}-${index}`}
                className="testimonial-card"
                aria-hidden={index >= patientReviews.length}
              >
                <p className="testimonial-name" style={{ fontFamily: 'var(--font-body)' }}>
                  {item.name}
                </p>
                <p className="testimonial-copy" style={{ fontFamily: 'var(--font-subtitles)' }}>
                  “{item.review}”
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="px-5 py-24 sm:px-8 lg:px-10">
        <div className="mx-auto max-w-7xl">
          <motion.div className="mb-12 max-w-3xl" {...reveal}>
            <p className="mb-4 text-sm uppercase tracking-[0.18em] text-[#8E6535]" style={{ fontFamily: 'var(--font-body)' }}>
              Como funciona
            </p>
            <h2 className="text-4xl leading-tight text-[#304238] md:text-5xl" style={{ fontFamily: 'var(--font-titles)' }}>
              Um processo claro para uma investigação profunda.
            </h2>
          </motion.div>

          <div className="process-steps">
            {processSteps.map((step) => (
              <motion.div key={step.number} className="process-step" {...reveal}>
                <p className="process-step-number" style={{ fontFamily: 'var(--font-body)' }}>
                  {step.number}
                </p>
                <h3 className="process-step-title" style={{ fontFamily: 'var(--font-titles)' }}>
                  {step.title}
                </h3>
                <p className="process-step-description" style={{ fontFamily: 'var(--font-body)' }}>
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-5 pb-24 sm:px-8 lg:px-10">
        <div className="mx-auto grid max-w-7xl overflow-hidden rounded-lg bg-[#EFE5D5] lg:grid-cols-[0.95fr_1.05fr]">
          <div className="min-h-[26rem]">
            <img src={lucianaLiberacao} alt="Processo de liberação e leveza" className="h-full w-full object-cover" />
          </div>
          <motion.div className="p-8 sm:p-12 lg:p-16" {...reveal}>
            <Compass className="mb-8 h-10 w-10 text-[#8E6535]" />
            <h2 className="text-4xl leading-tight text-[#304238] md:text-5xl" style={{ fontFamily: 'var(--font-titles)' }}>
              A transformação fica mais real quando encontra direção.
            </h2>
            <p className="mt-6 text-lg leading-8 text-[#56645B]" style={{ fontFamily: 'var(--font-body)' }}>
              Você não sai apenas com alívio momentâneo. Sai com mais consciência sobre si, sobre o padrão que se repetia e sobre o próximo passo possível.
            </p>
            <div className="mt-9 grid gap-3 sm:grid-cols-2">
              {outcomes.map((outcome) => (
                <div key={outcome} className="flex items-center gap-3">
                  <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[#304238] text-[#EFE5D5]">
                    <ShieldCheck className="h-4 w-4" />
                  </span>
                  <span className="text-[#304238]" style={{ fontFamily: 'var(--font-body)' }}>
                    {outcome}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      <section className="bg-[#FBF8F1] px-5 py-20 sm:px-8 lg:px-10">
        <div className="mx-auto flex max-w-7xl flex-col gap-8 border-y border-[#D8C4A4] py-12 md:flex-row md:items-center md:justify-between">
          <div className="max-w-3xl">
            <Layers3 className="mb-5 h-9 w-9 text-[#8E6535]" />
            <h2 className="text-4xl leading-tight text-[#304238]" style={{ fontFamily: 'var(--font-titles)' }}>
              Pronta para olhar mais profundo?
            </h2>
            <p className="mt-4 text-lg leading-8 text-[#56645B]" style={{ fontFamily: 'var(--font-body)' }}>
              Agende uma avaliação para entender qual caminho terapêutico faz sentido para o seu momento.
            </p>
          </div>
          <PremiumButton onClick={() => onNavigate('contact')}>
            <span className="flex items-center gap-2">
              Agendar atendimento
              <ArrowRight className="h-4 w-4" />
            </span>
          </PremiumButton>
        </div>
      </section>

      <a
        className="whatsapp-float"
        href={whatsappUrl}
        target="_blank"
        rel="noreferrer"
        aria-label="Agendar avaliação pelo WhatsApp"
      >
        <span className="whatsapp-bubble">Agendar avaliação</span>
        <span className="whatsapp-symbol whatsapp-symbol-chat" aria-hidden="true">
          <MessageCircle className="h-7 w-7" />
        </span>
        <span className="whatsapp-symbol whatsapp-symbol-fenix" aria-hidden="true">
          <img src={fenixLogo} alt="" />
        </span>
      </a>
    </main>
  );
}
