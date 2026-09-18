// =========================================
// LIVE PLANT MAINTENANCE PORTAL
// Plant Management System
// =========================================

document.addEventListener("DOMContentLoaded", function () {
    displayPlants();
});


// =========================================
// ADD PLANT
// =========================================

const plantForm = document.getElementById("plantForm");

if (plantForm) {

    plantForm.addEventListener("submit", function (event) {

        event.preventDefault();

        const plant = {
            id: Date.now(),
            name: document.getElementById("plantName").value,
            type: document.getElementById("plantType").value,
            location: document.getElementById("location").value,
            watering: document.getElementById("watering").value,
            sunlight: document.getElementById("sunlight").value,
            status: document.getElementById("status").value
        };

        let plants = JSON.parse(localStorage.getItem("plants")) || [];

        plants.push(plant);

        localStorage.setItem("plants", JSON.stringify(plants));

        alert("🌱 Plant added successfully!");

        window.location.href = "plants.html";
    });
}


// =========================================
// DISPLAY PLANTS
// =========================================

function displayPlants() {

    const plantList = document.getElementById("plantList");
    const noPlants = document.getElementById("noPlants");

    if (!plantList) {
        return;
    }

    let plants = JSON.parse(localStorage.getItem("plants")) || [];

    plantList.innerHTML = "";

    if (plants.length === 0) {

        if (noPlants) {
            noPlants.style.display = "block";
        }

        return;
    }

    if (noPlants) {
        noPlants.style.display = "none";
    }


    plants.forEach(function (plant) {

        const card = document.createElement("div");

        card.className = "plant-card";

        card.innerHTML = `
            <h3>🌿 ${plant.name}</h3>

            <p><strong>🌱 Type:</strong> ${plant.type}</p>

            <p><strong>📍 Location:</strong> ${plant.location}</p>

            <p><strong>💧 Watering:</strong> ${plant.watering}</p>

            <p><strong>☀️ Sunlight:</strong> ${plant.sunlight}</p>

            <span class="plant-status">
                🟢 ${plant.status}
            </span>

            <div class="plant-actions">

                <button onclick="editPlant(${plant.id})" class="edit-btn">
                    ✏️ Edit
                </button>

                <button onclick="deletePlant(${plant.id})" class="delete-btn">
                    🗑️ Delete
                </button>

            </div>
        `;

        plantList.appendChild(card);

    });
}


// =========================================
// DELETE PLANT
// =========================================

function deletePlant(id) {

    const confirmDelete = confirm(
        "Are you sure you want to delete this plant?"
    );

    if (!confirmDelete) {
        return;
    }

    let plants = JSON.parse(localStorage.getItem("plants")) || [];

    plants = plants.filter(function (plant) {
        return plant.id !== id;
    });

    localStorage.setItem("plants", JSON.stringify(plants));

    displayPlants();
}


// =========================================
// EDIT PLANT
// =========================================

function editPlant(id) {

    let plants = JSON.parse(localStorage.getItem("plants")) || [];

    const plant = plants.find(function (plant) {
        return plant.id === id;
    });

    if (!plant) {
        return;
    }

    const newName = prompt("🌿 Plant Name:", plant.name);

    if (newName === null) {
        return;
    }

    const newLocation = prompt("📍 Location:", plant.location);

    if (newLocation === null) {
        return;
    }

    plant.name = newName;
    plant.location = newLocation;

    localStorage.setItem("plants", JSON.stringify(plants));

    displayPlants();

    alert("🌱 Plant updated successfully!");
}
