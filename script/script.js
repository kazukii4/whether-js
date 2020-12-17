var link = "http://api.openweathermap.org/data/2.5/weather?q="
var api = '&appid=ebc62d684abf080e9e10ce0ab3a91e15'
var div = document.getElementById('div')
    var cityName = document.createElement('h3')
    var info = document.createElement('h4')
    
async function src(){
    var lon = ''
    var lat = ''
    var city = document.getElementById('city').value
    var res = await fetch(link+city+api)
    var data =await res.json()
    console.log(data.coord.lat)

    lon = data.coord.lon
    lat = data.coord.lat
    var cel = Number(data.main.temp) -273.15
    info.innerHTML = cel 

    cityName.innerHTML = data.sys.country
    
    div.appendChild( cityName)
    div.appendChild(info)

    var map;
    
    
    DG.then(function () {
        map = DG.map('map', {
            center: [lat , lon],
            zoom: 13
        });
    });
}
