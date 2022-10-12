import login from "./views/login.js";
import dashboard from "./views/dashboard.js";
import eventDetail from "./views/eventDetail.js";
import updateEvent from "./views/updateEvent.js";

const navigateTo = url => {
  history.pushState(null, null, url);
};

const router = async () => {
  const usrid = localStorage.getItem("orgId");
  const token = localStorage.getItem("token");
  const routes = [
    { path: "/", view: login },
    { path: "/dashboard", view: dashboard },
    { path: "/eventDetail", view: eventDetail },
    { path: "/updateEvent", view: updateEvent }
  ];

  const potentialMatches = routes.map((route) => {
    return {
      route,
      isMatch: location.pathname === route.path
    };
  });

 

  let match = potentialMatches.find(potentialMatches => potentialMatches.isMatch);

  

  if (!match) {
    match = {
      route: routes[0],
      isMatch: true
    };
  } else if (match.route.path === "/" && token) {
    match = {
      route: routes[1],
      isMatch: false
    };
  }

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
