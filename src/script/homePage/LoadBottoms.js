const Bottoms = [
  {
    img: "../../assets/homePage/Bottoms/1.jpeg",
    name: "/floral youth/ KAKI PAN pinkkk™",
    button: "detail-product/Kaki_Jacket.html",
    price: "231.000đ",
    sale: "730.000d",
  },
  {
    img: "../../assets/homePage/Bottoms/3.jpeg",
    name: "/floral youth/ KAKI PAN YELLOW (special vesion)™",
    button: "detail-product/Kaki_Jacket.html",
    price: "375.000đ",
    sale: "430.000d",
  },
  {
    img: "../../assets/homePage/Bottoms/4.png",
    name: "/street-voca/ FLEECE TROUSERS™",
    button: "error/404-notfound.html",
    price: "231.000đ",
    sale: "285.000d",
  },
  {
    img: "../../assets/homePage/Bottoms/5.jpeg",
    name: "/public icon/ SKATER SHORT KHAKI™",
    button: "error/404-notfound.html",
    price: "129.000đ",
    sale: "350.000d",
  },
  {
    img: "../../assets/homePage/Bottoms/6.jpeg",
    name: "/trademark™/ CARGO PANTS FLANNEL SLEEVE",
    button: "detail-product/cargo_pants.html",
    price: "95.000đ",
    sale: "550.000d",
  },
];

const contentBts = document.getElementById("content-bottom");

Bottoms.forEach((product) => {
  const col = document.createElement("div");
  col.className = "col-md-4  col-lg-3 pb-1 gx-2 gy-1 item-top";

  col.innerHTML = `
        <div class="card h-100">
            <img src="${product.img}" class="card-img-top" alt="${product.name}">
            <div class="card-body d-flex flex-column">
                <h5 class="card-title">${product.name}</h5>
                <p class="card-text text-danger fs-4 fw-bold">${product.price} <s style="font-size: 15px;color:rgb(127, 130, 130);">${product.sale}</s></p>
                <input hidden class="cart-toggle" id="cart-toggle" type="checkbox" />
                <label onclick="showToast()" class="cart-button text-center">
                    <div style = "color:white;text-decoration: none;">
                        <span class="cart-icon">
                            <i class="bi bi-cart-plus" style="font-size: 24px;"></i>
                        </span>
                        Thêm vào giỏ hàng
                        <div class="progress-bar"></div>
                    </div>
                </label>

                <a href="${product.button}" class="btn btn-outline-dark rounded-4 fs-4 mt-auto"><i class="bi bi-basket3"></i>Mua ngay</a>
            </div>
        </div>
    `;

  contentBts.appendChild(col);
});
