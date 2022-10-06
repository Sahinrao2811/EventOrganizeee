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

    const creatBTn = document.createElement("button");
    const createbtnTag = document.createElement("p");
    const createbtnTxt = document.createTextNode("Add Event");
    createbtnTag.appendChild(createbtnTxt);
    creatBTn.appendChild(createbtnTag);
    dashboardContainer.appendChild(creatBTn);

    dashboardContainer.appendChild(createEvent.gethtml());
    // dashboardContainer.appendChild(eventListContainer);
    dashboardContainer.appendChild(eventList.getHtml());

    const allEventList = () => {
      document.getElementById("createcontainer").style.display = "none";
      document.getElementById("eventContainer").style.display = "block";
      // document.getElementById('eventListContainer').style.display = 'none';
    };
    // create event is call hare
    const createeventFun = () => {
      document.getElementById("createcontainer").style.display = "block";
      document.getElementById("eventContainer").style.display = "none";
    };

    creatBTn.onclick = createeventFun;
    allEventlistbtn.onclick = allEventList;

    return dashboardContainer;
  }
};

export default dashboard;
