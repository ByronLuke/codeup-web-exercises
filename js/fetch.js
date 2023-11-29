const username = 'ByronLuke';
const token = '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';
const apiURL = `https://api.github.com/users/${username}/events`

//With fetch we are asking the apiURL for information and the headers is attaching the token which is a key that allows us to access it the information for that user
fetch(apiURL, {
    headers: {
        'Authorization': `token ${token}`
    }
})//the first then is receiving the information and the response.json translates the response into something we can read
    .then(response => response.json())
    //the second then is using or reading the information
    .then(events => {
        const pushEvent = events.find(event => event.type === 'PushEvent')
        console.log(`Last Commit was ${new Date(pushEvent.created_at)}`);
    })