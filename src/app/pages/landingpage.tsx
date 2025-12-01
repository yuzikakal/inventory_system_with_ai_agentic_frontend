"use client"
import { ArrowRight, Package, ShieldCheck, Zap } from 'lucide-react';
import { useState } from 'react';
import {useRouter} from 'next/navigation';
import {Button} from '../components/ui/Button';

interface LandingPageProps {
  onLoginClick: () => void;
}

export const LandingPage = () => {
    const route = useRouter();
    function onLoginClick(){
        route.push('/login');
    }
  return (
    <div className="min-h-screen bg-slate-50 flex flex-col">
      {/* Navbar */}
      <nav className="w-full px-6 py-4 bg-white/80 backdrop-blur-md border-b border-slate-200 sticky top-0 z-10">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-2 text-indigo-600 font-bold text-xl">
            <div className="w-8 h-8 bg-indigo-600 rounded-lg flex items-center justify-center text-white">
              <Package size={18} />
              </div>
            SmartInv
          </div>
          <Button onClick={onLoginClick} size="sm">
            Masuk Akun
          </Button>
        </div>
      </nav>

    {/* Hero */}
      <main className="flex-1">
        <div className="max-w-7xl mx-auto px-6 py-20 md:py-32 flex flex-col md:flex-row items-center gap-12">
          <div className="flex-1 text-center md:text-left">
            <h1 className="text-4xl md:text-6xl font-bold text-slate-900 tracking-tight leading-tight mb-6">
              Manajemen Stok <br/>
              <span className="text-indigo-600">Lebih Cerdas.</span>
            </h1>
            <p className="text-lg text-slate-600 mb-8 max-w-lg mx-auto md:mx-0 leading-relaxed">
              Solusi inventory modern untuk bisnis Anda. Pantau stok, harga, dan aset secara real-time dengan tampilan yang elegan dan mudah digunakan.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center md:justify-start gap-4">
              <Button size="lg" onClick={onLoginClick}>
                Mulai Sekarang <ArrowRight size={18} className="ml-2" />
              </Button>
              <Button size="lg" variant="secondary">
                Pelajari Lebih Lanjut
              </Button>
            </div>
          </div>
          <div className="flex-1 w-full max-w-md md:max-w-none relative">
            <div className="absolute top-0 right-0 w-72 h-72 bg-indigo-300 rounded-full filter blur-3xl opacity-20 animate-pulse"></div>
            <div className="relative bg-white p-6 rounded-2xl shadow-2xl border border-slate-200 transform rotate-2 hover:rotate-0 transition-transform duration-500">
               <div className="flex items-center gap-4 mb-6 border-b border-slate-100 pb-4">
                 <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center text-green-600">
                   <Package size={20} />
                 </div>
                 <div>
                   <p className="font-semibold text-slate-900">Stok Masuk</p>
                   <p className="text-sm text-slate-500">+150 Unit Baru</p>
                 </div>
                 <span className="ml-auto text-green-600 font-bold text-sm">+24%</span>
               </div>
               <div className="space-y-3">
                 <div className="h-2 bg-slate-100 rounded-full w-full overflow-hidden">
                   <div className="h-full bg-indigo-600 w-3/4"></div>
                 </div>
                 <div className="h-2 bg-slate-100 rounded-full w-full overflow-hidden">
                   <div className="h-full bg-indigo-300 w-1/2"></div>
                 </div>
                 <div className="h-2 bg-slate-100 rounded-full w-full overflow-hidden">
                    <div className="h-full bg-slate-200 w-1/4"></div>
                 </div>
               </div>
               </div>
          </div>
        </div>

        {/* Features */}
        <section className="bg-white py-20 border-t border-slate-100">
           <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8">
             <div className="p-6 rounded-xl bg-slate-50 border border-slate-100">
                <div className="w-12 h-12 bg-white rounded-lg shadow-sm flex items-center justify-center text-indigo-600 mb-4">
                  <Zap size={24} />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">Cepat & Ringan</h3>
                <p className="text-slate-600">Akses data inventaris Anda tanpa loading lama. Dibangun untuk performa.</p>
              </div>
              <div className="p-6 rounded-xl bg-slate-50 border border-slate-100">
                <div className="w-12 h-12 bg-white rounded-lg shadow-sm flex items-center justify-center text-indigo-600 mb-4">
                  <ShieldCheck size={24} />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">Aman Terkendali</h3>
                <p className="text-slate-600">Sistem login aman untuk memastikan hanya staf berwenang yang dapat mengakses.</p>
              </div>
              <div className="p-6 rounded-xl bg-slate-50 border border-slate-100">
                <div className="w-12 h-12 bg-white rounded-lg shadow-sm flex items-center justify-center text-indigo-600 mb-4">
                  <Package size={24} />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">Manajemen Mudah</h3>
                <p className="text-slate-600">Tambah, edit, dan pantau stok barang dengan antarmuka yang intuitif.</p>
              </div>
           </div>
        </section>
      </main>

      <footer className="py-8 text-center text-slate-500 text-sm bg-slate-50">

        &copy; 2025 Smart Inventory Solution. All rights reserved.
      </footer>
    </div>
  );
};
