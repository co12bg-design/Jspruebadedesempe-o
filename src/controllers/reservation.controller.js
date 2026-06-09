export async function loadFunctions() {
    const response = await fetch(
        "http://localhost:3000/functions"
    );

    const functions = await response.json();

    const select = document.querySelector("#functionId");

    functions.forEach(func => {
        select.innerHTML += `
      <option value="${func.id}">
        ${func.movie} - ${func.date} - ${func.hour}
      </option>
    `;
    });
} 