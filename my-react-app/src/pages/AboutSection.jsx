import React from "react";
import { Shield, Award, Sparkles, Zap, Users } from "lucide-react";

export default function AboutSection() {
  const features = [
    {
      icon: <Users className="w-8 h-8" />,
      title: "Echipă modernă și capabilă",
      description:
        "Ne evaluăm constant ca fiind una dintre cele mai moderne și capabile echipe de intervenții la înălțime din Transilvania și zona de Vest/Nord-Vest a României. Investim continuu în pregătire, echipamente și proceduri pentru a oferi servicii premium și sigure.",
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Proceduri aliniate standardelor IRATA",
      description:
        "Ne desfășurăm activitatea după proceduri și metode inspirate din standardele internaționale IRATA, aplicând aceleași principii de siguranță, control și eficiență.",
      note: "Se menționează autoritatea fără a afirma că suntem certificați.",
    },
    {
      icon: <Sparkles className="w-8 h-8" />,
      title: "Execuție premium, rezultate vizibile imediat",
      description:
        "Folosim echipamente profesionale și tehnici avansate pentru a atinge un nivel superior de curățenie și protecție a suprafețelor.",
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Intervenții rapide & flexibile",
      description:
        "Gestionăm proiecte complexe — fațade, A/C greu accesibile, panouri solare — cu eficiență și minim de disconfort pentru client.",
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: "Transparență și încredere",
      description:
        "Comunicăm clar, evaluăm corect și respectăm fiecare etapă a proiectului, fără compromisuri la calitate.",
    },
  ];

  return (
    <section id="despre" className="py-20 px-6 bg-slate-900/50">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            De ce UPX ALPIN?
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            La UPX ALPIN, punem pe primul loc siguranța, profesionalismul și
            calitatea premium a lucrărilor la înălțime.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-slate-800 to-green-900/30 p-8 rounded-2xl border border-green-800/30 hover:border-amber-500/50 transition-all duration-300 hover:transform hover:scale-105 group"
            >
              {/* Icon */}
              <div className="w-14 h-14 bg-gradient-to-br from-amber-500 to-amber-600 rounded-xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
                <div className="text-slate-900">{feature.icon}</div>
              </div>

              {/* Title */}
              <h3 className="text-xl font-bold mb-4 text-white">
                {feature.title}
              </h3>

              {/* Description */}
              <p className="text-gray-300 leading-relaxed">
                {feature.description}
              </p>

              {/* Optional Note */}
              {feature.note && (
                <p className="text-sm text-gray-400 italic mt-4 pt-4 border-t border-green-800/30">
                  {feature.note}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
