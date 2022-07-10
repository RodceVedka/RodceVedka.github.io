


const requestURL = "http://api.openweathermap.org/data/2.5/weather?q=London,uk&APPID=f3790089fa20b68e0c49e47aa204417b";

fetch(requestURL)
    .then((response)=> response.json())
    .then((jsonObject)=>{
         console.log(jsonObject);})
