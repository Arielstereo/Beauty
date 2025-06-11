"use client";
import Image from "next/image";
import { Clock, Calendar } from "lucide-react";
import { useState, useEffect } from "react";

const maniServices = [
  {
    name: "BASIC MANICURE",
    time: "30 minutos",
    duration: "5 a 7 días",
    description:
      "Limado + cutícula + esmaltado + hidratación con crema y suaves masajes.",
  },
  {
    name: "OPI SHINE MANICURE",
    time: "15 minutos",
    duration: "5 a 7 días",
    description: "Basic Manicure + esmaltado opi shine.",
  },
  {
    name: "ESMALTADO SEMIPERMANENTE",
    time: "30 minutos",
    duration: "10 a 14 días",
    description:
      "Limado + cutícula + esmaltado + hidratación con crema y suaves masajes.",
  },
  {
    name: "KAPPING",
    time: "60 minutos",
    duration: "14 días",
    description:
      "Este material es tendencia absoluta! Su éxito radica en que permite que tu uña natural pueda crecer por debajo logrando fortalecerlas! Esmaltado perfecto por mucho más tiempo.",
  },
  {
    name: "SOFT GEL",
    time: "90 minutos",
    duration: "14 días",
    description:
      "Un sistema que llegó para revolucionar el mundo de la manicura. Se aplica sobre tu uña natural, brindando un efecto de extensión, con resultados sorprendentes.",
  },
];

const pediServices = [
  {
    name: "BASIC PEDICURE",
    time: "30 minutos",
    duration: "5 a 14 días",
    description:
      "Limado + limpieza de cutícula + esmaltado a elección + masajes con crema.",
  },
  {
    name: "CLASSIC PEDICURE",
    time: "45 minutos",
    duration: "5 a 14 días",
    description: "Basic Pedicure + Torno para limpiar impurezas.",
  },
  {
    name: "PREMIUM PEDICURE",
    time: "60 minutos",
    duration: "5 a 14 días",
    description: "Classic Pedicure + Masajes con aceites + Toallas calientes.",
  },
];

const beautyServices = [
  {
    name: "PERFILADO DE CEJAS",
    time: "15 minutos",
    duration: "10 días",
    description: "Diseño acorde al rostro + perfilado con pinza/cera",
  },
  {
    name: "THREADING",
    time: "15/30 minutos",
    duration: "10 días",
    description: "Depilación de rostro en zona a elección con hilo.",
  },
  {
    name: "LIFTING DE PESTAÑAS",
    time: "40 minutos",
    duration: "1 mes",
    description:
      "Limpieza de párpado + aplicación de molde y producto para curvar las pestañas.",
  },
  {
    name: "MASAJES",
    time: "45 minutos",
    duration: "-",
    description: "Masajes relajantes y descontracturantes.",
  },
  {
    name: "BRONCEADO",
    time: "15 minutos",
    duration: "14 días",
    description: "Bronceado orgánico o cama solar.",
  },
];

const hairServices = [
  {
    name: "CORTE",
    time: "-",
    duration: "-",
    description: "Realizamos cortes de mujeres, hombres y niños.",
  },
  {
    name: "TRATAMIENTOS DE BACHA",
    time: "-",
    duration: "1 mes",
    description:
      "Tratamientos de pasos exclusivos con las mejores marcas. Priorizamos el cuidado de tu pelo. Diagnóstico sin cargo.",
  },
  {
    name: "NUTRICIÓN",
    time: "-",
    duration: "1 mes",
    description: "Te asesoramos según tu tipo de pelo.",
  },
  {
    name: "MECHAS/BALAYAGE",
    time: "-",
    duration: "2 meses",
    description:
      "Aplicación de mechas o técnica de balayage + Tono o matización para neutralizar tonos no deseados o intensificar el color.",
  },
  {
    name: "COLOR",
    time: "-",
    duration: "1 mes",
    description:
      "Coloración con prestigiosas marcas (puede ser desde raíz o color completo), lavado y brushing.",
  },
];

