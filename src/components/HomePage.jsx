// Components
import Header from "./Header";
import FAQ from "./FAQ";
import Footer from "./Footer";
// Utils
import {
  NETFLIX_BACKGROUND,
  NETFLIX_CHILDREN_AD,
  NETFLIX_PHONE_AD,
} from "../utils/constant";

const HomePage = () => {
  return (
    <div>
      <Header />
      <div>
        <img
          src={NETFLIX_BACKGROUND}
          alt="netflix-background"
          className="bg-no-repeat bg-cover w-full h-full brightness-50"
        />
      </div>
      <div className="absolute w-full text-white top-[40%]">
        <div className="text-center">
          <div className="text-5xl font-black mb-4">
            Unlimited movies, TV shows and more
          </div>
          <div className="text-2xl mb-4">Watch anywhere. Cancel anytime.</div>
          <div className="text-xl mb-4">
            Ready to watch? Enter your email to create or restart your
            membership.
          </div>
        </div>
        <div className="absolute w-full text-white bg-black mt-48 justify-center">
          <div className="flex justify-between py-24 px-48 border-t-8 border-b-8 border-slate-700">
            <img src={NETFLIX_PHONE_AD} alt="netflix-phone-ad" />
            <div className="mt-40">
              <div className="text-5xl font-black mb-4 leading-tight">
                Download your shows to watch offline
              </div>
              <div className="text-2xl">
                Save your favourites easily and always have something to watch.
              </div>
            </div>
          </div>
          <div className="flex justify-between py-24 px-48 border-b-8 border-slate-700">
            <div className="mt-40">
              <div className="text-5xl font-black mb-4 leading-tight">
                Create profiles for kids
              </div>
              <div className="text-2xl">
                Send children on adventures with their favourite characters in a
                space made just for them—free with your membership.
              </div>
            </div>
            <img src={NETFLIX_CHILDREN_AD} alt="netflix-phone-ad" />
          </div>
          <div className="flex py-24 px-48 border-b-8 border-slate-700">
            <div className="w-full">
              <div className="text-5xl font-bold mb-4 leading-tight text-center">
                Frequently Asked Questions
              </div>
              <FAQ />
            </div>
          </div>
          <div>
            <Footer />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
