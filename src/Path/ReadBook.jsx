import { useState } from "react";
import Read from "../components/Read";

function ReadBook() {
    
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="mx-24">
        <Read />
      </div>
    </>
  );
}

export default ReadBook;
