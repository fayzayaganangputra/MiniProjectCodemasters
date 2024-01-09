import React from "react";

const Cta = () => {
    return (
      <div className="mx-24 bg-[#8170F2] h-60 mt-10 py-3 rounded-md">
        <div className="h-52 font-medium mx-auto w-1/2 py-10 text-center">
          <div className="text-[#FFFFFF] font-poppins text-2xl">
            Join our newsletter to get our latest recommendation!
          </div>
          <div className="py-4">
            <input
              className="w-60 h-8 border-2 border-black rounded-sm mr-3"
              type="text"
              placeholder="Enter your email"
            ></input>
            <button
              className="bg-[#F1F0FE] text-[#8170F2] w-20 h-8 rounded-sm"
              type="submit"
            >
              Submit
            </button>
          </div>
        </div>
      </div>
    );
}

export default Cta;