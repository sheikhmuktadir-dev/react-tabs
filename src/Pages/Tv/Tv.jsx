import TabFilter from "../../Components/TabFilter/TabFilter";
import { useState } from "react";
import useFetch from "../../Hooks/useFetch";
import Style from "./tv.module.css";

export default function Tv() {
  const [tab, tabActive] = useState("all");

  const url =
    tab === "all"
      ? "https://api.themoviedb.org/3/discover/tv"
      : `https://api.themoviedb.org/3/discover/tv?with_genres=${tab}`;

  const { error, tvLoading, tvData } = useFetch({ tvUrl: url });

  if (error) return <p>{error}</p>;
  if (tvLoading) return <p>Loading...</p>;
  if (tvData.length === 0) return <p>No Tab Data</p>;

  return (
    <div>
      <TabFilter
        tab={tab}
        tabActive={tabActive}
        tabUrlMain={`https://api.themoviedb.org/3/genre/tv/list`}
      />

      <div className={Style.tvGrid}>
        {tvData.map((tvList) => {
          return (
            <div className={Style.tvCard} key={tvList.id}>
              <img
                src={`https://image.tmdb.org/t/p/w500${tvList.poster_path}`}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}
