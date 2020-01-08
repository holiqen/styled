import React from "react";
import Hero from "../globals/Hero";
import homeImg from "../../images/homeBcg.jpeg";
import Banner from "../globals/Banner";
import { PrimaryBtn } from "../globals/Button";

const Header = () => {
  return (
    <Hero img={homeImg}>
      <Banner
        greeting="welcome to"
        title="beachwalk resort"
        text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc egestas dui eget nulla venenatis placerat. Etiam accumsan nulla nec eros rutrum, a varius magna sagittis."
      >
        <PrimaryBtn top="1rem">view details</PrimaryBtn>
      </Banner>
    </Hero>
  );
};

export default Header;
