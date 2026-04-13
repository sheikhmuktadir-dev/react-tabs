import TabFilter from "../../Components/TabFilter/TabFilter";
import { useState } from "react";
import useFetch from "../../Hooks/useFetch";
import Style from "./movie.module.css";

export default function Movie() {
  const [tab, tabActive] = useState("all");

  const url =
    tab === "all"
      ? "https://api.themoviedb.org/3/discover/movie"
      : `https://api.themoviedb.org/3/discover/movie?with_genres=${tab}`;

  const { error, movieLoading, movieData } = useFetch({ movieUrl: url });

  if (error) return <p>{error}</p>;
  if (movieLoading) return <p>Loading...</p>;
  if (movieData.length === 0) return <p>No Tab Data</p>;

  return (
    <div>
      <TabFilter
        tab={tab}
        tabActive={tabActive}
        tabUrlMain={`https://api.themoviedb.org/3/genre/movie/list`}
      />

      <div className={Style.movieGrid}>
        {movieData.map((movieList) => {
          return (
            <div className={Style.movieCard} key={movieList.id}>
              <img
                src={`https://image.tmdb.org/t/p/w500${movieList.poster_path}`}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}
