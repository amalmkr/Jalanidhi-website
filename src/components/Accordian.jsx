import { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

function Accordion({ title, children }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="border border-blue-200 rounded-xl mb-4 overflow-hidden shadow-sm">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex justify-between items-center px-6 py-4 bg-blue-50 hover:bg-blue-100 transition"
      >
        <h3 className="text-lg md:text-xl font-bold text-blue-700">
          {title}
        </h3>

        {open ? (
          <FaChevronUp className="text-blue-600" />
        ) : (
          <FaChevronDown className="text-blue-600" />
        )}
      </button>

      {open && (
        <div className="px-6 py-5 bg-white text-gray-700 leading-8 text-justify">
          {children}
        </div>
      )}
    </div>
  );
}

export default Accordion;