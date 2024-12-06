interface ContentTitleProps {
    word: string;
    phonetic: string;
}

const ContentTitle = (props: ContentTitleProps) => {
    const {word, phonetic} = props

    return (
        <div>
            <div>{word}</div>
            <div>{phonetic}</div>
        </div>
    )
}

export default ContentTitle