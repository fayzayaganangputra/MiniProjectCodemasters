import { useState } from "react";
import Picks from "./Picks";
import Rowbook from "./Rowbook";

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