import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Spinner from './Spinner';

const MovieDetails = () => {
    const [details, setDetails] = useState(null);
    const { id } = useParams(); // Extract the movie ID from the URL parameters

    useEffect(() => {
        const fetchDetails = async () => {
            try {
                const res = await fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=22abeadcfc022241b78e1520137e687e`);
                if (!res.ok) {
                    throw new Error(`HTTP error! status: ${res.status}`);
                }
                const data = await res.json();
                setDetails(data);
            } catch (error) {
                console.error('Error fetching movie details:', error);
            }
        };
        console.log(details);
        fetchDetails();
    }, [id]);

    if (!details) {
        return <div><Spinner/></div>;
    }

    return (
        <div class="bg-gradient-to-tl from-green-700 via-teal-800 to-cyan-900 text-white ">
            <div class="grid grid-cols-1 place-items-center py-10 lg:grid-cols-2 lg:px-[10rem] ">
                <div>
                    <img
                        class="w-[70%] aspect-[1/1] border mx-auto  rounded border-solid border-black "
                        src={`https://image.tmdb.org/t/p/w500${details.poster_path}`}
                        alt={details.title}
                    />

                </div>
                <div className=' text-justify px-[30px]'>
                    <h1 class="text-center text-lg font-semibold "> {details.title}</h1>
                    <p class="text-center text-sm text-gray-500 "> {details.release_date}</p>
                    <h1 className='mt-[1rem]'>{details.overview}</h1>
                </div>
            </div>
        </div>
    );
};


export default MovieDetails;
