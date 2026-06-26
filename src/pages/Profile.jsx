import {
  User,
  Camera,
  Save,
  ExternalLink,
  X
} from 'lucide-react';

const Profile = () => {
  return (
    <div className="p-8 space-y-8">
      {/* SECTION 1: Page Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold mb-2">ملفي</h1>
          <p className="text-slate-500">قم بإدارة بياناتك المهنية والشخصية.</p>
        </div>
        <button className="flex items-center gap-2 px-6 py-2.5 bg-white border border-slate-200 text-slate-700 rounded-xl font-bold text-sm shadow-sm hover:bg-slate-50 transition-all shrink-0">
          <ExternalLink size={18} />
          معاينة الملف
        </button>
      </div>

      <div className="max-w-4xl mx-auto">

        {/* SECTION 2: Personal Info Card */}
        <section className="bg-white rounded-2xl border border-slate-100 shadow-sm p-8">
          <div className="flex items-center gap-2 mb-8 border-b border-slate-50 pb-4">
            <User size={20} className="text-[#01696F]" />
            <h2 className="text-xl font-bold">المعلومات الشخصية</h2>
          </div>

          <div className="flex flex-col md:flex-row gap-10">
            {/* Avatar Section */}
            <div className="flex flex-col items-center gap-4 shrink-0">
              <div className="relative group">
                <div className="w-32 h-32 rounded-full bg-slate-100 border-2 border-slate-50 overflow-hidden flex items-center justify-center">
                  <User size={64} className="text-slate-300" />
                </div>
                <button className="absolute bottom-0 end-0 p-2 bg-[#01696F] text-white rounded-full border-2 border-white shadow-lg hover:bg-[#0c4e54] transition-colors">
                  <Camera size={16} />
                </button>
              </div>
              <p className="text-[10px] text-slate-400 text-center max-w-[120px]">يفضل صورة احترافية بخلفية سادة</p>
            </div>

            {/* Form Section */}
            <div className="flex-1 grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-sm font-bold text-slate-700">الاسم الكامل</label>
                <input type="text" defaultValue="محمد أحمد" className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#01696F]/20 focus:border-[#01696F] transition-all" />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold text-slate-700">المسمى الوظيفي</label>
                <input type="text" defaultValue="مطور واجهات أمامية" className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#01696F]/20 focus:border-[#01696F] transition-all" />
              </div>
              <div className="md:col-span-2 space-y-2">
                <label className="text-sm font-bold text-slate-700">نبذة تعريفية</label>
                <textarea rows={4} className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#01696F]/20 focus:border-[#01696F] transition-all resize-none" defaultValue="مطور واجهات متخصص في بناء تجارب مستخدم تفاعلية للمنصات الرقمية وتطبيقات الويب."></textarea>
              </div>
              <div className="md:col-span-2 space-y-2">
                <label className="text-sm font-bold text-slate-700">المهارات</label>
                <div className="flex flex-wrap gap-2 p-3 bg-slate-50 border border-slate-200 rounded-xl min-h-[48px]">
                  {['React', 'Tailwind CSS', 'JavaScript', 'Vite'].map(skill => (
                    <span key={skill} className="px-3 py-1 bg-white border border-slate-200 text-[#01696F] text-xs font-bold rounded-lg flex items-center gap-2">
                      {skill} <X size={12} className="cursor-pointer text-slate-400 hover:text-red-500" />
                    </span>
                  ))}
                  <button className="text-[#01696F] text-xs font-bold hover:underline">+ أضف مهارة</button>
                </div>
              </div>
              <div className="md:col-span-2 space-y-2">
                <label className="text-sm font-bold text-slate-700">القطاعات التي تخدمها</label>
                <div className="flex flex-wrap gap-2">
                  {['التكنولوجيا المالية', 'التجارة الإلكترونية', 'التعليم الرقمي'].map(ind => (
                    <span key={ind} className="px-3 py-1 bg-[#01696F10] text-[#01696F] text-xs font-bold rounded-full">
                      {ind}
                    </span>
                  ))}
                  <button className="px-3 py-1 border border-dashed border-slate-300 text-slate-400 text-xs font-bold rounded-full hover:border-[#01696F] hover:text-[#01696F] transition-all">
                    + اختيار قطاع
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-10 flex justify-end">
            <button className="flex items-center gap-2 px-8 py-3 bg-[#01696F] text-white rounded-xl font-bold shadow-lg shadow-[#01696F15] hover:bg-[#0c4e54] transition-all active:scale-95">
              <Save size={18} />
              حفظ التغييرات
            </button>
          </div>
        </section>

      </div>
    </div>
  );
};

export default Profile;
