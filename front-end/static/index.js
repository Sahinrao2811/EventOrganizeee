import login from "./views/login.js";
import dashboard from "./views/dashboard.js";
import eventDetail from "./views/eventDetail.js";
import updateEvent from "./views/updateEvent.js";

const navigateTo = url => {
  history.pushState(null, null, url);
};

const router = async () => {
  const routes = [
    { path: "/", view: login },
    { path: "/dashboard", view: dashboard },
    { path: "/eventDetail", view: eventDetail },
    { path: "/updateEvent", view: updateEvent }
  ];

  const potentioalMatches = routes.map((route) => {
    return {
      route,
      isMatch: location.pathname === route.path
    };
  });

  const match = potentioalMatches.find(potentioalMatches => potentioalMatches.isMatch);

  const usrid = localStorage.getItem("orgId");
  // const token = localStorage.getItem("token");

  if (match.route.path === "/" && localStorage.getItem("token")) {
    window.location.href = `/dashboard?usrid=${usrid}`;
  };
  // else {
  //   window.location.href = `/?token=${token}`;
  // }

  // if (!match) {
  //   match = {
  //     route: routes[0],
  //     isMatch: true
  //   };
  // }

  const view = match.route.view;
  const appContainer = document.getElementById("app");
  appContainer.appendChild(view.getHtml());
};

document.addEventListener("DOMContentLoaded", () => {
  document.addEventListener("click", (e) => {
    if (e.target.matches("[data-link")) {
      e.preventDefault();
      navigateTo(e.target.href);
    }
  });
  router();
});
