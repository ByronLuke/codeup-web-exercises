"use strict";

// TODO: Create an AJAX GET request for the file under data/inventory.json
// TODO: Take the data from inventory.json and append it to the products table
//       HINT: Your data should come back as a JSON object; use console.log() to inspect
//             its contents and fields
//

const tableBody = document.querySelector('#insertProducts');


const data = fetch('data/inventory.json', {
    method: 'GET'
})
    .then(response=> response.json())
    .then(data =>{
        data.forEach(dataObj=>{
            const row = document.createElement('tr');

            const titleData = document.createElement('td');
            const quantityData = document.createElement('td');
            const priceData = document.createElement('td');
            const categoriesData = document.createElement('td');

            titleData.textContent = dataObj.title;
            quantityData.textContent = dataObj.quantity;
            priceData.textContent = dataObj.price;
            categoriesData.textContent = dataObj.categories;

            row.appendChild(titleData)
            row.appendChild(quantityData)
            row.appendChild(priceData)
            row.appendChild(categoriesData)

            tableBody.appendChild(row)
        })
    })