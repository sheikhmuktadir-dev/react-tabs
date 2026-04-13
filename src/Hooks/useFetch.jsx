import axios from "axios";
import { useEffect, useState } from "react";

export default function useFetch({ tabUrl, movieUrl, tvUrl }) {
  const API_KEY = "8a14fca41fcf674821fd8fed713d44e5";

  const [error, setError] = useState("");

  //   loading
  const [tabLoading, setTabLoading] = useState(true);
  const [movieLoading, setMovieLoading] = useState(true);
  const [tvLoading, setTvLoading] = useState(true);

  //   data
  const [tabData, setTabData] = useState([]);
  const [movieData, setMovieData] = useState([]);
  const [tvData, setTvData] = useState([]);

  //   tab fetch
  useEffect(() => {
    if (!tabUrl) return;

    const tabHandler = async () => {
      setTabLoading(true);
      try {
        const res = await axios.get(tabUrl, {
          params: { api_key: API_KEY },
        });
        setTabData(res.data.genres);
      } catch (error) {
        setError("Something went wrong");
      } finally {
        setTabLoading(false);
      }
    };

    tabHandler();
  }, [tabUrl]);

  //   movie fetch
  useEffect(() => {
    if (!movieUrl) return;

    const tabHandler = async () => {
      setMovieLoading(true);
      try {
        const res = await axios.get(movieUrl, {
          params: { api_key: API_KEY },
        });
        setMovieData(res.data.results);
      } catch (error) {
        setError("Something went wrong");
      } finally {
        setMovieLoading(false);
      }
    };

    tabHandler();
  }, [movieUrl]);

  //   tv fetch
  useEffect(() => {
    if (!tvUrl) return;

    const tabHandler = async () => {
      setTvLoading(true);
      try {
        const res = await axios.get(tvUrl, {
          params: { api_key: API_KEY },
        });
        setTvData(res.data.results);
      } catch (error) {
        setError("Something went wrong");
      } finally {
        setTvLoading(false);
      }
    };

    tabHandler();
  }, [tvUrl]);

  return {
    error,
    tabLoading,
    movieLoading,
    tvLoading,
    tabData,
    movieData,
    tvData,
  };
}
