import { useState, useEffect } from "react";
import MovieList from "components/MoviesList/MovieList";
import { getTrendingMovies } from "components/api";

const Home = () => {
    const [trendingMovies, setTrendingMovies] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        const fetchData = async () => {
            setIsLoading(true);
            try {
                const trendingMovies = await getTrendingMovies();
                setTrendingMovies(trendingMovies);
            } catch (e) {
                console.log(e);
            } finally {
                setIsLoading(false);
            }
        }
        fetchData();
    }, [])

    return (
        <main>
            <h1>Trending</h1>
            <MovieList trending={trendingMovies} loading={isLoading}></MovieList>
        </main>
    )
}

export default Home;