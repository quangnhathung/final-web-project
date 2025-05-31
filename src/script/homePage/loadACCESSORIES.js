const acess = [
  {
    img: "../../../assets/homePage/ACCESSORIES/1.png",
    name: "BlackSheeps Mini Shoulder Bag™",
    button: "detail-product/black-sheep.html ",
    price: "355.000đ",
    sale: "195.000d",
  },
  {
    img: "../../../assets/homePage/ACCESSORIES/2.jpeg",
    name: "/two-tone line/ Big Logo Mask™",
    button: "detail-product/BigLogoMask_TwoToneLine.html",
    price: "70.000đ",
    sale: "21.000d",
  },
  {
    img: "../../../assets/homePage/ACCESSORIES/3.jpeg",
    name: "two-tone line/ Big Logo Mask™(black)",
    button: "detail-product/BIg_mask(2).html ",
    price: "70.000đ",
    sale: "21.000d",
  },
  {
    img: "../../../assets/homePage/ACCESSORIES/4.jpeg",
    name: "5THEWAY® 학교 PEN POUCH™ (Limited)",
    button: "detail-product/pen-pouch.html ",
    price: "150.000đ",
    sale: "",
  },
];

const contentAcess = document.getElementById("content-access");

acess.forEach((product) => {
  const col = document.createElement("content-access");
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

  contentAcess.appendChild(col);
});
