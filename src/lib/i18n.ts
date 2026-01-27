import i18next from "i18next";

// Initialize i18next
i18next.init({
  lng: "en",
  fallbackLng: "en",
  ns: ["common", "home"],
  defaultNS: "common",
  supportedLngs: ["en", "ar"],
  initImmediate: false,
  interpolation: {
    escapeValue: false
  },
  resources: {
    en: {
      common: {
        "site.title": "Ameen Insurance",
        "site.description": "Clear insurance. Simple choices.",
        "nav.home": "Home",
        "nav.insurance": "Insurance",
        "nav.motor": "Motor",
        "nav.travel": "Travel",
        "nav.homeIns": "Home",
        "nav.medical": "Medical",
        "nav.life": "Life",
        "nav.about": "About",
        "nav.personal": "Personal",
        "nav.corporate": "Corporate",
        "nav.advisory": "Advisory",
        "nav.insights": "Insights",
        "nav.support": "Support",
        "nav.buyNow": "Buy Now",
        "nav.contact": "Contact",
        "footer.copyright": "Copyright © 2010-2026",
        "footer.company": "Regal Insurance Management Services LLC",
        "footer.rights": "All Rights Reserved",
        "footer.disclaimer": "Ameen is a licensed insurance broker in Oman. Information on this site is general and policies are subject to insurer terms.",
        "footer.terms": "Terms & Conditions",
        "footer.privacy": "Privacy Policy",
        "footer.email": "info@ameen.me",
        "footer.phone": "+968 76888817",
        "cta.explore": "Explore",
        "cta.learnMore": "Learn More",
        "cta.getQuote": "Get Quote",
        "cta.contactUs": "Contact Us"
      },
      home: {
        "hero.tagline": "Legacy Secured | Future Assured",
        "hero.subtitle": "Regal Insurance Management Services",
        "hero.since": "Protecting Since 2010",
        "intro.title": "Committed to Your Peace of Mind",
        "intro.description": "Welcome to Ameen, the evolved identity of Regal Insurance Management Services LLC, a trusted name in the insurance arena of Oman since 2010. With 15 years of industry excellence, we bring together the strength of strategic insurance alliances and deep-rooted local expertise to deliver bespoke, transparent, and reliable insurance solutions for both individuals & corporates.",
        "services.title": "Insurance Solutions Tailored for Life, Business & Beyond",
        "services.description": "We offer a full spectrum of insurance services that span across sectors and personal needs. Whether you're safeguarding your home, protecting your health, or securing your corporate interests, we bring the right solutions to your doorstep.",
        "services.personal.title": "Personal",
        "services.corporate.title": "Corporate",
        "services.advisory.title": "Advisory",
        "alliances.title": "Strategic Alliances",
        "values.title": "Ameen is More Than a Brand, It's a Commitment",
        "values.description": "We pledge to uphold the highest standards of professionalism and ethical conduct. Every interaction, every recommendation, and every policy is guided by truth, trust, and transparency. With Ameen, you gain more than protection - you gain peace of mind.",
        "clients.title": "Trusted by Many | Valued by All",
        "clients.subtitle": "Partnerships Built on Trust",
        "insights.title": "Industry Insights"
      }
    },
    ar: {
      common: {
        "site.title": "أمين للتأمين",
        "site.description": "تأمين واضح وخيارات بسيطة.",
        "nav.home": "الرئيسية",
        "nav.insurance": "التأمين",
        "nav.motor": "السيارات",
        "nav.travel": "السفر",
        "nav.homeIns": "المنزل",
        "nav.medical": "الطبي",
        "nav.life": "الحياة",
        "nav.about": "حول",
        "nav.personal": "شخصي",
        "nav.corporate": "الشركات",
        "nav.advisory": "الاستشارات",
        "nav.insights": "رؤى",
        "nav.support": "الدعم",
        "nav.buyNow": "اشترِ الآن",
        "nav.contact": "اتصل بنا",
        "footer.copyright": "حقوق النشر © 2010-2026",
        "footer.company": "شركة خدمات الإدارة التأمينية الملكية ذ.م.م",
        "footer.rights": "جميع الحقوق محفوظة",
        "footer.disclaimer": "أمين وسيط تأمين مرخص في عمان. محتوى الموقع عام والبوالص تخضع لشروط شركة التأمين.",
        "footer.terms": "الشروط والأحكام",
        "footer.privacy": "سياسة الخصوصية",
        "footer.email": "info@ameen.me",
        "footer.phone": "76888817 968+",
        "cta.explore": "استكشف",
        "cta.learnMore": "اعرف المزيد",
        "cta.getQuote": "احصل على عرض",
        "cta.contactUs": "اتصل بنا"
      },
      home: {
        "hero.tagline": "إرث مؤمن | مستقبل مضمون",
        "hero.subtitle": "خدمات الإدارة التأمينية الملكية",
        "hero.since": "نحميكم منذ 2010",
        "intro.title": "ملتزمون براحة بالك",
        "intro.description": "مرحباً بكم في أمين، الهوية المتطورة لشركة خدمات الإدارة التأمينية الملكية ذ.م.م، الاسم الموثوق في ساحة التأمين في عمان منذ عام 2010. مع 15 عاماً من التميز في الصناعة، نجمع بين قوة التحالفات التأمينية الاستراتيجية والخبرة المحلية المتجذرة لتقديم حلول تأمينية مخصصة وشفافة وموثوقة للأفراد والشركات.",
        "services.title": "حلول تأمينية مصممة للحياة والأعمال وما بعدها",
        "services.description": "نقدم مجموعة كاملة من الخدمات التأمينية التي تمتد عبر القطاعات والاحتياجات الشخصية. سواء كنت تحمي منزلك، أو تحافظ على صحتك، أو تؤمن مصالح شركتك، فإننا نقدم الحلول المناسبة إلى عتبة بابك.",
        "services.personal.title": "شخصي",
        "services.corporate.title": "شركات",
        "services.advisory.title": "استشارات",
        "alliances.title": "التحالفات الاستراتيجية",
        "values.title": "أمين أكثر من علامة تجارية، إنه التزام",
        "values.description": "نتعهد بالحفاظ على أعلى معايير الاحترافية والسلوك الأخلاقي. كل تفاعل، وكل توصية، وكل بوليصة يتم توجيهها بالحقيقة والثقة والشفافية. مع أمين، تحصل على أكثر من الحماية - تحصل على راحة البال.",
        "clients.title": "موثوق به من قبل الكثيرين | يقدره الجميع",
        "clients.subtitle": "شراكات مبنية على الثقة",
        "insights.title": "رؤى الصناعة"
      }
    }
  }
});

export default i18next;
