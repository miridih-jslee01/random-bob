import { useEffect, useRef, useState } from "react";

export const RandLang = ({
  list,
  spinning,
  result,
}: {
  list: string[];
  spinning: boolean;
  result: number;
}) => {
  const [LangIndex, setLangIndex] = useState(0);

  const intervalRef = useRef<number | null>(null);
  useEffect(() => {
    if (spinning) {
      intervalRef.current = setInterval(() => {
        setLangIndex((prev) => (prev + 1) % 12);
      }, 50);
    } else {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
        intervalRef.current = null;
      }
    }
    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
        setLangIndex(result);
        intervalRef.current = null;
      }
    };
  }, [spinning]);

  return (
    <div
      className={`character ${spinning ? "spin" : ""}`}
      style={{
        fontSize: "48px",
        margin: "20px",
        fontVariantNumeric: "tabular-nums",
      }}
    >
      {list[LangIndex]}
    </div>
  );
};