const combos = [
  {
    name: "Regular",
    services: "Basic Manicure + Basic Pedicure",
    discount: "20% OFF",
  },
  {
    name: "Classic",
    services: "Basic Manicure + Premium pedicure",
    discount: "20% OFF",
  },
  {
    name: "Perfect Pair",
    services: "Basic Manicure Semi + Basic Pedicure",
    discount: "20% OFF",
  },
  {
    name: "Glow up",
    services: "Basic Manicure Semi + Premium pedicure",
    discount: "20% OFF",
  },
  {
    name: "Gel Glam",
    services: "Basic Manicure semi + Basic Manicure semi",
    discount: "20% OFF",
  },
  {
    name: "Trendy",
    services: "Semi Nails + Kapping",
    discount: "20% OFF",
  },
];

const ServiceCard = ({ service }) => (
  <div className="bg-background p-6 border border-gray-100 hover:shadow-lg transition-shadow duration-300">
    <h4 className="text-lg font-semibold text-foreground mb-3">
      {service.name}
    </h4>

    <div className="space-y-2 mb-4">
      {service.time !== "-" && (
        <div className="flex items-center text-sm text-muted-foreground">
          <Clock className="w-4 h-4 mr-2" />
          <span>Turno de {service.time}</span>
        </div>
      )}
      {service.duration !== "-" && (
        <div className="flex items-center text-sm text-muted-foreground">
          <Calendar className="w-4 h-4 mr-2" />
          <span>Duración: {service.duration}</span>
        </div>
      )}
    </div>

    <p className="text-muted-foreground text-sm leading-relaxed mb-4">
      {service.description}
    </p>

    <a
      href={`https://api.whatsapp.com/send?phone=1122334455&text=Hola%20quiero%20reservar%20un%20turno%20para%20el%20servicio%20de%20${encodeURIComponent(
        service.name
      )}`}
      target="_blank"
      className="w-full cursor-pointer px-4 py-2 text-base font-medium text-black bg-white hover:bg-slate-200 transition-colors duration-300"
    >
      Reservar
    </a>
  </div>
);

