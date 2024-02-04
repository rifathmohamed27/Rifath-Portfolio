
document.addEventListener('DOMContentLoaded', function (){
    const navLinks = document.querySelectorAll('.nav-link');
    const homeButton = document.getElementById('homebutton');
    const aboutButton = document.getElementById('aboutButton');
    const skillsButton = document.getElementById('skillsButton');
    const contactButton = document.getElementById('contactButton');

    const buttons = [homeButton, aboutButton, skillsButton, contactButton];

    buttons.forEach(button => {
        button.addEventListener('touchstart', function () {
            button.classList.add('active');
        });
        button.addEventListener('touchend', function () {
            button.classList.remove('active');
        });
        function addActiveClass() {
            navLinks.forEach(link => link.classList.remove('active'));
            this.classList.add('active');
        }
        navLinks.forEach(link => {
            link.addEventListener('touchstart', addActiveClass);
            link.addEventListener('touchend', function () {
                // You can add additional logic here if needed
            });
        });
    });

});
