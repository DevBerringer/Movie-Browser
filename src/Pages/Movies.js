import axios from "axios";
import "./PageCSS.css";
import { useEffect, useState } from "react";
import SingleContent from "../components/SingleContent/SingleContent";
import CustomPagination from "../components/Pagination/CustomPagination";
import Genres from "../components/SingleContent/Genres";
import useGenres from "../hooks/useGenre";

const Movies = () => {
  const [page, setPage] = useState(1);
  const [content, setContent] = useState([]);
  const [numOfPages, setNumberOfPages] = useState();
  const [selectedGenres, setSelectedGenres] = useState([]);
  const [genres, setGenres] = useState([]);
  const genreForURL = useGenres(selectedGenres);

  const fetchMovies = async () => {
    const { data } = await axios.get(
      `https://api.themoviedb.org/3/discover/movie?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=${page}&with_genres=${genreForURL}`
    );

    setContent(data.results);
    setNumberOfPages(data.total_pages);
  };

  useEffect(() => {
    fetchMovies();

    // eslint-disable-next-line
  }, [page, genreForURL]);

  return (
    <div>
      <span className="pageTitle">Movies</span>
      <Genres
        selectedGenres={selectedGenres}
        setSelectedGenres={setSelectedGenres}
        genres={genres}
        setGenres={setGenres}
        type="movie"
        setPage={setPage}
      />
      <div className="trending">
        {content &&
          content.map((c) => (
            <SingleContent
              key={c.id}
              id={c.id}
              poster={c.poster_path}
              title={c.title || c.name}
              date={c.first_air_date || c.release_date}
              media_type="movie"
              vote_average={c.vote_average}
            />
          ))}
      </div>
      {numOfPages > 1 && (
        <CustomPagination setPage={setPage} numOfPages={numOfPages} />
      )}
    </div>
  );
};

export default Movies;
