import appheader from "./appheader.js";
import createEvent from "./createEvent.js";

const dashboard = {
  getHtml: function () {
    const dashboardContainer = document.createElement("div");
    dashboardContainer.id = "dashboardCont";
    dashboardContainer.appendChild(appheader.getHtml());//appheader

  const creatBTn = document.createElement('button');
  const createbtnTag = document.createElement('p');
  const createbtnTxt = document.createTextNode('Add Event');
  createbtnTag.appendChild(createbtnTxt);
  creatBTn.appendChild(createbtnTag);
  dashboardContainer.appendChild(creatBTn);
  // create event is call hare
  const createeventFun = () =>{
    dashboardContainer.appendChild(createEvent.gethtml());
  }
  creatBTn.onclick = createeventFun;



    const token = localStorage.getItem("token");
    const queryString = window.location.search;

    console.log(queryString);

  // event list
    const eventListContainer = document.createElement('div');
    eventListContainer.id = 'eventContainer';
    dashboardContainer.appendChild(eventListContainer);

    const urlParams = new URLSearchParams(queryString);
    const usrid = urlParams.get("useid");
    const url = `https://www.eventbriteapi.com/v3/organizations/${usrid}/events/`;
    fetch(url, {
      method: "get",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
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
        });
      });
    
    return dashboardContainer;
  },
};

export default dashboard;
