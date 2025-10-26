import { useState, useEffect } from "react";
import Button from "./Button";

interface Props {
  onClick: () => void;
  buttonText: string;
  heading: string;
  storageKey: string;
}

function Counter({ onClick, buttonText, heading, storageKey }: Props) {
  const [count, setCount] = useState<number>(() => {
    const saved = localStorage.getItem(storageKey + "-count");
    return saved ? JSON.parse(saved) : 0;
  });
  const [items, setItems] = useState<string[]>(() => {
    const saved = localStorage.getItem(storageKey + "-items");
    return saved ? JSON.parse(saved) : [];
  });
  const [inputValue, setInputValue] = useState("");

  useEffect(() => {
    localStorage.setItem(storageKey + "-items", JSON.stringify(items));
    localStorage.setItem(storageKey + "-count", JSON.stringify(count));
  }, [items, count]);

  const handleIncrement = () => {
    if (inputValue.trim() === "") return false;
    setItems([...items, inputValue]);
    setInputValue("");
    return true;
  };

  const handleRemove = (index: number) => {
    setItems(items.filter((_, i) => i !== index));
    setCount(count - 1);
  };

  return (
    <div className="counter-container">
      <h1>
        {heading} {count}
      </h1>
      <div className="input-group flex-nowrap">
        <span className="input-group-text" id="addon-wrapping">
          To do:
        </span>
        <input
          type="text"
          className="form-control"
          placeholder="Explain..."
          aria-label="Explain"
          value={inputValue}
          aria-describedby="addon-wrapping"
          onChange={(e) => setInputValue(e.target.value)}
        />
      </div>
      <Button
        color="primary"
        outline={true}
        onClick={() => {
          handleIncrement() && setCount(count + 1);
          onClick();
        }}
      >
        {buttonText}
      </Button>
      {count === 0 && <p>No Items added</p>}
      <ul className="list-group">
        {items.map((item, index) => (
          <li key={index} className="list-group-item">
            {item}{" "}
            <Button color="danger" onClick={() => handleRemove(index)}>
              Remove
            </Button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Counter;
