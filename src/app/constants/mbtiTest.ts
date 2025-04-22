import { MBTI, MBTITYPE } from './mbtiTypes';
import { mbtiDescriptions } from './mbtiDescriptions';

export const QUESTIONLIST = [
    {
        id: 1,
        question: "벌써 봄이다. 날씨도 좋은데 어디에서 시간을 보내볼까?",
        answer: [
            { type: "I" as MBTITYPE, text: "조용한 벤치에 앉아 좋아하는 노래를 들을래" },
            { type: "E" as MBTITYPE, text: "사람이 가득한 벚꽃 명소로! 에너지가 넘치는 기분이야" },
        ],
        imageUrl: ""
    },
    {
        id: 2,
        question: "벚꽃이 만개한 길을 걷다가, 문득 드는 생각은?",
        answer: [
            { type: "S" as MBTITYPE, text: "꽃잎이 가득 피었네~ 사진 찍기 딱이네" },
            { type: "N" as MBTITYPE, text: "벚꽃은 왜 이렇게 빨리 질까? 뭔가 인생 같아.." },
        ],
        imageUrl: ""
    },
    {
        id: 3,
        question: "딸기 축제 티켓을 못 구해서 우울해 하는 친구에게",
        answer: [
            { type: "T" as MBTITYPE, text: "방법을 찾아보자! 다른 축제나 딸기 관련 행사도 있을 거야" },
            { type: "F" as MBTITYPE, text: "괜찮아? 우울하면 나랑 같이 딸기 디저트 먹으러 가자" },
        ],
        imageUrl: ""
    },
    {
        id: 4,
        question: "완벽한 피크닉 계획을 세웠는데 갑자기 비가 오네..",
        answer: [
            { type: "P" as MBTITYPE, text: "괜찮아! 피크닉은 미루고 오늘은 빗소리 감성에 푹 빠질래" },
            { type: "J" as MBTITYPE, text: "이럴 줄 알고 플랜 B도 짜둘걸.. 빠르게 계획 다시 세워야지" },
        ],
        imageUrl: ""
    },
    {
        id: 5,
        question: "봄에 어울리는 예쁜 신발을 장만했다~",
        answer: [
            { type: "I" as MBTITYPE, text: "어차피 잘 안나가니 중요한 약속 있을때 신어야지" },
            { type: "E" as MBTITYPE, text: "누구 만날 사람 없나? 빨리 이 옷 입고싶어!!" },
        ],
        imageUrl: ""
    },
    {
        id: 6,
        question: "봄이 오면 가장 먼저 떠오르는 건?",
        answer: [
            { type: "S" as MBTITYPE, text: "따뜻한 햇살과 봄바람, 그리고 벚꽃!" },
            { type: "N" as MBTITYPE, text: "봄은 핑크빛, 생명의 시작, 설레는 느낌!" },
        ],
        imageUrl: ""
    },
    {
        id: 7,
        question: "친구가 비싼 돈 주고 봄 옷을 샀다는데, 너무 안 어울린다",
        answer: [
            { type: "T" as MBTITYPE, text: "너랑 별로 안어울려! 다른 옷이 훨씬 나아" },
            { type: "F" as MBTITYPE, text: "잘 샀네~ (슬퍼할수도 있으니 예쁘다고 하자)" },
        ],
        imageUrl: ""
    },
    {
        id: 8,
        question: "봄을 주제로 한 그림을 그리기로 했어! 어떻게 시작할까?",
        answer: [
            { type: "P" as MBTITYPE, text: "그냥 떠오르는 대로 손 가는 대로 그려보자" },
            { type: "J" as MBTITYPE, text: "구도부터 컬러 팔레트까지 미리 다 정리해둘래" },
        ],
        imageUrl: ""
    },
    {
        id: 9,
        question: "혼자 예쁘게 핀 벚꽃을 구경하던 중, 아는 사람을 발견했다!",
        answer: [
            { type: "I" as MBTITYPE, text: "마주치면 뻘쭘한데.. 제발 날 못봤으면" },
            { type: "E" as MBTITYPE, text: "같이 구경하면 더 재밌겠다! 말 걸어야지" },
        ],
        imageUrl: ""
    },
    {
        id: 10,
        question: "따뜻한 햇살을 즐기며 하늘을 바라보다가…",
        answer: [
            { type: "S" as MBTITYPE, text: "따뜻해서 졸리네~ 낮잠이나 잘까" },
            { type: "N" as MBTITYPE, text: "구름 모양이 진짜 귀엽다~ 강아지 닮은 것도 있어!" },
        ],
        imageUrl: ""
    },
    {
        id: 11,
        question: "친구랑 대청소를 하기로 했는데, 친구가 못오게 됐다..",
        answer: [
          { type: "T" as MBTITYPE, text: "친구한테 치킨 쏘라 해야겠다. 어떻게 해야 금방 끝날까?" },
          { type: "F" as MBTITYPE, text: "이 많은 걸 나 혼자 다 해야 한다니.. 속상하지만 해야지.." },
        ],
        imageUrl: ""
    },
    {
        id: 12,
        question: "친구들이랑 벚꽃놀이 날짜 정할 때, 너는 어떤 역할?",
        answer: [
            { type: "P" as MBTITYPE, text: "그냥 아무 때나 좋아~ 친구가 정하면 따라 가는 편이야" },
            { type: "J" as MBTITYPE, text: "일단 가능한 날짜 조사부터! 정확하게 정해야 맘이 편해" },
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
  