'use strict';
/* D4NGER POS public showcase. Real assets are extracted from Screens.pdf.
   The public site is a presentation only; it is NOT a working POS or distribution installer. */
const cfg = window.D4NGER_SHOWCASE_CONFIG || {};
const ICON = name => `<svg class="icon" aria-hidden="true"><use href="#i-${name}"></use></svg>`;
const imgPath = id => `assets/screens/${id}.webp`;
const gallery = [
  ['login-users','cashier',1,'اختيار الموظف','Employee selection','صورة وحساب لكل موظف، واختيار الجهاز أو الفرع.','Choose a cashier by avatar and terminal before signing in.'],
  ['login-pin','cashier',1,'لوحة PIN على الشاشة','On-screen PIN keypad','تسجيل دخول مناسب لشاشة لمس، بأزرار واضحة.','Touch-friendly staff authentication with a visible keypad.'],
  ['pos-catalog','cashier',2,'المنيو المرئي الملون','Visual cashier menu','أقسام بألوان وصور/رموز للمنتجات، وسلة البيع أمامك.','Color-coded categories, visual items and a basket at a glance.'],
  ['pos-modifiers','cashier',2,'إضافات وطلبات مخصصة','Smart item modifiers','إضافات مرتبة بحسب القسم أو الصنف، وتغيّر السعر عند الحاجة.','Category or item-level modifiers with price adjustments.'],
  ['hold-reason','cashier',3,'تعليق الطلب وذكر السبب','Hold with a reason','احتفظ بالأوردر عندما يبتعد العميل ثم كمله لاحقًا.','Save an unfinished order with an optional reason.'],
  ['held-orders','cashier',3,'استرجاع الطلب المعلق','Resume held orders','عرض الطلبات المؤقتة واختيار المتابعة أو الإلغاء.','Pick up previously held orders or cancel them.'],
  ['held-cancel','cashier',4,'إلغاء موثق','Reasoned cancellation','تسجيل سبب واضح عند إلغاء أوردر معلق.','A reason-driven cancellation flow for held orders.'],
  ['order-history','operations',4,'تاريخ عمليات البيع','Order history','راجع الأوردرات والعمليات المسموح بها بحسب صلاحيتك.','Review recorded sales with role-aware actions.'],
  ['sales-reports','operations',5,'تقارير البيع والأصناف','Sales and product reports','مراجعة حركة اليوم والأصناف الأكثر بيعًا.','Inspect daily sales and product performance.'],
  ['windows-startup','windows',5,'بدء التشغيل على Windows','Windows startup','لقطة من جهاز التجربة توضّح وجود عملية بدء تشغيل.','A screenshot of startup applications on the tested Windows device.'],
  ['admin-icon-selection','admin',6,'مركز إدارة المنيو','Menu administration','اختيار الأيقونات مع أدوات الإدارة في مكان واحد.','Catalog management and visual editing in one place.'],
  ['admin-category-editor','admin',7,'تخصيص الفئات وألوانها','Color-coded categories','التعديل على الألوان والرموز والاسم لترتيب المنيو حسب المكان.','Adjust menu categories, icons and colors to fit the restaurant.'],
  ['admin-product-editor','admin',7,'محرر الأصناف','Product editor','الاسم والسعر والأيقونة وغيرها من إعدادات الصنف.','Edit product names, prices and icon selections.'],
  ['catalog-icon-library','admin',8,'مكتبة أيقونات جاهزة','Built-in icon library','مجموعة صور ورموز طعام يمكن ربطها بالاسم.','A built-in library of food visuals and matching keywords.'],
  ['custom-icons','admin',8,'إضافة رمز مخصص','Custom icon definitions','إضافة رموز ومرادفات جديدة عندما تحتاج منيو مختلفًا.','Create or edit custom catalog icons and keywords.'],
  ['receipt-branding','receipts',9,'هوية المطعم على الإيصال','Receipt branding','تعديل اسم المطعم والشعار وبيانات الاتصال ومعاينة النتيجة.','Customize receipt identity and preview the printed result.'],
  ['receipt-layout','receipts',9,'تعديل حجم ومحتوى الفاتورة','Receipt layout controls','اختيار ظهور العناصر، حجم الخطوط والمسافات.','Change field visibility, sizes and spacing.'],
  ['receipt-advanced','receipts',10,'مصمم الفاتورة المتقدم','Advanced receipt designer','تحكم متقدم في ترتيب العناصر والهوامش والتوزيع.','Advanced control over section order, margins and alignment.'],
  ['config-transfer','operations',10,'تصدير واستيراد الإعدادات','Configuration transfer','نقل المنيو والصور وإعدادات الطباعة عبر ملف مخصص.','Export or import catalog, media and print settings as a configuration file.']
].map(([id,group,page,ar,en,descAr,descEn],i)=>({id,group,page,ar,en,descAr,descEn,index:i}));

