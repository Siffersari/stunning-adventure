let xhttp = new XMLHttpRequest();

const description = document.getElementById('description').value;

xhttp.open('GET', '/todos/create?description=' + description);

xhttp.send();

xhttp.onreadystatechange = function() {
  if (this.readyState === 4 && this.status === 200) {
    // on successful response
    console.log(xhttp.responseText);
  }
};
