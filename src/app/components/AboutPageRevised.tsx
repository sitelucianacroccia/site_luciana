import { motion } from 'motion/react';
import { GlowingOrb } from './GlowingOrb';
import { FloatingParticles } from './FloatingParticles';
import { Sparkles, Heart, Brain, Zap } from 'lucide-react';
import lucianaConsultorio from '../../imports/WhatsApp_Image_2020-04-25_at_16.42.45.jpeg';
import lucianaPendulo from '../../imports/WhatsApp_Image_2020-04-25_at_16.43.30.jpeg';
import lucianaJardim from '../../imports/WhatsApp_Image_2020-04-25_at_16.47.18_(2).jpeg';

export function AboutPageRevised() {
  const fadeIn = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] }
  };

  const timeline = [
    {
      icon: Sparkles,
      title: 'Sensibilidade desde a infância',
      description: 'Sensível ao campo energético desde criança, com percepções além do comum.'
    },
    {
      icon: Brain,
      title: 'Busca por compreensão',
      description: 'Explorei diferentes caminhos espirituais: kardecismo, umbanda, apometria, cura quântica estelar.'
    },
    {
      icon: Zap,
      title: 'Formação racional',
      description: 'Análise de Sistemas — unindo lógica e sensibilidade em método estruturado.'
    },
    {
      icon: Heart,
      title: 'Mais de 20 anos de experiência',
      description: 'Terapeuta holística com abordagem universalista, integrando diferentes linhas.'
    }
  ];

  return (
    <div className="relative min-h-screen overflow-hidden pb-20 pt-28 sm:pt-32 lg:pb-24">
      <GlowingOrb size={600} blur={140} delay={0} />
      <GlowingOrb size={400} color="#8E6535" blur={100} delay={2} />
      <FloatingParticles />

      <div className="relative z-10 mx-auto max-w-5xl px-4 sm:px-6">
        <motion.div
          className="mb-14 text-center md:mb-20"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#B58A4A]/30 bg-white/80 px-5 py-2 backdrop-blur-sm md:mb-8"
            whileHover={{ scale: 1.05 }}
            style={{ boxShadow: '0 4px 20px rgba(200, 164, 107, 0.2)' }}
          >
            <Heart className="w-4 h-4 text-[#8E6535]" />
            <span className="text-[#8E6535] text-sm" style={{ fontFamily: 'var(--font-body)' }}>
              Minha Jornada
            </span>
          </motion.div>

          <h1
            className="mb-6 text-4xl leading-tight text-[#24322B] md:mb-8 md:text-6xl lg:text-7xl"
            style={{ fontFamily: 'var(--font-titles)' }}
          >
            Quem conduz o seu<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#B58A4A] to-[#8E6535]">
              processo importa
            </span>
          </h1>
        </motion.div>

        <div className="mb-14 grid gap-5 md:mb-16 md:grid-cols-2 md:gap-6">
          {timeline.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={index}
                className="group relative overflow-hidden rounded-lg border-2 border-[#B58A4A]/30 bg-white p-6 sm:p-8 lg:rounded-lg"
                {...fadeIn}
                transition={{ delay: 0.2 + index * 0.15 }}
                whileHover={{
                  scale: 1.03,
                  boxShadow: '0 25px 70px rgba(200, 164, 107, 0.35)',
                  borderColor: '#B58A4A'
                }}
              >
                <motion.div
                  className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-br from-[#B58A4A]/20 to-transparent rounded-full blur-3xl"
                  animate={{
                    scale: [1, 1.3, 1],
                    opacity: [0.3, 0.6, 0.3]
                  }}
                  transition={{ duration: 3, repeat: Infinity, delay: index * 0.5 }}
                />

                <div className="relative flex items-start gap-4">
                  <motion.div
                    className="p-4 bg-gradient-to-br from-[#B58A4A] to-[#8E6535] rounded-lg flex-shrink-0"
                    whileHover={{ rotate: 360, scale: 1.1 }}
                    transition={{ duration: 0.6 }}
                    style={{ boxShadow: '0 8px 25px rgba(200, 164, 107, 0.4)' }}
                  >
                    <Icon className="w-7 h-7 text-white" />
                  </motion.div>

                  <div className="flex-1">
                    <h3
                      className="text-xl mb-3 text-[#24322B]"
                      style={{ fontFamily: 'var(--font-titles)' }}
                    >
                      {item.title}
                    </h3>
                    <p className="text-[#24322B]/80 leading-relaxed" style={{ fontFamily: 'var(--font-body)' }}>
                      {item.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          className="space-y-8 text-lg text-[#24322B] leading-relaxed mb-16"
          style={{ fontFamily: 'var(--font-body)' }}
        >
          <motion.div
            className="rounded-lg border border-[#B58A4A]/30 bg-gradient-to-br from-white to-[#F7F2EA] p-6 sm:p-8 lg:rounded-lg"
            {...fadeIn}
            transition={{ delay: 0.8 }}
            whileHover={{ boxShadow: '0 20px 60px rgba(200, 164, 107, 0.25)' }}
          >
            <p className="mb-4">
              Durante muitos anos, essa sensibilidade foi <span className="text-[#8E6535] font-medium">desorganizada</span> — o que me levou a buscar respostas em diferentes caminhos espirituais.
            </p>
            <p>
              Não foi um caminho fácil. Mas foi esse processo que me trouxe até aqui.
            </p>
          </motion.div>

          <motion.div
            className="relative overflow-hidden rounded-lg border-2 border-[#B58A4A]/40 bg-gradient-to-br from-[#EFE5D5]/40 to-white p-6 sm:p-10 lg:rounded-lg"
            {...fadeIn}
            transition={{ delay: 1.0 }}
            whileHover={{ boxShadow: '0 25px 70px rgba(200, 164, 107, 0.3)' }}
          >
            <motion.div
              className="absolute -top-10 -right-10 w-40 h-40 bg-gradient-to-br from-[#B58A4A]/30 to-transparent rounded-full blur-3xl"
              animate={{
                scale: [1, 1.4, 1],
                opacity: [0.4, 0.7, 0.4]
              }}
              transition={{ duration: 4, repeat: Infinity }}
            />

            <div className="relative">
              <div className="mb-6 flex items-center gap-3">
                <div className="p-2 bg-gradient-to-br from-[#B58A4A]/20 to-[#8E6535]/20 rounded-xl">
                  <Sparkles className="w-7 h-7 text-[#B58A4A]" />
                </div>
                <h3
                  className="text-2xl text-[#8E6535]"
                  style={{ fontFamily: 'var(--font-titles)' }}
                >
                  Hoje
                </h3>
              </div>

              <p className="mb-4">
                Com <span className="text-[#8E6535] font-medium">mais de 20 anos de experiência</span>, atuo como terapeuta holística com uma abordagem <span className="text-[#8E6535] font-medium">universalista</span> — sem vínculo com uma única linha, mas com respeito e integração das diferentes formas de atuação espiritual.
              </p>

              <p className="mb-4">
                Minha formação racional em <span className="text-[#8E6535] font-medium">Análise de Sistemas</span> me permite unir lógica e sensibilidade em um método estruturado.
              </p>

              <div className="mt-8 pt-6 border-t border-[#B58A4A]/30">
                <p className="text-xl text-[#8E6535] italic" style={{ fontFamily: 'var(--font-subtitles)' }}>
                  Não trabalho com achismo.
                </p>
                <p className="text-xl mt-2">
                  Trabalho com diagnóstico, identificação de origem e tratamento direcionado.
                </p>
              </div>
            </div>
          </motion.div>
        </motion.div>

        <section className="mb-20">
          <motion.h2
            className="mb-10 text-center text-4xl text-[#24322B] md:mb-12 md:text-5xl"
            style={{ fontFamily: 'var(--font-titles)' }}
            {...fadeIn}
          >
            Em ação
          </motion.h2>

          <div className="grid md:grid-cols-3 gap-6">
            <motion.div
              className="group relative rounded-lg overflow-hidden bg-white"
              style={{ boxShadow: '0 15px 50px rgba(200, 164, 107, 0.2)' }}
              {...fadeIn}
              transition={{ delay: 0.2 }}
              whileHover={{ scale: 1.03, boxShadow: '0 25px 70px rgba(200, 164, 107, 0.35)' }}
            >
              <div className="relative w-full" style={{ paddingBottom: '125%' }}>
                <img
                  src={lucianaConsultorio}
                  alt="Luciana no consultório"
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#24322B]/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <motion.div
                  className="absolute bottom-0 left-0 right-0 p-6 text-white translate-y-full group-hover:translate-y-0 transition-transform duration-500"
                >
                  <p className="text-lg" style={{ fontFamily: 'var(--font-subtitles)' }}>
                    No consultório
                  </p>
                  <p className="text-sm opacity-90" style={{ fontFamily: 'var(--font-body)' }}>
                    Tarô Terapêutico
                  </p>
                </motion.div>
              </div>
            </motion.div>

            <motion.div
              className="group relative rounded-lg overflow-hidden bg-white"
              style={{ boxShadow: '0 15px 50px rgba(200, 164, 107, 0.2)' }}
              {...fadeIn}
              transition={{ delay: 0.3 }}
              whileHover={{ scale: 1.03, boxShadow: '0 25px 70px rgba(200, 164, 107, 0.35)' }}
            >
              <div className="relative w-full" style={{ paddingBottom: '125%' }}>
                <img
                  src={lucianaPendulo}
                  alt="Luciana com pêndulo"
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#24322B]/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <motion.div
                  className="absolute bottom-0 left-0 right-0 p-6 text-white translate-y-full group-hover:translate-y-0 transition-transform duration-500"
                >
                  <p className="text-lg" style={{ fontFamily: 'var(--font-subtitles)' }}>
                    Radiestesia
                  </p>
                  <p className="text-sm opacity-90" style={{ fontFamily: 'var(--font-body)' }}>
                    Mesa Quântica e Pêndulo
                  </p>
                </motion.div>
              </div>
            </motion.div>

            <motion.div
              className="group relative rounded-lg overflow-hidden bg-white"
              style={{ boxShadow: '0 15px 50px rgba(200, 164, 107, 0.2)' }}
              {...fadeIn}
              transition={{ delay: 0.4 }}
              whileHover={{ scale: 1.03, boxShadow: '0 25px 70px rgba(200, 164, 107, 0.35)' }}
            >
              <div className="relative w-full" style={{ paddingBottom: '125%' }}>
                <img
                  src={lucianaJardim}
                  alt="Luciana na natureza"
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#24322B]/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <motion.div
                  className="absolute bottom-0 left-0 right-0 p-6 text-white translate-y-full group-hover:translate-y-0 transition-transform duration-500"
                >
                  <p className="text-lg" style={{ fontFamily: 'var(--font-subtitles)' }}>
                    Conexão
                  </p>
                  <p className="text-sm opacity-90" style={{ fontFamily: 'var(--font-body)' }}>
                    Equilíbrio e Natureza
                  </p>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </section>

        <motion.div
          className="relative overflow-hidden rounded-lg bg-gradient-to-br from-[#B58A4A] via-[#8E6535] to-[#B58A4A] p-7 text-center text-white sm:p-10 lg:rounded-lg lg:p-12"
          style={{ boxShadow: '0 30px 80px rgba(200, 164, 107, 0.4)' }}
          {...fadeIn}
          transition={{ delay: 1.2 }}
          whileHover={{ scale: 1.02 }}
        >
          <GlowingOrb size={300} color="#FFFFFF" blur={100} delay={0} />

          <div className="relative z-10">
            <motion.div
              animate={{
                scale: [1, 1.1, 1],
                rotate: [0, 5, -5, 0]
              }}
              transition={{ duration: 6, repeat: Infinity }}
            >
              <Heart className="w-16 h-16 mx-auto mb-6 text-white/90" />
            </motion.div>

            <p
              className="mb-4 text-2xl italic leading-relaxed md:text-4xl"
              style={{ fontFamily: 'var(--font-subtitles)', textShadow: '0 2px 20px rgba(0,0,0,0.2)' }}
            >
              Eu não vendo terapia.
            </p>
            <p
              className="text-2xl italic leading-relaxed md:text-4xl"
              style={{ fontFamily: 'var(--font-subtitles)', textShadow: '0 2px 20px rgba(0,0,0,0.2)' }}
            >
              Eu conduzo processos de reconexão.
            </p>

            <div className="mt-10 pt-8 border-t border-white/30">
              <div className="grid md:grid-cols-3 gap-4 text-sm">
                <div className="p-4 bg-white/10 backdrop-blur-sm rounded-xl">
                  <p className="text-white/90">→ Investigadora da origem</p>
                </div>
                <div className="p-4 bg-white/10 backdrop-blur-sm rounded-xl">
                  <p className="text-white/90">→ Tradutora do invisível</p>
                </div>
                <div className="p-4 bg-white/10 backdrop-blur-sm rounded-xl">
                  <p className="text-white/90">→ Facilitadora de reconexão real</p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
