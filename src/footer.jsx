import React from "react";

const Footer = () => {
    return (
      <div className="mx-24 flex flex-row justify-between h-48 mt-5 items-center py-0">
        <div>
          <div className="flex items-center">
            <div>
              <img
                className="w-12 h-12"
                src="/src/assets/Group 3.svg"
                alt="Mana Gambarmu"
              />
            </div>
            <div className="flex flex-col px-2">
              <div className="text-4xl font-bold font-poppins">Bookoe</div>
              <div className="text-sm">Rekomendasi Bukumu</div>
            </div>
          </div>
        </div>

        <div className="w-[400px]">
          <div>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt.
          </div>
        </div>
      
      </div>
    );
}

export default Footer;