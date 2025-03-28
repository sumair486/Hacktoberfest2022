
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Weather app</title>
    <link href="https://fonts.googleapis.com/css2?family=Indie+Flower&display=swap" rel="stylesheet">

    <style media="screen">
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}
body{
    background: #448aff;
}

.container-fluid{
 width: 410px;
 margin: 50px auto;
 padding: 10px;

}


.inputs {
    padding: 2rem 0 2rem 0;
    text-align: center;
    justify-content: center;
    background: white;

}

.inputs input[type="text"] {
    height: 3.5rem;
    width: 20rem;
    background: #212121;
    font-weight: bold;
    font-size: 1.1rem;
    padding: 10px;
    border: none;
    background-color: transparent;
    border: 2px solid #c2c2c2;
    border-radius: 2px;
    margin-right:4px ;

}
.inputs input[type="submit"] {
    height: 3.2rem;
    width: 6.5rem;
    background: #0a67ca;
    font-weight: bold;
    color: white;
    font-size: 1.2rem;
    margin-top: 20px;
    border: none;
    border-radius: 2px;
}

.display {
    text-align: center;
    width: 400px;
    color: #16a864;
}
.wrapper {
    margin: 0 9rem;

    background-color: white;
    height: 45vh;
    margin: 50px auto;
    border-radius: 2px;
}

.wrapper h2{
    padding: 5px 0;
    text-align: center;
    background: #0548b5;
    color: white;
    font-family: sans-serif;
  }
  .wrapper p{
    margin:20px 50px;
    margin-right: 20px;
text-align: left;
color: #04214c;
    font-size:23px;
  }

  .wrapper h2 span{
    font-size: 26px;
    color: #9beefb;
  }
    .wrapper p span{
    color: #90006e;
    font-size: 25px;
  }

    </style>


</head>
<body>
    <div class="container-fluid">



            <section class="main">


    
            <section class="inputs">
                <input type="text" placeholder="Enter any city..." id="cityinput">
                <input type="submit" value="Submit" id="add">
            <button placeholder="submit" id="add"></button>
            </section>

     
            <section class="display">
                <div class="wrapper">
                    <h2 id="cityoutput"></h2>
                    <p id="description"></p>
                    <p id="temp"></p>
                    <p id="wind"></p>

                </div>
            </section>
            </section>

    </div>

    <script>

var inputval = document.querySelector('#cityinput')
var btn = document.querySelector('#add');
var city = document.querySelector('#cityoutput')
var descrip = document.querySelector('#description')
var temp = document.querySelector('#temp')
var wind = document.querySelector('#wind')

 
apik = "3045dd712ffe6e702e3245525ac7fa38"


function convertion(val){
    return (val - 273).toFixed(2)
}

    btn.addEventListener('click', function(){


        fetch('https://api.openweathermap.org/data/2.5/weather?q='+inputval.value+'&appid='+apik)
        .then(res => res.json())


        .then(data => {


            var nameval = data['name']
            var descrip = data['weather']['0']['description']
            var tempature = data['main']['temp']
            var wndspd = data['wind']['speed']
            city.innerHTML=`Weather of <span>${nameval}<span>`
            temp.innerHTML = `Temperature: <span>${ convertion(tempature)} C</span>`
            description.innerHTML = `Sky Conditions: <span>${descrip}<span>`
            wind.innerHTML = `Wind Speed: <span>${wndspd} km/h<span>`

        })

        .catch(err => alert('You entered Wrong city name'))
    })
    </script>
</body>
</html>


