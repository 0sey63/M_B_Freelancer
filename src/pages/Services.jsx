import { useState } from 'react';
import {
  ExternalLink,
  Plus,
  Edit2,
  Eye,
  EyeOff,
  Clock,
  DollarSign,
  Briefcase,
  AlertCircle
} from 'lucide-react';

const Services = () => {
  const [availability, setAvailability] = useState('متاح');

  return (
    <div className="p-8 space-y-8">
      {/* SECTION 1: Page Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold mb-2">خدماتي</h1>
          <p className="text-slate-500">قم بإدارة خدماتك الجاهزة، معرض أعمالك وحالة تواجدك وتسعيرك.</p>
        </div>
        <button className="flex items-center gap-2 px-6 py-2.5 bg-white border border-slate-200 text-slate-700 rounded-xl font-bold text-sm shadow-sm hover:bg-slate-50 transition-all shrink-0">
          <ExternalLink size={18} />
          معاينة الخدمات
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        
        {/* Left Column: Services and Portfolio (2/3 in RTL) */}
        <div className="lg:col-span-2 space-y-8">
          
          {/* SECTION 4: My Services */}
          <section className="space-y-6">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-1.5 h-6 bg-[#01696F] rounded-full"></div>
                <h2 className="text-2xl font-bold">الخدمات المقدمة</h2>
              </div>
              <button className="flex items-center gap-2 px-5 py-2.5 bg-[#01696F] text-white rounded-xl font-bold text-sm shadow-md hover:bg-[#0c4e54] transition-all">
                <Plus size={18} />
                إضافة خدمة جديدة
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <ServiceCard
                title="تصميم واجهة موقع ويب (Landing Page)"
                price="250"
                delivery="5 أيام"
                desc="تصميم احترافي لصفحة هبوط تركز على زيادة التحويلات باستخدام Figma."
                status="منشورة"
              />
              <ServiceCard
                title="تطوير تطبيق جوال (5 شاشات)"
                price="400"
                delivery="7 أيام"
                desc="برمجة شاشات تطبيق تفاعلية متوافقة مع iOS و Android باستخدام React Native."
                status="مخفية"
              />
              {/* Empty State Mockup */}
              <div className="border-2 border-dashed border-slate-200 rounded-2xl flex flex-col items-center justify-center p-8 bg-white/50 group hover:border-[#01696F] transition-all cursor-pointer">
                <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center text-slate-300 group-hover:text-[#01696F] shadow-sm mb-4">
                  <Plus size={24} />
                </div>
                <p className="text-sm font-bold text-slate-400 group-hover:text-slate-600">إضافة خدمة جديدة</p>
                <p className="text-xs text-slate-300 mt-1">ابدأ بتقديم خدمة جديدة للعملاء</p>
              </div>
            </div>
          </section>

          {/* SECTION 5: Portfolio */}
          <section className="space-y-6">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-1.5 h-6 bg-[#01696F] rounded-full"></div>
                <h2 className="text-2xl font-bold">معرض الأعمال</h2>
              </div>
              <button className="flex items-center gap-2 px-5 py-2.5 bg-white border border-slate-200 text-slate-700 rounded-xl font-bold text-sm shadow-sm hover:bg-slate-50 transition-all">
                <Plus size={18} />
                إضافة عمل جديد
              </button>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <PortfolioCard
                title="لوحة تحكم مالية SaaS"
                desc="واجهة مستخدم كاملة للوحة تحكم خاصة بإدارة المصروفات للشركات الصغيرة مبنية بالـ React."
              />
              <PortfolioCard
                title="تطبيق متجر أزياء"
                desc="تجربة تسوق سلسة تركز على عرض المنتجات بطريقة عصرية وسهلة الاستخدام."
              />
            </div>
          </section>

        </div>

        {/* Right Column: Pricing & Availability (1/3 in RTL, visually on the left) */}
        <div className="space-y-8">
          
          {/* SECTION 3: Pricing Card */}
          <section className="bg-white rounded-2xl border border-slate-100 shadow-sm p-6 sticky top-8">
            <div className="flex items-center gap-2 mb-6 border-b border-slate-50 pb-4">
              <DollarSign size={20} className="text-[#01696F]" />
              <h2 className="text-xl font-bold">التسعير والتواجد</h2>
            </div>

            <div className="space-y-6">
              <div className="space-y-2">
                <label className="text-xs font-bold text-slate-500 uppercase tracking-wider">معدل الساعة</label>
                <div className="relative">
                  <span className="absolute start-4 top-1/2 -translate-y-1/2 text-slate-400 font-bold">$</span>
                  <input type="number" defaultValue="35" className="w-full ps-10 pe-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#01696F]/20 font-bold" />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-xs font-bold text-slate-500 uppercase tracking-wider">الحد الأدنى للميزانية</label>
                <div className="relative">
                  <span className="absolute start-4 top-1/2 -translate-y-1/2 text-slate-400 font-bold">$</span>
                  <input type="number" defaultValue="500" className="w-full ps-10 pe-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#01696F]/20 font-bold" />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-xs font-bold text-slate-500 uppercase tracking-wider">حالة التواجد</label>
                <select
                  value={availability}
                  onChange={(e) => setAvailability(e.target.value)}
                  className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#01696F]/20 font-bold appearance-none cursor-pointer"
                >
                  <option value="متاح">متاح للعمل</option>
                  <option value="مشغول">مشغول حالياً</option>
                  <option value="غير متاح">إجازة / غير متاح</option>
                </select>
              </div>

              <div className="pt-4">
                <button className="w-full py-4 bg-slate-800 text-white rounded-xl font-bold hover:bg-slate-900 transition-all active:scale-95 shadow-lg shadow-slate-200">
                  تحديث بيانات التسعير
                </button>
              </div>

              {/* Status Hint */}
              <div className="flex items-start gap-2 p-3 bg-blue-50 border border-blue-100 rounded-xl">
                <AlertCircle size={16} className="text-blue-500 shrink-0 mt-0.5" />
                <p className="text-[10px] text-blue-700 leading-relaxed">سيظهر هذا للعملاء عند تصفح ملفك الشخصي أو خدماتك.</p>
              </div>
            </div>
          </section>

        </div>

      </div>
    </div>
  );
};

// Helper Component: Service Card
const ServiceCard = ({ title, price, delivery, desc, status }) => {
  return (
    <div className="bg-white rounded-2xl border border-slate-100 p-6 shadow-sm hover:shadow-md transition-shadow group flex flex-col justify-between">
      <div>
        <div className="flex justify-between items-start mb-4">
          <span className={`px-2 py-1 text-[10px] font-bold rounded-md ${status === 'منشورة' ? 'bg-green-50 text-green-600' : 'bg-slate-100 text-slate-500'}`}>
            {status}
          </span>
          <button className="text-slate-400 hover:text-slate-600">
            {status === 'منشورة' ? <Eye size={16} /> : <EyeOff size={16} />}
          </button>
        </div>
        <h3 className="font-bold text-slate-800 mb-2">{title}</h3>
        <p className="text-xs text-slate-500 mb-6 leading-relaxed line-clamp-2">{desc}</p>
      </div>
      <div className="flex items-center justify-between pt-4 border-t border-slate-50">
        <div className="text-[#01696F] font-black text-xl">${price}</div>
        <div className="flex items-center gap-1.5 text-[11px] text-slate-400 font-bold">
          <Clock size={14} />
          {delivery}
        </div>
      </div>
    </div>
  );
};

// Helper Component: Portfolio Card
const PortfolioCard = ({ title, desc }) => {
  return (
    <div className="bg-white rounded-2xl border border-slate-100 overflow-hidden shadow-sm hover:shadow-md transition-shadow group">
      <div className="h-40 bg-slate-50 border-b border-slate-100 relative flex items-center justify-center">
        <Briefcase className="text-slate-300" size={48} />
      </div>
      <div className="p-6">
        <h3 className="font-bold text-slate-800 mb-2">{title}</h3>
        <p className="text-xs text-slate-500 mb-4 leading-relaxed">{desc}</p>
        <button className="text-[#01696F] text-xs font-bold hover:underline flex items-center gap-1">
          <Edit2 size={12} />
          تعديل
        </button>
      </div>
    </div>
  );
};

export default Services;