const langSet = {
 ar: {
  nav:{experience:'تجربة البيع',features:'المميزات',gallery:'الشاشات',engineering:'الهندسة والأمان',roadmap:'خارطة الطريق',portfolio:'البورتفوليو'},
  hero:{label:'WINDOWS v1.0.1  /  LOCAL-FIRST',top:'THE RESTAURANT, IN CONTROL',a:'بيع أسرع.',b:'تحكم أكتر.',lead:'نظام بيع للمطاعم معمول عشان الكاشير يشتغل بسهولة، والمدير يتحكم في كل تفصيلة. من المنيو المصوّر وتعليق الأوردرات لمصمم الإيصالات والتقارير — في تجربة تشغيل محلية.',primary:'شوف تجربة الكاشير',secondary:'استكشف الشاشات',a11y:'لقطة حقيقية لشاشة D4NGER POS للكاشير',sticker:'منيو بالصور',stickerSub:'واضح • قابل للتخصيص • عملي',disk:'REAL\nSCREENS',foot:'لقطات حقيقية من نسخة Windows المرفوعة، مش تصاميم تخيلية.',flags:['OFFLINE-CAPABLE','VISUAL MENU','WINDOWS READY'],points:['كاشير بواجهة بسيطة','تحكم كامل في المنيو','بيع محفوظ قبل الطباعة']},
  intro:{eyebrow:'01 / الفكرة',line:'مش محتاج تحفظ ألف زرار.',title:'سيستم بيع يفهم طبيعة الشغل جوه المطعم.',desc:'الصنف يظهر لك بالصورة أو الرمز، كل قسم بلونه، والإضافات قدامك. لو العميل اتأخر، علّق الأوردر وارجع له لما يكون جاهز. البساطة هنا في سير العمل، مش في تقليل الإمكانيات.',sub:['واجهة مرئية','تشغيل محلي','إدارة كاملة'],stat:['19 لقطة حقيقية','26 Migration في الحزمة','Windows build v1.0.1']},
  steps:{eyebrow:'02 / رحلة الكاشير',title:'من أول صنف لحد آخر إيصال.',lead:'خطوات من واجهة النظام الحقيقية، بدون رسوم توضيحية مزيفة.',items:[
   {title:'اختار الصنف بعينك.',body:'الفئات المتلوّنة والأيقونات بتخلي الوصول للمنتج مباشر حتى مع منيو كبيرة. السلة موجودة في نفس المشهد.',tag:'SCREEN / PDF PAGE 2',id:'pos-catalog'},
   {title:'خلي الإضافات منظمة.',body:'إضافات عامة للفئة أو خاصة بالصنف، واختيارات يمكن استثناؤها على مستوى منتج معين. السعر يتحدد من المنطق الخلفي.',tag:'SCREEN / PDF PAGE 2',id:'pos-modifiers'},
   {title:'العميل مش جاهز؟ علّق الأوردر.',body:'تقدر تسجل السبب وتكمل الطلب بعدين أو تلغيه بسبب واضح، بدل ما تبدأ من أول وجديد.',tag:'SCREEN / PDF PAGE 3',id:'hold-reason'},
   {title:'اتابع البيع وسجلّاته.',body:'سجل للعمليات وتقرير يومي، مع فرق واضح بين ما يسمح به الكاشير وما يديره المسؤول.',tag:'SCREEN / PDF PAGE 5',id:'sales-reports'}
  ]},
  features:{eyebrow:'03 / التفاصيل التي تفرق',title:'سهل على الكاشير. قوي في الإدارة.',lead:'مميزات حقيقية تظهر في صور تجربة Windows ويؤكدها كود الحزمة.',readMore:'CODE + SCREEN',items:[
   ['grid','منيو واضح بالألوان','فئات مختلفة اللون وأصناف بأيقونات وصور، عشان كل اختيار يبقى أسهل.'],
   ['layers','إضافات مرنة','إضافات على القسم أو الصنف، مع تجاوزات خاصة لكل منتج.'],
   ['clock','تعليق واسترجاع الأوردر','اكتب السبب، ارجع للطلب، عدله أو ألغيه وفق دورة واضحة.'],
   ['image','أيقونات وصور مخصصة','مكتبة جاهزة مع إمكانية إضافة رموز وكلمات تلقائية للربط.'],
   ['receipt','مصمم إيصال حقيقي','من الشعار وحجم الخطوط إلى ترتيب الأقسام والفواصل وعرض الحقول.'],
   ['chart','تقارير وإدارة','تاريخ بيع، تقارير يومية وشيفتات، أدوات تصحيح بصلاحيات محددة.']
  ]},
  custom:{eyebrow:'04 / شاشة الإدارة',title:'المنيو على مزاج مطعمك، مش العكس.',lead:'غيّر أسماء الأقسام وألوانها ورموزها، واضبط المنتجات والإضافات. تقدر كمان تخصص الإيصال وبيانات المطعم بدل ما تلتزم بقالب ثابت.',first:'ألوان الأقسام والأيقونات',firstD:'خيارات مرئية للتعديل على شكل القائمة.',second:'مكتبة رموز وتخصيص',secondD:'أيقونات جاهزة وكلمات ربط ورموز مضافة يدويًا.',chips:['ألوان الأقسام','صور المنتجات','أيقونات مخصصة','إضافات حسب الصنف']},
  gallery:{eyebrow:'05 / معاينة المنتج',title:'مش Mockups. دي الشاشات.',lead:'تصفّح لقطات حقيقية من عرض Windows. اضغط على أي شاشة لتكبيرها.',filter:{all:'كل الشاشات',cashier:'الكاشير',admin:'المنيو والإدارة',receipts:'الإيصالات',operations:'التقارير والتشغيل',windows:'Windows'},source:'المصدر: Screens.pdf المرفوع من صاحب المشروع — 11 صفحة / 19 لقطة.',sourceLabel:'من Screens.pdf',detail:'اضغط للتكبير'},
  operations:{eyebrow:'06 / تشغيل يومي',title:'مصمم للواقع، مش للديمو بس.',lead:'واجهة إدارة يومية وتصميم وصول للخدمات على ماكينة Windows، مع أدوات تنقل بيانات الإعدادات وتحافظ على التشغيل المحلي.',a:'تقارير وسجل تقدر ترجع لهم',ad:'تابع حركة اليوم والأصناف المباعة، وراجع السجل وفق الدور والصلاحيات.',b:'البدء مع Windows',bd:'في الحزمة سكربتات تشغيل وWindows Scheduled Tasks لتشغيل الـAPI والطباعة مع إقلاع النظام، ثم فتح واجهة الكاشير.',warning:'تنويه هندسي: عرض الاستخدام موثق بالصور. أرشيف المشروع المرفوع لا يحتوي ملف Setup.exe النهائي؛ لذا وصف «التثبيت بضغطة واحدة» يحتاج اختبار Installer مستقل قبل إعلانه كحالة مقبولة.'},
  engineering:{eyebrow:'07 / ما وراء البساطة',title:'الواجهة سهلة. الهندسة واخدة الموضوع بجد.',lead:'لأن تطبيق بيع حقيقي لازم يتعامل مع انقطاع الاستجابة، محاولة الدفع المكررة، طابعة فصلت، أو موظف خارج صلاحياته. دي الحماية اللي بنينا عليها قلب النظام.',flow:['واجهة الكاشير','Express API','SQLite Transaction','Printer Worker'],flowDesc:['اختيار الأصناف والإضافات','تحقق وحساب السعر','حفظ ذرّي للبيع والدفع','إيصال مستقل بعد الحفظ'],items:[
    ['القروش بدل الكسور','السعر بيتحسب ويتخزن بوحدات قرش صحيحة لتفادي مشاكل Floating Point.'],
    ['بيع واحد حتى بعد إعادة المحاولة','نفس checkoutRequestId والطلب نفسه يرجع نفس النتيجة؛ البيانات المختلفة تنتج تعارض 409.'],
    ['Transaction تحمي الأوردر','البيع والدفع واستهلاك الطلب المعلق والـPrint Job يتسجلوا معًا أو يتراجعوا معًا.'],
    ['PIN وصلاحيات من الـBackend','PIN باستخدام scrypt، قفل مؤقت للمحاولات الخاطئة، وتحكم في الـAPI حسب الدور.'],
    ['الطباعة لا تعيد فتح الدرج','Reprint وRetry الغامض لا يكررا نبضة درج الفلوس بشكل غير آمن.'],
    ['نسخ احتياطي وتدقيق','Backup، سجل للعمليات، وتصدير إعدادات مع إجراءات حماية قبل الاستيراد.']
   ],foot:'هنا بنوصف قرارات موجودة في كود Windows v1.0.1، وليس شهادة أمان أو نتيجة Penetration Test.'},
  roadmap:{eyebrow:'08 / حالة الإصدار',title:'إحنا واقفين فين دلوقتي؟',lead:'آخر ملف تشغيل موثق يحمل v1.0.1. بنفرّق بين الميزة اللي ظهرت في الكود/الصور، والاختبارات اللي محتاجة جهاز فعلي أو الـInstaller.',items:[
   ['موجود في حزمة v1.0.1','الكاشير، الأصناف، الإضافات، التعليق، التقارير، الصلاحيات، الطباعة ومصمم الإيصالات.','CODE VERIFIED'],
   ['ظهر في الشاشات الفعلية','اختيار المستخدم، المنيو، الطلبات المؤقتة، التقارير، لوحة التحكم، الأيقونات والإيصالات.','SCREEN VERIFIED'],
   ['قبول Windows ما زال مطلوبًا','تجربة Setup.exe النهائي، الطباعة الحقيقية، إعادة التشغيل، Restore، واختبارات المشروع الكاملة.','ACCEPTANCE PENDING'],
   ['اتجاهات مستقبلية فقط','دعم فني وتحديثات أسهل، أجهزة كاشير متعددة، ومزامنة Cloud اختيارية في إصدارات لاحقة.','FUTURE SCOPE']
  ],files:'حمّل ملف المراجعة التقني',ar:'Master Roadmap — عربي',en:'English Roadmap',pdf:'عرض PDF',roadmapPdf:'خارطة الطريق PDF',ppt:'PowerPoint',matrix:'مصفوفة الأدلة',disclaimer:'لا يوجد ادعاء بسرعة رقمية مقاسة أو تثبيت بضغطة واحدة تم اختباره مستقلًا. التوثيق يوضح أي نقاط لا تزال معلّقة.'},
  faq:{eyebrow:'أسئلة مهمة',title:'قبل ما تحكم على النظام.',items:[
   ['هل يحتاج إنترنت عشان يبيع؟','التصميم Local-first والبيع يتعامل مع Express وSQLite على الجهاز المحلي. لا توجد ضرورة لخدمة Cloud لإتمام البيع المحلي.'],
   ['هل التثبيت فعلًا بضغطة واحدة؟','دي التجربة اللي وصفها صاحب المشروع، لكن ملف Setup.exe مش ضمن RAR المتاح للمراجعة. سكربتات التشغيل على Windows موجودة، وتأكيدا سهولة التثبيت يحتاجان تجربة Installer الفعلي.'],
   ['هل بيقدر يطبع إيصال مخصص؟','نعم: المصمم ظاهر بالصور، وكود الطباعة يدعم تغيير التخطيط وأرشفة PDF. اختبار طابعة بعينها وموتور القطع والدرج يحتاج جهاز حقيقي.'],
   ['هل الكاشير يقدر يغيّر كل حاجة؟','لا. فيه صلاحيات Admin/Cashier في الـBackend، والتقارير والتعديلات الحساسة وعمليات Refund/Void مقيدة حسب الدور.']
  ]},
  footer:{title:'تقنية قوية. <em>شغل أبسط.</em>',body:'D4NGER POS — دراسة حالة لتطوير نظام نقاط بيع للمطاعم، من التصميم والتشغيل اليومي إلى البيانات والأمان. تطوير محمود عاطف.',portfolio:'البورتفوليو الشخصي',github:'GitHub المطور',source:'تصفح خارطة الطريق',credit:'تصميم وعرض بواسطة محمود عاطف',fallback:'رابط GitHub مؤقتًا — أضف رابط Portfolio الحقيقي في config.js'}
 },
 en: {
  nav:{experience:'Cashier flow',features:'Features',gallery:'Screens',engineering:'Engineering & safety',roadmap:'Roadmap',portfolio:'Portfolio'},
  hero:{label:'WINDOWS v1.0.1  /  LOCAL-FIRST',top:'THE RESTAURANT, IN CONTROL',a:'Faster sales.',b:'Full control.',lead:'A restaurant POS built for easier shifts and better control. A visual catalog, flexible modifiers, held orders, receipt design, reports and a local-first runtime — together in one system.',primary:'Explore the cashier flow',secondary:'View real screens',a11y:'Real D4NGER POS cashier screenshot',sticker:'Visual-first menu',stickerSub:'Clear • Customizable • Practical',disk:'REAL\nSCREENS',foot:'Actual screenshots from the supplied Windows demo — not fictional UI mockups.',flags:['OFFLINE-CAPABLE','VISUAL MENU','WINDOWS READY'],points:['Straightforward cashier UX','Flexible catalog controls','Sale persisted before printing']},
  intro:{eyebrow:'01 / The idea',line:'Less memorizing. More doing.',title:'Restaurant operations should feel this straightforward.',desc:'Pick the right dish from its visual, recognize categories by color, add modifiers, and keep everything in one flow. When a customer steps away, hold the order and resume later. Simplicity comes from better workflows, not missing features.',sub:['Visual controls','Local-first','Manager tools'],stat:['19 real screenshots','26 packaged migrations','Windows build v1.0.1']},
  steps:{eyebrow:'02 / Cashier journey',title:'From product selection to a reliable sale.',lead:'Every screen below comes from the actual Windows walkthrough.',items:[
    {title:'Find products at a glance.',body:'Colored categories and meaningful icons make menu navigation practical; the basket remains within reach.',tag:'SCREEN / PDF PAGE 2',id:'pos-catalog'},
    {title:'Make every order flexible.',body:'Modifiers can be inherited from a category, assigned per product, or overridden for individual items; pricing remains backend-controlled.',tag:'SCREEN / PDF PAGE 2',id:'pos-modifiers'},
    {title:'Hold it. Resume when ready.',body:'Record a reason, come back to an unfinished order, edit it or explicitly cancel it. No need to rebuild the basket.',tag:'SCREEN / PDF PAGE 3',id:'hold-reason'},
    {title:'Stay on top of the day.',body:'Review order history and daily product reports with operational actions gated by the current user role.',tag:'SCREEN / PDF PAGE 5',id:'sales-reports'}
   ]},
  features:{eyebrow:'03 / Built for the floor',title:'Simple for staff. Powerful for managers.',lead:'Product features demonstrated by real screens and backed by code in the supplied package.',readMore:'CODE + SCREEN',items:[
    ['grid','Visual, color-coded menu','Categories and products are clear through icons, images and distinct color choices.'],
    ['layers','Flexible modifiers','Category-level rules with per-item assignments and enabled/disabled overrides.'],
    ['clock','Hold and resume orders','Capture reasons, restore orders and follow a controlled cancellation lifecycle.'],
    ['image','Built-in and custom visuals','Food icon library, custom entries and keyword-based automatic matching.'],
    ['receipt','Real receipt designer','From restaurant branding to field sizes, spacing, order and separator styles.'],
    ['chart','Operations and reports','Order history, daily and shift reporting, role-gated correction tools.']
   ]},
  custom:{eyebrow:'04 / Admin workspace',title:'Your restaurant. Your menu. Your rules.',lead:'Rename and recolor categories, configure product visuals and modifiers, and redesign the receipt without being locked to a rigid template.',first:'Category colors and icons',firstD:'A visual editor for your restaurant catalog.',second:'Icon library and custom entries',secondD:'Built-in food icons, automatic keywords and custom variants.',chips:['Category colors','Product pictures','Custom icons','Item-level modifiers']},
  gallery:{eyebrow:'05 / Product gallery',title:'Actual screens. Not mockups.',lead:'Browse authentic images from the Windows walkthrough. Select any screenshot to zoom.',filter:{all:'All screens',cashier:'Cashier',admin:'Menu & admin',receipts:'Receipts',operations:'Reports & operations',windows:'Windows'},source:'Source: Screens.pdf supplied by the project owner — 11 pages / 19 image captures.',sourceLabel:'From Screens.pdf',detail:'Expand image'},
  operations:{eyebrow:'06 / Daily operations',title:'Designed to work beyond the demo.',lead:'Practical day-to-day management, a Windows startup model and configuration portability — all running as a local application.',a:'Reports and order traceability',ad:'Review daily sales, product performance and order history according to permission level.',b:'Starts with Windows',bd:'The bundle contains startup scripts and Scheduled Tasks for the API and printer worker, with a launcher that opens the cashier interface.',warning:'Engineering note: these Windows workflows are backed by code and screenshots. The uploaded RAR does not contain the final Setup.exe, so the “one-click installation” claim still needs independent installer acceptance.'},
  engineering:{eyebrow:'07 / Under the hood',title:'Delightful on the surface. Deliberate underneath.',lead:'A real checkout system must handle lost responses, retry attempts, unavailable printers and out-of-scope users. This is where the technical choices matter.',flow:['Cashier UI','Express API','SQLite transaction','Printer worker'],flowDesc:['Items and intent','Validation and pricing','Atomic sale and payment','Receipt after commit'],items:[
    ['Integer money, not float math','Authoritative prices are calculated and persisted in integer piasters.'],
    ['Safe replay of checkout requests','Same checkoutRequestId and payload return the existing sale; conflicting payload yields 409.'],
    ['Atomic financial writes','Sale, payment, held-order consumption and print intent commit or roll back together.'],
    ['Hashed PIN and enforced roles','scrypt-protected PIN, timed failed-login lockouts, and backend permission middleware.'],
    ['Safe receipt and drawer handling','Reprints and ambiguous retries never silently re-pulse the cash drawer.'],
    ['Auditable operations and recovery','Backup flows, correction trails and guarded configuration import/export.']
   ],foot:'These are implementation properties visible in the Windows v1.0.1 bundle — not an independent security certification or penetration test.'},
  roadmap:{eyebrow:'08 / Release status',title:'Where the project stands today.',lead:'The latest supplied package identifies as v1.0.1. We distinguish implementation and demonstration from the final on-device release acceptance.',items:[
    ['Implemented in the v1.0.1 bundle','Catalog, modifiers, held orders, reporting, role controls, receipt worker and designer.','CODE VERIFIED'],
    ['Shown on actual product screens','Employee login, cashier catalog, held orders, admin icon editing, receipts and reports.','SCREEN VERIFIED'],
    ['Windows acceptance is still open','Final Setup.exe test, physical printing, reboots, backup restore and source-level regression suite.','ACCEPTANCE PENDING'],
    ['Future candidates only','Recovery tooling, optional multi-terminal operation, and eventual optional cloud synchronization.','FUTURE SCOPE']
   ],files:'Read the full project review',ar:'Arabic Master Roadmap',en:'English Roadmap',pdf:'PDF presentation',roadmapPdf:'Roadmap PDF',ppt:'Editable PowerPoint',matrix:'Evidence matrix',disclaimer:'We do not claim benchmarked speed, validated one-click installation or completed physical-hardware testing without the missing acceptance evidence.'},
  faq:{eyebrow:'Good to know',title:'Before you judge the system.',items:[
    ['Does checkout require Internet access?','The software is local-first: the browser talks to a locally hosted Express API and SQLite data store. Cloud connectivity is not needed for normal local sales.'],
    ['Is installation already one-click verified?','The owner describes a single-action setup experience, but the final Setup.exe is not part of the supplied RAR. The Windows startup/runtime scripts are present; the install experience still needs direct acceptance testing.'],
    ['Are receipts customizable?','Yes. Real screenshots show advanced receipt design and the worker includes layout and PDF archive functionality. Printer-specific Arabic, cutting and drawer tests still require a physical device.'],
    ['Can a cashier change everything?','No. Admin and Cashier roles are enforced by the backend; report access, settings, refunds and voids are permission-gated.']
   ]},
  footer:{title:'Serious engineering. <em>Simpler shifts.</em>',body:'D4NGER POS is a restaurant point-of-sale engineering case study, from visual operations to financial correctness and local runtime delivery. Built by Mahmoud Atef.',portfolio:'Personal portfolio',github:'Developer on GitHub',source:'Read the roadmap',credit:'Designed and presented by Mahmoud Atef',fallback:'GitHub profile fallback — add your real portfolio URL in config.js'}
 }
};

