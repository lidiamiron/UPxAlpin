import React, { useState, useEffect } from "react";

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      text: "„Profesioniști, rapizi și extrem de atenți la detalii. Am colaborat cu UPX ALPIN pentru curățarea fațadei de sticlă a clădirii noastre de birouri, iar rezultatul a depășit așteptările. Recomandăm cu încredere echipa pentru orice proiect la înălțime.”",
      author: "Robert T.",
      position: "Manager Operațiuni",
    },
    {
      id: 2,
      text: "„Intervenția la unitatea A/C montată la etajul 7 a fost impecabilă. Totul executat fără bătăi de cap, rapid și în siguranță. Am apreciat comunicarea clară și profesionalismul echipei UPX ALPIN.”",
      author: "Ionuț H.",
      position: "Proprietar",
    },
    {
      id: 3,
      text: "„După curățarea și aplicarea tratamentului ceramic pe panourile noastre solare, randamentul a crescut vizibil. Echipa UPX ALPIN a fost punctuală, eficientă și foarte atentă la detalii.”",
      author: "Cristian R.",
      position: "Manager Complex",
    },
    {
      id: 4,
      text: "„Am apelat la UPX ALPIN pentru curățarea fațadelor și mentenanța sistemului de A/C. Profesionalismul lor, atenția la siguranță și modul de organizare au făcut diferența. Recomand tuturor celor care caută echipe de încredere pentru lucrări la înălțime.”",
      author: "Ioan D.",
      position: "Administrator Complex",
    },
    {
      id: 5,
      text: "„Lucrările la fațade și aplicarea tratamentelor ceramice au fost realizate impecabil. Rezultatul final arată premium, iar comunicarea echipei a fost excelentă pe tot parcursul proiectului.”",
      author: "Elena N.",
      position: "Proprietar clădire office",
    },
    {
      id: 6,
      text: "„Un geam spart la etajul 4 a fost înlocuit rapid și sigur de echipa UPX ALPIN. Lucrările au fost efectuate impecabil, fără riscuri și fără a deranja activitatea din clădire. Recomand cu toată încrederea.”",
      author: "Gabriela R.",
      position: "Administrator clădire",
    },
    {
      id: 7,
      text: "„UPX ALPIN a montat și întreținut bannere și panouri publicitare pe fațadele clădirii noastre. Totul a fost realizat rapid, sigur și cu atenție la detalii. Profesionalismul echipei a făcut ca proiectul să decurgă fără probleme și cu rezultate impecabile.”",
      author: "Daniel N.",
      position: "Publicitate",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsPerPage, setItemsPerPage] = useState(3);

  // Efecto para cambiar itemsPerPage según el tamaño de pantalla
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setItemsPerPage(1);
      } else if (window.innerWidth < 1024) {
        setItemsPerPage(2);
      } else {
        setItemsPerPage(3);
      }
    };

    handleResize(); // Establecer el valor inicial
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const next = () => {
    if (currentIndex < testimonials.length - itemsPerPage) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const prev = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  // Para evitar que el índice se quede fuera de rango al cambiar el tamaño
  useEffect(() => {
    if (currentIndex > testimonials.length - itemsPerPage) {
      setCurrentIndex(Math.max(0, testimonials.length - itemsPerPage));
    }
  }, [itemsPerPage, currentIndex, testimonials.length]);

  return (
    <section id="testimoniale" className="py-20 px-6 bg-slate-900/50">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-5">Testimoniale</h2>
        <p className="text-lg text-gray-300 text-center mb-16 max-w-3xl mx-auto">
          Suntem mândri de feedback-ul clienților noștri. Aici sunt câteva
          dintre recenziile care ne motivează să fim mai buni în fiecare zi.
        </p>

        <div className="relative">
          {/* Contenedor de testimonios */}
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{
                transform: `translateX(-${
                  currentIndex * (100 / itemsPerPage)
                }%)`,
              }}
            >
              {testimonials.map((testimonial) => (
                <div
                  key={testimonial.id}
                  className="flex-shrink-0 px-4"
                  style={{ width: `${100 / itemsPerPage}%` }}
                >
                  <div className="bg-gradient-to-br from-slate-800 to-green-900/20 p-8 rounded-2xl border border-green-800/30 h-full hover:border-amber-500/50 transition-colors duration-300">
                    <div className="mb-6">
                      <div className="flex text-amber-400">
                        {/* Estrellas */}
                        {[...Array(5)].map((_, i) => (
                          <svg
                            key={i}
                            className="w-8 h-8"
                            fill="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                          </svg>
                        ))}
                      </div>
                    </div>
                    <p className="text-gray-300 italic mb-6 text-lg leading-relaxed">
                      {testimonial.text}
                    </p>
                    <div>
                      <p className="font-bold text-white text-lg">
                        {testimonial.author}
                      </p>
                      <p className="text-amber-400">{testimonial.position}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Botones de navegación */}
          {currentIndex > 0 && (
            <button
              onClick={prev}
              className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-2 bg-amber-500 hover:bg-amber-600 text-slate-900 rounded-full w-10 h-10 flex items-center justify-center shadow-lg z-10"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 19l-7-7 7-7"
                />
              </svg>
            </button>
          )}

          {currentIndex < testimonials.length - itemsPerPage && (
            <button
              onClick={next}
              className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-2 bg-amber-500 hover:bg-amber-600 text-slate-900 rounded-full w-10 h-10 flex items-center justify-center shadow-lg z-10"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>
          )}
        </div>

        {/* Indicadores (puntos) */}
        <div className="flex justify-center mt-8">
          {Array.from({
            length: Math.max(1, testimonials.length - itemsPerPage + 1),
          }).map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`mx-1 w-3 h-3 rounded-full ${
                index === currentIndex
                  ? "bg-amber-500"
                  : "bg-gray-600 hover:bg-gray-500"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
