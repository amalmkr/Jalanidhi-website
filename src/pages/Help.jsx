import Accordion from "../components/Accordian";
import { FaHeadset, FaPhoneAlt, FaEnvelope, FaQuestionCircle } from "react-icons/fa";

const faqs = [
  {
    title: "എങ്ങനെ എന്റെ ബിൽ പരിശോധിക്കാം?",
    answer:
      "Quick Pay വിഭാഗത്തിലേക്ക് പോയി Consumer Number, Mobile Number എന്നിവ നൽകുക. Search Bill അമർത്തിയാൽ ലഭ്യമായ ബിൽ വിവരങ്ങൾ പരിശോധിക്കാം.",
  },
  {
    title: "എങ്ങനെ ബിൽ ഓൺലൈനായി അടയ്ക്കാം?",
    answer:
      "ബിൽ പരിശോധിച്ച ശേഷം Payment പേജിലേക്ക് പോകുക. ലഭ്യമായ പേയ്മെന്റ് മാർഗങ്ങളിൽ ഒന്ന് തിരഞ്ഞെടുക്കുകയും Pay ബട്ടൺ അമർത്തുകയും ചെയ്യുക.",
  },
  {
    title: "എന്റെ പേയ്മെന്റ് വിജയിച്ചോ എന്ന് എങ്ങനെ അറിയാം?",
    answer:
      "പേയ്മെന്റ് വിജയകരമായി പൂർത്തിയായാൽ Payment Successful പേജ് കാണിക്കും. അവിടെ പേയ്മെന്റ് വിവരങ്ങളും Payment History കാണാനുള്ള സൗകര്യവും ലഭിക്കും.",
  },
  {
    title: "Payment History എവിടെ കാണാം?",
    answer:
      "Payment Successful പേജിലെ Payment History ബട്ടൺ ഉപയോഗിച്ച് നിങ്ങളുടെ മുൻകാല പേയ്മെന്റ് വിവരങ്ങൾ പരിശോധിക്കാം.",
  },
  {
    title: "എങ്ങനെ പരാതി സമർപ്പിക്കാം?",
    answer:
      "Complaint വിഭാഗത്തിലേക്ക് പോയി ആവശ്യമായ വിവരങ്ങൾ പൂരിപ്പിച്ച് പരാതി സമർപ്പിക്കാം. വെള്ളവിതരണം, ബിൽ, മീറ്റർ തുടങ്ങിയ വിഷയങ്ങളുമായി ബന്ധപ്പെട്ട പരാതികൾ നൽകാം.",
  },
  {
    title: "ബിൽ അടയ്ക്കാൻ കഴിയുന്നില്ലെങ്കിൽ എന്ത് ചെയ്യണം?",
    answer:
      "പേയ്മെന്റ് സംബന്ധമായ പ്രശ്നം തുടരുകയാണെങ്കിൽ നിങ്ങളുടെ Consumer Number സഹിതം അധികൃതരുമായി ബന്ധപ്പെടുകയോ Complaint വിഭാഗത്തിലൂടെ പരാതി സമർപ്പിക്കുകയോ ചെയ്യുക.",
  },
];

function Help() {
  return (
    <main className="pt-16 md:pt-20 bg-gray-50 min-h-screen">
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-r from-blue-900 via-blue-700 to-cyan-600 py-16 md:py-24">
        <div className="absolute -top-20 -right-20 w-64 h-64 rounded-full bg-white/10" />
        <div className="absolute -bottom-32 -left-20 w-72 h-72 rounded-full bg-white/10" />

        <div className="relative max-w-6xl mx-auto px-5 text-center text-white">
          <div className="w-16 h-16 mx-auto rounded-full bg-white/15 flex items-center justify-center mb-5">
            <FaHeadset className="text-3xl" />
          </div>
          <p className="text-blue-100 font-semibold mb-2">Jalanidhi Water Authority</p>
          <h1 className="text-3xl md:text-5xl font-bold">സഹായം</h1>
          <p className="max-w-2xl mx-auto mt-4 text-blue-100 text-sm md:text-lg leading-7">
            ബിൽ, പേയ്മെന്റ്, പരാതി തുടങ്ങിയ സേവനങ്ങളെക്കുറിച്ചുള്ള സാധാരണ ചോദ്യങ്ങൾക്കും ഉത്തരങ്ങൾക്കും ഇവിടെ നോക്കാം.
          </p>
        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-4xl mx-auto px-5 py-12 md:py-16">
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-2 text-blue-700 font-semibold">
            <FaQuestionCircle /> Frequently Asked Questions
          </div>
          <h2 className="text-2xl md:text-3xl font-bold text-blue-900 mt-2">
            പതിവായി ചോദിക്കുന്ന ചോദ്യങ്ങൾ
          </h2>
          <p className="text-gray-500 mt-3">
            നിങ്ങളുടെ സംശയങ്ങൾക്ക് ആവശ്യമായ വിവരങ്ങൾ താഴെ കണ്ടെത്താം.
          </p>
        </div>

        <div>
          {faqs.map((faq, index) => (
            <Accordion key={index} title={faq.title}>
              {faq.answer}
            </Accordion>
          ))}
        </div>
      </section>

      {/* Contact Help */}
      <section className="max-w-5xl mx-auto px-5 pb-14 md:pb-20">
        <div className="bg-white rounded-2xl shadow-lg border border-blue-100 p-6 md:p-10">
          <div className="text-center mb-8">
            <h2 className="text-2xl md:text-3xl font-bold text-blue-900">
              കൂടുതൽ സഹായം ആവശ്യമുണ്ടോ?
            </h2>
            <p className="text-gray-500 mt-2">
              നിങ്ങളുടെ പ്രശ്നം പരിഹരിക്കാൻ ഞങ്ങളുമായി ബന്ധപ്പെടുക.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-5">
            <div className="rounded-xl bg-blue-50 p-6 text-center">
              <FaPhoneAlt className="mx-auto text-2xl text-blue-700" />
              <h3 className="font-bold text-gray-800 mt-3">ഫോൺ</h3>
              <p className="text-gray-600 mt-1">0471 000 0000</p>
            </div>

            <div className="rounded-xl bg-blue-50 p-6 text-center">
              <FaEnvelope className="mx-auto text-2xl text-blue-700" />
              <h3 className="font-bold text-gray-800 mt-3">ഇമെയിൽ</h3>
              <p className="text-gray-600 mt-1 break-all">support@jalanidhi.example</p>
            </div>

            <div className="rounded-xl bg-blue-50 p-6 text-center">
              <FaQuestionCircle className="mx-auto text-2xl text-blue-700" />
              <h3 className="font-bold text-gray-800 mt-3">പരാതി</h3>
              <p className="text-gray-600 mt-1">Complaint വിഭാഗം ഉപയോഗിക്കുക</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Help;
