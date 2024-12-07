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
        <div className="ContentMain">

            {word &&
                    meanings.map((meaning, index) => (
                    <ul key={index}>
                        <div className="border">
                            <p className="border-part">{meaning.partOfSpeech}</p>
                            <div className="border-line"></div>
                        </div>

                        <div>
                            <p className="meaning">Meaning</p>
                            {meaning.definitions.map((definition, idx) => (
                                <div key={idx}> 
                                    <li>{definition.definition}</li>
                                    {definition.example && <li style={{color: "grey"}}>"{definition.example}"</li>}
                                </div>
                            ))}
                            {meaning.synonums && <p>{meaning.synonums}</p>}
                        </div>
                    </ul>
                ))} 
                <div className="border-line"></div>
                <div style={{paddingTop:"20px"}}>
                    <span style={{color: "grey", paddingRight: "20px"}}>Source</span><a target="_blank" href={sourceUrls[0]}>{sourceUrls[0]}</a>
                </div>
                
        </div>
    );
};

export default ContentMain;
