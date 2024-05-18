document.getElementById('learn-more').addEventListener('click', function() {
    alert('Thank you for your interest! Visit our menu section to explore our offerings.');
});

document.querySelector('form').addEventListener('submit', function(event) {
    event.preventDefault();
    alert('Thank you for your message! We will get back to you soon.');
});
