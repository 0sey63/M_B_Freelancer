export const mockProjects = [
  {
    id: '1',
    clientName: 'شركة أفق التقنية',
    projectValue: '1,200',
    title: 'تصميم هوية بصرية كاملة',
    progress: 33, // dynamically calc'd if needed, but mock provides initial value
    status: 'in_progress',
    activeWorkspace: true,
    originalProposal: {
      title: 'تصميم هوية بصرية كاملة مع بوسترات السوشيال ميديا',
      totalPrice: '1,200',
      revisions: 'تعديلين',
      timeline: 'أسبوعين',
      validity: '7 أيام',
      additionalTerms: 'يجب توفير كافة الشعارات القديمة للرجوع إليها إن وجدت.',
      milestones: [
        { id: 'm1', title: 'تصميم الشعار وتحديد الألوان', description: 'تصميم 3 نماذج مبدئية للشعار واختيار الألوان الخاصة بالهوية.' },
        { id: 'm2', title: 'تصميم الواجهات الرسومية (UI)', description: 'تصميم واجهات المتجر الرئيسية وتجربة المستخدم.' },
        { id: 'm3', title: 'تسليم الملفات النهائية ودليل الهوية', description: 'تسليم كافة الملفات المصدرية ودليل الهوية بملف PDF.' }
      ]
    },
    tasks: [
      { id: 't1', title: 'تصميم الشعار وتحديد الألوان', description: 'تصميم 3 نماذج مبدئية للشعار واختيار الألوان الخاصة بالهوية.', status: 'completed', dueDate: 0 },
      { id: 't2', title: 'تصميم الواجهات الرسومية (UI)', description: 'تصميم واجهات المتجر الرئيسية وتجربة المستخدم.', status: 'active', dueDate: 3 },
      { id: 't3', title: 'تسليم الملفات النهائية ودليل الهوية', description: 'تسليم كافة الملفات المصدرية ودليل الهوية بملف PDF.', status: 'locked', dueDate: 10 }
    ]
  },
  {
    id: '2',
    clientName: 'مؤسسة سماء',
    projectValue: '850',
    title: 'تطوير واجهة متجر إلكتروني',
    progress: 90,
    status: 'awaiting_review',
    activeWorkspace: false,
    originalProposal: {
      title: 'تطوير واجهة متجر إلكتروني متكامل',
      totalPrice: '850',
      revisions: 'تعديل واحد',
      timeline: 'أسبوع واحد',
      validity: '3 أيام',
      additionalTerms: 'تصميم الواجهات متجاوب مع جميع الشاشات.',
      milestones: [
        { id: 'm4', title: 'تكويد الصفحة الرئيسية والمنتجات', description: 'تحويل تصميم الصفحة الرئيسية وصفحات عرض المنتجات إلى HTML/CSS/JS.' },
        { id: 'm5', title: 'تكويد سلة المشتريات والدفع', description: 'برمجة واجهة سلة المشتريات وخطوات الدفع المتعددة.' }
      ]
    },
    tasks: [
      { id: 't4', title: 'تكويد الصفحة الرئيسية والمنتجات', description: 'تحويل تصميم الصفحة الرئيسية وصفحات عرض المنتجات إلى HTML/CSS/JS.', status: 'completed', dueDate: 0 },
      { id: 't5', title: 'تكويد سلة المشتريات والدفع', description: 'برمجة واجهة سلة المشتريات وخطوات الدفع المتعددة.', status: 'completed', dueDate: 0 },
      { id: 't6', title: 'مراجعة وتعديلات العميل (بانتظار الموافقة)', description: 'إجراء أي تعديلات نهائية يطلبها العميل قبل التسليم النهائي.', status: 'active', dueDate: 1 }
    ]
  },
  {
    id: '3',
    clientName: 'مجموعة الرواد',
    projectValue: '2,500',
    title: 'تطبيق جوال للتوصيل',
    progress: 100,
    status: 'completed',
    activeWorkspace: false,
    completionDate: '15 أكتوبر 2023',
    originalProposal: {
      title: 'تصميم وتطوير تطبيق جوال لخدمات التوصيل',
      totalPrice: '2,500',
      revisions: 'تعديلات غير محدودة',
      timeline: 'شهر واحد',
      validity: '14 يوم',
      additionalTerms: 'دعم فني مجاني لمدة شهر بعد التسليم.',
      milestones: [
        { id: 'm7', title: 'التصميم المبدئي', description: 'تصميم الواجهات وشاشات المستخدم للسائق والعميل.' },
        { id: 'm8', title: 'البرمجة والاختبار', description: 'برمجة التطبيق وربطه بقاعدة البيانات مع إجراء اختبارات الجودة.' },
        { id: 'm9', title: 'الإطلاق على المتاجر', description: 'رفع التطبيق على متجر أبل ومتجر جوجل بلاي.' }
      ]
    },
    tasks: [
      { id: 't7', title: 'التصميم المبدئي', description: 'تصميم الواجهات وشاشات المستخدم للسائق والعميل.', status: 'completed', dueDate: 0 },
      { id: 't8', title: 'البرمجة والاختبار', description: 'برمجة التطبيق وربطه بقاعدة البيانات مع إجراء اختبارات الجودة.', status: 'completed', dueDate: 0 },
      { id: 't9', title: 'الإطلاق على المتاجر', description: 'رفع التطبيق على متجر أبل ومتجر جوجل بلاي.', status: 'completed', dueDate: 0 }
    ]
  }
];
