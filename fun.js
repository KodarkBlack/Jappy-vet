// // SIGN UP FUNCTION
// document.addEventListener("DOMContentLoaded", () => {
//     const signBtn = document.getElementById('sign-btn');
//     const signupRadio = document.getElementById('signup-page');
//     const signinRadio = document.getElementById('signin-page');

//     signBtn.addEventListener("click", (e) => {
//         e.preventDefault();

//         const name = document.getElementById("name").value
//         const email = document.getElementById("email").value;
//         const password = document.getElementById("password").value;
//         const confirmPassword = document.getElementById("confirmPassword").value;

//         const URL = "https://pluralcodesandbox.com/yorubalearning/api/register_admin";
//         const signUpData = new FormData();
//         signUpData.append("name", name);
//         signUpData.append("email", email);
//         signUpData.append("password", password);
//         signUpData.append("password_confirmation", confirmPassword);

//         signBtn.innerText = "Loading...";
//         signBtn.classList.add("pulse");

//         fetch(URL, {
//             method: "POST",
//             body: signUpData,
//         })
//         .then(response => response.json())
//         .then(result => {
//             console.log(result);
//             if (result.status === "success") {
//                 Swal.fire({
//                     icon: "success",
//                     text: "Redirecting to login",
//                     confirmButtonText: "Ok"
//                 });
//                 // window.location.href = "product.html";
//                 document.getElementById("signup-content").style.display = "none";
//                 document.getElementById("login-content").style.display = "block";
//                 signinRadio.checked = true;

//                 // setTimeout(() => {
//                 //     location.href = "product.html";
//                 // }, 5000);
//             } else {
//                 let errorMessage = "Registration Unsuccessful";
//                 if (result.message) {
//                     const keys = Object.keys(result.message);
//                     const firstErrorKey = keys[0];
//                     if (result.message[firstErrorKey].length > 0) {
//                         errorMessage = result.message[firstErrorKey][0];
//                     }
//                 }
//                 Swal.fire({
//                     icon: "error",
//                     text: errorMessage,
//                     confirmButtonText: "Ok"
//                 });
//             }
//         })
//         .catch(error => console.log(error))
//         .finally(() => {
//             signBtn.innerText = "Submit";
//             signBtn.classList.remove("pulse");
//         });
//     });
// });
// // ENDS

// // LOGIN FUNCTION 

// document.addEventListener("DOMContentLoaded", () => {
//     const signBtn = document.getElementById('sign-btn');

//     signBtn.addEventListener("click", (e) => {
//         e.preventDefault();

//         const name = document.getElementById("name").value;
//         const email = document.getElementById("email").value;
//         const password = document.getElementById("password").value;

//         // Assuming your login API URL
//         const loginURL = "https://pluralcodesandbox.com/yorubalearning/api/register_admin";
//         const loginData = new FormData();
//         loginData.append("name", name);
//         loginData.append("email", email);
//         loginData.append("password", password);

//         signBtn.innerText = "Logging In...";
//         signBtn.classList.add("pulse");

//         fetch(loginURL, {
//             method: "POST",
//             body: loginData,
//         })
//         .then(response => response.json())
//         .then(result => {
//             console.log(result);
//             if (result.status === "success") {
//                 Swal.fire({
//                     icon: "success",
//                     text: "Logged in successfully",
//                     confirmButtonText: "Ok"
//                 });

//                 // Redirect to product.html after successful login
//                 window.location.href = "product.html";
//             } else {
//                 let errorMessage = "Login Unsuccessful";
//                 if (result.message) {
//                     errorMessage = result.message;
//                 }
//                 Swal.fire({
//                     icon: "error",
//                     text: errorMessage,
//                     confirmButtonText: "Ok"
//                 });
//             }
//         })
//         .catch(error => console.log(error))
//         .finally(() => {
//             signBtn.innerText = "Log In";
//             signBtn.classList.remove("pulse");
//         });
//     });
// });
// // ENDS


// // LOGIN SWITCH

// const signupPage = document.getElementById('signup-page');
// const signinPage = document.getElementById('signin-page');

// const signupContent = document.getElementById('signup-content');
// const loginContent = document.getElementById('login-content');

// signupPage.addEventListener('click', () => {
//     signupContent.style.display = 'block';
//     loginContent.style.display = 'none';
// });

// signinPage.addEventListener('click', () => {
//     loginContent.style.display = 'block';
//     signupContent.style.display = 'none';
// });
// // ENDS

// const signupPage = document.getElementById('signup-page');
// const signinPage = document.getElementById('signin-page');

// const signupContent = document.getElementById('signup-content');
// const loginContent = document.getElementById('login-content');

// signupPage.addEventListener('click', () => {
//     signupContent.style.display = 'block';
//     loginContent.style.display = 'none';
// });

// signinPage.addEventListener('click', () => {
//     loginContent.style.display = 'block';
//     signupContent.style.display = 'none';
// });


// document.addEventListener("DOMContentLoaded", () => {
//     const signBtn = document.getElementById('sign-btn');
//     const signupRadio = document.getElementById('signup-page');
//     const signinRadio = document.getElementById('signin-page');
//     const signupContent = document.getElementById('signup-content');
//     const loginContent = document.getElementById('login-content');

