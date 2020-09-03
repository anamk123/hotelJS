var substringMatcher = function(strs) {
  return function findMatches(q, cb) {
    var matches, substringRegex;

    // an array that will be populated with substring matches
    matches = [];

    // regex used to determine if a string contains the substring `q`
    substrRegex = new RegExp(q, 'i');

    // iterate through the pool of strings and for any string that
    // contains the substring `q`, add it to the `matches` array
    $.each(strs, function(i, str) {
      if (substrRegex.test(str)) {
        matches.push(str);
      }
    });

    cb(matches);
  };
};

var cities = ['Auckland', 'Wellington', 'Hamilton', 'Dunedin', 
];

$('#the-basics .typeahead').typeahead({
  hint: true,
  highlight: true,
  minLength: 1
},
{
  name: 'cities',
  source: substringMatcher(cities)
});

//----------------- fullPage js -------------------------------------//

    $(document).ready(function() {
         new fullpage('#overView', {
          css3: false,
          licenseKey: 'OPEN-SOURCE-GPLV3-LICENSE',
          anchors:['slide0', 'slide1', 'slide2', 'slide3', 'slide4'],
        });
    });

   



//------------------------------- Getting to the house selection --------------------------//

var typeahead = document.querySelector('.tt-input');    
var buttonSearch = document.querySelector('.buttonSearch');
var hotelbtn= document.querySelector('.hotelBtn');
var housebtn= document.querySelector('.houseBtn');
var motelbtn= document.querySelector('.motelBtn');
var hostelbtn= document.querySelector('.hostelBtn');
var accomType = document.querySelector('.dropDown');

buttonSearch.addEventListener('click', returnValue);

function returnValue() {

  if (typeahead.value=="Auckland" && accomType.value=="Hotel") {

    // console.log('Auckland');
    window.location.href="#slide1";
    $('.calc').remove();

  }

  else if (typeahead.value=="Auckland" && accomType.value=="House") {

      window.location.href="#slide2";
      document.getElementById('myform').reset();
      

  
  }

   else if (typeahead.value=="Auckland" && accomType.value=="Motel") {

      window.location.href="#slide3";
      document.getElementById('myform').reset();


    }


  else if (typeahead.value=="Auckland" && accomType.value=="Hostel") {

      window.location.href="#slide4";
      document.getElementById('myform').reset();

  
    }
 
}
//----------------------------- returning back to search ---------------------------//



var btnHome = document.querySelectorAll('.homePage');

var b;

for( b=0; b<btnHome.length; b++ ) {

  btnHome[b].addEventListener('click', backHome);

    function backHome() {
      window.location.href='#slide0';
    }

}





     


//----------------------------- accommodation slides ---------------------------//

  var hotelDetails = [

    {
      hotelName: ' Grand Millenium ',
      location: 'Auckland CBD',
      price: '$157 per night',
      image: '' 


    },

    {
      hotelName:'Waldorf Stadium Hotel',
      location: 'Lower CBD',
      price: ' $157 per night',
      image: ''


    }
  ];


// storing the details to change

  var hotelname = document.getElementsByClassName('hotelname');
  var hotelprice = document.getElementsByClassName('hotelprice');
  var hotellocation = document.getElementsByClassName('hotellocation');
  var hotelimage = document.getElementsByClassName('hotelImages');
  var leftBtn = document.getElementsByClassName('leftButton');
  var rightBtn = document.getElementsByClassName('rightButton');
  var i = 0;


//beginning of slide?

function checkBeginning() {
  if ( i === 0 ) {
        i=hotelDetails.length - 1;
        changeSlide();
  } else {
    i--;
    changeSlide();
  }
}

// when run, check if we are at END of slider and update content
function checkEnd() {
  if ( i >=hotelDetails.length -1 ) {
        i=0;
        changeSlide();
  } else {
    i++;
    changeSlide();
  }
}

// updating the info on page
function changeSlide() {

  hotelImages.src = hotelDetails[i].image;
  hotelname.innerText = hotelDetails[i].hotelName;
  hotellocation.innerText = hotelDetails[i].location;
  hotelprice.innerText = hotelDetails[i].price;

  $('.hotelname').replaceWith(hotelname.innerText);
  // $('.hotelname').replaceWith(hotelname.innerText);
  // $('.hotelname').replaceWith(hotelname.innerText);

}


