import { BookOpen, Leaf, Sparkles, Tag } from "lucide-react";

const usps = [
  {
    icon: Tag,
    title: "Up to 70% Off",
    description: "Export-rejected books at a fraction of the original price. Same words, same magic.",
  },
  {
    icon: Sparkles,
    title: "Tiny Imperfections Only",
    description: "A slightly toned cover or a misprint on one page — nothing that stops the story.",
  },
  {
    icon: Leaf,
    title: "Sustainable Reading",
    description: "Give these books a home instead of letting them go to waste. Read green.",
  },
  {
    icon: BookOpen,
    title: "Curated Collection",
    description: "Bestsellers, classics, and hidden gems — handpicked and quality-checked.",
  },
];

const USPSection = () => {
  return (
    <section className="py-16 sm:py-24" id="about">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <h2 className="font-serif text-3xl sm:text-4xl font-semibold text-foreground">
            Why <span className="italic text-primary">ReRead</span>?
          </h2>
          <p className="font-sans text-muted-foreground mt-3 max-w-lg mx-auto">
            We rescue export-rejected books and bring them to readers who care about stories, not stickers.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {usps.map((usp, i) => (
            <div
              key={usp.title}
              className="text-center p-6 rounded-2xl bg-card border border-border hover:shadow-md transition-shadow animate-fade-in"
              style={{ animationDelay: `${i * 0.1}s` }}
            >
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 text-primary mb-4">
                <usp.icon className="w-5 h-5" />
              </div>
              <h3 className="font-serif text-lg font-medium text-foreground">{usp.title}</h3>
              <p className="font-sans text-sm text-muted-foreground mt-2 leading-relaxed">
                {usp.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default USPSection;
