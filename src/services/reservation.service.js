import { http } from "@/api/http";

export const getReservations =
  () =>
    http.get("/reservationcard");

export const createReservation =
  (data) =>
    http.post(
      "/reservationcard",
      data
    );

export const updateReservation =
  (id, data) =>
    http.put(
      `/reservations/${id}`,
      data
    );

export const deleteReservation =
  (id) =>
    http.delete(
      `/reservations/${id}`
    );

