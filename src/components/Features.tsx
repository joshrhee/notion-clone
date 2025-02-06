
import { Monitor, Zap, Shield } from "lucide-react";

const Features = () => {
  const features = [
    {
      icon: <Monitor className="h-8 w-8" />,
      title: "Beautiful Design",
      description: "Crafted with attention to every detail for a premium look and feel.",
    },
    {
      icon: <Zap className="h-8 w-8" />,
      title: "Lightning Fast",
      description: "Optimized performance for the smoothest user experience possible.",
    },
    {
      icon: <Shield className="h-8 w-8" />,
      title: "Secure & Reliable",
      description: "Built with the latest security standards to keep your data safe.",
    },
  ];

  return (
    <section id="features" className="section-padding bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Why Choose Us
          </h2>
          <p className="text-accent max-w-2xl mx-auto">
            Experience the perfect blend of form and function with our carefully crafted features.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className="glass-card rounded-xl p-8 hover-lift"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="mb-6 text-black">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
              <p className="text-accent">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
