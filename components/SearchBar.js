import { useState } from 'react';
import { useThemeContext } from '../context/ThemeContext';

export default function SearchBar({ query, setQuery }) {
  const { theme } = useThemeContext();
  const [input, setInput] = useState('');

  const clearInput = () => {
    setInput('');
    setQuery('');
  };

  const handleInputChange = ({ target }) => {
    setInput(target.value);
    setQuery(target.value.trim());
  };

  return (
    <>
      <div>
        {/* search icon is label for the input */}
        <label htmlFor="query-input">
          <svg
            width="34"
            height="34"
            viewBox="0 0 15 15"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            aria-label="Search"
          >
            <path
              d="M10 6.5C10 8.433 8.433 10 6.5 10C4.567 10 3 8.433 3 6.5C3 4.567 4.567 3 6.5 3C8.433 3 10 4.567 10 6.5ZM9.30884 10.0159C8.53901 10.6318 7.56251 11 6.5 11C4.01472 11 2 8.98528 2 6.5C2 4.01472 4.01472 2 6.5 2C8.98528 2 11 4.01472 11 6.5C11 7.56251 10.6318 8.53901 10.0159 9.30884L12.8536 12.1464C13.0488 12.3417 13.0488 12.6583 12.8536 12.8536C12.6583 13.0488 12.3417 13.0488 12.1464 12.8536L9.30884 10.0159Z"
              fill="currentColor"
              fillRule="evenodd"
              clipRule="evenodd"
            ></path>
          </svg>
        </label>
        {/* query input */}
        <input
          type="text"
          id="query-input"
          value={input}
          onChange={handleInputChange}
        />
        {/* clear input button */}
        <button onClick={clearInput}>
          <svg
            width="28"
            height="28"
            viewBox="0 0 15 15"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            aria-label="Clear input"
          >
            <path
              d="M12.8536 2.85355C13.0488 2.65829 13.0488 2.34171 12.8536 2.14645C12.6583 1.95118 12.3417 1.95118 12.1464 2.14645L7.5 6.79289L2.85355 2.14645C2.65829 1.95118 2.34171 1.95118 2.14645 2.14645C1.95118 2.34171 1.95118 2.65829 2.14645 2.85355L6.79289 7.5L2.14645 12.1464C1.95118 12.3417 1.95118 12.6583 2.14645 12.8536C2.34171 13.0488 2.65829 13.0488 2.85355 12.8536L7.5 8.20711L12.1464 12.8536C12.3417 13.0488 12.6583 13.0488 12.8536 12.8536C13.0488 12.6583 13.0488 12.3417 12.8536 12.1464L8.20711 7.5L12.8536 2.85355Z"
              fill="currentColor"
              fillRule="evenodd"
              clipRule="evenodd"
            ></path>
          </svg>
        </button>
        <style jsx>{`
          div {
            display: flex;
            align-items: center;
            border-radius: 5px;
            padding: 0.1rem 0.5rem;
          }
          button,
          label {
            display: grid;
            border: none;
            background-color: transparent;
            width: fit-content;
          }
          input {
            font-family: 'Inter', sans-serif;
            font-size: 1.5rem;
            padding: 0.625rem;
            font-weight: 600;
            width: 100%;
            border: none;
            background-color: transparent;
          }
          input:focus {
            outline: none;
          }
        `}</style>
        <style jsx>{`
          div {
            background-color: ${theme.color[2]};
            border: 3px solid ${theme.gray[5]};
          }
          button,
          label {
            color: ${theme.gray[8]};
          }
          input {
            color: ${theme.color[10]};
          }
          input::selection {
            background-color: ${theme.color[9]};
          }
          div:focus-within button,
          div:focus-within label,
          button:focus {
            color: ${theme.gray[10]};
          }
          div:focus-within {
            border-color: ${theme.gray[10]};
            background-color: ${theme.color[4]};
          }
          input:focus {
            color: ${theme.color[11]};
          }
        `}</style>
      </div>
    </>
  );
}
