import save from "../assets/images/save-water.webp";

function About() {
  return (
    <>
      <h2 className="text-center text-blue-800 text-xl md:text-3xl font-black mt-10 px-4" id="about">
        ജലനിധി - ജലശ്രീ വാട്ടർസപ്ലൈ സോഷ്യൽ ഡവലപ്പ്മെന്റ് സൊസൈറ്റി
      </h2>

      <h4 className="text-center text-lg md:text-xl font-medium text-blue-700 mt-5">
        ഞങ്ങളെക്കുറിച്ച്
      </h4>

      <div className="flex flex-col-reverse md:flex-row items-center gap-8 mt-10 max-w-7xl mx-auto px-5 md:px-10">

        {/* Left Side */}
        <div className="md:w-1/2 flex flex-col">
          <p className="text-justify leading-8">
            ഗ്രാമീണ ജനതയുടെ ജല, ശുചിത്വ ആവശ്യങ്ങൾ നിറവേറ്റുന്നു. 5884
            സ്കീമുകളും 4.52 ലക്ഷം ഹൗസ് കണക്ഷനുകളും ഉള്ള ജലനിധി
            കേരളത്തിലുടനീളമുള്ള 227 ജിപികളിലായി 22.26 ലക്ഷം ജനങ്ങൾക്ക്
            ഉപകാരപ്പെടുന്നു. കേരളത്തിലെ ഗ്രാമീണ മേഖലയില്‍ കുടിവെള്ള
            വിതരണവും ശുചിത്വ സൗകര്യങ്ങളും നല്‍കുന്ന ഒരു പ്രധാനപ്പെട്ട
            ഏജന്‍സിയാണ് കെ.ആര്‍.ഡബ്യു.എസ്സ്.എ.
          </p>

          <button className="mt-6 bg-blue-800 text-white text-sm font-bold px-6 py-3 rounded-full w-fit hover:bg-blue-500">
            കൂടുതൽ അറിയുക
          </button>
        </div>

        {/* Right Side */}
        <img
          src={save}
          alt="Save Water"
          className="w-full md:w-1/2 max-w-md h-auto rounded-2xl"
        />
      </div>
    </>
  );
}

export default About;