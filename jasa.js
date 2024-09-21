// Fonction pour valider le formulaire
document.getElementById("cvForm").addEventListener("submit", function(event) {
    let isValid = true;

    // Vérifier si tous les champs obligatoires sont remplis
    const requiredFields = document.querySelectorAll(".required");
    requiredFields.forEach(function(field) {
        if (field.value.trim() === "") {
            field.style.borderColor = "red";
            isValid = false;
        } else {
            field.style.borderColor = "";
        }
    });

    // Si le formulaire n'est pas valide, empêcher l'envoi
    if (!isValid) {
        alert("Veuillez remplir tous les champs obligatoires.");
        event.preventDefault();
    }
});

// Afficher ou masquer la lettre de motivation en fonction du choix de l'utilisateur
document.getElementById("motivationYes").addEventListener("change", function() {
    document.getElementById("motivationSection").style.display = "block";
});

document.getElementById("motivationNo").addEventListener("change", function() {
    document.getElementById("motivationSection").style.display = "none";
});

// Fonction pour afficher les niveaux de langue en pourcentage
function updateLanguageLevel(inputId, outputId) {
    const input = document.getElementById(inputId);
    const output = document.getElementById(outputId);
    output.innerHTML = input.value + "%";
}

// Mettre à jour les valeurs des langues quand on change le slider
document.getElementById("englishLevel").addEventListener("input", function() {
    updateLanguageLevel("englishLevel", "englishOutput");
});

document.getElementById("frenchLevel").addEventListener("input", function() {
    updateLanguageLevel("frenchLevel", "frenchOutput");
});

document.getElementById("germanLevel").addEventListener("input", function() {
    updateLanguageLevel("germanLevel", "germanOutput");
});
