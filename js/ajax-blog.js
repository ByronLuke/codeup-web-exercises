const div = document.querySelector('div');

const data = fetch('data/blog.json', {
    method: 'GET'
}).
then(response=> response.json()
    .then(data => {
        data.forEach(dataObj=>{
            const section = document.createElement('section');

            const titleData = document.createElement('h1');
            const contentData = document.createElement('p');
            const categoryData = document.createElement('p');
            const dateData = document.createElement('p');

            titleData.textContent = dataObj.title;
            contentData.textContent = dataObj.content;
            categoryData.textContent = dataObj.content;
            dateData.textContent = dataObj.date;

            section.appendChild(titleData)
            section.appendChild(contentData)
            section.appendChild(categoryData)
            section.appendChild(dateData)

            div.appendChild(section)
        })
    }))