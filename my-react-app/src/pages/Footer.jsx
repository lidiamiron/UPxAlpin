import React from "react";

const Footer = () => {
  const socialMedia = [
    { name: "Facebook", icon: "📘", url: "https://facebook.com/upxalpin" },
    { name: "Instagram", icon: "📷", url: "https://instagram.com/upxalpin" },
    {
      name: "LinkedIn",
      icon: "💼",
      url: "https://linkedin.com/company/upxalpin",
    },
    { name: "YouTube", icon: "🎬", url: "https://youtube.com/@upxalpin" },
  ];

  const companyInfo = {
    name: "UPX ALPIN SRL",
    registration: "J40/12345/2023",
    taxId: "RO12345678",
    address: "Str. Exemplu, Nr. 10, București",
    phone: "+40 721 234 567",
    email: "office@upxalpin.ro",
  };

  return (
    <footer className="bg-gradient-to-t from-slate-900 to-slate-950 border-t border-green-800/30">
      {/* Sección principal del footer */}
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid md:grid-cols-3 gap-10 mb-12">
          {/* Columna 1: Información de la empresa */}
          <div className="space-y-6">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 border-2 border-amber-500 rotate-45 flex items-center justify-center">
                <div className="w-0 h-0 border-l-6 border-l-transparent border-r-6 border-r-transparent border-b-10 border-b-amber-500 -rotate-45"></div>
              </div>
              <span className="text-xl font-bold text-white">UPX ALPIN</span>
            </div>

            <div className="space-y-3 text-gray-400">
              <p className="flex items-center gap-2">
                <span className="text-amber-500">🏢</span>
                <span>{companyInfo.name}</span>
              </p>
              <p className="flex items-center gap-2">
                <span className="text-amber-500">📋</span>
                <span>Reg. Com: {companyInfo.registration}</span>
              </p>
              <p className="flex items-center gap-2">
                <span className="text-amber-500">💰</span>
                <span>CIF: {companyInfo.taxId}</span>
              </p>
              <p className="flex items-center gap-2">
                <span className="text-amber-500">📍</span>
                <span>{companyInfo.address}</span>
              </p>
            </div>
          </div>

          {/* Columna 2: Enlaces rápidos */}
          <div>
            <h3 className="text-xl font-bold text-white mb-6">
              Link-uri rapide
            </h3>
            <ul className="space-y-4 text-gray-400">
              <li>
                <a
                  href="#servicii"
                  className="hover:text-amber-400 transition-colors"
                >
                  Servicii
                </a>
              </li>
              <li>
                <a
                  href="#portofoliu"
                  className="hover:text-amber-400 transition-colors"
                >
                  Portofoliu
                </a>
              </li>
              <li>
                <a
                  href="#procesul-de-lucru"
                  className="hover:text-amber-400 transition-colors"
                >
                  Procesul de lucru
                </a>
              </li>
              <li>
                <a
                  href="#testimoniale"
                  className="hover:text-amber-400 transition-colors"
                >
                  Testimoniale
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="hover:text-amber-400 transition-colors"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Columna 3: UPX Construct Banner */}
          <div className="bg-gradient-to-br from-amber-900/20 to-green-900/10 border border-amber-800/30 rounded-xl p-6 hover:border-amber-500/50 transition-colors">
            <div className="flex items-start gap-4 mb-4">
              <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-amber-600 to-amber-800 flex items-center justify-center">
                <span className="text-xl">🏗️</span>
              </div>
              <div>
                <h4 className="text-lg font-bold text-white mb-1">
                  UPX Construct
                </h4>
                <div className="inline-flex items-center px-3 py-1 bg-amber-900/30 rounded-full">
                  <span className="w-2 h-2 rounded-full bg-green-500 mr-2 animate-pulse"></span>
                  <span className="text-amber-300 text-sm font-medium">
                    În curând
                  </span>
                </div>
              </div>
            </div>
            <p className="text-gray-300 text-sm leading-relaxed">
              UPX Construct va oferi servicii premium de construcții și
              amenajări, realizate cu aceeași atenție la calitate, siguranță și
              profesionalism ca UPX Alpin. Descoperiți mai multe în curând!
            </p>
            <div className="mt-4 pt-4 border-t border-amber-800/30">
              <p className="text-gray-400 text-xs">
                Abonează-te pentru anunțuri:
              </p>
              <div className="mt-2 flex gap-2">
                <input
                  type="email"
                  placeholder="email@dvs.ro"
                  className="flex-1 bg-slate-800/50 border border-slate-700 rounded-lg px-3 py-2 text-white text-sm focus:outline-none focus:border-amber-500"
                />
                <button className="bg-gradient-to-r from-amber-600 to-amber-700 hover:from-amber-500 hover:to-amber-600 text-white text-sm font-medium px-4 py-2 rounded-lg transition-colors">
                  Abonează
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Línea divisoria */}
        <div className="border-t border-green-800/30 my-8"></div>

        {/* Redes sociales y contacto */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-8 mb-8">
          <div className="text-center md:text-left">
            <h4 className="text-white font-bold mb-3">Contact rapid</h4>
            <div className="space-y-2">
              <p className="flex items-center gap-2 text-gray-400">
                <span className="text-amber-500">📞</span>
                <a
                  href={`tel:${companyInfo.phone}`}
                  className="hover:text-amber-400 transition-colors"
                >
                  {companyInfo.phone}
                </a>
              </p>
              <p className="flex items-center gap-2 text-gray-400">
                <span className="text-amber-500">✉️</span>
                <a
                  href={`mailto:${companyInfo.email}`}
                  className="hover:text-amber-400 transition-colors"
                >
                  {companyInfo.email}
                </a>
              </p>
            </div>
          </div>

          <div>
            <h4 className="text-white font-bold mb-3 text-center md:text-left">
              Urmărește-ne
            </h4>
            <div className="flex gap-4">
              {socialMedia.map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-full bg-gradient-to-br from-slate-800 to-slate-900 border border-slate-700 flex items-center justify-center text-xl hover:from-amber-900/30 hover:to-amber-800/30 hover:border-amber-500/50 hover:scale-110 transition-all"
                  title={social.name}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Línea divisoria */}
        <div className="border-t border-green-800/30 my-8"></div>

        {/* Copyright */}
        <div className="text-center text-gray-500 text-sm">
          <p>©️ 2025 UPX ALPIN — Toate drepturile rezervate</p>
          <p className="mt-2 text-xs">
            Design și dezvoltare realizate cu ❤️ pentru clienții noștri
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
