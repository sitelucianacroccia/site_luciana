import { motion } from 'motion/react';

export function WorkPage() {
  const fadeIn = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6 }
  };

  const needs = [
    'Ansiedade constante',
    'Medo ou pânico',
    'Traumas não resolvidos',
    'Problemas recorrentes na vida',
    'Sensação de estar perdido',
    'Desconexão com propósito'
  ];

  const diagnosticTechniques = [
    'Mesa Quântica',
    'Radiestesia'
  ];

  const treatments = [
    'Apometria Quântica',
    'TEBE',
    'EFT / RIC',
    'EMDR',
    'Tackionsmetria',
    'Cura Quântica Estelar'
  ];

  const awareness = [
    'Constelação Familiar',
    'Numerologia',
    'Tarô Terapêutico',
    'Círculo da Vida'
  ];

  return (
    <div className="min-h-screen pt-32 pb-24">
      <div className="max-w-6xl mx-auto px-6">
        <motion.h1
          className="text-5xl md:text-6xl mb-16 text-center text-[#2B2B2B]"
          style={{ fontFamily: 'var(--font-titles)' }}
          {...fadeIn}
        >
          Tratamento profundo.<br />Não superficial.
        </motion.h1>

        <motion.div
          className="max-w-4xl mx-auto mb-20 text-center"
          {...fadeIn}
          transition={{ delay: 0.2 }}
        >
          <p className="text-2xl mb-8 text-[#B8863B]" style={{ fontFamily: 'var(--font-subtitles)' }}>
            A terapia holística trata o ser humano como um todo.
          </p>

          <div className="grid grid-cols-2 md:grid-cols-5 gap-4 text-lg text-[#2B2B2B]" style={{ fontFamily: 'var(--font-body)' }}>
            {['Espiritual', 'Emocional', 'Mental', 'Físico', 'Energético'].map((level, index) => (
              <motion.div
                key={index}
                className="p-4 bg-white rounded-lg border-2 border-[#C8A46B]"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{
                  scale: 1.05,
                  boxShadow: '0 8px 25px rgba(200, 164, 107, 0.3)'
                }}
              >
                {level}
              </motion.div>
            ))}
          </div>

          <p className="text-xl mt-8 text-[#2B2B2B]" style={{ fontFamily: 'var(--font-body)' }}>
            O objetivo não é aliviar momentaneamente —<br />
            é transformar a causa.
          </p>
        </motion.div>

        <section className="mb-20">
          <motion.h2
            className="text-4xl mb-8 text-center text-[#2B2B2B]"
            style={{ fontFamily: 'var(--font-titles)' }}
            {...fadeIn}
          >
            Como identificar que você precisa
          </motion.h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {needs.map((need, index) => (
              <motion.div
                key={index}
                className="p-6 bg-white rounded-lg border border-[#C8A46B]/30"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{
                  scale: 1.03,
                  boxShadow: '0 8px 30px rgba(200, 164, 107, 0.2)'
                }}
                style={{ fontFamily: 'var(--font-body)' }}
              >
                <div className="flex items-center gap-3">
                  <span className="text-[#C8A46B] text-2xl">✓</span>
                  <p className="text-[#2B2B2B]">{need}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        <section className="mb-20">
          <motion.h2
            className="text-4xl mb-12 text-center text-[#2B2B2B]"
            style={{ fontFamily: 'var(--font-titles)' }}
            {...fadeIn}
          >
            Principais Técnicas
          </motion.h2>

          <div className="grid md:grid-cols-3 gap-8">
            <motion.div
              className="p-8 bg-gradient-to-br from-[#F8F4EC] to-white rounded-2xl"
              style={{ boxShadow: '0 8px 30px rgba(200, 164, 107, 0.15)' }}
              {...fadeIn}
              transition={{ delay: 0.2 }}
              whileHover={{ scale: 1.02, boxShadow: '0 12px 40px rgba(200, 164, 107, 0.25)' }}
            >
              <h3
                className="text-2xl mb-6 text-[#B8863B]"
                style={{ fontFamily: 'var(--font-titles)' }}
              >
                Diagnóstico
              </h3>
              <ul className="space-y-3" style={{ fontFamily: 'var(--font-body)' }}>
                {diagnosticTechniques.map((tech, index) => (
                  <li key={index} className="flex items-center gap-2 text-[#2B2B2B]">
                    <span className="w-2 h-2 bg-[#C8A46B] rounded-full" />
                    {tech}
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              className="p-8 bg-gradient-to-br from-[#F8F4EC] to-white rounded-2xl"
              style={{ boxShadow: '0 8px 30px rgba(200, 164, 107, 0.15)' }}
              {...fadeIn}
              transition={{ delay: 0.3 }}
              whileHover={{ scale: 1.02, boxShadow: '0 12px 40px rgba(200, 164, 107, 0.25)' }}
            >
              <h3
                className="text-2xl mb-6 text-[#B8863B]"
                style={{ fontFamily: 'var(--font-titles)' }}
              >
                Tratamentos
              </h3>
              <ul className="space-y-3" style={{ fontFamily: 'var(--font-body)' }}>
                {treatments.map((treatment, index) => (
                  <li key={index} className="flex items-center gap-2 text-[#2B2B2B]">
                    <span className="w-2 h-2 bg-[#C8A46B] rounded-full" />
                    {treatment}
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              className="p-8 bg-gradient-to-br from-[#F8F4EC] to-white rounded-2xl"
              style={{ boxShadow: '0 8px 30px rgba(200, 164, 107, 0.15)' }}
              {...fadeIn}
              transition={{ delay: 0.4 }}
              whileHover={{ scale: 1.02, boxShadow: '0 12px 40px rgba(200, 164, 107, 0.25)' }}
            >
              <h3
                className="text-2xl mb-6 text-[#B8863B]"
                style={{ fontFamily: 'var(--font-titles)' }}
              >
                Consciência e Autoconhecimento
              </h3>
              <ul className="space-y-3" style={{ fontFamily: 'var(--font-body)' }}>
                {awareness.map((item, index) => (
                  <li key={index} className="flex items-center gap-2 text-[#2B2B2B]">
                    <span className="w-2 h-2 bg-[#C8A46B] rounded-full" />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </section>

        <motion.div
          className="max-w-3xl mx-auto p-12 bg-gradient-to-br from-[#C8A46B] to-[#B8863B] rounded-2xl text-center text-white"
          style={{ boxShadow: '0 20px 60px rgba(200, 164, 107, 0.3)' }}
          {...fadeIn}
        >
          <h3
            className="text-3xl mb-4"
            style={{ fontFamily: 'var(--font-titles)' }}
          >
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
