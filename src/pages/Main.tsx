import { useState } from "react";
import "./Main.css";
import "./index.css";
import { RandLang } from "./RandLang";

const 식당들 = [
  "CU",
  "KFC",
  "한우해장",
  "가스파스 (지하)",
  "강남교자 (지하)",
  "고마워케이크 (커피)",
  "고씨네 (커피)",
  "김밥공감 (지하)",
  "누리한방삼계탕",
  "능이랑",
  "뚜레쥬르 (커피)",
  "라멘에반하다 (지하)",
  "로그커피 (커피)",
  "맥도날드",
  "맷돌로만",
  "멘무샤",
  "명품들깨칼국수",
  "버거리",
  "벳남미식",
  "본건강한상 (지하)",
  "봉추찜닭",
  "부대찌개대사관",
  "북촌손만두",
  "샐러디",
  "서울미나리",
  "서호돈가스",
  "소공동식당 (지하)",
  "스무디앤핫도그",
  "슬로우캘리",
  "아비꼬",
  "오한수 우육면가",
  "온심정해장국",
  "용문객잔짬뽕",
  "우리더이룸푸드",
  "윤가네칽국수",
  "장터",
  "제주해장고향랭면",
  "진순대국",
  "천하제육",
  "취쓰부",
  "콩시루",
  "큰맘할매",
  "투마마김치찌개",
  "파리바게트",
  "퍼사이공",
  "포36거리(pho36)",
  "하이탕 마라탕",
  "한솥도시락 (지하)",
  "한옥집김치찜",
  "한촌설렁탕",
  "호봉골 두기점",
];

export const Main = () => {
  const [spinning, setSpinning] = useState(false);

  const [result, setResult] = useState<number>(0);

  const handleSpin = () => {
    setSpinning(true);
    setResult(Math.floor(Math.random() * 식당들.length));
    console.log(식당들[result]);
    setTimeout(() => {
      clearInterval(1);
      setSpinning(false);
    }, 1000 + Math.random() * 10);
  };

  // 가장 긴 식당 이름의 길이 찾기
  const maxLength = Math.max(...식당들.map((name) => name.length));

  // 각 글자 위치별로 배열 만들기
  const lists = [];
  for (let i = 0; i < maxLength; i++) {
    lists[i] = 식당들.map((name) => name[i] || " "); // 해당 위치에 글자가 없으면 공백
  }

  return (
    <>
      <div className="slot-machine">
        <div className="character-container">
          {lists.map((list, index) => (
            <RandLang
              key={index}
              list={list}
              spinning={spinning}
              result={result}
            />
          ))}
        </div>
        <button onClick={handleSpin} disabled={spinning}>
          {spinning ? "돌아가는 중..." : "슬롯 돌리기"}
        </button>
      </div>
    </>
  );
};
