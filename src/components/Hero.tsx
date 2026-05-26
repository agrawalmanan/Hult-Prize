import heroImage from "@/assets/hero-books.jpg";

const Hero = () => {
  return (
    <section className="relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-20 lg:py-28">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <div className="space-y-6 animate-fade-in">
            <span className="inline-block font-sans text-xs tracking-[0.25em] uppercase text-primary font-medium bg-primary/10 px-4 py-1.5 rounded-full">
              Perfectly Imperfect
            </span>
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-semibold leading-tight text-foreground">
              Beautiful books,<br />
              <span className="text-primary italic">tiny flaws,</span><br />
              big savings.
            </h1>
            <p className="font-sans text-base sm:text-lg text-muted-foreground max-w-md leading-relaxed">
              Discover books rejected by exporters for the tiniest imperfections — a misprint here, 
              a toned cover there. Same stories, fraction of the price.
            </p>
            <div className="flex flex-wrap gap-3 pt-2">
              <a
                href="#shop"
                className="inline-flex items-center gap-2 bg-primary text-primary-foreground font-sans text-sm font-medium px-7 py-3 rounded-full hover:opacity-90 transition-opacity"
              >
                Shop Imperfect Gems
              </a>
              <a
                href="#about"
                className="inline-flex items-center gap-2 border border-border text-foreground font-sans text-sm font-medium px-7 py-3 rounded-full hover:bg-secondary transition-colors"
              >
                Our Story
              </a>
            </div>
          </div>

          <div className="relative animate-fade-in" style={{ animationDelay: "0.2s" }}>
            <div className="rounded-2xl overflow-hidden shadow-lg">
              <img
                src={heroImage}
                alt="Cozy stack of books with tea and flowers"
                className="w-full h-[300px] sm:h-[420px] object-cover"
              />
            </div>
            {/* Floating badge */}
            <div className="absolute -bottom-4 -left-4 bg-background rounded-xl shadow-md px-5 py-3 border border-border">
              <p className="font-serif text-xl font-semibold text-primary">Up to 70% off</p>
              <p className="font-sans text-xs text-muted-foreground">on imperfect copies</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
