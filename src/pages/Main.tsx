import { useRef } from "react";
import styled, { keyframes } from "styled-components";

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
  const 식당들ref = useRef<HTMLDivElement>(null);
  //useEffect(() => {
  //  setTimeout(() => {
  //    if (!식당들ref.current) {
  //      return;
  //    }
  //
  //    식당들ref.current.style.animationPlayState = 'paused'
  //  }, 2000);
  //}, []);

  return (
    <div style={{ height: '16px', overflow: 'hidden' }}>
      <Styled식당들 ref={식당들ref} style={{ display: 'flex', flexDirection: 'column' }}>
        {식당들.map((식당) => <span key={식당}>{식당}</span>)}
      </Styled식당들>
    </div>
  )
};

const slotMachine = keyframes`
  0% {
    transform: none;
  }
  100% {
    transform: translateY(-100%);
  }
`

const Styled식당들 = styled.div`
  animation: ${slotMachine} 2s linear infinite both;
`;


/**
 * 애니메이션 디테일
 *
 * 멈출때가 되었을때 감속.
 * 목표했던 식당에서 정확히 멈추기.
 *  intersectionObserver를 이용하여, 목표 식당보다 x번째 앞에 있는 식당을 관측했을 경우, 그때 ref의 style 속성을 업데이트하여 감속.
 *  framer-motion 이용하여 멈출때 spring 애니메이션 하여 튕겨오르기 구현.
 *
 * 버튼 눌러서 돌아가기 시작할때, 천천히 가속하기.
 * */
