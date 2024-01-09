import React from 'react';

const FooterBawah = () => {
  return (
    <div className="grid grid-cols-2 mx-24 ">
      <div>
        <p className="text-black text-sm font-poppins mb-4">
          Copyright © 2023 Codemasters.id | All Rights Reserved{" "}
        </p>
      </div>

        <div className="ml-64 pr-0 flex flex-row mb-4 ">
          <img className="px-3" src="./src/assets/Facebook.png"></img>
          <img className="px-3" src="./src/assets/Twitter.png"></img>
          <img className="px-3" src="./src/assets/Instagram.png"></img>
          <img className="px-3" src="./src/assets/LinkedIn.png"></img>
          <img className="px-3" src="./src/assets/Youtube.png"></img>
        
      </div>
    </div>
  );
};
export default FooterBawah;
