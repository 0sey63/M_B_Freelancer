import { useState } from 'react';
import { 
  MessageSquare, 
  CheckCircle2, 
  XCircle, 
  Clock, 
  ChevronLeft, 
  MoreVertical,
  Search,
  Filter,
  Calendar,
  Wallet,
  ArrowUpRight,
  User
} from 'lucide-react';
import { Link } from 'react-router-dom';

const ProposalsOrders = () => {
  const [activeTab, setActiveTab] = useState('negotiation');

  return (
    <div className="p-8">
      {/* SECTION 1: Page Header */}
      <header className="mb-8">
        <h1 className="text-3xl font-bold text-slate-800 mb-2">العروض والطلبات</h1>
        <p className="text-slate-500 max-w-2xl">
          أدر طلبات العملاء، تفاوض على المشاريع، وتابع عروض الأسعار المرسلة.
        </p>
      </header>

      {/* SECTION 2: Tabs Navigation */}
      <div className="flex border-b border-gray-200 mb-8 gap-8 overflow-x-auto whitespace-nowrap">
        <TabButton 
          label="قيد التفاوض" 
          active={activeTab === 'negotiation'} 
          onClick={() => setActiveTab('negotiation')} 
        />
        <TabButton 
          label="الطلبات المباشرة" 
          active={activeTab === 'direct'} 
          onClick={() => setActiveTab('direct')} 
        />
        <TabButton 
          label="العروض المرسلة" 
          active={activeTab === 'sent'} 
          onClick={() => setActiveTab('sent')} 
        />
      </div>

      {/* SECTION 3: Tab Content Area */}
      <div>
        
        {/* A. Content for "قيد التفاوض" (Inquiries & Chats) */}
        {activeTab === 'negotiation' && (
          <section className="animate-in fade-in slide-in-from-bottom-4 duration-500">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-xl font-bold flex items-center gap-2">
                <span className="w-1.5 h-6 bg-[#01696F] rounded-full"></span>
                قيد التفاوض
              </h2>
              <button className="text-sm text-[#01696F] font-bold hover:underline">تصفية</button>
            </div>
            <div className="grid grid-cols-1 gap-4">
              <NegotiationCard 
                client="أحمد محمد"
                service="تصميم واجهة مستخدم لتطبيق جوال"
                lastMsg="مرحباً، لقد اطلعت على معرض أعمالك وأعجبني جداً. هل يمكننا مناقشة تفاصيل المشروع..."
                time="منذ ساعتين"
                status="بانتظار ردك"
                statusColor="bg-amber-50 text-amber-600 border-amber-100"
              />
              <NegotiationCard 
                client="شركة الأفق"
                service="برمجة موقع تعريفي للشركة"
                lastMsg="نحتاج إلى بعض التعديلات على النطاق المقترح، هل يمكننا ترتيب مكالمة غداً؟"
                time="أمس"
                status="بانتظار العميل"
                statusColor="bg-slate-100 text-slate-500 border-slate-200"
              />
            </div>
          </section>
        )}

        {/* B. Content for "الطلبات المباشرة" (Direct Orders) */}
        {activeTab === 'direct' && (
          <section className="animate-in fade-in slide-in-from-bottom-4 duration-500">
            <div className="flex items-center gap-3 mb-6">
              <h2 className="text-xl font-bold flex items-center gap-2">
                <span className="w-1.5 h-6 bg-[#01696F] rounded-full"></span>
                الطلبات المباشرة
              </h2>
              <span className="bg-blue-100 text-[#01696F] text-[10px] font-bold px-2 py-0.5 rounded-full uppercase">جديد</span>
            </div>
            <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">
              <DirectOrderCard 
                client="مريم خالد"
                service="تصميم شعار وهوية بصرية"
                price="500"
                delivery="15 أكتوبر 2023 (بعد 5 أيام)"
              />
              <DirectOrderCard 
                client="مؤسسة التقنية الذكية"
                service="كتابة محتوى لمقالات تقنية"
                price="350"
                delivery="20 أكتوبر 2023 (بعد 10 أيام)"
              />
            </div>
          </section>
        )}

        {/* C. Content for "العروض المرسلة" (Sent Proposals) */}
        {activeTab === 'sent' && (
          <section className="animate-in fade-in slide-in-from-bottom-4 duration-500">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-bold flex items-center gap-2">
                <span className="w-1.5 h-6 bg-[#01696F] rounded-full"></span>
                العروض المرسلة مؤخراً
              </h2>
            </div>
            <div className="bg-white rounded-2xl border border-gray-200 shadow-sm overflow-hidden divide-y divide-gray-100">
              <SentProposalRow 
                client="د. سامي عبدالله"
                title="تطوير منصة تعليمية متكاملة"
                amount="1,200"
                date="10 أكتوبر"
                status="قيد المراجعة"
                statusType="pending"
              />
              <SentProposalRow 
                client="متجر الأناقة"
                title="حملة تسويق رقمي لشهر نوفمبر"
                amount="850"
                date="05 أكتوبر"
                status="مقبول"
                statusType="accepted"
              />
            </div>
          </section>
        )}

      </div>
    </div>
  );
};

// --- Helper Components ---

