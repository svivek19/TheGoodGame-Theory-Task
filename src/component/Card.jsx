import React from "react";

const Card = ({ data }) => {
  if (data?.length === 0) {
    return <div className="mx-auto text-center">No products found</div>;
  }

  return (
    <div className="mx-auto w-5/6 grid grid-cols-1 md:grid-cols-3 md:gap-4">
      {data?.map((beer, index) => (
        <div className="p-4" key={index}>
          <div className="md:w-5/6 rounded overflow-hidden shadow-lg">
            <img
              className="w-full h-64 object-cover"
              src={beer.image_url}
              alt="Beer"
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
