import { Heart } from "lucide-react";

interface Product {
  id: number;
  title: string;
  author: string;
  originalPrice: number;
  price: number;
  tag?: string;
  image: string;
}

const products: Product[] = [
  {
    id: 1,
    title: "The Midnight Library",
    author: "Matt Haig",
    originalPrice: 599,
    price: 199,
    tag: "Imperfect",
    image: "https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=400&h=560&fit=crop",
  },
  {
    id: 2,
    title: "Atomic Habits",
    author: "James Clear",
    originalPrice: 499,
    price: 169,
    tag: "Imperfect",
    image: "https://images.unsplash.com/photo-1512820790803-83ca734da794?w=400&h=560&fit=crop",
  },
  {
    id: 3,
    title: "The Alchemist",
    author: "Paulo Coelho",
    originalPrice: 350,
    price: 350,
    image: "https://images.unsplash.com/photo-1543002588-bfa74002ed7e?w=400&h=560&fit=crop",
  },
  {
    id: 4,
    title: "Where the Crawdads Sing",
    author: "Delia Owens",
    originalPrice: 450,
    price: 149,
    tag: "Imperfect",
    image: "https://images.unsplash.com/photo-1495446815901-a7297e633e8d?w=400&h=560&fit=crop",
  },
  {
    id: 5,
    title: "It Ends with Us",
    author: "Colleen Hoover",
    originalPrice: 399,
    price: 139,
    tag: "Imperfect",
    image: "https://images.unsplash.com/photo-1524578271613-d550eacf6090?w=400&h=560&fit=crop",
  },
  {
    id: 6,
    title: "Ikigai",
    author: "Héctor García",
    originalPrice: 299,
    price: 299,
    tag: "New",
    image: "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?w=400&h=560&fit=crop",
  },
];

const FeaturedProducts = () => {
  return (
    <section className="py-16 sm:py-24 bg-card/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between mb-10">
          <div>
            <h2 className="font-serif text-3xl sm:text-4xl font-semibold text-foreground">
              Picked for You
            </h2>
            <p className="font-sans text-muted-foreground mt-2">
              Our most loved imperfect gems & new arrivals
            </p>
          </div>
          <a
            href="#"
            className="hidden sm:inline-flex font-sans text-sm text-primary hover:underline underline-offset-4"
          >
            View all →
          </a>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 sm:gap-5">
          {products.map((product, i) => (
            <div
              key={product.id}
              className="group animate-fade-in"
              style={{ animationDelay: `${i * 0.08}s` }}
            >
              <div className="relative rounded-xl overflow-hidden bg-secondary aspect-[3/4] mb-3">
                <img
                  src={product.image}
                  alt={product.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <button
                  className="absolute top-2 right-2 p-1.5 bg-background/80 backdrop-blur-sm rounded-full text-foreground hover:text-primary transition-colors"
                  aria-label="Add to wishlist"
                >
                  <Heart className="w-4 h-4" />
                </button>
                {product.tag && (
                  <span
                    className={`absolute top-2 left-2 font-sans text-[10px] font-semibold tracking-wider uppercase px-2.5 py-1 rounded-full ${
                      product.tag === "Imperfect"
                        ? "bg-primary text-primary-foreground"
                        : "bg-accent text-accent-foreground"
                    }`}
                  >
                    {product.tag}
                  </span>
                )}
              </div>
              <h3 className="font-serif text-sm font-medium text-foreground leading-tight line-clamp-1">
                {product.title}
              </h3>
              <p className="font-sans text-xs text-muted-foreground mt-0.5">{product.author}</p>
              <div className="flex items-center gap-2 mt-1.5">
                <span className="font-sans text-sm font-semibold text-primary">₹{product.price}</span>
                {product.originalPrice > product.price && (
                  <span className="font-sans text-xs text-muted-foreground line-through">
                    ₹{product.originalPrice}
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;
