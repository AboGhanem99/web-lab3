import { useState } from 'react';

const Accordion = () => {
  const [openSection, setOpenSection] = useState<number | null>(null);

  const sections = [
    { title: "Section 1", content: "Content of section 1: Lorem ipsum dolor sit amet, consectetur adipiscing elit." },
    { title: "Section 2", content: "Content of section 2: Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." },
    { title: "Section 3", content: "Content of section 3: Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat." }
  ];

  const toggleAccordion = (index: number) => {
    setOpenSection(openSection === index ? null : index);
  };

  return (
    <div className=" border border-gray-300 container mx-auto my-8">
      <h2 className="text-xl font-bold text-center mb-4">Date Selection</h2>
      {sections.map((section, index) => (
        <div key={index} className="border border-gray-300 rounded-md shadow-md my-4">
          <div className="flex items-center justify-between px-4 py-2 bg-gray-100 cursor-pointer" onClick={() => toggleAccordion(index)}>
            <h2 className="text-lg font-bold">{section.title}</h2>
            <svg className={`w-6 h-6 ${openSection === index ? 'transform rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
            </svg>
          </div>
          {openSection === index && (
            <div className="px-4 py-2">
              <p>{section.content}</p>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default Accordion;
