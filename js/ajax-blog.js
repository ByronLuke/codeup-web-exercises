//grab the divvy
const div = document.querySelector('div');

//fetch the data
const data = fetch('data/blog.json', {
    method: 'GET'
}).
then(response=> response.json()
    //what we want to happen with that
    .then(data => {
        data.forEach(dataObj=>{
            //create the section
            const section = document.createElement('section');

            //create all the elements for future use and attachment
            const titleData = document.createElement('h1');
            const contentData = document.createElement('p');
            const categoryData = document.createElement('p');
            const dateData = document.createElement('p');

            //add the text content from the object so it ain't blank
            titleData.textContent = dataObj.title;
            contentData.textContent = dataObj.content;
            categoryData.textContent = dataObj.categories;
            dateData.textContent = dataObj.date;

            //section appendy
            section.appendChild(titleData)
            section.appendChild(contentData)
            section.appendChild(categoryData)
            section.appendChild(dateData)

            //divvy appendy
            div.appendChild(section)
        })
    }))