type Callback = (str: string) => void;

function sendDoneStatus(callback: Callback) {
  callback("done");
}

sendDoneStatus((str) => console.log(str));
