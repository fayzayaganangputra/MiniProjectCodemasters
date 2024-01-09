import { useState, useEffect} from 'react';
import React from 'react';
import { useParams } from "react-router-dom";
import Rating from './Rating';
const Read = () => {

let { id } = useParams();

    const [BookList, setBookList] = useState([]);
    const EndPoint = `https://bookapi.cm.hmw.lol/api/books/${id}`


    
    

    useEffect(() => {
        const fetchRead = async () => {
          const response = await fetch(EndPoint);
          const responseJson = await response.json();
          const databookList = responseJson;
          setBookList(databookList);
          console.log(BookList);

        };
        console.log("aku")
      fetchRead();
    }, []); 
    return (
      <>
        <div>
          <div className=" flex">
            <div className="flex items-center">
              <img
                className="rounded-xl h-[350px] w-[500px]"
                src={BookList["image_url"]}
                alt=""
              />
            </div>

            <div className="px-5 py-10">
              <div className="font-semibold font-poppins">
                {BookList["title"]}
              </div>
              <div className="font-poppins">{BookList.author?.name}</div>
              <div className="py-3">
                <Rating value={BookList["rating"]} />
              </div>
              <div>{BookList["synopsis"]}</div>
            </div>
          </div>
        </div>
      </>
    );
}

export default Read;