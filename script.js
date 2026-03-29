const form = document.getElementById("salesForm")
const tableBody = document.querySelector("#salesTable tbody");

const revenueE1 = document.getElementById("totalRevenue");
const dealsWonE1 = document.getElementById("dealsWon")
const conversionE1 = document.getElementById("conversionRate");

let totalRevenue = 0;
let dealsWon = 0;
let totalDeals = 0;

form.addEventListener("submit", function(e) {
    e.preventDefault();
   
const client = document.getElementById("client").value.trim();
const dealValue = Number(document.getElementById("dealValue").value);
const status = document.getElementById("status").value;

if (!client || dealValue <= 0 || !status) {
        alert("please enter valid data for all fields!");
        return;
}

totalDeals++;

if (status.toLowerCase() === "won") {
        dealsWon++;
        totalRevenue += dealValue;
    }

const newRow = document.createElement("tr");    
const statusClass = status === "won" ? "won" : "lost";

newRow.innerHTML = `
    <td>${client}</td>
    <td>${dealValue}</td>
    <td class="${statusClass}">${status}</td>
    `;
 
    tableBody.appendChild(newRow);

    revenueE1.textContent = "$" + totalRevenue;
    dealsWonE1.textContent = dealsWon;

    const conversionRate = ((dealsWon / totalDeals) * 100).toFixed(1);
    conversionE1.textContent = conversionRate + "%";
    form.reset();
});