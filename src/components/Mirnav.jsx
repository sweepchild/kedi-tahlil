import React from 'react';
import { Link } from 'react-router-dom';

const Mirnav = () => {
  const biyokimya = [
    { test: 'CRE', sonuc: '1.33', ref: '0.8 - 1.8', birim: 'mg/dL', durum: 'N' },
    { test: 'TCHO', sonuc: '180', ref: '89.0 - 176.0', birim: 'mg/dL', durum: 'H' },
    { test: 'BUN', sonuc: '25.1', ref: '17.6 - 32.8', birim: 'mg/dL', durum: 'N' },
    { test: 'Kalsiyum', sonuc: '13.3', ref: '8.8 - 11.9', birim: 'mg/dL', durum: 'H' },
    { test: 'Glukoz', sonuc: '100', ref: '71.0 - 148.0', birim: 'mg/dL', durum: 'N' },
    { test: 'TBIL', sonuc: '0.3', ref: '0.1 - 0.4', birim: 'mg/dL', durum: 'N' },
    { test: 'IP', sonuc: '3.1', ref: '2.6 - 6.0', birim: 'mg/dL', durum: 'N' },
    { test: 'GGT', sonuc: '10', ref: '1.0 - 10.0', birim: 'u/L', durum: 'N' },
    { test: 'ALT', sonuc: '43', ref: '8.0 - 57.0', birim: 'u/L', durum: 'N' },
    { test: 'ALP', sonuc: '14', ref: '9.0 - 53.0', birim: 'u/L', durum: 'N' },
    { test: 'AST', sonuc: '29', ref: '18.0 - 51.0', birim: 'u/L', durum: 'N' },
    { test: 'vAMY', sonuc: '2023', ref: '200.0 - 1900.0', birim: 'u/L', durum: 'H' },
    { test: 'CPK', sonuc: '184', ref: '87.0 - 309.0', birim: 'u/L', durum: 'N' },
    { test: 'BUN/CRE', sonuc: '18.87', ref: '4.0 - 33.0', birim: '-', durum: 'N' },
    { test: 'NA/K', sonuc: '36.38', ref: '-', birim: '-', durum: '-' },
    { test: 'ALB', sonuc: '3.8', ref: '2.3 - 3.5', birim: 'g/dL', durum: 'H' },
    { test: 'TP', sonuc: '7.7', ref: '5.7 - 7.8', birim: 'g/dL', durum: 'N' },
    { test: 'ALB/GLOB', sonuc: '0.97', ref: '0.4 - 1.5', birim: '-', durum: 'N' },
    { test: 'Potasyum', sonuc: '4.7', ref: '3.4 - 4.6', birim: 'mEq/L', durum: 'H' },
    { test: 'Klor', sonuc: '126', ref: '107.0 - 120.0', birim: 'mEq/L', durum: 'H' },
    { test: 'Sodyum', sonuc: '171', ref: '147.0 - 156.0', birim: 'mEq/L', durum: 'H' }
  ];

  const hemogram = [
    { test: 'Lökosit', sonuc: '6.20', ref: '3.5 - 17.5', birim: 'x 10^9/L', durum: 'N' },
    { test: 'Nötrofil', sonuc: '3.97', ref: '2.0 - 11.5', birim: 'x 10^9/L', durum: 'N' },
    { test: 'Lenfosit', sonuc: '1.66', ref: '0.7 - 7.4', birim: 'x 10^9/L', durum: 'N' },
    { test: 'Monosit', sonuc: '0.26', ref: '0.1 - 1.0', birim: 'x 10^9/L', durum: 'N' },
    { test: 'Eozinofil', sonuc: '0.30', ref: '0.0 - 1.5', birim: 'x 10^9/L', durum: 'N' },
    { test: 'Bazofil', sonuc: '0.01', ref: '0.0 - 0.3', birim: 'x 10^9/L', durum: 'N' },
    { test: 'Nötrofil (%)', sonuc: '64.0', ref: '30.0 - 83.5', birim: '%', durum: 'N' },
    { test: 'Lenfosit (%)', sonuc: '26.7', ref: '7.0 - 60.0', birim: '%', durum: 'N' },
    { test: 'Monosit (%)', sonuc: '4.2', ref: '0.8 - 8.0', birim: '%', durum: 'N' },
    { test: 'Eozinofil (%)', sonuc: '4.9', ref: '0.5 - 11.5', birim: '%', durum: 'N' },
    { test: 'Bazofil (%)', sonuc: '0.2', ref: '0.0 - 2.3', birim: '%', durum: 'N' },
    { test: 'Eritrosit', sonuc: '10.34', ref: '6.3 - 11.8', birim: 'x 10^12/L', durum: 'N' },
    { test: 'Hemoglobin', sonuc: '16.1', ref: '9.0 - 16.0', birim: 'g/dL', durum: 'H' },
    { test: 'Hematokrit', sonuc: '45.2', ref: '26.0 - 50.2', birim: '%', durum: 'N' },
    { test: 'MCV', sonuc: '43.7', ref: '34.0 - 55.0', birim: 'fL', durum: 'N' },
    { test: 'MCHC', sonuc: '356', ref: '285.0 - 384.0', birim: 'g/dL', durum: 'N' },
    { test: 'MCH', sonuc: '15.6', ref: '11.0 - 18.0', birim: 'pg', durum: 'N' },
    { test: 'RDW-CV', sonuc: '16.2', ref: '14.2 - 26.6', birim: '%', durum: 'N' },
    { test: 'RDW-SD', sonuc: '25.1', ref: '22.0 - 39.6', birim: 'fL', durum: 'N' },
    { test: 'IRF', sonuc: '7.7', ref: '0.0 - 33.0', birim: '-', durum: 'N' },
    { test: 'RET%', sonuc: '0.05', ref: '0.1 - 0.9', birim: '%', durum: 'N' },
    { test: 'MFR', sonuc: '7.7', ref: '0.0 - 25.8', birim: '-', durum: 'N' },
    { test: 'HFR', sonuc: '0.0', ref: '0.0 - 8.5', birim: '-', durum: 'N' },
    { test: 'RHE', sonuc: '17.4', ref: '14.2 - 21.5', birim: '-', durum: 'N' },
    { test: 'Trombosit', sonuc: '226', ref: '140.0 - 595.0', birim: 'x 10^9/L', durum: 'N' },
    { test: 'MPV', sonuc: '10.2', ref: '8.6 - 18.4', birim: 'fL', durum: 'N' },
    { test: 'PDW', sonuc: '14.5', ref: '12.0 - 17.5', birim: 'Adet', durum: 'N' },
    { test: 'PCT', sonuc: '2.30', ref: '0.9 - 7.0', birim: 'ml/L', durum: 'N' }
  ];

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
    <div className="min-h-screen bg-gradient-to-br from-emerald-500 to-teal-600 p-6">
      <div className="max-w-6xl mx-auto">
        <div className="mb-6">
          <Link to="/" className="text-white hover:underline">← Ana Sayfaya Dön</Link>
        </div>
        
        <h1 className="text-4xl font-bold text-white text-center mb-2">🐱 Mırnav</h1>
        <p className="text-white text-center mb-8">Doğum: 20.05.2019 | Yaş: 6</p>
        
        <div className="bg-white rounded-2xl shadow-2xl p-6 mb-8">
          <h2 className="text-2xl font-bold text-emerald-600 mb-4 border-b-2 border-emerald-600 pb-2">Biyokimya</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-gradient-to-r from-emerald-500 to-teal-600 text-white">
                  <th className="p-3 text-left">Test Adı</th>
                  <th className="p-3 text-left">17.09.2025</th>
                  <th className="p-3 text-left">Referans Aralık</th>
                  <th className="p-3 text-left">Birim</th>
                  <th className="p-3 text-left">Durum</th>
                </tr>
              </thead>
              <tbody>
                {biyokimya.map((item, i) => (
                  <tr key={i} className="border-b hover:bg-gray-50">
                    <td className="p-3 font-semibold">{item.test}</td>
                    <td className="p-3"><span className="bg-gray-100 px-3 py-1 rounded font-medium">{item.sonuc}</span></td>
                    <td className="p-3 text-gray-600">{item.ref}</td>
                    <td className="p-3">{item.birim}</td>
                    <td className="p-3"><StatusBadge status={item.durum} /></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow-2xl p-6">
          <h2 className="text-2xl font-bold text-emerald-600 mb-4 border-b-2 border-emerald-600 pb-2">Hemogram</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-gradient-to-r from-emerald-500 to-teal-600 text-white">
                  <th className="p-3 text-left">Test Adı</th>
                  <th className="p-3 text-left">17.09.2025</th>
                  <th className="p-3 text-left">Referans Aralık</th>
                  <th className="p-3 text-left">Birim</th>
                  <th className="p-3 text-left">Durum</th>
                </tr>
              </thead>
              <tbody>
                {hemogram.map((item, i) => (
                  <tr key={i} className="border-b hover:bg-gray-50">
                    <td className="p-3 font-semibold">{item.test}</td>
                    <td className="p-3"><span className="bg-gray-100 px-3 py-1 rounded font-medium">{item.sonuc}</span></td>
                    <td className="p-3 text-gray-600">{item.ref}</td>
                    <td className="p-3">{item.birim}</td>
                    <td className="p-3"><StatusBadge status={item.durum} /></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Mirnav;
