import { MBTI } from './mbtiTypes';
import { mbtiDescriptions } from './mbtiDescriptions';

export const QUESTIONLIST = [
    {
        id: 1,
        question: "벌써 봄! 날씨가 너무 좋은데 어디에서 시간을 보내볼까?",
        answer: [
            { type: "I", text: "조용한 벤치에 앉아 내가 좋아하는 노래를 들을래" },
            { type: "E", text: "사람이 가득한 벚꽃 명소, 에너지가 넘치는 기분이야" },
        ],
        imageUrl: ""
    },
    {
        id: 2,
        question: "벚꽃이 만개한 길을 걷다가, 문득 멈춰 섰을 때 드는 생각은?",
        answer: [
            { type: "S", text: "꽃잎이 엄청 많네~ 날씨도 딱 좋고, 사진 찍기 최고다" },
            { type: "N", text: "벚꽃은 왜 이렇게 빨리 질까? 뭔가 인생 같아.." },
        ],
        imageUrl: ""
    },
    {
        id: 3,
        question: "딸기 축제 티켓를 못 구해서 우울해 하는 친구에게",
        answer: [
            { type: "T", text: "다른 방법을 찾아야지! 다른 축제나 딸기 관련 행사도 있을 거야" },
            { type: "F", text: "괜찮아~ 내년에 가면 되지! 같이 딸기 먹자" },
        ],
        imageUrl: ""
    },
    {
        id: 4,
        question: "완벽한 피크닉 계획을 세웠는데 갑자기 봄비가 쏟아진다면?",
        answer: [
            { type: "P", text: "오히려 좋아! 피크닉은 미루고 오늘은 빗소리 감성에 푹 빠질래" },
            { type: "J", text: "이럴 줄 알고 플랜 B도 짜둘걸! 빠르게 계획 다시 세워야지" },
        ],
        imageUrl: ""
    },
    {
        id: 5,
        question: "봄에 어울리는 예쁜 옷을 사버렸어~",
        answer: [
            { type: "I", text: "날씨 좋고, 내게 소중한 날 입어야지~" },
            { type: "E", text: "누구 만날 사람 없나? 빨리 이 옷 입고싶어!!" },
        ],
        imageUrl: ""
    },
    {
        id: 6,
        question: "봄이 오면 가장 먼저 떠오르는 건?",
        answer: [
            { type: "S", text: "따뜻한 햇살이랑 옷 얇아지는 거~ 바람도 딱 좋지" },
            { type: "N", text: "봄은 생명의 시작이야, 설레는 느낌이랄까" },
        ],
        imageUrl: ""
    },
    {
        id: 7,
        question: "친구가 봄 옷을 샀다는데, 너무 안어울린다..",
        answer: [
            { type: "T", text: "너한테는 이런 스타일이 조금 더 잘 어울릴 것 같아!" },
            { type: "F", text: "잘 샀네~ (기분 나빠할 수도 있으니 예쁘다고 하자)" },
        ],
        imageUrl: ""
    },
    {
        id: 8,
        question: "봄을 주제로 한 그림을 그리기로 했어! 어떻게 시작할까? ",
        answer: [
            { type: "P", text: "그냥 떠오르는 대로 손 가는 대로 그려보자" },
            { type: "J", text: "구도부터 컬러 팔레트까지 미리 다 정리해둘래" },
        ],
        imageUrl: ""
    },
    {
        id: 9,
        question: "예쁘게 핀 벚꽃 구경중, 저 멀리서 걸어오는.. 아는 사람?",
        answer: [
            { type: "I", text: "마주치면 뻘쭘한데.. 제발 날 못봤으면" },
            { type: "E", text: "오! 여기서 만나다니~ 먼저 말 걸어버려" },
        ],
        imageUrl: ""
    },
    {
        id: 10,
        question: "소풍 가서 누워 하늘을 보는데…",
        answer: [
            { type: "S", text: "구름 모양이 진짜 귀엽다~ 강아지 닮은 것도 있어!" },
            { type: "N", text: "구름은 멈추지 않고 흘러가네… 나도 계속 나아가야겠다" },
        ],
        imageUrl: ""
    },
    {
        id: 11,
        question: "봄맞이 대청소를 하기로 했는데 청소할 게 너무 많아 ㅠㅠ",
        answer: [
            { type: "T", text: "얼른 끝내려면 체계적으로 분류하고, 빠르고 효율적으로 해야지!" },
            { type: "F", text: "조금 귀찮지만, 깨끗한 집에서 기분 좋은 봄을 맞이할 생각에 힘이 나!" },
        ],
        imageUrl: ""
    },
    {
        id: 12,
        question: "친구들이랑 벚꽃놀이 날짜 정할 때, 너는 어떤 역할?",
        answer: [
            { type: "P", text: "그냥 아무 때나 좋아~ 흐름 따라 가는 편이야" },
            { type: "J", text: "일단 다들 가능한 날짜 조사부터! 정확하게 정해야 맘이 편해" },
        ],
        imageUrl: ""
    },
];

