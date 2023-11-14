
function signUp() {
    
    const api = 'https://655239d55c69a7790329ba98.mockapi.io/BooksUsers';

    let btn = document.querySelector("#signUp");
    let name = document.querySelector("#name");
    let email = document.querySelector("#email");
    let password = document.querySelector("#pass");
    const check_Mail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    btn.addEventListener("click", () =>{

        name = name.value;
        email = email.value;
        password = password.value;

        if (name.length < 3) {
            alert('Name must have at least 5 letters');
        } else if (!check_Mail.test(email)){
            alert('Please enter a valid email');
        } else if (password.length < 8){
            alert('Password must have at least 8 letters');
        }  else if (name === '' || email === '' || password === '') {
            alert('Please fill the required fields!!');
        } else if (name === 'admin' || email === 'admin@admin.come' || name === 'Admin') {
            alert('Invalid fields!!')
        } else {
            fetch(api, {
                method: 'POST',
                body: JSON.stringify({
                    name,
                    email,
                    password,
                }),
                headers: {
                    'Content-type': 'application/json; charset=UTF-8',
                },
            })
                .then((response) => response.json())
                .then((data) => {
                    console.log(data);
                        let container = document.querySelector("#cont");
                        const key = 'kOPbiHE24l1bWAVgZ3XLaxcAUTGBacE3';
                        const api = `https://api.nytimes.com/svc/books/v3/lists/current/hardcover-fiction.json?api-key=${key}`;
                        fetch(api)
                        .then(res => res.json())
                        .then(data => {
                        console.log(data);
                            data.results.books.map(book => {
                                console.log(book);
                                container.insertAdjacentHTML("afterbegin",
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
                                    </div>
                                </div>
                                </div>
                            </div>`)
                            (window.location.href = 'book.html');
                            });
                        })
                        .catch(error => console.error('Error:', error));

                })
                .catch((error) => console.error(`The error is: ${error}`));
        }
            })

}