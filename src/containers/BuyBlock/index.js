import React from "react";
import Header from "../../components/Header";
import FrameBlock from "../../components/FrameBlock";
import FastBlock from "../../components/FastBlock";
import CanDoBlock from "../../components/CanDoBlock";
import Portfolio from "../../components/Portfolio";
import Community from "../../components/Community";
import Stories from "../../components/Stories";
import Jorney from "../../components/Jorney";
import Footer from "../../components/Footer";


function BuyBlock() {
  return (
    <div className="App">
      <Header />
      <FrameBlock />
      <FastBlock/>
      <CanDoBlock/>
      <Portfolio/>
      <Community/>
      <Stories/>
      <Jorney/>
      <Footer />
    </div>
  );
}

export default BuyBlock;