const TabButton = ({ label, active, onClick }) => (
  <button 
    onClick={onClick}
    className={`pb-4 px-2 text-sm font-bold transition-all border-b-2 ${
      active 
        ? 'text-[#01696F] border-[#01696F]' 
        : 'text-slate-400 border-transparent hover:text-slate-600'
    }`}
  >
    {label}
  </button>
);

const NegotiationCard = ({ client, service, lastMsg, time, status, statusColor }) => (
  <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow group flex flex-col md:flex-row md:items-center justify-between gap-6 cursor-pointer">
    <div className="flex gap-4 items-start">
      <div className="w-12 h-12 rounded-full bg-slate-50 border border-slate-100 flex items-center justify-center text-slate-400 shrink-0">
        <User size={24} />
      </div>
      <div>
        <div className="flex items-center gap-3 mb-1">
          <h3 className="font-bold text-slate-800">{client}</h3>
          <span className={`px-2 py-0.5 text-[10px] font-bold rounded-md border ${statusColor}`}>
            {status}
          </span>
        </div>
        <p className="text-sm font-bold text-[#01696F] mb-2">{service}</p>
        <p className="text-sm text-slate-500 line-clamp-1">"{lastMsg}"</p>
      </div>
    </div>
    
    <div className="flex flex-col md:items-end gap-3 shrink-0">
      <div className="flex items-center gap-1.5 text-xs text-slate-400 font-medium">
        <Clock size={14} />
        {time}
      </div>
      <Link to="/chat/1" className="px-5 py-2.5 bg-white border border-gray-200 text-slate-600 rounded-xl font-bold text-sm shadow-sm hover:bg-slate-50 hover:text-[#01696F] transition-all flex items-center gap-2">
        <MessageSquare size={16} />
        فتح المحادثة
      </Link>
    </div>
  </div>
);

const DirectOrderCard = ({ client, service, price, delivery }) => (
  <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow flex flex-col h-full">
    <div className="flex justify-between items-start mb-4">
      <div>
        <p className="text-xs text-slate-400 font-bold mb-1">العميل: {client}</p>
        <h3 className="font-bold text-slate-800 text-lg leading-tight max-w-[200px]">{service}</h3>
      </div>
      <div className="text-end shrink-0">
        <p className="text-[#01696F] font-black text-2xl leading-none">${price}</p>
        <p className="text-[10px] text-slate-400 font-bold uppercase mt-1">الميزانية المقترحة</p>
      </div>
    </div>

    <div className="bg-slate-50 p-4 rounded-xl flex items-center gap-3 mb-6 flex-1">
      <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center text-[#01696F] shadow-sm shrink-0">
        <Calendar size={20} />
      </div>
      <div>
        <p className="text-[10px] text-slate-400 font-bold uppercase">تاريخ التسليم المطلوب</p>
        <p className="text-sm font-bold text-slate-700">{delivery}</p>
      </div>
    </div>

    <div className="flex items-center gap-3 pt-2 mt-auto">
      <button className="flex-1 py-3 bg-[#01696F] text-white rounded-xl font-bold text-sm shadow-lg shadow-[#01696F15] hover:bg-[#0c4e54] transition-all flex items-center justify-center gap-2">
        <CheckCircle2 size={18} />
        قبول وبدء العمل
      </button>
      <button className="px-5 py-3 bg-white border border-gray-200 text-slate-600 rounded-xl font-bold text-sm hover:bg-red-50 hover:text-red-600 hover:border-red-100 transition-all flex items-center justify-center gap-2 group">
        <XCircle size={18} />
        رفض
      </button>
    </div>
  </div>
);

const SentProposalRow = ({ client, title, amount, date, status, statusType }) => {
  const statusStyles = {
    pending: 'bg-amber-50 text-amber-600 border-amber-100',
    accepted: 'bg-green-50 text-green-600 border-green-100',
    rejected: 'bg-red-50 text-red-500 border-red-100',
  };

  return (
    <div className="p-6 flex flex-col lg:flex-row lg:items-center justify-between gap-6 hover:bg-slate-50 transition-colors group cursor-pointer">
      <div>
        <h3 className="font-bold text-slate-800 text-lg mb-1 group-hover:text-[#01696F] transition-colors">{title}</h3>
        <p className="text-sm text-slate-500">العميل: {client}</p>
      </div>

      <div className="flex items-center gap-8 md:gap-12 shrink-0 flex-wrap">
        <div className="text-center">
          <p className="text-sm text-slate-600 font-bold mb-1">{date}</p>
          <p className="text-[10px] text-slate-400 uppercase tracking-tighter">تاريخ الإرسال</p>
        </div>
        <div className="text-center">
          <p className="text-lg font-black text-slate-800">${amount}</p>
          <p className="text-[10px] text-slate-400 uppercase tracking-tighter">القيمة الإجمالية</p>
        </div>
        <div className="w-28 text-center">
          <span className={`px-3 py-1 text-[10px] font-bold rounded-full border ${statusStyles[statusType]}`}>
            {status}
          </span>
        </div>
        <button className="flex items-center gap-2 text-sm font-bold text-slate-600 hover:text-[#01696F] transition-colors">
          عرض التفاصيل
          <ChevronLeft size={18} className="transition-transform group-hover:-translate-x-1" />
        </button>
      </div>
    </div>
  );
};

export default ProposalsOrders;