// export const RESULTS = new Map([
//     [MBTI.ISTJ, { id: MBTI.ISTJ, title: mbtiDescriptions[MBTI.ISTJ].title, text: mbtiDescriptions[MBTI.ISTJ].text, imageUrl: mbtiDescriptions[MBTI.ISTJ].image, like: mbtiDescriptions[MBTI.ISTJ].like, hate: mbtiDescriptions[MBTI.ISTJ].hate }],
//     [MBTI.ISFJ, { id: MBTI.ISFJ, title: mbtiDescriptions[MBTI.ISFJ].title, text: mbtiDescriptions[MBTI.ISFJ].text, imageUrl: mbtiDescriptions[MBTI.ISFJ].image, like: mbtiDescriptions[MBTI.ISFJ].like, hate: mbtiDescriptions[MBTI.ISFJ].hate }],
//     [MBTI.INFJ, { id: MBTI.INFJ, title: mbtiDescriptions[MBTI.INFJ].title, text: mbtiDescriptions[MBTI.INFJ].text, imageUrl: mbtiDescriptions[MBTI.INFJ].image, like: mbtiDescriptions[MBTI.INFJ].like, hate: mbtiDescriptions[MBTI.INFJ].hate }],
//     [MBTI.INTJ, { id: MBTI.INTJ, title: mbtiDescriptions[MBTI.INTJ].title, text: mbtiDescriptions[MBTI.INTJ].text, imageUrl: mbtiDescriptions[MBTI.INTJ].image, like: mbtiDescriptions[MBTI.INTJ].like, hate: mbtiDescriptions[MBTI.INTJ].hate }],
//     [MBTI.ISTP, { id: MBTI.ISTP, title: mbtiDescriptions[MBTI.ISTP].title, text: mbtiDescriptions[MBTI.ISTP].text, imageUrl: mbtiDescriptions[MBTI.ISTP].image, like: mbtiDescriptions[MBTI.ISTP].like, hate: mbtiDescriptions[MBTI.ISTP].hate }],
//     [MBTI.ISFP, { id: MBTI.ISFP, title: mbtiDescriptions[MBTI.ISFP].title, text: mbtiDescriptions[MBTI.ISFP].text, imageUrl: mbtiDescriptions[MBTI.ISFP].image, like: mbtiDescriptions[MBTI.ISFP].like, hate: mbtiDescriptions[MBTI.ISFP].hate }],
//     [MBTI.INFP, { id: MBTI.INFP, title: mbtiDescriptions[MBTI.INFP].title, text: mbtiDescriptions[MBTI.INFP].text, imageUrl: mbtiDescriptions[MBTI.INFP].image, like: mbtiDescriptions[MBTI.INFP].like, hate: mbtiDescriptions[MBTI.INFP].hate }],
//     [MBTI.INTP, { id: MBTI.INTP, title: mbtiDescriptions[MBTI.INTP].title, text: mbtiDescriptions[MBTI.INTP].text, imageUrl: mbtiDescriptions[MBTI.INTP].image, like: mbtiDescriptions[MBTI.INTP].like, hate: mbtiDescriptions[MBTI.INTP].hate }],
//     [MBTI.ESTP, { id: MBTI.ESTP, title: mbtiDescriptions[MBTI.ESTP].title, text: mbtiDescriptions[MBTI.ESTP].text, imageUrl: mbtiDescriptions[MBTI.ESTP].image, like: mbtiDescriptions[MBTI.ESTP].like, hate: mbtiDescriptions[MBTI.ESTP].hate }],
//     [MBTI.ESFP, { id: MBTI.ESFP, title: mbtiDescriptions[MBTI.ESFP].title, text: mbtiDescriptions[MBTI.ESFP].text, imageUrl: mbtiDescriptions[MBTI.ESFP].image, like: mbtiDescriptions[MBTI.ESFP].like, hate: mbtiDescriptions[MBTI.ESFP].hate }],
//     [MBTI.ENFP, { id: MBTI.ENFP, title: mbtiDescriptions[MBTI.ENFP].title, text: mbtiDescriptions[MBTI.ENFP].text, imageUrl: mbtiDescriptions[MBTI.ENFP].image, like: mbtiDescriptions[MBTI.ENFP].like, hate: mbtiDescriptions[MBTI.ENFP].hate }],
//     [MBTI.ENTP, { id: MBTI.ENTP, title: mbtiDescriptions[MBTI.ENTP].title, text: mbtiDescriptions[MBTI.ENTP].text, imageUrl: mbtiDescriptions[MBTI.ENTP].image, like: mbtiDescriptions[MBTI.ENTP].like, hate: mbtiDescriptions[MBTI.ENTP].hate }],
//     [MBTI.ESTJ, { id: MBTI.ESTJ, title: mbtiDescriptions[MBTI.ESTJ].title, text: mbtiDescriptions[MBTI.ESTJ].text, imageUrl: mbtiDescriptions[MBTI.ESTJ].image, like: mbtiDescriptions[MBTI.ESTJ].like, hate: mbtiDescriptions[MBTI.ESTJ].hate }],
//     [MBTI.ESFJ, { id: MBTI.ESFJ, title: mbtiDescriptions[MBTI.ESFJ].title, text: mbtiDescriptions[MBTI.ESFJ].text, imageUrl: mbtiDescriptions[MBTI.ESFJ].image, like: mbtiDescriptions[MBTI.ESFJ].like, hate: mbtiDescriptions[MBTI.ESFJ].hate }],
//     [MBTI.ENFJ, { id: MBTI.ENFJ, title: mbtiDescriptions[MBTI.ENFJ].title, text: mbtiDescriptions[MBTI.ENFJ].text, imageUrl: mbtiDescriptions[MBTI.ENFJ].image, like: mbtiDescriptions[MBTI.ENFJ].like, hate: mbtiDescriptions[MBTI.ENFJ].hate }],
//     [MBTI.ENTJ, { id: MBTI.ENTJ, title: mbtiDescriptions[MBTI.ENTJ].title, text: mbtiDescriptions[MBTI.ENTJ].text, imageUrl: mbtiDescriptions[MBTI.ENTJ].image, like: mbtiDescriptions[MBTI.ENTJ].like, hate: mbtiDescriptions[MBTI.ENTJ].hate }],
// ]);

export const RESULTS = new Map(
    Object.values(MBTI).map(type => {
      const desc = mbtiDescriptions[type];
      return [type, {
        id: type,
        title: desc.title,
        text: desc.text,
        imageUrl: desc.image,
        like: desc.like,
        hate: desc.hate,
      }]
    })
  );
  