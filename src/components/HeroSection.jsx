"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";

const slides = [
  {
    id: 1,
    image:
      "https://tahecosmetics.com/trends/wp-content/uploads/2022/06/historia-del-maquillaje.jpg",
    title: "Potenciar tu",
    titleItalic: "belleza",
    subtitle:
      "Ponemos en tus manos toda nuestra experiencia no solo para embellecer, sino también para realzar eso que te hace especial.",
    ctaText: "Sucursales",
    ctaAction: () => {
      const element = document.getElementById("sucursales");
      if (element) element.scrollIntoView({ behavior: "smooth" });
    },
  },
  {
    id: 2,
    image:
      "https://images.unsplash.com/photo-1515377905703-c4788e51af15?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "Celebramos tu",
    titleItalic: "belleza",
    subtitle:
      "Es la elegancia de tus manos mientras sostienes tus sueños. Es la fuerza en tus pies que te lleva hacia tus metas.",
    ctaText: "Servicios",
    ctaAction: () => {
      const element = document.getElementById("servicios");
      if (element) element.scrollIntoView({ behavior: "smooth" });
    },
  },
  {
    id: 3,
    image:
      "https://images.unsplash.com/photo-1600334089648-b0d9d3028eb2?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "Somos tu",
    titleItalic: "spa",
    subtitle: "Potenciamos la belleza que refleja tu estilo y personalidad.",
    ctaText: "Conócenos",
    ctaAction: () => {
      const element = document.getElementById("nosotros");
      if (element) element.scrollIntoView({ behavior: "smooth" });
    },
  },
];

const HeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  return (
    <section id="inicio" className="relative h-screen overflow-hidden">
      {/* Slides */}
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-transform duration-500 ease-in-out ${
            index === currentSlide
              ? "translate-x-0"
              : index < currentSlide
              ? "-translate-x-full"
              : "translate-x-full"
          }`}
        >
          {/* Background Image */}
          <div className="absolute inset-0">
            <Image
              src={slide.image}
              alt={`${slide.title} ${slide.titleItalic}`}
              fill
              className="object-cover"
              priority={index === 0}
            />
            <div className="absolute inset-0 bg-black/20" />
          </div>

          {/* Content */}
          <div className="relative h-full flex items-center justify-center">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
              <div className="max-w-4xl mx-auto text-center text-white">
                <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-display font-medium mb-6 animate-fadeInUp">
                  {slide.title}{" "}
                  <span className="font-display-italic">
                    {slide.titleItalic}
                  </span>
                  {slide.id === 3 && <span className="font-display"> N°1</span>}
                </h1>
                <p className="text-lg sm:text-xl md:text-2xl mb-8 leading-relaxed max-w-3xl mx-auto animate-fadeInUp">
                  {slide.subtitle}
                </p>
                <button
                  onClick={slide.ctaAction}
                  className="inline-flex items-center px-8 py-3 text-lg text-black font-lg bg-white hover:bg-gray-100 transition-colors duration-300 cursor-pointer animate-fadeInUp"
                >
                  {slide.ctaText}
                </button>
              </div>
            </div>
          </div>
        </div>
      ))}

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-10 p-2 text-white hover:text-gray-300 transition-colors duration-200"
        aria-label="Previous slide"
      >
        <ChevronLeft className="w-8 h-8" />
      </button>

      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-10 p-2 text-white hover:text-gray-300 transition-colors duration-200"
        aria-label="Next slide"
      >
        <ChevronRight className="w-8 h-8" />
      </button>

      {/* Slide Indicators */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex space-x-2">
        {slides.map((slide, index) => (
          <button
            key={slide.id}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-200 ${
              index === currentSlide
                ? "bg-white"
                : "bg-white/50 hover:bg-white/75"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
};

export default HeroSection;
