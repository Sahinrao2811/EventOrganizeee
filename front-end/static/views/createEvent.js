const createEvent = {
  getHtml: function () {
    const orgID = localStorage.getItem("orgId")

    const createEventFun = () => {

      const token = localStorage.getItem("token");
      const queryString = window.location.search;
      const urlParams = new URLSearchParams(queryString);
      const orgId = urlParams.get("orgId");

      const eventNm = document.getElementById("eventInput").value;
      const eventdeccription = document.getElementById("eventdetailinput").value;

      const startdt = document.getElementById("strt").value;
      const isoStartDate = new Date(startdt).toISOString().slice(0, -5) + "Z";
      const enddt = document.getElementById("end").value;
      const enddateiso = new Date(enddt).toISOString().slice(0, -5) + "Z";
      const cpcty = document.getElementById("cpcty").value;

      const body = {
        event: {
          name: {
            html: `${eventNm}`
          },
          description: {
            html: `${eventdeccription}`
          },
          start: {
            timezone: "UTC",
            utc: isoStartDate
          },
          end: {
            timezone: "UTC",
            utc: enddateiso
          },
          currency: "USD",
          organizer_id: "",
          capacity: cpcty
        }
      };

      const url = `https://www.eventbriteapi.com/v3/organizations/${orgId}/events/`;
      fetch(url, {
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json"
        },
        body: JSON.stringify(body)

      })
        .then((response) => response.json())
        .then((data) => {
      window.location.href= `/dashboard?orgId=${orgID}`

        });
    };

    const createContainer = document.createElement("div");
    createContainer.id = "createcontainer";
    const newEventTag = document.createElement("p");
    const neweventTxt = document.createTextNode("New Event");
    newEventTag.appendChild(neweventTxt);
    createContainer.appendChild(newEventTag);

    const inputeventContainer = document.createElement("div");
    inputeventContainer.id = "commonInput";
    const eventNametag = document.createElement("p");
    const eventNameTagName = document.createTextNode("Event name");
    eventNametag.appendChild(eventNameTagName);
    inputeventContainer.appendChild(eventNametag);

    const eventTxtInput = document.createElement("input");
    eventTxtInput.id = "eventInput";
    eventTxtInput.placeholder = "enter the event name";
    inputeventContainer.appendChild(eventTxtInput);
    createContainer.appendChild(inputeventContainer);

    const eventDetailContainer = document.createElement("div");
    createContainer.appendChild(eventDetailContainer);
    eventDetailContainer.id = "commonInput";

    const eventDetailTag = document.createElement("p");
    const eventDetailTagName = document.createTextNode("Event Detail");
    eventDetailTag.appendChild(eventDetailTagName);
    eventDetailContainer.appendChild(eventDetailTag);

    const eventDetailInput = document.createElement("input");
    eventDetailInput.id = "eventdetailinput";
    eventDetailInput.placeholder = "enter event detail";
    eventDetailContainer.appendChild(eventDetailInput);

    const startDateContainer = document.createElement("div");
    startDateContainer.id = "commonInput";
    createContainer.appendChild(startDateContainer);

    const startDateTag = document.createElement("p");
    const starDateTagName = document.createTextNode("Start date");
    startDateTag.appendChild(starDateTagName);
    startDateContainer.appendChild(startDateTag);

    const startDateinput = document.createElement("input");
    startDateinput.type = "date";
    startDateinput.id = "strt";
    startDateinput.placeholder = "enter date";
    startDateContainer.appendChild(startDateinput);

    const endDateContainer = document.createElement("div");
    endDateContainer.id = "commonInput";
    createContainer.appendChild(endDateContainer);

    const endDatetag = document.createElement("div");
    const endDatetagName = document.createTextNode(" End date");
    endDatetag.appendChild(endDatetagName);
    endDateContainer.appendChild(endDatetag);

    const endDateinput = document.createElement("input");
    endDateinput.id = "end";
    endDateinput.type = "date";
    endDateinput.placeholder = "Enter end date";
    endDateContainer.appendChild(endDateinput);

    const capacityContainer = document.createElement("div");
    capacityContainer.id = "commonInput";
    createContainer.appendChild(capacityContainer);

    const capacitytag = document.createElement("p");
    const capacitytagName = document.createTextNode("Capacity");
    capacitytag.appendChild(capacitytagName);
    capacityContainer.appendChild(capacitytag);

    const capacityinput = document.createElement("input");
    capacityinput.id = "cpcty";
    capacityinput.placeholder = "capacity";
    capacityContainer.appendChild(capacityinput);

    const createBtn = document.createElement("button");
    createBtn.id = "createbtn";
    const createBtnName = document.createTextNode("Create Event");
    createBtn.appendChild(createBtnName);
    createContainer.appendChild(createBtn);

    createBtn.onclick = createEventFun;

    return createContainer;
  }
};

export default createEvent;
