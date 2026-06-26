import { useState } from 'react';
import {
  ChevronRight,
  FileText,
  DollarSign,
  Clock,
  RotateCcw,
  Calendar,
  Send,
  User,
  Info,
  Trash2,
  Plus
} from 'lucide-react';
import { useNavigate, useParams } from 'react-router-dom';

const CreateProposal = () => {
  const navigate = useNavigate();
  const { id } = useParams();

  const chatId = id || "1";

  // Dynamic Milestones State
  const [milestones, setMilestones] = useState([
    { id: Date.now(), title: '', description: '' }
  ]);

  const addMilestone = () => {
    setMilestones([...milestones, { id: Date.now(), title: '', description: '' }]);
  };

  const removeMilestone = (milestoneId) => {
    if (milestones.length > 1) {
      setMilestones(milestones.filter(m => m.id !== milestoneId));
    }
  };

  const updateMilestone = (milestoneId, field, value) => {
    setMilestones(milestones.map(m => m.id === milestoneId ? { ...m, [field]: value } : m));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Structured Milestones to be created as tasks in Workspace:", milestones);
    alert("تم إرسال العرض بنجاح!");
    navigate('/proposals');
  };

  return (
    <div className="p-8 pb-20 overflow-y-auto h-full bg-gray-50">
      {/* SECTION 1: Header & Context */}
      <header className="max-w-4xl mx-auto mb-8">
        <button
          onClick={() => navigate(`/chat/${chatId}`)}
          className="flex items-center gap-2 text-slate-500 hover:text-[#01696F] transition-colors mb-6 group"
        >
          <ChevronRight size={20} className="transition-transform group-hover:translate-x-1" />
          <span className="text-sm font-bold">العودة للمحادثة</span>
        </button>

        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <h1 className="text-3xl font-bold text-slate-800 mb-2">إنشاء عرض سعر</h1>
            <p className="text-slate-500 text-sm">أرسل عرضاً نهائياً بناءً على ما تم الاتفاق عليه في المحادثة.</p>
          </div>

          {/* Client Info Card */}
          <div className="bg-white border border-slate-200 rounded-2xl p-4 flex items-center gap-4 shadow-sm min-w-[320px]">
            <div className="w-12 h-12 bg-slate-100 rounded-xl flex items-center justify-center text-slate-300 shrink-0">
              <User size={24} />
            </div>
            <div className="min-w-0 text-start">
              <h3 className="font-bold text-slate-800 truncate">شركة أفق التقنية</h3>
              <p className="text-[11px] text-slate-500 font-medium">بناءً على طلب: <span className="text-[#01696F]">تصميم هوية بصرية</span></p>
            </div>
          </div>
        </div>
      </header>

      {/* SECTION 2: The Proposal Form */}
      <form onSubmit={handleSubmit} className="max-w-4xl mx-auto">
        <div className="bg-white border border-slate-200 rounded-3xl shadow-xl shadow-slate-200/50 overflow-hidden text-start">

          <div className="p-8 space-y-10">

            {/* Part 1: Basic Details */}
            <div className="space-y-6">
              <div className="flex items-center gap-2 text-slate-400 border-b border-slate-50 pb-2">
                <FileText size={18} className="text-[#01696F]" />
                <h2 className="text-sm font-bold uppercase tracking-wider">تفاصيل العرض والمراحل</h2>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-bold text-slate-700 block">عنوان العرض</label>
                <input
                  type="text"
                  required
                  placeholder="مثال: تصميم هوية بصرية كاملة مع بوسترات السوشيال ميديا"
                  className="w-full px-5 py-4 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#01696F]/10 focus:border-[#01696F] transition-all text-sm font-medium"
                />
              </div>

              {/* Dynamic Milestone Builder */}
              <div className="space-y-4 pt-4">
                <label className="text-sm font-bold text-slate-700 block">مراحل العمل والتسليمات (Milestones)</label>
                <p className="text-xs text-slate-500 mb-4">قسّم مشروعك إلى مراحل واضحة. ستتحول هذه المراحل تلقائياً إلى مهام في مساحة عمل المشروع.</p>

                <div className="space-y-4">
                  {milestones.map((milestone, index) => (
                    <div key={milestone.id} className="p-5 border border-slate-200 rounded-2xl bg-white space-y-4 relative group shadow-sm">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <span className="text-xs font-bold text-[#01696F] bg-[#01696F]/10 px-3 py-1.5 rounded-lg">
                            المرحلة {index + 1}
                          </span>
                          <span className="text-xs font-bold text-slate-500">
                            (تمثل {Math.round(100 / milestones.length)}% من قيمة المشروع)
                          </span>
                        </div>
                        {milestones.length > 1 && (
                          <button
                            type="button"
                            onClick={() => removeMilestone(milestone.id)}
                            className="text-slate-400 hover:text-red-500 bg-slate-50 hover:bg-red-50 p-2 rounded-lg transition-colors"
                          >
                            <Trash2 size={16} />
                          </button>
                        )}
                      </div>

                      <div className="space-y-2">
                        <input
                          type="text"
                          required
                          placeholder="عنوان المرحلة (مثال: تصميم الواجهات المبدئية)"
                          value={milestone.title}
                          onChange={(e) => updateMilestone(milestone.id, 'title', e.target.value)}
                          className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#01696F]/10 focus:border-[#01696F] transition-all text-sm font-bold"
                        />
                      </div>

                      <textarea
                        rows={2}
                        required
                        placeholder="وصف تفصيلي لما سيتم إنجازه وتسليمه في هذه المرحلة للعميل..."
                        value={milestone.description}
                        onChange={(e) => updateMilestone(milestone.id, 'description', e.target.value)}
                        className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#01696F]/10 focus:border-[#01696F] transition-all text-sm resize-none leading-relaxed"
                      />
                    </div>
                  ))}
                </div>

                <button
                  type="button"
                  onClick={addMilestone}
                  className="w-full py-4 border-2 border-dashed border-slate-300 rounded-2xl text-slate-500 font-bold text-sm hover:border-[#01696F] hover:text-[#01696F] transition-all flex items-center justify-center gap-2 bg-slate-50 hover:bg-[#01696F]/5"
                >
                  <Plus size={18} />
                  إضافة مرحلة تسليم جديدة
                </button>
              </div>
            </div>

            {/* Part 2: Cost & Timeline */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-4 border-t border-slate-50">
              <div className="space-y-6">
                <div className="flex items-center gap-2 text-slate-400 border-b border-slate-50 pb-2">
                  <DollarSign size={18} className="text-[#01696F]" />
                  <h2 className="text-sm font-bold uppercase tracking-wider">التكلفة والمدة الإجمالية</h2>
                </div>

                <div className="space-y-4">
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-slate-700 block">السعر الإجمالي ($)</label>
                    <div className="relative">
                      <span className="absolute start-4 top-1/2 -translate-y-1/2 text-slate-400 font-bold">$</span>
                      <input
                        type="number"
                        required
                        placeholder="0.00"
                        className="w-full ps-10 pe-4 py-4 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#01696F]/10 focus:border-[#01696F] transition-all font-bold text-lg"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-bold text-slate-700 block">مدة التسليم الكلية</label>
                    <div className="relative">
                      <select className="w-full ps-12 pe-4 py-4 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#01696F]/10 focus:border-[#01696F] transition-all text-sm font-bold appearance-none cursor-pointer">
                        <option value="">اختر مدة التنفيذ</option>
                        <option value="3">3 أيام</option>
                        <option value="7">أسبوع واحد</option>
                        <option value="14">أسبوعين</option>
                        <option value="30">شهر واحد</option>
                        <option value="99">أكثر من شهر</option>
                      </select>
                      <Clock size={18} className="absolute start-4 top-1/2 -translate-y-1/2 text-slate-300 pointer-events-none" />
                    </div>
                  </div>
                </div>
              </div>

              {/* Part 3: Conditions */}
              <div className="space-y-6">
                <div className="flex items-center gap-2 text-slate-400 border-b border-slate-50 pb-2">
                  <Info size={18} className="text-[#01696F]" />
                  <h2 className="text-sm font-bold uppercase tracking-wider">الشروط والصلاحية</h2>
                </div>

                <div className="space-y-4">
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-slate-700 block">عدد التعديلات المسموحة</label>
                    <div className="relative">
                      <select className="w-full ps-12 pe-4 py-4 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#01696F]/10 focus:border-[#01696F] transition-all text-sm font-bold appearance-none cursor-pointer">
                        <option value="0">بدون تعديلات</option>
                        <option value="1">تعديل واحد</option>
                        <option value="2" selected>تعديلين</option>
                        <option value="3">3 تعديلات</option>
                        <option value="-1">تعديلات غير محدودة</option>
                      </select>
                      <RotateCcw size={18} className="absolute start-4 top-1/2 -translate-y-1/2 text-slate-300 pointer-events-none" />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-bold text-slate-700 block">صلاحية العرض</label>
                    <div className="relative">
                      <select className="w-full ps-12 pe-4 py-4 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#01696F]/10 focus:border-[#01696F] transition-all text-sm font-bold appearance-none cursor-pointer">
                        <option value="3">3 أيام</option>
                        <option value="7" selected>7 أيام</option>
                        <option value="14">14 يوم</option>
                        <option value="30">30 يوم</option>
                      </select>
                      <Calendar size={18} className="absolute start-4 top-1/2 -translate-y-1/2 text-slate-300 pointer-events-none" />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Part 4: Additional Terms */}
            <div className="space-y-4 border-t border-slate-50 pt-4">
              <div className="flex items-center gap-2 text-slate-400 border-b border-slate-50 pb-2">
                <h2 className="text-sm font-bold uppercase tracking-wider">الشروط الإضافية (اختياري)</h2>
              </div>
              <textarea
                rows={3}
                placeholder="أضف أي شروط خاصة بالدفعات، حقوق الملكية، أو سياسات الإلغاء..."
                className="w-full px-5 py-4 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#01696F]/10 focus:border-[#01696F] transition-all text-sm resize-none"
              />
            </div>

          </div>

          {/* SECTION 3: Action Footer */}
          <footer className="bg-slate-50/50 border-t border-slate-100 p-8 flex flex-col md:flex-row items-center justify-between gap-6">
            <button
              type="button"
              onClick={() => navigate(`/chat/${chatId}`)}
              className="px-10 py-4 text-slate-400 hover:text-red-500 font-bold transition-colors order-2 md:order-1"
            >
              إلغاء
            </button>
            <button
              type="submit"
              className="w-full md:w-auto flex items-center justify-center gap-3 px-12 py-4 bg-[#01696F] text-white rounded-2xl font-bold shadow-xl shadow-[#01696F20] hover:bg-[#0c4e54] transition-all hover:scale-[1.02] active:scale-[0.98] order-1 md:order-2 group"
            >
              إرسال العرض للعميل
              <Send size={20} className="rotate-180 transition-transform group-hover:-translate-x-1" />
            </button>
          </footer>

        </div>
      </form>

      {/* Helper Warning Tip */}
      <div className="max-w-4xl mx-auto mt-8 flex items-start gap-3 p-4 bg-amber-50 border border-amber-100 rounded-2xl">
        <Info size={20} className="text-amber-500 shrink-0 mt-0.5" />
        <p className="text-xs text-amber-800 leading-relaxed text-start">
          <strong>نصيحة:</strong> تأكد من أن مراحل العمل واضحة ومفصلة. بمجرد إرسال العرض وقبوله من العميل، ستتحول هذه المراحل تلقائياً إلى مهام تسليم في مساحة عمل المشروع الخاصة بك.
        </p>
      </div>
    </div>
  );
};

export default CreateProposal;
