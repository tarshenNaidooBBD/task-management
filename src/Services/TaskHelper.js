const homeUrl = "https://z8sp8dl9if.execute-api.eu-west-2.amazonaws.com/dev/";
const userID = "2509";

const createURL = (id) => {
    let urlFinal = homeUrl + "{" + userID + "}/tasks";
    if (id === "-1") {
        return urlFinal;
    } else {
        return urlFinal + "/{" + id + "}";
    }
}

const createHttpGetRequest = (id = -1) => {
    let httpRequest = new XMLHttpRequest();
    httpRequest.open("GET", createURL(id), true);
}
const createHttpPOSTRequest = (id = -1) => {
    let httpRequest = new XMLHttpRequest();
    httpRequest.open("POST", createURL(id), true);
}
const createHttpPUTRequest = (id, data) => {
    let httpRequest = new XMLHttpRequest();
    httpRequest.open('PUT', createURL(id), true);
    httpRequest.send(JSON.stringify(data));
}
const createHTTPDeleteRequest = (id) => {
    let httpRequest = new XMLHttpRequest();
    httpRequest.open('DELETE', createURL(id), true);
    httpRequest.send(null);
}

const addRootTask = () => {
    createHttpPOSTRequest("POST");
}

const addSubTask = (id) => {
    createHttpPOSTRequest("POST", id);
}

const getTasks = () => {
    createHttpGetRequest("GET");
}

const getTask = (id) => {
    createHttpGetRequest("GET", id);
}

const modifyTask = (id, data) => {
    createHttpPUTRequest(id, data);
}

const deleteTask = (id) => {
 createHTTPDeleteRequest(id);
}