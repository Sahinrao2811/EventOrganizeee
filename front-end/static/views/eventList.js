const eventList = {
  getHtml: function () {
    const eventListContainer = document.createElement("div");
    eventListContainer.id = "eventContainer";

    const token = localStorage.getItem("token");
    const queryString = window.location.search;

    console.log(queryString);

    const urlParams = new URLSearchParams(queryString);
    const usrid = urlParams.get("useid");
    const url = `https://www.eventbriteapi.com/v3/organizations/${usrid}/events/`;
    fetch(url, {
      method: "get",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json"
      }
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        data.events.forEach((element) => {
          const eventList = document.createElement("div");
          eventList.id = "listevent";

          const eventNameTag = document.createElement("p");
          const eventName = document.createTextNode(`${element.name.text}`);
          eventNameTag.appendChild(eventName);
          eventList.appendChild(eventNameTag);
          eventListContainer.appendChild(eventList);
          const startDate = document.createElement("p");
          const startTxt = document.createTextNode(
            `start: ${element.start.local.split("T")[0]}`
          );
          startDate.appendChild(startTxt);
          const endtDate = document.createElement("p");
          const endtTxt = document.createTextNode(
            `end: ${element.end.local.split("T")[0]}`
          );
          endtDate.appendChild(endtTxt);

          eventList.appendChild(startDate);
          eventList.appendChild(endtDate);
          // eventListContainer.appendChild(eventDetails.getHtml())
          // localStorage.setItem('iD', element.id);
          const routeEvent = () => {
            window.location.href = `/eventDetail?perticularEventid=${element.id}`;
          };
          eventList.onclick = routeEvent;
        });
      });
    return eventListContainer;
  }
};
export default eventList;
