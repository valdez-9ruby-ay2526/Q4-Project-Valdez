function loginUser() {
  
    let username = document.getElementById("usernameInput").value;
    let password = document.getElementById("passwordInput").value;

    if (username === "student067" && password === "67890") {
        window.alert("Login successful! Welcome, " + username + "!");

    } else {
        window.alert("Login failed! Please check your username and password.");
    }
}