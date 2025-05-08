// import React from 'react';
// import { useLoaderData } from 'react-router';

// const Card = () => {
//   const data = useLoaderData();
//   console.log(data);

//   return (
//    <div className='w-11/12 mx-auto'>
//      <div className='grid grid-cols-4 my-3 gap-3 '>
//       {data.map((dataElement, index) => (
//        <div className="card bg-base-100 w-[100px]  lg:w-[250px] md:w-[150px] h-30 md:h-60 mx-auto shadow-sm">
//        <figure className="py-10 lg:py-4">
//          <img 
//            src={dataElement.icon}
//            alt="Shoes"
//            className="rounded-xl h-12" />
//        </figure>
//        <div className="card-body items-center text-center">
//          <h2 className="card-title">{dataElement.organization}</h2>
//          <p className='font-bold md:text-xs'>{dataElement.bill_type} Service</p>
//          <div className="card-actions">
//            <button className="btn btn-sm btn-primary">Explore More</button>
//          </div>
//        </div>
//      </div>
//       ))}
//     </div>
//    </div>
//   );
// };

// export default Card;




import React from 'react';
import { useLoaderData } from 'react-router';

const Card = () => {
  const data = useLoaderData();
  console.log(data);

  return (
    <div className='w-11/12 mx-auto'>
      {/* responsive grid: mobile (1 col), md (2 col), lg (4 col) */}
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 my-3 gap-3'>
        {data.map((dataElement, index) => (
          <div
            key={index}
            className="card bg-base-100 
              w-full md:w-[220px] lg:w-[250px]
              mx-auto shadow-sm"
          >
            <figure className="py-6 sm:py-8 lg:py-4">
              <img
                src={dataElement.icon}
                alt="icon"
                className="rounded-xl h-10 sm:h-12" // responsive image height
              />
            </figure>
            <div className="card-body items-center text-center">
              <h2 className="card-title text-sm sm:text-base">
                {dataElement.organization}
              </h2>
              <p className='font-bold text-xs sm:text-sm'>
                {dataElement.bill_type} Service
              </p>
              <div className="card-actions mt-2">
                <button className="btn btn-xs sm:btn-sm btn-primary">
                  Explore More
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Card;

