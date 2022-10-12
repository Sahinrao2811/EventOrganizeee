import appheader from "./appheader.js";
import createEvent from "./createEvent.js";
import eventList from "./eventList.js";

const dashboard = {
  getHtml: function () {
    const dashboardContainer = document.createElement("div");
    dashboardContainer.id = "dashboardCont";
    dashboardContainer.appendChild(appheader.getHtml());

    const allEventlistbtn = document.createElement("button");
    const allEventlistbtnTag = document.createElement("p");
    const allEventlistbtnTagName = document.createTextNode(" All Event");
    allEventlistbtnTag.appendChild(allEventlistbtnTagName);
    allEventlistbtn.appendChild(allEventlistbtnTag);
    dashboardContainer.appendChild(allEventlistbtn);

    const createBTn = document.createElement("button");
    const createbtnTag = document.createElement("p");
    const createbtnTxt = document.createTextNode("Add Event");
    createbtnTag.appendChild(createbtnTxt);
    createBTn.appendChild(createbtnTag);
    dashboardContainer.appendChild(createBTn);

    dashboardContainer.appendChild(createEvent.getHtml());
    dashboardContainer.appendChild(eventList.getHtml());

    const allEventList = () => {
      console.log("ddddd");
      document.getElementById("createcontainer").style.display = "none";
      document.getElementById("eventContainer").style.display = "block";
    };
    // create event is call hare
    const createEventFun = () => {
      console.log("sdas");
      document.getElementById("createcontainer").style.display = "block";
      document.getElementById("eventContainer").style.display = "none";
    };

    createBTn.onclick = createEventFun;
    allEventlistbtn.onclick = allEventList;

    return dashboardContainer;
  }
};

export default dashboard;
