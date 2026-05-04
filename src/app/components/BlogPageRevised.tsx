import { motion, AnimatePresence } from 'motion/react';
import { useState } from 'react';
import { ChevronDown, HelpCircle, Sparkles } from 'lucide-react';
import { GlowingOrb } from './GlowingOrb';
import { FloatingParticles } from './FloatingParticles';

export function BlogPageRevised() {
  const [openQuestion, setOpenQuestion] = useState<number | null>(0);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const fadeIn = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] }
  };

  const faqs = [
    {
      category: 'Sobre Terapia Holística',
      color: '#B58A4A',
      questions: [
        {
          q: 'O que é Terapia Holística?',
          a: 'É uma terapia que trata o ser humano como um TODO, a nível espiritual, emocional, mental, físico e energético em seus corpos sutis. Busca tratar a origem de seus processos a fim de tirá-lo do desequilíbrio, harmonizando mente, corpo e espírito, reconectando com sua essência e por consequência com seu caminho de vida.'
        },
        {
          q: 'Quais sintomas podem ser tratados?',
          a: 'Cansaço excessivo, insônia e pesadelos, tristeza e apatia, angústia, irritabilidade, estresse, pensamentos negativos, traumas, medo e pânico, dores de cabeça, ansiedade, problemas de saúde física e dificuldades em diversas áreas: profissional, financeira e relacionamentos.'
        },
        {
          q: 'Como funciona o atendimento à distância?',
          a: 'Todas as técnicas podem ser realizadas à distância, pois com o desdobramento dos corpos sutis energéticos do cliente o trabalho pode ser efetuado da mesma maneira e com o mesmo resultado. A única exceção é a ferramenta Barras de Access, que obrigatoriamente deverá ser realizada presencialmente.'
        }
      ]
    },
    {
      category: 'Técnicas e Tratamentos',
      color: '#8E6535',
      questions: [
        {
          q: 'O que é a Mesa Quântica?',
          a: 'A Mesa Quântica é um psicogerador que usa a radiestesia e a radiônica para acessar a quinta dimensão, o mental superior da pessoa. A avaliação consiste em verificar qual a origem do desequilíbrio e quais os tratamentos indicados para que a pessoa volte à sua verdadeira essência.'
        },
        {
          q: 'Como funciona a Apometria Quântica?',
          a: 'É uma técnica de limpeza espiritual que atua até a quinta dimensão, efetuando a desobsessão e tratando todo o campo energético. Através da impulsoterapia, técnica baseada na física quântica, são encaminhadas entidades espirituais e transmutados os 32 corpos sutis energéticos.'
        },
        {
          q: 'O que é EMDR e para que serve?',
          a: 'EMDR (Dessensibilização e Reprocessamento por meio dos Movimentos Oculares) é uma técnica indicada para tratamento de traumas ou qualquer situação desagradável. Através do estímulo bilateral dos hemisférios cerebrais, é acessada a área do trauma efetuando sua dessensibilização.'
        },
        {
          q: 'O que é a Tackionsmetria?',
          a: 'É um tratamento de cura que trabalha com a Energia Tackiônica da quinta dimensão. Tem indicação para tratamento de doenças e desequilíbrios emocionais, mentais e físicos. Age no órgão doente, transmutando a origem emocional do desequilíbrio e acoplando o órgão sadio já refeito.'
        },
        {
          q: 'Como funciona a RIC/EFT?',
          a: 'A Renovação da Informação Celular é um tratamento indicado para o emocional. As emoções negativas bloqueiam os meridianos e esta terapia efetua uma limpeza emocional, desbloqueando esses meridianos e renovando a informação celular para um novo padrão emocional positivo.'
        }
      ]
    },
    {
      category: 'Constelação Familiar',
      color: '#B58A4A',
      questions: [
        {
          q: 'O que é Constelação Familiar?',
          a: 'É uma psicoterapia sistêmica desenvolvida pelo psicoterapeuta alemão Bert Hellinger que estuda as emoções que acumulamos de nossas famílias. Muitas questões como relacionamentos difíceis, falta de sucesso, problemas financeiros e de saúde podem ser consequências de emaranhamentos familiares.'
        },
        {
          q: 'Quais são as 3 Leis da Constelação Familiar?',
          a: '1) Lei da Hierarquia: quem vem antes na linhagem familiar tem precedência sobre quem vem depois. 2) Lei do Pertencimento: todos pertencem ao sistema familiar, exclusões geram desarmonias. 3) Equilíbrio entre dar e receber: deve haver equilíbrio nos relacionamentos. Se uma dessas leis for violada, gera emaranhamentos trazendo desequilíbrios.'
        },
        {
          q: 'O que é o Genograma?',
          a: 'É uma ferramenta usada na Constelação Familiar onde se coloca todos os familiares antepassados a fim de sentir o campo mórfico familiar do paciente, na tentativa de harmonizar possíveis questões de conflito da família utilizando-se das frases de cura.'
        }
      ]
    },
    {
      category: 'Autoconhecimento',
      color: '#8E6535',
      questions: [
        {
          q: 'O que é o Mapa Numerológico?',
          a: 'A Numerologia é uma ferramenta de autoconhecimento que através da vibração dos números e letras, do nome e data de nascimento, identifica as características do indivíduo. Mostra alma, habilidades, missão de vida, vocação profissional, número de poder, desafios e muito mais.'
        },
        {
          q: 'Como funciona o Tarô Terapêutico?',
          a: 'A leitura do tarô terapêutico é indicada quando a pessoa está com dificuldade de visualizar o que está acontecendo em sua vida ou qual atitude tomar. Abre-se uma mandala onde serão apontadas características gerais do momento em todas as áreas: profissional, amor, saúde, dinheiro, espiritual e social.'
        },
        {
          q: 'O que é a Avaliação Metafísica da Saúde?',
          a: 'É feita em casos de manifestação de desequilíbrios na saúde física, a fim de identificar qual quadro emocional ou mental/comportamental gerou a somatização no corpo físico. No atendimento será entregue um descritivo explicativo dos padrões de comportamento que causaram o adoecimento.'
        }
      ]
    },
    {
      category: 'Processos e Resultados',
      color: '#B58A4A',
      questions: [
        {
          q: 'Quanto tempo dura um tratamento?',
          a: 'Cada pessoa é única e cada processo é individual. O tratamento é conduzido de acordo com o diagnóstico inicial e evolução de cada cliente. Não existe protocolo padrão - existe leitura, diagnóstico e condução individual.'
        },
        {
          q: 'Como sei qual técnica é indicada para mim?',
          a: 'Através da Avaliação na Mesa Quântica, é feito um diagnóstico completo que identifica qual a origem do desequilíbrio e quais os tratamentos indicados especificamente para você. A Mesa Quântica acessa seu mental superior e indica o caminho personalizado.'
        },
        {
          q: 'O que esperar após um atendimento?',
          a: 'Os resultados variam de pessoa para pessoa, mas geralmente incluem: clareza mental, direção de vida, leveza, consciência sobre si mesmo e alívio dos sintomas que traziam desequilíbrio. O tratamento busca transformar a causa, não apenas aliviar momentaneamente.'
        },
        {
          q: 'Por que a origem é tão importante?',
          a: 'O problema não está onde você acha. Muitas vezes, sintomas físicos ou emocionais são apenas manifestações de desequilíbrios mais profundos - espirituais, de vidas passadas, emaranhamentos familiares ou energéticos. Tratar apenas o sintoma traz alívio temporário. Tratar a raiz traz transformação real.'
        }
      ]
    },
    {
      category: 'Técnicas Especiais',
      color: '#8E6535',
      questions: [
        {
          q: 'O que é Cura Quântica Estelar?',
          a: 'É uma técnica que permite acessar acima da quinta dimensão, podendo identificar contratos de aprisionamento, implantes extrafísicos, corpos clonados, abduções, maldições e obsessores. Trabalha com a Equipe Espiritual Estelar para libertar de vários processos de desequilíbrio e conectar com a essência divina.'
        },
        {
          q: 'O que são as Barras de Access?',
          a: 'São 32 pontos na cabeça que quando tocados suavemente, acessam nossos arquivos mentais e emocionais. Ocorre a liberação de condicionamentos, aprisionamentos e polaridades que limitam nossas vidas. Proporciona mais leveza e clareza nas tomadas de decisões. Esta técnica deve ser realizada obrigatoriamente de forma presencial.'
        },
        {
          q: 'O que é o Círculo da Vida?',
          a: 'É uma psicoterapia sistêmica em grupo indicada quando a pessoa tem uma situação/problema que não consegue identificar a solução. Os participantes acessam naturalmente seu campo mórfico representando elementos da situação, trazendo lucidez e entendimento para mudança de postura perante a vida.'
        }
      ]
    }
  ];

  let questionIndex = 0;

  const filteredFaqs = selectedCategory
    ? faqs.filter(section => section.category === selectedCategory)
    : faqs;

  return (
    <div className="relative min-h-screen overflow-hidden pb-20 pt-28 sm:pt-32 lg:pb-24">
      <GlowingOrb size={700} blur={150} delay={0} />
      <GlowingOrb size={500} color="#8E6535" blur={120} delay={3} />
      <FloatingParticles />

      <div className="relative z-10 mx-auto max-w-6xl px-4 sm:px-6">
        <motion.div
          className="mb-14 text-center md:mb-20"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            className="inline-flex items-center gap-2 px-6 py-2 mb-8 rounded-full bg-white/80 backdrop-blur-sm border border-[#B58A4A]/30"
            whileHover={{ scale: 1.05 }}
            style={{ boxShadow: '0 4px 20px rgba(200, 164, 107, 0.2)' }}
          >
            <HelpCircle className="w-4 h-4 text-[#8E6535]" />
            <span className="text-[#8E6535] text-sm" style={{ fontFamily: 'var(--font-body)' }}>
              Tire suas dúvidas
            </span>
          </motion.div>

          <h1
            className="mb-6 text-4xl leading-tight text-[#24322B] md:mb-10 md:text-6xl lg:text-7xl"
            style={{ fontFamily: 'var(--font-titles)' }}
          >
            Perguntas <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#B58A4A] to-[#8E6535]">Frequentes</span>
          </h1>

          <p
            className="mx-auto max-w-3xl text-xl italic text-[#8E6535] md:text-2xl"
            style={{ fontFamily: 'var(--font-subtitles)' }}
          >
            Entenda mais sobre as terapias e técnicas
          </p>
        </motion.div>

        <motion.div
          className="mb-12 flex flex-wrap justify-center gap-2 md:mb-16 md:gap-3"
          {...fadeIn}
          transition={{ delay: 0.3 }}
        >
          <motion.button
            onClick={() => setSelectedCategory(null)}
            className={`rounded-full border-2 px-4 py-2 text-sm transition-all sm:px-6 sm:py-3 sm:text-base ${
              selectedCategory === null
                ? 'bg-gradient-to-r from-[#B58A4A] to-[#8E6535] text-white border-[#B58A4A]'
                : 'bg-white text-[#24322B] border-[#B58A4A]/30 hover:border-[#B58A4A]'
            }`}
            style={{ fontFamily: 'var(--font-body)' }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Todas
          </motion.button>
          {faqs.map((section, index) => (
            <motion.button
              key={index}
              onClick={() => setSelectedCategory(section.category)}
              className={`rounded-full border-2 px-4 py-2 text-sm transition-all sm:px-6 sm:py-3 sm:text-base ${
                selectedCategory === section.category
                  ? 'bg-gradient-to-r from-[#B58A4A] to-[#8E6535] text-white border-[#B58A4A]'
                  : 'bg-white text-[#24322B] border-[#B58A4A]/30 hover:border-[#B58A4A]'
              }`}
              style={{ fontFamily: 'var(--font-body)' }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {section.category}
            </motion.button>
          ))}
        </motion.div>

        <div className="space-y-16">
          {filteredFaqs.map((section, sectionIndex) => (
              <motion.div
                key={section.category}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ delay: sectionIndex * 0.1 }}
              >
                <div className="flex items-center gap-4 mb-8">
                  <motion.div
                    className="rounded-xl bg-gradient-to-br from-[#B58A4A] to-[#8E6535] p-3 md:rounded-lg"
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.3 }}
                    style={{ boxShadow: '0 8px 25px rgba(200, 164, 107, 0.4)' }}
                  >
                    <Sparkles className="w-7 h-7 text-white" />
                  </motion.div>
                  <h2
                    className="text-2xl text-[#24322B] md:text-4xl"
                    style={{ fontFamily: 'var(--font-titles)' }}
                  >
                    {section.category}
                  </h2>
                </div>

                <div className="space-y-4">
                  {section.questions.map((item) => {
                    const currentIndex = questionIndex++;
                    const isOpen = openQuestion === currentIndex;

                    return (
                      <motion.div
                        key={currentIndex}
                        className="group relative bg-white rounded-lg border-2 border-[#B58A4A]/20 overflow-hidden"
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.05 * (currentIndex % 10) }}
                        whileHover={{
                          boxShadow: '0 15px 50px rgba(200, 164, 107, 0.25)',
                          borderColor: section.color
                        }}
                      >
                        <motion.div
                          className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-br from-[#B58A4A]/10 to-transparent rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity"
                        />

                        <button
                          onClick={() => setOpenQuestion(isOpen ? null : currentIndex)}
                          className="relative flex w-full items-center justify-between p-5 text-left transition-colors hover:bg-[#F7F2EA]/50 md:p-8"
                        >
                          <h3
                            className="flex items-center gap-3 pr-4 text-base text-[#24322B] md:text-xl"
                            style={{ fontFamily: 'var(--font-titles)' }}
                          >
                            <motion.span
                              className="w-2 h-2 rounded-full bg-gradient-to-r from-[#B58A4A] to-[#8E6535]"
                              animate={{
                                scale: isOpen ? [1, 1.5, 1] : 1,
                                opacity: isOpen ? [1, 0.5, 1] : 1
                              }}
                              transition={{ duration: 2, repeat: isOpen ? Infinity : 0 }}
                            />
                            {item.q}
                          </h3>
                          <motion.div
                            animate={{ rotate: isOpen ? 180 : 0 }}
                            transition={{ duration: 0.4, type: 'spring' }}
                            className="flex-shrink-0 p-2 bg-gradient-to-br from-[#B58A4A]/20 to-[#8E6535]/20 rounded-xl"
                          >
                            <ChevronDown className="w-6 h-6 text-[#B58A4A]" />
                          </motion.div>
                        </button>

                        <AnimatePresence>
                          {isOpen && (
                            <motion.div
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: 'auto', opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                              className="overflow-hidden"
                            >
                              <div className="px-6 md:px-8 pb-8 pt-0">
                                <div className="pt-6 border-t-2 border-[#B58A4A]/20">
                                  <motion.p
                                    className="text-[#24322B] text-base md:text-lg leading-relaxed"
                                    style={{ fontFamily: 'var(--font-body)' }}
                                    initial={{ y: -10 }}
                                    animate={{ y: 0 }}
                                    transition={{ duration: 0.3 }}
                                  >
                                    {item.a}
                                  </motion.p>
                                </div>
                              </div>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </motion.div>
                    );
                  })}
                </div>
              </motion.div>
            ))}
        </div>

        <motion.div
          className="relative mt-16 overflow-hidden rounded-lg bg-gradient-to-br from-[#B58A4A] via-[#8E6535] to-[#B58A4A] p-7 text-center text-white sm:p-10 md:mt-20 lg:rounded-lg lg:p-12"
          style={{ boxShadow: '0 30px 80px rgba(200, 164, 107, 0.4)' }}
          {...fadeIn}
          whileHover={{ scale: 1.02 }}
        >
          <GlowingOrb size={400} color="#FFFFFF" blur={120} delay={0} />

          <div className="relative z-10">
            <motion.div
              animate={{
                scale: [1, 1.2, 1],
                rotate: [0, 10, -10, 0]
              }}
              transition={{ duration: 6, repeat: Infinity }}
            >
              <HelpCircle className="w-16 h-16 mx-auto mb-6 text-white/90" />
            </motion.div>

            <h3 className="text-3xl md:text-4xl mb-4" style={{ fontFamily: 'var(--font-titles)' }}>
              Ainda tem dúvidas?
            </h3>
            <p className="text-xl mb-8 leading-relaxed max-w-2xl mx-auto" style={{ fontFamily: 'var(--font-body)' }}>
              Entre em contato e descubra qual caminho é ideal para você.
            </p>
            <a
              href="https://wa.me/5511998234317"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-10 py-4 bg-white text-[#8E6535] rounded-lg transition-transform hover:scale-105"
              style={{ fontFamily: 'var(--font-body)', fontWeight: 500, boxShadow: '0 10px 40px rgba(0,0,0,0.2)' }}
            >
              <span className="flex items-center gap-2">
                Falar no WhatsApp
                <motion.span
                  animate={{ x: [0, 5, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  →
                </motion.span>
              </span>
            </a>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
