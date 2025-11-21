import React from "react";

// Importa todas tus imágenes aquí
import PanouriSolare from "../assets/images/serv-panou-01.jpg";
import CuratareFerestre from "../assets/images/serv-geam-01.jpg";
import AerConditionat from "../assets/images/serv-ac-01.jpg";
import FotoBanner from "../assets/images/portofoliu5.jpg";
import LogoUpXAlpin from "../assets/logos/logo.svg";

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
            <a href="#galerie" className="hover:text-amber-400 transition">
              Galerie
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
              Oferim calitate
              <br />
              la înălțime
            </h1>
            <p className="text-lg text-gray-300 mb-8">
              UPX alpin este specializată în servicii de alpinism utilitar,
              curățare ferestre, montaj, mentenanță la înălțime și inspecții
              tehnice
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
          <h2 className="text-4xl font-bold text-center mb-16">
            Serviciile noastre
          </h2>

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
                Curățare ferestre
                <br /> fațade
              </h3>
              <p className="text-gray-300">
                Curățare profesională pentru clădiri comerciale și rezidențiale.{" "}
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
                Curățare
                <br />
                panouri solare
              </h3>
              <p className="text-gray-300">
                Maximizează performanța panourilor cu o curățare specializată.{" "}
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
                Instalare
                <br /> aer conditionat
              </h3>
              <p className="text-gray-300">
                Montaj complet, testare și mentenanță la înălțime.
              </p>
            </div>
          </div>
        </div>
      </section>

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
      <footer className="bg-slate-900 py-12 px-6 border-t border-green-800/30">
        <div className="max-w-7xl mx-auto text-center text-gray-400">
          <p>&copy; 2024 UPX Alpin. Toate drepturile rezervate.</p>
        </div>
      </footer>
    </div>
  );
}
