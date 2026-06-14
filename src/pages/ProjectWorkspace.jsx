import { 
  ArrowRight, 
  Upload, 
  Link as LinkIcon, 
  FileText, 
  CheckCircle2, 
  RefreshCcw, 
  Calendar,
  Info,
  Briefcase,
  ChevronRight
} from 'lucide-react';
import { useNavigate, useParams } from 'react-router-dom';

const ProjectWorkspace = () => {
  const navigate = useNavigate();
  const { id } = useParams();

  return (
    <div className="p-8 pb-20 overflow-y-auto h-full bg-[#fcfcfd]">
      <div className="max-w-6xl mx-auto text-start">
        
        {/* Back Button */}
        <button 
          onClick={() => navigate('/projects')}
          className="flex items-center gap-2 text-slate-500 hover:text-[#01696F] transition-colors mb-6 group"
        >
          <ChevronRight size={20} className="transition-transform group-hover:translate-x-1" />
          <span className="text-sm font-bold">العودة للمشاريع</span>
        </button>

        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
          <h2 className="text-3xl font-bold text-slate-800 flex items-center gap-3">
            <span className="w-2 h-8 bg-[#01696F] rounded-full"></span>
            مساحة عمل المشروع: تصميم هوية بصرية
          </h2>
          <button className="p-2 text-slate-400 hover:text-slate-600 transition-colors">
            <ArrowRight size={24} className="rotate-180" />
          </button>
        </div>

        {/* Escrow Banner */}
        <div className="bg-[#e0f7f8] border border-[#01696f15] rounded-2xl p-5 mb-10 flex items-start sm:items-center gap-3 shadow-sm">
          <CheckCircle2 size={20} className="text-[#01696F] shrink-0 mt-0.5 sm:mt-0" />
          <p className="text-[#01696F] font-bold text-sm leading-relaxed">
            تم تأمين المبلغ ($1,200) في حساب الضمان (Escrow). يمكنك البدء بالعمل بأمان.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          {/* Right Column: Deliverables (2/3) in LTR, but in RTL it will be on the right naturally if it's the first element */}
          <div className="lg:col-span-2 space-y-8">
            <div className="bg-white rounded-3xl border border-slate-100 shadow-xl shadow-slate-200/40 p-8 space-y-8">
              <h3 className="text-xl font-bold border-b border-slate-50 pb-4">التسليمات والمرفقات</h3>
              
              {/* Drag & Drop Area */}
              <div className="border-2 border-dashed border-slate-200 rounded-3xl p-12 bg-slate-50/50 flex flex-col items-center justify-center group hover:border-[#01696F] transition-all cursor-pointer text-center">
                <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center text-[#01696F] shadow-md group-hover:scale-110 transition-transform mb-4">
                  <Upload size={32} />
                </div>
                <p className="text-lg font-bold text-slate-700 mb-1">اسحب وأفلت الملفات هنا</p>
                <p className="text-xs text-slate-400">أو انقر لاختيار ملفات من جهازك (PDF, ZIP, FIG, Max 50MB)</p>
              </div>

              {/* External Link Input */}
              <div className="space-y-3">
                <label className="text-sm font-bold text-slate-700 flex items-center gap-2">
                  <LinkIcon size={16} className="text-slate-400" />
                  رابط خارجي (Figma, Notion, Drive)
                </label>
                <input 
                  type="text" 
                  placeholder="أدخل الرابط هنا..."
                  className="w-full px-5 py-4 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#01696F]/10 focus:border-[#01696F] transition-all text-sm font-medium"
                />
              </div>

              {/* Delivery Notes */}
              <div className="space-y-3">
                <label className="text-sm font-bold text-slate-700 block">ملاحظات التسليم</label>
                <textarea 
                  rows={6}
                  placeholder="اكتب ملاحظاتك للعميل حول هذا التسليم..."
                  className="w-full px-5 py-4 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#01696F]/10 focus:border-[#01696F] transition-all text-sm resize-none"
                />
              </div>

              {/* Action Button */}
              <div className="pt-4">
                <button className="w-full py-5 bg-[#01696F] text-white rounded-2xl font-black text-lg shadow-xl shadow-[#01696F20] hover:bg-[#0c4e54] transition-all active:scale-[0.98] flex items-center justify-center gap-3">
                  إرسال التسليم للعميل
                  <ArrowRight size={22} className="rotate-180" />
                </button>
              </div>
            </div>
          </div>

          {/* Left Column: Summary (1/3) */}
          <div className="space-y-6">
            <div className="bg-white rounded-3xl border border-slate-100 shadow-xl shadow-slate-200/40 p-8 space-y-6">
              <h3 className="text-xl font-bold border-b border-slate-50 pb-4">تفاصيل العرض المعتمد</h3>
              
              <div className="space-y-5">
                <SummaryItem 
                  icon={<Briefcase size={18} className="text-slate-400" />} 
                  label="نطاق العمل المتفق عليه" 
                  value="5 شاشات + تصميم شعار" 
                />
                <SummaryItem 
                  icon={<RefreshCcw size={18} className="text-slate-400" />} 
                  label="المراجعات المتبقية" 
                  value="2 / 2" 
                />
                <SummaryItem 
                  icon={<Calendar size={18} className="text-slate-400" />} 
                  label="تاريخ التسليم النهائي" 
                  value="20 أكتوبر 2023" 
                />
              </div>

              <div className="h-[1px] bg-slate-50 my-6" />

              <button className="w-full flex items-center justify-center gap-2 text-sm font-bold text-[#01696F] hover:underline">
                <FileText size={18} />
                عرض العرض المالي الأصلي
              </button>
            </div>

            {/* Help Tip */}
            <div className="p-5 bg-amber-50 border border-amber-100 rounded-2xl flex items-start gap-3">
              <Info size={18} className="text-amber-500 shrink-0 mt-0.5" />
              <p className="text-[11px] text-amber-800 leading-relaxed font-medium">
                تأكد من مراجعة كافة المرفقات قبل الإرسال. بمجرد إرسال التسليم، سيتم إشعار العميل للمراجعة والاعتماد.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const SummaryItem = ({ icon, label, value }) => (
  <div className="flex items-start gap-3">
    <div className="mt-0.5">{icon}</div>
    <div>
      <p className="text-xs text-slate-400 font-bold mb-1">{label}</p>
      <p className="text-sm font-bold text-slate-800">{value}</p>
    </div>
  </div>
);

export default ProjectWorkspace;
