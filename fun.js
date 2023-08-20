document.addEventListener("DOMContentLoaded", () => {
    const signBtn = document.getElementById('sign-btn');

    signBtn.addEventListener("click", (e) => {
        e.preventDefault();

        const name = document.getElementById("name").value
        const email = document.getElementById("email").value;
        const password = document.getElementById("password").value;
        const confirmPassword = document.getElementById("confirmPassword").value;

        const URL = "https://pluralcodesandbox.com/yorubalearning/api/register_admin";
        const signUpData = new FormData();
        signUpData.append("name", name)
        signUpData.append("email", email);
        signUpData.append("password", password);
        signUpData.append("password_confirmation", confirmPassword);

        signBtn.innerText = "Loading...";
        signBtn.classList.add("pulse");

        fetch(URL, {
            method: "POST",
            body: signUpData,
        })
        .then(response => response.json())
        .then(result => {
            console.log(result);
            if (result.status === "success") {
                Swal.fire({
                    icon: "success",
                    text: "Good To Go",
                    confirmButtonText: "Ok"
                });

                setTimeout(() => {
                    location.href = "auth.html";
                }, 5000);
            } else {
                let errorMessage = "Registration Unsuccessful";
                if (result.message) {
                    const keys = Object.keys(result.message);
                    const firstErrorKey = keys[0];
                    if (result.message[firstErrorKey].length > 0) {
                        errorMessage = result.message[firstErrorKey][0];
                    }
                }
                Swal.fire({
                    icon: "error",
                    text: errorMessage,
                    confirmButtonText: "Ok"
                });
            }
        })
        .catch(error => console.log(error))
        .finally(() => {
            signBtn.innerText = "Submit";
            signBtn.classList.remove("pulse");
        });
    });
});
