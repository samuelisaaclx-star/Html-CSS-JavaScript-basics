function buyProduct() {
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;

    if (name === "" || email === "") {
        document.getElementById("message").innerHTML =
            "Please enter your name and email.";
        return;
    }

    document.getElementById("message").innerHTML =
        "Thank you for your purchase, " + name + "!";
}

function showSpecifications() {
    document.getElementById("description").innerHTML =
        "Excellent camera quality. 512 GB of storage. Large and smooth display. " +
        "Ideal for gaming, studying, and working. Includes advanced AI features.";
}