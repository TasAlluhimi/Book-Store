// email-input
// password-ino

function logIn() {

    const api = 'https://655239d55c69a7790329ba98.mockapi.io/BooksUsers';

    let btn = document.querySelector("#logIn");
    let mail = document.querySelector("#email-input");
    let pass = document.querySelector("#password-ino");

    btn.addEventListener("click", ()=>{

        mail = mail.value;
        pass = pass.value;

        fetch(api, {
            method: 'GET',
        })
        .then((response) => response.json())
        .then((data) => {
        console.log(data)
        for (let i = 0; i < data.length; i++) {
            if (mail == data[i].email && pass == data[i].password) {
                getBooks(data[i].name);
                // (window.location.href = 'products.html');
            }
        }
    })
    .catch((error) => console.error(`The error is: ${error}`));

    })
}


logIn();


function getBooks(name) {
    
    
let container = document.querySelector("#cont");
const key = 'kOPbiHE24l1bWAVgZ3XLaxcAUTGBacE3';
const api = `https://api.nytimes.com/svc/books/v3/lists/current/hardcover-fiction.json?api-key=${key}`;

fetch(api)
.then(res => res.json())
.then(data => {
//    console.log(data);
    data.results.books.forEach(book => {
        // console.log(book);
        container.innerHTML =
        `<div class="card mb-3" style="max-width: 540px;">
        <div class="row g-0">
          <div class="col-md-4">
            <img
              src="${book.book_image}"
              alt="Trendy Pants and Shoes"
              class="img-fluid rounded-start"
            />
          </div>
          <div class="col-md-8">
            <div class="card-body">
              <h5 class="card-title">${book.title}</h5>
              <p class="card-text">
                ${book.description}
              </p>
            ${name} === 'admin' ? <button id="admin" type="button" onclick="del(${book.rank})" class="btn btn-primary btn-block mb-4">Delete</button> : ''
            </div>
          </div>
        </div>
      </div>`

      });
})
.catch(error => console.error('Error:', error));

}

function del(rank) {
    console.log(rank);
}
            //   <button id="admin" type="button" onclick="del(${book.rank})" class="btn btn-primary btn-block mb-4">delete</button>
