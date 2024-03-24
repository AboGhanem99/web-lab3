import React, { useState } from 'react';
import Autosuggest, { SuggestionSelectedEventData } from 'react-autosuggest';

interface KeywordInputProps {}

const KeywordInput: React.FC<KeywordInputProps> = () => {
  const [value, setValue] = useState<string>('');
  const [suggestions, setSuggestions] = useState<string[]>([]);

  // Mock data for suggestions (replace this with your actual data)
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

  // Function to get suggestions based on user input
  const getSuggestions = (inputValue: string): string[] => {
    const inputValueLowerCase: string = inputValue.trim().toLowerCase();
    const inputLength: number = inputValueLowerCase.length;
  
    return inputLength === 0 ? [] : keywords.filter(keyword =>
      keyword.toLowerCase().slice(0, inputLength) === inputValueLowerCase
    );
  };

  // Function to render suggestion
  const renderSuggestion = (suggestion: string): JSX.Element => (
    <div>
      {suggestion}
    </div>
  );

  // Function to handle input change
  const onChange = (event: React.FormEvent<HTMLElement>, { newValue }: Autosuggest.ChangeEvent): void => {
    if (event.target instanceof HTMLInputElement) {
      setValue(newValue);
    }
  };

  // Function to handle suggestion selection
  const onSuggestionSelected = (event: React.FormEvent<HTMLInputElement>, { suggestion }: SuggestionSelectedEventData<string>): void => {
    setValue('');
    // You can add the selected keyword to a list or perform any other actions
    console.log('Selected keyword:', suggestion);
  };

  // Autosuggest input properties
  const inputProps: Autosuggest.InputProps<string> = {
    placeholder: 'Enter keywords',
    value,
    onChange: onChange
  };

  return (
    <div className="border border-gray-300 rounded-md p-4 shadow-md relative max-w-sm mx-auto my-8">
      <h2 className="text-xl font-bold text-center mb-4">KeywordInput</h2>
      <div className="flex items-center justify-center">
        <Autosuggest
          suggestions={suggestions}
          onSuggestionsFetchRequested={({ value }) => setSuggestions(getSuggestions(value))}
          onSuggestionsClearRequested={() => setSuggestions([])}
          getSuggestionValue={(suggestion) => suggestion}
          renderSuggestion={renderSuggestion}
          inputProps={inputProps}
          onSuggestionSelected={onSuggestionSelected}
        />
      </div>
    </div>
  );
};

export default KeywordInput;
