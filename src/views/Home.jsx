import GenreCard from '../contexts/GenreCard';
import movieData from '../utilities/movieData.json';

const Home = () => {
  return (
    <div>
      <article className="flex flex-wrap justify-around gap-4 mt-6 relative">
        {movieData.map((data) => (
          <GenreCard key={data.id} data={data} />
        ))}
      </article>
    </div>
  );
};

export default Home;
