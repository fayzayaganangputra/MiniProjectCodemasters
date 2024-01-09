import React, { useEffect, useState } from "react";
import Randomku from "./Randomku";
import { Link } from "react-router-dom";
import Rating from "./Rating";

const Hero = () => {
const [BookList, setBookList] = useState([])
const EndPoint = "https://bookapi.cm.hmw.lol/api/books/"

const index1 = Randomku()
const index2 = Randomku()
const index3 = Randomku()



const fetchHero = async () => {
  const response = await fetch(EndPoint)
  const responseJson = await response.json()
  const databookList = responseJson.data
  setBookList(databookList)

}

useEffect(() => {
  fetchHero()
}, []); 



    return (
      <>
        {BookList.length > 0 ? (
          <div className="bg-[#F1F0FE] grid grid-cols-2 items-center rounded-lg ">
            <div className="px-14 py-16">
              <div className=" text-md font-semibold text-[#8170F2] font-poppins py-5">
                MUST READ
              </div>
              <div className="text-5xl font-bold font-poppins line-clamp-3 ">
                {BookList[index1]["title"]}
              </div>
              <div className="font-poppins font-medium py-5 flex flex-row">
                {BookList[index1]["author"]["name"]}{" "}
                <span className="pl-5">
                  <Rating value={BookList[index1]["rating"]} />
                </span>
              </div>

              <div className="font-poppins">{BookList[10]["synopsis"]}</div>
              <div className="flex flex-row mt-5">
                <Link to={`/books/${BookList[index1].id}`}>
                  <button className="bg-[#8170F2] w-28 h-9 rounded-md mr-5">
                    Read Book
                  </button>
                </Link>
                <button className="border-2 border-[#8170F2] w-56 h-9 rounded-md">
                  See All Recomendations
                </button>
              </div>
            </div>
            <div className="relative flex justify-center items-center">
              <img
                className="absolute w-[100px] h-[160px] right-[110px] rounded-lg"
                src={BookList[11]["image_url"]}
                alt="Gak ada tuch"
              />
              <img
                className="absolute w-[130px] h-[190px] right-[145px] rounded-lg"
                src={BookList[10]["image_url"]}
                alt="Gak ada tuch"
              />
              <img
                className="absolute w-[150px] h-[220px] rounded-lg"
                src={BookList[15]["image_url"]}
                alt="Gak ada tuch"
              />
            </div>
          </div>
        ) : (
          <h1> gak ada isi</h1>
        )}
      </>
    );
}

export default Hero;