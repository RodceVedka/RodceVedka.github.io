function createSite(array,source) {
    // let article = document.querySelector('article.data-town')
    let article = document.createElement('article')
    let div = document.createElement('div')
    let h2 = document.createElement('h2');
    let h3 = document.createElement('h3');
    let date = document.createElement('p');
    let population = document.createElement('p');
    let rain = document.createElement('p'); 
    let imagen = document.createElement('img');
    h2.textContent = array.name;
    h3.textContent = array.motto;
    date.textContent = 'Year Founded: ' +array.yearFounded;
    population.textContent = 'Population: ' +array.currentPopulation; 
    rain.textContent = 'Annual Rain Fall: ' +array.averageRainfall; 
    imagen.setAttribute('src', source)
    imagen.setAttribute('alt', array.photo)
    div.setAttribute('class', 'data-text');
    article.setAttribute('class', 'data-town');
    document.querySelector('.towns').appendChild(article)
    article.appendChild(div)
    div.appendChild(h2);  
    div.appendChild(h3);  
    div.appendChild(date);  
    div.appendChild(population);  
    
    div.appendChild(rain);  
    article.appendChild(imagen);  
       
}


const requestURL = "https://byui-cit230.github.io/weather/data/towndata.json";

fetch(requestURL)
    .then((response)=> response.json())
    .then((jsonObject)=>{
        // console.table(jsonObject);
        const townData = jsonObject['towns']
        console.log(townData[1].name)
        let town = townData[6]
        let town1 = townData[0]
        let town2 = townData[2]
    // townData.forEach(town => {
        if (town.name == 'Preston'){
            let SRC = "presto2Fixed.jpg"
            createSite(town,SRC)
        }
        
        if (town1.name == 'Soda Springs'){
            let SRC = "SodaSpri2Fixed.jpg"
            createSite(town1,SRC)
        }
      
        if (town2.name == 'Fish Haven'){
            let SRC = "fishhave2Fixed.jpg"
            createSite(town2,SRC)
        }});