export const RewardCondition = [
  {
    id: 1,
    title: "정렬 순서",
    info: "혜택이 높은 순으로 나오도록 정렬 순서를 등록하세요."
  },
  {
    id: 2,
    title: "제한 수량",
    info:
      "생산 및 제공할 수 있는 리워드의 총 수량으로 해당 수량이 모두 펀딩되면 더 이상 펀딩 불가합니다."
  },
  {
    id: 3,
    title: "발송 시작일",
    info: "프로젝트 종료일 이후부터 3개월 이내로 설계 가능합니다."
  },
  {
    id: 4,
    title: "옵션 조건",
    info:
      "옵션(사이즈, 색상 등)이 필요한 경우, 옵션을 추가하세요. 옵션은 선택형과 직접 텍스트를 입력하는 직접 입력형으로 설계 가능합니다."
  }
];

export const AddRewardModalData = [
  { id: 1, name: "금액", placeholder: "금액 입력", stateName: "price" },
  {
    id: 2,
    name: "리워드명",
    placeholder: "타이틀 입력 ex)[얼리버드] 기본 리워드",
    stateName: "name"
  },
  {
    id: 3,
    name: "상세설명",
    placeholder: "제공하는 리워드가 무엇인지 간략하게 제시해 주세요.",
    stateName: "introduction"
  },
  {
    id: 4,
    name: "옵션조건",
    placeholder: "옵션값은 입력하세요.",
    stateName: "option"
  },
  {
    id: 5,
    name: "제한수량",
    placeholder: "수량 입력",
    stateName: "stock"
  },
  {
    id: 6,
    name: "발송시작일",
    placeholder: "연도/월/일",
    stateName: "scheduled_date"
  }
];
