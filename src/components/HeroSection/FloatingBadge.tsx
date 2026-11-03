export function FloatingBadge({
  icon,
  className,
}: {
  icon: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={`absolute flex items-center justify-center gap-2.5 rounded-md shadow-xl shadow-black/30  ${className}`}>
      <span className="text-3xl">{icon}</span>
    </div>
  );
}
