import { createContext } from "react";

interface WordContextType {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    data: any; 
    isLoading: boolean;
    error: string | null;
    fetchData: (word: string) => void;
}

export const WordContext = createContext<WordContextType | undefined>(undefined);