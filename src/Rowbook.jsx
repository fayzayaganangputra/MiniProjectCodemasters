
import Randomku from "./Randomku";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Rating from "./Rating";

const Rowbook = () => {

  const [BookList, setBookList] = useState([]);
  const EndPoint = "https://bookapi.cm.hmw.lol/api/books/";

  const index1 = Randomku();
  const index2 = Randomku();
  const index3 = Randomku();
  const index4 = Randomku();

  const fetchRowbook = async () => {
    const response = await fetch(EndPoint);
    const responseJson = await response.json();
    const databookList = responseJson.data;
    setBookList(databookList);
  };

  useEffect(() => {
    fetchRowbook();
  }, []); 


    return (
      <>
        {BookList.length > 0 ? (
          <div className="grid grid-cols-4 py-10">
            <div>
              <div className="items-center">
                <img
                  className="h-[290px] w-[245px] rounded-sm"
                  src={BookList[index1]["image_url"]}
                  alt="Diluar jangkauan"
                />
              </div>
              <div className="max-w-56 h-36">
                <div className="font-poppins font-semibold text-2xl line-clamp-2">
                  {BookList[index1]["title"]}
                </div>
                <div className="font-poppins py-1">
                  {BookList[index1]["author"]["name"]}
                </div>
                <div className="font-poppins">
                  <Rating value={BookList[index1]["rating"]} />
                </div>
              </div>
              <div>
                <Link to={`/books/${BookList[index1].id}`}>
                  <button className="border-2 border-[#8170F2] w-44 h-9 rounded-md">
                    Read Book
                  </button>
                </Link>
              </div>
            </div>

            <div>
              <div>
                <img
                  className="h-[290px] w-[230px]"
                  src={BookList[index2]["image_url"]}
                  alt="Diluar jangkauan"
                />
              </div>
              <div className="max-w-56 h-36">
                <div className="font-poppins font-semibold text-2xl line-clamp-2">
                  {BookList[index2]["title"]}
                </div>
                <div className="font-poppins py-1">
                  {BookList[index2]["author"]["name"]}
                </div>
                <div className="font-poppins">
                  <Rating value={BookList[index2]["rating"]} />
                </div>
              </div>
              <div>
                <Link to={`/books/${BookList[index2].id}`}>
                  <button className="border-2 border-[#8170F2] w-44 h-9 rounded-md">
                    Read Book
                  </button>
                </Link>
              </div>
            </div>

            <div>
              <div>
                <img
                  className="h-[290px] w-[215px]"
                  src={BookList[index3]["image_url"]}
                  alt="Diluar jangkauan"
                />
              </div>
              <div className="max-w-56 h-36">
                <div className="font-poppins font-semibold text-2xl line-clamp-2">
                  {BookList[index3]["title"]}
                </div>
                <div className="font-poppins py-1">
                  {BookList[index3]["author"]["name"]}
                </div>
                <div className="font-poppins">
                  <Rating value={BookList[index3]["rating"]} />
                </div>
              </div>
              <div>
                <Link to={`/books/${BookList[index3].id}`}>
                  <button className="border-2 border-[#8170F2] w-44 h-9 rounded-md">
                    Read Book
                  </button>
                </Link>
              </div>
            </div>

            <div>
              <div>
                <img
                  className="h-[290px] w-[245px]"
                  src={BookList[index4]["image_url"]}
                  alt="Diluar jangkauan"
                />
              </div>
              <div className="max-w-56 h-36">
                <div className="font-poppins font-semibold text-2xl line-clamp-2">
                  {BookList[index4]["title"]}
                </div>
                <div className="font-poppins py-1">
                  {BookList[index4]["author"]["name"]}
                </div>
                <div className="font-poppins">
                  <Rating value={BookList[index4]["rating"]} />
                </div>
              </div>
              <div>
                <Link to={`/books/${BookList[index4].id}`}>
                  <button className="border-2 border-[#8170F2] w-44 h-9 rounded-md">
                    Read Book
                  </button>
                </Link>
              </div>
            </div>
          </div>
        ) : (
          <h1> gak ada isi</h1>
        )}
      </>
    );
}

export default Rowbook;