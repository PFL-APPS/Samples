onconnect = (e) => {
  const port = e.ports[0];
  let arr = [];
  port.onmessage = (e) => {
    arr.push(e.data);
    port.postMessage(arr);
  }
  console.log(e);
}
