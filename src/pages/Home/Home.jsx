import Banner from "../../components/Home/Banner";
import FreeQuote from "../../components/Home/FreeQuote";
import Services from "../../components/Home/Services";
import Store from "../../components/Home/Store";
import WhoWeAre from "../../components/Home/WhoWeAre";

const Home = () => {
  return (
    <>
      <Banner />
      <WhoWeAre />
      <Services />
      <Store />
      <FreeQuote />
    </>
  );
};

export default Home;
