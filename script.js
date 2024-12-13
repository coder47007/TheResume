// JavaScript for Rating System

const stars = document.querySelectorAll('.star');  // Get all the stars
let selectedRating = 0;  // Track the selected rating

// Function to handle mouse click (set rating)
function setRating(event) {
    selectedRating = event.target.getAttribute('data-value');
    updateStars();
}

// Function to handle mouse hover (highlight stars)
function hoverRating(event) {
    const value = event.target.getAttribute('data-value');
    updateStars(value);
}

// Function to reset the hover effect when mouse leaves
function resetHover() {
    if (selectedRating === 0) {
        updateStars();
    } else {
        updateStars(selectedRating);
    }
}

// Update stars based on selected or hovered rating
function updateStars(rating = selectedRating) {
    stars.forEach(star => {
        if (star.getAttribute('data-value') <= rating) {
            star.classList.add('selected');
        } else {
            star.classList.remove('selected');
        }
    });
}

// Add event listeners for click and hover
stars.forEach(star => {
    star.addEventListener('click', setRating); 
    star.addEventListener('mouseover', hoverRating);  
    star.addEventListener('mouseout', resetHover);  
});


// Skill Progress Bar Animation on Hover
document.querySelectorAll('.skill').forEach(skill => {
    skill.addEventListener('mouseenter', function() {
        const skillId = skill.querySelector('.progress-bar').id;
        const progressBar = document.getElementById(skillId);
        
        
        const skillLevels = {
            js: 90,     
            python: 85,
            cpp: 80,    
            ruby: 75     
        };
        
        // Set the width of the progress bar
        progressBar.style.width = `${skillLevels[skillId]}%`;
    });

    skill.addEventListener('mouseleave', function() {
        const skillId = skill.querySelector('.progress-bar').id;
        const progressBar = document.getElementById(skillId);

        // Reset width when mouse leaves
        progressBar.style.width = '0';
    });
});

