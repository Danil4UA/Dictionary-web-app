interface Definition {
    definition: string;
}

interface Meaning {
    partOfSpeech: string;
    definitions: Definition[];
}

interface ContentMainProps {
    dataObj: {
        word: string
        meanings: Meaning[]
    }
}

const ContentMain = (props: ContentMainProps) => {
    const { word, meanings } = props.dataObj;
    console.log(word, meanings)
    return (
        <div>

            {word &&
                    meanings.map((meaning, index) => (
                    <ul key={index}>
                        <p>{meaning.partOfSpeech}</p>
                        <div>
                            {meaning.definitions.map((definition, idx) => (
                                <li key={idx}>{definition.definition}</li>
                            ))}
                        </div>
                    </ul>
                ))} 
        </div>
    );
};

export default ContentMain;
