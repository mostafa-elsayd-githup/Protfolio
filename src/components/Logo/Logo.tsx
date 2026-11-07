function Logo() {
  return (
    <div className="relative flex items-center cursor-pointer group">
      <img src="/public/logo.png" className="left-0 w-15 h-15 " />
      <span className="hidden md:flex text-white font-bold text-xl tracking-wide group-hover:text-(--color-accent) transition-colors duration-300">
        Mostafa
      </span>
    </div>
  );
}

export default Logo;
