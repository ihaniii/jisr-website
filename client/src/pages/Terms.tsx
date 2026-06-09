/**
 * Terms and Conditions Page
 * Bilingual: English & Arabic
 */

import { useLanguage } from "@/contexts/LanguageContext";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { ArrowLeft } from "lucide-react";
import { useLocation } from "wouter";

export default function Terms() {
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
            {lang === "ar" ? "شروط الاستخدام" : "Terms & Conditions"}
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
                  Terms and Conditions
                </h2>
                <p>
                  By accessing or using the Jisr application, you agree to be bound by the following
                  Terms and Conditions:
                </p>
              </section>

              <section>
                <h3 className="text-xl font-bold text-cyan-400 mb-3">
                  Disclaimer: Informational Use Only
                </h3>
                <p>
                  All information and content provided in this application is for general informational
                  and educational purposes only and does not constitute professional legal advice. You
                  must consult a qualified attorney or an accredited immigration/asylum organization
                  before making any legal decisions.
                </p>
              </section>

              <section>
                <h3 className="text-xl font-bold text-cyan-400 mb-3">
                  User-Generated Content Responsibility
                </h3>
                <p>
                  Users are solely and fully responsible for the content (text, photos, stories) they
                  publish in this application. The developers reserve the right to review, edit, or
                  delete any content that violates these Terms or is deemed offensive, without prior
                  notice.
                </p>
              </section>

              <section>
                <h3 className="text-xl font-bold text-cyan-400 mb-3">
                  Age Requirement
                </h3>
                <p>
                  This application is strictly intended for users who are 18 years of age or older.
                  Minor users under the age of 18 are prohibited from registering unless under the
                  direct supervision and authorization of their legal guardian.
                </p>
              </section>

              <section>
                <h3 className="text-xl font-bold text-cyan-400 mb-3">
                  Account Suspension and Termination
                </h3>
                <p>
                  We reserve the absolute right, in our sole discretion, to suspend, restrict, or
                  terminate any account that violates these Terms or harms the community, without prior
                  notice or explanation.
                </p>
              </section>

              <section className="bg-amber-500/10 border border-amber-500/30 rounded-lg p-6">
                <h3 className="text-lg font-bold text-amber-400 mb-3">⚠️ Important Notice</h3>
                <p>
                  Jisr is a community support platform designed to provide information and facilitate
                  connections. It is not a substitute for professional legal counsel, medical advice, or
                  official government services. Always seek qualified professionals for legal, medical,
                  or official matters.
                </p>
              </section>
            </>
          ) : (
            <>
              <section>
                <h2 className="text-2xl font-bold text-white mb-4">
                  شروط وأحكام الاستخدام
                </h2>
                <p>
                  باستخدامك لتطبيق جِسر، فإنك توافق على التبعات والشروط والأحكام التالية:
                </p>
              </section>

              <section>
                <h3 className="text-xl font-bold text-cyan-400 mb-3">
                  تنويه: الاستخدام الإعلامي فقط
                </h3>
                <p>
                  جميع المعلومات والمحتوى المتاح في هذا التطبيق هو لأغراض إعلامية وتثقيفية فقط، ولا يشكل
                  استشارة قانونية مهنية. يجب عليك استشارة محامٍ مؤهل أو منظمة معتمدة ومختصة بالهجرة واللجوء
                  قبل اتخاذ أي قرارات قانونية.
                </p>
              </section>

              <section>
                <h3 className="text-xl font-bold text-cyan-400 mb-3">
                  مسؤولية المستخدم عن المحتوى
                </h3>
                <p>
                  المستخدم يتحمل المسؤولية القانونية الكاملة عن أي محتوى (نصوص، صور، قصص) ينشره داخل
                  التطبيق. يحق لإدارة التطبيق مراجعة أو تعديل أو حذف أي محتوى ينتهك شروط الاستخدام أو
                  يُعتبر مسيئاً دون أي إشعار مسبق.
                </p>
              </section>

              <section>
                <h3 className="text-xl font-bold text-cyan-400 mb-3">
                  متطلبات السن
                </h3>
                <p>
                  هذا التطبيق مخصص حصرياً للمستخدمين الذين تبلغ أعمارهم ١٨ عاماً فما فوق. لا يُسمح للقاصرين
                  تحت السن القانوني باستخدام التطبيق إلا تحت إشراف وتفويض مباشر من ولي الأمر القانوني.
                </p>
              </section>

              <section>
                <h3 className="text-xl font-bold text-cyan-400 mb-3">
                  تعليق وإنهاء الحساب
                </h3>
                <p>
                  يحتفظ تطبيق جِسر بالحق المطلق في تعليق، تقييد، أو إنهاء حساب أي مستخدم يخالف شروط
                  الاستخدام أو يسيء لأعضاء مجتمع التطبيق، وذلك دون الحاجة لتقديم أي تفسير أو إشعار مسبق.
                </p>
              </section>

              <section className="bg-amber-500/10 border border-amber-500/30 rounded-lg p-6">
                <h3 className="text-lg font-bold text-amber-400 mb-3">⚠️ تنويه مهم</h3>
                <p>
                  تطبيق جِسر هو منصة دعم مجتمعي مصممة لتوفير المعلومات وتسهيل الاتصالات. إنه ليس بديلاً عن
                  الاستشارة القانونية المهنية أو النصائح الطبية أو الخدمات الحكومية الرسمية. ابحث دائماً عن
                  متخصصين مؤهلين للمسائل القانونية أو الطبية أو الرسمية.
                </p>
              </section>
            </>
          )}
        </div>
      </main>
    </div>
  );
}
