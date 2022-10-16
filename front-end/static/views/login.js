import apiUrls from "./apiUrls.js";

const login = {
  getHtml: function () {
    const token = localStorage.getItem("token");
    
    // if (token){
    //   window.location.replace = "/dashboard"
    // }
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

    async function loginfun() {
      try {
        const token = document.getElementById("inputToken").value;
        console.log(apiUrls.loginUrl);

        const response = await fetch(apiUrls.loginUrl, {
          method: "get",
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        });
      const result = await response.json();
      console.log(result);

      if(result.status_code === 401) {
        const errObj =  JSON.stringify({err: result.error, err_desc: result.error_description})
        throw new Error(errObj)
      }
       localStorage.setItem("token", token);
       localStorage.setItem("orgId", result.organizations[0].id);
       window.location.replace("/dashboard");
      } catch (error) {
        const err = JSON.parse(error.message);
        alert(err.err + " : " + err.err_desc);
      }
    }
  },
};

export default login;
