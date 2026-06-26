import { useState } from 'react';
import {
  DollarSign,
  Wallet,
  ArrowDownToLine,
  Clock,
  TrendingUp,
  CheckCircle2,
  AlertCircle,
  Download,
  Calendar,
  ChevronDown,
  X,
  Landmark,
  Smartphone,
  Send
} from 'lucide-react';
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer
} from 'recharts';

const monthlyData = [
  { name: 'يناير', value: 1200 },
  { name: 'فبراير', value: 1800 },
  { name: 'مارس', value: 1400 },
  { name: 'أبريل', value: 2450 },
  { name: 'مايو', value: 1600 },
  { name: 'يونيو', value: 2100 },
  { name: 'يوليو', value: 2450 },
];

const dailyData = Array.from({ length: 30 }, (_, i) => ({
  name: `${i + 1}`,
  value: Math.floor(Math.random() * 500) + 100,
}));

const Earnings = () => {
  const [viewType, setViewType] = useState('monthly'); // 'monthly' or 'daily'

  // Payout Modal State
  const [isPayoutModalOpen, setIsPayoutModalOpen] = useState(false);
  const [withdrawalAmount, setWithdrawalAmount] = useState('');
  const [withdrawalMethod, setWithdrawalMethod] = useState('');
  const [formData, setFormData] = useState({
    bankCurrency: '',
    bankAccount: '',
    fullName: '',
    phoneNumber: '',
  });

  const AVAILABLE_BALANCE = 1250;

  const handleAmountChange = (e) => {
    const value = e.target.value;
    if (value === '' || (Number(value) >= 0 && Number(value) <= AVAILABLE_BALANCE)) {
      setWithdrawalAmount(value);
    }
  };

  const handleMethodSelect = (method) => {
    setWithdrawalMethod(method);
    // Reset specific form data when switching methods
    setFormData({
      bankCurrency: '',
      bankAccount: '',
      fullName: '',
      phoneNumber: '',
    });
  };

  const isFormValid = () => {
    if (!withdrawalAmount || Number(withdrawalAmount) <= 0 || Number(withdrawalAmount) > AVAILABLE_BALANCE) return false;
    if (!withdrawalMethod) return false;

    if (withdrawalMethod === 'bank') {
      if (!formData.bankCurrency || !formData.bankAccount) return false;
    } else if (withdrawalMethod === 'jeeb' || withdrawalMethod === 'local') {
      if (!formData.fullName || !formData.phoneNumber) return false;
    }

    return true;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isFormValid()) {
      alert('تم إرسال طلب السحب بنجاح');
      setIsPayoutModalOpen(false);
      // Reset form
      setWithdrawalAmount('');
      setWithdrawalMethod('');
      setFormData({
        bankCurrency: '',
        bankAccount: '',
        fullName: '',
        phoneNumber: '',
      });
    }
  };

  return (
    <div className="p-8 pb-20 overflow-y-auto h-full bg-[#fcfcfd]">
      {/* SECTION 1: Page Header */}
      <header className="max-w-6xl mx-auto flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10 text-start">
        <div className="space-y-1">
          <h1 className="text-3xl font-black bg-gradient-to-r from-[#0c4e54] to-[#01696f] bg-clip-text text-transparent tracking-tight">الأرباح</h1>
          <p className="text-slate-500 font-medium text-sm">تابع إيراداتك، الأرصدة المعلقة في حساب الضمان (Escrow)، واطلب سحب أرباحك المتاحة.</p>
        </div>
        <button
          onClick={() => setIsPayoutModalOpen(true)}
          className="flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-[#01696f] to-[#028090] hover:from-[#0c4e54] hover:to-[#01696f] text-white rounded-2xl font-bold shadow-md shadow-[#01696f]/20 transition-all active:scale-95 group shrink-0"
        >
          <ArrowDownToLine size={20} className="transition-transform group-hover:translate-y-0.5" />
          طلب سحب رصيد
        </button>
      </header>

      {/* SECTION 2: Financial Overview Cards */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 mb-12 text-start">
        {/* Total Lifetime Earnings */}
        <div className="bg-white p-8 rounded-3xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
          <div className="w-14 h-14 bg-slate-50 text-[#01696F] rounded-2xl flex items-center justify-center mb-6">
            <TrendingUp size={28} />
          </div>
          <p className="text-sm font-bold text-slate-400 uppercase tracking-widest mb-1">إجمالي الأرباح</p>
          <div className="flex items-baseline gap-1">
            <span className="text-3xl font-black bg-gradient-to-r from-[#0c4e54] to-[#01696f] bg-clip-text text-transparent">$5,400</span>
          </div>
        </div>

        {/* Available for Payout */}
        <div className="bg-gradient-to-br from-[#062c30] via-[#0c4e54] to-[#01696f] text-white p-8 rounded-3xl shadow-lg shadow-[#028090]/20 relative overflow-hidden group">
          <div className="relative z-10 text-white">
            <div className="w-14 h-14 bg-white/10 text-white rounded-2xl flex items-center justify-center mb-6 backdrop-blur-sm">
              <Wallet size={28} />
            </div>
            <p className="text-sm font-bold text-teal-100 uppercase tracking-widest mb-1">الرصيد المتاح للسحب</p>
            <div className="flex items-baseline gap-1">
              <span className="text-3xl font-black">${AVAILABLE_BALANCE.toLocaleString()}</span>
            </div>
          </div>
          <div className="absolute top-0 start-0 w-32 h-32 bg-white/5 rounded-full -translate-x-1/2 -translate-y-1/2 blur-2xl transition-transform duration-700 rtl:translate-x-1/2"></div>
        </div>

        {/* Pending/Escrowed */}
        <div className="bg-white p-8 rounded-3xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
          <div className="w-14 h-14 bg-amber-50 text-amber-600 rounded-2xl flex items-center justify-center mb-6">
            <Clock size={28} />
          </div>
          <p className="text-sm font-bold text-slate-400 uppercase tracking-widest mb-1">معلق في حساب الضمان (Escrow)</p>
          <div className="flex items-baseline gap-1 mb-2">
            <span className="text-3xl font-black bg-gradient-to-r from-[#0c4e54] to-[#01696f] bg-clip-text text-transparent">$800</span>
          </div>
          <div className="flex items-center gap-1.5 text-[10px] font-bold text-amber-600 bg-amber-50 px-3 py-1 rounded-full w-fit">
            <AlertCircle size={12} />
            أموال آمنة بانتظار تسليم المشاريع
          </div>
        </div>
      </div>

      {/* SECTION 3: Advanced Analytics Chart */}
      <div className="max-w-6xl mx-auto mb-12 text-start">
        <div className="bg-white rounded-3xl border border-slate-100 shadow-sm p-8">
          <div className="flex flex-col md:flex-row items-center justify-between mb-8 gap-4">
            <div>
              <h2 className="text-xl font-bold text-slate-800 flex items-center gap-3">
                <span className="w-1.5 h-6 bg-[#01696F] rounded-full"></span>
                تحليل الأرباح
              </h2>
              <p className="text-xs text-slate-400 mt-1">نمو الأرباح الإجمالي للفترة المحددة</p>
            </div>

            <div className="flex items-center bg-slate-50 p-1 rounded-xl shrink-0">
              <button
                onClick={() => setViewType('monthly')}
                className={`px-6 py-2 text-xs font-bold rounded-lg transition-all ${viewType === 'monthly' ? 'bg-white text-[#01696F] shadow-sm' : 'text-slate-400 hover:text-slate-600'}`}
              >
                عرض شهري
              </button>
              <button
                onClick={() => setViewType('daily')}
                className={`px-6 py-2 text-xs font-bold rounded-lg transition-all ${viewType === 'daily' ? 'bg-white text-[#01696F] shadow-sm' : 'text-slate-400 hover:text-slate-600'}`}
              >
                عرض يومي
              </button>
            </div>
          </div>

          <div className="h-80 w-full" dir="ltr">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={viewType === 'monthly' ? monthlyData : dailyData} margin={{ top: 10, right: 10, left: 0, bottom: 0 }}>
                <defs>
                  <linearGradient id="colorValue" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#01696F" stopOpacity={0.1} />
                    <stop offset="95%" stopColor="#01696F" stopOpacity={0} />
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
                <XAxis
                  dataKey="name"
                  axisLine={false}
                  tickLine={false}
                  tick={{ fill: '#94a3b8', fontSize: 11, fontWeight: 700 }}
                  dy={10}
                />
                <YAxis
                  axisLine={false}
                  tickLine={false}
                  tick={{ fill: '#94a3b8', fontSize: 11, fontWeight: 700 }}
                  tickFormatter={(val) => `$${val}`}
                />
                <Tooltip
                  contentStyle={{ borderRadius: '16px', border: 'none', boxShadow: '0 10px 15px -3px rgb(0 0 0 / 0.1)', padding: '12px' }}
                  itemStyle={{ color: '#01696F', fontWeight: 800, fontSize: '14px' }}
                  labelStyle={{ fontWeight: 700, color: '#64748b', marginBottom: '4px' }}
                  formatter={(value) => [`$${value}`, 'الأرباح']}
                />
                <Area
                  type="monotone"
                  dataKey="value"
                  stroke="#01696F"
                  strokeWidth={4}
                  fillOpacity={1}
                  fill="url(#colorValue)"
                  animationDuration={1500}
                />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>

      {/* SECTION 4: Transaction Table */}
      <div className="max-w-6xl mx-auto text-start">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-black text-slate-800">سجل المعاملات الأخيرة</h2>
          <button className="text-sm font-bold text-[#01696F] hover:underline">عرض الكل</button>
        </div>

        <div className="bg-white rounded-3xl border border-slate-100 shadow-sm overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-start border-collapse">
              <thead className="bg-slate-50/50 border-b border-slate-100 text-start">
                <tr>
                  <th className="px-8 py-5 text-xs font-bold text-slate-400 uppercase tracking-widest text-start">التاريخ</th>
                  <th className="px-8 py-5 text-xs font-bold text-slate-400 uppercase tracking-widest text-start">الوصف / المشروع</th>
                  <th className="px-8 py-5 text-xs font-bold text-slate-400 uppercase tracking-widest text-start">العميل</th>
                  <th className="px-8 py-5 text-xs font-bold text-slate-400 uppercase tracking-widest text-start">المبلغ</th>
                  <th className="px-8 py-5 text-xs font-bold text-slate-400 uppercase tracking-widest text-center">الحالة</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-50 text-start">
                <TransactionRow date="15 يونيو 2024" desc="تصميم هوية بصرية كاملة" client="شركة التقنية المتقدمة" amount="+$450" status="مكتمل" statusType="success" />
                <TransactionRow date="12 يونيو 2024" desc="برمجة واجهة مستخدم" client="مؤسسة الأفق" amount="+$800" status="معلق" statusType="pending" />
                <TransactionRow date="05 يونيو 2024" desc="سحب رصيد" client="-" amount="-$1,000" status="تم السحب" statusType="withdrawn" />
                <TransactionRow date="28 مايو 2024" desc="استشارات تقنية" client="مجموعة الرواد" amount="+$350" status="مكتمل" statusType="success" />
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* PAYOUT REQUEST MODAL */}
      {isPayoutModalOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-slate-900/50 backdrop-blur-sm" dir="rtl">
          <div className="bg-white rounded-3xl w-full max-w-lg p-6 md:p-8 relative overflow-y-auto max-h-[90vh] text-start shadow-2xl">

            {/* Close Button */}
            <button
              onClick={() => setIsPayoutModalOpen(false)}
              className="absolute top-6 end-6 text-slate-400 hover:text-slate-600 hover:bg-slate-100 p-2 rounded-full transition-colors"
            >
              <X size={20} />
            </button>

            {/* Modal Header */}
            <div className="mb-8">
              <div className="w-12 h-12 bg-[#01696F]/10 text-[#01696F] rounded-2xl flex items-center justify-center mb-4">
                <Wallet size={24} />
              </div>
              <h3 className="text-2xl font-black text-slate-800">طلب سحب رصيد</h3>
              <p className="text-slate-500 text-sm mt-1">اختر طريقة السحب المناسبة وقم بتعبئة البيانات المطلوبة.</p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-8">

              {/* STEP 1: Withdrawal Amount */}
              <div className="space-y-3">
                <label className="block text-sm font-bold text-slate-700">
                  المبلغ المطلوب سحبه (USD)
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 start-0 flex items-center ps-4 pointer-events-none">
                    <DollarSign size={18} className="text-slate-400" />
                  </div>
                  <input
                    type="number"
                    value={withdrawalAmount}
                    onChange={handleAmountChange}
                    placeholder="0.00"
                    className="w-full bg-slate-50 border border-slate-200 text-slate-800 text-lg font-bold rounded-2xl focus:ring-4 focus:ring-[#01696F]/10 focus:border-[#01696F] block ps-10 p-4 transition-all"
                  />
                </div>
                <div className="flex items-center justify-between text-xs font-medium">
                  <span className="text-slate-500">الرصيد المتاح للسحب:</span>
                  <span className="text-[#01696F] font-bold">${AVAILABLE_BALANCE.toLocaleString()}</span>
                </div>
              </div>

              {/* STEP 2: Select Method */}
              <div className="space-y-3">
                <label className="block text-sm font-bold text-slate-700">
                  طريقة السحب
                </label>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                  {/* Bank Transfer */}
                  <button
                    type="button"
                    onClick={() => handleMethodSelect('bank')}
                    className={`flex flex-col items-center justify-center gap-2 p-4 rounded-2xl border-2 transition-all ${withdrawalMethod === 'bank'
                        ? 'border-[#01696F] bg-[#01696F]/5 text-[#01696F]'
                        : 'border-slate-100 bg-white text-slate-500 hover:border-slate-200'
                      }`}
                  >
                    <Landmark size={24} />
                    <span className="text-xs font-bold">تحويل بنكي</span>
                  </button>

                  {/* Jeeb Wallet */}
                  <button
                    type="button"
                    onClick={() => handleMethodSelect('jeeb')}
                    className={`flex flex-col items-center justify-center gap-2 p-4 rounded-2xl border-2 transition-all ${withdrawalMethod === 'jeeb'
                        ? 'border-[#01696F] bg-[#01696F]/5 text-[#01696F]'
                        : 'border-slate-100 bg-white text-slate-500 hover:border-slate-200'
                      }`}
                  >
                    <Smartphone size={24} />
                    <span className="text-xs font-bold">محفظة جيب</span>
                  </button>

                  {/* Local Remittance */}
                  <button
                    type="button"
                    onClick={() => handleMethodSelect('local')}
                    className={`flex flex-col items-center justify-center gap-2 p-4 rounded-2xl border-2 transition-all ${withdrawalMethod === 'local'
                        ? 'border-[#01696F] bg-[#01696F]/5 text-[#01696F]'
                        : 'border-slate-100 bg-white text-slate-500 hover:border-slate-200'
                      }`}
                  >
                    <Send size={24} />
                    <span className="text-xs font-bold text-center leading-tight">حوالة شبكة<br />محلية</span>
                  </button>
                </div>
              </div>

              {/* STEP 3: Dynamic Fields */}
              {withdrawalMethod && (
                <div className="p-5 bg-slate-50 rounded-2xl border border-slate-100 space-y-4 animate-in fade-in slide-in-from-top-2">

                  {withdrawalMethod === 'bank' && (
                    <>
                      <div className="space-y-2">
                        <label className="block text-sm font-bold text-slate-700">العملة</label>
                        <select
                          value={formData.bankCurrency}
                          onChange={(e) => setFormData({ ...formData, bankCurrency: e.target.value })}
                          className="w-full bg-white border border-slate-200 text-slate-800 text-sm rounded-xl focus:ring-4 focus:ring-[#01696F]/10 focus:border-[#01696F] block p-3 transition-all outline-none"
                        >
                          <option value="" disabled>اختر العملة</option>
                          <option value="YER">ريال يمني</option>
                          <option value="SAR">ريال سعودي</option>
                          <option value="USD">دولار أمريكي</option>
                        </select>
                      </div>
                      <div className="space-y-2">
                        <label className="block text-sm font-bold text-slate-700">رقم الحساب</label>
                        <input
                          type="text"
                          value={formData.bankAccount}
                          onChange={(e) => setFormData({ ...formData, bankAccount: e.target.value })}
                          placeholder="أدخل رقم الحساب"
                          className="w-full bg-white border border-slate-200 text-slate-800 text-sm rounded-xl focus:ring-4 focus:ring-[#01696F]/10 focus:border-[#01696F] block p-3 transition-all outline-none"
                        />
                        <p className="text-[11px] text-slate-400 font-medium flex items-center gap-1 mt-1">
                          <AlertCircle size={12} />
                          الرجاء إدخال رقم الحساب المطابق للعملة المحددة
                        </p>
                      </div>
                    </>
                  )}

                  {(withdrawalMethod === 'jeeb' || withdrawalMethod === 'local') && (
                    <>
                      <div className="space-y-2">
                        <label className="block text-sm font-bold text-slate-700">الاسم الرباعي كما في البطاقة الشخصية</label>
                        <input
                          type="text"
                          value={formData.fullName}
                          onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                          placeholder="الاسم الرباعي"
                          className="w-full bg-white border border-slate-200 text-slate-800 text-sm rounded-xl focus:ring-4 focus:ring-[#01696F]/10 focus:border-[#01696F] block p-3 transition-all outline-none"
                        />
                      </div>
                      <div className="space-y-2">
                        <label className="block text-sm font-bold text-slate-700">رقم الهاتف</label>
                        <input
                          type="tel"
                          dir="ltr"
                          value={formData.phoneNumber}
                          onChange={(e) => setFormData({ ...formData, phoneNumber: e.target.value })}
                          placeholder="+967 7X XXX XXXX"
                          className="w-full text-end bg-white border border-slate-200 text-slate-800 text-sm rounded-xl focus:ring-4 focus:ring-[#01696F]/10 focus:border-[#01696F] block p-3 transition-all outline-none"
                        />
                      </div>
                    </>
                  )}
                </div>
              )}

              {/* Submit Action */}
              <button
                type="submit"
                disabled={!isFormValid()}
                className="w-full flex items-center justify-center gap-2 py-4 bg-gradient-to-r from-[#01696f] to-[#028090] hover:from-[#0c4e54] hover:to-[#01696f] text-white rounded-xl font-bold shadow-md shadow-[#01696f]/20 transition-all active:scale-95 disabled:opacity-50 disabled:pointer-events-none disabled:shadow-none"
              >
                تأكيد طلب السحب
              </button>
            </form>

          </div>
        </div>
      )}
    </div>
  );
};

const TransactionRow = ({ date, desc, client, amount, status, statusType }) => {
  const statusStyles = {
    success: 'bg-green-50 text-green-600 border-green-100',
    pending: 'bg-amber-50 text-amber-600 border-amber-100',
    withdrawn: 'bg-slate-100 text-slate-500 border-slate-200',
  };
  return (
    <tr className="hover:bg-slate-50/50 transition-colors">
      <td className="px-8 py-5 text-sm font-medium text-slate-500">{date}</td>
      <td className="px-8 py-5 text-sm font-bold text-slate-800">{desc}</td>
      <td className="px-8 py-5 text-sm text-slate-600">{client}</td>
      <td className="px-8 py-5 text-sm font-black text-slate-800 dir-ltr">{amount}</td>
      <td className="px-8 py-5 text-center">
        <span className={`px-4 py-1.5 text-[11px] font-black rounded-full border ${statusStyles[statusType]}`}>
          {status}
        </span>
      </td>
    </tr>
  );
};

export default Earnings;

