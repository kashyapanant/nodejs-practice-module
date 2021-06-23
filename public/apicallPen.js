const axios = require('axios');
const { response } = require('express');

axios.get('https://reqres.in/api/users')
.then(response =>{
    for(let d of response.data.data)
    console.log(d.avatar);
}).catch(e => console.error(e));


axios.post('https://reqres.in/api/users',{
    "name":"TestSubject",
    "job":"Test"
}).then((response) =>{
    console.log(response);
},(error) =>{
    console.error(error);
});