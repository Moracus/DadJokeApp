const makejoke = async () => {
    const text = await getDadJoke()
    document.querySelector("#joke").innerText = text;
}
const getDadJoke = async () => {
    const config = { headers: { Accept: 'application/json' } }
    const res = await axios.get("https://icanhazdadjoke.com/", config)
    const joke = res.data.joke
    return joke
}

document.querySelector(".button").addEventListener('click', makejoke)