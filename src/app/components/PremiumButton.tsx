import { motion } from 'motion/react';
import { ReactNode } from 'react';

interface PremiumButtonProps {
  children: ReactNode;
  onClick?: () => void;
  variant?: 'primary' | 'secondary';
  className?: string;
}

export function PremiumButton({
  children,
  onClick,
  variant = 'primary',
  className = ''
}: PremiumButtonProps) {
  const isPrimary = variant === 'primary';

  return (
    <motion.button
      onClick={onClick}
      className={`
        inline-flex min-h-12 items-center justify-center rounded-md px-6 py-3
        text-sm font-semibold uppercase tracking-[0.08em] transition-colors sm:px-7
        ${isPrimary
          ? 'bg-[#B58A4A] text-white hover:bg-[#9D743A]'
          : 'border border-white/35 bg-white/10 text-white backdrop-blur hover:bg-white/18'
        }
        ${className}
      `}
      style={{ fontFamily: 'var(--font-body)' }}
      whileHover={{ y: -2 }}
      whileTap={{ scale: 0.98 }}
      transition={{ duration: 0.2 }}
    >
      {children}
    </motion.button>
  );
}
