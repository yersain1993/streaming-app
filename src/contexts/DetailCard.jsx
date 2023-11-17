
const DetailCard = ({ data }) => {
  return (
    <div>
        <article className="flex justify-evenly items-center bg-sky-900 px- py-3 gap-7 rounded-lg w-[600px]">
          <span>
              <section className="ml-2 flex items-center justify-center">
                <img src={data.imgURL} alt={data.name} className="h-[300px] object-contain" />
              </section>
              <section className="text-left text-sky-200 flex flex-col justify-center px-10">
                <p className="font-light">
                    Title:
                </p>  
                <h1 className="font-bold text-lg">
                  {data.name}
                </h1>
                <h2 className="font-smibold">
                  <p>
                    Year:
                  </p>
                  <p className="text-xl font-semibold">
                    {' '}
                    {data.year}
                  </p>              
                </h2>
                <p className="font-thin text-justify">
                    Sinopsis:
                    <br />
                    {data.resume}
                </p>
              </section>
              <span className="flex justify-center mt-8" >
                    <iframe width="560" height="300" src={`${data.trillerURL}`} frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
              </span>
          </span>
        </article>
    </div>
  )
}

export default DetailCard