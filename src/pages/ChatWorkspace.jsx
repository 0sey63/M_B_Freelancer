import {
  ArrowRight,
  Plus,
  Paperclip,
  Send,
  FileText,
  User
} from 'lucide-react';
import { useNavigate, useParams } from 'react-router-dom';

const ChatWorkspace = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const chatId = id || "1";

  return (
    <div className="flex flex-col h-full bg-white relative">
      {/* SECTION 1: Chat Header */}
      <header className="h-20 bg-white border-b border-gray-200 flex items-center justify-between px-8 shrink-0 z-10 shadow-sm">
        {/* Right Side: Back & Client Info (RTL -> Visual Right) */}
        <div className="flex items-center gap-4">
          <button
            onClick={() => navigate('/proposals')}
            className="p-2 hover:bg-gray-100 rounded-full transition-colors text-slate-500"
          >
            <ArrowRight size={24} />
          </button>
          <div className="relative">
            <div className="w-12 h-12 rounded-xl bg-slate-100 flex items-center justify-center border border-gray-100 overflow-hidden">
              <User size={28} className="text-slate-300" />
            </div>
            <div className="absolute -bottom-1 -end-1 w-3.5 h-3.5 bg-green-500 border-2 border-white rounded-full"></div>
          </div>
          <div>
            <h2 className="font-bold text-lg text-slate-800">شركة أفق التقنية</h2>
            <p className="text-xs text-slate-500 font-medium">استفسار عن تصميم هوية بصرية</p>
          </div>
        </div>

        {/* Left Side: Actions (RTL -> Visual Left) */}
        <div className="flex items-center gap-3">
          <button
            onClick={() => navigate(`/chat/${chatId}/create-proposal`)}
            className="flex items-center gap-2 px-6 py-3 bg-[#01696F] text-white rounded-xl font-bold text-sm shadow-lg shadow-[#01696F20] hover:bg-[#0c4e54] transition-all active:scale-95"
          >
            <Plus size={18} />
            إنشاء عرض سعر
          </button>
        </div>
      </header>

      {/* SECTION 2: Chat Area (Scrollable) */}
      <div className="flex-1 overflow-y-auto p-8 space-y-8 bg-[#fcfcfd]">

        {/* 1. Initial Context Message (System) */}
        <div className="flex justify-center">
          <div className="bg-slate-100/50 border border-slate-200/60 rounded-full px-6 py-2 flex items-center gap-3">
            <FileText size={14} className="text-slate-400" />
            <p className="text-[11px] font-bold text-slate-500 uppercase tracking-tight">
              طلب مبدئي: <span className="text-slate-700">تصميم هوية بصرية</span>
              <span className="mx-2 text-slate-300">•</span>
              ميزانية متوقعة: <span className="text-[#01696F]">$1000</span>
            </p>
          </div>
        </div>

        {/* 2. Client Message (Received -> RTL starts from right) */}
        <div className="flex justify-start">
          <div className="max-w-[60%] flex gap-4">
            <div className="w-9 h-9 rounded-lg bg-slate-100 shrink-0 flex items-center justify-center text-slate-300">
              <User size={20} />
            </div>
            <div className="space-y-1">
              <div className="bg-white border border-gray-200 p-4 rounded-2xl rounded-tr-none shadow-sm text-sm leading-relaxed text-slate-700">
                مرحباً محمد، هل يمكننا إضافة تصميم بوسترات سوشيال ميديا للعرض؟
              </div>
              <span className="text-[10px] text-slate-400 font-medium px-1">10:42 ص</span>
            </div>
          </div>
        </div>

        {/* 3. Freelancer Message (Sent -> RTL ends at left) */}
        <div className="flex justify-end">
          <div className="max-w-[60%] space-y-1 text-start">
            <div className="bg-[#01696F] text-white p-4 rounded-2xl rounded-tl-none shadow-md text-sm leading-relaxed">
              أهلاً بك. نعم بالتأكيد، يمكنني إضافة 10 تصاميم ضمن الباقة. سأقوم بتحديث عرض السعر وإرساله لك الآن.
            </div>
            <div className="flex items-center justify-end gap-1 px-1">
              <span className="text-[10px] text-slate-400 font-medium">10:45 ص</span>
            </div>
          </div>
        </div>

        {/* 4. Interactive Action Message (Center) */}
        <div className="flex justify-center py-4">
          <div className="bg-white border border-gray-100 rounded-3xl p-8 shadow-xl shadow-slate-200/50 max-w-sm w-full text-center space-y-5 border-t-4 border-t-[#01696F]">
            <div className="w-14 h-14 bg-[#01696F10] text-[#01696F] rounded-2xl flex items-center justify-center mx-auto">
              <FileText size={28} />
            </div>
            <div>
              <h3 className="font-bold text-lg text-slate-800 mb-1">تم إرسال عرض السعر</h3>
              <p className="text-xs text-slate-500 leading-relaxed">
                قام المستقل بإرسال عرض سعر (رقم #1024) بقيمة <span className="font-bold text-slate-800">$1,200</span>.
              </p>
            </div>
            <button className="w-full py-3 bg-gray-50 border border-gray-100 text-slate-600 rounded-xl font-bold text-xs hover:bg-gray-100 transition-colors flex items-center justify-center gap-2">
              عرض التفاصيل
            </button>
          </div>
        </div>

      </div>

      {/* SECTION 3: Message Composer */}
      <footer className="p-6 bg-white border-t border-gray-200 shrink-0">
        <div className="max-w-4xl mx-auto flex items-end gap-4">
          <div className="flex-1 bg-gray-50 border border-gray-200 rounded-2xl p-2.5 flex items-center gap-2 focus-within:ring-2 focus-within:ring-[#01696F15] focus-within:border-[#01696F] transition-all">
            <button className="p-2 text-slate-400 hover:text-[#01696F] transition-colors rounded-lg hover:bg-white shadow-none hover:shadow-sm">
              <Paperclip size={22} />
            </button>
            <input
              type="text"
              placeholder="اكتب رسالتك هنا..."
              className="flex-1 bg-transparent border-none focus:outline-none focus:ring-0 text-sm py-2 placeholder:text-slate-400 text-slate-700"
            />
          </div>
          <button className="w-14 h-14 bg-[#01696F] text-white rounded-2xl flex items-center justify-center shadow-lg shadow-[#01696F20] hover:bg-[#0c4e54] transition-all hover:scale-105 active:scale-95 group shrink-0">
            <Send size={22} className="rotate-180 group-hover:-translate-x-1 transition-transform" />
          </button>
        </div>
      </footer>
    </div>
  );
};

export default ChatWorkspace;
