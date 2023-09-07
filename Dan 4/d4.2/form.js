
document.getElementById("submit").addEventListener("submit", function (event) {
    event.preventDefault();
    let title = document.querySelector("input[name='title']").value;
    let body = document.querySelector("input[name='body']").value;
    let userId = document.querySelector("input[name='userId']").value;
  
    const xhttp = new XMLHttpRequest();
    xhttp.addEventListener("readystatechange", function () {
      if (xhttp.readyState == 4 && xhttp.status == 201) {
        alert(xhttp.responseText);
      }
    });
    xhttp.open("POST", "https://jsonplaceholder.typicode.com/posts");
    xhttp.send(
      JSON.stringify({
        title: title,
        body: body,
        userId: userId,
      })
    );
  });
  
  // document.getElementById("submit").addEventListener("submit", function (event) {
  //   event.preventDefault();
  //   let title = document.querySelector("input[name='title']").value;
  //   let body = document.querySelector("input[name='body']").value;
  //   let userId = document.querySelector("input[name='userId']").value;
  
  //   fetch("https://jsonplaceholder.typicode.com/posts", {
  //     method: "POST",
  //     headers: {
  //       'Content-Type': 'application/json'
  //     },
  //     body: JSON.stringify({
  //       title: title,
  //       body: body,
  //       userId: userId,
  //     })
  //   }).then(res => res.json()).then(res => console.log(res))
  // });