import React, { useEffect } from "react";
import Business from "./containers/Business";
import BuyBlock from "./containers/BuyBlock"
import { Routes, Route } from 'react-router-dom'

function App() {
  return(
    <div>
      <Routes>
        <Route path="/" element={<Business/>} exact />
        <Route path="/personal" element={<BuyBlock/>} exact />
      </Routes>
    </div>
  )
}

export default App;
