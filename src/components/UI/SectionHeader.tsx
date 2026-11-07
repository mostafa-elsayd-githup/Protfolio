function SectionHeader({header}:{header: string}) {
  return (
    <div className="flex items-center gap-3">
      <div className="relative flex items-center justify-center w-3 h-3">
        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-(--color-primary) opacity-75" />
        <span className="relative inline-flex h-2 w-2 rounded-full bg-(--color-primary)" />
      </div>
      <h4 className="text-sm bg-linear-to-r from-(--color-primary) to-(--color-accent) bg-clip-text text-transparent">
        {header}
      </h4>
    </div>
  );
}

export default SectionHeader;
