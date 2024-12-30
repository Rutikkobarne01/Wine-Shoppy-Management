// Optional: Adding some interactivity (e.g., showing team member bios on hover)
const teamMembers = document.querySelectorAll('.team-member');

teamMembers.forEach(member => {
    member.addEventListener('mouseover', function() {
        this.querySelector('.bio').style.display = 'block';
    });
    
    member.addEventListener('mouseout', function() {
        this.querySelector('.bio').style.display = 'none';
    });
});