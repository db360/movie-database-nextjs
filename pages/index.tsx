import type { NextPage } from "next";
//Components
import Header from "../components/Header";

const Home: NextPage = () => {
  return (
    <main className="relative h-screen overflow-y-scroll">
      <Header />
    </main>
  )
};

export default Home;
