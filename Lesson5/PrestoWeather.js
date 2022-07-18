const URL ="https://api.openweathermap.org/data/2.5/weather?id=5604473&appid=f3790089fa20b68e0c49e47aa204417b"
const URL2 ="https://api.openweathermap.org/data/2.5/forecast?id=5604473&appid=f3790089fa20b68e0c49e47aa204417b"
fetch(URL)
    .then((response)=> response.json())
    .then((jsonObject)=>{
      //   console.log(jsonObject);
        const townData = jsonObject.main
        const townData1 = jsonObject.wind
        const townData2 = jsonObject.weather
     //   console.log(townData2[0].description)
      
         document.getElementById("fial3").textContent = townData.humidity;
         document.getElementById("fial4").textContent = townData1.speed;
         document.getElementById("fial5").textContent = townData.temp;
         document.getElementById("fial").textContent = townData2[0].description;
                 })


fetch(URL2)
    .then((response)=> response.json())
    .then((jsonObject2)=>{
        //  console.log(jsonObject2); 
            const ForesData = jsonObject2.list 
            //   console.log(ForesData[4].dt_txt)   
              for (let i = 0; i < ForesData.length; i++ ) {
                if ( ForesData.length[i] == '18:00:00'){
                  console.log("hello word")}
                }

        })