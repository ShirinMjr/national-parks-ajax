"use strict";

//You are going to need your own spesific API key - follow the instruction in the README.md file
//const parksUrl =
// "https://developer.nps.gov/api/v1/parks?stateCode=MD&api_key=Z0JYxq0RVQGYlSzaKoAJxcg07PXUPPDTVAmGbhGa";
//https://www.nps.gov/subjects/developer/guides.htm#CP_JUMP_5617008
const parksUrl = "https://developer.nps.gov/api/v1/parks";
const api_key = "Z0JYxq0RVQGYlSzaKoAJxcg07PXUPPDTVAmGbhGa";
const stateCode = "MD";
const into = document.querySelector(".container");

const updateUISuccess = function (data) {
  const parseData = JSON.parse(data);
  console.log("Josn format", parseData);

  let container = document.createElement("div");
  let pElem = document.createElement("p");
  pElem.textContent = JSON.stringify(parseData);
  container.appendChild(pElem);
  into.replaceChild(container, document.querySelector(".container div"));
  console.log(container);
};
const updateUIError = function (error) {
  console.log(error);
};

const responseMethod = function (httpRequest) {
  if (httpRequest.readyState === 4) {
    console.log(httpRequest);
    if (httpRequest.status === 200) {
      updateUISuccess(httpRequest.responseText);
    } else {
      updateUIError(httpRequest.status + ": " + httpRequest.responseText);
    }
  }
};

const createRequest = function (url) {
  const httpRequest = new XMLHttpRequest(url);
  httpRequest.addEventListener("readystatechange", (url) => responseMethod(httpRequest));
  httpRequest.open("Get", url);
  httpRequest.send();
  console.log(httpRequest);
};

const checkCompletion = function () {
  console.log("Checking if state has value before sending the request.");
  if (stateCode !== "") {
    console.log("This shouldn't run");
    const requestUrl = createRequest(`${parksUrl}?stateCode=${stateCode}&api_key=${api_key}`);
  }
};
checkCompletion();
