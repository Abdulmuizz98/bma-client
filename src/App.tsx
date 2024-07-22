// import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import Checkout from "./pages/Checkout";
import GuestLayout from "./layouts/guest-layout";

function App() {
  // const [count, setCount] = useState(0);

  return (
    <GuestLayout>
    <BrowserRouter>
      <Routes>
       
          <Route path="/" element={ <Home />} />
          <Route path="/checkout" element={ <Checkout />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
      </Routes>
    </BrowserRouter>
    </GuestLayout>
  );
}

export default App;
