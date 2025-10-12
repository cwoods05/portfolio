import { clsx } from 'clsx';

const ScrollingMarquee = ({ items, speed = 'normal', direction = 'left', className = '' }) => {
  const speeds = {
    slow: 'animate-[marquee_60s_linear_infinite]',
    normal: 'animate-[marquee_30s_linear_infinite]',
    fast: 'animate-[marquee_15s_linear_infinite]'
  };
  
  const directionClass = direction === 'right' ? '[animation-direction:reverse]' : '';
  
  // Duplicate items for seamless loop
  const duplicatedItems = [...items, ...items];
  
  return (
    <div className={clsx('overflow-hidden whitespace-nowrap', className)}>
      <div className={clsx('inline-flex gap-8', speeds[speed], directionClass)}>
        {duplicatedItems.map((item, index) => (
          <div
            key={`${item.name}-${index}`}
            className="inline-flex items-center justify-center px-6 py-4 bg-slate-800/30 backdrop-blur-sm rounded-lg border border-slate-700/50 hover:border-primary-500/50 transition-all duration-300 min-w-[200px]"
          >
            {item.logo ? (
              <img 
                src={item.logo} 
                alt={item.name}
                className="h-8 w-auto object-contain opacity-70 hover:opacity-100 transition-opacity"
              />
            ) : (
              <span className="text-slate-400 font-semibold">{item.name}</span>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ScrollingMarquee;

