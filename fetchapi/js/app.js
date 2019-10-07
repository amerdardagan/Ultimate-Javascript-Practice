document.getElementById ('button1').addEventListener('click', loadTxt);

document.getElementById ('button2').addEventListener('click', loadJSON);

document.getElementById ('button3').addEventListener('click', loadREST);

//Load TXT

//when working with FETCH API (accessing the PROMISE)
//1. (text or JSON) -- HOW TO RETURN AS? WHICH TYPE
//2.now RETURN data 8as text)-ACTUAL DATA

function loadTxt () { //its a promise
    fetch ('data.txt') //access file folder or url

    //TYPE
    .then (function (response) { //access the data
       //IMPORTANT: How to return response (JSON or text)
       return response.text(); //its a function (in console)
       })

       //READ VALUE (RESOLVE.then; REJECT.catch)
    .then (function (data){
        console.log (data); //return data (as text specified above)
        document.getElementById('result').innerHTML = data;
    })  
    .catch (function (error) {
        console.log (error);
    })
}

//LOad and print response from JSON

function loadJSON () {
    fetch ('employees.json') //access json 

    .then (function (response) { //TYPE of response?
        return response.json() //JSON also a function in proto
    })

    //READ VALUE

    .then (function (data) {
        console.log (data);
       
        let html = '';
        data.forEach (function (employee){
            html += `<li>${employee.name}-${employee.job}<li/>`
        })

        //print to HTML
        document.getElementById ('result').innerHTML = html;

    })

    .catch (function (error){
        console.log (error);
    })
}

//Load and print response from REST API

function loadREST () {
    fetch ('https://picsum.photos/list')

    .then (function (response) { //type of response?
        return response.json () //i sa REST API isto json
    })

    .then(function (data) {
        console.log (data);

        let html = '';
        data.forEach (function (image) { //make a url to be a link in anew window
            html += `<li>
                <a target="_blank" href="${image.post_url}">View Image</a> 
                ${image.author} 
            </li>`
        })
        document.getElementById ('result').innerHTML = html;
    })

    .catch (function (error){
        console.log (error);
    })

    
    



}