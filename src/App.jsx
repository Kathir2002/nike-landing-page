import React, { useState } from "react";
import Hero from "./sections/hero";
import PopularProducts from "./sections/popularProducts";
import SuperQuality from "./sections/superQuality";
import Services from "./sections/services";
import SpecialOffer from "./sections/specialOffer";
import CustomerReviews from "./sections/customerReviews";
import Subscribe from "./sections/subscribe";
import Footer from "./sections/footer";
import NavBar from "./components/navBar";

const App = () => {
  const [isHamburgerPressed, setIsHamburgerPressed] = useState(false);
  return (
    <main className="relative ">
      <NavBar
        isHamburgerPressed={isHamburgerPressed}
        setIsHamburgerPressed={setIsHamburgerPressed}
      />
      <section
        onClick={() => setIsHamburgerPressed(false)}
        className="xl:padding-l wide:padding-r padding-b"
      >
        <Hero />
      </section>
      <section className="padding">
        <PopularProducts />
      </section>
      <section className="padding">
        <SuperQuality />
      </section>
      <section className="padding-x py-10">
        <Services />
      </section>
      <section className="padding">
        <SpecialOffer />
      </section>
      <section className="bg-pale-blue padding">
        <CustomerReviews />
      </section>
      <section className="padding-x sm:py-32 py-16 w-full">
        <Subscribe />
      </section>
      <section className="padding-x padding-t bg-black pb-8">
        <Footer />
      </section>
    </main>
  );
};

export default App;
