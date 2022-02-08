'use strict';


function _createProjs() {
    return [{
            id: "Todos",
            name: "Sokoban",
            title: "Control Your Life ",
            link: "https://sowhat1234.github.io/todos/",
            url: "img/portfolio/todos.png",
            publishedAt: 1448693940000,
            labels: ["Matrixes", "keyboard events"],
        },
        {
            id: "Minesweeper",
            name: "Sokoban",
            title: "Try not to EXPLODE",
            link: "https://sowhat1234.github.io/MineSweeper/",
            url: "img/portfolio/minesweeper.png",
            publishedAt: 1448693940000,
            labels: ["Matrixes", "keyboard events"],
        },
        {
            id: "Pacman",
            name: "Sokoban",
            title: "RUN PACMAN RUN",
            link: "https://sowhat1234.github.io/pacman/",
            url: "img/portfolio/pacman.png",
            publishedAt: 1448693940000,
            labels: ["Matrixes", "keyboard events"],
        },
    ]

}


function getProj() {
    return _createProjs()
}

function getProjById(projId) {
    var projs = _createProjs();
    return projs.find(proj => proj.id === projId);

}