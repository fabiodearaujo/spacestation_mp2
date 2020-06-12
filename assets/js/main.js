// ---------------------------------------- FUNCTION TO TOGGLE DARK AND LIGHT MODE - WWW.BOOTSTRAPTOGGLE.COM

$(function() {
    $('#mode-toggle').change(function() {
        let dark = $(this).prop('checked');
        if (dark == true) {
            $("#bodymain").removeClass("background-light").addClass("background-dark");
            $("#header").removeClass("background-light").addClass("background-dark");
            $("#logo").removeClass("background-light").addClass("background-dark");
            $("#toggle-p").removeClass("background-light").addClass("background-dark");
            $("#footer").removeClass("background-light").addClass("background-dark");
            $("#main").removeClass("background-light").addClass("background-dark");
            $("#issLocation-container").removeClass("container-light").addClass("container-dark");
            $("#issLive-container").removeClass("container-light").addClass("container-dark");
            $("#picDay-container").removeClass("container-light").addClass("container-dark");
            $("#about-container").removeClass("container-light").addClass("container-dark");
            $("#toNasa").removeClass("button-light").addClass("button-dark"); 
            $("#toIss").removeClass("button-light").addClass("button-dark");    
            $("#toSpacex").removeClass("button-light").addClass("button-dark"); 
        } else {
            $("#bodymain").removeClass("background-dark").addClass("background-light");
            $("#header").removeClass("background-dark").addClass("background-light");
            $("#logo").removeClass("background-dark").addClass("background-light");
            $("#toggle-p").removeClass("background-dark").addClass("background-light");
            $("#footer").removeClass("background-dark").addClass("background-light");
            $("#main").removeClass("background-dark").addClass("background-light");
            $("#issLocation-container").removeClass("container-dark").addClass("container-light");
            $("#issLive-container").removeClass("container-dark").addClass("container-light");
            $("#picDay-container").removeClass("container-dark").addClass("container-light");
            $("#about-container").removeClass("container-dark").addClass("container-light");
            $("#toNasa").removeClass("button-dark").addClass("button-light");
            $("#toIss").removeClass("button-dark").addClass("button-light");
            $("#toSpacex").removeClass("button-dark").addClass("button-light");
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
    iconUrl: "https://fabioaraujo76.github.io/spacestation_mp2/assets/img/iss200px.png",
    iconSize: [40,30],
    iconAnchor: [25,16]
})

let myMarker = L.marker([0,0], {icon: issIcon}).addTo(myMap);

// URL FOR API ISS LOCATION
let urlISS = "https://api.wheretheiss.at/v1/satellites/25544";

//VARIABLE TO SET ZOOM ON THE SPACE STATION
let firstRun = true;


//   FETCHING THE DATA FROM JSON API - EXAMPLE MODIFIED TO MY NEEDS FROM CODE FROM dcode YOUTUBE CHANNEL - https://www.youtube.com/watch?v=5VCY9yCZnlc
function getIss() {
    fetch(urlISS).then(function(response) {
        
        return response.json();

    }).then(function(issData) {
        // STORING THE DATA RECEIVED INTO VARIABLES
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
        
        // DRAWN A STROKE WHERE THE ISS PASSED CREARTING A PATH 
        L.circle([latData, longData], 1000, {
            stroke: true,
            weight: 3,
            color: "#f00e02"
        }).addTo(myMap);

                
        // DISPLAY LATITUDE AND LONGITUDE ON THE CARD 
        $("#latValue").html(latData.toFixed(3));
        $("#longValue").html(longData.toFixed(3));
        $("#altiValue").html(altiData.toFixed(3));
        $("#speedValue").html(speeData.toFixed(3));

       
    }).catch(function(error) {
        
        console.log("Something went wrong with retrieving data, please try again later");
        console.log(error);

    })
};

getIss();

setInterval( function() {
    getIss()}, 2000);



// NASA API URL SETUP 
let nasaUrl = "https://api.nasa.gov/planetary/apod?api_key=GLaY6JWgmAcIvfY9Xx8FcQqmbA3hdzQLhho0kN3q"

function getApod() {
    // FECHING DATA FROM NASA API TO GET BACK THE PICTURE OF THE DAY AND INFORMATION 
    fetch(nasaUrl).then(function(resp) {
        
        return resp.json();

    }).then(function(apodImg) {
        // STORING THE DATA RECEIVED INTO VARIABLES
        let apodpic = apodImg.url;
        let apodpichd = apodImg.hdurl;
        let apodcop = apodImg.copyright;
        let apodtitle = apodImg.title;

        // HANDLER TO DON'T SHOW UNDEFINED IN CASE THE INFORMATION IS MISSING ON THE JSON 
        if (apodcop == undefined || apodcop === "") {
            apodcop = "Not credited by NASA";
        }

        //DISPLAYING INFORMATION INTO THE CARD
        $("#picDay").html("<a href='"+apodpichd+"' target='_blank'>"+"<img id='apocpic' src='"+apodpic+"' alt='Astronomy Picture of the Day'/></a>");
        $("#title").html("<strong>Title: </strong>"+apodtitle);
        $("#credit").html("<strong>Credits: </strong>"+apodcop);

    }).catch(function(error) {
        
        console.log("Something went wrong with retrieving data, please try again later");
        console.log(error);
    })
};

getApod();



