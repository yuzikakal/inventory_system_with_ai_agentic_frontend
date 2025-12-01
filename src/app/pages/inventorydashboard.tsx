"use client";
import { useEffect, useState } from 'react';
import { LayoutDashboard, Package, TrendingUp, AlertCircle, RefreshCw, ShoppingCart } from 'lucide-react';
import { InventoryItem, User } from '../globalvariables';
import { fetchInventoryData, getUserAuth } from '../services/get';
import {StatCard} from '../components/StatCard';
import {InventoryTable} from '../components/InventoryTable';
import {Sidebar} from '../components/SideBar';
import { InventoryFormModal } from '../components/InventoryFormModal';
import { useRouter } from 'next/navigation';

export const InventoryDashboard = () => {    
  const [items, setItems] = useState<InventoryItem[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [userData, setUserData] = useState<User | null>(null);
  const router = useRouter();

  const loadData = async () => {
    setLoading(true);
    setError(null);
    try {
      const data = await fetchInventoryData();
      setItems(data);
    } catch (err) {
      setError('Gagal menghubungkan ke server lokal (localhost). Pastikan API berjalan.');
    } finally {
      setLoading(false);
    }
  };
  
  const getUser = async() => {
    const response = await getUserAuth() as any;
    setUserData(response.user);
    console.log(response.user);
  };
  
  useEffect(() => {
    getUser();
    loadData();
  }, []);

  const handleLogout = async() => {
    await fetch("/v1/api/auth/logout", { method: "POST" });
    router.push('/login');
  };

  // Calculate stats
  const totalStock = items.reduce((acc, item) => acc + parseInt(item.stock || '0'), 0);
  const totalValue = items.reduce((acc, item) => acc + (parseInt(item.stock || '0') * parseFloat(item.price || '0')), 0);
  const totalItems = items.length;

  const formatCurrencySimple = (val: number) => {
     return new Intl.NumberFormat('id-ID', {
      style: 'currency',
      currency: 'IDR',
      maximumFractionDigits: 0,
    }).format(val);
  }

  return (
    <div className="min-h-screen flex bg-slate-50 text-slate-800">
      <Sidebar user={userData} onLogout={handleLogout} />

      {/* Main Content */}
      <main className="flex-1 p-6 md:p-8 overflow-y-auto">
        <header className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
          <div>
            <h1 className="text-2xl font-bold text-slate-900 tracking-tight">Dashboard Overview</h1>
            <p className="text-slate-500 mt-1">Selamat datang kembali, berikut ringkasan stok hari ini.</p>
          </div>
          <button 
            onClick={loadData}
            className="inline-flex items-center gap-2 px-4 py-2 bg-white border border-slate-200 hover:bg-slate-50 text-slate-600 rounded-lg text-sm font-medium transition-colors shadow-sm"
          >
            <RefreshCw size={16} className={loading ? 'animate-spin' : ''} />
            Refresh Data
          </button>
        </header>
        
        {/* Stats Row */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <StatCard 
            title="Total Barang" 
            value={totalItems.toString()} 
            icon={Package} 
            trend="+1 baru"
          />
          <StatCard 
            title="Total Stok Unit" 
            value={totalStock.toString()} 
            icon={LayoutDashboard}
          />
          <StatCard 
            title="Estimasi Aset" 
            value={formatCurrencySimple(totalValue)} 
            icon={TrendingUp}
            trend="Update Live"
          />
        </div>

        {/* Inventory List Section */}
        <section>
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-semibold text-slate-900">Daftar Inventory</h2>
            {/* Simple mock filter buttons for visual completeness */}
            <div className="hidden sm:flex space-x-2">
              <button className="px-3 py-1.5 text-xs font-medium bg-slate-800 text-white rounded-md shadow-sm">Semua</button>
              <button className="px-3 py-1.5 text-xs font-medium bg-white text-slate-600 border border-slate-200 rounded-md hover:bg-slate-50">Stok Rendah</button>
            </div>
          </div>

          {error ? (
             <div className="bg-red-50 border border-red-200 rounded-xl p-6 flex items-center gap-4 text-red-800">
                <AlertCircle size={24} className="shrink-0" />
                <div>
                  <h3 className="font-semibold">Terjadi Kesalahan</h3>
                  <p className="text-sm mt-1 text-red-600">{error}</p>
                </div>
                <button onClick={loadData} className="ml-auto px-4 py-2 bg-white border border-red-200 text-red-600 rounded-lg text-sm font-medium hover:bg-red-50">
                  Coba Lagi
                </button>
             </div>
             ) : loading ? (
            <div className="w-full h-64 bg-white rounded-xl border border-slate-200 flex flex-col items-center justify-center text-slate-400">
               <div className="w-8 h-8 border-4 border-indigo-100 border-t-indigo-600 rounded-full animate-spin mb-3"></div>
               <p className="text-sm">Memuat data inventory...</p>
            </div>
          ) : (
            <InventoryTable items={items} />
          )}
        </section>
      </main>
    </div>
  );
};
