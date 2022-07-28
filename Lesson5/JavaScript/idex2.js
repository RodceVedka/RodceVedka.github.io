//function name(parametros)
function WeatherSite(array,source) {
    // let article = document.querySelector('article.data-town')
    let article = document.createElement('article') 
    let div = document.createElement('div') 
    let h2 = document.createElement('h2'); 
    let h3 = document.createElement('h3');
    let date = document.createElement('p');
    let population = document.createElement('p');
    let rain = document.createElement('p'); 
    let imagen = document.createElement('img');
    //Ya creamos los elementos necesarios para nuestro sitio
    
    //LLenamos las variables que creamos con las etiquetas de html, y les 
    //asignamos un valor de nuestro array
    h2.textContent = array.name;
    h3.textContent = array.motto;
    date.textContent = 'Year Founded: ' +array.yearFounded;
    population.textContent = 'Population: ' +array.currentPopulation; 
    rain.textContent = 'Annual Rain Fall: ' +array.averageRainfall; 
    //Fin de llenado 
    
    //img = elemento, setAtttribute('src', source)
    imagen.setAttribute('src', source)
    imagen.setAttribute('alt', array.photo)
    imagen.setAttribute('class', 'myImg')
    //Terminamos de crear completamente el elemto de img

    population.setAttribute('class','popu');
    rain.setAttribute('class','rai');
    date.setAttribute('class', 'data');
    div.setAttribute('class', 'data-text');
    article.setAttribute('class', 'data-town');
    //Query selector va a uscar el primer elemento con clase towm  y le voy agregar mi variale article
    document.querySelector('.towns').appendChild(article)
    
    article.appendChild(imagen);  //Añado al article u img expresado e la variale image
    article.appendChild(div); //Añado a article u div
    div.appendChild(h2);  //Añado al div detro de article un h2
    div.appendChild(h3);  //Añado al div detro de article un h3
    div.appendChild(date);  //Añado al div dentro del article un parrafo expresado en la variable date
    div.appendChild(population);  //Añado al div dentro del article un pàrrafo expresado en la variable popalation
    
    div.appendChild(rain);  //Añado al div dentro del article un pàrrafo expresado en la variale rai
   
       
}


const requestURL = "https://byui-cit230.github.io/weather/data/towndata.json";

fetch(requestURL)
    .then((response)=> response.json())
    .then((jsonObject)=>{
         console.table(jsonObject);
        const townData = jsonObject['towns']
       // console.log(townData[1].name)
        let town = townData[6]
        let town1 = townData[0]
        let town2 = townData[2]

    // townData.forEach(town => {
        if (town.name == 'Preston'){
            let SRC = "presto2Fixed.jpg"
            WeatherSite(town,SRC)
        }
        
        if (town1.name == 'Soda Springs'){
            let SRC = "SodaSpri2Fixed.jpg"
            WeatherSite(town1,SRC)
        }
      
        if (town2.name == 'Fish Haven'){
            let SRC = "fishhave2Fixed.jpg"
            WeatherSite(town2,SRC)
        }});

