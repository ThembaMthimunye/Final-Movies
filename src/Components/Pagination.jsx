import React from 'react';
import PropTypes from 'prop-types';

//  import '../index.css'

 const Pagination = ({ totalPosts, postsPerPage, onPageChange }) => {
     // Calculate total number of pages
     const totalPages = Math.ceil(totalPosts / postsPerPage);
      //Create an array of page numbers
     const pages = Array.from({ length: totalPages  }, (_, i) => i + 1);

     return (
         <div   className="flex justify-center">
             {pages.map((page) => (
                <>
                
                 <button 
                     className=" text-blue-700 text-1xl bg-[ FFFFFF]  border-[1px] border-gray-500  text-white font-semibold rounded-lg shadow-md hover:bg-gradient-to-tl from-green-700 via-teal-800 to-cyan-900 focus:outline-none focus:ring-2 focus:ring-blue-300 w-[3rem] h-[2.5rem] mt-20 ml-3 "
                    //  px-4 py-2 bg-[#7379FF] text-white font-semibold rounded-lg shadow-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-300 w-[6rem] h-[3rem] ml-[67rem] mt-[-3rem]
                     key={page}
                     onClick={() => onPageChange(page)}
                     aria-label={`Go to page ${page}`}
                 >
                     {page}
                 </button>
                </>
                 
                 
             ))}
         </div>
     );
 };

 Pagination.propTypes = {
     totalPosts: PropTypes.number.isRequired,
     postsPerPage: PropTypes.number.isRequired,
      onPageChange: PropTypes.func.isRequired,
  };

  export default Pagination;
// import React from 'react'

// const Pagination = (totalPosts, postsPerPage) => {
//     let pages=[];
//     for(let i=1 ;i<=Math.ceil(totalPosts/postsPerPage) ;i++)
//     {
//         pages.push(i);
//     }
//   return (
//     <div>
//       {
//         pages.map((page,index)=>{
//             <button
//                                   className="h-[10rem] w-[20rem]"
//                                  key={page}
//                                 //  onClick={() => onPageChange(page)}
//                                 //   aria-label={`Go to page ${page}`}
//                                 // key={index}
//                               >
//                                  {page}
//                               </button>

//         })
//       }
//     </div>
//   )
// }

// export default Pagination



