import { useEffect, useRef, useState } from "react";

export const RandLang = ({
  list,
  spinning,
}: {
  list: string[];
  spinning: boolean;
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
        intervalRef.current = null;
      }
    };
  }, [spinning]);

  //   const handleIndex = () => {
  //     if (spinning) {
  //       setTimeout(() => {
  //         clearInterval(1);
  //         setLangIndex(Math.floor(Math.random() * 51) + 64);
  //       }, 1000 + Math.random() * 1000);
  //     }
  //   };
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