// when we click BACK button, check if we are at START of slider
leftBtn.onclick = function() {
  checkBeginning();
};

// when we click NEXT button, check if we are at END of slider
rightBtn.onclick = function() {
  checkEnd();
};





//------------------------------- Getting the hide or show class for hotel food  --------------------------


var food = document.getElementsByClassName('yes');
var noFood = document.getElementsByClassName('no');

food[0].addEventListener('change', showOptions);
noFood[0].addEventListener('change', showNoOptions);

console.log(food[0].value);

function showOptions(){

  if ( food[0].checked ) {
      console.log('yes food');
     $('select.diet').removeClass('hide');
  }

}

function showNoOptions(){

  if ( noFood[0].checked ) {
      console.log('no food');
     $('select.diet').addClass('hide');
  }

}

//------------------------------- Getting the hide or show class for house food  --------------------------

var foodHouse = document.getElementsByClassName('houseYes');
var noFoodHouse = document.getElementsByClassName('houseNo');

foodHouse[0].addEventListener('change', showOptions1);
noFoodHouse[0].addEventListener('change', showNoOptions1);

console.log(foodHouse[0].value);

function showOptions1(){

  if ( foodHouse[0].checked ) {
      console.log('yes food');
     $('select.houseDiet').removeClass('hide');
  }

}

function showNoOptions1(){

  if ( noFoodHouse[0].checked ) {
      console.log('no food');
     $('select.houseDiet').addClass('hide');
  }

}

//------------------------------- Getting the hide or show class for motel food  --------------------------

var foodMotel= document.getElementsByClassName('motelYes');
var noFoodMotel = document.getElementsByClassName('motelNo');

foodMotel[0].addEventListener('change', showOptions2);
noFoodMotel[0].addEventListener('change', showNoOptions2);

console.log(foodMotel[0].value);

function showOptions2(){

  if ( foodMotel[0].checked ) {
      console.log('yes food');
     $('select.motelDiet').removeClass('hide');
  }

}

function showNoOptions2(){

  if ( noFoodMotel[0].checked ) {
      console.log('no food');
     $('select.motelDiet').addClass('hide');
  }

}

//------------------------------- Getting the hide or show class for hostel food  --------------------------


var foodHostel= document.getElementsByClassName('hostelYes');
var noFoodHostel = document.getElementsByClassName('hostelNo');

foodHostel[0].addEventListener('change', showOptions3);
noFoodHostel[0].addEventListener('change', showNoOptions3);

console.log(foodHostel[0].value);

function showOptions3(){

  if ( foodHostel[0].checked ) {
      console.log('yes food');
     $('select.hostelDiet').removeClass('hide');
  }

}

function showNoOptions3(){

  if ( noFoodHostel[0].checked ) {
      console.log('no food');
     $('select.hostelDiet').addClass('hide');
  }

}





//------------------            date calculation for hotel stay      ------------------//

var duration = document.getElementsByClassName('hotelDuration')[0];
var dv;
var menu = document.getElementsByClassName('diet');
var btnCalculate = document.querySelector('.costing');
var hotelPricing = document.getElementsByClassName('.hotelPricing');
// var calculation = parseInt(duration.value) * 157;

