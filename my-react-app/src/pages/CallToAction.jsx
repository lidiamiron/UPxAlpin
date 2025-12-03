import React, { useState } from "react";

const CallToAction = () => {
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
    projectType: "",
  });
  const [files, setFiles] = useState([]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleFileChange = (e) => {
    const selectedFiles = Array.from(e.target.files);
    setFiles(selectedFiles);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí iría la lógica de envío del formulario
    console.log("Formulario enviado:", { ...formData, files });
    alert(
      "Vă mulțumim pentru solicitare! Vă vom contacta în cel mai scurt timp."
    );
    setShowForm(false);
    setFormData({
      name: "",
      phone: "",
      email: "",
      message: "",
      projectType: "",
    });
    setFiles([]);
  };

  const phoneNumber = "+40712345678"; // Reemplazar con número real
  const whatsappNumber = "+40712345678"; // Reemplazar con número real
  const whatsappMessage = "Bună, vreau o ofertă pentru lucrări la înălțime.";

  return (
    <section
      id="contact"
      className="py-20 px-6  bg-slate-900/50 relative overflow-hidden"
    >
      {/* Elementos decorativos de fondo */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-10">
        <div className="absolute -top-20 -left-20 w-64 h-64 rounded-full bg-amber-500/20"></div>
        <div className="absolute -bottom-20 -right-20 w-80 h-80 rounded-full bg-green-500/20"></div>
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Gata să începem proiectul tău?
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-10">
            Contactează-ne pentru o evaluare rapidă și o soluție profesională,
            sigură și premium pentru proiectul tău la înălțime.
          </p>
        </div>

        {/* Botones de acción principales */}
        <div className="flex flex-col md:flex-row gap-6 justify-center mb-12">
          {/* Botón 1: Llamada telefónica */}
          <a
            href={`tel:${phoneNumber}`}
            className="group flex-1 max-w-md mx-auto md:mx-0"
          >
            <div className="bg-gradient-to-r from-green-700 to-green-800 hover:from-green-600 hover:to-green-700 rounded-2xl p-6 text-center border border-green-600/30 hover:border-green-500/50 transition-all duration-300 hover:shadow-2xl hover:shadow-green-900/30 hover:-translate-y-1">
              <div className="flex flex-col md:flex-row items-center justify-center gap-4">
                <div className="w-16 h-16 rounded-full bg-green-600/30 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <span className="text-3xl">📞</span>
                </div>
                <div className="text-left">
                  <h3 className="text-xl font-bold mb-1">Sună acum</h3>
                  <p className="text-green-200 text-sm">
                    Apel direct, rapid și sigur
                  </p>
                  <p className="text-white font-mono mt-2">{phoneNumber}</p>
                </div>
              </div>
            </div>
          </a>

          {/* Botón 2: Formulario de contacto */}
          <button
            onClick={() => setShowForm(true)}
            className="group flex-1 max-w-md mx-auto md:mx-0"
          >
            <div className="bg-gradient-to-r from-amber-700 to-amber-800 hover:from-amber-600 hover:to-amber-700 rounded-2xl p-6 text-center border border-amber-600/30 hover:border-amber-500/50 transition-all duration-300 hover:shadow-2xl hover:shadow-amber-900/30 hover:-translate-y-1">
              <div className="flex flex-col md:flex-row items-center justify-center gap-4">
                <div className="w-16 h-16 rounded-full bg-amber-600/30 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <span className="text-3xl">📩</span>
                </div>
                <div className="text-left">
                  <h3 className="text-xl font-bold mb-1">
                    Cere ofertă / Trimite poze
                  </h3>
                  <p className="text-amber-200 text-sm">
                    Formular complet cu upload pentru fotografii
                  </p>
                </div>
              </div>
            </div>
          </button>

          {/* Botón 3: WhatsApp */}
          <a
            href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
              whatsappMessage
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex-1 max-w-md mx-auto md:mx-0"
          >
            <div className="bg-gradient-to-r from-emerald-700 to-emerald-800 hover:from-emerald-600 hover:to-emerald-700 rounded-2xl p-6 text-center border border-emerald-600/30 hover:border-emerald-500/50 transition-all duration-300 hover:shadow-2xl hover:shadow-emerald-900/30 hover:-translate-y-1">
              <div className="flex flex-col md:flex-row items-center justify-center gap-4">
                <div className="w-16 h-16 rounded-full bg-emerald-600/30 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <span className="text-3xl">💬</span>
                </div>
                <div className="text-left">
                  <h3 className="text-xl font-bold mb-1">WhatsApp</h3>
                  <p className="text-emerald-200 text-sm">
                    Deschide conversație rapidă
                  </p>
                  <p className="text-white text-sm mt-2 italic">
                    "Bună, vreau o ofertă pentru lucrări la înălțime."
                  </p>
                </div>
              </div>
            </div>
          </a>
        </div>

        {/* Información adicional */}
        <div className="text-center">
          <div className="inline-flex items-center justify-center px-6 py-3 bg-gradient-to-r from-slate-800/50 to-slate-900/30 rounded-2xl border border-slate-700/50">
            <div className="w-3 h-3 rounded-full bg-green-500 mr-3 animate-pulse"></div>
            <p className="text-gray-300">
              Răspundem în maxim{" "}
              <span className="text-amber-400 font-bold">24 de ore</span>
            </p>
          </div>
        </div>

        {/* Modal del Formulario */}
        {showForm && (
          <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4">
            <div className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto border border-amber-800/30">
              <div className="p-8">
                <div className="flex justify-between items-center mb-6">
                  <h3 className="text-2xl font-bold">
                    Cere ofertă personalizată
                  </h3>
                  <button
                    onClick={() => setShowForm(false)}
                    className="text-gray-400 hover:text-white text-2xl"
                  >
                    ×
                  </button>
                </div>

                <form onSubmit={handleSubmit}>
                  <div className="grid md:grid-cols-2 gap-6 mb-6">
                    <div>
                      <label className="block text-gray-300 mb-2">
                        Nume și prenume *
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="w-full bg-slate-800/50 border border-slate-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-amber-500"
                        placeholder="Introduceți numele"
                      />
                    </div>

                    <div>
                      <label className="block text-gray-300 mb-2">
                        Telefon *
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        required
                        className="w-full bg-slate-800/50 border border-slate-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-amber-500"
                        placeholder="+40 _________"
                      />
                    </div>

                    <div>
                      <label className="block text-gray-300 mb-2">Email</label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        className="w-full bg-slate-800/50 border border-slate-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-amber-500"
                        placeholder="email@dvs.ro"
                      />
                    </div>

                    <div>
                      <label className="block text-gray-300 mb-2">
                        Tip proiect *
                      </label>
                      <select
                        name="projectType"
                        value={formData.projectType}
                        onChange={handleInputChange}
                        required
                        className="w-full bg-slate-800/50 border border-slate-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-amber-500"
                      >
                        <option value="">Alegeți tipul de lucrare</option>
                        <option value="curatare_fatade">Curățare fațade</option>
                        <option value="panouri_solare">Panouri solare</option>
                        <option value="ac">Instalare A/C</option>
                        <option value="tratamente">Tratamente ceramice</option>
                        <option value="alte">Alte lucrări</option>
                      </select>
                    </div>
                  </div>

                  <div className="mb-6">
                    <label className="block text-gray-300 mb-2">
                      Descrierea proiectului *
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      rows="4"
                      className="w-full bg-slate-800/50 border border-slate-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-amber-500"
                      placeholder="Descrieți nevoile și specificațiile proiectului..."
                    />
                  </div>

                  <div className="mb-8">
                    <label className="block text-gray-300 mb-2">
                      Încărcați fotografii ale clădirii / lucrării
                      <span className="text-sm text-gray-400 ml-2">
                        (max. 5 fișiere)
                      </span>
                    </label>
                    <div className="border-2 border-dashed border-slate-700 rounded-xl p-8 text-center hover:border-amber-500/50 transition-colors">
                      <input
                        type="file"
                        onChange={handleFileChange}
                        multiple
                        accept="image/*"
                        className="hidden"
                        id="fileUpload"
                      />
                      <label
                        htmlFor="fileUpload"
                        className="cursor-pointer flex flex-col items-center"
                      >
                        <span className="text-4xl mb-4">📷</span>
                        <span className="text-amber-400 font-medium">
                          Faceți clic pentru a încărca fotografii
                        </span>
                        <span className="text-gray-400 text-sm mt-2">
                          sau trageți fișierele aici
                        </span>
                      </label>
                      {files.length > 0 && (
                        <div className="mt-4">
                          <p className="text-green-400 font-medium">
                            {files.length} fișier(e) selectate:
                          </p>
                          <ul className="text-sm text-gray-400 mt-2">
                            {files.map((file, index) => (
                              <li key={index}>• {file.name}</li>
                            ))}
                          </ul>
                        </div>
                      )}
                    </div>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-4">
                    <button
                      type="submit"
                      className="flex-1 bg-gradient-to-r from-amber-600 to-amber-700 hover:from-amber-500 hover:to-amber-600 text-slate-900 font-bold py-4 px-8 rounded-lg transition-all hover:scale-105"
                    >
                      Trimite solicitarea
                    </button>
                    <button
                      type="button"
                      onClick={() => setShowForm(false)}
                      className="flex-1 border border-slate-600 hover:bg-slate-800/50 text-white font-bold py-4 px-8 rounded-lg transition-colors"
                    >
                      Anulează
                    </button>
                  </div>
                </form>

                <p className="text-gray-400 text-sm mt-6 text-center">
                  Vă garantăm confidențialitatea datelor și un răspuns rapid.
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default CallToAction;
