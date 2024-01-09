import { useState } from "react";
import Picks from "../components/Picks";
import Rowbook from "../components/Rowbook";

function TopPicks() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="mx-24">
        <Picks />
        <Rowbook />
      </div>
    </>
  );
}

export default TopPicks;