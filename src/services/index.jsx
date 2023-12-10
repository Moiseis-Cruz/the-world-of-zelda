async function getDatosZelda() {
    const response = await fetch("https://zelda.fanapis.com/api/games");
    const datos = await response.json();
    return datos.data;
}

export { getDatosZelda }