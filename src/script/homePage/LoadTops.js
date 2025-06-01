const Tops = [
  {
    img: "../../assets/homePage/TOPS/0823f2bf88204b8d829c6c67721a0922.jpg",
    name: "ZIGZAG HOODED KHAKI JACKET™",
    button: "detail-product/ziczac_hoodie.html",
    price: "375.000đ",
    sale: "450.000d",
  },
  {
    img: "../../assets/homePage/TOPS/h60x6UW.png",
    name: "KAKI FACE JACKET  HOODED  SHIRT™",
    button: "detail-product/Kaki_Jacket.html",
    price: "375.000đ",
    sale: "430.000d",
  },
  {
    img: "../../assets/homePage/TOPS/kKXp1W9.jpeg",
    name: "SHEEPSMAN FACE KAKI JACKET",
    button: "detail-product/SleepmanFaceKakiJacket.html",
    price: "251.000đ",
    sale: "285.000d",
  },
  {
    img: "../../assets/homePage/TOPS/pUcOAao.png",
    name: "BLACKSHEEPS  JACKET POLO SS TEE",
    button: "detail-product/BlacksheepsPoloTee.html",
    price: "375.000đ",
    sale: "400.000d",
  },
  {
    img: "../../assets/homePage/TOPS/Vj3rWMX.jpeg",
    name: "BIG LOGO FLANNEL SLEEVE TEE SHIRT™",
    button: "detail-product/BigLogoFlannelShirt.html",
    price: "175.000đ",
    sale: "250.000d",
  },
  {
    img: "../../assets/homePage/TOPS/vqMnJ23.png",
    name: "BLACKSQUARE LONG SLEEVE TEE",
    button: "error/404-notfound.html",
    price: "99.000đ",
    sale: "150.000d",
  },
];

const contentTop = document.getElementById("content-top");

Tops.forEach((product) => {
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

  contentTop.appendChild(col);
});
