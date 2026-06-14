import { Clock, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const ProjectsList = () => {
  return (
    <div className="p-8 pb-20 overflow-y-auto h-full bg-[#fcfcfd]">
      {/* SECTION 1: Page Header & Tabs */}
      <header className="max-w-6xl mx-auto mb-10 text-center">
        <h1 className="text-4xl font-black text-slate-800 mb-3 tracking-tight">مشاريعي</h1>
        <p className="text-slate-500 font-medium mb-8">تابع تقدم مشاريعك الحالية وقم برفع التسليمات للعملاء.</p>
        
        <div className="flex justify-center gap-4">
          <button className="px-8 py-2.5 bg-[#01696F] text-white rounded-full font-bold text-sm shadow-lg shadow-[#01696F20] transition-all">
            مشاريع نشطة
          </button>
          <button className="px-8 py-2.5 bg-white border border-slate-200 text-slate-500 rounded-full font-bold text-sm hover:bg-slate-50 transition-all">
            مشاريع مكتملة
          </button>
        </div>
      </header>

      {/* SECTION 2: Active Projects Grid */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 mb-16 text-start">
        <ProjectCard 
          id="1"
          client="مؤسسة سماء"
          value="850"
          title="تطوير واجهة متجر إلكتروني"
          progress={90}
          status="بانتظار مراجعة العميل"
          statusType="warning"
          timeLeft="متبقي يوم واحد"
          urgent={true}
        />
        <ProjectCard 
          id="2"
          client="شركة أفق التقنية"
          value="1,200"
          title="تصميم هوية بصرية كاملة"
          progress={60}
          status="قيد التنفيذ"
          statusType="primary"
          timeLeft="متبقي 3 أيام"
          urgent={false}
          activeWorkspace={true}
        />
      </div>
    </div>
  );
};

// --- Helper Components ---

const ProjectCard = ({ id, client, value, title, progress, status, statusType, timeLeft, urgent, activeWorkspace = false }) => {
  const statusColors = {
    warning: 'bg-amber-50 text-amber-600 border-amber-100',
    primary: 'bg-blue-50 text-[#01696F] border-blue-100',
  };

  return (
    <div className={`bg-white rounded-3xl p-8 border ${activeWorkspace ? 'border-[#01696F] ring-4 ring-[#01696F05]' : 'border-slate-100'} shadow-xl shadow-slate-200/40 relative group flex flex-col`}>
      <div className="flex justify-between items-start mb-6">
        <div>
          <p className="text-xs text-slate-400 font-bold mb-1">{client}</p>
          <h3 className="text-xl font-bold text-slate-800 leading-tight">{title}</h3>
        </div>
        <div className="text-end shrink-0">
          <p className="text-2xl font-black text-[#01696F] leading-none">${value}</p>
        </div>
      </div>

      <div className="mb-8">
        <div className="flex justify-between text-xs font-bold text-slate-500 mb-2">
          <span>نسبة الإنجاز</span>
          <span>{progress}%</span>
        </div>
        <div className="w-full h-2.5 bg-slate-100 rounded-full overflow-hidden text-start rtl:rotate-180">
          <div 
            className="h-full bg-[#01696F] rounded-full transition-all duration-1000" 
            style={{ width: `${progress}%` }}
          ></div>
        </div>
      </div>

      <div className="flex flex-wrap items-center justify-between gap-4 pt-6 border-t border-slate-50 mt-auto">
        <div className="flex items-center gap-3">
          <span className={`px-4 py-1.5 text-[11px] font-black rounded-full border ${statusColors[statusType]}`}>
            {status}
          </span>
          <span className={`text-[11px] font-bold flex items-center gap-1.5 ${urgent ? 'text-red-500' : 'text-slate-400'}`}>
            <Clock size={14} />
            {timeLeft}
          </span>
        </div>
        <Link 
          to={`/projects/${id}`}
          className={`px-6 py-2.5 rounded-xl font-black text-sm transition-all flex items-center gap-2 ${
            activeWorkspace 
              ? 'bg-[#01696F] text-white shadow-lg shadow-[#01696F20]' 
              : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
          }`}
        >
          دخول مساحة العمل
          <ArrowRight size={16} className="rotate-180" />
        </Link>
      </div>
    </div>
  );
};

export default ProjectsList;
