import { useEffect, useState } from "react";

async function getDatosZelda() {
  const response = await fetch("https://zelda.fanapis.com/api/games");
  const datos = await response.json();
  return datos.data;
}

export const Main = () => {
  const [ zeldaData, setZeldaData] = useState({ games: [] });
  const [currentPage, setCurrentPage] = useState(1);

  const ZeldaList = (props) => {
    return (
      <ul>
        {props.games.map((item, index) => {
          return (
            <li key={index}>
              <div style={{ border: "5px solid red" }}>
                <h1>{item.name}</h1>
                <h2>
                  <b>Developer:</b> {item.developer}
                </h2>
                <h2>
                  <b>Publiser: </b>
                  {item.publisher}
                </h2>
                <h4>
                  <b>Released Date: </b>
                  {item.released_date}
                </h4>
                <p>
                  <b>Description: </b>
                  {item.description}
                </p>
              </div>
            </li>
          );
        })}
      </ul>
    );
  };

  useEffect(() => {
    const fetchData = async () => {
      const zeldaDatos = await getDatosZelda();

      setZeldaData({ games: zeldaDatos });
    };
    fetchData();
  }, []);

  const nextPage = () => {
    setCurrentPage((prevPage) => prevPage + 1);
  };

  const prevPage = () => {
    setCurrentPage((prevPage) => Math.max(prevPage - 1, 1));
  };

  const gamesPerPage = 5; // Número de personagens por página
  const indexOfLastGame = currentPage * gamesPerPage;
  const indexOfFirstGame = indexOfLastGame - gamesPerPage;
  const currentGames = zeldaData.games.slice(
    indexOfFirstGame,
    indexOfLastGame
  );

  return (
    <section>
      {zeldaData.games.length > 0 ? (
        <>
          <ZeldaList games={currentGames} />
          <button onClick={prevPage} disabled={currentPage === 1}>
            Página Anterior
          </button>
          <button
            onClick={nextPage}
            disabled={indexOfLastGame >= zeldaData.games.length}
          >
            Próxima Página
          </button>
        </>
      ) : (
        "❌❌ Não há nada sobre a franquia ❌❌"
      )}
    </section>
  );
};