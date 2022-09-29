import appheader from './appheader.js';

const dashboard = {
  getHtml: function () {
    const dashboardContainer = document.createElement('div');
    dashboardContainer.appendChild(appheader.getHtml());

    return dashboardContainer;
  }
};

export default dashboard;
