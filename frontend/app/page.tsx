'use client';

import { useState } from 'react';

export default function Home() {
  const [name, setName] = useState('');
  const [checkIn, setCheckIn] = useState('');
  const [checkOut, setCheckOut] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setMessage(`Sikeres foglalás: ${name}`);
  };

  return (
    <main className="min-h-screen bg-black text-zinc-100 flex items-center justify-center p-6 selection:bg-zinc-800">
      <div className="w-full max-w-md space-y-8">
        <div className="space-y-2 text-center">
          <h1 className="text-2xl font-light tracking-tight">Szállásfoglalás</h1>
          <p className="text-sm text-zinc-400">Válassza ki az utazás időpontját</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-1">
            <label className="text-xs uppercase tracking-wider text-zinc-400 font-medium">Vendég neve</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              placeholder="Kovács János"
              className="w-full px-4 py-3 bg-zinc-900 border border-zinc-800 rounded-xl text-sm text-zinc-100 placeholder-zinc-600 focus:outline-none focus:border-zinc-600 transition-colors"
            />
          </div>

          <div className="grid grid-cols-2 gap-3">
            <div className="space-y-1">
              <label className="text-xs uppercase tracking-wider text-zinc-400 font-medium">Érkezés</label>
              <input
                type="date"
                value={checkIn}
                onChange={(e) => setCheckIn(e.target.value)}
                required
                className="w-full px-4 py-3 bg-zinc-900 border border-zinc-800 rounded-xl text-sm text-zinc-100 focus:outline-none focus:border-zinc-600 transition-colors"
              />
            </div>
            <div className="space-y-1">
              <label className="text-xs uppercase tracking-wider text-zinc-400 font-medium">Távozás</label>
              <input
                type="date"
                value={checkOut}
                onChange={(e) => setCheckOut(e.target.value)}
                required
                className="w-full px-4 py-3 bg-zinc-900 border border-zinc-800 rounded-xl text-sm text-zinc-100 focus:outline-none focus:border-zinc-600 transition-colors"
              />
            </div>
          </div>

          <button
            type="submit"
            className="w-full py-3 mt-2 bg-zinc-100 hover:bg-white text-zinc-900 font-medium text-sm rounded-xl transition-all duration-200 cursor-pointer active:scale-[0.99]"
          >
            Foglalás véglegesítése
          </button>
        </form>

        {message && (
          <div className="p-4 bg-zinc-900 border border-zinc-800 rounded-xl text-center text-sm text-zinc-300">
            {message}
          </div>
        )}
      </div>
    </main>
  );
}