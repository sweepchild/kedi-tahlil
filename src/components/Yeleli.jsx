// src/components/Yeleli.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const Yeleli = () => {
  const biyokimya = [
    { test: 'ALB', onc: '3.4', yeni: '3.5', ref: '2.3 - 3.5', birim: 'g/dL', durum: 'N' },
    { test: 'ALB/GLOB', onc: '0.83', yeni: '0.90', ref: '0.4 - 1.5', birim: '-', durum: 'N' },
    { test: 'ALP', onc: '14', yeni: '14', ref: '9.0 - 53.0', birim: 'u/L', durum: 'N' },
    { test: 'ALT', onc: '44', yeni: '58', ref: '8.0 - 57.0', birim: 'u/L', durum: 'H' },
    { test: 'AST', onc: '19', yeni: '27', ref: '18.0 - 51.0', birim: 'u/L', durum: 'N' },
    { test: 'BUN', onc: '18.4', yeni: '17.9', ref: '17.6 - 32.8', birim: 'mg/dL', durum: 'N' },
    { test: 'BUN/CRE', onc: '27.46', yeni: '25.21', ref: '4.0 - 33.0', birim: '-', durum: 'N' },
    { test: 'Kalsiyum', onc: '13.4', yeni: '13.0', ref: '8.8 - 11.9', birim: 'mg/dL', durum: 'H' },
    { test: 'Klor', onc: '131', yeni: '106', ref: '107.0 - 120.0', birim: 'mEq/L', durum: 'L' },
    { test: 'CRE', onc: '0.67', yeni: '0.71', ref: '0.8 - 1.8', birim: 'mg/dL', durum: 'L' },
    { test: 'GGT', onc: '10', yeni: '10', ref: '1.0 - 10.0', birim: 'u/L', durum: 'N' },
    { test: 'Glukoz', onc: '284.5', yeni: '270', ref: '71.0 - 148.0', birim: 'mg/dL', durum: 'H' },
    { test: 'IP', onc: '1.5', yeni: '2.6', ref: '2.6 - 6.0', birim: 'mg/dL', durum: 'N' },
    { test: 'Potasyum', onc: '3.6', yeni: '3.7', ref: '3.4 - 4.6', birim: 'mEq/L', durum: 'N' },
    { test: 'Sodyum', onc: '170', yeni: '143', ref: '147.0 - 156.0', birim: 'mEq/L', durum: 'L' },
    { test: 'TBIL', onc: '0.2', yeni: '0.2', ref: '0.1 - 0.4', birim: 'mg/dL', durum: 'N' },
    { test: 'TCHO', onc: '156', yeni: '157', ref: '89.0 - 176.0', birim: 'mg/dL', durum: 'N' },
    { test: 'TP', onc: '7.5', yeni: '7.4', ref: '5.7 - 7.8', birim: 'g/dL', durum: 'N' },
    { test: 'vAMY', onc: '1322', yeni: '1352', ref: '200.0 - 1900.0', birim: 'u/L', durum: 'N' },
    { test: 'NA/K', onc: '47.22', yeni: '38.65', ref: '-', birim: '-', durum: '-' },
    { test: 'CPK', onc: '159', yeni: '-', ref: '87.0 - 309.0', birim: 'u/L', durum: 'N' },
    { test: 'Fruktozamin', onc: '-', yeni: '300', ref: '-', birim: '-', durum: '-' }
  ];

  const hemogram = [
    { test: 'Lökosit', onc: '8.60', yeni: '9.50', ref: '3.5 - 17.5', birim: 'x 10^9/L', durum: 'N' },
    { test: 'Nötrofil', onc: '4.89', yeni: '6.90', ref: '2.0 - 11.5', birim: 'x 10^9/L', durum: 'N' },
    { test: 'Lenfosit', onc: '2.57', yeni: '1.66', ref: '0.7 - 7.4', birim: 'x 10^9/L', durum: 'N' },
    { test: 'Monosit', onc: '0.34', yeni: '0.56', ref: '0.1 - 1.0', birim: 'x 10^9/L', durum: 'N' },
    { test: 'Eozinofil', onc: '0.68', yeni: '0.29', ref: '0.0 - 1.5', birim: 'x 10^9/L', durum: 'N' },
    { test: 'Bazofil', onc: '0.11', yeni: '0.09', ref: '0.0 - 0.3', birim: 'x 10^9/L', durum: 'N' },
    { test: 'Nötrofil (%)', onc: '56.9', yeni: '72.6', ref: '30.0 - 83.5', birim: '%', durum: 'N' },
    { test: 'Lenfosit (%)', onc: '29.9', yeni: '17.5', ref: '7.0 - 60.0', birim: '%', durum: 'N' },
    { test: 'Monosit (%)', onc: '4.0', yeni: '5.9', ref: '0.8 - 8.0', birim: '%', durum: 'N' },
    { test: 'Eozinofil (%)', onc: '7.9', yeni: '3.1', ref: '0.5 - 11.5', birim: '%', durum: 'N' },
    { test: 'Bazofil (%)', onc: '1.3', yeni: '0.9', ref: '0.0 - 2.3', birim: '%', durum: 'N' },
    { test: 'Eritrosit', onc: '10.48', yeni: '11.04', ref: '6.3 - 11.8', birim: 'x 10^12/L', durum: 'N' },
    { test: 'Hemoglobin', onc: '15.0', yeni: '15.4', ref: '9.0 - 16.0', birim: 'g/dL', durum: 'N' },
    { test: 'Hematokrit', onc: '42.2', yeni: '42.7', ref: '26.0 - 50.2', birim: '%', durum: 'N' },
    { test: 'MCV', onc: '40.3', yeni: '38.7', ref: '34.0 - 55.0', birim: 'fL', durum: 'N' },
    { test: 'MCHC', onc: '355', yeni: '361', ref: '285.0 - 384.0', birim: 'g/dL', durum: 'N' },
    { test: 'MCH', onc: '14.3', yeni: '13.9', ref: '11.0 - 18.0', birim: 'pg', durum: 'N' },
    { test: 'RDW-CV', onc: '15.3', yeni: '15.0', ref: '14.2 - 26.6', birim: '%', durum: 'N' },
    { test: 'RDW-SD', onc: '22.0', yeni: '24.6', ref: '22.0 - 39.6', birim: 'fL', durum: 'N' },
    { test: 'RET%', onc: '0.17', yeni: '0.08', ref: '0.1 - 0.9', birim: '%', durum: 'N' },
    { test: 'IRF', onc: '22.9', yeni: '25.5', ref: '0.0 - 33.0', birim: '-', durum: 'N' },
    { test: 'MFR', onc: '18.7', yeni: '25.5', ref: '0.0 - 25.8', birim: '-', durum: 'N' },
    { test: 'HFR', onc: '4.2', yeni: '0.0', ref: '0.0 - 8.5', birim: '-', durum: 'N' },
    { test: 'RHE', onc: '17.0', yeni: '16.1', ref: '14.2 - 21.5', birim: '-', durum: 'N' },
    { test: 'Trombosit', onc: '190', yeni: '33', ref: '140.0 - 595.0', birim: 'x 10^9/L', durum: 'L' },
    { test: 'MPV', onc: '11.6', yeni: '13.4', ref: '8.6 - 18.4', birim: 'fL', durum: 'N' },
    { test: 'PDW', onc: '14.4', yeni: '13.9', ref: '12.0 - 17.5', birim: 'Adet', durum: 'N' },
    { test: 'PCT', onc: '2.21', yeni: '0.44', ref: '0.9 - 7.0', birim: 'ml/L', durum: 'L' },
    { test: 'IPF#', onc: '3', yeni: '2', ref: '-', birim: '-', durum: '-' },
    { test: 'RBC-O', onc: '10.50', yeni: '11.02', ref: '-', birim: '-', durum: '-' },
    { test: 'RPI', onc: '0.1', yeni: '0.1', ref: '-', birim: '-', durum: '-' }
  ];

  const getArrow = (onc, yeni) => {
    if (onc === '-' || yeni === '-' || onc === yeni) return '→';
    const o = parseFloat(onc);
    const y = parseFloat(yeni);
    if (isNaN(o) || isNaN(y)) return '→';
    if (y > o) return '↑';
    if (y < o) return '↓';
    return '→';
  };

  const getChange = (onc, yeni) => {
    if (onc === '-' || yeni === '-') return 'Yeni';
    const o = parseFloat(onc);
    const y = parseFloat(yeni);
    if (isNaN(o) || isNaN(y)) return '-';
    const diff = (y - o).toFixed(2);
    return diff > 0 ? `+${diff}` : diff;
  };

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
    <div className="min-h-screen bg-gradient-to-br from-pink-500 to-rose-600 p-6">
      <div className="max-w-7xl mx-auto">
        <div className="mb-6">
          <Link to="/" className="text-white hover:underline">← Ana Sayfaya Dön</Link>
        </div>
        
        <h1 className="text-4xl font-bold text-white text-center mb-2">🐱 Yeleli</h1>
        <p className="text-white text-center mb-8">Doğum: 01.08.2019 | Yaş: 6</p>
        
        <div className="bg-white rounded-2xl shadow-2xl p-6 mb-8">
          <h2 className="text-2xl font-bold text-pink-600 mb-4 border-b-2 border-pink-600 pb-2">Biyokimya</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-gradient-to-r from-pink-500 to-rose-600 text-white">
                  <th className="p-3 text-left">Test</th>
                  <th className="p-3 text-left">17.09.2025</th>
                  <th className="p-3 text-left">20.11.2025</th>
                  <th className="p-3 text-left">Değişim</th>
                  <th className="p-3 text-left">Referans</th>
                  <th className="p-3 text-left">Birim</th>
                  <th className="p-3 text-left">Durum</th>
                </tr>
              </thead>
              <tbody>
                {biyokimya.map((item, i) => (
                  <tr key={i} className="border-b hover:bg-gray-50">
                    <td className="p-3 font-semibold">{item.test}</td>
                    <td className="p-3"><span className="bg-gray-100 px-2 py-1 rounded">{item.onc}</span></td>
                    <td className="p-3"><span className="bg-gray-100 px-2 py-1 rounded">{item.yeni}</span></td>
                    <td className="p-3">
                      <span className={`${getArrow(item.onc, item.yeni) === '↑' ? 'text-red-600' : getArrow(item.onc, item.yeni) === '↓' ? 'text-green-600' : 'text-gray-600'}`}>
                        {getArrow(item.onc, item.yeni)} {getChange(item.onc, item.yeni)}
                      </span>
                    </td>
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
          <h2 className="text-2xl font-bold text-pink-600 mb-4 border-b-2 border-pink-600 pb-2">Hemogram</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-gradient-to-r from-pink-500 to-rose-600 text-white">
                  <th className="p-3 text-left">Test</th>
                  <th className="p-3 text-left">17.09.2025</th>
                  <th className="p-3 text-left">20.11.2025</th>
                  <th className="p-3 text-left">Değişim</th>
                  <th className="p-3 text-left">Referans</th>
                  <th className="p-3 text-left">Birim</th>
                  <th className="p-3 text-left">Durum</th>
                </tr>
              </thead>
              <tbody>
                {hemogram.map((item, i) => (
                  <tr key={i} className="border-b hover:bg-gray-50">
                    <td className="p-3 font-semibold">{item.test}</td>
                    <td className="p-3"><span className="bg-gray-100 px-2 py-1 rounded">{item.onc}</span></td>
                    <td className="p-3"><span className="bg-gray-100 px-2 py-1 rounded">{item.yeni}</span></td>
                    <td className="p-3">
                      <span className={`${getArrow(item.onc, item.yeni) === '↑' ? 'text-red-600' : getArrow(item.onc, item.yeni) === '↓' ? 'text-green-600' : 'text-gray-600'}`}>
                        {getArrow(item.onc, item.yeni)} {getChange(item.onc, item.yeni)}
                      </span>
                    </td>
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

export default Yeleli;
