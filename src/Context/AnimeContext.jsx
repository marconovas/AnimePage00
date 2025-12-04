import { createContext, useEffect, useState } from "react";

const AnimeContext = createContext();

export const  AnimeProvider = ({ children }) => {
    const [animes, setAnimes] = useState(null);
    const API_URL = 'https://api.jikan.moe/v4/anime'

    useEffect(() => {
        const fetchData = async () => {
            try{
                const response = await fetch(API_URL);
                const data = await response.json();
                setAnimes(data.data);
            } catch(err) {
                console.error(err);
            }
        }
        fetchData();
    }, []);

    return(
        <AnimeContext.Provider value={{animes, setAnimes}}>
            {children}
        </AnimeContext.Provider>
    )
}

export default AnimeContext;