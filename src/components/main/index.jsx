import { useEffect } from "react";
import { useState } from "react";

async function getDatosZelda() {
  const response = await fetch("https://zelda.fanapis.com/api/games");
  const ZeldaData = await response.json();
  return ZeldaData.data;
}

console.log(await getDatosZelda());

export const Main = () => {

    const [ zeldaData, setZeldaData ] = useState({characters: []})

    useEffect(() => {
        const fetchData = async () => {
            const data = await getDatosZelda()

            setZeldaData({characters: data})
        }
        fetchData()
    },[])

  return (
    <>
      <section>
        <ul>
            {
                zeldaData.characters.map((item, index) => {
                    return(
                        <li key={index}>
                            <div>
                                <h1>{item.name}</h1>
                                <h2>{item.developer}</h2>
                                <h2>{item.publisher}</h2>
                                <h4>{item.released_date}</h4>
                                <p>{item.description}</p>
                            </div>
                        </li>
                    )
                })
            }
        </ul>
      </section>
    </>
  );
};
