const gitAPI = "https://api.github.com/users/akshaymarch7";
const user = fetch(gitAPI);

function fetchData(url) {
    return new Promise((resolve, reject) => {
      fetch(url)
        .then(response => {
          if (!response.ok) {
            throw new Error('Network response was not ok');
          }
          return response.json();
        })
        .then(data => resolve(data))
        .catch(error => reject(error));
    });
  }
  

fetchData('https://api.github.com/users/akshaymarch7')
  .then(data => console.log('Data received:', data))
  .catch(error => console.error('Error:', error));

