import { useState } from "react";

export default function CopyLinkButton() {
    const [isVisible, setIsVisible] = useState(false);

    function copyToClipboard() {
        const url = window.location.href;

        navigator.clipboard.writeText(url).then(() => {
            setIsVisible(true);
            setTimeout(() => setIsVisible(false), 1500); 
        }).catch((err) => {
            console.error("복사 실패:", err);
        });
    }

    return (
        <>
            <button
                className="share-button link-btn"
                onClick={copyToClipboard}
            />
            {isVisible && (
                <>
                    <div className="overlay"></div>
                    <div className="custom-alert">
                        <p>🌸 링크 복사 완료 🌸</p>
                    </div>
                </>
            )}
        </>
    );
}
