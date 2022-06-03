displayCard();
async function fetchNumber() {
    const response = await fetch("../data.json");
    const jsonBody = await (response.json());
    return jsonBody;
}
async function displayCard() {
    let dataArr = await fetchNumber();
    let total = findTotal(dataArr);
    let html = "";
    dataArr.forEach(element => {
        console.log(element["day"], " - ", element["amount"]);
        html += `
        <div class="body-cards-graph-display-column">
            <div class="body-cards-graph-display-column-draw" style="height: ${(element["amount"] / total) * 100}em;" ${element["day"] == "wed"? 'id="wed"' : ''}></div>
            <div class="body-cards-graph-display-column-number">${element["amount"]}</div>
            <h6 class="body-cards-graph-display-column-text">${element["day"]}</h6>
      </div>`
    });
    document.querySelector(".body-cards-graph-display").insertAdjacentHTML("beforeend", html);
}
function findTotal(arr) {
    let total = 0.0;
    arr.forEach(element => {
        total += element["amount"];
    });
    return total;
}