"use strict";

//You are going to need your own spesific API key - follow the instruction in the README.md file
const parksUrl =
  "https://developer.nps.gov/api/v1/parks?stateCode=MD&api_key=Z0JYxq0RVQGYlSzaKoAJxcg07PXUPPDTVAmGbhGa";

const updateUISuccess = function (data) {
  const parseData = JSON.parse(data);
  console.log(parseData);
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

createRequest(parksUrl);