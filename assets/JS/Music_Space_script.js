// Récupérer le bouton de toggle et la sidebar
const sidebarToggle = document.getElementById('sidebarToggle');
const sidebar = document.getElementById('sidebar');

// Ajouter un écouteur d'événement pour le clic sur le bouton de toggle
sidebarToggle.addEventListener('click', function() {
    // Toggle la classe 'active' sur la sidebar pour afficher ou cacher
    sidebar.classList.toggle('active');
});