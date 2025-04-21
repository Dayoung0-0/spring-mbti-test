'use client'

import Image from 'next/image';
import { useRouter } from "next/navigation";
import { QUESTIONLIST } from "../constants/mbtiTest";
import { useState } from 'react';
import LoadingScreen from '../components/LoadingScreen';
import ProgressBar from '../components/ProgressBar';
import { MBTITYPE } from '../constants/mbtiTypes';

export default function Question() {
    const [pageNum, setPageNum] = useState(1);
    const [isLoading, setIsLoading] = useState(false);
    const [mbti, setMbti] = useState<MBTITYPE[]>([]);

    const router = useRouter();
    const currentQuestion = QUESTIONLIST[pageNum - 1];

    const handleButtonClick = (type: MBTITYPE) => {
        const updatedMbti = [...mbti, type]   // 이전 상태 + 질문에서 선택한 타입으로 배열 생성
        const nextPage = pageNum + 1;

        if (nextPage > QUESTIONLIST.length) { // 마지막 페이지일때
            const mbtiType = calculateMbti(updatedMbti);
            // console.log(mbtiType);
            setIsLoading(true); 
            setTimeout(() => {
                router.push(`/result?mbtiType=${mbtiType}`);
            }, 2500);
            return;
        }

        setMbti(updatedMbti);
        setPageNum(nextPage);
    }

    const calculateMbti = (answers: MBTITYPE[]) => {
        // 선택된 MBTI 타입들의 개수를 세서 객체로 만든다.
        const countMap = answers.reduce((acc: Record<MBTITYPE, number>, cur: MBTITYPE) => {
            acc[cur] = (acc[cur] || 0) + 1;
            return acc;
        }, { E: 0, I: 0, S: 0, N: 0, T: 0, F: 0, P: 0, J: 0 });
    
        const result =
            ((countMap["E"] || 0) >= (countMap["I"] || 0) ? "E" : "I") +
            ((countMap["S"] || 0) >= (countMap["N"] || 0) ? "S" : "N") +
            ((countMap["T"] || 0) >= (countMap["F"] || 0) ? "T" : "F") +
            ((countMap["J"] || 0) >= (countMap["P"] || 0) ? "J" : "P");
    
        console.log("countMap:", countMap);
        console.log("계산 결과:", result);
    
        return result;
    };

    return (
        <div className="box fade-in-up">
            <Image
                src="/images/background-flower.png"
                alt="Background"
                fill
                quality={100}
                style={{ objectFit: "cover" }}
            />
            {isLoading ? (
                <LoadingScreen />
            ) : (
                <>
                    <ProgressBar progress={(currentQuestion.id / QUESTIONLIST.length) * 100} />
                    <p className="question-number">{currentQuestion.id} / {QUESTIONLIST.length}</p>
                    <p className="question-text">{currentQuestion.question}</p>
                    <div className="answer-button-group">
                        {currentQuestion.answer.map((ans, idx) => (
                            <button key={idx} onClick={() => handleButtonClick(ans.type)} className="question-btn">
                                {ans.text}
                            </button>
                        ))}
                    </div>
                </>
            )}
        </div>
    );
}