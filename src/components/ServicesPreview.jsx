"use client";

import Image from "next/image";
import Link from "next/link";

const services = [
  {
    id: "mani",
    title: "MANICURE",
    description: "Dejá que tus uñas brillen.",
    image: "https://ext.same-assets.com/3159303757/1097601419.jpeg",
  },
  {
    id: "pedi",
    title: "PEDICURE",
    description: "Disfrutá de un tratamiento relajante.",
    image: "https://ext.same-assets.com/3159303757/4098346276.jpeg",
  },
  {
    id: "beauty",
    title: "BEAUTY",
    description: "Preparate para brillar.",
    image: "https://ext.same-assets.com/3159303757/3583666418.jpeg",
  },
  {
    id: "pelu",
    title: "PELUQUERÍA",
    description: "Dejá que tu pelo hable por vos.",
    image: "https://ext.same-assets.com/3159303757/1416057643.jpeg",
  },
];

const ServicesPreview = () => {
  return (
    <section id="servicios" className="section-padding bg-muted/10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-medium text-foreground pt-32 pb-8">
            Nuestros <span className="font-display-italic">servicios</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {services.map((service) => (
            <div key={service.id} className="group cursor-pointer">
              <div className="relative overflow-hidden bg-background shadow-sm hover:shadow-lg transition-all duration-300 border border-slate-400 rounded-lg">
                <div className="aspect-[4/3] relative">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors duration-300" />
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-semibold text-foreground mb-2 tracking-wide">
                    {service.title}
                  </h3>
                  <p className="text-muted-background leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Link
            href="/servicios"
            className="inline-flex items-center px-8 py-4 mb-12 text-lg font-medium bg-foreground text-background hover:bg-slate-300 transition-colors duration-300"
          >
            Agendá tu turno
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ServicesPreview;
