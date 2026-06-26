import { useState, useEffect } from 'react';
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
  ChevronRight,
  X,
  Lock
} from 'lucide-react';
import { useNavigate, useParams } from 'react-router-dom';
import { mockProjects } from '../data/mockProjects';
import ProposalDetailsModal from '../components/ProposalDetailsModal';

const ProjectWorkspace = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [projectState, setProjectState] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    // Find project or fallback to first project for mock purposes
    const proj = mockProjects.find(p => p.id === id) || mockProjects[0];
    setProjectState(JSON.parse(JSON.stringify(proj))); // deep copy to mutate state locally
  }, [id]);

  if (!projectState) return null;

  const activeTaskIndex = projectState.tasks.findIndex(t => t.status === 'active');
  const activeTask = activeTaskIndex !== -1 ? projectState.tasks[activeTaskIndex] : null;

  const handleSimulateSubmit = () => {
    if (!activeTask) return;

    setProjectState(prev => {
      const newState = { ...prev };
      // Mark current as completed
      newState.tasks[activeTaskIndex].status = 'completed';
      // Mark next as active if exists
      if (activeTaskIndex + 1 < newState.tasks.length) {
        newState.tasks[activeTaskIndex + 1].status = 'active';
      } else {
        // Project is fully completed
        newState.status = 'completed';
      }

      // Update progress roughly based on tasks
      const completedCount = newState.tasks.filter(t => t.status === 'completed').length;
      newState.progress = Math.round((completedCount / newState.tasks.length) * 100);

      return newState;
    });

    alert('تم إرسال التسليم للعميل بنجاح!');
  };

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
          <h2 className="text-3xl font-black bg-gradient-to-r from-[#0c4e54] to-[#01696f] bg-clip-text text-transparent flex items-center gap-3">
            <span className="w-2 h-8 bg-gradient-to-br from-[#0c4e54] to-[#01696f] rounded-full"></span>
            مساحة عمل المشروع: {projectState.title}
          </h2>
          <button className="p-2 text-slate-400 hover:text-slate-600 transition-colors">
            <ArrowRight size={24} className="rotate-180" />
          </button>
        </div>

        {/* Dynamic Progress Stepper */}
        <div className="bg-white rounded-3xl border border-slate-100 shadow-sm p-6 mb-10 overflow-x-auto">
          <div className="flex items-center gap-4 min-w-max">
            {projectState.tasks.map((task, idx) => {
              const isCompleted = task.status === 'completed';
              const isActive = task.status === 'active';

              return (
                <div key={task.id} className="flex items-center gap-4">
                  <div className="flex items-center gap-3">
                    <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm shrink-0 transition-colors ${isCompleted ? 'bg-green-100 text-green-600' :
                        isActive ? 'bg-[#01696F] text-white shadow-lg shadow-[#01696F20]' :
                          'bg-slate-100 text-slate-400'
                      }`}>
                      {isCompleted ? <CheckCircle2 size={20} /> : isActive ? (idx + 1) : <Lock size={16} />}
                    </div>
                    <div>
                      <p className={`text-sm font-bold ${isActive ? 'text-slate-800' : 'text-slate-500'}`}>{task.title}</p>
                      <p className="text-[11px] text-slate-400 font-medium">
                        {isCompleted ? 'مكتمل' : isActive ? 'جاري العمل' : 'مغلق'}
                      </p>
                    </div>
                  </div>
                  {idx < projectState.tasks.length - 1 && (
                    <div className={`w-12 h-0.5 rounded-full ${isCompleted ? 'bg-green-200' : 'bg-slate-100'}`}></div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* Escrow Banner */}
        <div className="bg-gradient-to-br from-[#062c30] via-[#0c4e54] to-[#01696f] rounded-2xl p-5 mb-10 flex items-start sm:items-center gap-3 shadow-lg shadow-[#0c4e54]/20">
          <CheckCircle2 size={20} className="text-teal-300 shrink-0 mt-0.5 sm:mt-0" />
          <p className="text-white font-bold text-sm leading-relaxed">
            تم تأمين المبلغ (${projectState.projectValue}) في حساب الضمان (Escrow). يمكنك البدء بالعمل بأمان.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          {/* Right Column: Deliverables (2/3) in LTR, but in RTL it will be on the right naturally if it's the first element */}
          <div className="lg:col-span-2 space-y-8">
            <div className="bg-white rounded-3xl border border-slate-100 shadow-xl shadow-slate-200/40 p-8 space-y-8">
              <h3 className="text-xl font-bold border-b border-slate-50 pb-4">
                التسليمات والمرفقات
                {activeTask && (
                  <span className="text-[#01696F] block mt-2 text-sm font-bold bg-[#01696F]/5 w-fit px-3 py-1 rounded-md">
                    رفع تسليمات المهمة: {activeTask.title}
                  </span>
                )}
              </h3>

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
                <button
                  onClick={handleSimulateSubmit}
                  disabled={!activeTask}
                  className={`w-full py-5 text-white rounded-2xl font-black text-lg flex items-center justify-center gap-3 transition-all ${activeTask
                      ? 'bg-gradient-to-r from-[#01696f] to-[#028090] shadow-md shadow-[#01696f]/20 hover:from-[#0c4e54] hover:to-[#01696f] active:scale-[0.98]'
                      : 'bg-slate-300 cursor-not-allowed shadow-none'
                    }`}
                >
                  {activeTask ? 'إرسال التسليم للعميل' : 'المشروع مكتمل'}
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
                  value={projectState.originalProposal.title}
                />
                <SummaryItem
                  icon={<RefreshCcw size={18} className="text-slate-400" />}
                  label="المراجعات المتفق عليها"
                  value={projectState.originalProposal.revisions}
                />
                <SummaryItem
                  icon={<Calendar size={18} className="text-slate-400" />}
                  label="المدة الزمنية للتسليم"
                  value={projectState.originalProposal.timeline}
                />
              </div>

              <div className="h-[1px] bg-slate-50 my-6" />

              <button
                onClick={() => setIsModalOpen(true)}
                className="w-full flex items-center justify-center gap-2 text-sm font-bold text-[#01696F] hover:underline"
              >
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

      {/* Original Proposal Modal */}
      {isModalOpen && (
        <ProposalDetailsModal 
          proposal={projectState.originalProposal} 
          onClose={() => setIsModalOpen(false)} 
        />
      )}
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
