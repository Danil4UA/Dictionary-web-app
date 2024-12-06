import { WordContext } from "../lib/WordContext";
import { PropsWithChildren, FC, useState, useCallback } from "react";
import { fetchWordData } from "../../../../services/dictionaryService";


const WordProvider: FC<PropsWithChildren> = ({ children }) => {
    const [data, setData] = useState(null);
    const [isLoading, setIsLoading] = useState<boolean>(false); 
    const [error, setError] = useState<string | null>(null); 

    const fetchData = useCallback(async (word: string) => {
        setIsLoading(true);
        setError(null);
        try {
            const result = await fetchWordData(word); 
            setData(result); 
        } catch (err) {
            console.log(err)
            setError("Failed to fetch data"); 
        } finally {
            setIsLoading(false); 
        }
    }, []);

    return (
        <WordContext.Provider value={{ data, isLoading, error, fetchData }}>
            {children}
        </WordContext.Provider>
    );
};

export default WordProvider;