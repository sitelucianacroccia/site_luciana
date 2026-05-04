import { motion } from 'motion/react';

export function AboutPage() {
  const fadeIn = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6 }
  };

  return (
    <div className="min-h-screen pt-32 pb-24">
      <div className="max-w-4xl mx-auto px-6">
        <motion.h1
          className="text-5xl md:text-6xl mb-12 text-center text-[#2B2B2B]"
          style={{ fontFamily: 'var(--font-titles)' }}
          {...fadeIn}
        >
          Quem conduz o seu processo importa.
        </motion.h1>

        <div className="space-y-8 text-lg text-[#2B2B2B] leading-relaxed" style={{ fontFamily: 'var(--font-body)' }}>
          <motion.p {...fadeIn} transition={{ delay: 0.2 }}>
            Sou sensível ao campo energético desde a infância.
          </motion.p>

          <motion.p {...fadeIn} transition={{ delay: 0.3 }}>
            Durante muitos anos, essa sensibilidade foi desorganizada —
            o que me levou a buscar respostas em diferentes caminhos espirituais.
          </motion.p>

          <motion.p {...fadeIn} transition={{ delay: 0.4 }}>
            Passei pelo kardecismo, umbanda, apometria, cura quântica estelar
            e outras linhas, sempre em busca de compreender o que eu sentia.
          </motion.p>

          <motion.p {...fadeIn} transition={{ delay: 0.5 }}>
            Não foi um caminho fácil.
          </motion.p>

          <motion.p {...fadeIn} transition={{ delay: 0.6 }}>
            Mas foi esse processo que me trouxe até aqui.
          </motion.p>

          <motion.div
            className="my-16 h-px bg-gradient-to-r from-transparent via-[#C8A46B] to-transparent"
            {...fadeIn}
            transition={{ delay: 0.7 }}
          />

          <motion.p {...fadeIn} transition={{ delay: 0.8 }}>
            Hoje, com mais de 20 anos de experiência, atuo como terapeuta holística
            com uma abordagem universalista — sem vínculo com uma única linha,
            mas com respeito e integração das diferentes formas de atuação espiritual.
          </motion.p>

          <motion.p {...fadeIn} transition={{ delay: 0.9 }}>
            Minha formação racional em Análise de Sistemas me permite unir
            lógica e sensibilidade em um método estruturado.
          </motion.p>

          <motion.p {...fadeIn} transition={{ delay: 1.0 }}>
            Não trabalho com achismo.
          </motion.p>

          <motion.p {...fadeIn} transition={{ delay: 1.1 }}>
            Trabalho com diagnóstico, identificação de origem e tratamento direcionado.
          </motion.p>

          <motion.div
            className="mt-16 p-12 bg-gradient-to-br from-[#C8A46B] to-[#B8863B] rounded-2xl text-center"
            style={{ boxShadow: '0 20px 60px rgba(200, 164, 107, 0.3)' }}
            {...fadeIn}
            transition={{ delay: 1.2 }}
          >
            <p
              className="text-3xl text-white italic"
              style={{ fontFamily: 'var(--font-subtitles)' }}
            >
              Eu não vendo terapia.
            </p>
            <p
              className="text-3xl text-white italic mt-4"
              style={{ fontFamily: 'var(--font-subtitles)' }}
            >
              Eu conduzo processos de reconexão.
            </p>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
