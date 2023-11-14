
    
    const my_api = 'https://655239d55c69a7790329ba98.mockapi.io/BooksUsers';

    let signUpbBtn = document.querySelector("#signUp");
    let name = document.querySelector("#name");
    let email = document.querySelector("#email");
    let password = document.querySelector("#pass");
    const check_Mail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    signUpbBtn.addEventListener("click", () =>{

        name = name.value;
        email = email.value;
        password = password.value;
        let wlc_text = document.querySelector("#wlc-user")
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
            fetch(my_api, {
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
                    localStorage.setItem("name", name)
                    wlc_text.textContent = `Wlcome back ${localStorage.getItem("name")}!`
                    (window.location.href = 'book.html'); 
                })
                .catch((error) => console.error(`The error is: ${error}`));
        }
            })

