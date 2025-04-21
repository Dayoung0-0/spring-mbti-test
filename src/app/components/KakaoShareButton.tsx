import { useEffect } from "react";

type KakaoShareProps = {
    title: string;
    imageUrl: string;
  };

export default function KakaoShareButton({title, imageUrl}: KakaoShareProps) {

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
        console.log(`http://localhost:3000/${imageUrl}`)
        Kakao.Share.sendDefault({
            objectType: 'feed',
            content: {
                title: title ?? "봄에 피어난 나 테스트",
                description: "나는 어떤 유형으로 피어났을지 확인해보세요!",
                imageUrl: imageUrl
                    ? `http://localhost:3000/${imageUrl}`
                    : "",
                link: {
                    mobileWebUrl: 'https://developers.kakao.com',
                    webUrl: 'https://developers.kakao.com',
                },
            },
            buttons: [
                {
                    title: '테스트 하러가기',
                    link: {
                        mobileWebUrl: 'https://developers.kakao.com',
                        webUrl: 'https://developers.kakao.com',
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