//     signupPage.addEventListener('click', () => {
//         signupContent.style.display = 'block';
//         loginContent.style.display = 'none';
//     });

//     signinPage.addEventListener('click', () => {
//         loginContent.style.display = 'block';
//         signupContent.style.display = 'none';
//     });

//     signBtn.addEventListener("click", (e) => {
//         e.preventDefault();

//         const name = document.getElementById("name").value;
//         const email = document.getElementById("email").value;
//         const password = document.getElementById("password").value;
//         const confirmPassword = document.getElementById("confirmPassword").value;

//         const signupURL = "https://pluralcodesandbox.com/yorubalearning/api/register_admin"; // Adjust URL
//         const signUpData = new FormData();
//         signUpData.append("name", name);
//         signUpData.append("email", email);
//         signUpData.append("password", password);
//         signUpData.append("password_confirmation", confirmPassword);

//         signBtn.innerText = "Loading...";
//         signBtn.classList.add("pulse");

//         fetch(signupURL, {
//             method: "POST",
//             body: signUpData,
//         })
//         .then(response => response.json())
//         .then(result => {
//             console.log(result);
//             if (result.status === "success") {
//                 Swal.fire({
//                     icon: "success",
//                     text: "Redirecting to login",
//                     confirmButtonText: "Ok"
//                 });
//                 signupContent.style.display = "none";
//                 loginContent.style.display = "block";
//                 signinRadio.checked = true;
//             } else {
//                 let errorMessage = "Registration Unsuccessful";
//                 if (result.message) {
//                     const keys = Object.keys(result.message);
//                     const firstErrorKey = keys[0];
//                     if (result.message[firstErrorKey].length > 0) {
//                         errorMessage = result.message[firstErrorKey][0];
//                     }
//                 }
//                 Swal.fire({
//                     icon: "error",
//                     text: errorMessage,
//                     confirmButtonText: "Ok"
//                 });
//             }
//         })
//         .catch(error => {
//             console.log(error);
//             Swal.fire({
//                 icon: "error",
//                 text: "An error occurred during registration.",
//                 confirmButtonText: "Ok"
//             });
//         })
//         .finally(() => {
//             signBtn.innerText = "Submit";
//             signBtn.classList.remove("pulse");
//         });
//     });

//     signBtn.addEventListener("click", (e) => {
//         e.preventDefault();

//         const email = document.getElementById("email").value;
//         const password = document.getElementById("password").value;

//         const loginURL = "https://pluralcodesandbox.com/yorubalearning/api/login"; // Adjust URL
//         const loginData = new FormData();
//         loginData.append("email", email);
//         loginData.append("password", password);

//         signBtn.innerText = "Logging In...";
//         signBtn.classList.add("pulse");

//         fetch(loginURL, {
//             method: "POST",
//             body: loginData,
//         })
//         .then(response => response.json())
//         .then(result => {
//             console.log(result);
//             if (result.status === "success") {
//                 Swal.fire({
//                     icon: "success",
//                     text: "Logged in successfully",
//                     confirmButtonText: "Ok"
//                 });

//                 // Redirect to product.html after successful login
//                 window.location.href = "product.html";
//             } else {
//                 let errorMessage = "Login Unsuccessful";
//                 if (result.message) {
//                     errorMessage = result.message;
//                 }
//                 Swal.fire({
//                     icon: "error",
//                     text: errorMessage,
//                     confirmButtonText: "Ok"
//                 });
//             }
//         })
//         .catch(error => {
//             console.log(error);
//             Swal.fire({
//                 icon: "error",
//                 text: "An error occurred during login.",
//                 confirmButtonText: "Ok"
//             });
//         })
//         .finally(() => {
//             signBtn.innerText = "Log In";
//             signBtn.classList.remove("pulse");
//         });
//     });
// });

const { Client } = Appwrite;

const appwrite = new Client();

appwrite
  .setEndpoint('https://cloud.appwrite.io/v1') // Replace with your Appwrite endpoint
  .setProject('Jappy'); // Replace with your Appwrite project ID


  const signBtn = document.getElementById('sign-btn');

signBtn.addEventListener("click", async (e) => {
    e.preventDefault();

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const confirmPassword = document.getElementById("confirmPassword").value;

    // Register the user using Appwrite
    try {
        const user = await appwrite.account.create(email, password, name, confirmPassword);
        console.log(user); // User registration successful
        
        // Optionally, you can automatically sign the user in after registration
        const session = await appwrite.account.createSession(email, password);
        console.log(session);
        
        Swal.fire({
            icon: "success",
            text: "Redirecting to login",
            confirmButtonText: "Ok"
        });
        signupContent.style.display = "none";
        loginContent.style.display = "block";
        signinRadio.checked = true;
    } catch (error) {
        console.error(error); // Handle registration error
        let errorMessage = "Registration Unsuccessful";
        if (error.response && error.response.message) {
            errorMessage = error.response.message;
        }
        Swal.fire({
            icon: "error",
            text: errorMessage,
            confirmButtonText: "Ok"
        });
    } finally {
        signBtn.innerText = "Submit";
        signBtn.classList.remove("pulse");
    }
});

