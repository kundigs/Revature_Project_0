function getImages() {
    const numImages = document.getElementById('img-num').value;
    const keyword = document.getElementById('keyword').value;
    const form = document.getElementById('nasa-api-form');
    const url = `https://images-api.nasa.gov/search?q=${keyword}&media_type=image`;
    fetch(url).then((res) => res.json()).then((data) => {

        for(let i = 0; i < numImages; i++) {
            console.log(data)
            const div = document.createElement('div');
            div.id = data.collection.items[i].data[0].nasa_id;
            const imgTag = document.createElement('img');
            imgTag.src = data.collection.items[i].links[0].href;
            imgTag.width = 200
            div.appendChild(imgTag);
            document.getElementById('nasa-api').appendChild(div);
        }
    })
}