btnCalculate.addEventListener("click", pricing);

  
  function pricing() {
  dv = duration.value;
  var calculation = dv * 157;
  
  if (dv<1 || dv> 5) {
    window.alert('Duratiion of stay must be between 1 to 5 days')
  }

   

   else if (noFood[0].checked && dv<=5) {

      console.log(calculation);
      // $('.hotelPricing').append(calculation);
      $('.calc').remove();
      $('<p class="calc">'+ '<br>' + '<br>' + 'Your total will be $' + calculation + ' With the selected option of no food '+ '</p>').prependTo('.hotelPricing');


}

    // veg diet is $15 standard 
  else if (food[0].checked && dv<=5 && menu[0].value==='Veg') {

          //calculate value of stay duration + price of food each day
          console.log(calculation + (dv * 15));
        $('.calc').remove();
        $('<p class="calc">'+ '<br>' + '<br>' + 'Your total will be $' + (calculation + (dv * 15)) + ' With the selected option of Vegetarian food at $15 per day'+ '</p>').prependTo('.hotelPricing');  

  }

    // $30 standard
   else if (food[0].checked && dv<=5 && menu[0].value==='Vegan') {

          console.log(calculation + (dv * 30));
            $('.calc').remove();
            $('<p class="calc">'+ '<br>' + '<br>' + 'Your total will be $' + (calculation + (dv * 30)) + ' With the selected option of Vegan food at $30 Per day'+ '</p>').prependTo('.hotelPricing');


  }
    //$20 standard
   else if (food[0].checked && dv<=5 && menu[0].value==='Halaal') {

          console.log(calculation + (dv*20));

            $('.calc').remove();
            $('<p class="calc">'+ '<br>' + '<br>' + 'Your total will be $' + (calculation + (dv * 20)) + ' With the selected option of Halal food at $20 Per day'+ '</p>').prependTo('.hotelPricing');


  }

};
  
//------------------            date calculation for house stay      ------------------//

var houseDuration = document.getElementsByClassName('houseDuration')[0];
var dvHouse;
var houseMenu = document.getElementsByClassName('houseDiet') [0];
var btnCalculateHouse = document.querySelector('.houseCalculationBtn');
// var calculation = parseInt(duration.value) * 157;

btnCalculateHouse.addEventListener("click", pricingHouse);

  
  function pricingHouse() {
  dvHouse = houseDuration.value;
  var calculationHouse = dvHouse * 240;
  
  if (dvHouse<2 || dvHouse> 15) {
    window.alert('Duratiion of stay must be between 2 to 15 days')
  }

    // veg diet is $15 standard 
  else if (foodHouse[0].checked && dvHouse<=15 && houseMenu.value==='Veg') {

          //calculate value of stay duration + price of food each day
          console.log(calculationHouse + (dvHouse * 15));

            $('.calc').remove();
            $('<p class="calc">'+ '<br>' + '<br>' + 'Your total will be $' + (calculationHouse + (dvHouse * 15)) + ' With the selected option of Vegetarian food at $15 per day'+ '</p>').prependTo('.hotelPricing');


          //  

  }
    // $30 standard
   else if (foodHouse[0].checked && dvHouse <=15 && houseMenu.value==='Vegan') {

          console.log(calculationHouse + (dvHouse * 30));

            $('.calc').remove();
            $('<p class="calc">'+ '<br>' + '<br>' + 'Your total will be $' + (calculationHouse + (dvHouse * 30)) + ' With the selected option of Vegan food at $30 Per day'+ '</p>').prependTo('.hotelPricing');


  }
    //$20 standard
   else if (foodHouse[0].checked && dvHouse <=15 && houseMenu.value==='Halaal') {

          console.log(calculationHouse + (dvHouse*20));

          $('.calc').remove();
            $('<p class="calc">'+ '<br>' + '<br>' + 'Your total will be $' + (calculationHouse + (dvHouse * 20)) + ' With the selected option of Halaal food at $20 Per day'+ '</p>').prependTo('.hotelPricing');


  }

  else if (noFoodHouse[0].checked && dvHouse<=15 &&  houseMenu.value==='Veg') {

        console.log(calculationHouse);

          $('.calc').remove();
            $('<p class="calc">'+ '<br>' + '<br>' + 'Your total will be $' + calculationHouse  + ' With the selected option of No food'+ '</p>').prependTo('.hotelPricing');

  }
};

//------------------            date calculation for motel stay      ------------------//

var motelDuration = document.getElementsByClassName('motelDuration')[0];
var dvMotel;
var motelMenu = document.getElementsByClassName('motelDiet') [0];
var btnCalculateMotel = document.querySelector('.motelCalculationBtn');
// var calculation = parseInt(duration.value) * 157;

