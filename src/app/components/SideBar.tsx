"use client"
import { Package, LayoutDashboard, ShoppingCart, User, LogOut } from 'lucide-react'
import { User as UserType } from '../globalvariables'

interface SidebarProps {
  user: UserType | null
  onLogout: () => void
}

export const Sidebar: React.FC<SidebarProps> = ({ user, onLogout }) => {
  return (
    <aside className="w-64 bg-white border-r border-slate-200 hidden md:flex flex-col sticky top-0 h-screen">
      <div className="p-6 border-b border-slate-100">
        <div className="flex items-center gap-2 text-indigo-600 font-bold text-xl">
           <div className="w-8 h-8 bg-indigo-600 rounded-lg flex items-center justify-center text-white shadow-lg shadow-indigo-200">
             <Package size={18} />
           </div>
           SmartInv
        </div>
      </div>

      <nav className="flex-1 p-4 space-y-1">
        <a href="#" className="flex items-center gap-3 px-4 py-3 bg-indigo-50 text-indigo-700 rounded-lg font-medium transition-colors">
          <LayoutDashboard size={20} />
          Dashboard
        </a>
        <a href="#" className="flex items-center gap-3 px-4 py-3 text-slate-500 hover:bg-slate-50 hover:text-slate-900 rounded-lg font-medium transition-colors">
          <ShoppingCart size={20} />
          Produk
        </a>
        <a href="#" className="flex items-center gap-3 px-4 py-3 text-slate-500 hover:bg-slate-50 hover:text-slate-900 rounded-lg font-medium transition-colors">
          <User size={20} />
          Supplier
        </a>
      </nav>
      <div className="p-4 border-t border-slate-100">
        <div className="flex items-center gap-3 p-3 rounded-lg bg-slate-50 mb-3">
          <div className="w-10 h-10 rounded-full bg-white border border-slate-200 flex items-center justify-center text-indigo-600 font-semibold shadow-sm">
            {user?.username?.charAt(0).toUpperCase() || 'A'}
          </div>
          <div className="overflow-hidden">
            <p className="text-sm font-medium text-slate-900 truncate">{user?.username || 'Guest'}</p>
            <p className="text-xs text-slate-500 truncate">{user?.isAdmin === '1' ? 'Administrator' : 'Staff'}</p>
          </div>
        </div>
        <button 
          onClick={onLogout}
          className="w-full flex items-center justify-center gap-2 px-4 py-2 text-sm text-slate-500 hover:text-red-600 hover:bg-red-50 rounded-lg transition-colors"
        >
          <LogOut size={16} />
          Logout
        </button>
      </div>
    </aside>
  )
}