'use client'

import Image from 'next/image';
import { useRouter } from 'next/navigation'

export default function Start() {
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
            <div className="title">
                <p>봄에</p>
                <p style={{ marginLeft: '25px' }}>피어난 나</p>
            </div>
            <button
                className="start-btn"
                onClick={() => router.push("/question")}
            >
                테스트 시작하기
                <span className="petal"></span>
            </button>
        </>
    );
}