import { useState } from "react";
import type { NextPage } from "next";
//FetchHook
import { useFetchMovies } from "../api/fetchHooks";
//Config
import { IMAGE_BASE_URL, BACKDROP_SIZE, POSTER_SIZE } from "../config";
//Components
import Card from "../components/Card";
import Grid from "../components/Grid";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Spinner from "../components/Spinner";

const Home: NextPage = () => {
  const [query, setQuery] = useState("");

  const { data, fetchNextPage, isLoading, isFetching, error } =
    useFetchMovies(query);
  // console.log(data);
  return (
    <main className="relative h-screen overflow-y-scroll">
      <Header setQuery={setQuery} />
      {!query && data && data.pages ? (
        <Hero
          imgUrl={
            data?.pages[0].results[0]?.backdrop_path
              ? IMAGE_BASE_URL +
                BACKDROP_SIZE +
                data.pages[0].results[0].backdrop_path
              : "/no_image.jpg"
          }
          title={data?.pages[0].results[0].title}
          text={data?.pages[0].results[0].overview}
        />
      ) : null}
      <Grid
        className="p-4 max-w-7xl m-auto"
        title={
          query
            ? `Search Results: ${data?.pages[0].total_results}`
            : "Popular Movies"
        }
      >
        {data && data.pages
          ? data.pages.map(page =>
              page.results.map(movie => (
                <div key={movie.id}> {movie.original_title}</div>
              ))
            )
          : null
          }
      </Grid>
      <Card />
      <Spinner />
    </main>
  );
};

export default Home;
