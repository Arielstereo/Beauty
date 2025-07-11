"use client";

import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-background text-foreground">
      {/* Social Media Section */}
      <div className="border-y border-muted-foreground/20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center">
            <p className="text-2xl mb-6">Sé parte de la comunidad BEAUTY</p>
            <p className="text-lg"> Seguinos en @Beauty-Spa</p>
          </div>
        </div>
      </div>

      {/* Contact Section */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Logo */}
        <div className="text-center mt-16 pt-8 ">
          <span className="text-4xl font-bold">BEAUTY SPA</span>
          <div className="flex justify-center items-center gap-4 py-8">
            <button
              onClick={() => scrollToSection("inicio")}
              className="text-muted-foreground hover:text-muted transition-colors duration-200 cursor-pointer"
            >
              INICIO
            </button>
            <button
              onClick={() => scrollToSection("nosotros")}
              className="text-muted-foreground hover:text-muted transition-colors duration-200 cursor-pointer"
            >
              NOSOTROS
            </button>
            <button
              onClick={() => scrollToSection("servicios")}
              className="text-muted-foreground hover:text-muted transition-colors duration-200 cursor-pointer"
            >
              SERVICIOS
            </button>
            <button
              onClick={() => scrollToSection("sucursales")}
              className="text-muted-foreground hover:text-muted transition-colors duration-200 cursor-pointer"
            >
              SUCURSALES
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
