import { clsx } from 'clsx';

const SectionHeader = ({ 
  title, 
  subtitle, 
  align = 'center',
  className = '' 
}) => {
  const alignments = {
    left: 'text-left',
    center: 'text-center',
    right: 'text-right'
  };
  
  return (
    <div className={clsx('mb-12 md:mb-16', alignments[align], className)}>
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
        <span className="text-gradient">{title}</span>
      </h2>
      {subtitle && (
        <p className="text-lg md:text-xl text-slate-400 max-w-2xl mx-auto">
          {subtitle}
        </p>
      )}
      <div className="mt-6 flex items-center justify-center gap-2">
        <div className="h-1 w-12 bg-gradient-to-r from-primary-500 to-accent-500 rounded-full" />
        <div className="h-1 w-4 bg-gradient-to-r from-accent-500 to-primary-500 rounded-full" />
      </div>
    </div>
  );
};

export default SectionHeader;

