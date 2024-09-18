import Banner from "../../components/Home/Banner";
import Features from "../../components/Home/Features";
import WhoWeAre from "../../components/Home/WhoWeAre";
import Services from "../../components/Home/Services";
import Store from "../../components/Home/Store";
import FreeQuote from "../../components/Home/FreeQuote";

const Home = () => {
  return (
    <>
      <Banner />
      <div className="py-20 lg:hidden">
        <Features />
      </div>
      <WhoWeAre />
      <Services />
      <Store />
      <FreeQuote />
    </>
  );
};

export default Home;
