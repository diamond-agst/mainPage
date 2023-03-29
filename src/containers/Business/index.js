import React from "react";
import Bridge from "../../components/Bridge";
import Header from "../../components/Header";
import Provides from "../../components/Provides";
import Solution from "../../components/Solution";
import TestBlock from "../../components/TestBlock";
import Works from "../../components/Works";
import BookDemoCall from "../../components/BookDemoCall";
import Form from "../../components/Form";
import MainBlock from "../../components/MainBlock";
import Footer from "../../components/Footer";

function Business() {
  return (
    <div className="App">
      <Header buyCrypto/>
      <MainBlock />
      <Bridge />
      <Provides />
      <Works />
      <Solution />
      <TestBlock />
      <BookDemoCall />
      <Form />
      <Footer />
    </div>
  );
}

export default Business;
