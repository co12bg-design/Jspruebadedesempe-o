import loginView from "@/views/loginView";
import homeView from "@/views/homeView";
import ReservationCard from "../components/ReservationCard";


const routes = {
  "/": loginView,
  "/home": homeView,
  "/Reservar": ReservationCard,

};

export const navigateTo = (path) => {
  history.pushState({}, "", path);
  router();
};

export const router = () => {
  const app = document.querySelector("#app");

  let path = window.location.pathname;

  const view = routes[path] || loginView;

  app.innerHTML = view();
};

export const guide = () => {
  const app = document.querySelector("#app");

  let path = window.location.pathname;

  const card = routes[path] || ReservationCard;

  app.innerHTML = view();
};

window.addEventListener("popstate", router);
