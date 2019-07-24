const axios = require('axios');

setInterval(()=>{
    const ent = getRandomIntInclusive(1, 5);
    axios.post('http://localhost:3000/event', {
        time: new Date().toString() + " FOR ENTITY " + ent,
        entity: ent
    })
    .then((response) => console.log(response.data))
    .catch(e => console.log(e))
}, 1000)

function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}