const Footer = () => {
  return (
    <footer className="border-t border-border py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h3 className="font-serif text-xl font-semibold text-foreground">ReRead</h3>
            <p className="font-sans text-sm text-muted-foreground mt-2 leading-relaxed">
              Perfectly imperfect books at prices that make you smile. 
              Giving export-rejected gems a second life.
            </p>
          </div>
          <div>
            <h4 className="font-sans text-sm font-semibold text-foreground uppercase tracking-wider mb-3">Shop</h4>
            <ul className="space-y-2 font-sans text-sm text-muted-foreground">
              <li><a href="#" className="hover:text-primary transition-colors">Imperfect Gems</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">New Arrivals</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Bookmarks</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Accessories</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-sans text-sm font-semibold text-foreground uppercase tracking-wider mb-3">Help</h4>
            <ul className="space-y-2 font-sans text-sm text-muted-foreground">
              <li><a href="#" className="hover:text-primary transition-colors">FAQ</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Shipping</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Returns</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Contact Us</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-sans text-sm font-semibold text-foreground uppercase tracking-wider mb-3">Follow Us</h4>
            <ul className="space-y-2 font-sans text-sm text-muted-foreground">
              <li><a href="#" className="hover:text-primary transition-colors">Instagram</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Twitter</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Pinterest</a></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-border mt-10 pt-6 text-center">
          <p className="font-sans text-xs text-muted-foreground">
            © 2026 ReRead. All rights reserved. Made with ♥ for book lovers.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
