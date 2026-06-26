import { useState, useRef, useEffect } from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import {
  LayoutDashboard,
  ClipboardList,
  FolderOpen,
  Wallet,
  ChevronRight,
  ChevronLeft,
  ChevronDown,
  Search,
  Bell,
  Briefcase,
  Menu
} from 'lucide-react';
import logo from '../assets/logo.png';

const FreelancerLayout = () => {
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);
  const [isProfileMenuOpen, setIsProfileMenuOpen] = useState(false);
  const dropdownRef = useRef(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsProfileMenuOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div dir="rtl" className="flex h-screen bg-gray-50 font-sans">
      {/* Sidebar (ON THE RIGHT SIDE IN RTL) */}
      <aside
        className={`${isSidebarCollapsed ? 'w-20' : 'w-64'
          } bg-gradient-to-br from-[#062c30] via-[#0c4e54] to-[#01696f] text-white border-none flex flex-col transition-all duration-300 relative z-50 shrink-0`}
      >
        {/* Logo */}
        <div className="p-6 mb-4">
          <div className="flex items-center gap-3">
            <div className="shrink-0">
              <img src={logo} alt="Logo" className="w-10 h-10 object-contain" />
            </div>
            {!isSidebarCollapsed && (
              <span className="text-xl font-black text-white truncate">MarketBridge</span>
            )}
          </div>
        </div>

        {/* Navigation */}
        <nav className="flex-1 px-4 space-y-2">
          <NavItem to="/" icon={<LayoutDashboard size={20} />} label="الرئيسية" collapsed={isSidebarCollapsed} exact />
          <NavItem to="/proposals" icon={<ClipboardList size={20} />} label="العروض والطلبات" collapsed={isSidebarCollapsed} badge={3} />
          <NavItem to="/projects" icon={<FolderOpen size={20} />} label="مشاريعي" collapsed={isSidebarCollapsed} />
          <NavItem to="/services" icon={<Briefcase size={20} />} label="خدماتي" collapsed={isSidebarCollapsed} />
          <NavItem to="/earnings" icon={<Wallet size={20} />} label="الأرباح" collapsed={isSidebarCollapsed} />
        </nav>
      </aside>

      {/* Main Content Area */}
      <main className="flex-1 flex flex-col overflow-hidden bg-gray-50">

        {/* Top Header */}
        <header className="h-16 bg-white border-b border-gray-200 flex items-center justify-between px-8 shrink-0 relative z-40">
          <div className="flex items-center gap-4">
            <button
              onClick={() => setIsSidebarCollapsed(!isSidebarCollapsed)}
              className="p-2 text-gray-600 hover:bg-gray-100 hover:text-[#01696f] rounded-xl transition-colors"
            >
              <Menu size={24} />
            </button>
            <div className="relative w-96">
              <Search className="absolute end-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
              <input
                type="text"
                placeholder="ابحث عن مشاريع أو عملاء..."
                className="w-full bg-gray-50 border border-gray-200 rounded-full py-2 pe-10 ps-4 text-sm focus:outline-none focus:ring-2 focus:ring-[#01696f] transition-all"
              />
            </div>
          </div>

          <div className="flex items-center gap-6">
            <button className="relative p-2 text-gray-600 hover:bg-gray-100 rounded-full transition-colors">
              <Bell size={24} />
              <span className="absolute top-1 end-1 bg-red-500 text-white text-[10px] font-bold px-1.5 min-w-[18px] h-[18px] rounded-full flex items-center justify-center border-2 border-white">
                2
              </span>
            </button>
            <div className="h-8 w-[1px] bg-gray-200"></div>
            
            {/* Profile Dropdown Area */}
            <div className="relative" ref={dropdownRef}>
              <button 
                onClick={() => setIsProfileMenuOpen(!isProfileMenuOpen)}
                className="flex items-center gap-2 bg-gray-50 hover:bg-gray-100 border border-gray-200 rounded-full py-1 pe-1 ps-3 transition-colors"
              >
                <ChevronDown size={16} className="text-gray-600" />
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#062c30] via-[#0c4e54] to-[#01696f] p-[2px] shrink-0 shadow-sm">
                  <img
                    src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop"
                    alt="Profile"
                    className="w-full h-full rounded-full object-cover border-2 border-white"
                  />
                </div>
              </button>

              {/* Dropdown Menu */}
              {isProfileMenuOpen && (
                <div className="absolute top-full mt-3 end-0 w-48 bg-white border border-gray-100 rounded-3xl shadow-[0_10px_40px_-10px_rgba(0,0,0,0.1)] overflow-hidden animate-in fade-in zoom-in-95 duration-200">
                  <div className="flex flex-col py-3">
                    <NavLink 
                      to="/profile" 
                      onClick={() => setIsProfileMenuOpen(false)} 
                      className="px-6 py-3 text-base font-black text-[#01696f] hover:bg-gray-50 transition-colors text-start"
                    >
                      ملفي
                    </NavLink>
                    <div className="h-[1px] bg-gray-100 my-2 mx-4"></div>
                    <NavLink 
                      to="/logout" 
                      onClick={() => setIsProfileMenuOpen(false)} 
                      className="px-6 py-3 text-base font-black text-red-500 hover:bg-red-50 transition-colors text-start"
                    >
                      تسجيل الخروج
                    </NavLink>
                  </div>
                </div>
              )}
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
const NavItem = ({ icon, label, to, collapsed = false, badge = null, exact = false }) => {
  return (
    <NavLink
      to={to}
      end={exact}
      className={({ isActive }) => `flex items-center gap-3 px-4 py-3 rounded-xl transition-all group ${isActive
        ? 'bg-white/20 border-s-4 border-teal-300 text-white font-bold shadow-sm'
        : 'text-teal-100 hover:bg-white/10 hover:text-white'
        }`}
    >
      {({ isActive }) => (
        <>
          <span className={isActive ? 'text-white' : 'group-hover:text-white'}>{icon}</span>
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
