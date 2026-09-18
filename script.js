const plantForm = document.getElementById("plantForm");

if (plantForm) {

plantForm.addEventListener("submit", function(event) {

    event.preventDefault();


    const plant = {

        name: document.getElementById("plantName").value,

        type: document.getElementById("plantType").value,

        location: document.getElementById("location").value,

        watering: document.getElementById("watering").value,

        sunlight: document.getElementById("sunlight").value,

        status: document.getElementById("status").value

    };


    let plants =
        JSON.parse(localStorage.getItem("plants")) || [];


    plants.push(plant);


    localStorage.setItem(
        "plants",
        JSON.stringify(plants)
    );


    alert("🌱 Plant added successfully!");


    plantForm.reset();


    window.location.href = "plants.html";

});

}
