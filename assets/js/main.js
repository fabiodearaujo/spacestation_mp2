// ---------------------------------------- FUNCTION TO TOGGLE DARK AND LIGHT MODE - WWW.BOOTSTRAPTOGGLE.COM

$(function() {
    $('#mode-toggle').change(function() {
        let dark = $(this).prop('checked');
        if (dark == true) {
            $("#header").removeClass("headerfoot-light").addClass("headerfoot-dark");
            $("#logo").removeClass("headerfoot-light").addClass("headerfoot-dark");
            $("#toggle-p").removeClass("headerfoot-light").addClass("headerfoot-dark");
            $("#footer").removeClass("headerfoot-light").addClass("headerfoot-dark");
            $("#main").removeClass("headerfoot-light").addClass("headerfoot-dark");
            $("#issLocation-container").removeClass("container-light").addClass("container-dark");
            $("#issLive-container").removeClass("container-light").addClass("container-dark");
            $("#picDay-container").removeClass("container-light").addClass("container-dark");
        } else {
            $("#header").removeClass("headerfoot-dark").addClass("headerfoot-light");
            $("#logo").removeClass("headerfoot-dark").addClass("headerfoot-light");
            $("#toggle-p").removeClass("headerfoot-dark").addClass("headerfoot-light");
            $("#footer").removeClass("headerfoot-dark").addClass("headerfoot-light");
            $("#main").removeClass("headerfoot-dark").addClass("headerfoot-light");
            $("#issLocation-container").removeClass("container-dark").addClass("container-light");
            $("#issLive-container").removeClass("container-dark").addClass("container-light");
            $("#picDay-container").removeClass("container-dark").addClass("container-light");
        }

    })
  });


//   LEAFLET JS MAP SPACE CREATION
let myMap = L.map("worldMap", { minZoom: 1, maxZoom: 9}).setView([0,0],1);

//   ADDING TILES TO THE MAP FROM OPENSTREETMAPS.ORG
const attribution = '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors';
let tileUrl = 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png';
let tiles = L.tileLayer(tileUrl, { attribution });
tiles.addTo(myMap);


// CREATING A CUSTOM MARKER TO THE MAP
const issIcon = L.icon( {
    iconUrl: '/assets/img/iss200px.png',
    iconSize: [40,30],
    iconAnchor: [25,16]
})

let myMarker = L.marker([0,0], {icon: issIcon}).addTo(myMap);



// URL FOR API ISS LOCATION
let urlISS = "https://api.wheretheiss.at/v1/satellites/25544";

//VARIABLE TO SET ZOOM ON THE SPACE STATION
let firstRun = true;

//   FETCHING THE DATA FROM JSON API - EXAMPLE CODE FROM dcode YOUTUBE CHANNEL - https://www.youtube.com/watch?v=5VCY9yCZnlc
function getIss() {
    fetch(urlISS).then(function(response) {
        
        return response.json();

    }).then(function(issData) {
        let latData = issData.latitude;
        let longData = issData.longitude;
        let altiData = issData.altitude;
        let speeData = issData.velocity;

        // INCLUDE THE MARKER ON THE MAP
        myMarker.setLatLng([latData, longData]);

        // ZOOM IN TO THE LOCATION OF THE SPACE STATION 
        if (firstRun) {
            myMap.setView([latData, longData], 3);
            firstRun = false;
        }
        

        L.circle([latData, longData], 1000, {
            stroke: true,
            weight: 3,
            color: "#f00e02"
        }).addTo(myMap);

        // DISPLAY LATITUDE AND LONGITUDE ON THE PAGE 
        $("#latValue").html(latData.toFixed(3));
        $("#longValue").html(longData.toFixed(3));
        $("#altiValue").html(altiData.toFixed(3));
        $("#speedValue").html(speeData.toFixed(3));

       
    }).catch(function(error) {
        
        console.log("Something went wrong with retrieving data, please try again later");
        console.log(error);

    })
};

setInterval( function() {
    getIss()}, 2000);



// NASA API URL SETUP 
let nasaUrl = "https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY"

function getApod() {
    fetch(nasaUrl).then(function(resp) {
        
        return resp.json();

    }).then(function(apodImg) {
        let apodpic = apodImg.url;
        let apodpichd = apodImg.hdurl;
        let apodcop = apodImg.copyright;
        let apodexp = apodImg.explanation;
        let apodtitle = apodImg.title;

        $("#picDay").html("<a href='"+apodpichd+"' target='_blank'>"+"<img id='apocpic' src='"+apodpic+"' alt='Awesome Picture of the Day'/></a>");
        $("#title").html("<p><strong>Title: </strong>"+apodtitle+"</p>");
        $("#credit").html("<p><strong>Credits: </strong>"+apodcop+"</p>");

        console.log(apodpic);
        console.log(apodcop);
        console.log(apodexp);
        console.log(apodtitle);
    })
};

getApod();