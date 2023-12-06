"use strict";
(()=>{
    fetch("http://localhost:3000/books").then(resp =>resp.json()).then( data =>{ console.log(data)
    })
    //specific book
    fetch("http://localhost:3000/books/4").then(resp =>resp.json()).then( data =>{ console.log(data)
    })
})();