import { useEffect } from "react";

type KakaoShareProps = {
    id: string,
    title: string;
    imageUrl: string;
  };

export default function KakaoShareButton({id, title, imageUrl}: KakaoShareProps) {

    useEffect(() => {
        if (typeof window !== "undefined") {
            const { Kakao } = window;

            // Kakao 객체가 잘 로드되었는지 확인
            console.log(Kakao); 
            if (!Kakao.isInitialized()) {
                Kakao.init(process.env.NEXT_PUBLIC_KAKAO_API_KEY);
            }
        }
    }, []);

    const handleShare = () => {
        const { Kakao } = window;
        console.log(Kakao);
        console.log(`https://spring-mbti-test-ke2h.vercel.app/${imageUrl}`)
        Kakao.Share.sendDefault({
            objectType: 'feed',
            content: {
                title: title ?? "봄에 피어난 나 테스트",
                description: "나는 어떤 유형으로 피어났을지 확인해보세요!",
                imageUrl: imageUrl
                    ? `https://spring-mbti-test-ke2h.vercel.app/${imageUrl}`
                    : "",
                link: {
                    mobileWebUrl: `https://spring-mbti-test-ke2h.vercel.app/result?mbtiType=${id}`,
                    webUrl: `https://spring-mbti-test-ke2h.vercel.app/result?mbtiType=${id}`,
                },
            },
            buttons: [
                {
                    title: '테스트 하러가기',
                    link: {
                        mobileWebUrl: 'https://spring-mbti-test-ke2h.vercel.app/',
                        webUrl: 'https://spring-mbti-test-ke2h.vercel.app/',
                    },
                }
            ],
        });
    };

    return (
        <>
            <button
                className="share-button kakao-btn"
                onClick={handleShare}
            />
        </>
    );
}
