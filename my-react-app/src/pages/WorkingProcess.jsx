import React from "react";

const WorkingProcess = () => {
  const steps = [
    {
      number: 1,
      title: "Evaluare & recomandări profesionale",
      description:
        "Analizăm clădirea, accesul și nevoile tehnice pentru a propune soluția optimă.",
    },
    {
      number: 2,
      title: "Planificare cu proceduri aliniate IRATA",
      description:
        "Stabilim măsurile de siguranță și fluxul de lucru conform principiilor IRATA, pentru o intervenție controlată și eficientă.",
    },
    {
      number: 3,
      title: "Execuție premium",
      description:
        "Lucrăm cu echipamente profesionale și tehnici moderne, cu accent pe siguranță, precizie și detalii.",
    },
    {
      number: 4,
      title: "Verificare finală & raport vizual",
      description:
        "Inspectăm atent lucrarea, confirmăm calitatea și, la cerere, furnizăm poze/video ca dovadă a rezultatului.",
    },
  ];

  return (
    <section id="procesul-de-lucru" className="py-20 px-6 bg-slate-900/50">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-5">
          Procesul de lucru
        </h2>
        <p className="text-lg text-gray-300 text-center mb-16 max-w-3xl mx-auto">
          Lucrăm conform celor mai înalte standarde de siguranță și calitate,
          asigurându-ne că fiecare proiect este realizat cu precizie și
          profesionalism.
        </p>

        <div className="relative">
          {/* Línea vertical del timeline */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-gradient-to-b from-amber-500 via-green-500 to-amber-500 hidden md:block"></div>

          {/* Pasos del timeline */}
          <div className="space-y-12 md:space-y-0">
            {steps.map((step, index) => (
              <div
                key={step.number}
                className={`relative md:flex ${
                  index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                } items-center justify-center md:justify-between`}
              >
                {/* Contenido del paso - se alterna izquierda y derecha en desktop */}
                <div
                  className={`md:w-5/12 ${
                    index % 2 === 0 ? "md:text-right md:pr-12" : "md:pl-12"
                  } mb-8 md:mb-0`}
                >
                  <div className="bg-gradient-to-br from-slate-800 to-green-900/30 p-8 rounded-2xl border border-green-800/30 hover:border-amber-500/50 transition-all duration-300 hover:shadow-xl hover:shadow-amber-900/10">
                    <h3 className="text-2xl font-bold mb-4 text-white">
                      {step.title}
                    </h3>
                    <p className="text-gray-300">{step.description}</p>
                  </div>
                </div>

                {/* Marcador del paso (número) */}
                <div className="absolute left-1/2 transform -translate-x-1/2 md:relative md:left-0 md:transform-none z-10">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-amber-500 to-amber-700 border-4 border-slate-900 flex items-center justify-center shadow-lg">
                    <span className="text-2xl font-bold text-slate-900">
                      {step.number}
                    </span>
                  </div>
                </div>

                {/* Espacio vacío en el lado opuesto (para alternar) */}
                <div className="md:w-5/12 hidden md:block"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkingProcess;
