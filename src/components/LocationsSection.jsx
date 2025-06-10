const locations = [
  {
    country: "ARGENTINA",
    cities:
      "Córdoba, Carlos Paz, Villa Allende, Jesus María, Rosario, Bahía Blanca, Neuquén, Salta & Jujuy.",
  },
  {
    country: "ESTADOS UNIDOS",
    cities:
      "Midtown Miami 122 Buena Vista Blvd, Miami, FL 33127.\n\nBrickell Miami 64 SW 10th St, Miami, FL 33130.",
  },
  {
    country: "URUGUAY",
    cities: "Calle 29 (Las Gaviotas) entre 20 y 18, Punta del Este, Uruguay.",
  },
];

const LocationsSection = () => {
  return (
    <section id="sucursales" className="max-w-6xl mx-auto pt-16 lg:pt-48">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-medium text-foreground mb-4">
          Estamos donde vos estás.
        </h2>
        <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
          Seguimos abriendo puertas a espacios increíbles diseñados para realzar
          la belleza auténtica.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
        {locations.map((location, index) => (
          <div
            key={location.country}
            className="text-center p-6 bg-muted/5 hover:bg-muted/10 transition-colors duration-300"
          >
            <h3 className="text-xl font-semibold text-foreground mb-4 tracking-wide">
              {location.country}
            </h3>
            <p className="text-muted-foreground leading-relaxed whitespace-pre-line">
              {location.cities}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default LocationsSection;
