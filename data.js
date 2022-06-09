let datenames =["Sunday","Monday","Tusday","Wednesday","Thursday","Friday","Saturday"];
let months =["January","Febraury","March","April","May","Jun","July","Ago","Sept","Oct","Nov","Dic"];
let d = new Date ();
let dayName = datenames[d.getDay()];
let monthDay = months[d.getMonth()];
let year = d.getFullYear();
let fulldate = dayName + "," + monthDay + " " + d.getDate() + "," + year;
