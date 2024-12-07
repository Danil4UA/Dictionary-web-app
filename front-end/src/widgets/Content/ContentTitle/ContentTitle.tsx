import { useState, useEffect } from "react";
import "./ContentTitle.scss";
import Button from "../../../shared/ui/Button/Button";
import { classNames } from "../../../shared/lib/classNames/classNames";
import PlayIcon from "../../../assets/icons/play-button.svg";


interface Phonetic {
    audio: string;
    text?: string;
}

interface ContentTitleProps {
    word: string;
    phonetic: string;
    phonetics: Phonetic[];
}

const ContentTitle = ({ word, phonetic, phonetics }: ContentTitleProps) => {
    const [audio, setAudio] = useState<HTMLAudioElement | null>(null);
    useEffect(() => {
        const findAudio = phonetics.find((item) => item.audio);
        if (findAudio) {
            setAudio(new Audio(findAudio.audio));
        } else {
            setAudio(null);
        }
    }, [phonetics]);

    const playAudio = () => {
        if (audio) {
            audio
                .play()
                .catch((error) => console.error("Ошибка воспроизведения аудио:", error));
        }
    };

    return (
        <div className="ContentTitle">
            <div>   
                <div className="ContentTitle_Word">{word}</div>
                <div className="ContentTitle_Phonetic">{phonetic}</div>
            </div>
            {audio ? (
                <Button 
                    className={classNames("ContentTitle_Audio", {}, [])}
                    onClick={playAudio} aria-label="Play pronunciation"
                >
                  <img src={PlayIcon} alt="play icon" width="72px"/>
                </Button>
               
            ) : (
                <p>No audio available</p>
            )}
        </div>
    );
};

export default ContentTitle;