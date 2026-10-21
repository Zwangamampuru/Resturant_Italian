export default function QuantityStepper({ quantity, onIncrease, onDecrease }) {
  return (
    <div className="flex items-center justify-center gap-4 mt-4">
      <button 
        onClick={onDecrease}
        disabled={quantity <= 0}
        className="w-8 h-8 rounded-full bg-clay text-white font-bold disabled:opacity-50 transition-colors hover:bg-deep-forest"
        aria-label="Decrease quantity"
      >
        -
      </button>
      <span className="font-bold text-lg w-4 text-center">{quantity}</span>
      <button 
        onClick={onIncrease}
        className="w-8 h-8 rounded-full bg-clay text-white font-bold transition-colors hover:bg-deep-forest"
        aria-label="Increase quantity"
      >
        +
      </button>
    </div>
  );
}