function Card() {
  const cards = [
    {
      title: "ഗ്രാമ പഞ്ചായത്ത് കവറേജ്",
      value: "227",
    },
    {
      title: "Piped Water Supply Schemes",
      value: "5884",
    },
    {
      title: "Piped Water Supply HHs",
      value: "4.52L",
    },
    {
      title: "PWSS Population Benefited",
      value: "22.26L",
    },
    {
      title: "Sanitation Structure",
      value: "2.28L",
    },
    {
      title: "RWH Covered GPs",
      value: "93",
    },
    {
      title: "RWH Connections",
      value: "21,183",
    },
    {
      title: "RWH Population Benefited",
      value: "14",
    },
  ];

  return (
    <section className="py-10">
      <div className="max-w-7xl mx-auto px-4">
        <h1 className="text-blue-800 text-center text-2xl md:text-4xl font-extrabold mb-10">
          കേരള ഗ്രാമീണ ശുദ്ധജല വിതരണ ശുചിത്വ ഏജൻസി - കവറേജ്
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {cards.map((card, index) => (
            <div
              key={index}
              className="bg-blue-500 rounded-2xl p-6 min-h-[220px] flex flex-col justify-between shadow-lg"
            >
              <p className="text-white text-center font-bold text-lg md:text-xl break-words">
                {card.title}
              </p>

              <h2 className="text-white text-center font-black text-4xl md:text-5xl">
                {card.value}
              </h2>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Card;