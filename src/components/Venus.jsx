import React from 'react';
import { Link } from 'react-router-dom';

const Venus = () => {
  const biyokimya = [
    { test: 'TP', onc: '7.6', yeni: '-', ref: '5.7 - 7.8', birim: 'g/dL', durum: 'N' },
    { test: 'ALB', onc: '3.5', yeni: '-', ref: '2.3 - 3.5', birim: 'g/dL', durum: 'N' },
    { test: 'NA/K', onc: '45.95', yeni: '-', ref: '-', birim: '-', durum: '-' },
    { test: 'Potasyum', onc: '3.7', yeni: '-', ref: '3.4 - 4.6', birim: 'mEq/L', durum: 'N' },
    { test: 'Sodyum', onc: '170', yeni: '-', ref: '147.0 - 156.0', birim: 'mEq/L', durum: 'H' },
    { test: 'Klor', onc: '127', yeni: '-', ref: '107.0 - 120.0', birim: 'mEq/L', durum: 'H' },
    { test: 'BUN/CRE', onc: '24.43', yeni: '-', ref: '4.0 - 33.0', birim: '-', durum: 'N' },
    { test: 'ALB/GLOB', onc: '0.85', yeni: '-', ref: '0.4 - 1.5', birim: '-', durum: 'N' },
    { test: 'ALT', onc: '61', yeni: '-', ref: '8.0 - 57.0', birim: 'u/L', durum: 'H' },
    { test: 'GGT', onc: '10', yeni: '-', ref: '1.0 - 10.0', birim: 'u/L', durum: 'N' },
    { test: 'ALP', onc: '17', yeni: '-', ref: '9.0 - 53.0', birim: 'u/L', durum: 'N' },
    { test: 'AST', onc: '22', yeni: '-', ref: '18.0 - 51.0', birim: 'u/L', durum: 'N' },
    { test: 'CPK', onc: '151', yeni: '-', ref: '87.0 - 309.0', birim: 'u/L', durum: 'N' },
    { test: 'vAMY', onc: '1633', yeni: '-', ref: '200.0 - 1900.0', birim: 'u/L', durum: 'N' },
    { test: 'CRE', onc: '0.88', yeni: '-', ref: '0.8 - 1.8', birim: 'mg/dL', durum: 'N' },
    { test: 'BUN', onc: '21.5', yeni: '-', ref: '17.6 - 32.8', birim: 'mg/dL', durum: 'N' },
    { test: 'IP', onc: '2.4', yeni: '-', ref: '2.6 - 6.0', birim: 'mg/dL', durum: 'L' },
    { test: 'TCHO', onc: '197', yeni: '-', ref: '89.0 - 176.0', birim: 'mg/dL', durum: 'H' },
    { test: 'Kalsiyum', onc: '11.7', yeni: '-', ref: '8.8 - 11.9', birim: 'mg/dL', durum: 'N' },
    { test: 'Glukoz', onc: '360', yeni: '129', ref: '71.0 - 148.0', birim: 'mg/dL', durum: 'N' },
    { test: 'TBIL', onc: '0.2', yeni: '-', ref: '0.1 - 0.4', birim: 'mg/dL', durum: 'N' },
    { test: 'Fruktozamin', onc: '-', yeni: '403', ref: '-', birim: '-', durum: '-' }
  ];

  const hemogram = [
    { test: 'Lökosit', onc: '6.39', yeni: '-', ref: '3.5 - 17.5', birim: 'x 10^9/L', durum: 'N' },
    { test: 'Nötrofil', onc: '2.62', yeni: '-', ref: '2.0 - 11.5', birim: 'x 10^9/L', durum: 'N' },
    { test: 'Lenfosit', onc: '3.20', yeni: '-', ref: '0.7 - 7.4', birim: 'x 10^9/L', durum: 'N' },
    { test: 'Monosit', onc: '0.15', yeni: '-', ref: '0.1 - 1.0', birim: 'x 10^9/L', durum: 'N' },
    { test: 'Eozinofil', onc: '0.31', yeni: '-', ref: '0.0 - 1.5', birim: 'x 10^9/L', durum: 'N' },
    { test: 'Bazofil', onc: '0.11', yeni: '-', ref: '0.0 - 0.3', birim: 'x 10^9/L', durum: 'N' },
    { test: 'Nötrofil (%)', onc: '41.0', yeni: '-', ref: '30.0 - 83.5', birim: '%', durum: 'N' },
    { test: 'Lenfosit (%)', onc: '50.1', yeni: '-', ref: '7.0 - 60.0', birim: '%', durum: 'N' },
    { test: 'Monosit (%)', onc: '2.4', yeni: '-', ref: '0.8 - 8.0', birim: '%', durum: 'N' },
    { test: 'Eozinofil (%)', onc: '4.8', yeni: '-', ref: '0.5 - 11.5', birim: '%', durum: 'N' },
    { test: 'Bazofil (%)', onc: '1.7', yeni: '-', ref: '0.0 - 2.3', birim: '%', durum: 'N' },
    { test: 'Eritrosit', onc: '11.58', yeni: '-', ref: '6.3 - 11.8', birim: 'x 10^12/L', durum: 'N' },
    { test: 'Hemoglobin', onc: '17.3', yeni: '-', ref: '9.0 - 16.0', birim: 'g/dL', durum: 'H' },
    { test: 'Hematokrit', onc: '49.9', yeni: '-', ref: '26.0 - 50.2', birim: '%', durum: 'N' },
    { test: 'MCV', onc: '43.1', yeni: '-', ref: '34.0 - 55.0', birim: 'fL', durum: 'N' },
    { test: 'MCH', onc: '15.0', yeni: '-', ref: '11.0 - 18.0', birim: 'pg', durum: 'N' },
    { test: 'MCHC', onc: '347', yeni: '-', ref: '285.0 - 384.0', birim: 'g/dL', durum: 'N' },
    { test: 'RDW-CV', onc: '15.4', yeni: '-', ref: '14.2 - 26.6', birim: '%', durum: 'N' },
    { test: 'RDW-SD', onc: '23.4', yeni: '-', ref: '22.0 - 39.6', birim: 'fL', durum: 'N' },
    { test: 'IRF', onc: '32.5', yeni: '-', ref: '0.0 - 33.0', birim: '-', durum: 'N' },
    { test: 'RET%', onc: '0.20', yeni: '-', ref: '0.1 - 0.9', birim: '%', durum: 'N' },
    { test: 'MFR', onc: '26.4', yeni: '-', ref: '0.0 - 25.8', birim: '-', durum: 'H' },
    { test: 'HFR', onc: '6.1', yeni: '-', ref: '0.0 - 8.5', birim: '-', durum: 'N' },
    { test: 'RHE', onc: '17.3', yeni: '-', ref: '14.2 - 21.5', birim: '-', durum: 'N' },
    { test: 'Trombosit', onc: '208', yeni: '-', ref: '140.0 - 595.0', birim: 'x 10^9/L', durum: 'N' },
    { test: 'PDW', onc: '14.4', yeni: '-', ref: '12.0 - 17.5', birim: 'Adet', durum: 'N' },
    { test: 'MPV', onc: '11.2', yeni: '-', ref: '8.6 - 18.4', birim: 'fL', durum: 'N' },
    { test: 'PCT', onc: '2.33', yeni: '-', ref: '0.9 - 7.0', birim: 'ml/L', durum: 'N' },
    { test: 'IPF#', onc: '3', yeni: '-', ref: '-', birim: '-', durum: '-' },
    { test: 'RBC-O', onc: '11.72', yeni: '-', ref: '-', birim: '-', durum: '-' },
    { test: 'RPI', onc: '0.3', yeni: '-', ref: '-', birim: '-', durum: '-' }
  ];

  const getArrow = (onc, yeni) => {
    if (onc === '-' || yeni === '-') return 'Yeni';
    if (onc === yeni) return '→';
    const o = parseFloat(onc);
    const y = parseFloat(yeni);
    if (isNaN(o) || isNaN(y)) return '→';
    if (y > o) return '↑';
    if (y < o) return '↓';
    return '→';
  };

  const getChange = (onc, yeni) => {
    if (onc === '-' || yeni === '-') return '';
    const o = parseFloat(onc);
    const y = parseFloat(yeni);
    if (isNaN(o) || isNaN(y)) return '';
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
    <div className="min-h-screen bg-gradient-to-br from-blue-500 to-cyan-600 p-6">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-white text-center mb-2">🐱 Venus</h1>
        <p className="text-white text-center mb-8">Yaş: 6</p>
        
        <div className="bg-white rounded-2xl shadow-2xl p-6 mb-8">
          <h2 className="text-2xl font-bold text-blue-600 mb-4 border-b-2 border-blue-600 pb-2">Biyokimya</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-gradient-to-r from-blue-500 to-cyan-600 text-white">
                  <th className="p-3 text-left">Test</th>
                  <th className="p-3 text-left">17.09.2025</th>
                  <th className="p-3 text-left">31.10.2025</th>
                  <th className="p-3 text-left">Değişim</th>
                  <th className="p-3 text-left">Referans</th>
                  <th className="p-3 text-left">Birim</th>
                  <th className="p-3 text-left">Durum (17.09)</th>
                </tr>
              </thead>
              <tbody>
                {biyokimya.map((item, i) => (
                  <tr key={i} className="border-b hover:bg-gray-50">
                    <td className="p-3 font-semibold">{item.test}</td>
                    <td className="p-3"><span className="bg-gray-100 px-2 py-1 rounded">{item.onc}</span></td>
                    <td className="p-3"><span className="bg-gray-100 px-2 py-1 rounded">{item.yeni}</span></td>
                    <td className="p-3">
                      {item.yeni !== '-' && item.onc !== '-' ? (
                        <span className={`${getArrow(item.onc, item.yeni) === '↑' ? 'text-red-600' : getArrow(item.onc, item.yeni) === '↓' ? 'text-green-600' : 'text-gray-600'}`}>
                          {getArrow(item.onc, item.yeni)} {getChange(item.onc, item.yeni)}
                        </span>
                      ) : (
                        <span className="text-gray-500">-</span>
                      )}
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
          <h2 className="text-2xl font-bold text-blue-600 mb-4 border-b-2 border-blue-600 pb-2">Hemogram</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-gradient-to-r from-blue-500 to-cyan-600 text-white">
                  <th className="p-3 text-left">Test</th>
                  <th className="p-3 text-left">17.09.2025</th>
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

export default Venus;
