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
                       console.log(jsonObject2); 
                         const ForesData = jsonObject2.list 
                         let cont = 0; 
             
                           for (let i = 0; i < ForesData.length; i++ ) {
                             var date = new Date(ForesData[i].dt_txt); 
                             if(date.getHours() == 18){ //Cuando la hora de nuestra fecha sea igual a 18 entramos al if
                               var temp = ForesData[i].main.temp; // tomamos la temperatura del main.temp
                               document.querySelector("#ext"+cont).innerHTML = temp; //Colocamos la temperatura en la etiqueta con el id dia+cont(en este caso cont es 0 por lo tanto dia0) y asi sucesivamente
                               cont++;  // Cont ira aumentando en 1 cada vez que la hora sea igual a 18, esto seria para
                               //que coincida con el id de nuestro html 
                               
                             }
                           }
                     })              