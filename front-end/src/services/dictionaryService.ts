import axios from "axios";

const URL = "https://api.dictionaryapi.dev/api/v2/entries/en";

export const fetchWordData = async (word: string) => {
    try {
        const response = await axios.get(`${URL}/${word}`);
        return response.data;
    } catch (error) {
        console.log(error)
        throw new Error("Faild fetch")
    }
};