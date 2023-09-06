import { useEffect, useMemo, useState } from "react";
import { Input } from "assessment-input";
import { Button } from "assessment-button";
import { Icon } from "assessment-icon";
import "./stories/search.css";

interface Items {
  id: string;
  value: string;
}
interface SearchProps {
  width?: number;
  items: Items[];
  color?: string;
}

export const Search = ({ items, width, color }: SearchProps) => {
  const [text, setText] = useState("");
  const [showResult, setShowResult] = useState(false);
  const [result, setResult] = useState<Items[]>([]);
  const memoizedItems = useMemo(() => {
    return items;
  }, [items]);

  const findResult = (items: Items[], searchValue: string) => {
    const result = items.filter((item) =>
      item.value.toLowerCase().includes(searchValue.toLowerCase())
    );
    return setResult(result);
  };

  useEffect(() => {
    if (!text.length) {
      setShowResult(false);
      setResult([]);
    }
  }, [text]);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        width: `${width}px`,
        alignItems: "stretch",
        flexGrow: 1,
      }}
    >
      <div style={{ display: "flex", alignItems: "center", gap: "5px" }}>
        <Icon name="google" color={color} size={25} />
        <Input
          placeholder="search"
          oninput={(e) => {
            setText(e.target.value);
            findResult(memoizedItems, e.target.value);
            setShowResult(true);
          }}
          value={text}
        />
        <Button
          label="Clear"
          onClick={() => {
            setShowResult(false);
            setResult([]);
            setText("");
          }}
        />
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          flexGrow: 1,
        }}
      >
        {showResult || !!text.length ? (
          result.length > 0 ? (
            <div>
              {result.map((item) => (
                <div
                  className="result-item"
                  style={color ? { border: `1px solid ${color}` } : undefined}
                >
                  <h3>{item.value}</h3>
                </div>
              ))}
            </div>
          ) : (
            <h2>No results</h2>
          )
        ) : null}
      </div>
    </div>
  );
};
