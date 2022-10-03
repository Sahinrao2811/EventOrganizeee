 const updateevent = {
    getHtml: function(){

        const updateContainer = document.getElementById('eventContainer');
        // updateContainer.id = "eventUpDateContainer";
        updateContainer.innerHTML = '';
        const newEvenUpdatetTag = document.createElement("p");
        const neweventUpdateTxt = document.createTextNode("New Event");
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
        eventUpdateDetailInput.id = 'eventdetailinput'
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
        startUpdateDateinput.type = 'date'
        startUpdateDateinput.id = 'strt';
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
        endUpdateDateinput.id = 'end';
        endUpdateDateinput.type = 'date';
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
        capacityUpdateinput.id = 'cpcty'
        capacityUpdateinput.placeholder = "capacity";
        capacityUpdateContainer.appendChild(capacityUpdateinput);
    

    
        return updateContainer;
      },
    };
    
     export default updateevent;