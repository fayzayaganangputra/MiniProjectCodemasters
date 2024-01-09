import { Link } from "react-router-dom";
import Randomku from "./Randomku";
import { useEffect, useState } from "react";
import Rating from "./Rating";

const Kolbook = () => {
  const [BookList, setBookList] = useState([]);
  const EndPoint = "https://bookapi.cm.hmw.lol/api/books/";

    const index1 = Randomku();
    const index2 = Randomku();
    const index3 = Randomku();
    const index4 = Randomku();

    const fetchKolbook = async () => {
      const response = await fetch(EndPoint);
      const responseJson = await response.json();
      const databookList = responseJson.data;
      setBookList(databookList);

      console.log(BookList)
    };

    useEffect(() => {
      fetchKolbook();
    }, []); 



    return (
      <>
        {BookList.length > 0 ? (
          <div className=" grid grid-cols-2 py-10 gap-10">
            <div className=" flex">
              <div className="flex items-center">
                <img
                  className="rounded-sm h-[210px] w-[346px]"
                  src={BookList[index1]["image_url"]}
                  alt=""
                />
              </div>

              <div className="px-2">
                <div className="font-semibold font-poppins line-clamp-2">
                  {BookList[index1]["title"]}
                </div>
                <div className="font-poppins">
                  {BookList[index1]["author"]["name"]}
                </div>
                <div className="py-3 flex flex-row font-poppins font-medium text-xl">
                  {Math.round(BookList[index1]["rating"])}
                  <span className="ml-2">
                    <Rating value={BookList[index1]["rating"]} />
                  </span>
                </div>
                <div className="line-clamp-2">
                  {BookList[index1]["synopsis"]}
                </div>
                <div className="mt-3">
                  <Link to={`/books/${BookList[index1].id}`}>
                    <button className="border-2 border-[#8170F2] w-44 h-9 rounded-md">
                      Read Book
                    </button>
                  </Link>
                </div>
              </div>
            </div>

            <div className=" flex ">
              <div className="flex items-center">
                <img
                  className="h-[210px] w-[346px] rounded-sm"
                  src={BookList[index2]["image_url"]}
                  alt=""
                />
              </div>
              <div className="px-2">
                <div className="font-semibold font-poppins line-clamp-2">
                  {BookList[index2]["title"]}
                </div>
                <div>{BookList[index2]["author"]["name"]}</div>
                <div className="py-3 flex flex-row font-poppins font-medium text-xl">
                  {Math.round(BookList[index2]["rating"])}
                  <span className="ml-2">
                    <Rating value={BookList[index2]["rating"]} />
                  </span>
                </div>
                <div className="line-clamp-2">
                  {BookList[index2]["synopsis"]}
                </div>
                <div className="mt-3">
                  <Link to={`/books/${BookList[index2].id}`}>
                    <button className="border-2 border-[#8170F2] w-44 h-9 rounded-md">
                      Read Book
                    </button>
                  </Link>
                </div>
              </div>
            </div>

            <div className=" flex">
              <div className="flex items-center">
                <img
                  className="h-[210px] w-[346px] rounded-sm"
                  src={BookList[index3]["image_url"]}
                  alt=""
                />
              </div>

              <div className="px-2">
                <div className="font-semibold font-poppins line-clamp-2">
                  {BookList[index3]["title"]}
                </div>
                <div>{BookList[index3]["author"]["name"]}</div>
                <div className="py-3 flex flex-row font-poppins font-medium text-xl">
                  {Math.round(BookList[index3]["rating"])}
                  <span className="ml-2">
                    <Rating value={BookList[index3]["rating"]} />
                  </span>
                </div>
                <div className="line-clamp-2">
                  {BookList[index3]["synopsis"]}
                </div>
                <div className="mt-3">
                  <Link to={`/books/${BookList[index3].id}`}>
                    <button className="border-2 border-[#8170F2] w-44 h-9 rounded-md">
                      Read Book
                    </button>
                  </Link>
                </div>
              </div>
            </div>

            <div className="flex">
              <div className="flex items-center">
                <img
                  className="h-[210px] w-[346px] rounded-sm"
                  src={BookList[index4]["image_url"]}
                  alt=""
                />
              </div>

              <div className="px-2">
                <div className="font-semibold font-poppins line-clamp-2">
                  {BookList[index4]["title"]}
                </div>
                <div>{BookList[index4]["author"]["name"]}</div>
                <div className="py-3 flex flex-row font-poppins font-medium text-xl">
                  {Math.round(BookList[index4]["rating"])}
                  <span className="ml-2">
                    <Rating value={BookList[index4]["rating"]} />
                  </span>
                </div>
                <div className="line-clamp-2">
                  {BookList[index4]["synopsis"]}
                </div>
                <div className="mt-3">
                  <Link to={`/books/${BookList[index4].id}`}>
                    <button className="border-2 border-[#8170F2] w-44 h-9 rounded-md">
                      Read Book
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <h1> gak ada isi</h1>
        )}
      </>
    );
}

export default Kolbook;