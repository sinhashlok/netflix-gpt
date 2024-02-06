import { useState } from "react";

const FAQ = () => {
  const [index, setIndex] = useState(-1);
  const handleToggle = (i) => {
    if (index === i) {
      setIndex(-1);
    } else {
      setIndex(i);
    }
  };
  return (
    <div className="flex flex-col mt-8">
      <div className="bg-[#414141] mb-2">
        <div
          className="flex justify-between items-center p-4 px-8 cursor-pointer hover:bg-[#303030] transition-all duration-300"
          onClick={() => handleToggle(0)}
        >
          <div className="text-2xl">What is Netflix?</div>
          <div className="text-5xl">{index === 0 ? "x" : "+"}</div>
        </div>
        {index === 0 && (
          <div className="border-t-2 border-black">
            <div className="text-2xl p-4 px-8">
              Netflix is a streaming service that offers a wide variety of
              award-winning TV shows, movies, anime, documentaries and more – on
              thousands of internet-connected devices. You can watch as much as
              you want, whenever you want, without a single ad – all for one low
              monthly price. There's always something new to discover, and new
              TV shows and movies are added every week!
            </div>
          </div>
        )}
      </div>
      <div className="bg-[#414141] mb-2">
        <div
          className="flex justify-between items-center p-4 px-8 cursor-pointer hover:bg-[#303030] transition-all duration-300"
          onClick={() => handleToggle(1)}
        >
          <div className="text-2xl">How much does Netflix cost?</div>
          <div className="text-5xl">{index === 1 ? "x" : "+"}</div>
        </div>
        {index === 1 && (
          <div className="border-t-2 border-black">
            <div className="text-2xl p-4 px-8">
              Watch Netflix on your smartphone, tablet, Smart TV, laptop, or
              streaming device, all for one fixed monthly fee. Plans range from
              ₹149 to ₹649 a month. No extra costs, no contracts.
            </div>
          </div>
        )}
      </div>
      <div className="bg-[#414141] mb-2">
        <div
          className="flex justify-between items-center p-4 px-8 cursor-pointer hover:bg-[#303030] transition-all duration-300"
          onClick={() => handleToggle(2)}
        >
          <div className="text-2xl">Where can I watch?</div>
          <div className="text-5xl">{index === 2 ? "x" : "+"}</div>
        </div>
        {index === 2 && (
          <div className="border-t-2 border-black">
            <div className="text-2xl p-4 px-8">
              Watch anywhere, anytime. Sign in with your Netflix account to
              watch instantly on the web at netflix.com from your personal
              computer or on any internet-connected device that offers the
              Netflix app, including smart TVs, smartphones, tablets, streaming
              media players and game consoles. You can also download your
              favourite shows with the iOS, Android, or Windows 10 app. Use
              downloads to watch while you're on the go and without an internet
              connection. Take Netflix with you anywhere.
            </div>
          </div>
        )}
      </div>
      <div className="bg-[#414141] mb-2">
        <div
          className="flex justify-between items-center p-4 px-8 cursor-pointer hover:bg-[#303030] transition-all duration-300"
          onClick={() => handleToggle(3)}
        >
          <div className="text-2xl">How do I cancel?</div>
          <div className="text-5xl">{index === 3 ? "x" : "+"}</div>
        </div>
        {index === 3 && (
          <div className="border-t-2 border-black">
            <div className="text-2xl p-4 px-8">
              Netflix is flexible. There are no annoying contracts and no
              commitments. You can easily cancel your account online in two
              clicks. There are no cancellation fees – start or stop your
              account anytime.
            </div>
          </div>
        )}
      </div>
      <div className="bg-[#414141] mb-2">
        <div
          className="flex justify-between items-center p-4 px-8 cursor-pointer hover:bg-[#303030] transition-all duration-300"
          onClick={() => handleToggle(4)}
        >
          <div className="text-2xl">What can I watch on Netflix?</div>
          <div className="text-5xl">{index === 4 ? "x" : "+"}</div>
        </div>
        {index === 4 && (
          <div className="border-t-2 border-black">
            <div className="text-2xl p-4 px-8">
              Netflix has an extensive library of feature films, documentaries,
              TV shows, anime, award-winning Netflix originals, and more. Watch
              as much as you want, anytime you want.
            </div>
          </div>
        )}
      </div>
      <div className="bg-[#414141] mb-2">
        <div
          className="flex justify-between items-center p-4 px-8 cursor-pointer hover:bg-[#303030] transition-all duration-300"
          onClick={() => handleToggle(5)}
        >
          <div className="text-2xl">Is Netflix good for kids?</div>
          <div className="text-5xl">{index === 5 ? "x" : "+"}</div>
        </div>
        {index === 5 && (
          <div className="border-t-2 border-black">
            <div className="text-2xl p-4 px-8">
              The Netflix Kids experience is included in your membership to give
              parents control while kids enjoy family-friendly TV shows and
              films in their own space. Kids profiles come with PIN-protected
              parental controls that let you restrict the maturity rating of
              content kids can watch and block specific titles you don’t want
              kids to see.
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default FAQ;
