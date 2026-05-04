import { motion } from 'motion/react';
import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

export function BlogPage() {
  const [openQuestion, setOpenQuestion] = useState<number | null>(null);

  const fadeIn = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6 }
  };

  const faqs = [
    {
      category: 'Sobre Terapia Holística',
      questions: [
        {
          q: 'O que é Terapia Holística?',
          a: 'É uma terapia que trata o ser humano como um TODO, a nível espiritual, emocional, mental, físico e energético em seus corpos sutis. Busca tratar a origem de seus processos a fim de tirá-lo do desequilíbrio, harmonizando mente, corpo e espírito, reconectando com sua essência e por consequência com seu caminho de vida.'
        },
        {
          q: 'Quais sintomas podem ser tratados?',
          a: 'Cansaço excessivo, insônia/pesadelos, tristeza/apatia, angústia, irritabilidade, stress, pensamentos negativos, traumas, medo/pânico, dores de cabeça, ansiedade, problemas de saúde física e dificuldades em diversas áreas: profissional, financeira e relacionamentos.'
        },
        {
          q: 'Como funciona o atendimento à distância?',
          a: 'Todas as técnicas podem ser realizadas à distância pois com o desdobramento dos corpos sutis energéticos do cliente o trabalho pode ser efetuado da mesma maneira e com o mesmo resultado. A única exceção é a ferramenta Barras de Access que obrigatoriamente deverá ser realizada presencialmente.'
        }
      ]
    },
    {
      category: 'Técnicas e Tratamentos',
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
          a: 'EMDR (Dessensibilização e Reprocessamento por meio dos Movimentos Oculares) é uma técnica indicada para tratamento de traumas ou qualquer situação desagradável que a pessoa vive no presente ou já viveu em seu passado. Através do estímulo bilateral dos hemisférios direito e esquerdo do cérebro, é acessada a área do trauma efetuando a dessensibilização do evento ocorrido.'
        },
        {
          q: 'O que é a Tackionsmetria?',
          a: 'É um tratamento de Cura que trabalha com a Energia Tackiônica da quinta dimensão. Tem indicação para tratamento de doenças, desequilíbrios emocionais, mentais e físicos. Age no órgão doente, transmutando a origem emocional do desequilíbrio e acoplando o órgão sadio já refeito.'
        },
        {
          q: 'Como funciona a RIC/EFT?',
          a: 'A Renovação da Informação Celular é um tratamento indicado para o emocional. As emoções negativas bloqueiam os meridianos e esta terapia efetua uma limpeza emocional, desbloqueando esses meridianos, renovando a informação celular para um novo padrão emocional positivo.'
        }
      ]
    },
    {
      category: 'Constelação Familiar',
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

  return (
    <div className="min-h-screen pt-32 pb-24">
      <div className="max-w-5xl mx-auto px-6">
        <motion.h1
          className="text-5xl md:text-6xl mb-8 text-center text-[#2B2B2B]"
          style={{ fontFamily: 'var(--font-titles)' }}
          {...fadeIn}
        >
          Perguntas Frequentes
        </motion.h1>

        <motion.p
          className="text-xl text-center mb-16 text-[#B8863B] italic"
          style={{ fontFamily: 'var(--font-subtitles)' }}
          {...fadeIn}
          transition={{ delay: 0.2 }}
        >
          Entenda mais sobre as terapias e técnicas
        </motion.p>

        <div className="space-y-12">
          {faqs.map((section, sectionIndex) => (
            <motion.div
              key={sectionIndex}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: sectionIndex * 0.1 }}
            >
              <h2
                className="text-3xl mb-6 text-[#B8863B]"
                style={{ fontFamily: 'var(--font-titles)' }}
              >
                {section.category}
              </h2>

              <div className="space-y-4">
                {section.questions.map((item) => {
                  const currentIndex = questionIndex++;
                  const isOpen = openQuestion === currentIndex;

                  return (
                    <motion.div
                      key={currentIndex}
                      className="bg-white rounded-xl border border-[#C8A46B]/30 overflow-hidden"
                      whileHover={{ boxShadow: '0 8px 30px rgba(200, 164, 107, 0.2)' }}
                    >
                      <button
                        onClick={() => setOpenQuestion(isOpen ? null : currentIndex)}
                        className="w-full p-6 flex items-center justify-between text-left transition-colors hover:bg-[#F8F4EC]"
                      >
                        <h3
                          className="text-lg text-[#2B2B2B] pr-4"
                          style={{ fontFamily: 'var(--font-titles)' }}
                        >
                          {item.q}
                        </h3>
                        <motion.div
                          animate={{ rotate: isOpen ? 180 : 0 }}
                          transition={{ duration: 0.3 }}
                          className="flex-shrink-0"
                        >
                          {isOpen ? (
                            <ChevronUp className="w-6 h-6 text-[#C8A46B]" />
                          ) : (
                            <ChevronDown className="w-6 h-6 text-[#C8A46B]" />
                          )}
                        </motion.div>
                      </button>

                      <motion.div
                        initial={false}
                        animate={{
                          height: isOpen ? 'auto' : 0,
                          opacity: isOpen ? 1 : 0
                        }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                      >
                        <div className="px-6 pb-6 pt-0">
                          <div className="pt-4 border-t border-[#C8A46B]/20">
                            <p
                              className="text-[#2B2B2B] leading-relaxed"
                              style={{ fontFamily: 'var(--font-body)' }}
                            >
                              {item.a}
                            </p>
                          </div>
                        </div>
                      </motion.div>
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="mt-16 p-12 bg-gradient-to-br from-[#C8A46B] to-[#B8863B] rounded-2xl text-center text-white"
          style={{ boxShadow: '0 20px 60px rgba(200, 164, 107, 0.3)' }}
          {...fadeIn}
        >
          <h3 className="text-3xl mb-4" style={{ fontFamily: 'var(--font-titles)' }}>
            Ainda tem dúvidas?
          </h3>
          <p className="text-xl mb-6" style={{ fontFamily: 'var(--font-body)' }}>
            Entre em contato e descubra qual caminho é ideal para você.
          </p>
          <a
            href="https://wa.me/5511998234317"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-8 py-4 bg-white text-[#B8863B] rounded-lg transition-transform hover:scale-105"
            style={{ fontFamily: 'var(--font-body)', fontWeight: 500 }}
          >
            Falar no WhatsApp →
          </a>
        </motion.div>
      </div>
    </div>
  );
}
