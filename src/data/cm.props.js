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
