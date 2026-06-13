export default function HeroContent() {
  return (
    <section className="flex-1 flex items-center justify-center w-full">
      <div className="text-center -mt-20 mx-auto max-sm:w-5/6">
        <h1 className="font-manrope text-7xl/normal font-medium max-sm:text-5xl/loose text-shadow-lg">
          Every Bite Packed <br /> with Flavor
        </h1>
        <button className="mt-8 text-lg tracking-wide border-2 backdrop-blur-sm hover:bg-red-700/80 active:bg-red-700/50 transition-colors duration-200 cursor-pointer py-2 px-5 rounded-lg text-shadow-md">
          <a href="#main">Take a Bite</a>
        </button>
      </div>
    </section>
  );
}
