const Newsletter = () => {
  return (
    <section className="py-16 sm:py-20 bg-card/50">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 text-center">
        <h2 className="font-serif text-3xl sm:text-4xl font-semibold text-foreground">
          Stay in the loop
        </h2>
        <p className="font-sans text-muted-foreground mt-3">
          New imperfect gems drop every week. Be the first to know.
        </p>
        <form className="flex flex-col sm:flex-row gap-3 mt-8 max-w-md mx-auto" onSubmit={(e) => e.preventDefault()}>
          <input
            type="email"
            placeholder="your@email.com"
            className="flex-1 font-sans text-sm px-5 py-3 rounded-full border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30"
          />
          <button
            type="submit"
            className="font-sans text-sm font-medium px-7 py-3 rounded-full bg-primary text-primary-foreground hover:opacity-90 transition-opacity"
          >
            Subscribe
          </button>
        </form>
      </div>
    </section>
  );
};

export default Newsletter;
