import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  CheckCircle2,
  Clock,
  TrendingUp,
  Award,
  ArrowUpRight
} from 'lucide-react';
import ProposalDetailsModal from '../components/ProposalDetailsModal';

const Dashboard = () => {
  const navigate = useNavigate();
  const [selectedProposal, setSelectedProposal] = useState(null);

  // Mock Data
  const stats = [
    { label: 'المشاريع النشطة', value: '3', icon: <Clock className="text-[#01696f]" size={24} />, change: 'حالي' },
    { label: 'الأرباح هذا الشهر', value: '$1,250', icon: <TrendingUp className="text-[#01696f]" size={24} />, change: '↑ 12%', highlight: true },
    { label: 'التقييم العام', value: '4.8', icon: <Award className="text-[#01696f]" size={24} />, change: 'من 5.0' },
    { label: 'نسبة الإنجاز', value: '95%', icon: <CheckCircle2 className="text-[#01696f]" size={24} />, change: 'ممتاز' },
  ];

  const recentRequests = [
    { 
      id: 1, 
      client: 'شركة الرواد للتجارة', 
      task: 'تصميم هوية بصرية كاملة', 
      status: 'بانتظار ردك',
      proposal: {
        title: 'تصميم هوية بصرية كاملة',
        totalPrice: '1,500',
        revisions: 'تعديلين',
        timeline: 'أسبوعين',
        validity: '7 أيام',
        additionalTerms: 'تسليم الملفات المصدرية المفتوحة.',
        milestones: [
          { id: 'm1', title: 'تصميم الشعار', description: 'تقديم 3 نماذج للشعار' },
          { id: 'm2', title: 'تصميم الهوية', description: 'تطبيق الشعار على المطبوعات' }
        ]
      }
    },
    { id: 2, client: 'مؤسسة سماء التقنية', task: 'تطوير تطبيق جوال (المرحلة الأولى)', status: 'تم الإرسال', sent: true },
    { 
      id: 3, 
      client: 'أفق للحلول الرقمية', 
      task: 'استشارة تقنية (مكالمة فيديو)', 
      status: 'بانتظار ردك',
      proposal: {
        title: 'استشارة تقنية (مكالمة فيديو)',
        totalPrice: '150',
        revisions: 'بدون تعديلات',
        timeline: 'يوم واحد',
        validity: '3 أيام',
        additionalTerms: 'المكالمة مدتها ساعة واحدة كحد أقصى.',
        milestones: [
          { id: 'm3', title: 'جلسة الاستشارة', description: 'مكالمة فيديو لمناقشة المتطلبات التقنية.' }
        ]
      }
    },
  ];

  const upcomingDeliveries = [
    { id: 1, title: 'منصة التجارة الإلكترونية', client: 'مجموعة العثيم', progress: 85, dueDate: 'غداً', status: 'urgent' },
    { id: 2, title: 'تحديث واجهة المستخدم (CRM)', client: 'حلول سحابية', progress: 60, dueDate: 'بعد 3 أيام', status: 'normal' },
  ];

  return (
    <div className="p-8 space-y-8">

      {/* Welcome Banner */}
      <div className="bg-gradient-to-br from-[#062c30] via-[#0c4e54] to-[#01696f] rounded-2xl p-8 text-white relative overflow-hidden shadow-lg shadow-[#028090]/20">
        <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div>
            <h1 className="text-3xl font-bold mb-2">مرحباً محمد، إليك ملخص نشاطك اليوم.</h1>
            <p className="text-white/80">لديك 3 رسائل جديدة ومشروع واحد يتطلب تسليماً قريباً.</p>
          </div>
          <button 
            onClick={() => navigate('/projects')}
            className="bg-white text-[#01696f] px-6 py-2.5 rounded-lg font-bold text-sm hover:bg-gray-100 transition-colors shrink-0"
          >
            عرض المهام العاجلة ←
          </button>
        </div>
        {/* Abstract Background Elements */}
        <div className="absolute top-0 start-0 w-64 h-64 bg-white/10 rounded-full -translate-x-1/2 -translate-y-1/2 blur-3xl"></div>
        <TrendingUp className="absolute bottom-4 start-8 text-white/10 w-32 h-32 -scale-x-100 rotate-12" />
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, i) => (
          <div key={i} className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
            <div className="flex justify-between items-start mb-4">
              <div className="p-3 bg-gray-50 rounded-xl">
                {stat.icon}
              </div>
              <span className={`text-xs font-bold px-2 py-1 rounded-full ${stat.highlight ? 'bg-blue-50 text-[#01696f]' : 'bg-gray-100 text-gray-500'
                }`}>
                {stat.change}
              </span>
            </div>
            <p className="text-2xl font-black bg-gradient-to-r from-[#0c4e54] to-[#01696f] bg-clip-text text-transparent mb-1">{stat.value}</p>
            <p className="text-sm text-gray-500 font-medium">{stat.label}</p>
          </div>
        ))}
      </div>

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

        {/* Recent Requests (2/3) */}
        <div className="lg:col-span-2 space-y-6">
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-black bg-gradient-to-r from-[#0c4e54] to-[#01696f] bg-clip-text text-transparent flex items-center gap-2">طلبات وردود حديثة</h2>
            <button className="text-sm text-[#01696f] font-bold hover:underline">عرض الكل</button>
          </div>

          <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
            <div className="divide-y divide-gray-50">
              {recentRequests.map((req) => (
                <div key={req.id} className="p-6 flex items-center justify-between hover:bg-gray-50 transition-colors">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center font-bold text-gray-400">
                      {req.client.split(' ')[0][0]}
                    </div>
                    <div>
                      <h3 className="font-bold text-[#2d3748]">{req.client}</h3>
                      <p className="text-sm text-gray-500">{req.task}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <span className={`px-3 py-1 text-xs font-bold rounded-full ${req.sent ? 'bg-gray-100 text-gray-600' : 'bg-amber-50 text-amber-600 border border-amber-100'
                      }`}>
                      {req.status}
                    </span>
                    {!req.sent && (
                      <button 
                        onClick={() => setSelectedProposal(req.proposal)}
                        className="px-6 py-2 bg-gradient-to-r from-[#01696f] to-[#028090] text-white text-sm font-bold rounded-lg hover:from-[#0c4e54] hover:to-[#01696f] shadow-md shadow-[#01696f]/20 transition-all flex items-center gap-2"
                      >
                        عرض الطلب
                      </button>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Bottom Quick Action */}
          <button className="w-full py-4 border-2 border-dashed border-gray-200 rounded-2xl text-gray-400 font-bold flex items-center justify-center gap-2 hover:border-[#01696f] hover:text-[#01696f] transition-all bg-white/50">
            <span>+</span> إنشاء عرض جديد
          </button>
        </div>

        {/* Imminent Deliveries (1/3) */}
        <div className="space-y-6">
          <h2 className="text-xl font-black bg-gradient-to-r from-[#0c4e54] to-[#01696f] bg-clip-text text-transparent flex items-center gap-2">
            <span className="text-red-500">⚠️</span>
            مشاريع تقترب من التسليم
          </h2>
          <div className="space-y-4">
            {upcomingDeliveries.map((delivery) => (
              <div key={delivery.id} className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm space-y-4">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="font-bold text-gray-800">{delivery.title}</h3>
                    <p className="text-[10px] text-gray-500">العميل: {delivery.client}</p>
                  </div>
                  <span className={`text-[10px] font-bold px-2 py-0.5 rounded ${delivery.status === 'urgent' ? 'bg-red-50 text-red-500' : 'bg-blue-50 text-blue-500'
                    }`}>
                    {delivery.dueDate}
                  </span>
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between text-xs text-gray-500 font-medium">
                    <span>التقدم</span>
                    <span>{delivery.progress}%</span>
                  </div>
                  <div className="w-full h-2 bg-gray-100 rounded-full overflow-hidden">
                    <div
                      className={`h-full rounded-full transition-all duration-500 ${delivery.status === 'urgent' ? 'bg-red-500' : 'bg-[#01696f]'
                        }`}
                      style={{ width: `${delivery.progress}%` }}
                    ></div>
                  </div>
                </div>
              </div>
            ))}

            {/* Scheduler Link */}
            <button className="w-full py-3 bg-white border border-gray-200 text-gray-600 text-sm font-bold rounded-xl hover:bg-gray-50 transition-colors flex items-center justify-center gap-2">
              إدارة جدول العمل
            </button>
          </div>
        </div>

      </div>

      {/* Proposal Details Modal */}
      {selectedProposal && (
        <ProposalDetailsModal 
          proposal={selectedProposal} 
          onClose={() => setSelectedProposal(null)} 
        />
      )}
    </div>
  );
};

export default Dashboard;
