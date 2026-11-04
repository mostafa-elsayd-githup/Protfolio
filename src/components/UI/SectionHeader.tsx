function SectionHeader( header: string ) {
  return (
    <div className="flex items-center gap-3">
      <span className="flex bg-(--color-primary) w-2 h-2 rounded-full animate-pulse shadow-sky-300" />
      <h4 className="text-sm bg-linear-to-r from-(--color-primary) to-(--color-accent) bg-clip-text text-transparent">{header}</h4>
    </div>
  );
}

export default SectionHeader;
