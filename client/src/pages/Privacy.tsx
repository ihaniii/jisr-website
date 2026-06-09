/**
 * Privacy Policy Page
 * Bilingual: English & Arabic
 */

import { useLanguage } from "@/contexts/LanguageContext";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { ArrowLeft } from "lucide-react";
import { useLocation } from "wouter";

export default function Privacy() {
  const containerRef = useScrollReveal();
  const { t, lang, dir } = useLanguage();
  const [, setLocation] = useLocation();

  return (
    <div
      ref={containerRef}
      className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950"
      dir={dir}
    >
      {/* Header */}
      <header className="sticky top-0 z-50 border-b border-cyan-500/20 bg-slate-950/80 backdrop-blur-xl">
        <div className="container flex items-center justify-between py-4">
          <button
            onClick={() => setLocation("/")}
            className="flex items-center gap-2 text-cyan-400 hover:text-cyan-300 transition-colors"
          >
            <ArrowLeft size={20} />
            <span className="text-sm font-medium">{lang === "ar" ? "العودة" : "Back"}</span>
          </button>
          <h1 className="text-xl font-bold text-white">
            {lang === "ar" ? "سياسة الخصوصية" : "Privacy Policy"}
          </h1>
          <div className="w-20" />
        </div>
      </header>

      {/* Content */}
      <main className="container py-12 max-w-4xl">
        <div className="prose prose-invert max-w-none text-slate-300 space-y-6">
          {lang === "en" ? (
            <>
              <section>
                <h2 className="text-2xl font-bold text-white mb-4">
                  Official Privacy Policy
                </h2>
                <p>
                  Jisr is committed to protecting the privacy and security of your personal data in
                  compliance with the General Data Protection Regulation (GDPR):
                </p>
              </section>

              <section>
                <h3 className="text-xl font-bold text-cyan-400 mb-3">Data We Collect</h3>
                <p>We collect the following personal data to operate the application effectively and
                  facilitate community communication:</p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>
                    <strong>Email Address:</strong> For authentication, secure login, and OTP
                    verification code delivery.
                  </li>
                  <li>
                    <strong>Display Name:</strong> To personalize your profile and display it in chat
                    rooms and stories.
                  </li>
                  <li>
                    <strong>Phone Number and Country:</strong> For verification and enabling contact
                    features in the marketplace.
                  </li>
                  <li>
                    <strong>Device Identifiers:</strong> To deliver push notifications about new
                    messages and activities.
                  </li>
                </ul>
              </section>

              <section>
                <h3 className="text-xl font-bold text-cyan-400 mb-3">Data Security</h3>
                <p>
                  All your personal data, messages, and uploaded attachments are securely stored and
                  encrypted on Supabase cloud database servers. We never sell, rent, or share your
                  personal data with third-party advertisers or commercial entities.
                </p>
              </section>

              <section>
                <h3 className="text-xl font-bold text-cyan-400 mb-3">Account Deletion</h3>
                <p>
                  Users have the absolute right to request the permanent deletion of their account at
                  any time. Upon deleting your account, all your personal data, profile info, and
                  uploaded messages are permanently and irreversibly purged from our servers.
                </p>
              </section>

              <section>
                <h3 className="text-xl font-bold text-cyan-400 mb-3">Local Storage</h3>
                <p>
                  The application uses secure local storage (AsyncStorage) on your device to persist
                  your session, selected language, and theme preference. We do not use advertising
                  tracking cookies or analytics tools.
                </p>
              </section>

              <section>
                <h3 className="text-xl font-bold text-cyan-400 mb-3">Data Retention</h3>
                <p>
                  We retain your personal data for as long as your account remains active. Upon account
                  deletion — whether requested by you or initiated by us due to a violation of our
                  Terms — all associated personal data, messages, and profile information are
                  permanently erased from our servers within 30 days of the deletion request.
                </p>
              </section>

              <section>
                <h3 className="text-xl font-bold text-cyan-400 mb-3">Third-Party Services</h3>
                <p>
                  This application uses the following third-party services to deliver core functionality.
                  Each service operates under its own independent privacy policy:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>
                    <strong>Supabase</strong> — Used for database storage, user authentication, and
                    real-time messaging infrastructure.
                  </li>
                  <li>
                    <strong>Google Translate API</strong> — Used for real-time message translation
                    between Arabic and other languages within group chats.
                  </li>
                  <li>
                    <strong>Apple Push Notification Service (APNs) / Firebase Cloud Messaging (FCM)</strong>{" "}
                    — Used to deliver push notifications to your device. No message content is stored
                    by these services.
                  </li>
                </ul>
              </section>

              <section>
                <h3 className="text-xl font-bold text-cyan-400 mb-3">Contact Us</h3>
                <p>
                  If you have any questions, concerns, or requests regarding your personal data or this
                  Privacy Policy, please contact us:
                </p>
                <p className="text-amber-400 font-semibold">
                  📧 Email: info.jisrapp@gmail.com
                </p>
                <p>We will respond to all privacy-related requests within 72 hours.</p>
              </section>
            </>
          ) : (
            <>
              <section>
                <h2 className="text-2xl font-bold text-white mb-4">
                  سياسة الخصوصية الرسمية
                </h2>
                <p>
                  يلتزم تطبيق جِسر بحماية خصوصية وأمان بياناتك الشخصية بما يتوافق مع اللائحة العامة لحماية
                  البيانات (GDPR):
                </p>
              </section>

              <section>
                <h3 className="text-xl font-bold text-cyan-400 mb-3">البيانات التي نجمعها</h3>
                <p>
                  نحن نجمع البيانات الشخصية التالية لتشغيل التطبيق بفعالية وتسهيل التواصل في المجتمع:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>
                    <strong>البريد الإلكتروني:</strong> لتأكيد الحساب، الدخول الآمن، واستلام رمز التحقق
                    (OTP).
                  </li>
                  <li>
                    <strong>الاسم الكامل:</strong> لتخصيص ملفك الشخصي وعرضه داخل غرف الدردشة والقصص.
                  </li>
                  <li>
                    <strong>رقم الهاتف والبلد:</strong> للتواصل الآمن مع أفراد المجتمع ولتسهيل خدمات سوق
                    جِسر.
                  </li>
                  <li>
                    <strong>بيانات الجهاز ومعرف الإشعار:</strong> لإرسال الإشعارات الفورية الهامة بخصوص
                    الرسائل والأنشطة الجديدة.
                  </li>
                </ul>
              </section>

              <section>
                <h3 className="text-xl font-bold text-cyan-400 mb-3">أمان البيانات</h3>
                <p>
                  جميع بياناتك الشخصية ورسائلك وملفاتك المرفوعة يتم تخزينها وتأمينها عبر خوادم Supabase
                  السحابية المشفرة. نحن لا نقوم ببيع أو تأجير أو مشاركة بياناتك الشخصية مع أي أطراف ثالثة
                  لأغراض تسويقية أو تجارية على الإطلاق.
                </p>
              </section>

              <section>
                <h3 className="text-xl font-bold text-cyan-400 mb-3">حذف الحساب</h3>
                <p>
                  للمستخدم الحق المطلق والكامل في حذف حسابه نهائياً في أي وقت. عند قيامك بحذف الحساب من
                  الإعدادات، يتم فوراً وبشكل تلقائي حذف جميع بياناتك الشخصية وملفك والرسائل المرفوعة نهائياً
                  من خوادمنا بشكل لا يمكن استرجاعه.
                </p>
              </section>

              <section>
                <h3 className="text-xl font-bold text-cyan-400 mb-3">التخزين المحلي</h3>
                <p>
                  التطبيق يستخدم تقنيات التخزين المحلي الآمن (Local Storage) لتخزين تفضيلاتك محلياً على
                  جهازك لضمان تجربة مستخدم سريعة، ولا نستخدم كوكيز أو أدوات تتبع لأغراض إعلانية.
                </p>
              </section>

              <section>
                <h3 className="text-xl font-bold text-cyan-400 mb-3">الاحتفاظ بالبيانات</h3>
                <p>
                  نحتفظ ببياناتك الشخصية طالما حسابك نشط. عند حذف الحساب — سواء بطلب منك أو من قِبَلنا نتيجة
                  مخالفة الشروط — يتم حذف جميع البيانات الشخصية والرسائل ومعلومات الملف الشخصي بشكل نهائي من
                  خوادمنا خلال ٣٠ يوماً من تاريخ الطلب.
                </p>
              </section>

              <section>
                <h3 className="text-xl font-bold text-cyan-400 mb-3">الخدمات الخارجية</h3>
                <p>
                  يستخدم التطبيق الخدمات الخارجية التالية لتوفير الوظائف الأساسية. كل خدمة تعمل وفق سياسة
                  الخصوصية الخاصة بها:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>
                    <strong>Supabase</strong> — لتخزين البيانات، المصادقة، والرسائل الفورية.
                  </li>
                  <li>
                    <strong>Google Translate API</strong> — للترجمة الفورية للرسائل داخل مجموعات الدردشة.
                  </li>
                  <li>
                    <strong>APNs / Firebase Cloud Messaging</strong> — لإرسال الإشعارات الفورية إلى جهازك.
                  </li>
                </ul>
              </section>

              <section>
                <h3 className="text-xl font-bold text-cyan-400 mb-3">تواصل معنا</h3>
                <p>
                  لأي استفسار أو طلب يتعلق ببياناتك الشخصية أو هذه السياسة، يُرجى التواصل معنا:
                </p>
                <p className="text-amber-400 font-semibold">
                  📧 البريد الإلكتروني: info.jisrapp@gmail.com
                </p>
                <p>سنرد على جميع الطلبات المتعلقة بالخصوصية خلال ٧٢ ساعة.</p>
              </section>
            </>
          )}
        </div>
      </main>
    </div>
  );
}
