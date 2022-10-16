const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const orgID = localStorage.getItem("orgId");
const perticularEventid = urlParams.get("perticularEventid");
const apiUrls = {
  loginUrl: "https://www.eventbriteapi.com/v3/users/me/organizations/",
  eventListUrl: `https://www.eventbriteapi.com/v3/organizations/${orgID}/events/`,
  eventDetailUrl: `https://www.eventbriteapi.com/v3/events/${perticularEventid}/`,
  updateDetailUrl: `https://www.eventbriteapi.com/v3/events/${perticularEventid}/`

};
export default apiUrls;
