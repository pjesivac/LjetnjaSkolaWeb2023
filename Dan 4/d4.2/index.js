// (function () {
//     const xhttp = new XMLHttpRequest();
//     xhttp.addEventListener("readystatechange", function () {
//         // xhttp.onreadystatechange = function () { - moze se koristiti i ovako
//         if (xhttp.readyState == 4 && xhttp.status == 200) {
//             let products = JSON.parse(xhttp.responseText).products;
//             products.forEach((element) => {
//                 document.getElementById("container").innerHTML += `<div class="card"> \
//                      <div> \
//                        <h3><b>${element.title}</b></h3> \
//                        <p class="description"> \
//                          ${element.description} \
//                        </p> \
//                        <div class="price"> \
//                          <p>$${element.price}</p> \
//                        </div> \
//                      </div> \
//                      <div> \
//                        <span><p>-${element.discountPercentage}%</p></span> \
//                        <img \
//                          src="${element.thumbnail}" \
//                          alt="" \
//                        /> \
//                      </div> \
//                    </div>`;
//             });
//         }
//     });
//     xhttp.open("GET", "https://dummyjson.com/products", true);
//     xhttp.send();
// })();

(function () {
    fetch("https://dummyjson.com/products")
        .then((response) => {
            return response.json();
        })
        .then((result) => {
            console.log(result);
            let innerHtml = "";
            result.products.forEach((element) => {
                innerHtml += `<div class="card"> \
          <div> \
            <h3><b>${element.title}</b></h3> \
            <p class="description"> \
              ${element.description} \
            </p> \
            <div class="price"> \
              <p>$${element.price}</p> \
            </div> \
          </div> \
          <div> \
            <span><p>-${element.discountPercentage}%</p></span> \
            <img \
              src="${element.thumbnail}" \
              alt="" \
            /> \
          </div> \
        </div>`;
            });
            document.getElementById("container").innerHTML = innerHtml;
        });
})();

// (async () => {
//     try {
//         const response = await fetch("https://dummyjson.com/products");
//         console.log(response)
//         const result = await response.json();
//         console.log(result);
//     } catch (error) {
//         console.error("Error:", error);
//     }
// })();