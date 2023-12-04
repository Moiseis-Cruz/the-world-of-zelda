async function getDatosZelda() {
  const response = await fetch("https://zelda.fanapis.com/api/games");
  const ZeldaData = await response.json();
  return ZeldaData.data;
}

console.log(await getDatosZelda());

export const Main = () => {
  return (
    <>
      <h1>Título</h1>
    </>
  );
};