btnCalculateMotel.addEventListener("click", pricingMotel);

  //min 2 max 4
  function pricingMotel() {
  dvMotel = motelDuration.value;
  var calculationMotel = dvMotel * 90;
  
  if (dvMotel<2 || dvMotel>4 ) {
    window.alert('Duratiion of stay must be between 2 to 4 days')
  }

    // veg diet is $15 standard 
  else if (foodMotel[0].checked && dvMotel<=4 && motelMenu.value==='Veg') {

          //calculate value of stay duration + price of food each day
          console.log(calculationMotel + (dvMotel * 15));

            $('.calc').remove();
            $('<p class="calc">'+ '<br>' + '<br>' + 'Your total will be $' + (calculationMotel + (dvMotel * 15)) + ' With the selected option of Vegetarian food at $15 Per day'+ '</p>').prependTo('.hotelPricing');


          //  

  }
    // $30 standard
   else if (foodMotel[0].checked && dvMotel<=4 && motelMenu.value==='Vegan') {

          console.log(calculationMotel + (dvMotel * 30));

            $('.calc').remove();
            $('<p class="calc">'+ '<br>' + '<br>' + 'Your total will be $' + (calculationMotel + (dvMotel * 30)) + ' With the selected option of Vegan food at $30 Per day'+ '</p>').prependTo('.hotelPricing');


  }
    //$20 standard
   else if (foodMotel[0].checked && dvMotel<=4 && motelMenu.value==='Halaal') {

          console.log(calculationMotel+ (dvMotel*20));

            $('.calc').remove();
            $('<p class="calc">'+ '<br>' + '<br>' + 'Your total will be $' + (calculationMotel + (dvMotel * 20)) + ' With the selected option of Halal food at $20 Per day'+ '</p>').prependTo('.hotelPricing');


  }

  else if (noFoodMotel[0].checked && dvMotel<=4 && motelMenu.value==='Veg') {

      console.log(calculationMotel);

            $('.calc').remove();
            $('<p class="calc">'+ '<br>' + '<br>' + 'Your total will be $' + calculationMotel  + ' With the selected option of no food'+ '</p>').prependTo('.hotelPricing');

}
};

//------------------            date calculation for hostel stay min1 max 10 $30 pernight     ------------------//

var hostelDuration = document.getElementsByClassName('hostelDuration')[0];
var dvHostel;
var hostelMenu = document.getElementsByClassName('hostelDiet') [0];
var btnCalculateHostel = document.querySelector('.hostelCalculationBtn');

btnCalculateHostel.addEventListener("click", pricingHostel);

  
  function pricingHostel() {
  dvHostel = hostelDuration.value;
  var calculationHostel = dvHostel * 30;
  
  if (dvHostel<1 || dvHostel> 10) {
    window.alert('Duratiion of stay must be between 1 to 10 days')
  }

    // veg diet is $15 standard 
  else if (foodHostel[0].checked && dvHostel<=10 && hostelMenu.value==='Veg') {

          //calculate value of stay duration + price of food each day
          console.log(calculationHostel + (dvHostel * 15));

            $('.calc').remove();
            $('<p class="calc">'+ '<br>' + '<br>' + 'Your total will be $' + (calculationHostel + (dvHostel * 15)) + ' With the selected option of Vegetarian Food at $15 Per day'+ '</p>').prependTo('.hotelPricing');


          //  

  }
    // $30 standard
   else if (foodHostel[0].checked && dvHostel<=10 && hostelMenu.value=== 'Vegan') {

          console.log(calculationHostel + (dvHostel* 30));

            $('.calc').remove();
            $('<p class="calc">'+ '<br>' + '<br>' + 'Your total will be $' + (calculationHostel + (dvHostel * 30)) + ' With the selected option of Vegan Food at $30 Per day'+ '</p>').prependTo('.hotelPricing');


  }
    //$20 standard
   else if (foodHostel[0].checked && dvHostel<=10 && hostelMenu.value==='Halaal') {

          console.log(calculationHostel + (dvHostel*20));

           $('.calc').remove();
            $('<p class="calc">'+ '<br>' + '<br>' + 'Your total will be $' + (calculationHostel + (dvHostel * 20)) + ' With the selected option of Halaal Food at $20 Per day'+ '</p>').prependTo('.hotelPricing');


  }

  else if (noFoodHostel[0].checked && dvHostel<=10 && hostelMenu.value==='Veg') {

          console.log(calculationHostel);

            $('.calc').remove();
            $('<p class="calc">'+ '<br>' + '<br>' + 'Your total will be $' + calculationHostel  + ' With the selected option of no food' + '</p>').prependTo('.hotelPricing');
  

}
};















  