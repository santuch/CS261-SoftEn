function call_REST_API_Hello() {
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    const url =
        "http://localhost:8080/hello?" +
        new URLSearchParams({
            myName: username,
            lastName: password,
        }).toString();

    fetch(url)
        .then((response) => {
            console.log("Response Status:", response.status); // Log response status
            if (!response.ok) {
                throw new Error("Network response was not ok");
            }
            return response.json(); // Parsing JSON response
        })
        .then((data) => {
            console.log("Response Data:", data); // Log the response data
            if (data.message) {
                document.getElementById("message").innerText = data.message;
            } else {
                document.getElementById("message").innerText = "Hello, World!";
            }
        })
        .catch((error) => {
            console.error("Error:", error); // Log any error
            document.getElementById("message").innerText =
                "Error during API call";
        });
}