const ServicesSection = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <section className="section-padding bg-background mt-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-medium text-foreground mb-4">
            Realzá tu belleza natural.
          </h1>
          <nav className="hidden md:flex items-center justify-center space-x-8">
            <button
              onClick={() => scrollToSection("manicure")}
              className="text-slate-300 hover:text-slate-100 transition-colors duration-200 font-semibold cursor-pointer"
            >
              Manicure
            </button>
            <span>|</span>
            <button
              onClick={() => scrollToSection("pedicure")}
              className="text-slate-300 hover:text-slate-100 transition-colors duration-200 font-semibold cursor-pointer"
            >
              Pedicure
            </button>
            <span>|</span>
            <button
              onClick={() => scrollToSection("beauty")}
              className="text-slate-300 hover:text-slate-100 transition-colors duration-200 font-semibold cursor-pointer"
            >
              Cejas
            </button>
            <span>|</span>
            <button
              onClick={() => scrollToSection("hair")}
              className="text-slate-300 hover:text-slate-100 transition-colors duration-200 font-semibold cursor-pointer"
            >
              Pelo
            </button>
            <span>|</span>
            <button
              onClick={() => scrollToSection("combos")}
              className="text-slate-300 hover:text-slate-100 transition-colors duration-200 font-semibold cursor-pointer"
            >
              Combos
            </button>
          </nav>
        </div>

        {/* Mani Section */}
        <div className="mb-20">
          <div className="relative h-64 md:h-80 mb-12 overflow-hidden">
            <Image
              src="https://ext.same-assets.com/3159303757/1734429195.jpeg"
              alt="Manicure Services"
              fill
              className="object-cover"
            />
            <div
              id="manicure"
              className="absolute inset-0 bg-black/40 flex items-center justify-center"
            >
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-medium text-white">
                Manicure
              </h2>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {maniServices.map((service) => (
              <ServiceCard key={service.name} service={service} />
            ))}
          </div>
        </div>

        {/* Pedi Section */}
        <div id="pedicure" className="mb-20">
          <div className="relative h-64 md:h-80 mb-12 overflow-hidden">
            <Image
              src="https://ext.same-assets.com/3159303757/1392127566.jpeg"
              alt="Pedicure Services"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-medium text-white">
                Pedicure
              </h2>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {pediServices.map((service) => (
              <ServiceCard key={service.name} service={service} />
            ))}
          </div>
        </div>

        {/* Beauty Section */}
        <div id="beauty" className="mb-20">
          <div className="relative h-64 md:h-80 mb-12 overflow-hidden">
            <Image
              src="https://ext.same-assets.com/3159303757/3077464467.jpeg"
              alt="Beauty Services"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-medium text-white">
                Cejas
              </h2>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
            {beautyServices.map((service) => (
              <ServiceCard key={service.name} service={service} />
            ))}
          </div>
        </div>

        {/* Hair Section */}
        <div id="hair" className="mb-20">
          <div className="relative h-64 md:h-80 mb-12 overflow-hidden">
            <Image
              src="https://ext.same-assets.com/3159303757/2531108844.jpeg"
              alt="Hair Services"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-medium text-white">
                <span className="font-display-italic">Pelo</span>
              </h2>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
            {hairServices.map((service) => (
              <ServiceCard key={service.name} service={service} />
            ))}
          </div>
        </div>

        {/* Combos Section */}
        <div id="combos" className="mb-20 pt-32">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-display font-medium text-foreground mb-4">
              NUESTROS COMBOS
            </h2>
            <p className="text-lg text-muted-foreground">
              Tenemos descuentos especiales para vos disponibles en nuestros
              locales.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {combos.map((combo) => (
              <div
                key={combo.name}
                className="bg-background p-6 border border-gray-100 hover:shadow-lg transition-shadow duration-300 text-center"
              >
                <h4 className="text-xl font-semibold text-foreground mb-3">
                  {combo.name}
                </h4>
                <p className="text-muted-foreground mb-4">{combo.services}</p>
                <div className="text-2xl font-bold text-accent mb-4">
                  {combo.discount}
                </div>
                <a
                  href={`https://api.whatsapp.com/send?phone=1122334455&text=Hola%20quiero%20reservar%20el%20combo%20${encodeURIComponent(
                    combo.name
                  )}`}
                  target="_blank"
                  className="w-full px-4 py-2 text-base font-medium text-black bg-white hover:bg-slate-300 transition-colors duration-300 mb-2"
                >
                  Obtener
                </a>
              </div>
            ))}
          </div>
        </div>

        {/* VIP Service Section */}
        <div className="relative py-20 bg-gradient-to-r from-primary/10 to-secondary/10 -mx-4 sm:-mx-6 lg:-mx-8 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-medium text-foreground mb-6">
              Servicio VIP.
            </h2>
            <h3 className="text-xl md:text-2xl font-display text-foreground mb-8">
              El poder de tenerlo todo al mismo tiempo.
            </h3>
            <p className="text-lg text-muted-foreground mb-6 max-w-3xl mx-auto">
              En Beauty Spa logramos perfeccionar el arte de la{" "}
              <strong>belleza eficiente</strong> creando un servicio de pedicure
              & manicure simultáneo, que ningún otro salón ofrece.
            </p>
            <p className="text-xl font-semibold text-foreground mb-8">
              <strong>Una experiencia VIP de belleza!</strong>
            </p>
            <a
              href="https://api.whatsapp.com/send?phone=1122334455&text=Hola%20quiero%20reservar%20el%20servicio%20VIP"
              target="_blank"
              className="inline-flex items-center px-8 py-3 text-lg font-medium text-black bg-white hover:bg-slate-300 cursor-pointer transition-colors duration-300"
            >
              Reservar
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
