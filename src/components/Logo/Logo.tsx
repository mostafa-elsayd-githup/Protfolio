function Logo() {
return (
    <div className="flex items-center gap-3 cursor-pointer group">
      <div className="w-10 h-10 rounded-full bg-linear-to-tr from-(--color-primary) via-blue-500 to-(--color-accent) flex items-center justify-center shadow-lg shadow-blue-500/30 group-hover:scale-105 transition-transform duration-300">
        <span className="text-white font-black text-2xl tracking-tighter ">
          M
        </span>
      </div>
      <span className="text-white font-bold text-xl tracking-wide group-hover:text-(--color-accent) transition-colors duration-300">
        Mostafa
      </span>
    </div>
  );
}

export default Logo