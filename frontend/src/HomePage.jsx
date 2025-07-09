import { useState } from "react";
import "./HomePage.css";
import Header from "./components/header/header.jsx";

function HomePage() {
  const [count, setCount] = useState(0);

  return (
    <div className="bg-blue-300">
      <Header />
      <div
        className="h-1000
      "
      ></div>
    </div>
  );
}

export default HomePage;
