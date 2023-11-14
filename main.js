
// function pushingBooks() {
//     const my_book_api ='https://655239d55c69a7790329ba98.mockapi.io/books';
//     const key = 'kOPbiHE24l1bWAVgZ3XLaxcAUTGBacE3';
//     const api = `https://api.nytimes.com/svc/books/v3/lists/current/hardcover-fiction.json?api-key=${key}`;
    
//     fetch(api)
//     .then(res => res.json())
//     .then(data =>{
//         data.results.books.map(book => {
//             console.log(book);
//             let image = book.book_image;
//             let title = book.title;
//             let description = book.description;
//             let rank = book.rank
    
//             fetch(my_book_api, {
//                 method:'POST',
//                 body: JSON.stringify({
//                     rank,
//                     title,
//                     image,
//                     description,
//                 }),
//                 headers: {
//                     'Content-type': 'application/json; charset=UTF-8',
//                 },
//             })
//             .then(res => res.json())
//             .then(data => console.log(data))
//         })
//             //         console.log(book);
//     }); 
// }

// pushingBooks();





let container = document.querySelector("#cont");



fetch('https://655239d55c69a7790329ba98.mockapi.io/books')
.then(res => res.json())
.then(data => {
   console.log(data);
    data.map(book => {
        console.log(book);
        container.insertAdjacentHTML("afterbegin",
        `<div class="card mb-3" style="max-width: 540px;">
        <div class="row g-0">
          <div class="col-md-4">
            <img
              src="${book.image}"
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
              <button id="admin" style="display: none;" type="button" onclick="del(${book.id})" class="btn btn-block mb-4">Delete</button>
            </div>
          </div>
        </div>
      </div>`);

      const isAdmin = localStorage.getItem("name") === "admin";

      let adminButton = container.querySelector("#admin");
      if (adminButton) {
        adminButton.style.display = isAdmin ? "block" : "none";
      }

      });
})
.catch(error => console.error('Error:', error));

function del(id) {

    const del= `https://655239d55c69a7790329ba98.mockapi.io/books/${id}`;

    fetch(del, {
        method: 'DELETE',
    })
    .then(res => res.json())
    .then(data => console.log(data))
    .catch(error => console.error('Error: ', error));
}