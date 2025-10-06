import { useState } from "react";
import Footer from "./component/Footer";
import Header from "./component/Header";

function App() {
  return (
    <div className="App">
      <Header />
      <main className="content">
        <div className="content-inner"></div>
      </main>
      <Footer />
    </div>
  );
}

export default App;
