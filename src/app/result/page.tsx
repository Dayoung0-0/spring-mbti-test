'use client'

import { Suspense } from "react";
import Image from 'next/image';
import { useSearchParams } from "next/navigation";
import { RESULTS } from "../constants/mbtiTest";
import { useRouter } from 'next/navigation'
import CopyLinkButton from '../components/CopyLinkButton';
import KakaoShareButton from '../components/KakaoShareButton';

export default function Result() {
    return (
        <Suspense>
            <ResultComponent />
        </Suspense>
    );
}

const ResultComponent: React.FC = () => {
    const router = useRouter()
    const searchParams = useSearchParams();
    const resultData = RESULTS.get(searchParams.get('mbtiType') ?? '');
    const likeMbti = resultData ? RESULTS.get(resultData.like) : null;
    const hateMbti = resultData ? RESULTS.get(resultData.hate) : null;

    return (
        <div className="box fade-in-up">
            <Image
                src="/images/background-flower.png"
                alt="Background"
                fill
                quality={100}
                style={{ objectFit: "cover" }}
            />
            {resultData ?
                <div className="result-container">
                    <Image
                        className='result-image'
                        src={resultData.imageUrl}
                        alt="Background"
                        width={200}
                        height={130}
                        quality={100}
                        style={{ objectFit: "cover" }}
                    />
                    <p className='result-title'>{resultData.title}</p>
                    <div className="result-text-box">
                        {resultData.text.split('\n').map((line, index) => (
                            <p key={index}>{line}</p>
                        ))}
                    </div>
                    <div className="match-box">
                        {likeMbti && (
                            <div className="like-mbti" onClick={() => router.push(`/result?mbtiType=${likeMbti.id}`)}>
                                <Image
                                    className="like-image"
                                    src={likeMbti.imageUrl}
                                    alt="like mbti"
                                    width={120}
                                    height={100}
                                    style={{ objectFit: "cover" }} />
                                <p>👍🏻{likeMbti.title}</p>
                            </div>
                        )}
                        {hateMbti && (
                            <div className="hate-mbti" onClick={() => router.push(`/result?mbtiType=${hateMbti.id}`)}>
                                <Image
                                    className="hate-image"
                                    src={hateMbti.imageUrl}
                                    alt="hate mbti"
                                    width={120}
                                    height={100}
                                    style={{ objectFit: "cover" }} />
                                <p>👎🏻{hateMbti.title}</p>
                            </div>
                        )}
                    </div>
                    <div className="share-buttons">
                        {resultData?.title && resultData?.imageUrl && (
                            <KakaoShareButton
                                id={resultData.id}
                                title={resultData.title}
                                imageUrl={resultData.imageUrl}
                            />
                        )}
                        <CopyLinkButton />
                    </div>
                    <div className='bottom-box'>
                        <button onClick={() => router.push("/start")}>&lt;&lt; 다시하기</button>
                        <button onClick={() => router.push("/results")}> 전체 결과 &gt;&gt;</button>
                    </div>
                </div>
                :
                <p>잘못된 접근입니다! {/** 추후 수정 error page component */}</p>
            }
        </div>
    );
}