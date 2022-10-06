const login = {
  getHtml: function () {
    const loginContainer = document.createElement("div");
    loginContainer.className = "container";

    const loginLbl = document.createElement("p");
    const loginLbltxt = document.createTextNode("Login with Token");
    const lblTag = loginLbl.appendChild(loginLbltxt);

    const tokeninput = document.createElement("input");
    tokeninput.placeholder = "Token";
    tokeninput.id = "inputToken";

    const submitBtn = document.createElement("button");
    const submitBtnTxt = document.createTextNode("Submit");
    submitBtn.appendChild(submitBtnTxt);
    submitBtn.className = "submit";
    submitBtn.onclick = loginfun;

    loginContainer.appendChild(lblTag);
    loginContainer.appendChild(tokeninput);
    loginContainer.appendChild(submitBtn);
    return loginContainer;

    function loginfun () {
      const token = document.getElementById("inputToken").value;
      console.log(token);

      const url = "https://www.eventbriteapi.com/v3/users/me/organizations/";
      fetch(url, {
        method: "get",
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json"
        }
      }).then(response => response.json()).then((data) => {
        console.log(data);

        localStorage.setItem("token", token);
        window.location.href = `/dashboard?useid=${data.organizations[0].id}`;
      });
    };
  }
};
export default login;
