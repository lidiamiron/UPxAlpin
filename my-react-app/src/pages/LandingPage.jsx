import React from "react";

// Importa todas tus imágenes aquí
import PanouriSolare from "../assets/images/serv-panou-01.jpg";
import CuratareFerestre from "../assets/images/serv-geam-01.jpg";
import AerConditionat from "../assets/images/serv-ac-01.jpg";
import FotoBanner from "../assets/images/portofoliu5.jpg";
import LogoUpXAlpin from "../assets/logos/logo.svg";
import AboutSection from "./AboutSection";
import WorkingProcess from "./WorkingProcess";
import Testimonials from "./Testimonials";
import CallToAction from "./CallToAction";
import Footer from "./Footer";

export default function UpxAlpinLanding() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-green-900 to-slate-900 text-white">
      {/* Header */}
      <header className="fixed top-0 w-full z-50 bg-slate-900/80 backdrop-blur-sm border-b border-green-800/30">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 border-2 border-amber-500 rotate-45 flex items-center justify-center">
              <div className="w-0 h-0 border-l-8 border-l-transparent border-r-8 border-r-transparent border-b-12 border-b-amber-500 -rotate-45"></div>
            </div>
            <span className="text-xl font-bold">UPX ALPIN</span>
          </div>

          <nav className="hidden md:flex gap-8">
            <a href="#servicii" className="hover:text-amber-400 transition">
              Servicii
            </a>
            <a href="#Portofoliu" className="hover:text-amber-400 transition">
              Portofoliu
            </a>
            <a href="#despre" className="hover:text-amber-400 transition">
              Despre
            </a>
            <a href="#contact" className="hover:text-amber-400 transition">
              Contact
            </a>
          </nav>

          <button className="bg-amber-500 hover:bg-amber-600 text-slate-900 font-semibold px-6 py-2 rounded-lg transition">
            Cere ofertă
          </button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              Servicii profesionale la înălțime
              <br />
              pentru clădiri fără compromisuri
            </h1>
            <p className="text-lg text-gray-300 mb-8">
              Experți în lucrări la înălțime, mentenanță fațade și intervenții
              tehnice pe clădiri. UPX ALPIN lucrează conform standardelor
              internaționale IRATA, asigurând siguranță totală și rezultate
              premium.
            </p>
            <div className="flex flex-wrap gap-4">
              <button className="bg-amber-500 hover:bg-amber-600 text-slate-900 font-semibold px-8 py-3 rounded-lg transition">
                Cere ofertă
              </button>
              <button className="border border-white hover:bg-white/10 px-8 py-3 rounded-lg transition">
                Vezi serviciile
              </button>
            </div>
          </div>

          <div className="relative">
            <div className="aspect-square rounded-2xl overflow-hidden shadow-2xl">
              <img
                src={FotoBanner}
                alt="Alpinist la înălțime"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="servicii" className="py-20 px-6 bg-slate-900/50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-5">
            Serviciile noastre
          </h2>
          <p className="text-lg text-gray-300 mb-16">
            Intervenim rapid și eficient acolo unde alte firme nu pot ajunge. Ne
            desfășurăm activitatea conform procedurilor IRATA, garantând
            calitate, precizie și protecție maximă. Curățăm, întreținem și
            protejăm clădirile business-urilor din toată țara. Profesionalism la
            înălțime, vizibil în fiecare detaliu.
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Servicio 1 */}
            <div className="bg-gradient-to-br from-slate-800 to-green-900/30 p-8 rounded-2xl border border-green-800/30 hover:border-amber-500/50 transition">
              <div className="w-full h-48 rounded-lg overflow-hidden mb-6">
                <img
                  src={CuratareFerestre}
                  alt="Curățare ferestre la înălțime"
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-2xl font-bold mb-4">
                Curățare Fațade &
                <br /> Tratamente Ceramice Profesionale
              </h3>
              <p className="text-gray-300">
                Fațade impecabile și protecție premium pentru suprafețe moderne.{" "}
              </p>
            </div>

            {/* Servicio 2 - Usando imagen importada */}
            <div className="bg-gradient-to-br from-slate-800 to-green-900/30 p-8 rounded-2xl border border-green-800/30 hover:border-amber-500/50 transition">
              <div className="w-full h-48 rounded-lg overflow-hidden mb-6">
                <img
                  src={PanouriSolare}
                  alt="Panouri solare la înălțime"
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-2xl font-bold mb-4">
                Curățare & Protecție Panouri Solare / Fotovoltaice
              </h3>
              <p className="text-gray-300">
                Randament maxim, protecție ceramică opțională și întreținere pe
                tot anul.{" "}
              </p>
            </div>

            {/* Servicio 3 */}
            <div className="bg-gradient-to-br from-slate-800 to-green-900/30 p-8 rounded-2xl border border-green-800/30 hover:border-amber-500/50 transition">
              <div className="w-full h-48 rounded-lg overflow-hidden mb-6">
                <img
                  src={AerConditionat}
                  alt="Lucrări speciale la înălțime"
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-2xl font-bold mb-4">
                Instalare & Mentenanță A/C
                <br /> în Zone Greu Accesibile
              </h3>
              <p className="text-gray-300">
                Servicii tehnice sigure și rapide pentru clădiri.
              </p>
            </div>
          </div>
          <a href="#">
            <p className="text-center mt-6 text-gray-300">
              Vezi toate serviciile noastre aici
            </p>
          </a>
        </div>
      </section>
      <AboutSection />
      <WorkingProcess />
      <Testimonials />

      <CallToAction />

      <section id="about-us" className="py-20 px-6 bg-slate-900/50"></section>

      {/* Gallery Section */}
      <section id="galerie" className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16">
            Galerie foto / video
          </h2>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="aspect-square rounded-2xl overflow-hidden hover:scale-105 transition-transform cursor-pointer shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=600&h=600&fit=crop"
                alt="Clădire modernă"
                className="w-full h-full object-cover"
              />
            </div>

            <div className="aspect-square rounded-2xl overflow-hidden hover:scale-105 transition-transform cursor-pointer shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1545259741-2ea3ebf61fa3?w=600&h=600&fit=crop"
                alt="Alpinist profesionist"
                className="w-full h-full object-cover"
              />
            </div>

            <div className="aspect-square rounded-2xl overflow-hidden hover:scale-105 transition-transform cursor-pointer shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=600&h=600&fit=crop"
                alt="Echipament alpinism"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
}
