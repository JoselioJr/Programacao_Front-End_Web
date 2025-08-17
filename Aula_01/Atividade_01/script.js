function alteraCor(coluna) {
    let celulasLivros = document.querySelectorAll(".livro");
    let celulasPaginas = document.querySelectorAll(".paginas");

    if (coluna === "livros") {
        celulasPaginas.forEach(td => {
            td.classList.remove("colorirPaginas");
        });
        celulasLivros.forEach(td => {
            td.classList.toggle("colorirLivros");
        });
    }else if (coluna === "paginas") {
        celulasLivros.forEach(td => {
            td.classList.remove("colorirLivros");
        });
        celulasPaginas.forEach(td => {
            td.classList.toggle("colorirPaginas");
        });
    }
}