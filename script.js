/* ================================
ADD PLANT
================================ */

const plantForm = document.getElementById("plantForm");

if (plantForm) {

plantForm.addEventListener("submit", function(event) {

    event.preventDefault();


    const plant = {

        id: Date.now(),

        name:
            document.getElementById("plantName").value,

        type:
            document.getElementById("plantType").value,

        location:
            document.getElementById("location").value,

        watering:
            document.getElementById("watering").value,

        sunlight:
            document.getElementById("sunlight").value,

        status:
            document.getElementById("status").value

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

/* ================================
DISPLAY PLANTS
================================ */

const plantList =
document.getElementById("plantList");

const noPlants =
document.getElementById("noPlants");

if (plantList) {

const plants =
    JSON.parse(localStorage.getItem("plants")) || [];


if (plants.length === 0) {

    noPlants.style.display = "block";

} else {

    plants.forEach(function(plant) {


        const plantCard =
            document.createElement("div");


        plantCard.className = "feature";


        plantCard.innerHTML = `

            <h3>🌱 ${plant.name}</h3>

            <p>
                <strong>Plant Type:</strong>
                ${plant.type}
            </p>

            <p>
                <strong>Location:</strong>
                ${plant.location}
            </p>

            <p>
                <strong>Watering:</strong>
                ${plant.watering}
            </p>

            <p>
                <strong>Sunlight:</strong>
                ${plant.sunlight}
            </p>

            <p>
                <strong>Status:</strong>
                ${plant.status}
            </p>

        `;


        plantList.appendChild(plantCard);

    });

}

}
