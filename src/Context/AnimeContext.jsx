import { createContext, useEffect, useState } from "react";

const AnimeContext = createContext();

export const  AnimeProvider = ({ children }) => {
    const [animes, setAnimes] = useState(null);
    const [ loading, setLoading ] = useState(true);
    const API_URL = 'https://api.jikan.moe/v4/anime'

    useEffect(() => {
        const fetchData = async () => {
            try{
                const response = await fetch(API_URL);
                const data = await response.json();
                console.log(data.data);
                setAnimes(data.data);
                setLoading(false);
            } catch(err) {
                console.error(err);
            }
        }
        fetchData();
    }, []);

    return(
        <AnimeContext.Provider value={{animes, setAnimes, loading}}>
            {children}
        </AnimeContext.Provider>
    )
}

export default AnimeContext;