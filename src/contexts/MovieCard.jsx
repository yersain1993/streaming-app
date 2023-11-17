import { useNavigate } from "react-router-dom";

const MovieCard = ({ data }) => {
    const navigate = useNavigate();

    const handleClickNavigate = () => {
      navigate(`contentDetail/${data.id}`, { state: { data } });
    };
  return (
    <div className="">
      <button className="flex justify-evenly items-center bg-sky-800 px-5 py-3 gap-10 rounded-lg w-[300px] h-32 hover:scale-125 duration-700 hover:shadow-sky-500 hover:shadow-md"
              onClick={handleClickNavigate}
      >
        <section className="w-32">
          <img src={data.imgURL} alt={data.name} className="w-20" />
        </section>
        <section className="text-left text-sky-200 flex flex-col justify-center">
          <h1 className="font-bold text-lg">Title: {data.name}</h1>
          <h2 className="font-smibold">Year: {data.year}</h2>
        </section>
      </button>
    </div>
  );
};

export default MovieCard;
