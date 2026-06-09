import loginView from "@/views/loginView";
import homeView from "@/views/homeView";
import reservationView from "@/views/reservationView";


const routes = {
  "/": loginView,
  "/home": homeView,
  "/reservar": reservationView,

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

  const view = routes[path] || reservationView;

  app.innerHTML = view();
};

window.addEventListener("popstate", router);
