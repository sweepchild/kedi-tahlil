import React from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Luke from './components/Luke';
import Yeleli from './components/Yeleli';
import Venus from './components/Venus';
import Mirnav from './components/Mirnav';

function Home() {
  const kediler = [
    { name: 'Luke', path: '/luke', color: 'from-purple-500 to-indigo-600' },
    { name: 'Yeleli', path: '/yeleli', color: 'from-pink-500 to-rose-600' },
    { name: 'Venus', path: '/venus', color: 'from-blue-500 to-cyan-600' },
    { name: 'Mırnav', path: '/mirnav', color: 'from-emerald-500 to-teal-600' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 p-6">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-5xl font-bold text-white text-center mb-4">
          🏥 Kedi Tahlil Sonuçları
        </h1>
        <p className="text-white text-center mb-12 text-lg">
          Kedilerinizin tahlil sonuçlarını görüntülemek için aşağıdan seçim yapın
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {kediler.map((kedi) => (
            <Link
              key={kedi.path}
              to={kedi.path}
              className="bg-white rounded-2xl shadow-2xl p-8 hover:scale-105 transition-transform duration-300"
            >
              <div className="text-center">
                <div className="text-6xl mb-4">🐱</div>
                <h2 className={`text-3xl font-bold bg-gradient-to-r ${kedi.color} bg-clip-text text-transparent`}>
                  {kedi.name}
                </h2>
                <p className="text-gray-600 mt-2">Tahlilleri görüntüle →</p>
              </div>
            </Link>
          ))}
        </div>
        
        <div className="mt-8 text-center">
          <Link to="/" className="text-white hover:underline">
            ← Ana Sayfaya Dön
          </Link>
        </div>
      </div>
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/luke" element={<Luke />} />
        <Route path="/yeleli" element={<Yeleli />} />
        <Route path="/venus" element={<Venus />} />
        <Route path="/mirnav" element={<Mirnav />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
