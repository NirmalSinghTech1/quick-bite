import Header from "./Header";
import HeroContent from "./HeroContent";

export default function LandingSection() {
  return (
    <section className="relative bg-[url('/hero-img.avif')] bg-cover bg-center min-h-screen w-full drop-shadow-xl">
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/55"></div>
      <div className="relative z-10 mx-auto h-screen flex flex-col">
        <Header />
        <HeroContent />
      </div>
    </section>
  );
}
