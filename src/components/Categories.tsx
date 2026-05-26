import imperfectImg from "@/assets/imperfect-books.jpg";
import newBooksImg from "@/assets/new-books.jpg";
import bookmarksImg from "@/assets/bookmarks.jpg";
import accessoriesImg from "@/assets/accessories.jpg";

const categories = [
  { name: "Imperfect Gems", description: "Same story, tiny flaw, big discount", image: imperfectImg },
  { name: "Brand New", description: "Fresh off the press, pristine editions", image: newBooksImg },
  { name: "Bookmarks", description: "Handmade & beautiful page holders", image: bookmarksImg },
  { name: "Accessories", description: "Lights, stands & reader essentials", image: accessoriesImg },
];

const Categories = () => {
  return (
    <section className="py-16 sm:py-24" id="shop">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="font-serif text-3xl sm:text-4xl font-semibold text-foreground">
            Browse by Category
          </h2>
          <p className="font-sans text-muted-foreground mt-3 max-w-md mx-auto">
            From beautifully imperfect reads to pristine new arrivals and cozy accessories.
          </p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {categories.map((cat, i) => (
            <a
              key={cat.name}
              href="#"
              className="group block rounded-2xl overflow-hidden bg-card border border-border hover:shadow-lg transition-all duration-300 animate-fade-in"
              style={{ animationDelay: `${i * 0.1}s` }}
            >
              <div className="aspect-square overflow-hidden">
                <img
                  src={cat.image}
                  alt={cat.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-4">
                <h3 className="font-serif text-lg font-medium text-foreground">{cat.name}</h3>
                <p className="font-sans text-xs text-muted-foreground mt-1">{cat.description}</p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Categories;
