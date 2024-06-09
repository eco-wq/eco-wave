document.getElementById('read-more-btn').addEventListener('click', function() {
    document.getElementById('additional-details').classList.remove('hidden');
    this.style.display = 'none';
});

document.getElementById('show-less-btn').addEventListener('click', function() {
    document.getElementById('additional-details').classList.add('hidden');
    document.getElementById('read-more-btn').style.display = 'block';
});
