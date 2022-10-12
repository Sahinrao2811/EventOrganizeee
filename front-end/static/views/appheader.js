const appheader = {
  getHtml: function () {
    let infoData = "";

    const queryString = window.location.search;

    const urlParams = new URLSearchParams(queryString);
    const orgId = urlParams.get("orgId");

    const token = localStorage.getItem("token");
    const url = `https://www.eventbriteapi.com/v3/users/${orgId}/`;

    fetch(url, {
      method: "get",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json"
      }
    }).then(response => response.json()).then((data) => {
      infoData = data;
    });

    const appHeaderContainer = document.createElement("div");
    appHeaderContainer.className = "container";

    const appHeader = document.createElement("div");
    appHeader.id = "header";
    appHeaderContainer.appendChild(appHeader);

    const appName = document.createElement("div");
    appHeader.appendChild(appName);

    const appNamepra = document.createElement("p");
    const appNameTxt = document.createTextNode("Event Organizee");
    appNamepra.appendChild(appNameTxt);
    appName.appendChild(appNamepra);

    const userInfo = document.createElement("div");
    appHeader.appendChild(userInfo);

    const userInfopra = document.createElement("p");
    const userInfoTxt = document.createTextNode(`${infoData.firstname ? infoData.firstname : "ram"}`);
    userInfopra.id = "username";

    userInfopra.appendChild(userInfoTxt);
    userInfo.appendChild(userInfopra);

    return appHeaderContainer;
  }
};

export default appheader;
