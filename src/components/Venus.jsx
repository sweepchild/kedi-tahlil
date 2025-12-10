import React from 'react';
import { Link } from 'react-router-dom';

const Venus = () => {
  const StatusBadge = ({ status }) => {
    const colors = {
      'N': 'bg-green-100 text-green-800',
      'H': 'bg-red-100 text-red-800',
      'L': 'bg-yellow-100 text-yellow-800',
      '-': 'bg-gray-100 text-gray-800'
    };
    const labels = { 'N': 'Normal', 'H': 'Yüksek', 'L': 'Düşük', '-': '-' };
    return <span className={`px-2 py-1 rounded-full text-xs font-semibold ${colors[status]}`}>{labels[status]}</span>;
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-500 to-cyan-600 p-6">
      <div className="max-w-7xl mx-auto">
        <div className="mb-6">
          <Link to="/" className="text-white hover:underline">← Ana Sayfaya Dön</Link>
        </div>
        
        <h1 className="text-4xl font-bold text-white text-center mb-2">🐱 Venus</h1>
        <p className="text-white text-center mb-8">Yaş: 0</p>
        
        <div className="bg-white rounded-2xl shadow-2xl p-6 mb-8">
          <h2 className="text-2xl font-bold text-blue-600 mb-4 border-b-2 border-blue-600 pb-2">
            Glukoz Takibi
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-red-50 p-4 rounded-lg">
              <div className="text-sm text-gray-600">17.09.2025</div>
              <div className="text-3xl font-bold text-red-600">360</div>
              <div className="text-sm text-gray-600">mg/dL</div>
              <StatusBadge status="H" />
            </div>
            <div className="bg-green-50 p-4 rounded-lg">
              <div className="text-sm text-gray-600">31.10.2025</div>
              <div className="text-3xl font-bold text-green-600">129</div>
              <div className="text-sm text-gray-600">mg/dL</div>
              <StatusBadge status="N" />
            </div>
          </div>
          <div className="mt-4 p-4 bg-green-100 rounded-lg">
            <p className="text-green-800 font-semibold">
              ✅ Glukoz seviyesi 231 puan düştü! (360 → 129)
            </p>
            <p className="text-sm text-green-700 mt-2">
              Referans Aralık: 71.0 - 148.0 mg/dL
            </p>
          </div>
          <div className="mt-4 p-4 bg-blue-50 rounded-lg">
            <p className="text-blue-800"><strong>Fruktozamin (31.10.2025):</strong> 403</p>
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow-2xl p-6">
          <h2 className="text-2xl font-bold text-blue-600 mb-4 border-b-2 border-blue-600 pb-2">
            Diğer Değerler (17.09.2025)
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <div className="p-3 bg-gray-50 rounded">
              <div className="font-semibold">Sodyum</div>
              <div className="text-lg">170 <StatusBadge status="H" /></div>
              <div className="text-sm text-gray-600">Ref: 147.0 - 156.0 mEq/L</div>
            </div>
            <div className="p-3 bg-gray-50 rounded">
              <div className="font-semibold">Klor</div>
              <div className="text-lg">127 <StatusBadge status="H" /></div>
              <div className="text-sm text-gray-600">Ref: 107.0 - 120.0 mEq/L</div>
            </div>
            <div className="p-3 bg-gray-50 rounded">
              <div className="font-semibold">ALT</div>
              <div className="text-lg">61 <StatusBadge status="H" /></div>
              <div className="text-sm text-gray-600">Ref: 8.0 - 57.0 u/L</div>
            </div>
            <div className="p-3 bg-gray-50 rounded">
              <div className="font-semibold">TCHO</div>
              <div className="text-lg">197 <StatusBadge status="H" /></div>
              <div className="text-sm text-gray-600">Ref: 89.0 - 176.0 mg/dL</div>
            </div>
            <div className="p-3 bg-gray-50 rounded">
              <div className="font-semibold">Hemoglobin</div>
              <div className="text-lg">17.3 <StatusBadge status="H" /></div>
              <div className="text-sm text-gray-600">Ref: 9.0 - 16.0 g/dL</div>
            </div>
            <div className="p-3 bg-gray-50 rounded">
              <div className="font-semibold">IP</div>
              <div className="text-lg">2.4 <StatusBadge status="L" /></div>
              <div className="text-sm text-gray-600">Ref: 2.6 - 6.0 mg/dL</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Venus;
