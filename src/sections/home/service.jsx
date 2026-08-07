import {
  FaMoneyBillWave,
  FaFileInvoiceDollar,
  FaTint,
  FaSearchLocation,
  FaClock,
  FaHeadset,
  FaChevronRight,
} from "react-icons/fa";
import { GrAnnounce } from "react-icons/gr";

function Services() {
  const services = [
    {
      icon: <FaMoneyBillWave />,
      title: "ജല ബിൽ അടയ്ക്കുക",
      description: "ഓൺലൈനായി സുരക്ഷിതമായി ജല ബിൽ അടയ്ക്കാം.",
    },
    {
      icon: <GrAnnounce/>,
      title: "അറിയിപ്പുകൾ ",
      description: "ജലനിധിയുമായി ബന്ധപ്പെട്ട ഏറ്റവും പുതിയ അറിയിപ്പുകൾ.",
    },
    {
      icon: <FaTint />,
      title: "പുതിയ കണക്ഷന് അപേക്ഷിക്കുക",
      description: "പുതിയ ജല കണക്ഷനായി ഓൺലൈനായി അപേക്ഷിക്കാം.",
    },
    {
      icon: <FaSearchLocation />,
      title: "കണക്ഷൻ നില പരിശോധിക്കുക",
      description: "നിങ്ങളുടെ അപേക്ഷയുടെ നിലവിലെ സ്ഥിതി അറിയാം.",
    },
    {
      icon: <FaClock />,
      title: "ജല വിതരണം സമയം",
      description: "നിങ്ങളുടെ പ്രദേശത്തെ ജല വിതരണ സമയം അറിയാം.",
    },
    {
      icon: <FaHeadset />,
      title: "പരാതി രജിസ്റ്റർ ചെയ്യുക",
      description: "ജലവിതരണവുമായി ബന്ധപ്പെട്ട പരാതികൾ ഓൺലൈനായി രജിസ്റ്റർ ചെയ്യാം.",
    },
  ];

  return (
    <section className="bg-gradient-to-b from-blue-50 to-white py-20 mt-5" id="services">
      <div className="max-w-7xl mx-auto px-5">

        {/* Heading */}

        <p className="text-center uppercase tracking-[4px] text-blue-600 font-bold">
          ഞങ്ങളുടെ സേവനങ്ങൾ
        </p>

        <h2 className="text-center text-4xl md:text-5xl font-black text-blue-900 mt-3">
          സേവനങ്ങൾ
        </h2>

        <p className="text-center text-gray-500 max-w-2xl mx-auto mt-5">
          ജലനിധിയുടെ പ്രധാന ഓൺലൈൻ സേവനങ്ങൾ വേഗത്തിലും എളുപ്പത്തിലും ലഭ്യമാക്കുക.
        </p>

        {/* Cards */}

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-16">

          {services.map((service, index) => (

            <div
              key={index}
              className="
              bg-white
              rounded-3xl
              shadow-md
              hover:shadow-2xl
              hover:-translate-y-5
              transition-all
              duration-300
              p-7
              flex
              justify-between
              items-center
              cursor-pointer
              "
            >

              {/* Left */}

              <div className="flex items-center gap-5">

                {/* Icon */}

                <div
                  className="
                  w-20
                  h-20
                  rounded-full
                  bg-blue-50
                  flex
                  items-center
                  justify-center
                  text-4xl
                  text-blue-600
                  "
                >
                  {service.icon}
                </div>

                {/* Text */}

                <div>

                  <h3 className="text-xl font-bold text-blue-900">
                    {service.title}
                  </h3>

                  <p className="text-gray-500 mt-2 text-sm">
                    {service.description}
                  </p>

                </div>

              </div>

              {/* Arrow */}

              <FaChevronRight className="text-3xl text-blue-600" />

            

            </div>

          ))}

        </div>

      </div>
    </section>
  );
}

export default Services;