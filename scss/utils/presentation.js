/// Récupération des éléments bouton et contenu
        const presentationButton = document.getElementById("presentation-button");
        const demarcheButton = document.getElementById("demarche-button");
        const techniqueButton = document.getElementById("technique-button");
        const presentationContent = document.getElementById("presentation-content");
        const demarcheContent = document.getElementById("demarche-content");
        const techniqueContent = document.getElementById("technique-content");
        
        // Fonction pour afficher/masquer le contenu
        function toggleContent(button, content) {
            const closeButton = content.querySelector(".close-button");
            button.addEventListener("click", () => {
                content.style.display = "block";
            });
        
            closeButton.addEventListener("click", () => {
                content.style.display = "none";
            });
  
        }
        
        // Ajout des gestionnaires d'événements pour chaque section
        toggleContent(presentationButton, presentationContent);
        toggleContent(demarcheButton, demarcheContent);
        toggleContent(techniqueButton, techniqueContent);
      
        