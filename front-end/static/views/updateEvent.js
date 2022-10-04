const updateevent = {
  getHtml: function () {
    const updateContainer = document.createElement("div");
    // updateContainer.id = "eventUpDateContainer"
    const newEvenUpdatetTag = document.createElement("p");
    const neweventUpdateTxt = document.createTextNode("Update Event");
    newEvenUpdatetTag.appendChild(neweventUpdateTxt);
    updateContainer.appendChild(newEvenUpdatetTag);

    const inputeventUpdateContainer = document.createElement("div");
    inputeventUpdateContainer.id = "commonInput";
    const eventUpdateNametag = document.createElement("p");
    const eventUpdateNameTagName = document.createTextNode("Event name");
    eventUpdateNametag.appendChild(eventUpdateNameTagName);
    inputeventUpdateContainer.appendChild(eventUpdateNametag);

    const eventUpdateTxtInput = document.createElement("input");
    eventUpdateTxtInput.id = "eventInput";
    eventUpdateTxtInput.placeholder = "enter the event name";
    inputeventUpdateContainer.appendChild(eventUpdateTxtInput);
    updateContainer.appendChild(inputeventUpdateContainer);

    const eventUpdateDetailContainer = document.createElement("div");
    updateContainer.appendChild(eventUpdateDetailContainer);
    eventUpdateDetailContainer.id = "commonInput";

    const eventUpdateDetailTag = document.createElement("p");
    const eventUpdateDetailTagName = document.createTextNode("Event Detail");
    eventUpdateDetailTag.appendChild(eventUpdateDetailTagName);
    eventUpdateDetailContainer.appendChild(eventUpdateDetailTag);

    const eventUpdateDetailInput = document.createElement("input");
    eventUpdateDetailInput.id = "eventdetailinput";
    eventUpdateDetailInput.placeholder = "enter event detail";
    eventUpdateDetailContainer.appendChild(eventUpdateDetailInput);

    const startUpdateDateContainer = document.createElement("div");
    startUpdateDateContainer.id = "commonInput";
    updateContainer.appendChild(startUpdateDateContainer);

    const startUpdateDateTag = document.createElement("p");
    const starUpdateDateTagName = document.createTextNode("Start date");
    startUpdateDateTag.appendChild(starUpdateDateTagName);
    startUpdateDateContainer.appendChild(startUpdateDateTag);

    const startUpdateDateinput = document.createElement("input");
    startUpdateDateinput.type = "date";
    startUpdateDateinput.id = "strt";
    startUpdateDateinput.placeholder = "enter date";
    startUpdateDateContainer.appendChild(startUpdateDateinput);

    const endUpdateDateContainer = document.createElement("div");
    endUpdateDateContainer.id = "commonInput";
    updateContainer.appendChild(endUpdateDateContainer);

    const endUpdateDatetag = document.createElement("div");
    const endUpdateDatetagName = document.createTextNode(" End date");
    endUpdateDatetag.appendChild(endUpdateDatetagName);
    endUpdateDateContainer.appendChild(endUpdateDatetag);

    const endUpdateDateinput = document.createElement("input");
    endUpdateDateinput.id = "end";
    endUpdateDateinput.type = "date";
    endUpdateDateinput.placeholder = "Enter end date";
    endUpdateDateContainer.appendChild(endUpdateDateinput);

    const capacityUpdateContainer = document.createElement("div");
    capacityUpdateContainer.id = "commonInput";
    updateContainer.appendChild(capacityUpdateContainer);

    const capacityUpdatetag = document.createElement("p");
    const capacityUpdatetagName = document.createTextNode("Capacity");
    capacityUpdatetag.appendChild(capacityUpdatetagName);
    capacityUpdateContainer.appendChild(capacityUpdatetag);

    const capacityUpdateinput = document.createElement("input");
    capacityUpdateinput.id = "cpcty";
    capacityUpdateinput.placeholder = "capacity";
    capacityUpdateContainer.appendChild(capacityUpdateinput);

    const updatbtn = document.createElement("button");
    const updatbtnName = document.createTextNode("Update");
    updatbtn.appendChild(updatbtnName);
    updateContainer.appendChild(updatbtn);

    const queryString = window.location.search;

    console.log(queryString);

    const urlParams = new URLSearchParams(queryString);
    const perticularEventid = urlParams.get("perticularEvent");
    console.log(perticularEventid);

    const token = localStorage.getItem("token");
    console.log(token);
    const url = `https://www.eventbriteapi.com/v3/events/${perticularEventid}/`;

    const updateRsponse = () => {
      const eventNm = document.getElementById("eventInput").value;
      const eventdeccription =
        document.getElementById("eventdetailinput").value;
      const startdt = document.getElementById("strt").value;
      const isoStartDate = new Date(startdt).toISOString().slice(0, -5) + "Z";
      const enddt = document.getElementById("end").value;
      const enddateiso = new Date(enddt).toISOString().slice(0, -5) + "Z";
      const cpcty = document.getElementById("cpcty").value;

      const body = {
        event: {
          name: {
            html: eventNm
          },
          description: {
            html: eventdeccription
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
          capacity: cpcty
        }
      };

      fetch(url, {
        method: "post",
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json"
        },
        body: JSON.stringify(body)
        // body : body,
      })
        .then((response) => response.json())
        .then((data) => {
          console.log(data);
        });
    };

    fetch(url, {
      method: "get",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json"
      }
      // body: JSON.stringify(body),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data.name.text);
        console.log(data);
        eventUpdateTxtInput.value = data.name.text;
        console.log(eventUpdateTxtInput);
        eventUpdateDetailInput.value = data.description.text;
        console.log("sdfsdf", eventUpdateDetailInput);
        startUpdateDateinput.value = data.start.local.split("T")[0];
        endUpdateDateinput.value = data.start.local.split("T")[0];
        capacityUpdateinput.value = data.capacity;
      });

    updatbtn.onclick = updateRsponse;

    return updateContainer;
  }
};

export default updateevent;
