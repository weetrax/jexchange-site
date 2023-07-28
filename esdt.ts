import { shuffle } from './tools';
import { Token } from './types';

const top12Esdt: Token[] = [
  {
    identifier: "UTK-2f80e9",
    name: "UTK",
    imgUrl:
      "https://raw.githubusercontent.com/multiversx/mx-assets/master/tokens/UTK-2f80e9/logo.svg",
  },
  {
    identifier: "WBTC-5349b3",
    name: "wBTC",
    imgUrl:
      "https://raw.githubusercontent.com/multiversx/mx-assets/master/tokens/WBTC-5349b3/logo.svg",
  },
  {
    identifier: "HTM-f51d55",
    name: "HATOM",
    imgUrl:
      "https://raw.githubusercontent.com/multiversx/mx-assets/master/tokens/HTM-f51d55/logo.svg",
  },
  {
    identifier: "JEX-9040ca",
    name: "JEX",
    imgUrl:
      "https://raw.githubusercontent.com/multiversx/mx-assets/master/tokens/JEX-9040ca/logo.svg",
  },
  {
    identifier: "WETH-b4ca29",
    name: "wETH",
    imgUrl:
      "https://raw.githubusercontent.com/multiversx/mx-assets/master/tokens/WETH-b4ca29/logo.svg",
  },
  {
    identifier: "USDC-c76f1f",
    name: "USDC",
    imgUrl:
      "https://raw.githubusercontent.com/multiversx/mx-assets/master/tokens/USDC-c76f1f/logo.svg",
  },
  {
    identifier: "ASH-a642d1",
    name: "ASH",
    imgUrl:
      "https://raw.githubusercontent.com/multiversx/mx-assets/master/tokens/ASH-a642d1/logo.svg",
  },
  {
    identifier: "PROTEO-0c7311",
    name: "PROTEO",
    imgUrl:
      "https://raw.githubusercontent.com/multiversx/mx-assets/master/tokens/PROTEO-0c7311/logo.svg",
  },
  {
    identifier: "QWT-46ac01",
    name: "QWT",
    imgUrl:
      "https://raw.githubusercontent.com/multiversx/mx-assets/master/tokens/QWT-46ac01/logo.svg",
  },
  {
    identifier: "RIDE-7d18e9",
    name: "RIDE",
    imgUrl:
      "https://raw.githubusercontent.com/multiversx/mx-assets/master/tokens/RIDE-7d18e9/logo.svg",
  },
  {
    identifier: "ZPAY-247875",
    name: "ZPAY",
    imgUrl:
      "https://raw.githubusercontent.com/multiversx/mx-assets/master/tokens/ZPAY-247875/logo.svg",
  },
  {
    identifier: "MEX-455c57",
    name: "MEX",
    imgUrl:
      "https://raw.githubusercontent.com/multiversx/mx-assets/master/tokens/MEX-455c57/logo.svg",
  },
]

const less8Esdt: Token[] = [
  {
    identifier: "CRT-52decf",
    name: "CRT",
    imgUrl:
      "https://raw.githubusercontent.com/multiversx/mx-assets/master/tokens/CRT-52decf/logo.svg",
  },
  {
    identifier: "BSK-baa025",
    name: "BSK",
    imgUrl:
      "https://raw.githubusercontent.com/multiversx/mx-assets/master/tokens/BSK-baa025/logo.svg",
  },
  {
    identifier: "WAM-510e42",
    name: "WAM",
    imgUrl:
      "https://raw.githubusercontent.com/multiversx/mx-assets/master/tokens/WAM-510e42/logo.svg",
  },
  {
    identifier: "ISET-84e55e",
    name: "ISET",
    imgUrl:
      "https://raw.githubusercontent.com/multiversx/mx-assets/master/tokens/ISET-84e55e/logo.svg",
  },
  {
    identifier: "KVRI-743439",
    name: "KVRI",
    imgUrl:
      "https://raw.githubusercontent.com/multiversx/mx-assets/master/tokens/KVRI-743439/logo.svg",
  },
  {
    identifier: "VITAL-ab7917",
    name: "VITAL",
    imgUrl:
      "https://raw.githubusercontent.com/multiversx/mx-assets/master/tokens/VITAL-ab7917/logo.svg",
  },
  {
    identifier: "CYBER-489c1c",
    name: "CYBER",
    imgUrl:
      "https://raw.githubusercontent.com/multiversx/mx-assets/master/tokens/CYBER-489c1c/logo.svg",
  },
  {
    identifier: "BHAT-c1fde3",
    name: "BHAT",
    imgUrl:
      "https://raw.githubusercontent.com/multiversx/mx-assets/master/tokens/BHAT-c1fde3/logo.svg",
  },
]

export const esdt: Token[] = shuffle([
...top12Esdt,
...less8Esdt
]);

export const sortedEsdt = (): Token[] => {
  const shuffledLessInteresting = shuffle(less8Esdt);
  const shuffledMoreInteresting = shuffle(top12Esdt);
  
  const tokens = [
    shuffledLessInteresting[0], // Position 0
    shuffledLessInteresting[1], // Position 1
    shuffledMoreInteresting[0], // Position 2 more
    shuffledMoreInteresting[1], // Position 3 more
    shuffledMoreInteresting[2], // Position 4 more
    shuffledLessInteresting[2], // Position 5
    shuffledLessInteresting[3], // Position 6
    shuffledMoreInteresting[3], // Position 7 more
    shuffledMoreInteresting[4], // Position 8 more
    shuffledMoreInteresting[5], // Position 9 more
    shuffledLessInteresting[4], // Position 10
    shuffledLessInteresting[5], // Position 11
    shuffledMoreInteresting[6], // Position 12 more
    shuffledMoreInteresting[7], // Position 13 more
    shuffledMoreInteresting[8], // Position 14 more
    shuffledLessInteresting[6], // Position 15
    shuffledLessInteresting[7], // Position 16
    shuffledMoreInteresting[9], // Position 17 more
    shuffledMoreInteresting[10], // Position 18 more
    shuffledMoreInteresting[11], // Position 19 more
  ];

  return tokens;
}