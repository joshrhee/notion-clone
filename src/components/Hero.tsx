
import { ArrowRight } from "lucide-react";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center section-padding bg-soft-gray">
      <div className="max-w-7xl mx-auto text-center">
        <span className="inline-block px-4 py-2 bg-white rounded-full text-sm font-medium mb-6 animate-fade-up">
          Introducing Our New Product
        </span>
        <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-fade-up" style={{ animationDelay: "0.2s" }}>
          Create Beautiful Experiences
        </h1>
        <p className="text-lg md:text-xl text-accent max-w-2xl mx-auto mb-8 animate-fade-up" style={{ animationDelay: "0.3s" }}>
          Elevate your digital presence with our premium design solutions that combine elegance with functionality.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-up" style={{ animationDelay: "0.4s" }}>
          <button className="px-8 py-4 bg-black text-white rounded-lg hover-lift flex items-center gap-2">
            Get Started <ArrowRight className="h-4 w-4" />
          </button>
          <button className="px-8 py-4 bg-white rounded-lg hover-lift">
            Learn More
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
