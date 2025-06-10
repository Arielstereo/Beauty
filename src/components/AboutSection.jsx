import Image from "next/image";

const AboutSection = () => {
  return (
    <section id="nosotros" className="section-padding bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Image */}
        <div className="relative h-96 md:h-[500px] mb-16 overflow-hidden">
          <Image
            src="https://images.unsplash.com/photo-1488345979593-09db0f85545f?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Nails & Co Universe"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-medium text-white text-center">
              Somos <span className="font-display-italic">BEAUTY</span>
            </h1>
          </div>
        </div>

        {/* Story Section */}
        <div className="max-w-4xl mx-auto mb-20">
          <div className="text-lg md:text-xl leading-relaxed text-muted-foreground space-y-6">
            <p>
              Durante más de una década,{" "}
              <strong className="text-foreground font-semibold">
                Nails & Co
              </strong>
              . se ha comprometido a realzar la belleza única y elevar la
              experiencia de cuidado personal a un momento de placer y
              relajación. Nuestra historia comenzó con la visión de crear
              conexiones genuinas con nuestras clientas en un ambiente acogedor,
              donde la atención al detalle y el servicio excepcional se
              encuentran. Hoy en día, seguimos trabajando para ofrecer el mejor
              servicio de belleza en la industria.
            </p>
            <p>
              Nos enfocamos en utilizar solo los mejores productos y técnicas
              para lograr resultados impresionantes, priorizando la salud y el
              bienestar de tus uñas, cabello y piel. Con 30 salones en{" "}
              <strong className="text-foreground font-semibold">
                Argentina, Uruguay y Miami
              </strong>
              , esperamos seguir realzando la belleza natural y el bienestar por
              muchos años más. En{" "}
              <strong className="text-foreground font-semibold">
                Nails & Co
              </strong>
              ., el lujo se encuentra en la sutileza de los pequeños placeres y
              en la creación de momentos memorables que fomentan nuestro sentido
              de comunidad.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
