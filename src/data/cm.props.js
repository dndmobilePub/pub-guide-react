export const Button = [
  {
    name: "bgType",
    description: "버튼 배경색",
    options: [1, 2, 3],
  },
  {
    name: "size",
    description: "버튼 사이즈",
    options: ["xs", "sm", "md", "lg", "xl"],
  },
  {
    name: "isRound",
    description: "버튼 라운딩 처리 여부",
    options: [false, true],
  },
  {
    name: "isShadow",
    description: "버튼 그림자 표시 여부",
    options: [false, true],
  },
  {
    name: "isLine",
    description: "버튼 라인 표시 여부",
    options: [false, true],
  },
  {
    name: "isDisabled",
    description: "버튼 disabled 표시",
    options: [false, true],
  },
  {
    name: "children",
    description: "버튼 라벨",
    options: ["ButtonText"],
  },
];

export const ButtonWrap = [
  {
    name: "isFull",
    description: "래퍼 full 여부",
    options: [false, true],
  },
  {
    name: "isGrow",
    description: "래퍼 grow 여부",
    options: [false, true],
  },
  {
    name: "children",
    description: "JSX 엘리먼트",
    options: [""],
  },
];

export const Text = [
  {
    name: "lang",
    description: "lang 속성 지정",
    options: ["","ko","en"],
  },
  {
    name: "ell",
    description: "말줄임 처리 1~3줄 (...)",
    options: [0,1,2,3],
  },
  {
    name: "children",
    description: "텍스트",
    options: [""],
  },
];


export const Title = [
  {
    name: "depth",
    description: "h1 ~ h5",
    options: [1,2,3,4,5],
  },
  {
    name: "text",
    description: "헤딩 텍스트",
    options: ["text option"],
  },
  {
    name: "sub",
    description: "서브 타이틀 텍스트",
    options: ["sub title text"],
  },
  {
    name: "split",
    description: "타이틀 커스텀 여부",
    options: [false, true],
  },
  {
    name: "isLine",
    description: "타이틀 밑줄 표시 여부",
    options: [false, true],
  },
  {
    name: "headcopy",
    description: "헤드 카피가 있을 경우 입력 (선택)",
    options: ["헤드 카피 영역입니다."],
  },
  {
    name: "children",
    description: "서브 컨텐츠가 있을 경우 입력 (선택 / split가 활성화 되어있어야 함)",
    options: [<p>서브 컨텐츠입니다.</p>],
  },
];

