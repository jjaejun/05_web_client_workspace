document.querySelector("#btn").addEventListener("click", async () => {
    const url = 'https://dog.ceo/api/breeds/image/random';

    const {data : {message}} = await axios(url);
    // console.log(message);
    const img = document.createElement('img');
    img.src = message;
    document.querySelector(".img-wrapper").append(img);
});