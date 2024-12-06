import { useRef } from "react"
import "./Search.scss"
import { useWord } from "../../app/providers/WordProvider/lib/useWord"

const Search = () => {
    const inputRef = useRef<HTMLInputElement>(null);
    const { fetchData } = useWord();

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            const word = inputRef.current?.value.trim();
            if (!word) {
                throw new Error("Invalid data");
            }
            fetchData(word);
            inputRef.current!.value = ""
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <form 
            className="search"
            onSubmit={handleSubmit}
        >
            <input 
                ref={inputRef}
                placeholder="Search"
            />
            {/* <button type="submit">Search</button>  */}
        </form>
    );
};

export default Search