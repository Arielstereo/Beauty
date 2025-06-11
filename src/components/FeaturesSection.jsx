const features = [
  {
    title: "EXPERIENCIA",
    description:
      "Disfrutá de los pequeños lujos en Beauty Spa. Desde que entrás, te sumergís en un ambiente sofisticado pensado para tu máximo disfrute y rejuvenecimiento.",
  },
  {
    title: "COMODIDAD",
    description:
      "Nuestro equipo está acá para ofrecerte una visita relajante e inolvidable. Cada momento es una oportunidad para mimarte y recargar energías. Cuidamos cada detalle de tu experiencia, antes y después del servicio.",
  },
  {
    title: "BIENESTAR",
    description:
      "Tu salud es nuestra prioridad, por eso usamos productos de primera calidad que garantizan tu bienestar. Contamos con un equipo profesional que se asegura de que ninguna clienta pase desapercibida.",
  },
];

const FeaturesSection = () => {
  return (
    <section className="section-padding bg-background py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-medium text-foreground my-4">
            Potenciá tu <span className="font-display-italic">belleza</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          {features.map((feature, index) => {
            return (
              <div key={feature.title} className="text-center group">
                <div className="flex justify-center mb-6"></div>
                <h3 className="text-xl font-semibold text-foreground mb-4 tracking-wide">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
