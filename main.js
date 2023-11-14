
    
// let container = document.querySelector("#cont");

// const key = 'kOPbiHE24l1bWAVgZ3XLaxcAUTGBacE3';

// const api = `https://api.nytimes.com/svc/books/v3/lists/current/hardcover-fiction.json?api-key=${key}`;

// fetch(api)
// .then(res => res.json())
// .then(data => {
//    console.log(data);
//     data.results.books.map(book => {
//         console.log(book);
//         container.insertAdjacentHTML("afterbegin",
//         `<div class="card mb-3" style="max-width: 540px;">
//         <div class="row g-0">
//           <div class="col-md-4">
//             <img
//               src="${book.book_image}"
//               alt="Trendy Pants and Shoes"
//               class="img-fluid rounded-start"
//             />
//           </div>
//           <div class="col-md-8">
//             <div class="card-body">
//               <h5 class="card-title">${book.title}</h5>
//               <p class="card-text">
//                 ${book.description}
//               </p>
//             </div>
//           </div>
//         </div>
//       </div>`)

//       });
// })
// .catch(error => console.error('Error:', error));
