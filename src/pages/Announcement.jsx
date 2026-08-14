import { FaBullhorn, FaCalendarAlt, FaArrowRight } from "react-icons/fa";

const announcements = [
  {
    date: "14 August 2026",
    category: "പ്രധാന അറിയിപ്പ്",
    title: "വാട്ടർ ബിൽ കൃത്യസമയത്ത് അടയ്ക്കുക",
    description:
      "ഉപഭോക്താക്കൾ തങ്ങളുടെ മാസ ബിൽ നിശ്ചിത സമയത്തിനകം അടച്ച് പിഴയും സേവന തടസ്സവും ഒഴിവാക്കണമെന്ന് അറിയിക്കുന്നു.",
  },
  {
    date: "10 August 2026",
    category: "സേവന അറിയിപ്പ്",
    title: "ഓൺലൈൻ ബിൽ പേയ്മെന്റ് സൗകര്യം",
    description:
      "വെബ്സൈറ്റ് വഴി ഉപഭോക്താക്കൾക്ക് ബിൽ പരിശോധിക്കുകയും ലഭ്യമായ പേയ്മെന്റ് മാർഗങ്ങൾ ഉപയോഗിച്ച് ബിൽ അടയ്ക്കുകയും ചെയ്യാം.",
  },
  {
    date: "05 August 2026",
    category: "വെള്ള സംരക്ഷണം",
    title: "വെള്ളം പാഴാക്കാതെ ഉപയോഗിക്കുക",
    description:
      "വെള്ളത്തിന്റെ ലഭ്യത ഉറപ്പാക്കുന്നതിനായി ആവശ്യത്തിന് മാത്രം വെള്ളം ഉപയോഗിക്കുകയും ചോർച്ചകൾ ശ്രദ്ധയിൽപ്പെട്ടാൽ അറിയിക്കുകയും ചെയ്യുക.",
  },
  {
    date: "01 August 2026",
    category: "പൊതു അറിയിപ്പ്",
    title: "പരാതികൾ ഓൺലൈനായി സമർപ്പിക്കാം",
    description:
      "വെള്ളവിതരണം, മീറ്റർ, ബിൽ തുടങ്ങിയ വിഷയങ്ങളുമായി ബന്ധപ്പെട്ട പരാതികൾ വെബ്സൈറ്റിലെ പരാതി വിഭാഗം വഴി സമർപ്പിക്കാം.",
  },
];

function Announcement() {
  return (
    <main className="pt-16 md:pt-20 bg-gray-50 min-h-screen">
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-r from-blue-900 via-blue-700 to-cyan-600 py-16 md:py-24">
        <div className="absolute -top-20 -right-20 w-64 h-64 rounded-full bg-white/10" />
        <div className="absolute -bottom-32 -left-20 w-72 h-72 rounded-full bg-white/10" />

        <div className="relative max-w-6xl mx-auto px-5 text-center text-white">
          <div className="w-16 h-16 mx-auto rounded-full bg-white/15 flex items-center justify-center mb-5">
            <FaBullhorn className="text-3xl" />
          </div>
          <p className="text-blue-100 font-semibold mb-2">Jalanidhi Water Authority</p>
          <h1 className="text-3xl md:text-5xl font-bold">അറിയിപ്പുകൾ</h1>
          <p className="max-w-2xl mx-auto mt-4 text-blue-100 text-sm md:text-lg leading-7">
            ഉപഭോക്താക്കൾക്കായി പ്രസിദ്ധീകരിക്കുന്ന ഏറ്റവും പുതിയ അറിയിപ്പുകളും പ്രധാന വിവരങ്ങളും ഇവിടെ ലഭിക്കും.
          </p>
        </div>
      </section>

      {/* Announcements */}
      <section className="max-w-5xl mx-auto px-5 py-12 md:py-16">
        <div className="text-center mb-10">
          <p className="text-blue-600 font-semibold">Latest Updates</p>
          <h2 className="text-2xl md:text-3xl font-bold text-blue-900 mt-2">
            ഏറ്റവും പുതിയ അറിയിപ്പുകൾ
          </h2>
        </div>

        <div className="space-y-5">
          {announcements.map((announcement, index) => (
            <article
              key={index}
              className="bg-white rounded-2xl border border-gray-200 shadow-sm hover:shadow-lg transition duration-300 p-5 md:p-7"
            >
              <div className="flex flex-col md:flex-row gap-5 md:items-start">
                <div className="shrink-0 w-14 h-14 rounded-xl bg-blue-50 text-blue-700 flex items-center justify-center">
                  <FaBullhorn className="text-xl" />
                </div>

                <div className="flex-1">
                  <div className="flex flex-wrap items-center gap-3 mb-2">
                    <span className="text-xs md:text-sm font-bold text-blue-700 bg-blue-50 px-3 py-1 rounded-full">
                      {announcement.category}
                    </span>
                    <span className="flex items-center gap-2 text-xs md:text-sm text-gray-500">
                      <FaCalendarAlt /> {announcement.date}
                    </span>
                  </div>

                  <h3 className="text-xl md:text-2xl font-bold text-gray-800">
                    {announcement.title}
                  </h3>
                  <p className="mt-3 text-gray-600 leading-7">
                    {announcement.description}
                  </p>

                  <button className="mt-4 inline-flex items-center gap-2 text-blue-700 font-semibold hover:text-blue-900 transition">
                    കൂടുതൽ വിവരങ്ങൾ <FaArrowRight className="text-sm" />
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}

export default Announcement;
