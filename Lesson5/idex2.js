
const requestURL = 'https://byui-cit230.github.io/weather/data/towndata.json';

fetch(requestURL)
    .then(function (response) {
        return response.json();
    })
    .then(function (jsonObject) {
        console.table(jsonObject);  // temporary checking for valid response and data parsing
        const towns = jsonObject['towns'];
        console.log(towns)
         for (let i = 0; i < towns.length; i++ ) {
            let card = document.createElement('section');
            let h2 = document.createElement('h2');
            let p1 = document.createElement('p');
            let p2 = document.createElement('p');
            let img = document.createElement('img');

            h2.textContent =towns[0].name;
            p1.innerHTML = 'Motto: ' + towns[i].motto;
            img.setAttribute('src', "SodaSpri2Fixed.jpg");
            

            card.appendChild(h2);
            card.appendChild(p1);
            card.appendChild(img);
            document.querySelector('div.towns').appendChild(card);
        }
    }
    );