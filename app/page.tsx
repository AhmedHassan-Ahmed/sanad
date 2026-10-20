"use client";

import { useState, useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { motion, useReducedMotion } from "framer-motion";
import {
  ArrowRight,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  CircleCheck,
  Camera,
  BriefcaseBusiness,
  Menu,
  MessageCircle,
  MoveUpRight,
  Play,
  ShieldCheck,
  Smartphone,
  Sparkles,
  Target,
  Timer,
  Users,
  X,
  Zap,
  Sun,
  Moon,
} from "lucide-react";
import ThreeBackground from "@/components/three-background";

const PRODUCT_IMAGE = "/sanad-device.png";
const SANAD_DEVICE_DETAIL_IMAGE = "/sanad-device-detail.png";
// Existing project WhatsApp destination, normalized for https://wa.me/.
const SANAD_WHATSAPP_NUMBER = "201101054262";

const navItems = [
  ["Technology", "#technology"],
  ["Sensor lab", "#sensor-lab"],
  ["Features", "#features"],
  ["How it works", "#how-it-works"],
  ["Pricing", "#pricing"],
  ["Our team", "#team"],
  ["FAQ", "#faq"],
];

const features = [
  {
    icon: Target,
    title: "Personalized Safe Angle",
    text: "A posture baseline built around your body and your everyday movement.",
  },
  {
    icon: Timer,
    title: "Real-time monitoring",
    text: "Stay aware of how you sit and stand without interrupting your focus.",
  },
  {
    icon: Zap,
    title: "Gentle feedback",
    text: "A subtle vibration helps you notice drift and reset with intention.",
  },
  {
    icon: Smartphone,
    title: "Connected companion app",
    text: "A calm, simple space to understand your posture patterns over time.",
  },
  {
    icon: Sparkles,
    title: "Progress analytics",
    text: "See your consistency grow through clear, easy-to-read insights.",
  },
  {
    icon: ShieldCheck,
    title: "Made for every day",
    text: "Thoughtfully designed to fit into your routine, not take it over.",
  },
];

const teamMembers = [
  {
    name: "Momen Ahmed",
    role: "Social Media Marketing",
    image: "/image copy 7.png",
    color: "from-cyan-400/40 to-slate-800",
  },
  {
    name: "Ahmed Ibrahim",
    role: "R&D",
    image: "/image copy 2.png",
    color: "from-teal-400/40 to-slate-800",
  },
  {
    name: "Yousof Sayed",
    role: "Marketing",
    image: "/image copy 5.png",

    color: "from-sky-400/40 to-slate-800",
  },
  {
    name: "Youssif Ali",
    role: "Application Software Manager",

    image: "/image copy 4.png",
    color: "from-blue-400/40 to-slate-800",
  },
  {
    name: "Ahmed Yahya",
    role: "R&D",
    image: "/image copy.png",
    color: "from-indigo-400/40 to-slate-800",
  },
  {
    name: "Ahmed Hassan",
    role: "Website Software Manager",
    image: "/image.png",
    color: "from-purple-400/40 to-slate-800",
  },
];

const faqs = [
  [
    "What is SANAD?",
    "SANAD is a smart wearable concept paired with a companion app, designed to help you notice posture patterns and build healthier everyday habits.",
  ],
  [
    "How does the wearable work?",
    "The device is designed to monitor posture relative to a personalized Safe Angle and provide gentle feedback when you move outside that range.",
  ],
  [
    "What is the Safe Angle?",
    "Safe Angle is the posture threshold configured for the wearer. Its exact calculation and final product specifications are to be confirmed as development continues.",
  ],
  [
    "Does SANAD connect to a mobile app?",
    "The SANAD ecosystem is being designed around a companion mobile application for setup and progress insights. Supported devices are to be confirmed.",
  ],
  [
    "When will SANAD be available?",
    "Availability and launch timing are still to be confirmed. Join the community to receive updates from the team.",
  ],
  [
    "How is user data handled?",
    "Our data handling approach and privacy policy are to be confirmed before launch. We are committed to communicating this clearly.",
  ],
];

function Reveal({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  const reduce = useReducedMotion();
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: reduce ? 0 : 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.65, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
}

export default function Page() {
  const pageRef = useRef<HTMLElement | null>(null);
  const [menuOpen, setMenuOpen] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
    consent: false,
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitted, setSubmitted] = useState(false);
  const [demoAngle, setDemoAngle] = useState(8);
  const [theme, setTheme] = useState<"dark" | "light">("light");
  const [language, setLanguage] = useState<"ar" | "en">("ar");

  useEffect(() => {
    const savedTheme = window.localStorage.getItem("sanad-theme");
    const savedLanguage = window.localStorage.getItem("sanad-language");
    if (savedTheme === "light" || savedTheme === "dark") setTheme(savedTheme);
    if (savedLanguage === "ar" || savedLanguage === "en")
      setLanguage(savedLanguage);
  }, []);
  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    window.localStorage.setItem("sanad-theme", theme);
  }, [theme]);
  useEffect(() => {
    document.documentElement.lang = language;
    document.documentElement.dir = language === "ar" ? "rtl" : "ltr";
    window.localStorage.setItem("sanad-language", language);
  }, [language]);

  const translations: Record<string, string> = {
    Technology: "التقنية",
    "Sensor lab": "مختبر المستشعرات",
    Features: "المميزات",
    "How it works": "كيف يعمل",
    Pricing: "الأسعار",
    "Our team": "فريقنا",
    FAQ: "الأسئلة الشائعة",
    "Personalized Safe Angle": "زاوية آمنة مخصصة",
    "A posture baseline built around your body and your everyday movement.":
      "خط أساس لوضعية الجسم يناسبك ويناسب حركتك اليومية.",
    "Real-time monitoring": "متابعة لحظية",
    "Stay aware of how you sit and stand without interrupting your focus.":
      "تابع وضعية جلوسك ووقوفك دون تشتيت تركيزك.",
    "Gentle feedback": "تنبيه لطيف",
    "A subtle vibration helps you notice drift and reset with intention.":
      "اهتزاز خفيف يساعدك على ملاحظة الانحناء وتصحيح وضعيتك.",
    "Connected companion app": "تطبيق متصل بالجهاز",
    "A calm, simple space to understand your posture patterns over time.":
      "مساحة بسيطة لفهم أنماط وضعية جسمك بمرور الوقت.",
    "Progress analytics": "تحليل التقدم",
    "See your consistency grow through clear, easy-to-read insights.":
      "تابع تطور عاداتك من خلال مؤشرات واضحة وسهلة القراءة.",
    "Made for every day": "مصمم للاستخدام اليومي",
    "Thoughtfully designed to fit into your routine, not take it over.":
      "تصميم ينسجم مع روتينك اليومي دون أن يعطّله.",
    "What is SANAD?": "ما هو سند؟",
    "SANAD is a smart wearable concept paired with a companion app, designed to help you notice posture patterns and build healthier everyday habits.":
      "سند جهاز ذكي قابل للارتداء مع تطبيق مرافق، صُمم لمساعدتك على ملاحظة وضعية جسمك وبناء عادات يومية أفضل.",
    "How does the wearable work?": "كيف يعمل الجهاز القابل للارتداء؟",
    "The device is designed to monitor posture relative to a personalized Safe Angle and provide gentle feedback when you move outside that range.":
      "يراقب الجهاز وضعية الجسم مقارنة بالزاوية الآمنة المخصصة، ويقدم تنبيهًا لطيفًا عند تجاوز النطاق المحدد.",
    "What is the Safe Angle?": "ما المقصود بالزاوية الآمنة؟",
    "Safe Angle is the posture threshold configured for the wearer. Its exact calculation and final product specifications are to be confirmed as development continues.":
      "هي الحدّ الزاوي لوضعية الجسم الذي يُضبط للمستخدم. وسيتم تأكيد طريقة الحساب والمواصفات النهائية مع استمرار التطوير.",
    "Does SANAD connect to a mobile app?": "هل يتصل سند بتطبيق هاتف؟",
    "The SANAD ecosystem is being designed around a companion mobile application for setup and progress insights. Supported devices are to be confirmed.":
      "يجري تطوير منظومة سند مع تطبيق مرافق للإعداد ومتابعة التقدم. وسيتم تأكيد الأجهزة المدعومة لاحقًا.",
    "When will SANAD be available?": "متى سيتوفر سند؟",
    "Availability and launch timing are still to be confirmed. Join the community to receive updates from the team.":
      "لم يتم تأكيد موعد الإطلاق والتوفر بعد. انضم إلى مجتمع سند لتصلك تحديثات الفريق.",
    "How is user data handled?": "كيف يتم التعامل مع بيانات المستخدم؟",
    "Our data handling approach and privacy policy are to be confirmed before launch. We are committed to communicating this clearly.":
      "سيتم توضيح سياسة الخصوصية وآلية التعامل مع البيانات قبل الإطلاق.",
    "Everyday posture, reimagined": "وضعية يومية أفضل، برؤية جديدة",
    "A smarter way to ": "طريقة أذكى لـ",
    "sit, stand,": "الجلوس والوقوف،",
    " and move.": "والحركة.",
    "Meet SANAD — a smart wearable designed to monitor your posture, provide gentle feedback, and help you build better daily habits.":
      "تعرّف على سند — جهاز ذكي قابل للارتداء لمتابعة وضعية جسمك وتقديم تنبيهات لطيفة ومساعدتك على بناء عادات يومية أفضل.",
    "Discover SANAD": "اكتشف سند",
    "Meet our team": "تعرّف على فريقنا",
    Wearable: "جهاز قابل للارتداء",
    Feedback: "التنبيه",
    Progress: "التقدم",
    "The everyday problem": "التحدي اليومي",
    "Your body keeps the score.": "جسمك يتذكر عاداتك.",
    "Long hours at a desk can make awareness fade. SANAD brings a quiet signal back into the moment — helping you notice, reset, and create a better rhythm without judgment.":
      "قد تقل ملاحظتنا لوضعية الجسم خلال ساعات العمل الطويلة. يساعدك سند على الانتباه وإعادة ضبط وضعيتك وبناء روتين أفضل دون أحكام.",
    Notice: "لاحظ",
    "Understand your posture in real time.": "افهم وضعية جسمك لحظيًا.",
    Reset: "صحّح",
    "Get a gentle cue, right when it matters.":
      "احصل على تنبيه لطيف في الوقت المناسب.",
    Grow: "تطوّر",
    "Build lasting awareness over time.": "عزّز وعيك بوضعية جسمك مع الوقت.",
    "A simple loop": "خطوات بسيطة",
    "Small signals. Better habits.": "تنبيهات صغيرة، وعادات أفضل.",
    "Designed to support your awareness — not distract from your day.":
      "مصمم لتعزيز وعيك دون تشتيت يومك.",
    Wear: "ارتدِ الجهاز",
    "Put on SANAD and let it become part of your routine.":
      "ارتدِ سند واجعله جزءًا من روتينك.",
    Monitor: "راقب",
    "The system learns your personalized Safe Angle.":
      "يستخدم النظام زاويتك الآمنة المخصصة.",
    "A gentle vibration helps you notice when you drift.":
      "يساعدك اهتزاز لطيف على ملاحظة الانحناء.",
    Improve: "تحسّن",
    "Review your trends and celebrate steady progress.":
      "راجع مؤشراتك واحتفِ بتقدمك المستمر.",
    "Thoughtfully built": "مصمم بعناية",
    "Technology that feels human.": "تقنية تتمحور حول الإنسان.",
    "The companion app": "التطبيق المرافق",
    "Your progress, in perspective.": "تابع تقدمك بوضوح.",
    "An illustrative preview of the future SANAD app experience. Final screens and features will be confirmed as the product develops.":
      "معاينة توضيحية للتطبيق المستقبلي لسند. سيتم تأكيد الشاشات والميزات النهائية مع تطور المنتج.",
    "A calmer way to check in": "طريقة أبسط لمتابعة وضعيتك",
    "Built around you": "مصمم ليناسبك",
    "Keep the focus on feeling good.": "اجعل تركيزك على راحتك.",
    "SANAD is being developed as an everyday companion: discreet when you need focus, informative when you want to learn more about your patterns.":
      "يجري تطوير سند ليكون رفيقك اليومي؛ بسيطًا حين تحتاج إلى التركيز، ومفيدًا حين ترغب في فهم عاداتك.",
    "Join the journey": "انضم إلى الرحلة",
    "Inside the technology": "داخل التقنية",
    "Feedback with a little more intelligence.": "تنبيهات أكثر ذكاءً.",
    "SANAD uses a six-axis motion-sensing approach and a personalized posture threshold. A 10-second sustained-threshold delay is designed to help filter out brief everyday movements before vibration feedback is triggered.":
      "يعتمد سند على استشعار الحركة بستة محاور وحدّ مخصص لوضعية الجسم. تساعد مهلة استمرار الانحناء لمدة 10 ثوانٍ على تجاهل الحركات اليومية العابرة قبل التنبيه بالاهتزاز.",
    "Accelerometer and gyroscope motion sensing":
      "استشعار الحركة بمقياس التسارع والجيروسكوب",
    "Sustained-threshold delay before a vibration cue":
      "مهلة استمرار الانحناء قبل التنبيه بالاهتزاز",
    "Rechargeable battery with approximately 1.5–2 hour full charging time":
      "بطارية قابلة للشحن، ومدة الشحن الكامل نحو 1.5–2 ساعة",
    "Designed for multiple days of use on one charge":
      "مصمم للعمل عدة أيام بشحنة واحدة",
    "Interactive demo": "تجربة تفاعلية",
    "Explore a posture angle": "استكشف زاوية وضعية الجسم",
    Simulation: "محاكاة",
    "Illustrative tilt": "زاوية ميل توضيحية",
    "0° baseline": "خط الأساس 0°",
    "25° tilt": "ميل 25°",
    "Illustrative browser simulation only. It is not connected to a SANAD device and does not represent a clinical assessment or a verified product threshold.":
      "هذه محاكاة توضيحية داخل الموقع فقط؛ ليست متصلة بجهاز سند ولا تمثل تقييمًا طبيًا أو حدًا معتمدًا للمنتج.",
    "Choose your SANAD": "اختر سند المناسب لك",
    "Simple options. Smarter habits.": "خيارات واضحة، وعادات أذكى.",
    "Explore the current package pricing and included accessories. Contact the team to confirm availability and ordering.":
      "تعرّف على أسعار الباقات والملحقات المرفقة. تواصل مع الفريق لتأكيد التوفر وطريقة الطلب.",
    "Single Device": "جهاز واحد",
    "One SANAD CORE device package.": "باقة تحتوي على جهاز سند كور واحد.",
    "1 SANAD CORE device": "جهاز SANAD CORE واحد",
    "Adult one-size magnetic strap": "حزام مغناطيسي بمقاس موحد للكبار",
    "Junior magnetic strap": "حزام مغناطيسي للأطفال",
    "USB Type-C charging cable": "كابل شحن USB Type-C",
    "Ask about one device": "استفسر عن جهاز واحد",
    "Save 230 EGP": "وفّر 230 جنيهًا",
    "Dual Device Pack": "باقة جهازين",
    "Two devices for a combined saving versus two single units.":
      "جهازان بسعر أقل من شراء جهازين منفصلين.",
    "2 SANAD CORE devices": "جهازان SANAD CORE",
    "Adult and junior strap sizes per package":
      "حزام للكبار وحزام للأطفال في كل باقة",
    "USB Type-C charging cable per package": "كابل شحن USB Type-C لكل باقة",
    "Nationwide shipping in Egypt": "شحن لجميع أنحاء مصر",
    "Ask about the dual pack": "استفسر عن باقة الجهازين",
    "6-month product warranty": "ضمان المنتج لمدة 6 أشهر",
    "14-day return and exchange policy": "سياسة استبدال واسترجاع لمدة 14 يومًا",
    "Pricing and commercial terms are based on the supplied project specification and should be confirmed by the SANAD team before launch.":
      "تعتمد الأسعار والشروط على مواصفات المشروع المقدمة، ويجب تأكيدها من فريق سند قبل الإطلاق.",
    "The people behind SANAD": "الأشخاص وراء سند",
    "Meet the team.": "تعرّف على فريقنا.",
    "Building thoughtful technology and a better everyday experience with SANAD.":
      "نطوّر معًا تقنية مدروسة وتجربة يومية أفضل مع سند.",
    "Good to know": "معلومات تهمك",
    "Questions, answered.": "إجابات عن أسئلتك.",
    "Stay close": "ابقَ على تواصل",
    "Want to know more about SANAD?": "هل تريد معرفة المزيد عن سند؟",
    "Use this quick sample inquiry to ask our team about the device, package options, pricing, availability, or how to order. No application details are required.":
      "استخدم نموذج الاستفسار التجريبي لسؤال الفريق عن الجهاز أو الباقات أو الأسعار أو التوفر أو طريقة الطلب. لا حاجة إلى بيانات تقديم أو انضمام.",
    "Your message opens directly in WhatsApp.":
      "ستُفتح رسالتك مباشرةً في واتساب.",
    "Full name *": "الاسم الكامل *",
    "Email address *": "البريد الإلكتروني *",
    "Phone number": "رقم الهاتف",
    "Message ": "الرسالة ",
    "(optional)": "(اختياري)",
    "I agree that my contact details can be shared with SANAD through WhatsApp. *":
      "أوافق على مشاركة بيانات التواصل مع فريق سند عبر واتساب. *",
    "Open WhatsApp again": "افتح واتساب مجددًا",
    "Ask about SANAD on WhatsApp": "استفسر عن سند عبر واتساب",
    "This is a sample product inquiry form. WhatsApp opens with your details and a default request for product information if you leave the optional message empty. You will press Send in WhatsApp.":
      "هذا نموذج تجريبي للاستفسار عن المنتج. إذا تركت الرسالة الاختيارية فارغة، سيفتح واتساب ببياناتك ورسالة افتراضية لطلب تفاصيل المنتج. يمكنك مراجعة الرسالة ثم الضغط على إرسال في واتساب.",
    "Follow SANAD": "تابع سند",
    "A smarter way to build awareness around how you move.":
      "طريقة أذكى لزيادة وعيك بطريقة حركتك.",
    "© ": "© ",
    "All rights reserved.": "جميع الحقوق محفوظة.",
    "Contact details coming soon.": "سيتم إضافة تفاصيل التواصل قريبًا.",
    "pay SANAD": "اشتري سند",
    "Previous team member": "عضو الفريق السابق",
    "Next team member": "عضو الفريق التالي",
    "SANAD TEAM": "فريق سند",
    "Contact SANAD": "تواصل مع سند",
    "Please enter your full name.": "يرجى إدخال الاسم الكامل.",
    "Please enter a valid email address.": "يرجى إدخال بريد إلكتروني صحيح.",
    "Please confirm you are happy to continue via WhatsApp.":
      "يرجى تأكيد موافقتك على المتابعة عبر واتساب.",
    "WhatsApp is not configured yet. Please add SANAD’s international number in the page configuration.":
      "لم يتم إعداد واتساب بعد. يرجى إضافة رقم سند الدولي في إعدادات الصفحة.",
    "Social Media Marketing": "التسويق عبر وسائل التواصل",
    Marketing: "التسويق",
    "Application Software Manager": "مدير برمجيات التطبيق",
    "Website Software Manager": "مدير برمجيات الموقع",
    "R&D": "البحث والتطوير",
    "A smarter way to": "طريقة أذكى لـ",
    "and move.": "والحركة.",
    Message: "الرسالة",
    "Message (optional)": "الرسالة (اختياري)",
    "Explore the technology": "استكشف التقنية",
    "A smarter way to sit, stand, and move.":
      "طريقة أذكى للجلوس والوقوف والحركة.",
    "SANAD wearable": "جهاز سند القابل للارتداء",
    "Concept device": "نموذج تجريبي للجهاز",
  };

  // Technical labels and package checklist translations.
  translations["10 seconds"] = "10 ثوانٍ";
  translations["6-axis"] = "6 محاور";
  translations["EGP"] = "جنيه مصري";
  translations["Multi-day"] = "عدة أيام";
  translations["SANAD"] = "سند";
  translations["SANAD CORE"] = "سند كور";
  translations["UPRIGHT BASELINE"] = "خط أساس الوضعية المستقيمة";
  translations["USB-C"] = "USB-C";
  translations["✓ 1 SANAD CORE device"] = "✓ جهاز SANAD CORE واحد";
  translations["✓ 2 SANAD CORE devices"] = "✓ جهازان SANAD CORE";
  translations["✓ Adult and junior strap sizes per package"] =
    "✓ حزام للكبار وحزام للأطفال لكل باقة";
  translations["✓ Adult one-size magnetic strap"] =
    "✓ حزام مغناطيسي بمقاس موحد للكبار";
  translations["✓ Junior magnetic strap"] = "✓ حزام مغناطيسي للأطفال";
  translations["✓ Nationwide shipping in Egypt"] = "✓ شحن لجميع أنحاء مصر";
  translations["✓ USB Type-C charging cable"] = "✓ كابل شحن USB Type-C";
  translations["✓ USB Type-C charging cable per package"] =
    "✓ كابل شحن USB Type-C لكل باقة";
  const tr = (text: string) =>
    language === "ar" ? (translations[text] ?? text) : text;

  useGSAP(
    () => {
      gsap.registerPlugin(ScrollTrigger);
      if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
      const heroProduct = document.querySelector<HTMLElement>(
        ".sanad-hero-product",
      );
      if (heroProduct) {
        gsap.fromTo(
          heroProduct,
          { opacity: 0, y: 36, rotateY: -7, scale: 0.95 },
          {
            opacity: 1,
            y: 0,
            rotateY: 0,
            scale: 1,
            duration: 1.1,
            ease: "power3.out",
            delay: 0.15,
          },
        );
        gsap.to(heroProduct, {
          y: -9,
          duration: 3.8,
          ease: "sine.inOut",
          yoyo: true,
          repeat: -1,
          delay: 1.2,
        });
      }
      gsap.utils
        .toArray<HTMLElement>("[data-gsap-reveal]")
        .forEach((element) => {
          gsap.fromTo(
            element,
            { opacity: 0, y: 26 },
            {
              opacity: 1,
              y: 0,
              duration: 0.72,
              ease: "power2.out",
              scrollTrigger: { trigger: element, start: "top 88%", once: true },
            },
          );
        });
      gsap.utils.toArray<HTMLElement>("[data-gsap-card]").forEach((element) => {
        const enter = () =>
          gsap.to(element, {
            y: -6,
            scale: 1.01,
            duration: 0.22,
            ease: "power2.out",
          });
        const leave = () =>
          gsap.to(element, {
            y: 0,
            scale: 1,
            duration: 0.25,
            ease: "power2.out",
          });
        element.addEventListener("mouseenter", enter);
        element.addEventListener("mouseleave", leave);
        element.addEventListener("focusin", enter);
        element.addEventListener("focusout", leave);
      });
    },
    { scope: pageRef },
  );

  const update = (key: string, value: string | boolean) =>
    setForm((current) => ({ ...current, [key]: value }));
  const validate = () => {
    const next: Record<string, string> = {};
    if (!form.name.trim()) next.name = "Please enter your full name.";
    if (!/^\S+@\S+\.\S+$/.test(form.email))
      next.email = "Please enter a valid email address.";
    if (!form.consent)
      next.consent = "Please confirm you are happy to continue via WhatsApp.";
    setErrors(next);
    return Object.keys(next).length === 0;
  };
  const submit = (event: React.FormEvent) => {
    event.preventDefault();
    if (!validate()) return;
    if (!SANAD_WHATSAPP_NUMBER || SANAD_WHATSAPP_NUMBER.includes("REPLACE")) {
      setErrors({
        form: "WhatsApp is not configured yet. Please add SANAD’s international number in the page configuration.",
      });
      return;
    }
    const inquiry =
      form.message.trim() ||
      "I would like to see more details about SANAD CORE, including current pricing, availability, package contents, and how to order.";
    const message = `Hello SANAD Team!\n\nI would like to ask about purchasing SANAD CORE.\n\nName: ${form.name}\nEmail: ${form.email}\nPhone: ${form.phone || "Not provided"}\n\nMy message: ${inquiry}`;
    window.open(
      `https://wa.me/${SANAD_WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`,
      "_blank",
      "noopener,noreferrer",
    );
    setSubmitted(true);
  };

  return (
    <main
      ref={pageRef}
      dir={language === "ar" ? "rtl" : "ltr"}
      lang={language}
      className={`${theme === "dark" ? "dark" : ""} theme-${theme} min-h-screen overflow-hidden selection:bg-cyan-300 selection:text-[#06121f]`}
    >
      <ThreeBackground />
      <header className="fixed inset-x-0 top-0 z-50 border-b border-white/[0.07] bg-[#06121f]/80 backdrop-blur-xl">
        <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5 lg:px-8">
          <a
            href="#home"
            className="flex items-center gap-2.5"
            aria-label={
              language === "ar" ? "الصفحة الرئيسية لسند" : "SANAD home"
            }
          >
            <span className="grid size-8 place-items-center rounded-lg bg-cyan-300 text-sm font-black text-[#06121f]">
              S
            </span>
            <span className="text-lg font-bold tracking-[0.28em]">SANAD</span>
          </a>
          <nav
            className="hidden items-center gap-7 lg:flex"
            aria-label={
              language === "ar" ? "التنقل الرئيسي" : "Primary navigation"
            }
          >
            {navItems.map(([label, href]) => (
              <a
                key={href}
                href={href}
                className="text-sm text-slate-400 transition hover:text-cyan-200"
              >
                {tr(label)}
              </a>
            ))}
          </nav>
          <a
            href="#contact"
            className="hidden rounded-full bg-cyan-300 px-5 py-2.5 text-sm font-semibold text-[#06121f] transition hover:bg-cyan-200 sm:inline-flex"
          >
            {tr("Join SANAD")} <ArrowRight data-icon="inline-end" />
          </a>
          <button
            type="button"
            onClick={() =>
              setLanguage((current) => (current === "ar" ? "en" : "ar"))
            }
            className="ml-2 rounded-full border border-white/15 bg-white/5 px-3 py-2 text-xs font-bold text-cyan-200 transition hover:border-cyan-300/50"
            aria-label={
              language === "ar" ? "Switch to English" : "التبديل إلى العربية"
            }
            title={
              language === "ar" ? "Switch to English" : "التبديل إلى العربية"
            }
          >
            {language === "ar" ? "EN" : "عربي"}
          </button>
          <button
            type="button"
            onClick={() =>
              setTheme((current) => (current === "dark" ? "light" : "dark"))
            }
            className="ml-3 grid size-10 shrink-0 place-items-center rounded-full border border-white/15 bg-white/5 text-cyan-200 transition hover:border-cyan-300/50"
            aria-label={
              language === "ar"
                ? theme === "dark"
                  ? "التبديل إلى الوضع الفاتح"
                  : "التبديل إلى الوضع الداكن"
                : `Switch to ${theme === "dark" ? "light" : "dark"} theme`
            }
            title={
              language === "ar"
                ? theme === "dark"
                  ? "التبديل إلى الوضع الفاتح"
                  : "التبديل إلى الوضع الداكن"
                : `Switch to ${theme === "dark" ? "light" : "dark"} theme`
            }
          >
            {theme === "dark" ? (
              <Sun className="size-4" />
            ) : (
              <Moon className="size-4" />
            )}
          </button>
          <button
            className="rounded-lg p-2 lg:hidden"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={
              language === "ar"
                ? menuOpen
                  ? "إغلاق القائمة"
                  : "فتح القائمة"
                : menuOpen
                  ? "Close menu"
                  : "Open menu"
            }
          >
            {menuOpen ? <X /> : <Menu />}
          </button>
        </div>
        {menuOpen && (
          <nav
            className="flex flex-col gap-4 border-t border-white/[0.07] px-5 py-6 lg:hidden"
            aria-label="Mobile navigation"
          >
            {navItems.map(([label, href]) => (
              <a
                key={href}
                href={href}
                onClick={() => setMenuOpen(false)}
                className="text-sm text-slate-300"
              >
                {tr(label)}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setMenuOpen(false)}
              className="text-sm font-semibold text-cyan-300"
            >
              {tr("Pay SANAD")} <ArrowRight className="ml-1 inline size-4" />
            </a>
          </nav>
        )}
      </header>

      <section
        id="home"
        className="relative mx-auto grid min-h-[760px] max-w-7xl items-center gap-10 px-5 pb-20 pt-36 lg:grid-cols-[0.9fr_1.1fr] lg:px-8 lg:pt-40"
      >
        <div className="pointer-events-none absolute left-[-15%] top-20 size-[500px] rounded-full bg-cyan-400/10 blur-[130px]" />
        <Reveal className="relative z-10">
          <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-cyan-300/20 bg-cyan-300/[0.07] px-3.5 py-2 text-xs font-medium tracking-[0.18em] text-cyan-200 uppercase">
            <span className="size-1.5 rounded-full bg-cyan-300 shadow-[0_0_12px_#67e8f9]" />{" "}
            {tr("Everyday posture, reimagined")}
          </div>
          <h1 className="max-w-xl text-5xl font-semibold leading-[1.03] tracking-[-0.05em] text-white sm:text-7xl">
            {" "}
            {tr("A smarter way to")}{" "}
            <span className="text-cyan-300">{tr("sit, stand,")}</span>{" "}
            {tr("and move.")}
          </h1>
          <p className="mt-7 max-w-lg text-lg leading-8 text-slate-400">
            {" "}
            {tr(
              "Meet SANAD — a smart wearable designed to monitor your posture, provide gentle feedback, and help you build better daily habits.",
            )}{" "}
          </p>
          <div className="mt-9 flex flex-wrap items-center gap-4">
            <a
              href="#technology"
              className="inline-flex items-center gap-2 rounded-full bg-cyan-300 px-6 py-3.5 text-sm font-bold text-[#06121f] transition hover:-translate-y-0.5 hover:bg-cyan-200"
            >
              {" "}
              {tr("Discover SANAD")} <ArrowRight className="size-4" />
            </a>
            <a
              href="#team"
              className="inline-flex items-center gap-2 rounded-full border border-white/15 px-6 py-3.5 text-sm font-semibold text-white transition hover:border-cyan-300/50 hover:text-cyan-200"
            >
              {" "}
              {tr("Meet our team")} <MoveUpRight className="size-4" />
            </a>
          </div>
          <div className="mt-12 flex items-center gap-8 border-t border-white/10 pt-6 text-sm text-slate-500">
            <span>
              <strong className="block text-lg text-slate-200">01</strong>{" "}
              {tr("Wearable")}{" "}
            </span>
            <span>
              <strong className="block text-lg text-slate-200">02</strong>{" "}
              {tr("Feedback")}{" "}
            </span>
            <span>
              <strong className="block text-lg text-slate-200">03</strong>{" "}
              {tr("Progress")}{" "}
            </span>
          </div>
        </Reveal>
        <Reveal className="relative">
          <div className="absolute -inset-10 rounded-full bg-cyan-300/10 blur-[90px]" />
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            className="sanad-hero-product relative overflow-hidden rounded-[2rem] border border-white/15 bg-gradient-to-br from-white/10 to-white/[0.02] p-4 shadow-2xl shadow-cyan-950/40"
          >
            <div className="absolute left-8 top-8 rounded-full border border-cyan-200/20 bg-[#06121f]/60 px-3 py-1.5 text-[10px] tracking-[0.18em] text-cyan-200 uppercase">
              {" "}
              {tr("SANAD CORE")}{" "}
            </div>
            <img
              src={PRODUCT_IMAGE}
              alt={
                language === "ar"
                  ? "نموذج جهاز سند لمتابعة وضعية الجسم"
                  : "SANAD posture wearable prototype"
              }
              className="relative w-full rounded-[1.3rem] bg-[#edf0f1] object-contain"
            />
            <div className="flex items-center justify-between border-t border-white/10 px-2 pt-4 text-xs text-slate-500">
              <span>{tr("SANAD wearable")}</span>
              <span className="flex items-center gap-1.5 text-cyan-200">
                <span className="size-1.5 rounded-full bg-cyan-300" />{" "}
                {tr("Concept device")}{" "}
              </span>
            </div>
          </motion.div>
        </Reveal>
      </section>

      <section
        id="technology"
        className="border-y border-white/[0.07] bg-[#081a2b] py-24 lg:py-32"
      >
        <div className="mx-auto grid max-w-7xl gap-12 px-5 lg:grid-cols-[0.72fr_1.28fr] lg:px-8">
          <Reveal>
            <p className="mb-4 text-xs font-bold tracking-[0.25em] text-cyan-300 uppercase">
              {" "}
              {tr("The everyday problem")}{" "}
            </p>
            <h2 className="max-w-md text-4xl font-semibold tracking-[-0.04em] text-white sm:text-5xl">
              {" "}
              {tr("Your body keeps the score.")}{" "}
            </h2>
          </Reveal>
          <Reveal>
            <p className="max-w-2xl text-xl leading-9 text-slate-300">
              {" "}
              {tr(
                "Long hours at a desk can make awareness fade. SANAD brings a quiet signal back into the moment — helping you notice, reset, and create a better rhythm without judgment.",
              )}{" "}
            </p>
            <div className="mt-9 grid gap-5 sm:grid-cols-3">
              <div className="border-l border-cyan-300/50 pl-4">
                <p className="text-2xl font-semibold text-white">
                  {tr("Notice")}
                </p>
                <p className="mt-2 text-sm leading-6 text-slate-500">
                  {" "}
                  {tr("Understand your posture in real time.")}{" "}
                </p>
              </div>
              <div className="border-l border-cyan-300/50 pl-4">
                <p className="text-2xl font-semibold text-white">
                  {tr("Reset")}
                </p>
                <p className="mt-2 text-sm leading-6 text-slate-500">
                  {" "}
                  {tr("Get a gentle cue, right when it matters.")}{" "}
                </p>
              </div>
              <div className="border-l border-cyan-300/50 pl-4">
                <p className="text-2xl font-semibold text-white">
                  {tr("Grow")}
                </p>
                <p className="mt-2 text-sm leading-6 text-slate-500">
                  {" "}
                  {tr("Build lasting awareness over time.")}{" "}
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section
        id="how-it-works"
        className="mx-auto max-w-7xl px-5 py-24 lg:px-8 lg:py-32"
      >
        <Reveal>
          <div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
            <div>
              <p className="mb-4 text-xs font-bold tracking-[0.25em] text-cyan-300 uppercase">
                {" "}
                {tr("A simple loop")}{" "}
              </p>
              <h2 className="text-4xl font-semibold tracking-[-0.04em] text-white sm:text-5xl">
                {" "}
                {tr("Small signals. Better habits.")}{" "}
              </h2>
            </div>
            <p className="max-w-sm text-sm leading-7 text-slate-500">
              {" "}
              {tr(
                "Designed to support your awareness — not distract from your day.",
              )}{" "}
            </p>
          </div>
        </Reveal>
        <div className="mt-16 grid gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/10 md:grid-cols-4">
          {[
            [
              "01",
              "Wear",
              "Put on SANAD and let it become part of your routine.",
            ],
            [
              "02",
              "Monitor",
              "The system learns your personalized Safe Angle.",
            ],
            [
              "03",
              "Feedback",
              "A gentle vibration helps you notice when you drift.",
            ],
            [
              "04",
              "Improve",
              "Review your trends and celebrate steady progress.",
            ],
          ].map(([number, title, text]) => (
            <Reveal key={number}>
              <div className="group h-full bg-[#081a2b] p-7 transition hover:bg-[#0c2439]">
                <span className="text-xs font-bold tracking-[0.2em] text-cyan-300">
                  {number}
                </span>
                <div className="my-10 grid size-12 place-items-center rounded-xl border border-cyan-300/20 bg-cyan-300/10 text-cyan-200">
                  <CircleCheck className="size-5" />
                </div>
                <h3 className="text-xl font-semibold text-white">
                  {tr(title)}
                </h3>
                <p className="mt-3 text-sm leading-6 text-slate-500">
                  {tr(text)}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section id="features" className="bg-[#081a2b] py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <Reveal>
            <p className="mb-4 text-xs font-bold tracking-[0.25em] text-cyan-300 uppercase">
              {" "}
              {tr("Thoughtfully built")}{" "}
            </p>
            <h2 className="max-w-xl text-4xl font-semibold tracking-[-0.04em] text-white sm:text-5xl">
              {" "}
              {tr("Technology that feels human.")}{" "}
            </h2>
          </Reveal>
          <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {features.map(({ icon: Icon, title, text }) => (
              <Reveal key={title}>
                <article className="group rounded-2xl border border-white/10 bg-[#0b2236]/70 p-6 transition duration-300 hover:-translate-y-1 hover:border-cyan-300/30">
                  <div className="mb-12 flex size-11 items-center justify-center rounded-xl bg-cyan-300/10 text-cyan-300">
                    <Icon className="size-5" />
                  </div>
                  <h3 className="text-lg font-semibold text-white">
                    {tr(title)}
                  </h3>
                  <p className="mt-3 text-sm leading-6 text-slate-500">
                    {tr(text)}
                  </p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-12 px-5 py-24 lg:grid-cols-[1fr_0.8fr] lg:items-center lg:px-8 lg:py-32">
        <Reveal>
          <div className="overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-[#123653] to-[#081522] p-8 sm:p-12">
            <p className="text-xs font-bold tracking-[0.25em] text-cyan-300 uppercase">
              {" "}
              {tr("The companion app")}{" "}
            </p>
            <div className="mt-16 max-w-sm">
              <h2 className="text-4xl font-semibold tracking-[-0.04em] text-white">
                {" "}
                {tr("Your progress, in perspective.")}{" "}
              </h2>
              <p className="mt-5 leading-7 text-slate-400">
                {" "}
                {tr(
                  "An illustrative preview of the future SANAD app experience. Final screens and features will be confirmed as the product develops.",
                )}{" "}
              </p>
            </div>
            <div className="mt-12 flex items-center gap-3 rounded-xl border border-white/10 bg-white/5 p-4">
              <div className="grid size-9 place-items-center rounded-lg bg-cyan-300 text-[#06121f]">
                <Play className="size-4 fill-current" />
              </div>
              <span className="text-sm text-slate-300">
                {" "}
                {tr("A calmer way to check in")}{" "}
              </span>
            </div>
          </div>
        </Reveal>
        <Reveal>
          <p className="mb-4 text-xs font-bold tracking-[0.25em] text-cyan-300 uppercase">
            {" "}
            {tr("Built around you")}{" "}
          </p>
          <h2 className="text-4xl font-semibold tracking-[-0.04em] text-white sm:text-5xl">
            {" "}
            {tr("Keep the focus on feeling good.")}{" "}
          </h2>
          <p className="mt-6 leading-8 text-slate-400">
            {" "}
            {tr(
              "SANAD is being developed as an everyday companion: discreet when you need focus, informative when you want to learn more about your patterns.",
            )}{" "}
          </p>
          <a
            href="#contact"
            className="mt-8 inline-flex items-center gap-2 text-sm font-bold text-cyan-300 hover:text-cyan-200"
          >
            {" "}
            {tr("Join the journey")} <ArrowRight className="size-4" />
          </a>
        </Reveal>
      </section>

      <section
        id="sensor-lab"
        className="mx-auto max-w-7xl px-5 py-24 text-slate-900 dark:text-white lg:px-8 lg:py-32"
      >
        <div
          data-gsap-reveal
          className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center"
        >
          {/* Technology information */}
          <div>
            <p className="mb-4 text-xs font-bold tracking-[0.25em] text-cyan-700 uppercase dark:text-cyan-300">
              {tr("Inside the technology")}
            </p>

            <h2 className="text-4xl font-semibold tracking-[-0.04em] text-slate-900 dark:text-white sm:text-5xl">
              {tr("Feedback with a little more intelligence.")}
            </h2>

            <p className="mt-6 max-w-xl leading-8 text-slate-600 dark:text-slate-400">
              {tr(
                "SANAD uses a six-axis motion-sensing approach and a personalized posture threshold. A 10-second sustained-threshold delay is designed to help filter out brief everyday movements before vibration feedback is triggered.",
              )}
            </p>

            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {[
                {
                  title: "6-axis",
                  description: "Accelerometer and gyroscope motion sensing",
                },
                {
                  title: "10 seconds",
                  description:
                    "Sustained-threshold delay before a vibration cue",
                },
                {
                  title: "USB-C",
                  description:
                    "Rechargeable battery with approximately 1.5–2 hour full charging time",
                },
                {
                  title: "Multi-day",
                  description:
                    "Designed for multiple days of use on one charge",
                },
              ].map((item) => (
                <div
                  key={item.title}
                  className="rounded-2xl border border-slate-200 bg-white/80 p-5 dark:border-white/10 dark:bg-white/[0.03]"
                >
                  <p className="text-2xl font-semibold text-slate-900 dark:text-white">
                    {tr(item.title)}
                  </p>
                  <p className="mt-2 text-sm leading-6 text-slate-600 dark:text-slate-500">
                    {tr(item.description)}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Interactive demo */}
          <div className="rounded-3xl border border-cyan-200 bg-gradient-to-br from-[#eefafa] to-[#f8fbfc] p-6 dark:border-cyan-300/20 dark:from-[#0d2c41] dark:to-[#071521] sm:p-8">
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="text-xs font-bold tracking-[0.2em] text-cyan-700 uppercase dark:text-cyan-300">
                  {tr("Interactive demo")}
                </p>
                <h3 className="mt-2 text-2xl font-semibold text-slate-900 dark:text-white">
                  {tr("Explore a posture angle")}
                </h3>
              </div>

              <span className="rounded-full border border-slate-200 px-3 py-1 text-xs text-slate-500 dark:border-white/10 dark:text-slate-400">
                {tr("Simulation")}
              </span>
            </div>

            <div className="mt-8 flex items-center justify-center rounded-2xl border border-slate-200 bg-slate-100 p-6 dark:border-white/10 dark:bg-[#4b5862]">
              <svg
                viewBox="0 0 260 220"
                className="h-56 w-full max-w-xs"
                role="img"
                aria-label={
                  language === "ar"
                    ? `زاوية وضعية توضيحية ${demoAngle} درجة`
                    : `Illustrative posture angle of ${demoAngle} degrees`
                }
              >
                <defs>
                  <linearGradient
                    id="sanadSpineGlow"
                    x1="0"
                    y1="0"
                    x2="1"
                    y2="0"
                  >
                    <stop offset="0%" stopColor="#5eead4" />
                    <stop offset="100%" stopColor="#67e8f9" />
                  </linearGradient>
                </defs>

                {/* Upright reference */}
                <path
                  d="M130 28 L130 188"
                  stroke="#294354"
                  strokeWidth="2"
                  strokeDasharray="5 6"
                />

                {(() => {
                  const angle = (demoAngle / 25) * (Math.PI / 7);
                  const lean = Math.sin(angle);

                  // Head remains close to the center line.
                  const headX = 130 - lean * 7;
                  const headY = 39;

                  // Shoulder/upper-body line tilts forward: /
                  const shoulderLeftX = 130 - lean * 28;
                  const shoulderLeftY = 76;
                  const neckX = 130 - lean * 10;
                  const neckY = 61;
                  const shoulderRightX = 130 + lean * 19;
                  const shoulderRightY = 84;

                  // Back curves in the opposite direction: \
                  const backTopX = 130 - lean * 8;
                  const backTopY = 66;
                  const backMidX = 130 + lean * 23;
                  const backMidY = 119;
                  const backBottomX = 130;
                  const backBottomY = 178;

                  return (
                    <>
                      <circle
                        cx={headX}
                        cy={headY}
                        r="15"
                        fill="#b7e7e7"
                        stroke="#5eead4"
                        strokeWidth="2"
                      />

                      <path
                        d={`M${shoulderLeftX} ${shoulderLeftY}
                      L${neckX} ${neckY}
                      L${shoulderRightX} ${shoulderRightY}`}
                        fill="none"
                        stroke="#8ce8e1"
                        strokeWidth="6"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />

                      <path
                        d={`M${backTopX} ${backTopY}
                      Q${backMidX} ${backMidY}
                      ${backBottomX} ${backBottomY}`}
                        fill="none"
                        stroke="url(#sanadSpineGlow)"
                        strokeWidth="10"
                        strokeLinecap="round"
                      />

                      <circle
                        cx={backBottomX}
                        cy={backBottomY}
                        r="5"
                        fill="#5eead4"
                      />

                      <path
                        d={`M130 82 L${130 - lean * 24} 82`}
                        fill="none"
                        stroke="#fbbf24"
                        strokeWidth="2"
                        strokeDasharray="4 4"
                      />

                      <text
                        x="242"
                        y="24"
                        textAnchor="end"
                        fill={demoAngle > 12 ? "#fbbf24" : "#5eead4"}
                        fontSize="12"
                        fontWeight="600"
                      >
                        {demoAngle}°
                      </text>
                    </>
                  );
                })()}
              </svg>
            </div>

            {/* Slider */}
            <div className="mt-6">
              <div className="flex items-center justify-between gap-3 text-sm">
                <label
                  htmlFor="angle-range"
                  className="text-slate-700 dark:text-slate-300"
                >
                  {tr("Illustrative tilt")}
                </label>

                <span className="font-semibold text-cyan-700 dark:text-cyan-200">
                  {demoAngle}°
                </span>
              </div>

              <input
                id="angle-range"
                type="range"
                min="0"
                max="25"
                value={demoAngle}
                onChange={(event) => setDemoAngle(Number(event.target.value))}
                className="mt-4 w-full accent-cyan-500 dark:accent-cyan-300"
              />

              <div className="mt-2 flex justify-between text-xs text-slate-500 dark:text-slate-600">
                <span>{tr("0° baseline")}</span>
                <span>{tr("25° tilt")}</span>
              </div>
            </div>

            {/* Disclaimer */}
            <p className="mt-5 rounded-xl border border-slate-200 bg-white/70 p-4 text-xs leading-5 text-slate-600 dark:border-white/10 dark:bg-white/[0.03] dark:text-slate-500">
              {tr(
                "Illustrative browser simulation only. It is not connected to a SANAD device and does not represent a clinical assessment or a verified product threshold.",
              )}
            </p>
          </div>
        </div>
      </section>

      <section
        id="pricing"
        className="border-y border-white/[0.07] bg-[#06121f] py-24 lg:py-32"
      >
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <div data-gsap-reveal className="mx-auto max-w-2xl text-center">
            <p className="mb-4 text-xs font-bold tracking-[0.25em] text-cyan-300 uppercase">
              {tr("Choose your SANAD")}
            </p>
            <h2 className="text-4xl font-semibold tracking-[-0.04em] text-white sm:text-5xl">
              {tr("Simple options. Smarter habits.")}
            </h2>
            <p className="mt-5 leading-7 text-slate-400">
              {tr(
                "Explore the current package pricing and included accessories. Contact the team to confirm availability and ordering.",
              )}
            </p>
          </div>
          <div className="mt-12 grid gap-5 md:grid-cols-2">
            <article
              data-gsap-card
              className="rounded-3xl border border-white/10 bg-[#0b2236]/70 p-7 sm:p-9"
            >
              <p className="text-sm font-semibold text-slate-300">
                {tr("Single Device")}
              </p>
              <div className="mt-4 flex items-end gap-2">
                <span className="text-5xl font-semibold tracking-tight text-white">
                  1,290
                </span>
                <span className="pb-1 text-slate-400">{tr("EGP")}</span>
              </div>
              <p className="mt-3 text-sm text-slate-500">
                {tr("One SANAD CORE device package.")}
              </p>
              <ul className="mt-7 space-y-3 text-sm text-slate-300">
                <li>{tr("✓ 1 SANAD CORE device")}</li>
                <li>{tr("✓ Adult one-size magnetic strap")}</li>
                <li>{tr("✓ Junior magnetic strap")}</li>
                <li>{tr("✓ USB Type-C charging cable")}</li>
              </ul>
              <a
                href="#contact"
                className="mt-8 inline-flex rounded-full border border-white/15 px-5 py-3 text-sm font-semibold text-white transition hover:border-cyan-300/50 hover:text-cyan-200"
              >
                {tr("Ask about one device")}{" "}
                <ArrowRight className="ml-2 size-4" />
              </a>
            </article>
            <article
              data-gsap-card
              className="relative rounded-3xl border border-cyan-300/40 bg-gradient-to-br from-cyan-300/[0.12] to-[#0b2236] p-7 shadow-xl shadow-cyan-950/20 sm:p-9"
            >
              <span className="absolute right-6 top-6 rounded-full bg-cyan-300 px-3 py-1 text-[10px] font-bold tracking-wider text-[#06121f] uppercase">
                {tr("Save 230 EGP")}
              </span>
              <p className="text-sm font-semibold text-cyan-100">
                {tr("Dual Device Pack")}
              </p>
              <div className="mt-4 flex items-end gap-2">
                <span className="text-5xl font-semibold tracking-tight text-white">
                  2,350
                </span>
                <span className="pb-1 text-slate-300">{tr("EGP")}</span>
              </div>
              <p className="mt-3 text-sm text-slate-300">
                {tr(
                  "Two devices for a combined saving versus two single units.",
                )}
              </p>
              <ul className="mt-7 space-y-3 text-sm text-slate-200">
                <li>{tr("✓ 2 SANAD CORE devices")}</li>
                <li>{tr("✓ Adult and junior strap sizes per package")}</li>
                <li>{tr("✓ USB Type-C charging cable per package")}</li>
                <li>{tr("✓ Nationwide shipping in Egypt")}</li>
              </ul>
              <a
                href="#contact"
                className="mt-8 inline-flex rounded-full bg-cyan-300 px-5 py-3 text-sm font-bold text-[#06121f] transition hover:bg-cyan-200"
              >
                {tr("Ask about the dual pack")}{" "}
                <ArrowRight className="ml-2 size-4" />
              </a>
            </article>
          </div>
          <div
            data-gsap-reveal
            className="mt-6 grid gap-3 rounded-2xl border border-white/10 bg-white/[0.03] p-5 text-sm text-slate-400 sm:grid-cols-3"
          >
            <p>
              <ShieldCheck className="mb-2 size-5 text-cyan-300" />
              {tr("6-month product warranty")}
            </p>
            <p>
              <CircleCheck className="mb-2 size-5 text-cyan-300" />
              {tr("14-day return and exchange policy")}
            </p>
            <p>
              <MessageCircle className="mb-2 size-5 text-cyan-300" />
              {tr("Nationwide shipping in Egypt")}
            </p>
          </div>
          <p className="mt-4 text-xs leading-5 text-slate-600">
            {tr(
              "Pricing and commercial terms are based on the supplied project specification and should be confirmed by the SANAD team before launch.",
            )}
          </p>
        </div>
      </section>

      <section
        id="team"
        className="border-y border-white/[0.07] bg-[#081a2b] py-24 lg:py-32"
      >
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <Reveal>
            <div className="text-center">
              <p className="mb-4 text-xs font-bold tracking-[0.25em] text-cyan-300 uppercase">
                {tr("The people behind SANAD")}
              </p>
              <h2 className="text-4xl font-semibold tracking-[-0.04em] text-white sm:text-5xl">
                {tr("Meet the team.")}
              </h2>
            </div>
          </Reveal>
          <div className="team-grid mt-14 grid grid-cols-1 gap-7 sm:grid-cols-2 xl:grid-cols-3">
            {teamMembers.map((member) => (
              <motion.article
                key={member.name}
                whileHover={{ y: -7, rotateX: 1.5, rotateY: -1.5 }}
                transition={{ type: "spring", stiffness: 220, damping: 20 }}
                className="team-profile group relative overflow-hidden rounded-[1.7rem] border border-white/10 bg-[#0b2236]/80 shadow-xl shadow-black/20 backdrop-blur-xl"
              >
                <div
                  className={`team-profile-image relative aspect-[4/3.25] overflow-hidden bg-gradient-to-br ${member.color}`}
                >
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_25%,rgba(103,232,249,.22),transparent_55%)]" />
                  <img
                    src={member.image}
                    alt={member.name}
                    loading="lazy"
                    className="relative z-10 h-full w-full object-cover object-center transition duration-700 ease-out group-hover:scale-[1.045]"
                  />
                  <div className="absolute inset-x-0 bottom-0 z-20 h-1/3 bg-gradient-to-t from-[#071522]/75 to-transparent" />
                  <span className="absolute bottom-4 left-4 z-30 rounded-full border border-white/20 bg-[#071522]/60 px-3 py-1 text-[10px] font-semibold tracking-[.2em] text-cyan-100 uppercase backdrop-blur-md">
                    {tr("SANAD TEAM")}
                  </span>
                </div>
                <div className="relative p-6 sm:p-7">
                  <div className="absolute right-6 top-6 size-2 rounded-full bg-teal-300 shadow-[0_0_16px_rgba(94,234,212,.8)]" />
                  <h3 className="pr-5 text-xl font-semibold tracking-tight text-white sm:text-2xl">
                    {member.name}
                  </h3>
                  <p className="mt-2 text-sm font-semibold leading-6 text-cyan-300">
                    {tr(member.role)}
                  </p>
                  <div className="mt-5 h-px bg-gradient-to-r from-cyan-300/50 via-white/10 to-transparent" />
                  <p className="mt-4 text-sm leading-6 text-slate-400">
                    {tr(
                      "Building thoughtful technology and a better everyday experience with SANAD.",
                    )}
                  </p>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <section id="faq" className="mx-auto max-w-4xl px-5 py-24 lg:py-32">
        <Reveal>
          <p className="mb-4 text-center text-xs font-bold tracking-[0.25em] text-cyan-300 uppercase">
            {" "}
            {tr("Good to know")}{" "}
          </p>
          <h2 className="text-center text-4xl font-semibold tracking-[-0.04em] text-white sm:text-5xl">
            {" "}
            {tr("Questions, answered.")}{" "}
          </h2>
        </Reveal>
        <div className="mt-12 divide-y divide-white/10 border-y border-white/10">
          {faqs.map(([question, answer], index) => (
            <div key={question}>
              <button
                className="flex w-full items-center justify-between gap-6 py-6 text-left font-medium text-white"
                onClick={() => setOpenFaq(openFaq === index ? null : index)}
                aria-expanded={openFaq === index}
              >
                <span>{tr(question)}</span>
                <ChevronDown
                  className={`size-5 shrink-0 text-cyan-300 transition ${openFaq === index ? "rotate-180" : ""}`}
                />
              </button>
              {openFaq === index && (
                <p className="max-w-2xl pb-6 pr-8 text-sm leading-7 text-slate-500">
                  {tr(answer)}
                </p>
              )}
            </div>
          ))}
        </div>
      </section>

      <section
        id="contact"
        className="bg-gradient-to-br from-[#0b2a40] to-[#06121f] py-24 lg:py-32"
      >
        <div className="mx-auto grid max-w-7xl gap-12 px-5 lg:grid-cols-[0.75fr_1.25fr] lg:px-8">
          <Reveal>
            <p className="mb-4 text-xs font-bold tracking-[0.25em] text-cyan-300 uppercase">
              {" "}
              {tr("Stay close")}{" "}
            </p>
            <h2 className="max-w-md text-4xl font-semibold tracking-[-0.04em] text-white sm:text-5xl">
              {" "}
              {tr("Want to know more about SANAD?")}{" "}
            </h2>
            <p className="mt-6 max-w-md leading-7 text-slate-400">
              {" "}
              {tr(
                "Use this quick sample inquiry to ask our team about the device, package options, pricing, availability, or how to order. No application details are required.",
              )}{" "}
            </p>
            <div className="mt-10 flex items-center gap-3 text-sm text-slate-400">
              <MessageCircle className="size-5 text-cyan-300" />{" "}
              {tr("Your message opens directly in WhatsApp.")}{" "}
            </div>
          </Reveal>
          <Reveal>
            <form
              onSubmit={submit}
              className="purchase-form rounded-3xl border border-white/10 bg-[#06121f]/60 p-6 shadow-2xl shadow-cyan-950/20 sm:p-8"
              noValidate
            >
              <div className="grid gap-5 sm:grid-cols-2">
                <label className="text-sm text-slate-300">
                  {" "}
                  {tr("Full name *")}{" "}
                  <input
                    value={form.name}
                    onChange={(e) => update("name", e.target.value)}
                    className="mt-2 w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white outline-none transition focus:border-cyan-300/60"
                    aria-invalid={!!errors.name}
                  />
                  {errors.name && (
                    <span className="mt-1 block text-xs text-rose-300">
                      {tr(errors.name)}
                    </span>
                  )}
                </label>
                <label className="text-sm text-slate-300">
                  {" "}
                  {tr("Email address *")}{" "}
                  <input
                    type="email"
                    value={form.email}
                    onChange={(e) => update("email", e.target.value)}
                    className="mt-2 w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white outline-none transition focus:border-cyan-300/60"
                    aria-invalid={!!errors.email}
                  />
                  {errors.email && (
                    <span className="mt-1 block text-xs text-rose-300">
                      {tr(errors.email)}
                    </span>
                  )}
                </label>
                <label className="text-sm text-slate-300">
                  {" "}
                  {tr("Phone number")}{" "}
                  <input
                    value={form.phone}
                    onChange={(e) => update("phone", e.target.value)}
                    className="mt-2 w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white outline-none focus:border-cyan-300/60"
                  />
                </label>
              </div>
              <label className="mt-5 block text-sm text-slate-300">
                {" "}
                {tr("Message")}{" "}
                <span className="text-slate-500">{tr("(optional)")}</span>
                <textarea
                  rows={4}
                  value={form.message}
                  onChange={(e) => update("message", e.target.value)}
                  placeholder={
                    language === "ar"
                      ? "اختياري: اكتب ما تريد معرفته، أو اتركه فارغًا لطلب تفاصيل المنتج والأسعار والتوفر وطريقة الطلب."
                      : "Optional: tell us what you would like to know. Leave this empty to ask for product details, pricing, availability, and ordering information."
                  }
                  className="mt-2 w-full resize-none rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white outline-none transition placeholder:text-slate-500 focus:border-cyan-300/60"
                />
              </label>
              <label className="mt-5 flex items-start gap-3 text-xs leading-5 text-slate-500">
                <input
                  type="checkbox"
                  checked={form.consent}
                  onChange={(e) => update("consent", e.target.checked)}
                  className="mt-0.5 accent-cyan-300"
                />
                {tr(
                  "I agree that my contact details can be shared with SANAD through WhatsApp. *",
                )}
                {errors.consent && (
                  <span className="text-rose-300"> {tr(errors.consent)}</span>
                )}
              </label>
              {errors.form && (
                <p className="mt-5 rounded-lg border border-amber-300/20 bg-amber-300/10 p-3 text-xs text-amber-200">
                  {tr(errors.form)}
                </p>
              )}
              <button
                type="submit"
                className="mt-7 inline-flex items-center gap-2 rounded-full bg-cyan-300 px-6 py-3.5 text-sm font-bold text-[#06121f] transition hover:bg-cyan-200"
              >
                {submitted
                  ? tr("Open WhatsApp again")
                  : tr("Ask about SANAD on WhatsApp")}{" "}
                <ArrowRight className="size-4" />
              </button>
              <p className="mt-4 text-xs text-slate-600">
                {" "}
                {tr(
                  "This is a sample product inquiry form. WhatsApp opens with your details and a default request for product information if you leave the optional message empty. You will press Send in WhatsApp.",
                )}{" "}
              </p>
            </form>
          </Reveal>
        </div>
      </section>

      <footer className="border-t border-white/[0.07] bg-[#04101b] py-12">
        <div className="mx-auto flex max-w-7xl flex-col gap-10 px-5 lg:px-8">
          <div className="flex flex-col justify-between gap-8 sm:flex-row">
            <div>
              <a href="#home" className="flex items-center gap-2.5">
                <span className="grid size-8 place-items-center rounded-lg bg-cyan-300 text-sm font-black text-[#06121f]">
                  S
                </span>
                <span className="text-lg font-bold tracking-[0.28em]">
                  {" "}
                  {tr("SANAD")}{" "}
                </span>
              </a>
              <p className="mt-4 max-w-xs text-sm leading-6 text-slate-600">
                {" "}
                {tr(
                  "A smarter way to build awareness around how you move.",
                )}{" "}
              </p>
            </div>
            <div>
              <p className="mb-4 text-xs font-bold tracking-[0.2em] text-slate-500 uppercase">
                {" "}
                {tr("Follow SANAD")}{" "}
              </p>
              <div className="flex gap-3">
                <a
                  href="https://www.instagram.com/reel/DasY90VNc9g/?igsh=MTZ4dHp3bmp0a3JvZg=="
                  target="_blank"
                  rel="noreferrer"
                  aria-label={
                    language === "ar"
                      ? "سند على إنستغرام"
                      : "SANAD on Instagram"
                  }
                  className="grid size-10 place-items-center rounded-full border border-white/10 text-slate-400 transition hover:border-cyan-300/40 hover:text-cyan-300"
                >
                  <Camera className="size-4" />
                </a>
                <a
                  href="https://www.facebook.com/share/19Eq36F1md/"
                  target="_blank"
                  rel="noreferrer"
                  aria-label={
                    language === "ar" ? "سند على فيسبوك" : "SANAD on Facebook"
                  }
                  className="grid size-10 place-items-center rounded-full border border-white/10 text-slate-400 transition hover:border-cyan-300/40 hover:text-cyan-300"
                >
                  <span className="text-sm font-bold">f</span>
                </a>
                <a
                  href="https://vt.tiktok.com/ZSXFqPrQo/"
                  target="_blank"
                  rel="noreferrer"
                  aria-label={
                    language === "ar" ? "سند على تيك توك" : "SANAD on TikTok"
                  }
                  className="grid size-10 place-items-center rounded-full border border-white/10 text-slate-400 transition hover:border-cyan-300/40 hover:text-cyan-300"
                >
                  <span className="text-xs font-bold">♪</span>
                </a>
              </div>
            </div>
          </div>
          <div className="flex flex-col justify-between gap-3 border-t border-white/[0.07] pt-6 text-xs text-slate-600 sm:flex-row">
            <span>
              © {new Date().getFullYear()} SANAD. {tr("All rights reserved.")}
            </span>
            <span>{tr("Contact details coming soon.")}</span>
          </div>
        </div>
      </footer>
      <a
        href="#contact"
        className="fixed bottom-5 right-5 z-40 grid size-14 place-items-center rounded-full bg-cyan-300 text-[#06121f] shadow-lg shadow-cyan-950/50 transition hover:scale-105"
        aria-label={tr("Contact SANAD")}
      >
        <MessageCircle className="size-6" />
      </a>
    </main>
  );
}
