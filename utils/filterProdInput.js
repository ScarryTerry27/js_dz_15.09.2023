function renderProduct(obj) {
  let productResult = document.getElementById("productResult");
  let productBox = document.createElement("div");
  let infoBox = document.createElement("div");
  let foto = document.createElement("img");
  let title = document.createElement("h2");
  let desc = document.createElement("p");
  let rating = document.createElement("div");
  let rate = document.createElement("span");
  let price = document.createElement("span");

  productBox.classList.add("productBox");
  foto.classList.add("foto");
  title.classList.add("title");
  desc.classList.add("desc");
  rating.classList.add("rating");
  rate.classList.add("rate");
  price.classList.add("price");

  foto.src = obj.image;
  desc.textContent = obj.description;
  title.textContent = obj.title;
  rate.textContent = obj.rating?.rate;
  price.textContent = obj.price;

  rating.append(rate, price);
  infoBox.append(foto, title, desc);
  productBox.append(infoBox, rating);
  productResult.append(productBox);
}

export default function AllProduct(cnd) {
  try {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((json) => {
        json.map((item) => {
          console.log(typeof cnd);
          if (typeof cnd === "string") {
            if (item.title.toUpperCase().indexOf(cnd.toUpperCase()) >= 0) {
              renderProduct(item);
            }
          }
          if (typeof cnd === "number") {
            if (parseFloat(item.rating.rate) >= cnd) {
              renderProduct(item);
            }
          }
        });
      });
  } catch (e) {
    console.log(e);
  }
}
