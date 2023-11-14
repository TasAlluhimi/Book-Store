// email-input
// password-ino

    const API = 'https://655239d55c69a7790329ba98.mockapi.io/BooksUsers';

    let btn = document.querySelector("#logIn");
    let mail = document.querySelector("#email-input");
    let pass = document.querySelector("#password-ino");

    btn.addEventListener("click", ()=>{

        mail = mail.value;
        pass = pass.value;
      let wlc_text = document.querySelector("#wlc-user")
        fetch(API, {
            method: 'GET',
        })
        .then((response) => response.json())
        .then((data) => {
        console.log(data)
        for (let i = 0; i < data.length; i++) {
            if (mail == data[i].email && pass == data[i].password) {

                  localStorage.setItem("name", data[i].name)
                  wlc_text.textContent = `Wlcome back ${localStorage.getItem("name")}!`
                  (window.location.href = 'book.html'); 
            }
        }
    })
    .catch((error) => console.error(`The error is: ${error}`));

    })

