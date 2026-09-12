// Mock database
let products = [
  { id: 1, name: "Product One", price: 15, stock: 20 },
  { id: 2, name: "Product Two", price: 25, stock: 8 },
  { id: 3, name: "Product Three", price: 35, stock: 15 },
];

const tableBody = document.getElementById("table-body");

function renderTable() {
  tableBody.innerHTML = "";

  products.forEach((product) => {
    const row = document.createElement("tr");
    row.innerHTML = `
        <td>${product.name}</td>
        <td>$${product.price}</td>
        <td>${product.stock}</td>
        <td><button class="delete-btn" data-id="${product.id}">Delete</button></td>
      `;
    tableBody.appendChild(row);
  });

  // Attach delete listeners after rendering
  document.querySelectorAll(".delete-btn").forEach((btn) => {
    btn.addEventListener("click", () => {
      const id = parseInt(btn.dataset.id);
      products = products.filter((p) => p.id !== id);
      renderTable();
    });
  });
}

renderTable();
b;
