'use client'

import Image from 'next/image';
import { RESULTS } from "../constants/mbtiTest";
import { useRouter } from 'next/navigation'

export default function Results() {
    const router = useRouter()

    return (
        <>
            <Image
                src="/images/background-flower.png"
                alt="Background"
                fill
                quality={100}
                style={{ objectFit: "cover" }}
            />
            <div className='results-content-box fade-in-up'>
                <p className='results-title'>전체 결과</p>
                {Array.from(RESULTS).map(([mbtiKey, mbtiValue], idx) => (
                    <div
                        key={mbtiKey}
                        className='results-item'
                        onClick={() => router.push(`/result?mbtiType=${mbtiValue.id}`)}
                    >
                        <Image
                            className='results-image'
                            src={mbtiValue.imageUrl}
                            alt="Background"
                            width={90}
                            height={90}
                            quality={100}
                        />
                        <p key={idx} style={{ zIndex: '3', flex: '1' }}>{mbtiValue.title}</p>
                    </div>
                ))}
                <div className='navigate-box' style={{ width: '90%', marginTop: '20px' }}>
                    <button onClick={() => router.back()}>&lt;&lt; 뒤로가기</button>
                    <button onClick={() => router.push("/start")}> 다시하기 &gt;&gt;</button>
                </div>
            </div>
        </>
    );
}