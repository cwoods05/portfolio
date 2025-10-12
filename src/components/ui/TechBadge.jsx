import { clsx } from 'clsx';

const TechBadge = ({ 
  children, 
  variant = 'default',
  size = 'md',
  className = ''
}) => {
  const baseStyles = 'inline-flex items-center font-medium rounded-full transition-all duration-300';
  
  const variants = {
    default: 'bg-slate-800/50 text-slate-300 border border-slate-700/50 hover:bg-slate-700/50 hover:border-slate-600/50',
    primary: 'bg-primary-500/10 text-primary-400 border border-primary-500/30 hover:bg-primary-500/20 hover:border-primary-500/50',
    accent: 'bg-accent-500/10 text-accent-400 border border-accent-500/30 hover:bg-accent-500/20 hover:border-accent-500/50',
    success: 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/30 hover:bg-emerald-500/20 hover:border-emerald-500/50',
  };
  
  const sizes = {
    sm: 'px-2 py-0.5 text-xs',
    md: 'px-3 py-1 text-sm',
    lg: 'px-4 py-1.5 text-base'
  };
  
  return (
    <span className={clsx(baseStyles, variants[variant], sizes[size], className)}>
      {children}
    </span>
  );
};

export default TechBadge;

