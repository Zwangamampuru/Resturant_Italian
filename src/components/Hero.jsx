export default function Hero() {
  return (
    <section className="min-h-screen flex flex-col justify-center items-center text-center pt-32 pb-20 px-6 bg-[linear-gradient(rgba(30,58,47,0.65),rgba(30,58,47,0.75)),url('/Image Folder/ItalianFood.jpg')] bg-cover bg-center bg-fixed mb-20">
      <div className="max-w-3xl text-white">
        <h1 className="font-serif text-5xl md:text-7xl leading-tight mb-6 drop-shadow-lg">
          Brewhause Restaurant
        </h1>
        <p className="text-xl italic mb-4 opacity-95 tracking-wide">
          A taste of Italy, one bite at a time.
        </p>
        <p className="text-base md:text-lg opacity-90 font-light leading-relaxed mb-10 max-w-2xl mx-auto">
          Fresh pasta. Wood-fired pizza. Natural wines. Brewhause Restaurant 
          reimagines classic Italian cuisine with a modern twist — bold flavors, 
          beautiful plating, and an atmosphere that feels like dinner at a friend's place in Rome.
        </p>
        <h2 className="text-2xl md:text-3xl text-golden mb-2 font-serif">Join us at the table</h2>
        <p className="opacity-85 mb-8 max-w-lg mx-auto">
          We release tables 30 days in advance. For parties of 6 or more, 
          please call us directly — we'll take care of you.
        </p>
        <button className="bg-golden text-white font-semibold py-3 px-10 rounded-full uppercase tracking-wider hover:bg-yellow-700 transition-all hover:-translate-y-1 shadow-lg">
          Book your table
        </button>
        <p className="mt-5 text-sm opacity-80">or call (555) 347‑2634 · daily from 10am</p>
      </div>
    </section>
  );
}