import getPluralSuffix from "./vowels";
import "./App.css";
import { useState } from "react";

function App() {
  const placeholder = "your word";
  const [word, setWord] = useState("");
  const [result, setResult] = useState(placeholder);

  const handleChange = (e: React.FormEvent<HTMLInputElement>) => {
    const currentWord = e.currentTarget.value;
    setWord(currentWord);
    currentWord == ""
      ? setResult(placeholder)
      : setResult(currentWord + getPluralSuffix(currentWord));
  };

  return (
    <>
      <div>
        <h1>{result}</h1>
        <input
          type="text"
          value={word}
          placeholder={placeholder}
          onChange={handleChange}
          style={{ fontSize: "large", padding: "1rem" }}
        />
      </div>
    </>
  );
}

export default App;
