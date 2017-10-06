
//-------------------Dog Breeds Searcher App---------------------------------

const dogBreedsApi = 'https://dog.ceo/api/breeds/list/all';

//Set my document Classess selection. The jQuery #id selector uses the id 
// attribute of an HTML tag to find the specific element.

const selectBreed = document.querySelector('#selectBreed');
const viewDog = document.querySelector('#viewDog');
const dogBreedImage = document.querySelector('#BreedImage');

//Set ajax function to query data. AJAX is about loading data in the background 
// and display it on the webpage, without reloading the whole page. Two commonly 
// used methods for a request-response between a client and server are: GET and POST. 
// GET - Requests data from a specified resource--the url. GET is used for just 
// getting (retrieving) some data from the server. The getJSON() method is used to 
// get JSON data using an AJAX HTTP GET request. The url is required to specify 
// the url to send the request to--in this case dog_api_breeds.

// $( document ).ready() - A page can't be manipulated safely until the document is 
// "ready." jQuery detects this state of readiness for you. Code included inside 
// $( document ).ready() will only run once the page Document Object Model (DOM) 
// is ready for JavaScript code to execute.

//--------------Dog Breed Query Function to show dropdownlist--------------

$(document).ready(function(){
      $.ajax({
            type: "GET",
            url: dogBreedsApi,
            async: true,
            dataType:"json",
            success:function(data){
                    for (let i in data.message) {

//console.log(data) confirms success - {status: "success", message: {…}} message:
// {affenpinscher: Array(0), african: Array(0), airedale: Array(0), 
// akita: Array(0), appenzeller: Array(0), …} status: "success"__proto__:Object
                     
//console.log (data.message) to see what type of data I am getting; confirm 
// breeds i.e: buldog: ["boston", "french"] 

// The <option> tag defines an option in a select list.
// <option> elements go inside a <select> or <datalist> element.

//insertAdjacentHTML() parses the specified text as HTML or XML and inserts 
// the resulting nodes into the DOM tree at a specified position. 
// Position is the position relative to the element, and must be one of several
// strings such as 'beforeend' Just inside the element, after its last child.

            const option = `<option value="${i}">${i}</option>`
            selectBreed.insertAdjacentHTML('beforeend', option);
                   }
                }
            });

//console.log(option) getting data breed option: 
//"<option value='stbernard'>stbernard</option>"

//------------------Random Dog Breed Function----------------

//Replace breed /hound/ on api with ${searchTerm} for Class ID #selectBreed
//Original API - https://dog.ceo/api/breed/hound/images/random

        $("#viewDog").click(function(){
            var searchBreeds = $("#selectBreed").val();
            dogApiRandomImg = `https://dog.ceo/api/breed/${searchBreeds}/images/random`;
            
//console.log(searchBreeds) confirms I am getting what I've asked for 
// i.e., african, akita, etc. 
         
            $.ajax({
                type: "GET",
                url: dogApiRandomImg,
                async: true,
                dataType:"json",
                success:function(data)
             {
                       breedImage.src = data.message;

// console.log (data) ; confirm Object 
// { message: "https://dog.ceo/api/img/affenpinscher/n02110627_641.jpg", 
// status: "success"}

//Confirm request is succesfully comppeted!
                                      
   $(document).ajaxSuccess(function(){
     console.log ("AJAX request successfully completed");
});
                }
            });
        });
    });
