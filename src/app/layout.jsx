import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import WspButton from "@/components/WspButton";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Beauty Spa | Spa de Manos y Pies",
  description:
    "Descubre Beauty Spa, un oasis de tranquilidad y cuidado personal con más de 30 salones en Argentina, Uruguay y Miami. Reserva tu cita para una experiencia de belleza única.",
  keywords:
    "manicura, pedicura, spa, belleza, uñas, cejas, hair, beauty, nails",
  openGraph: {
    title: "Beauty Spa | Spa de Manos y Pies",
    description:
      "Descubre Beauty Spa, un oasis de tranquilidad y cuidado personal con más de 30 salones en Argentina, Uruguay y Miami.",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Header />
        {children}
        <WspButton />
      </body>
    </html>
  );
}
