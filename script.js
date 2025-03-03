document.getElementById('mode-toggle').addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    document.body.classList.toggle('light-mode');
    localStorage.setItem('mode', document.body.classList.contains('dark-mode') ? 'dark' : 'light');
});

// Load saved mode
const savedMode = localStorage.getItem('mode');
if (savedMode === 'dark') {
    document.body.classList.add('dark-mode');
} else {
    document.body.classList.add('light-mode');
}
