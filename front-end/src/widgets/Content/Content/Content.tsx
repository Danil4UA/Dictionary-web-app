import "./Content.scss"
import { useWord } from "../../../app/providers/WordProvider/lib/useWord"
import ContentTitle from "../ContentTitle/ContentTitle"
import { useEffect, useState } from "react"
import ContentMain from "../ContentMain/ContentMain"

export interface DataObject {
    word: string;
    phonetic: string;
    meanings: [];
    phonetics: [];
    sourceUrls: string[]
}

const Content = () => {

    const [dataObj, setDataObj] = useState<DataObject>()

    const {data} = useWord()
    useEffect(()=>{
        if(data){
            setDataObj(data[0])
        }
        
    }, [data])

    return (
        <div className="content">
            {dataObj && 
                <div>
                    <ContentTitle word={dataObj.word} phonetic={dataObj.phonetic} phonetics={dataObj.phonetics} />
                    <ContentMain dataObj={dataObj} />
                </div>
               
            }

        </div>
    )
}

export default Content