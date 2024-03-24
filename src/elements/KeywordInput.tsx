import React, { useState } from 'react';

interface KeywordInputProps {}

const KeywordInput: React.FC<KeywordInputProps> = () => {
  const [value, setValue] = useState<string>('');
  const [suggestions, setSuggestions] = useState<string[]>([]);
  const keywords: string[] = [
    'React',
    'JavaScript',
    'CSS',
    'HTML',
    'Web Development',
    'Frontend',
    'Backend',
    'Node.js',
    'Express',
    'MongoDB',
    'SQL',
    'GraphQL',
    'REST API',
    'TypeScript',
    'Bootstrap',
    'Tailwind CSS',
    'Material-UI',
    'Redux',
    'Next.js',
    'Gatsby'
  ];

  const getSuggestions = (inputValue: string): string[] => {
    const inputValueLowerCase = inputValue.trim().toLowerCase();
    return inputValueLowerCase ? keywords.filter(keyword =>
      keyword.toLowerCase().includes(inputValueLowerCase)
    ) : [];
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
    setSuggestions(getSuggestions(event.target.value));
  };

  const handleSuggestionClick = (suggestion: string) => {
    setValue(suggestion);
    setSuggestions([]);
  };

  return (
    <div className="border border-gray-300 rounded-md p-4 shadow-md relative max-w-sm mx-auto my-8">
      <h2 className="text-xl font-bold text-center mb-4">KeywordInput</h2>
      <div className="flex items-center justify-center">
        <input
          type="text"
          placeholder="Enter keywords"
          value={value}
          onChange={handleChange}
          className="border border-gray-400 rounded-md p-2 w-full"
        />
      </div>
      {suggestions.length > 0 && (
        <ul className="absolute bg-white border border-gray-300 rounded-md mt-1 w-full">
          {suggestions.map((suggestion, index) => (
            <li
              key={index}
              onClick={() => handleSuggestionClick(suggestion)}
              className="px-4 py-2 cursor-pointer hover:bg-gray-100"
            >
              {suggestion}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default KeywordInput;
