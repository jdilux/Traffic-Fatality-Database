function filterTable() {
    const searchInput = document.getElementById("searchBar").value.toLowerCase();
    const table = document.getElementById("accidentTable");
    const rows = table.getElementsByTagName("tr");

    for (let i = 1; i < rows.length; i++) {
        const cells = rows[i].getElementsByTagName("td");
        let match = false;

        for (let j = 0; j < cells.length; j++) {
            if (cells[j].innerText.toLowerCase().includes(searchInput)) {
                match = true;
                break;
            }
        }

        rows[i].style.display = match ? "" : "none";
    }
}