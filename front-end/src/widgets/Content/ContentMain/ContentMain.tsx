import "./ContentMain.scss"

interface Definition {
    definition: string;
    example? :string;
}

interface Meaning {
    partOfSpeech: string;
    definitions: Definition[];
    synonums?: string[];

}

interface ContentMainProps {
    dataObj: {
        word: string
        meanings: Meaning[]
        sourceUrls: string[];

    }
}

const ContentMain = (props: ContentMainProps) => {
    const { word, meanings, sourceUrls, } = props.dataObj;
    return (
        <div>

            {word &&
                    meanings.map((meaning, index) => (
                    <ul key={index}>
                        <div className="border">
                            <p className="border-part">{meaning.partOfSpeech}</p>
                            <div className="border-line"></div>
                        </div>

                        <div>
                            <p>Meaning</p>
                            {meaning.definitions.map((definition, idx) => (
                                <div key={idx}> 
                                    <li>{definition.definition}</li>
                                    {definition.example && <p>{definition.example}</p>}
                                </div>
                            ))}
                            {meaning.synonums && <p>{meaning.synonums}</p>}
                        </div>
                    </ul>
                ))} 
                source: {sourceUrls[0]}
        </div>
    );
};

export default ContentMain;
