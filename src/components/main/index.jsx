import { useEffect, useState } from "react";
import Button from "../button";
import { getDatosZelda } from "../../services";
import { CardContent, GameCard, Title, SubTitle, TextDescription } from "./styles";

export const Main = () => {
  const [ zeldaData, setZeldaData] = useState({ games: [] });
  const [currentPage, setCurrentPage] = useState(1);

  const ZeldaList = (props) => {
    return (
      <CardContent>
        {props.games.map((item, index) => {
          return (
            <li key={index}>
              <GameCard>
                <Title>{item.name}</Title>
                <SubTitle>
                  <b>Developer:</b> {item.developer}
                </SubTitle>
                <h3>
                  <b>Publiser: </b>
                  {item.publisher}
                </h3>
                <TextDescription>
                  <b>Description: </b>
                  {item.description}
                </TextDescription>
                <h5 style={{marginTop: "10px"}}>
                  <b>Released Date: </b>
                  {item.released_date}
                </h5>
              </GameCard>
            </li>
          );
        })}
      </CardContent>
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
          <Button onClick={prevPage} disabled={currentPage === 1} label="Página Anterior" />
          <Button onClick={nextPage} disabled={indexOfLastGame >= zeldaData.games.length} label="Próxima Página" />
        </>
      ) : (
        "❌❌ Não há nada sobre a franquia ❌❌"
      )}
    </section>
  );
};