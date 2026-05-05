import { motion } from 'motion/react';
import { Phone, Mail, Instagram, MapPin, Clock, Send } from 'lucide-react';
import { PremiumButton } from './PremiumButton';
import { GlowingOrb } from './GlowingOrb';
import { FloatingParticles } from './FloatingParticles';
import { useState } from 'react';
import lucianaProfile from '../../imports/WhatsApp_Image_2020-04-25_at_16.47.18_(2).jpeg';

export function ContactPageRevised() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const [formStatus, setFormStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus('submitting');

    const whatsappMessage = encodeURIComponent(
      `Olá! Vim do site.\n\n*Nome:* ${formData.name}\n*Email:* ${formData.email}\n*Telefone:* ${formData.phone}\n\n*Mensagem:*\n${formData.message}`
    );
    const whatsappUrl = `https://wa.me/5511998234317?text=${whatsappMessage}`;

    // Abrir WhatsApp
    window.open(whatsappUrl, '_blank');

    setFormStatus('success');
    setTimeout(() => {
      setFormData({ name: '', email: '', phone: '', message: '' });
      setFormStatus('idle');
    }, 3000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const fadeIn = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] }
  };

  const contacts = [
    {
      icon: Phone,
      label: 'WhatsApp',
      value: '(11) 99823-4317',
      link: 'https://wa.me/5511998234317',
      color: '#25D366'
    },
    {
      icon: Mail,
      label: 'E-mail',
      value: 'lucicroccia@gmail.com',
      link: 'mailto:lucicroccia@gmail.com',
      color: '#B58A4A'
    },
    {
      icon: Instagram,
      label: 'Instagram',
      value: '@luciana.croccia.donofrio',
      link: 'https://instagram.com/luciana.croccia.donofrio',
      color: '#E1306C'
    }
  ];

  const info = [
    {
      icon: MapPin,
      title: 'Atendimento',
      description: 'Presencial e à distância'
    },
    {
      icon: Clock,
      title: 'Flexibilidade',
      description: 'Agendamento personalizado'
    }
  ];

  return (
    <div className="relative min-h-screen overflow-hidden pb-20 pt-28 sm:pt-32 lg:pb-24">
      <GlowingOrb size={700} blur={150} delay={0} />
      <GlowingOrb size={500} color="#8E6535" blur={120} delay={3} />
      <FloatingParticles />

      <div className="relative z-10 mx-auto max-w-5xl px-4 sm:px-6">
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
            <Phone className="w-4 h-4 text-[#8E6535]" />
            <span className="text-[#8E6535] text-sm" style={{ fontFamily: 'var(--font-body)' }}>
              Entre em Contato
            </span>
          </motion.div>

          <h1
            className="mb-6 text-4xl leading-tight text-[#304238] md:mb-10 md:text-6xl lg:text-7xl"
            style={{ fontFamily: 'var(--font-titles)' }}
          >
            O primeiro passo é<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#B58A4A] to-[#8E6535]">
              decidir olhar para si
            </span>
          </h1>

          <motion.div
            className="mx-auto max-w-3xl space-y-4 md:space-y-6"
            {...fadeIn}
            transition={{ delay: 0.3 }}
          >
            <p className="text-lg leading-relaxed text-[#304238] md:text-2xl" style={{ fontFamily: 'var(--font-body)' }}>
              Se você chegou até aqui, <span className="text-[#8E6535] font-medium">não foi por acaso.</span>
            </p>

            <p className="text-lg leading-relaxed text-[#304238] md:text-2xl" style={{ fontFamily: 'var(--font-body)' }}>
              Algo dentro de você já sabe que precisa de mudança.
            </p>

            <p className="text-xl italic leading-relaxed text-[#8E6535] md:text-2xl" style={{ fontFamily: 'var(--font-subtitles)' }}>
              E essa mudança começa quando você decide se escutar.
            </p>
          </motion.div>
        </motion.div>

        <motion.div
          className="relative mb-12 grid items-center gap-8 md:grid-cols-2"
          {...fadeIn}
          transition={{ delay: 0.4 }}
        >
          <motion.div
            className="relative rounded-lg overflow-hidden"
            style={{ boxShadow: '0 25px 70px rgba(200, 164, 107, 0.3)' }}
            whileHover={{ scale: 1.02 }}
          >
            <img
              src={lucianaProfile}
              alt="Luciana Croccia D'Onofrio"
              className="w-full h-auto object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#B58A4A]/30 to-transparent" />
          </motion.div>

          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl text-[#304238]" style={{ fontFamily: 'var(--font-titles)' }}>
              Estou aqui para te guiar
            </h2>
            <p className="text-xl text-[#8E6535] italic leading-relaxed" style={{ fontFamily: 'var(--font-subtitles)' }}>
              Com mais de 20 anos de experiência
            </p>
            <p className="text-lg text-[#304238] leading-relaxed" style={{ fontFamily: 'var(--font-body)' }}>
              Conduzo processos de transformação profunda através de técnicas holísticas integradas, sempre com diagnóstico preciso e acompanhamento individualizado.
            </p>
            <div className="flex flex-wrap gap-3">
              {['Terapeuta Holística', 'CRTH-BR: 1527', 'Radiestesia', 'Mesa Quântica'].map((tag, i) => (
                <motion.div
                  key={i}
                  className="px-4 py-2 bg-gradient-to-r from-[#B58A4A] to-[#8E6535] text-white rounded-full text-sm"
                  style={{ fontFamily: 'var(--font-body)' }}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.7 + i * 0.1 }}
                  whileHover={{ scale: 1.1, boxShadow: '0 8px 25px rgba(200, 164, 107, 0.4)' }}
                >
                  {tag}
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>

        <motion.div
          className="relative mb-12 overflow-hidden rounded-lg border-2 border-[#B58A4A]/30 bg-gradient-to-br from-white to-[#F7F2EA] p-5 sm:p-8 lg:rounded-lg lg:p-12"
          style={{ boxShadow: '0 30px 80px rgba(200, 164, 107, 0.25)' }}
          {...fadeIn}
          transition={{ delay: 0.5 }}
          whileHover={{ boxShadow: '0 40px 100px rgba(200, 164, 107, 0.35)' }}
        >
          <motion.div
            className="absolute -top-20 -right-20 w-60 h-60 bg-gradient-to-br from-[#B58A4A]/20 to-transparent rounded-full blur-3xl"
            animate={{
              scale: [1, 1.4, 1],
              opacity: [0.4, 0.7, 0.4],
              rotate: [0, 90, 0]
            }}
            transition={{ duration: 8, repeat: Infinity }}
          />

          <div className="relative">
            <h2
              className="mb-8 text-center text-3xl text-[#304238] md:mb-10 md:text-4xl"
              style={{ fontFamily: 'var(--font-titles)' }}
            >
              Preencha o formulário
            </h2>

            <form onSubmit={handleSubmit} className="space-y-6 mb-10">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-[#304238] mb-2" style={{ fontFamily: 'var(--font-body)' }}>
                  Nome completo *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl border-2 border-[#B58A4A]/30 bg-white focus:border-[#B58A4A] focus:outline-none transition-colors"
                  style={{ fontFamily: 'var(--font-body)' }}
                  placeholder="Digite seu nome completo"
                />
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-[#304238] mb-2" style={{ fontFamily: 'var(--font-body)' }}>
                    E-mail *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl border-2 border-[#B58A4A]/30 bg-white focus:border-[#B58A4A] focus:outline-none transition-colors"
                    style={{ fontFamily: 'var(--font-body)' }}
                    placeholder="seu@email.com"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-[#304238] mb-2" style={{ fontFamily: 'var(--font-body)' }}>
                    Telefone / WhatsApp *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl border-2 border-[#B58A4A]/30 bg-white focus:border-[#B58A4A] focus:outline-none transition-colors"
                    style={{ fontFamily: 'var(--font-body)' }}
                    placeholder="(11) 99999-9999"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-[#304238] mb-2" style={{ fontFamily: 'var(--font-body)' }}>
                  Conte-me sobre você, e como posso te ajudar? *
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={6}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl border-2 border-[#B58A4A]/30 bg-white focus:border-[#B58A4A] focus:outline-none transition-colors resize-none"
                  style={{ fontFamily: 'var(--font-body)' }}
                  placeholder="Compartilhe um pouco sobre o que você está sentindo e como posso te ajudar nessa jornada de transformação..."
                />
              </div>

              {formStatus === 'success' && (
                <motion.div
                  className="p-4 bg-green-50 border-2 border-green-200 rounded-xl"
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                >
                  <p className="text-green-700 text-center" style={{ fontFamily: 'var(--font-body)' }}>
                    ✓ Mensagem enviada! Você será redirecionado para o WhatsApp.
                  </p>
                </motion.div>
              )}

              <motion.button
                type="submit"
                disabled={formStatus === 'submitting'}
                className="w-full px-8 py-4 bg-gradient-to-r from-[#B58A4A] to-[#8E6535] text-white rounded-xl font-medium transition-all disabled:opacity-50"
                style={{ fontFamily: 'var(--font-body)', boxShadow: '0 8px 30px rgba(200, 164, 107, 0.4)' }}
                whileHover={{ scale: formStatus === 'submitting' ? 1 : 1.02, boxShadow: '0 12px 40px rgba(200, 164, 107, 0.5)' }}
                whileTap={{ scale: formStatus === 'submitting' ? 1 : 0.98 }}
              >
                <span className="flex items-center justify-center gap-2">
                  {formStatus === 'submitting' ? 'Enviando...' : 'Enviar Mensagem'}
                  <Send className="w-5 h-5" />
                </span>
              </motion.button>
            </form>

            <div className="space-y-6 mb-10">
              {contacts.map((contact, index) => {
                const Icon = contact.icon;
                return (
                  <motion.a
                    key={index}
                    href={contact.link}
                    target="_blank"
                    rel="noopener noreferrer"
                  className="group flex min-w-0 items-center gap-4 rounded-lg border-2 border-[#B58A4A]/20 bg-white p-4 transition-all sm:gap-6 sm:p-6"
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.6 + index * 0.1 }}
                    whileHover={{
                      scale: 1.02,
                      boxShadow: '0 15px 50px rgba(200, 164, 107, 0.3)',
                      borderColor: contact.color,
                      backgroundColor: '#FAFAF9'
                    }}
                  >
                    <motion.div
                      className="relative flex-shrink-0 rounded-xl bg-gradient-to-br from-[#B58A4A] to-[#8E6535] p-4 sm:rounded-lg sm:p-5"
                      whileHover={{ rotate: 360, scale: 1.15 }}
                      transition={{ duration: 0.6 }}
                      style={{ boxShadow: '0 8px 30px rgba(200, 164, 107, 0.4)' }}
                    >
                      <Icon className="w-7 h-7 text-white" />

                      <motion.div
                        className="absolute inset-0 bg-white rounded-lg"
                        initial={{ scale: 0, opacity: 0 }}
                        whileHover={{ scale: 1.5, opacity: 0 }}
                        transition={{ duration: 0.5 }}
                      />
                    </motion.div>

                    <div className="flex-1">
                      <p className="text-sm text-[#8E6535] mb-1" style={{ fontFamily: 'var(--font-body)' }}>
                        {contact.label}
                      </p>
                      <p className="break-words text-base text-[#304238] transition-colors group-hover:text-[#8E6535] sm:text-xl" style={{ fontFamily: 'var(--font-body)', fontWeight: 500 }}>
                        {contact.value}
                      </p>
                    </div>

                    <motion.div
                      className="text-[#B58A4A]"
                      animate={{ x: [0, 5, 0] }}
                      transition={{ duration: 1.5, repeat: Infinity }}
                    >
                      <span className="text-2xl">→</span>
                    </motion.div>
                  </motion.a>
                );
              })}
            </div>

            <div className="grid md:grid-cols-2 gap-6 mb-10">
              {info.map((item, index) => {
                const Icon = item.icon;
                return (
                  <motion.div
                    key={index}
                    className="group p-6 bg-gradient-to-br from-[#EFE5D5]/30 to-white rounded-lg border border-[#B58A4A]/30"
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.9 + index * 0.1 }}
                    whileHover={{
                      scale: 1.05,
                      boxShadow: '0 15px 45px rgba(200, 164, 107, 0.25)'
                    }}
                  >
                    <div className="flex items-center gap-3 mb-2">
                      <motion.div
                        whileHover={{ rotate: 360 }}
                        transition={{ duration: 0.6 }}
                      >
                        <Icon className="w-6 h-6 text-[#B58A4A]" />
                      </motion.div>
                      <h3 className="text-lg text-[#304238]" style={{ fontFamily: 'var(--font-titles)' }}>
                        {item.title}
                      </h3>
                    </div>
                    <p className="text-[#304238]/80" style={{ fontFamily: 'var(--font-body)' }}>
                      {item.description}
                    </p>
                  </motion.div>
                );
              })}
            </div>

            <motion.div
              className="text-center"
              {...fadeIn}
              transition={{ delay: 1.1 }}
            >
              <PremiumButton onClick={() => window.open('https://wa.me/5511998234317', '_blank')}>
                <span className="flex items-center gap-2">
                  <Phone className="w-5 h-5" />
                  Agendar Atendimento pelo WhatsApp
                  <motion.span
                    animate={{ x: [0, 5, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  >
                    →
                  </motion.span>
                </span>
              </PremiumButton>
            </motion.div>
          </div>
        </motion.div>

        <motion.div
          className="relative overflow-hidden rounded-lg bg-gradient-to-br from-[#B58A4A] via-[#8E6535] to-[#B58A4A] p-7 text-center text-white sm:p-10 lg:rounded-lg"
          style={{ boxShadow: '0 30px 80px rgba(200, 164, 107, 0.4)' }}
          {...fadeIn}
          transition={{ delay: 1.3 }}
          whileHover={{ scale: 1.02 }}
        >
          <GlowingOrb size={300} color="#FFFFFF" blur={100} delay={0} />

          <div className="relative z-10">
            <motion.div
              className="inline-block mb-6"
              animate={{
                scale: [1, 1.2, 1],
                rotate: [0, 10, -10, 0]
              }}
              transition={{ duration: 6, repeat: Infinity }}
            >
              <MapPin className="w-12 h-12 mx-auto text-white/90" />
            </motion.div>

            <h3 className="text-2xl mb-4" style={{ fontFamily: 'var(--font-titles)' }}>
              Atendimentos à distância
            </h3>
            <p className="text-lg leading-relaxed max-w-2xl mx-auto" style={{ fontFamily: 'var(--font-body)' }}>
              Todas as técnicas podem ser realizadas remotamente com a <span className="font-medium">mesma eficácia no campo energético</span>, exceto Barras de Access (presencial).
            </p>

            <div className="mt-8 grid md:grid-cols-3 gap-4 text-sm">
              <div className="p-4 bg-white/10 backdrop-blur-sm rounded-xl">
                <p className="text-white/90">→ Mesma eficácia</p>
              </div>
              <div className="p-4 bg-white/10 backdrop-blur-sm rounded-xl">
                <p className="text-white/90">→ Maior comodidade</p>
              </div>
              <div className="p-4 bg-white/10 backdrop-blur-sm rounded-xl">
                <p className="text-white/90">→ Sem limitações geográficas</p>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          className="mt-12 text-center p-8 bg-white/50 backdrop-blur-sm rounded-lg border border-[#B58A4A]/20"
          {...fadeIn}
          transition={{ delay: 1.5 }}
        >
          <p className="text-sm text-[#304238]/60 mb-2" style={{ fontFamily: 'var(--font-body)' }}>
            Terapeuta Holística Registrada
          </p>
          <p className="text-lg text-[#8E6535]" style={{ fontFamily: 'var(--font-body)', fontWeight: 500 }}>
            CRTH-BR: 1527
          </p>
        </motion.div>
      </div>
    </div>
  );
}
