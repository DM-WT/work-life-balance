export default function FloatingImage({ src, alt }) {
    return (
      <div className="sticky top-20">
        <img src={src} alt={alt} className="w-32 hover:scale-105 transition" />
      </div>
    );
  }