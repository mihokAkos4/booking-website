'use client';

import { useState } from 'react';

export default function Home() {
  const [name, setName] = useState('');
  const [checkIn, setCheckIn] = useState('');
  const [checkOut, setCheckOut] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // Itt fogjuk majd bekötni a Go backendet, de előbb nézzük meg, hogy működik-e az űrlap
    setMessage(`Sikeres teszt foglalás, ${name}!`);
  };

  return (
    <main className="min-h-screen bg-gray-950 text-white flex flex-col items-center justify-center p-6">
      <div className="max-w-md w-full bg-gray-900 p-8 rounded-2xl border border-gray-800 shadow-xl">
        <h1 className="text-3xl font-bold mb-2 text-center text-blue-400">🏨 Szállásfoglalás</h1>
        <p className="text-gray-400 text-center mb-6">Add meg az adatokat a szobafoglaláshoz</p>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-1">Vendég neve</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:border-blue-500 text-white"
              placeholder="pl. Kovács János"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-1">Érkezés dátuma</label>
            <input
              type="date"
              value={checkIn}
              onChange={(e) => setCheckIn(e.target.value)}
              required
              className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:border-blue-500 text-white"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-1">Távozás dátuma</label>
            <input
              type="date"
              value={checkOut}
              onChange={(e) => setCheckOut(e.target.value)}
              required
              className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:border-blue-500 text-white"
            />
          </div>
          <button
            type="submit"
            className="w-full py-3 bg-blue-600 hover:bg-blue-500 font-semibold rounded-lg transition cursor-pointer"
          >
            Foglalás elküldése
          </button>
        </form>

        {message && (
          <div className="mt-4 p-3 bg-green-900/50 border border-green-700 rounded-lg text-center text-green-300 font-medium">
            {message}
          </div>
        )}
      </div>
    </main>
  );
}