function toggleMenu() {
  document.getElementById("menu").classList.toggle("active");
}

let cards = document.querySelectorAll(".card");

cards.forEach((card) => {
  card.addEventListener("click", () => {
    // hide homepage
    document.querySelector(".container").style.display = "none";

    // create detail view
    let detailDiv = document.createElement("div");
    detailDiv.classList.add("cardDetail");

    detailDiv.innerHTML = `
      <img src="${card.querySelector("img").src}">
      <div class="detailText">
        <h2>Top Trending Wear</h2>
        <h3>30% OFF on Trend Wear</h3>

        <p>Premium quality product</p>
        <p>Free delivery available</p>
        <p>Easy return policy</p>

        <i class="fa-solid fa-star"></i>
        <i class="fa-solid fa-star"></i>
        <i class="fa-solid fa-star"></i>
        <i class="fa-solid fa-star"></i>
        <i class="fa-solid fa-star-half-stroke"></i>

        <br><br>
        <button id="buyBtn">Buy Now</button>
        <button id="addCartBtn">Add To Cart</button>
        <br><br>
        <a href="#" id="backBtn">⬅ Back</a>
      </div>
    `;

    document.body.appendChild(detailDiv);

    // BACK button
    document.getElementById("backBtn").addEventListener("click", (e) => {
      e.preventDefault();
      detailDiv.remove();
      document.querySelector(".container").style.display = "block";
      window.scrollTo(0, 0);
    });

    // ADD TO CART
    document.getElementById("addCartBtn").addEventListener("click", () => {
      cartCount++;
      alert("Product added to cart ");
    });

    // BUY NOW
    document.getElementById("buyBtn").addEventListener("click", () => {
      alert("Proceeding to checkout ");
    });
  });
});

/***********************
  SEARCH FUNCTIONALITY
************************/

let searchInput = document.querySelector(".searchBar input");
let allCards = document.querySelectorAll(".card");

searchInput.addEventListener("keyup", () => {
  let value = searchInput.value.toLowerCase();

  allCards.forEach((card) => {
    let text = card.innerText.toLowerCase();
    card.style.display = text.includes(value) ? "block" : "none";
  });
});

/***********************
  USER ICON FUNCTION
************************/

let userIcon = document.querySelector(".fa-user");

userIcon.addEventListener("click", () => {
  alert("Please login or signup first");
});

/***********************
  CART ICON FUNCTION
************************/

let cartCount = 0;
let cartIcon = document.querySelector(".fa-bag-shopping");

cartIcon.addEventListener("click", () => {
  alert(`You have ${cartCount} item(s) in your cart`);
});
