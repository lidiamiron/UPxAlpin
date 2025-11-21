import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

function App() {
  return (
    <div className="bg-red-500 min-h-screen flex items-center justify-center">
      <div className="bg-white p-8 rounded-lg shadow-lg text-center">
        <h1 className="text-4xl font-bold text-blue-600 mb-4">
          PRUEBA TAILWIND
        </h1>
        <p className="text-gray-700 mb-6">
          Si este texto es gris y el fondo blanco, Tailwind funciona
        </p>
        <div className="space-y-4">
          <button className="bg-green-500 text-white px-6 py-3 rounded hover:bg-green-600">
            Botón Verde
          </button>
          <button className="bg-yellow-500 text-white px-6 py-3 rounded hover:bg-yellow-600">
            Botón Amarillo
          </button>
          <button className="bg-purple-500 text-white px-6 py-3 rounded hover:bg-purple-600">
            Botón Morado
          </button>
        </div>
        <div className="mt-6 p-4 bg-blue-100 border border-blue-300 rounded">
          <p className="text-blue-800 font-semibold">
            Colores básicos de Tailwind funcionando
          </p>
        </div>
      </div>
    </div>
  )
}

export default App