let locale = new URLSearchParams(location.search).get('lang');
if(locale !== 'ar' && locale !== 'en'){
 try { locale = localStorage.getItem('d4nger-showcase-lang') || 'ar'; } catch(_) { locale='ar'; }
}
if(!langSet[locale])locale='ar';
let activeFilter='all';
let currentImage=0;
let modalPool=gallery.map(x=>x.id);
let focusBeforeModal=null;
const root=document.getElementById('app');
const lightbox=document.getElementById('lightbox');
const label=(entry)=>locale==='ar'?entry.ar:entry.en;
const description=(entry)=>locale==='ar'?entry.descAr:entry.descEn;
const L=()=>langSet[locale];
const arrow=()=>ICON('arrow');
const screen=(id,alt,attrs='')=>`<img src="${imgPath(id)}" alt="${alt}" loading="lazy" decoding="async" ${attrs}>`;
const more=(url,txt,classes='')=>`<a href="${url}" class="${classes}">${txt}</a>`;
const portfolioUrl=()=>cfg.portfolioUrl||cfg.developerGitHub||'#footer';
const portfolioLink=()=>`<a class="nav-portfolio" href="${portfolioUrl()}" target="_blank" rel="noopener noreferrer" title="${cfg.portfolioUrl?'':L().footer.fallback}">${L().nav.portfolio}${ICON('external')}</a>`;
function sectionTitle(eyebrow,title,descriptionText,classes=''){
 return `<div class="section-head ${classes}"><div><span class="eyebrow section-eyebrow">${eyebrow}</span><h2>${title}</h2></div><p>${descriptionText}</p></div>`;
}
function header(){const t=L();return `<header class="site-header" id="top"><div class="container nav"><a href="#top" class="wordmark" aria-label="D4NGER POS — Home"><span class="brand-mark">D</span><span class="wordmark-name">D4NGER<i>POS</i></span></a><nav class="nav-list" aria-label="${locale==='ar'?'التنقل الرئيسي':'Main navigation'}"><a href="#experience">${t.nav.experience}</a><a href="#features">${t.nav.features}</a><a href="#screens">${t.nav.gallery}</a><a href="#engineering">${t.nav.engineering}</a><a href="#roadmap">${t.nav.roadmap}</a></nav><div class="nav-actions"><div class="language-switch" role="group" aria-label="Language / اللغة"><button type="button" data-lang="ar" aria-pressed="${locale==='ar'}">AR</button><button type="button" data-lang="en" aria-pressed="${locale==='en'}">EN</button></div>${portfolioLink()}<button class="menu-toggle" type="button" aria-expanded="false" aria-controls="mobile-panel" aria-label="${locale==='ar'?'افتح القائمة':'Open menu'}">${ICON('menu')}</button></div></div><nav class="mobile-panel" id="mobile-panel" aria-label="Mobile navigation"><a href="#experience">${t.nav.experience}</a><a href="#features">${t.nav.features}</a><a href="#screens">${t.nav.gallery}</a><a href="#engineering">${t.nav.engineering}</a><a href="#roadmap">${t.nav.roadmap}</a><a href="${portfolioUrl()}" target="_blank" rel="noopener noreferrer">${t.nav.portfolio} ↗</a></nav></header>`}
function hero(){const t=L().hero;return `<main id="main"><section class="hero"><div class="container"><div class="hero-topline"><span class="eyebrow">${t.label}</span><span>${t.top}</span></div><div class="hero-main"><div class="hero-copy"><span class="eyebrow">RESTAURANT POINT OF SALE</span><h1>${t.a}<br><em>${t.b}</em></h1><p class="hero-desc">${t.lead}</p><div class="hero-buttons"><a class="btn btn-primary" href="#experience">${t.primary}${arrow()}</a><a class="btn btn-secondary" href="#screens">${t.secondary}${ICON('image')}</a></div><div class="hero-points">${t.points.map(p=>`<span>${p}</span>`).join('')}</div></div><div class="hero-art"><div class="product-frame"><div class="frame-top"><div class="dots"><i></i><i></i><i></i></div><b>D4NGER POS / CASHIER</b><div class="num">v1.0.1</div></div>${screen('pos-catalog',t.a11y,'loading="eager" fetchpriority="high" width="1299" height="730"')}</div><div class="art-sticker"><b>${t.sticker}</b><small>${t.stickerSub}</small></div><div class="art-corner">REAL<br>PRODUCT</div></div></div><div class="hero-foot"><p>${t.foot}</p><div class="hero-foot-icons">${t.flags.map(x=>`<span>${x}</span>`).join('')}</div></div></div></section>`}
function intro(){const t=L().intro;return `<section class="intro-section section" id="intro"><div class="container intro-grid"><div><div class="giant-label" dir="ltr">POS.</div><span class="eyebrow section-eyebrow">${t.eyebrow}</span><p class="section-copy">${t.line}</p></div><div><h2 class="intro-title">${t.title}</h2><div class="intro-note"><span>01—03</span><p>${t.desc}</p></div><div class="stats-inline">${t.stat.map((s,i)=>`<div class="stat-inline"><b>${i===0?'19':i===1?'26':'v1.0.1'}</b><small>${s}</small></div>`).join('')}</div></div></div></section>`}
function story(){const t=L().steps;return `<section class="section story-section" id="experience"><div class="container">${sectionTitle(t.eyebrow,t.title,t.lead)}<div class="story-steps">${t.items.map((s,i)=>`<article class="story-item reveal"><div class="story-copy"><span class="story-count">STEP ${String(i+1).padStart(2,'0')} / 04</span><h3>${s.title}</h3><p>${s.body}</p><span class="story-chip">${s.tag}</span></div><button class="story-image" type="button" data-image="${s.id}" aria-label="${L().gallery.detail}: ${s.title}">${screen(s.id,s.title)}<div class="image-caption">D4NGER POS — ${s.tag}</div></button></article>`).join('')}</div></div></section>`}
function features(){const t=L().features;return `<section class="section features" id="features"><div class="container">${sectionTitle(t.eyebrow,t.title,t.lead)}<div class="feature-grid">${t.items.map(([ic,title,desc],i)=>`<article class="feature reveal"><span class="feature-number">${String(i+1).padStart(2,'0')} / 06</span><div class="feature-icon">${ICON(ic)}</div><h3>${title}</h3><p>${desc}</p><span class="feature-foot">${t.readMore}${ICON('check')}</span></article>`).join('')}</div></div></section>`}
function customization(){const t=L().custom;return `<section class="section custom-section" id="customization"><div class="container"><span class="eyebrow section-eyebrow">${t.eyebrow}</span><h2 class="custom-headline">${t.title}</h2><p class="custom-description">${t.lead}</p><div class="custom-grid"><figure class="custom-tile"><button class="story-image" type="button" data-image="admin-category-editor" aria-label="${t.first}">${screen('admin-category-editor',t.first)}</button><figcaption><h3>${t.first}</h3><p>${t.firstD}</p></figcaption></figure><figure class="custom-tile dark-tile"><button class="story-image" type="button" data-image="catalog-icon-library" aria-label="${t.second}">${screen('catalog-icon-library',t.second)}</button><figcaption><h3>${t.second}</h3><p>${t.secondD}</p></figcaption></figure></div><div class="mini-feature-row">${t.chips.map(c=>`<span>${c}</span>`).join('')}</div></div></section>`}
function filterControls(){const t=L().gallery;return `<div class="filter-row" role="group" aria-label="${locale==='ar'?'تصنيف الصور':'Gallery categories'}">${Object.entries(t.filter).map(([id,name])=>`<button type="button" class="filter-btn" data-filter="${id}" aria-pressed="${activeFilter===id}">${name}</button>`).join('')}</div>`}
function galleryCards(){return gallery.filter(x=>activeFilter==='all'||x.group===activeFilter).map(x=>`<button type="button" class="gallery-card" data-image="${x.id}" aria-label="${L().gallery.detail}: ${label(x)}"><div class="gallery-thumb">${screen(x.id,label(x))}</div><div class="gallery-caption"><div class="meta"><span>SCREEN ${String(x.index+1).padStart(2,'0')}</span><span>PDF / P.${x.page}</span></div><h3>${label(x)}</h3><p>${description(x)}</p></div></button>`).join('')}
function gallerySection(){const t=L().gallery;return `<section class="section gallery-section dark" id="screens"><div class="container"><div class="gallery-head"><div><span class="eyebrow section-eyebrow">${t.eyebrow}</span><h2>${t.title}</h2></div><p>${t.lead}</p></div>${filterControls()}<div class="gallery-grid" id="gallery-grid">${galleryCards()}</div><p class="gallery-source">${t.source}</p></div></section>`}
function operations(){const t=L().operations;return `<section class="section operations" id="operations"><div class="container">${sectionTitle(t.eyebrow,t.title,t.lead)}<div class="ops-grid"><article class="ops-card reveal">${screen('sales-reports',t.a)}<div class="ops-card-body"><h3>${t.a}</h3><p>${t.ad}</p></div></article><article class="ops-card reveal">${screen('windows-startup',t.b)}<div class="ops-card-body"><h3>${t.b}</h3><p>${t.bd}</p></div></article></div><div class="note"><strong>${locale==='ar'?'شفافية التوثيق:':'Documentation transparency:'}</strong> ${t.warning}</div></div></section>`}
function engineering(){const t=L().engineering;return `<section class="section engineering dark" id="engineering"><div class="container">${sectionTitle(t.eyebrow,t.title,t.lead)}<div class="flow-diagram">${t.flow.map((f,i)=>`<div class="flow-box"><i>0${i+1} / ${i===0?'FRONTEND':i===1?'BACKEND':i===2?'DATABASE':'HARDWARE'}</i><b>${f}</b><small>${t.flowDesc[i]}</small></div>`).join('')}</div><div class="guard-grid">${t.items.map(([a,b],i)=>`<article class="guard reveal"><span class="guard-index">0${i+1} / 06</span><h3>${a}</h3><p>${b}</p></article>`).join('')}</div><p class="engineering-foot">${ICON('shield')} ${t.foot}</p></div></section>`}
function roadmap(){const t=L().roadmap;return `<section class="section roadmap" id="roadmap"><div class="container">${sectionTitle(t.eyebrow,t.title,t.lead)}<div class="roadmap-grid">${t.items.map(([name,body,status],i)=>`<article class="roadmap-card ${i===2?'warn':i===3?'future':''}"><span class="status">${status}</span><h3>${name}</h3><p>${body}</p></article>`).join('')}</div><p class="roadmap-disclaimer">${t.disclaimer}</p><div class="roadmap-download"><a class="btn btn-dark" href="docs/MASTER_ROADMAP.md" download>${ICON('download')}${t.ar}</a><a class="btn btn-outline" href="docs/MASTER_ROADMAP.en.md" download>${t.en}</a><a class="btn btn-outline" href="docs/MASTER_ROADMAP.pdf" download>${ICON('download')}${t.roadmapPdf}</a><a class="btn btn-outline" href="docs/D4NGER_POS_v1.0.1.pdf" download>${ICON('download')}${t.pdf}</a><a class="btn btn-outline" href="docs/D4NGER_POS_v1.0.1.pptx" download>${t.ppt}</a><a class="btn btn-outline" href="docs/FEATURE_EVIDENCE.md" download>${t.matrix}</a></div></div></section>`}
function faq(){const t=L().faq;return `<section class="section faq" id="faq"><div class="container faq-grid"><div><span class="eyebrow section-eyebrow">${t.eyebrow}</span><h2>${t.title}</h2></div><div>${t.items.map(([q,a],i)=>`<details class="faq-item" ${i===0?'open':''}><summary>${q}${ICON('chevron')}</summary><p>${a}</p></details>`).join('')}</div></div></section>`}
function footer(){const t=L().footer;return `</main><footer class="footer" id="footer"><div class="container"><div class="footer-top"><div><span class="eyebrow" style="color:var(--lime)">D4NGER POS / BUILT WITH PURPOSE</span><h2>${t.title}</h2><p>${t.body}</p></div><div class="footer-action"><a class="btn btn-primary" href="${portfolioUrl()}" target="_blank" rel="noopener noreferrer" title="${cfg.portfolioUrl?'':t.fallback}">${t.portfolio}${ICON('external')}</a><a class="btn btn-secondary" href="${cfg.developerGitHub||'https://github.com/mahmoudatefdeveloper'}" target="_blank" rel="noopener noreferrer">${ICON('github')}${t.github}</a><a class="text-link" href="#roadmap">${t.source}</a></div></div><div class="footer-bottom"><a class="wordmark" href="#top"><span class="brand-mark">D</span><span class="wordmark-name">D4NGER<i>POS</i></span></a><span class="footer-credit">© 2026 ${cfg.developerName||'Mahmoud Atef'} • ${t.credit}</span><span>WINDOWS v1.0.1 / PROJECT SHOWCASE</span></div></div></footer>`}
function render(){
 const t=L();document.documentElement.lang=locale;document.documentElement.dir=locale==='ar'?'rtl':'ltr';
 document.title=locale==='ar'?'D4NGER POS — نظام بيع للمطاعم، معمول صح':'D4NGER POS — Restaurant operations, made effortless';
 document.querySelector('meta[name="description"]').setAttribute('content',t.hero.lead);
 root.innerHTML=header()+hero()+intro()+story()+features()+customization()+gallerySection()+operations()+engineering()+roadmap()+faq()+footer();
 initReveal();
}
function initReveal(){
 const items=[...root.querySelectorAll('.reveal')];
 if(!('IntersectionObserver' in window)||matchMedia('(prefers-reduced-motion: reduce)').matches)return;
 const observer=new IntersectionObserver((entries)=>{entries.forEach(e=>{if(e.isIntersecting){e.target.classList.add('is-visible');observer.unobserve(e.target)}})},{threshold:.05,rootMargin:'0px 0px 55px 0px'});
 items.forEach(el=>{el.classList.add('is-pending');observer.observe(el)});
}
function setLocale(lang){if(!langSet[lang]||lang===locale)return;locale=lang;try{localStorage.setItem('d4nger-showcase-lang',lang)}catch(_){/* okay */}const url=new URL(location.href);url.searchParams.set('lang',lang);try{history.replaceState(null,'',url)}catch(_){/* file:// preview */}render()}
function setFilter(id){if(!Object.prototype.hasOwnProperty.call(L().gallery.filter,id))return;activeFilter=id;root.querySelector('#gallery-grid').innerHTML=galleryCards();root.querySelectorAll('[data-filter]').forEach(el=>el.setAttribute('aria-pressed',String(el.dataset.filter===id)))}
function showImage(id){const image=gallery.find(x=>x.id===id);if(!image)return;focusBeforeModal=document.activeElement;modalPool=gallery.filter(x=>activeFilter==='all'||x.group===activeFilter).map(x=>x.id);if(!modalPool.includes(id))modalPool=gallery.map(x=>x.id);currentImage=modalPool.indexOf(id);fillImage();if(!lightbox.open)lightbox.showModal()}
function fillImage(){const id=modalPool[currentImage],g=gallery.find(x=>x.id===id);if(!g)return;document.getElementById('lightbox-title').textContent=label(g);document.getElementById('lightbox-source').textContent=`SCREEN ${g.index+1} • PDF PAGE ${g.page}`;document.getElementById('lightbox-image').src=imgPath(g.id);document.getElementById('lightbox-image').alt=label(g);document.getElementById('lightbox-description').textContent=description(g);document.getElementById('lightbox-count').textContent=`${currentImage+1} / ${modalPool.length}`}
function shiftImage(delta){currentImage=(currentImage+delta+modalPool.length)%modalPool.length;fillImage()}
function closeModal(){if(lightbox.open)lightbox.close()}
root.addEventListener('click',e=>{
 const button=e.target.closest('button');
 if(button?.dataset.lang){setLocale(button.dataset.lang);return}
 if(button?.dataset.filter){setFilter(button.dataset.filter);return}
 if(button?.dataset.image){showImage(button.dataset.image);return}
 if(button?.classList.contains('menu-toggle')){const panel=root.querySelector('#mobile-panel');const open=!panel.classList.contains('is-open');panel.classList.toggle('is-open',open);button.setAttribute('aria-expanded',String(open));return}
 if(e.target.closest('.mobile-panel a')){const panel=root.querySelector('#mobile-panel');panel.classList.remove('is-open');root.querySelector('.menu-toggle')?.setAttribute('aria-expanded','false')}
});
document.getElementById('lightbox-close').addEventListener('click',closeModal);
document.getElementById('lightbox-prev').addEventListener('click',()=>shiftImage(-1));
document.getElementById('lightbox-next').addEventListener('click',()=>shiftImage(1));
lightbox.addEventListener('click',e=>{if(e.target===lightbox)closeModal()});
lightbox.addEventListener('close',()=>{focusBeforeModal?.focus?.()});
lightbox.addEventListener('keydown',e=>{if(e.key==='ArrowRight'){e.preventDefault();shiftImage(1)}if(e.key==='ArrowLeft'){e.preventDefault();shiftImage(-1)}});
render();
