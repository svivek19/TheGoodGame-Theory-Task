import React from "react";

const Card = ({ data }) => {
  return (
    <div className="w-5/6 mx-auto grid grid-cols-3 gap-4">
      {data.map((beer, index) => (
        <div className="p-4" key={index}>
          <div className="w-5/6 rounded overflow-hidden shadow-lg">
            <img
              className="w-full h-64 object-cover"
              src={beer.image_url}
              alt="Sunset"
            />
            <div className="px-6 py-4">
              <div className="font-bold text-xl mb-2">
                {beer.name.length > 20
                  ? beer.name.slice(0, 20) + "..."
                  : beer.name}
              </div>
              <p className="text-gray-700 text-justify">
                {beer.description.length > 30
                  ? beer.description.slice(0, 15) + "..."
                  : beer.description}
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Card;
