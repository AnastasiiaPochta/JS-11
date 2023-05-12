function jsonPost(url, data) {
  return new Promise((resolve, reject) => {
    var x = new XMLHttpRequest();
    x.onerror = () => reject(new Error("jsonPost failed"));
    //x.setRequestHeader('Content-Type', 'application/json');
    x.open("POST", url, true);
    x.send(JSON.stringify(data));

    x.onreadystatechange = () => {
      if (x.readyState == XMLHttpRequest.DONE && x.status == 200) {
        resolve(JSON.parse(x.responseText));
      } else if (x.status != 200) {
        reject(new Error("status is not 200"));
      }
    };
  });
}

jsonPost("http://students.a-level.com.ua:10012", {func: 'addMessage', nick: "Anon", message: 'rrrrrrr'})