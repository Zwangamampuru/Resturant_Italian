// 1. IMPORT THE IMAGE HERE
import aboutBg from '../assets/restu.jpeg';

export default function About() {
  return (
    // 2. USE THE IMPORTED VARIABLE IN THE STYLE TAG
    <section 
      className="relative bg-cover bg-center bg-fixed py-20 px-6 border-y border-golden/30"
      style={{ backgroundImage: `url(${aboutBg})` }}
    >
      <div className="absolute inset-0 bg-cream/95"></div>
      
      <div className="relative z-10 max-w-6xl mx-auto">
        <h2 className="text-center font-serif text-4xl text-deep-forest mb-12 relative after:content-[''] after:block after:w-20 after:h-1 after:bg-golden after:mx-auto after:mt-4 after:rounded">
          About Us
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div className="text-center p-8 bg-white/80 backdrop-blur-sm rounded-2xl border border-golden/20 shadow-sm hover:-translate-y-1 transition-transform">
            <h4 className="text-xl text-deep-forest mb-4 font-serif">Leonardo D'Angelo</h4>
            <p className="italic text-sm text-gray-600 leading-relaxed mb-4">"Service is the technical delivery of a product. Hospitality is how the delivery of that product makes the recipient feel."</p>
            <h5 className="font-semibold text-xs uppercase tracking-widest text-golden">Owner</h5>
          </div>
          <div className="text-center p-8 bg-white/80 backdrop-blur-sm rounded-2xl border border-golden/20 shadow-sm hover:-translate-y-1 transition-transform">
            <h4 className="text-xl text-deep-forest mb-4 font-serif">Mattia Bonetii</h4>
            <p className="italic text-sm text-gray-600 leading-relaxed mb-4">"Good food is very often, even most often, simple food."</p>
            <h5 className="font-semibold text-xs uppercase tracking-widest text-golden">Manager</h5>
          </div>
          <div className="text-center p-8 bg-white/80 backdrop-blur-sm rounded-2xl border border-golden/20 shadow-sm hover:-translate-y-1 transition-transform">
            <h4 className="text-xl text-deep-forest mb-4 font-serif">Francesco Ricci</h4>
            <p className="italic text-sm text-gray-600 leading-relaxed mb-4">"Cooking is like painting or writing a song. Just as there are only so many notes or colors, there are only so many flavors — it's how you combine them that sets you apart."</p>
            <h5 className="font-semibold text-xs uppercase tracking-widest text-golden">Head Chef</h5>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row justify-center gap-8 sm:gap-16 py-8 border-y border-golden/40 max-w-lg mx-auto text-center">
          <div>
            <h4 className="font-medium text-sm uppercase tracking-wider text-clay mb-1">Starting Time</h4>
            <p className="font-serif text-3xl text-deep-forest">09:00</p>
          </div>
          <div>
            <h4 className="font-medium text-sm uppercase tracking-wider text-clay mb-1">Closing Time</h4>
            <p className="font-serif text-3xl text-deep-forest">21:00</p>
          </div>
        </div>
      </div>
    </section>
  );
}