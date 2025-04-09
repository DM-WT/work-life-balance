"use client";
import CTAButton from "../common/CTAButton";  // Import der CTAButton-Komponente

export default function HeroSection({ title, subtitle, image, onStart }) {
  return (
    <section className="text-center py-20 bg-gray-50">
      <h1 className="text-4xl font-bold mb-4">{title}</h1>
      <p className="text-lg mb-6">{subtitle}</p>
      {image && <img src={image} alt="Hero" className="mx-auto w-48 mb-6" />}
      <CTAButton text="Jetzt starten" onClick={onStart} />
    </section>
  );
}
