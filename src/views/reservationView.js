import { loadFunctions } from "../controllers/reservation.controller";
export default function reservationView() {
  setTimeout(() => {
    loadFunctions();
  }, 0);

  return `
    <div class="p-5">

      <h1 class="text-2xl font-bold mb-4">
        Nueva Reserva
      </h1>

      <form id="reservationForm" class="flex flex-col gap-3">

        <input
          type="number"
          id="id"
          placeholder="ID"
          class="border p-2 rounded"
        >

        <select
          id="movieId"
          class="border p-2 rounded"
        >
          <option value="">Selecciona una película</option>
        </select>
      

        <input
          type="text"
          id="user"
          placeholder="Usuario"
          class="border p-2 rounded"
        >

        <input
          type="date"
          id="date"
          class="border p-2 rounded"
        >

        <input
          type="time"
          id="hour"
          class="border p-2 rounded"
        >

        <input
          type="number"
          id="seats"
          placeholder="Cantidad de entradas"
          class="border p-2 rounded"
        >

        <select
          id="status"
          class="border p-2 rounded"
        >
          <option value="Pendiente">Pendiente</option>
          <option value="Confirmada">Confirmada</option>
          <option value="Cancelada ">Cancelada</option>
        </select>

        <button
          type="submit"
          class="bg-green-600 text-white p-2 rounded"
        >
          Guardar Reserva
        </button>

      </form>

    </div>
  `;
}