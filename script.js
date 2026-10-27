// Récupérer les éléments du menu
const menuToggle = document.getElementById("menuToggle");
const navigation = document.getElementById("navigation");

// Ouvrir ou fermer le menu
menuToggle.addEventListener("click", function () {
    const isOpen = navigation.classList.toggle("active");

    menuToggle.classList.toggle("active", isOpen);

    menuToggle.setAttribute("aria-expanded", isOpen);

    menuToggle.setAttribute(
        "aria-label",
        isOpen ? "Fermer le menu" : "Ouvrir le menu"
    );
});

// Fermer le menu après avoir choisi une rubrique
const navigationLinks = navigation.querySelectorAll("a");

navigationLinks.forEach(function (link) {
    link.addEventListener("click", function () {
        navigation.classList.remove("active");
        menuToggle.classList.remove("active");

        menuToggle.setAttribute("aria-expanded", "false");
        menuToggle.setAttribute("aria-label", "Ouvrir le menu");
    });
});

// Afficher automatiquement l'année actuelle
document.getElementById("year").textContent =
    new Date().getFullYear();
// FORMULAIRE DE RECHERCHE IMMOBILIÈRE

const propertyForm = document.getElementById("propertyForm");

propertyForm.addEventListener("submit", function (event) {

    // Empêcher le rechargement de la page
    event.preventDefault();

    // Récupérer les informations saisies
    const clientName =
        document.getElementById("clientName").value.trim();

    const clientPhone =
        document.getElementById("clientPhone").value.trim();

    const propertyType =
        document.getElementById("propertyType").value;

    const transaction =
        document.getElementById("transaction").value;

    const bedrooms =
        document.getElementById("bedrooms").value || "Non précisé";

    const location =
        document.getElementById("location").value.trim();

    const budget =
        document.getElementById("budget").value.trim();

    const details =
        document.getElementById("details").value.trim() || "Non précisé";


    // Construire le message
    const message = `
Bonjour, je souhaite obtenir des informations sur un bien immobilier.

Nom : ${clientName}
Téléphone : ${clientPhone}
Type de bien : ${propertyType}
Projet : ${transaction}
Nombre de chambres : ${bedrooms}
Ville ou quartier : ${location}
Budget : ${budget}

Description du bien recherché :
${details}

Merci de me recontacter.
    `.trim();


    // Numéro WhatsApp du développeur, au format international
    const whatsappNumber = "2250564661552";

    // Préparer le lien WhatsApp
    const whatsappURL =
        "https://wa.me/" +
        whatsappNumber +
        "?text=" +
        encodeURIComponent(message);

    // Ouvrir WhatsApp avec le message prérempli
    window.open(whatsappURL, "_blank", "noopener,noreferrer");

});