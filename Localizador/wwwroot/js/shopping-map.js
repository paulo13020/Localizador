let canvas = document.getElementById("shopping-map");
let ctx = canvas.getContext("2d");

// Lógica para obter o mapa de shopping e as rotas
let shoppingMap = @Json.Serialize(Model.ShoppingMap);
let selectedRoute = "";

// Função para desenhar o mapa
function drawMap() {
    // Lógica para desenhar o mapa
    // ...

    // Se houver uma rota selecionada, desenha a rota
    if (selectedRoute != "") {
        let route = shoppingMap.Routes.find(x => x.Name == selectedRoute);

        ctx.strokeStyle = "blue";
        ctx.lineWidth = 5;

        ctx.beginPath();
        ctx.moveTo(route.Points[0].X, route.Points[0].Y);
        for (let i = 1; i < route.Points.length; i++) {
            ctx.lineTo(route.Points[i].X, route.Points[i].Y);
        }
        ctx.stroke();
    }
}

// Função para atualizar a rota selecionada
function updateSelectedRoute(routeName) {
    selectedRoute = routeName;
    drawMap();
}

// Evento de clique para selecionar uma rota
canvas.addEventListener("click", function (e) {
    let rect = canvas.getBoundingClientRect();
    let x = e.clientX - rect.left;
    let y = e.clientY - rect.top;

    // Lógica para verificar se o clique está em uma rota
    let route = shoppingMap.Routes.find(r => {
        for (let i = 0; i < r.Points.length; i++) {
            if (x == r.Points[i].X && y == r.Points[i].Y) {
                return true;
            }
        }
        return false;
    });

    if (route) {
        updateSelectedRoute(route.Name);
    }
});