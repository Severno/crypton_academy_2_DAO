/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import {
  Signer,
  utils,
  Contract,
  ContractFactory,
  Overrides,
  BigNumberish,
} from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { ERC20, ERC20Interface } from "../ERC20";

const _abi = [
  {
    inputs: [
      {
        internalType: "string",
        name: "name_",
        type: "string",
      },
      {
        internalType: "string",
        name: "symbol_",
        type: "string",
      },
      {
        internalType: "uint8",
        name: "decimals_",
        type: "uint8",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "Approval",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "Transfer",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "tokenOwner",
        type: "address",
      },
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
    ],
    name: "allowance",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "approve",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "tokenOwner",
        type: "address",
      },
    ],
    name: "balanceOf",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "c__0x813b1500",
        type: "bytes32",
      },
    ],
    name: "c_0x813b1500",
    outputs: [],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [],
    name: "decimals",
    outputs: [
      {
        internalType: "uint8",
        name: "",
        type: "uint8",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "name",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "symbol",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "totalSupply",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "transfer",
    outputs: [
      {
        internalType: "bool",
        name: "success",
        type: "bool",
      },
    ],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "transferFrom",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x60806040523480156200001157600080fd5b5060405162001d2838038062001d28833981810160405281019062000037919062000487565b6200006b7f14a58b7097c826483ab879cf7a65076758642de74b04b3bac96405dd7d8092f260001b620001f960201b60201c565b6200009f7f2b431f05e19432016a993abe40b84006e4144140e3dda70a3c3e094f6074f8e360001b620001f960201b60201c565b620000d37ff1fdf05bc0c71150f7004251f7ca42d81aa8159cf9e49e2e303dfbf4a4d912ee60001b620001f960201b60201c565b8260009080519060200190620000eb929190620001fc565b50620001207fb0bd0af540fdbea435c7ccefd216162a28cf7582fa430a34bf5f84a225c91d7660001b620001f960201b60201c565b620001547f4c635dc49b13fbfdb9b6e440889039eb1511f3648cf04a5720f5b6a98a326b5e60001b620001f960201b60201c565b81600190805190602001906200016c929190620001fc565b50620001a17f451d18da4f9226eae86b89e128171bfb6b7c1fa5ffd2e17a4bcab5dc46745a3160001b620001f960201b60201c565b620001d57f97252f0b692b6d5022907a9fc1f04fdae8be18ef39b0842b706b1ee48968ed4860001b620001f960201b60201c565b80600360006101000a81548160ff021916908360ff16021790555050505062000586565b50565b8280546200020a9062000550565b90600052602060002090601f0160209004810192826200022e57600085556200027a565b82601f106200024957805160ff19168380011785556200027a565b828001600101855582156200027a579182015b82811115620002795782518255916020019190600101906200025c565b5b5090506200028991906200028d565b5090565b5b80821115620002a85760008160009055506001016200028e565b5090565b6000604051905090565b600080fd5b600080fd5b600080fd5b600080fd5b6000601f19601f8301169050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b6200031582620002ca565b810181811067ffffffffffffffff82111715620003375762000336620002db565b5b80604052505050565b60006200034c620002ac565b90506200035a82826200030a565b919050565b600067ffffffffffffffff8211156200037d576200037c620002db565b5b6200038882620002ca565b9050602081019050919050565b60005b83811015620003b557808201518184015260208101905062000398565b83811115620003c5576000848401525b50505050565b6000620003e2620003dc846200035f565b62000340565b905082815260208101848484011115620004015762000400620002c5565b5b6200040e84828562000395565b509392505050565b600082601f8301126200042e576200042d620002c0565b5b815162000440848260208601620003cb565b91505092915050565b600060ff82169050919050565b620004618162000449565b81146200046d57600080fd5b50565b600081519050620004818162000456565b92915050565b600080600060608486031215620004a357620004a2620002b6565b5b600084015167ffffffffffffffff811115620004c457620004c3620002bb565b5b620004d28682870162000416565b935050602084015167ffffffffffffffff811115620004f657620004f5620002bb565b5b620005048682870162000416565b9250506040620005178682870162000470565b9150509250925092565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b600060028204905060018216806200056957607f821691505b6020821081141562000580576200057f62000521565b5b50919050565b61179280620005966000396000f3fe6080604052600436106100915760003560e01c80635152611f116100595780635152611f1461019157806370a08231146101ba57806395d89b41146101f7578063a9059cbb14610222578063dd62ed3e1461025257610091565b806306fdde0314610096578063095ea7b3146100c157806318160ddd146100fe57806323b872dd14610129578063313ce56714610166575b600080fd5b3480156100a257600080fd5b506100ab61028f565b6040516100b8919061129d565b60405180910390f35b3480156100cd57600080fd5b506100e860048036038101906100e39190611358565b6103a5565b6040516100f591906113b3565b60405180910390f35b34801561010a57600080fd5b50610113610498565b60405161012091906113dd565b60405180910390f35b34801561013557600080fd5b50610150600480360381019061014b91906113f8565b610526565b60405161015d91906113b3565b60405180910390f35b34801561017257600080fd5b5061017b610820565b6040516101889190611467565b60405180910390f35b34801561019d57600080fd5b506101b860048036038101906101b391906114b8565b6108bb565b005b3480156101c657600080fd5b506101e160048036038101906101dc91906114e5565b6108be565b6040516101ee91906113dd565b60405180910390f35b34801561020357600080fd5b5061020c61098b565b604051610219919061129d565b60405180910390f35b61023c60048036038101906102379190611358565b610aa1565b60405161024991906113b3565b60405180910390f35b34801561025e57600080fd5b5061027960048036038101906102749190611512565b610b94565b60405161028691906113dd565b60405180910390f35b60606102bd7fb5db4517d1bed3ba71b2aa6daa4befb9def07955b2ac6b8a797ecb3ff815960c60001b6108bb565b6102e97f4bea4c916524d57a8130d9958a77b8c3cb451c782fbb7119181bf68f55d8a8d660001b6108bb565b6103157f3e7f8e9df4f1fa2cc29e9359534dd87e3d709a618aed155aa3afd27d9a409cd360001b6108bb565b6000805461032290611581565b80601f016020809104026020016040519081016040528092919081815260200182805461034e90611581565b801561039b5780601f106103705761010080835404028352916020019161039b565b820191906000526020600020905b81548152906001019060200180831161037e57829003601f168201915b5050505050905090565b60006103d37fe6b29752e51de7b2a406ba7f62bf098e9a236912af62e5bfcc11b2469ff37f5f60001b6108bb565b6103ff7f3609df4240e354c499fd45897d2207dc69eab27f3d03b653841ee06fab8c43e860001b6108bb565b61042b7fbe97872be4a32fc95d03b02220eedc4bd3c34b6b64b6f8ec29e68016e007268a60001b6108bb565b610436338484610c9f565b6104627faac96df8e681a471a4d0b3bc4a5823d715e3013f97347bf07b274dd0f7d14db060001b6108bb565b61048e7f141073057558ab300cfa30fc50b61f53cd9a7acf3bce57633c1c554cf38d865960001b6108bb565b6001905092915050565b60006104c67f0a2073ffc763d090978febe8fd739ca83bd1382e6c5e22e0cc40f15c07d0707c60001b6108bb565b6104f27f4c4d6c384b09eb713d2a97e440244b0d3dd4e96ff18bcc81350e5bcbde2b2ed360001b6108bb565b61051e7fa773e8dab18281df114727becdb1759d5c4d7c2ba2239355b0792c86314b893a60001b6108bb565b600254905090565b60006105547f3e38dd176a3053763b9d1c929baae361f740cfa7acc1059017fd533f74a7273c60001b6108bb565b6105807f4a06890b53b55df7c4c61db54306e04077562d49a399ff2aa1781a644fcfa89160001b6108bb565b6105ac7f7a5660ecb8e5ce1e07ac0eb0dfa886fa8a9577229c9dd40410b64ab0b820e87660001b6108bb565b6105b7848484610e66565b6105e37fa2e794936edac926970bdbecf48844bf059e9b329e197362cb3da07fe098a21c60001b6108bb565b61060f7f660160d3dee3ac6742affc0a3faae1bbe48a238819caa4ad6bf8d156b57abf7160001b6108bb565b6000600560008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205490506106bc7f2838f02e0ff7a974607b016f902f1f254c06cadfbd620783475ff0bc9482b49360001b6108bb565b6106e87f3bda800020ea6a831d7a976c4f9da4a428c77c918552fdc2636ad195f5d3c31b60001b6108bb565b6107147f6b91b3eb4b08d7e7ec0d9211fc175db4494b6b2f17496cb5ee38def5c2c5aeb560001b6108bb565b82811015610757576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161074e90611625565b60405180910390fd5b6107837fb6d1ec046a24e0088b15e3c06e8cfc4c97f0fabe218587da9688498f3256bb1560001b6108bb565b6107af7fe5e3ce4103c25cd64bee04d032207ad74f8378176b7c06b5f8a37cdf6c49f5be60001b6108bb565b6107bc8533858403610c9f565b6107e87ff9f0c3c169ed98e7c3c0fc770f3d98e5393d6812f834f3385e181e24bbd202ae60001b6108bb565b6108147f322ac1dd11fa7d5f9f53770139fca1b60b034dcc5cbafaf57e7e8ba490a6cdf160001b6108bb565b60019150509392505050565b600061084e7f142f6af080e127fc4169e39b55e325db68cb0a384035530991f4530a3d99193c60001b6108bb565b61087a7f9e1ab71de3439afad1ddfe629aca96f162dd2d42b1d22d5640f2852c176b721d60001b6108bb565b6108a67f213e206adc8f9badf75c26590dac83d9dbed8f5fa5cd7bc2e15753212bb86ab660001b6108bb565b600360009054906101000a900460ff16905090565b50565b60006108ec7fdb9d1d51d630046c1bb425519b11c073c9fafd62b1aad84ea7fa31d6a43267f060001b6108bb565b6109187f0d20ed312b24dd0e5b646ad264b663a2761d8d8f83c3cd141f15ff9661bb55a960001b6108bb565b6109447f212f342def18a8d511b0c6fa406461a2737e7ca5da8a65f9550f8bf445e5552060001b6108bb565b600460008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020549050919050565b60606109b97f84379eb961a7255d30fe0408c7b1ddcfbe6bb1828bd5536c9f9a59015c767de360001b6108bb565b6109e57fe768ae3c34648814bfad6ffd68bea43ac5e3c0f15ca0c317f91d28379a3d2a1460001b6108bb565b610a117f862ec40a1ebb0ba051b2ef796d9af92379dfa1f89ad03ac7001af79d90eb298560001b6108bb565b60018054610a1e90611581565b80601f0160208091040260200160405190810160405280929190818152602001828054610a4a90611581565b8015610a975780601f10610a6c57610100808354040283529160200191610a97565b820191906000526020600020905b815481529060010190602001808311610a7a57829003601f168201915b5050505050905090565b6000610acf7f3a4254ea4a129383dac7c99aa6162c4816708b75508c1925b13c5f1b56e5309b60001b6108bb565b610afb7f224fb0807e9ba40aec9aee48ab0f8d5dba5513916383679d7fb67600ae60a85c60001b6108bb565b610b277fea432aacb2193578a8466fe67d963bd0bce58c29f63baf314bb0a7fd220e72a760001b6108bb565b610b32338484610e66565b610b5e7f80e863cf2cf410360a6cb6a7c83ba675af963987b8581159ab6919b2140d757260001b6108bb565b610b8a7fcf4dcf673eace82b44fb41158c9fe5cdf7cb87f6a1385b788ad7fd2dcfd7a3fa60001b6108bb565b6001905092915050565b6000610bc27f473d36f8e02c0283100e7364d538308efac94b10cb2143d49a895f45e7b12b6b60001b6108bb565b610bee7f43130099a339243876cac39a09273dd66b95617ab6d9dd79cbefd874c6e81e2360001b6108bb565b610c1a7f4e8bbe7742c5435cb8cf31a3585d7278af19ef9ff6b5c0f9d021fd9c9da9111760001b6108bb565b600560008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054905092915050565b610ccb7ffad392dc174a273c575263e90dd91e951ddb5dfb32ab6f2811fbcb6d6673c6ec60001b6108bb565b610cf77fef9ab52bcdf2333cab860319ffa72de758b20d1362b68bbb2ebb44d6b27afba260001b6108bb565b610d237f801b5d6b5f5b039da59fcc79d258ce86c54c8608598f11af27e1b9d1992bfb7260001b6108bb565b80600560008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002081905550610dd07f1a0e9bd540163b13c182fbefae8b87c157f3503ad0642750bf29bb1d0faa581560001b6108bb565b610dfc7ff70f01cad8e0d5ba08f4478d2ea7d83df0ad1b6cc16293e837b9fe439c5c8bd960001b6108bb565b8173ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b92583604051610e5991906113dd565b60405180910390a3505050565b610e927f54a6223e484752109681a8f713b40052a687ad66da0e06e193649575fbaf76b760001b6108bb565b610ebe7f5322e06ae65de6b34583266a17b144164feba15a58dc1380e673f66cabd5005260001b6108bb565b610eea7ff692cab12905f0a0b3a1c215e9390cdf15a45395e1f967b562879da4c66cd2ba60001b6108bb565b6000600460008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020549050610f5a7f12e25efa3f4842498575a49da187ba8e23d04a6b0b8af1019ea6999c950eba5f60001b6108bb565b610f867f79fa41ce524c1ea6a20011d8df69c58dc7966fc8adab32aeed3f4a70a58946bb60001b6108bb565b610fb27f57ed23632735fbf9ec1d0d82e73099519c7bf33baed27ca594ad2db383324f6c60001b6108bb565b81811015610ff5576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610fec906116b7565b60405180910390fd5b6110217f6aeba131c6320b96257c7adb0468c39e0f89bb1daa9ea06a7016c619d2ac8a7b60001b6108bb565b61104d7f4a012f12ac3eb4502166aaba673327df3c4c2f126c5190917176a2c28a24be3060001b6108bb565b818103600460008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055506110bf7f493582f236c9eb970fa53e1f7fd89f271475672f5cea8983f3d71aa92f3aec8860001b6108bb565b6110eb7f57d43860741d4d8922b47a3599f356282f1ff61b2a115cae26e80a444e6886fc60001b6108bb565b81600460008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600082825461113a9190611706565b9250508190555061116d7fefb4719e42d1506ba3ac37bc61f1d9b9976168cfd105d355d4029054562982e460001b6108bb565b6111997fe5e589c1da81df52b9311cb0256c9269e639105c7031c0dc42c66d59b941c54360001b6108bb565b8273ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef846040516111f691906113dd565b60405180910390a350505050565b600081519050919050565b600082825260208201905092915050565b60005b8381101561123e578082015181840152602081019050611223565b8381111561124d576000848401525b50505050565b6000601f19601f8301169050919050565b600061126f82611204565b611279818561120f565b9350611289818560208601611220565b61129281611253565b840191505092915050565b600060208201905081810360008301526112b78184611264565b905092915050565b600080fd5b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b60006112ef826112c4565b9050919050565b6112ff816112e4565b811461130a57600080fd5b50565b60008135905061131c816112f6565b92915050565b6000819050919050565b61133581611322565b811461134057600080fd5b50565b6000813590506113528161132c565b92915050565b6000806040838503121561136f5761136e6112bf565b5b600061137d8582860161130d565b925050602061138e85828601611343565b9150509250929050565b60008115159050919050565b6113ad81611398565b82525050565b60006020820190506113c860008301846113a4565b92915050565b6113d781611322565b82525050565b60006020820190506113f260008301846113ce565b92915050565b600080600060608486031215611411576114106112bf565b5b600061141f8682870161130d565b93505060206114308682870161130d565b925050604061144186828701611343565b9150509250925092565b600060ff82169050919050565b6114618161144b565b82525050565b600060208201905061147c6000830184611458565b92915050565b6000819050919050565b61149581611482565b81146114a057600080fd5b50565b6000813590506114b28161148c565b92915050565b6000602082840312156114ce576114cd6112bf565b5b60006114dc848285016114a3565b91505092915050565b6000602082840312156114fb576114fa6112bf565b5b60006115098482850161130d565b91505092915050565b60008060408385031215611529576115286112bf565b5b60006115378582860161130d565b92505060206115488582860161130d565b9150509250929050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b6000600282049050600182168061159957607f821691505b602082108114156115ad576115ac611552565b5b50919050565b7f45524332303a207472616e7366657220616d6f756e742065786365656473206160008201527f6c6c6f77616e6365000000000000000000000000000000000000000000000000602082015250565b600061160f60288361120f565b915061161a826115b3565b604082019050919050565b6000602082019050818103600083015261163e81611602565b9050919050565b7f45524332303a205472616e7366657220616d6f756e742065786365656473206260008201527f616c616e63650000000000000000000000000000000000000000000000000000602082015250565b60006116a160268361120f565b91506116ac82611645565b604082019050919050565b600060208201905081810360008301526116d081611694565b9050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b600061171182611322565b915061171c83611322565b9250827fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff03821115611751576117506116d7565b5b82820190509291505056fea26469706673582212207f88c8d1d14b12cd378c74be953bf6e5eb84671c17573132fa5e68546ca3865664736f6c634300080a0033";

type ERC20ConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: ERC20ConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class ERC20__factory extends ContractFactory {
  constructor(...args: ERC20ConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  deploy(
    name_: string,
    symbol_: string,
    decimals_: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ERC20> {
    return super.deploy(
      name_,
      symbol_,
      decimals_,
      overrides || {}
    ) as Promise<ERC20>;
  }
  getDeployTransaction(
    name_: string,
    symbol_: string,
    decimals_: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(
      name_,
      symbol_,
      decimals_,
      overrides || {}
    );
  }
  attach(address: string): ERC20 {
    return super.attach(address) as ERC20;
  }
  connect(signer: Signer): ERC20__factory {
    return super.connect(signer) as ERC20__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): ERC20Interface {
    return new utils.Interface(_abi) as ERC20Interface;
  }
  static connect(address: string, signerOrProvider: Signer | Provider): ERC20 {
    return new Contract(address, _abi, signerOrProvider) as ERC20;
  }
}
