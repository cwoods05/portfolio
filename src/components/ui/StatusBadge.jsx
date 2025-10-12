import { clsx } from 'clsx';
import { Circle, CheckCircle2, AlertCircle, Clock } from 'lucide-react';

const statusConfig = {
  'Live': {
    icon: CheckCircle2,
    variant: 'bg-emerald-500/10 text-emerald-400 border-emerald-500/30',
    dotColor: 'bg-emerald-400'
  },
  'In Development': {
    icon: Clock,
    variant: 'bg-amber-500/10 text-amber-400 border-amber-500/30',
    dotColor: 'bg-amber-400'
  },
  'Maintenance': {
    icon: AlertCircle,
    variant: 'bg-blue-500/10 text-blue-400 border-blue-500/30',
    dotColor: 'bg-blue-400'
  },
  'Archived': {
    icon: Circle,
    variant: 'bg-slate-500/10 text-slate-400 border-slate-500/30',
    dotColor: 'bg-slate-400'
  }
};

const StatusBadge = ({ status, showIcon = true, showDot = false, className = '' }) => {
  const config = statusConfig[status] || statusConfig['Live'];
  const Icon = config.icon;
  
  return (
    <span className={clsx(
      'inline-flex items-center gap-1.5 px-2.5 py-1 text-xs font-medium rounded-full border transition-all duration-300',
      config.variant,
      className
    )}>
      {showDot && (
        <span className={clsx('w-1.5 h-1.5 rounded-full animate-pulse', config.dotColor)} />
      )}
      {showIcon && <Icon className="w-3.5 h-3.5" />}
      {status}
    </span>
  );
};

export default StatusBadge;

