import { motion } from 'motion/react';
import { useState } from 'react';
import { Sparkles, Heart, Brain, Zap, Eye, Activity } from 'lucide-react';
import lucianaRadiestesia from '../../imports/WhatsApp_Image_2020-04-25_at_16.43.33.jpeg';
import lucianaAtendimento from '../../imports/WhatsApp_Image_2020-04-25_at_16.43.36.jpeg';

export function WorkPageEnhanced() {
  const [selectedService, setSelectedService] = useState<string | null>(null);

  const fadeIn = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6 }
  };

  const services = [
    {
      id: 'mesa-quantica',
      icon: Sparkles,
      category: 'Diagnóstico',
      title: 'Avaliação na Mesa Quântica',
      subtitle: 'Diagnóstico',
      description: 'A Mesa Quântica é um psicogerador que usa a radiestesia e a radiônica, para acessar a quinta dimensão, o mental superior da pessoa.',
      details: 'A avaliação consiste em verificar qual a origem do desequilíbrio e quais os tratamentos indicados. Os desequilíbrios podem ser a nível espiritual (processo auto gerado, absorvido ou ataque externo), emocional/mental (traumas, ansiedade, pânico, medos) ou físico (processos de saúde tratados no campo energético).'
    },
    {
      id: 'apometria',
      icon: Zap,
      category: 'Tratamento Espiritual',
      title: 'Apometria Quântica',
      subtitle: 'Tratamento Espiritual / Energético',
      description: 'Técnica de limpeza espiritual que atua até a quinta dimensão, efetuando desobsessão e tratando todo o campo energético.',
      details: 'Trata miasmas, energias de baixa frequência, encaminhamento de obsessores, retirada de chips e implantes energéticos, assim como níveis emocionais de vidas passadas. Através da impulsoterapia, são transmutados e harmonizados os 32 corpos sutis energéticos.'
    },
    {
      id: 'ric-eft',
      icon: Heart,
      category: 'Tratamento Emocional',
      title: 'RIC / EFT',
      subtitle: 'Renovação da Informação Celular',
      description: 'Tratamento indicado para limpar o emocional. As emoções negativas bloqueiam os meridianos.',
      details: 'Esta terapia efetua uma limpeza emocional, desbloqueando os meridianos, renovando a informação celular para um novo padrão emocional positivo, transmutando as emoções negativas.'
    },
    {
      id: 'tebe',
      icon: Brain,
      category: 'Tratamento Emocional',
      title: 'TEBE',
      subtitle: 'Terapia de Bioprogramação Energética',
      description: 'Indicada para tratamento de alguma subpersonalidade que desequilibra a pessoa.',
      details: 'Pode ser uma emoção exacerbada ou embotada: raiva, medo, angústia, pânico, tristeza. Essa técnica dissolve o sentimento negativo e ressignifica a situação retomando o padrão energético adequado.'
    },
    {
      id: 'emdr',
      icon: Eye,
      category: 'Tratamento Emocional',
      title: 'EMDR',
      subtitle: 'Dessensibilização e Reprocessamento',
      description: 'Técnica indicada para tratamento de traumas ou qualquer situação desagradável que a pessoa vive no presente ou passado.',
      details: 'Através do estímulo bilateral dos hemisférios direito e esquerdo do cérebro, é acessada a área do trauma efetuando a dessensibilização do evento ocorrido.'
    },
    {
      id: 'tackionsmetria',
      icon: Activity,
      category: 'Tratamento Energético',
      title: 'Tackionsmetria Bioenergética',
      subtitle: 'Tratamento de Cura com Energia Tackiônica',
      description: 'Trabalha com a Energia Tackiônica da quinta dimensão. Indicação para doenças e desequilíbrios emocionais, mentais e físicos.',
      details: 'Age no órgão doente, transmutando a origem emocional do desequilíbrio, acoplando o órgão sadio já refeito como era na sua origem nos corpos energéticos, mudando a informação celular para o padrão positivo.'
    },
    {
      id: 'cura-quantica',
      icon: Sparkles,
      category: 'Tratamento Espiritual',
      title: 'Cura Quântica Estelar',
      subtitle: 'Acesso acima da quinta dimensão',
      description: 'Permite acessar acima da quinta dimensão, identificando contratos de aprisionamento e implantes extrafísicos.',
      details: 'Trabalha aspectos físicos, emocionais e espirituais libertando de processos de desequilíbrio. São alinhados os chacras, harmonizados os 32 corpos energéticos, encaminhadas entidades e feita reprogramação neural celular.'
    },
    {
      id: 'constelacao',
      icon: Heart,
      category: 'Terapia Sistêmica',
      title: 'Constelação Familiar',
      subtitle: 'Psicoterapia sistêmica',
      description: 'Metodologia desenvolvida por Bert Hellinger que estuda as emoções acumuladas de nossas famílias.',
      details: 'Dissolve emaranhamentos familiares que causam relacionamentos difíceis, falta de sucesso, problemas financeiros e questões de saúde. Trabalha com as 3 Leis: Hierarquia, Pertencimento e Equilíbrio entre dar e receber.'
    },
    {
      id: 'numerologia',
      icon: Brain,
      category: 'Autoconhecimento',
      title: 'Mapa Numerológico Pitagórico',
      subtitle: 'Despertar de Consciência',
      description: 'Poderosa ferramenta de autoconhecimento através da vibração de números e letras.',
      details: 'Identifica características da alma, missão de vida, vocação profissional, número de poder, desafios e fases da vida. Inclui Mapa Completo, Resumido e Previsão Anual.'
    },
    {
      id: 'taro',
      icon: Eye,
      category: 'Autoconhecimento',
      title: 'Tarô Terapêutico',
      subtitle: 'Despertar de Consciência',
      description: 'Indicada quando há dificuldade de visualizar o que está acontecendo na vida ou qual atitude tomar.',
      details: 'Abre-se uma mandala com características gerais do momento em todas as áreas: profissional, amor, saúde, dinheiro, espiritual, social. Auxilia no entendimento e tomada de decisão.'
    },
    {
      id: 'circulo-vida',
      icon: Activity,
      category: 'Terapia Sistêmica',
      title: 'Círculo da Vida',
      subtitle: 'Psicoterapia sistêmica',
      description: 'Indicada quando a pessoa tem uma situação/problema que não consegue identificar a solução.',
      details: 'Traz lucidez e entendimento do processo para mudança de postura perante a vida, permitindo sair do ciclo vicioso de comportamento. Terapia de grupo onde participantes acessam seu campo mórfico.'
    },
    {
      id: 'barras-access',
      icon: Brain,
      category: 'Despertar de Consciência',
      title: 'Barras de Access',
      subtitle: 'Liberação de condicionamentos',
      description: '32 pontos na cabeça que quando tocados suavemente, acessam nossos arquivos mentais e emocionais.',
      details: 'Libera condicionamentos, aprisionamentos e polaridades que limitam nossas vidas. Proporciona mais leveza e clareza nas tomadas de decisões. OBRIGATORIAMENTE PRESENCIAL.'
    }
  ];

  return (
    <div className="min-h-screen pb-20 pt-28 sm:pt-32 lg:pb-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <motion.h1
          className="mb-6 text-center text-4xl text-[#24322B] md:mb-8 md:text-6xl"
          style={{ fontFamily: 'var(--font-titles)' }}
          {...fadeIn}
        >
          O que é Terapia Holística?
        </motion.h1>

        <motion.div
          className="mx-auto mb-14 max-w-4xl text-center md:mb-20"
          {...fadeIn}
          transition={{ delay: 0.2 }}
        >
          <p className="mb-6 text-lg leading-relaxed text-[#24322B] md:mb-8 md:text-xl" style={{ fontFamily: 'var(--font-body)' }}>
            É uma terapia que trata o ser humano como um TODO, a nível espiritual, emocional, mental, físico e energético em seus corpos sutis.
          </p>

          <p className="text-lg italic text-[#8E6535] md:text-xl" style={{ fontFamily: 'var(--font-subtitles)' }}>
            Busca tratar a origem de seus processos a fim de tirá-lo do desequilíbrio, harmonizando mente, corpo e espírito, reconectando com sua essência e por consequência com seu caminho de vida.
          </p>
        </motion.div>

        <section className="mb-16 md:mb-24">
          <motion.h2
            className="mb-10 text-center text-3xl text-[#24322B] md:mb-12 md:text-4xl"
            style={{ fontFamily: 'var(--font-titles)' }}
            {...fadeIn}
          >
            Sintomas tratados na Terapia Holística
          </motion.h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-5xl mx-auto">
            {[
              'Cansaço excessivo e peso',
              'Medo / Pânico',
              'Insônia / Pesadelos',
              'Dores de cabeça',
              'Tristeza / Apatia',
              'Ansiedade',
              'Angústia',
              'Irritabilidade',
              'Stress',
              'Pensamentos Negativos',
              'Traumas',
              'Problemas de saúde física',
              'Dificuldades Profissionais',
              'Dificuldades Financeiras',
              'Dificuldades em Relacionamentos'
            ].map((symptom, index) => (
              <motion.div
                key={index}
                className="p-4 bg-white rounded-lg border border-[#B58A4A]/20 text-center"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.03 }}
                whileHover={{
                  scale: 1.05,
                  boxShadow: '0 6px 20px rgba(200, 164, 107, 0.2)',
                  borderColor: '#B58A4A'
                }}
                style={{ fontFamily: 'var(--font-body)' }}
              >
                <p className="text-[#24322B]">{symptom}</p>
              </motion.div>
            ))}
          </div>
        </section>

        <section className="mb-16 md:mb-24">
          <motion.h2
            className="mb-10 text-center text-3xl text-[#24322B] md:mb-12 md:text-4xl"
            style={{ fontFamily: 'var(--font-titles)' }}
            {...fadeIn}
          >
            Técnicas Terapêuticas
          </motion.h2>

          <motion.div
            className="mb-10 rounded-xl border border-[#B58A4A]/30 bg-[#EFE5D5]/30 p-5 text-center md:mb-12 md:p-6"
            {...fadeIn}
          >
            <p className="text-lg text-[#24322B]" style={{ fontFamily: 'var(--font-body)' }}>
              <span className="text-[#8E6535]">✓</span> Todas as técnicas podem ser realizadas à distância com a mesma eficácia no campo energético<br />
              <span className="text-sm">(exceto Barras de Access, que é obrigatoriamente presencial)</span>
            </p>
          </motion.div>

          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3 lg:gap-6">
            {services.map((service, index) => {
              const Icon = service.icon;
              const isSelected = selectedService === service.id;

              return (
                <motion.div
                  key={service.id}
                  className={`
                    relative cursor-pointer rounded-lg p-5 transition-all duration-300 sm:p-6
                    ${isSelected
                      ? 'bg-gradient-to-br from-[#B58A4A] to-[#8E6535] text-white'
                      : 'bg-white border border-[#B58A4A]/30'
                    }
                  `}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  whileHover={{
                    scale: 1.03,
                    boxShadow: '0 12px 40px rgba(200, 164, 107, 0.3)'
                  }}
                  onClick={() => setSelectedService(isSelected ? null : service.id)}
                >
                  <div className="flex items-start gap-4 mb-4">
                    <div className={`
                      p-3 rounded-lg
                      ${isSelected ? 'bg-white/20' : 'bg-[#EFE5D5]/50'}
                    `}>
                      <Icon className={`w-6 h-6 ${isSelected ? 'text-white' : 'text-[#8E6535]'}`} />
                    </div>
                    <div className="flex-1">
                      <p className={`text-xs mb-1 ${isSelected ? 'text-white/80' : 'text-[#8E6535]'}`} style={{ fontFamily: 'var(--font-body)' }}>
                        {service.category}
                      </p>
                      <h3
                        className={`text-xl mb-1 ${isSelected ? 'text-white' : 'text-[#24322B]'}`}
                        style={{ fontFamily: 'var(--font-titles)' }}
                      >
                        {service.title}
                      </h3>
                    </div>
                  </div>

                  <p
                    className={`text-sm mb-3 ${isSelected ? 'text-white/90' : 'text-[#24322B]'}`}
                    style={{ fontFamily: 'var(--font-body)' }}
                  >
                    {service.description}
                  </p>

                  <motion.div
                    initial={false}
                    animate={{
                      height: isSelected ? 'auto' : 0,
                      opacity: isSelected ? 1 : 0
                    }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className={`pt-3 mt-3 border-t ${isSelected ? 'border-white/30' : 'border-[#B58A4A]/30'}`}>
                      <p className={`text-sm ${isSelected ? 'text-white' : 'text-[#24322B]'}`} style={{ fontFamily: 'var(--font-body)' }}>
                        {service.details}
                      </p>
                    </div>
                  </motion.div>

                  <motion.p
                    className={`text-xs mt-3 ${isSelected ? 'text-white/70' : 'text-[#8E6535]'}`}
                    style={{ fontFamily: 'var(--font-body)' }}
                  >
                    {isSelected ? '← Clique para fechar' : 'Clique para saber mais →'}
                  </motion.p>
                </motion.div>
              );
            })}
          </div>
        </section>

        <section className="mb-16 md:mb-24">
          <motion.h2
            className="mb-10 text-center text-3xl text-[#24322B] md:mb-12 md:text-4xl"
            style={{ fontFamily: 'var(--font-titles)' }}
            {...fadeIn}
          >
            As Técnicas em Prática
          </motion.h2>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <motion.div
              className="group relative rounded-lg overflow-hidden"
              style={{ boxShadow: '0 20px 60px rgba(200, 164, 107, 0.25)' }}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              whileHover={{ scale: 1.02, boxShadow: '0 30px 80px rgba(200, 164, 107, 0.4)' }}
            >
              <div className="relative aspect-video overflow-hidden">
                <img
                  src={lucianaRadiestesia}
                  alt="Radiestesia com Pirâmide"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#24322B]/90 via-[#24322B]/50 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                  <h3 className="text-2xl mb-2" style={{ fontFamily: 'var(--font-titles)' }}>
                    Radiestesia e Mesa Quântica
                  </h3>
                  <p className="text-sm opacity-90 leading-relaxed" style={{ fontFamily: 'var(--font-body)' }}>
                    Diagnóstico energético profundo para identificar a origem dos desequilíbrios
                  </p>
                </div>
                <div className="absolute top-4 right-4 p-3 bg-gradient-to-br from-[#B58A4A] to-[#8E6535] rounded-full opacity-90">
                  <Sparkles className="w-6 h-6 text-white" />
                </div>
              </div>
            </motion.div>

            <motion.div
              className="group relative rounded-lg overflow-hidden"
              style={{ boxShadow: '0 20px 60px rgba(200, 164, 107, 0.25)' }}
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              whileHover={{ scale: 1.02, boxShadow: '0 30px 80px rgba(200, 164, 107, 0.4)' }}
            >
              <div className="relative aspect-video overflow-hidden">
                <img
                  src={lucianaAtendimento}
                  alt="Atendimento Terapêutico"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#24322B]/90 via-[#24322B]/50 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                  <h3 className="text-2xl mb-2" style={{ fontFamily: 'var(--font-titles)' }}>
                    Atendimento Personalizado
                  </h3>
                  <p className="text-sm opacity-90 leading-relaxed" style={{ fontFamily: 'var(--font-body)' }}>
                    Cada sessão é única, conduzida de acordo com as necessidades individuais
                  </p>
                </div>
                <div className="absolute top-4 right-4 p-3 bg-gradient-to-br from-[#B58A4A] to-[#8E6535] rounded-full opacity-90">
                  <Sparkles className="w-6 h-6 text-white" />
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        <motion.div
          className="mx-auto max-w-3xl rounded-lg bg-gradient-to-br from-[#B58A4A] to-[#8E6535] p-7 text-center text-white sm:p-10 lg:p-12"
          style={{ boxShadow: '0 20px 60px rgba(200, 164, 107, 0.3)' }}
          {...fadeIn}
        >
          <h3 className="text-3xl mb-4" style={{ fontFamily: 'var(--font-titles)' }}>
            Diferencial
          </h3>
          <p className="text-xl mb-4" style={{ fontFamily: 'var(--font-subtitles)' }}>
            Cada atendimento é único.
          </p>
          <p className="text-lg mb-2" style={{ fontFamily: 'var(--font-body)' }}>
            Não existe protocolo padrão.
          </p>
          <p className="text-lg" style={{ fontFamily: 'var(--font-body)' }}>
            Existe leitura, diagnóstico e condução individual.
          </p>
        </motion.div>
      </div>
    </div>
  );
}
