let arr = [];
onconnect = (e) => {
  const port = e.ports[0];
  port.onmessage = (e) => {
    arr.push(e.data);
    port.postMessage(arr);
  }
  console.log(e);
}
