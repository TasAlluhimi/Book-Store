
    
    const my_api = 'https://655239d55c69a7790329ba98.mockapi.io/BooksUsers';

    let sign_upbtn = document.getElementById("signUp");
    let name1 = document.querySelector("#name");
    let email = document.querySelector("#email");
    let password = document.querySelector("#pass");
    const check_Mail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    sign_upbtn.addEventListener("click", () =>{

        name1 = name1.value;
        email = email.value;
        password = password.value;
        let wlc_text = document.querySelector("#wlc-user")
        if (name1.length < 3) {
            alert('Name must have at least 5 letters');
        } else if (!check_Mail.test(email)){
            alert('Please enter a valid email');
        } else if (password.length < 8){
            alert('Password must have at least 8 letters');
        }  else if (name1 === '' || email === '' || password === '') {
            alert('Please fill the required fields!!');
        } else if (name1 === 'admin' || email === 'admin@admin.come' || name1 === 'Admin') {
            alert('Invalid fields!!')
        } else {
            fetch(my_api, {
                method: 'POST',
                body: JSON.stringify({
                    name1,
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
                    localStorage.setItem("name", name1)
                    wlc_text.textContent = `Wlcome back ${localStorage.getItem("name")}!`
                    (window.location.href = 'book.html'); 
                })
                .catch((error) => console.error(`The error is: ${error}`));
        }
            })

