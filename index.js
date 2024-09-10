const btn = document.getElementById("btn");
const wrapper = document.getElementById("wrapper");

function create(arg) {
  return `
        <div class="card">
            <h2>${arg.id}</h2>
            <img src="${arg.url}" alt="">
            <h3>${arg.title}</h3>
        </div>
    `;
}
  document.addEventListener('DOMContentLoaded', function() {
    fetch("https://jsonplaceholder.typicode.com/photos", {
      method: "GET",
    })
      .then((response) => {
        if (response.status == 200) {
          return response.json();
        }
      })
      .then((data) => {
        wrapper.innerHTML = '';
        if(data.length) {
            data.forEach(element => {
                let cards =  create(element)
                wrapper.innerHTML += cards;
            });
        }
      })
      .catch((error) => console.error("Error:", error));
  })