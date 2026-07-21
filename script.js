function doSearch() {
    const query = document.getElementById('search-input').value.trim();
    if (query) {
        window.location.href = `https://www.google.com/search?q=${encodeURIComponent(query)}`;
    }
}

document.getElementById('search-input').addEventListener('keydown', function (e) {
    if (e.key === 'Enter') {
        doSearch();
    }
});

document.getElementById('btn-search').addEventListener('click', doSearch);
document.getElementById('btn-lucky').addEventListener('click', doSearch);
