import { useNavigate } from 'react-router-dom';

const GenreCard = ({ data }) => {
  const navigate = useNavigate();

  const handleClickNavigate = () => {
    navigate(`contentCategory/${data.id}`, { state: { data } });
  };

  return (
    <div className="flex flex-wrap justify-around">
      <article className="w-48 py-2 px-2 bg-sky-900 rounded-md">
        <header>
          <img src={data?.imageURL} alt="genre" className="w-48 h-44 rounded-t-md" />
        </header>
        <section className="bg-sky-200 flex flex-col justify-center px-5 py-1 rounded-b-md">
          <h2 className="text-lg font-semibold text-sky-900">{data?.genre}</h2>
          <hr className="border border-sky-900" />
          <button
            className="mt-2 mb-2 bg-sky-800 text-sky-200 rounded-lg hover:bg-sky-200 hover:text-sky-800 duration-700"
            onClick={handleClickNavigate}
          >
            SHOW ME
          </button>
        </section>
      </article>
    </div>
  );
};

export default GenreCard;
