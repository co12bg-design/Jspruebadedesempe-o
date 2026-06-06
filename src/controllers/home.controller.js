import navigateTo from "@components/ReservationCard";
import { getReservations } from "@services/reservation.service";
import { getSession } from "@/utils";

export const homeController = async () => {
  const container = document.querySelector("#reservationsContainer");
  const user = getSession();

  const reservations = await getReservations();

  const filteredReservations =
    user.role === "admin"
      ? reservations
      : reservations.filter((reservations) => reservations.userId === user.id);

  container.innerHTML = container.innerHTML = filteredReservations?.length
    ? filteredReservations
        .map((reservations) => ReservationCard(reservations))
        .join("")
    : `
      <div class="w-full text-center py-8 col-span-2">
        <p class="text-slate-500">
          No hay reservas disponibles
        </p>
      </div>
    `;
  }
document.getElementById ('gotoReservationCard'),
addEventListener ('click', ()  => {
        navigateTo('/ReservationCard');
      })