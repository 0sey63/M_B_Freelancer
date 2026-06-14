import { useState } from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import {
  LayoutDashboard,
  UserCircle,
  ClipboardList,
  FolderOpen,
  Wallet,
  ChevronRight,
  ChevronLeft,
  Search,
  Bell,
  Star,
  TrendingUp,
  LogOut
} from 'lucide-react';

const FreelancerLayout = () => {
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);

  return (
    <div dir="rtl" className="flex h-screen bg-gray-50 font-sans">
      {/* Sidebar (ON THE RIGHT SIDE IN RTL) */}
      <aside
        className={`${isSidebarCollapsed ? 'w-20' : 'w-64'
          } bg-white border-e border-gray-200 flex flex-col transition-all duration-300 relative z-50 shrink-0`}
      >
        {/* Toggle Button */}
        <button
          onClick={() => setIsSidebarCollapsed(!isSidebarCollapsed)}
          className="absolute -end-3 top-20 bg-white border border-gray-200 rounded-full p-1 hover:text-[#01696f] shadow-sm z-50"
        >
          {isSidebarCollapsed ? <ChevronLeft size={16} /> : <ChevronRight size={16} />}
        </button>

        {/* Logo */}
        <div className="p-6 mb-4">
          <div className="flex items-center gap-3">
            <div className="bg-[#01696f] p-2 rounded-lg shrink-0">
              <TrendingUp className="text-white" size={24} />
            </div>
            {!isSidebarCollapsed && (
              <span className="text-xl font-bold text-[#01696f] truncate">MarketBridge</span>
            )}
          </div>
        </div>

        {/* Navigation */}
        <nav className="flex-1 px-4 space-y-2">
          <NavItem to="/" icon={<LayoutDashboard size={20} />} label="الرئيسية" collapsed={isSidebarCollapsed} exact />
          <NavItem to="/profile-services" icon={<UserCircle size={20} />} label="ملفي وخدماتي" collapsed={isSidebarCollapsed} />
          <NavItem to="/proposals" icon={<ClipboardList size={20} />} label="العروض والطلبات" collapsed={isSidebarCollapsed} badge={3} />
          <NavItem to="/projects" icon={<FolderOpen size={20} />} label="مشاريعي" collapsed={isSidebarCollapsed} />
          <NavItem to="/earnings" icon={<Wallet size={20} />} label="الأرباح" collapsed={isSidebarCollapsed} />
        </nav>

        {/* Footer Navigation */}
        <div className="p-4 border-t border-gray-100 space-y-1">
          <NavItem to="/upgrade" icon={<Star size={20} />} label="الترقية" collapsed={isSidebarCollapsed} color="text-amber-600" />
          <NavItem to="/logout" icon={<LogOut size={20} />} label="تسجيل الخروج" collapsed={isSidebarCollapsed} color="text-red-500" />
        </div>
      </aside>

      {/* Main Content Area */}
      <main className="flex-1 flex flex-col overflow-hidden bg-gray-50">

        {/* Top Header */}
        <header className="h-16 bg-white border-b border-gray-200 flex items-center justify-between px-8 shrink-0">
          <div className="relative w-96">
            <Search className="absolute end-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
            <input
              type="text"
              placeholder="ابحث عن مشاريع أو عملاء..."
              className="w-full bg-gray-50 border border-gray-200 rounded-full py-2 pe-10 ps-4 text-sm focus:outline-none focus:ring-2 focus:ring-[#01696f] transition-all"
            />
          </div>

          <div className="flex items-center gap-6">
            <button className="relative p-2 text-gray-600 hover:bg-gray-100 rounded-full transition-colors">
              <Bell size={20} />
              <span className="absolute top-1 end-1 w-2 h-2 bg-red-500 rounded-full border-2 border-white"></span>
            </button>
            <div className="h-8 w-[1px] bg-gray-200"></div>
            <div className="flex items-center gap-3">
              <div className="text-start">
                <p className="text-sm font-bold">محمد أحمد</p>
                <p className="text-[10px] text-gray-500">مطور واجهات أمامية</p>
              </div>
              <div className="w-10 h-10 rounded-full border border-gray-200 overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop"
                  alt="Profile"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </header>

        {/* Scrollable Body / Routes Outlet */}
        <div className="flex-1 overflow-y-auto">
          <Outlet />
        </div>
      </main>
    </div>
  );
};

// Helper Nav Component using NavLink
const NavItem = ({ icon, label, to, collapsed = false, color = "text-gray-600", badge = null, exact = false }) => {
  return (
    <NavLink
      to={to}
      end={exact}
      className={({ isActive }) => `flex items-center gap-3 px-4 py-3 rounded-xl transition-all group ${isActive
          ? 'bg-[#01696f10] text-[#01696f] font-bold'
          : `${color} hover:bg-gray-100 hover:text-[#01696f]`
        }`}
    >
      {({ isActive }) => (
        <>
          <span className={isActive ? 'text-[#01696f]' : 'group-hover:text-[#01696f]'}>{icon}</span>
          {!collapsed && (
            <>
              <span className="flex-1 text-start">{label}</span>
              {badge && (
                <span className="bg-red-500 text-white text-[10px] font-bold px-2 py-0.5 rounded-full">
                  {badge}
                </span>
              )}
            </>
          )}
          {isActive && !collapsed && <ChevronLeft className="ms-auto" size={16} />}
        </>
      )}
    </NavLink>
  );
};

export default FreelancerLayout;
