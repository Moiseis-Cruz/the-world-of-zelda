import { useEffect, useState } from "react";
import Button from "../button";
import styled from "styled-components";

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
      <CardContent>
        {props.games.map((item, index) => {
          return (
            <li key={index}>
              <GameCard>
                <Title>{item.name}</Title>
                <SubTitle>
                  <b>Developer:</b> {item.developer}
                </SubTitle>
                <h2>
                  <b>Publiser: </b>
                  {item.publisher}
                </h2>
                <h4>
                  <b>Released Date: </b>
                  {item.released_date}
                </h4>
                <TextDescription>
                  <b>Description: </b>
                  {item.description}
                </TextDescription>
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

const CardContent = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  justify-content: center;
`

const GameCard = styled.div`
  padding: 40px 20px;
  border: 5px solid red;
`

const Title = styled.h1`
  margin-top: 20px;
  width: 500px;
`

const SubTitle = styled.h2`
  margin-top: 20px;
`

const TextDescription = styled.p`
  margin-top: 20px;
  width: 500px;
`