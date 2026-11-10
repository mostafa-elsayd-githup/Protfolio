function AvailableStauts({ isAvailable }: { isAvailable: boolean }) {
  return (
    <div
      className={`inline-flex items-center gap-2.5 px-1.5 md:px-3.5 py-1.5 rounded-full backdrop-blur-md shadow-sm transition-all duration-300 ${
        isAvailable ? " bg-(--color-backEndIcon)/10" : " bg-rose-500/10"
      }`}
    >
      <div className="relative flex items-center justify-center w-2.5 h-2.5">
        <span
          className={`absolute inline-flex h-full w-full animate-ping rounded-full opacity-75 [animation-duration:2s] ${
            isAvailable ? "bg-(--color-backEndIcon)" : "bg-(--color-error)/60"
          }`}
        />
        <span
          className={`relative inline-flex h-2 w-2 rounded-full ${
            isAvailable ? "bg-(--color-backEndIcon)" : "bg-(--color-error)"
          }`}
        />
      </div>
      <span
        className={`text-xs  font-medium tracking-wide ${
          isAvailable
            ? "text-(--color-backEndIcon)/90"
            : "text-(--color-error)/90"
        }`}
      >
        {isAvailable ? "Available to work" : "Currently busy on projects"}
      </span>
    </div>
  );
}

export default AvailableStauts;
