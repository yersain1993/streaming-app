import movieData from '../utilities/movieData.json';
import MovieCard from '../contexts/MovieCard';
import { useParams } from 'react-router-dom';

const ContentCategory = () => {
  const { id } = useParams();
  
  const result = movieData.filter((data) => data.id == id)[0].movies;
  console.log(result,id)

  return (
    <div>
      <article className="flex flex-col justify-center items-center gap-8">
        {result.map((movie) => (
          <MovieCard key={movie.id} data={movie}/>
        ))}
      </article>
    </div>
  );
};

export default ContentCategory;
