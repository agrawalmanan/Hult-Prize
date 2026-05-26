import { useState } from "react";
import { Search, ShoppingBag, Heart, Menu, X } from "lucide-react";

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* Logo */}
          <a href="/" className="flex items-center gap-2">
            <span className="font-serif text-2xl sm:text-3xl font-semibold text-foreground tracking-tight">
              ReRead
            </span>
            <span className="hidden sm:inline text-xs font-sans text-muted-foreground tracking-widest uppercase mt-1">
              Books & More
            </span>
          </a>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8 font-sans text-sm tracking-wide">
            <a href="#" className="text-foreground hover:text-primary transition-colors">Imperfect Gems</a>
            <a href="#" className="text-foreground hover:text-primary transition-colors">New Arrivals</a>
            <a href="#" className="text-foreground hover:text-primary transition-colors">Bookmarks</a>
            <a href="#" className="text-foreground hover:text-primary transition-colors">Accessories</a>
          </div>

          {/* Icons */}
          <div className="flex items-center gap-3">
            <button className="p-2 text-foreground hover:text-primary transition-colors" aria-label="Search">
              <Search className="w-5 h-5" />
            </button>
            <button className="p-2 text-foreground hover:text-primary transition-colors" aria-label="Wishlist">
              <Heart className="w-5 h-5" />
            </button>
            <button className="relative p-2 text-foreground hover:text-primary transition-colors" aria-label="Cart">
              <ShoppingBag className="w-5 h-5" />
              <span className="absolute -top-0.5 -right-0.5 w-4 h-4 bg-primary text-primary-foreground text-[10px] font-bold rounded-full flex items-center justify-center">
                2
              </span>
            </button>
            <button
              className="md:hidden p-2 text-foreground"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Menu"
            >
              {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileOpen && (
          <div className="md:hidden pb-4 border-t border-border pt-4 font-sans text-sm space-y-3">
            <a href="#" className="block text-foreground hover:text-primary transition-colors">Imperfect Gems</a>
            <a href="#" className="block text-foreground hover:text-primary transition-colors">New Arrivals</a>
            <a href="#" className="block text-foreground hover:text-primary transition-colors">Bookmarks</a>
            <a href="#" className="block text-foreground hover:text-primary transition-colors">Accessories</a>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
