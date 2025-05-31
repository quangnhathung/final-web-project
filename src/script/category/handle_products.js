// Với mỗi 1 sản phẩm là 1 dict như sau:
// { 
//   link_anh: "../detail-product/ảnh", 
//   ten_sp: "tên sản phẩm", button: "link đến sản phẩm",
//   price: "giá gốc sản phẩm", 
//   sale: "giá sản phẩm sau khuyến mãi", 
//   loai_sp: "loại sản phẩm" 
// }
// Loại sản phẩm: Áo, Quần, Phụ kiện

// Nếu không có khuyến mãi, giá trị price và sale sẽ lần lượt là:
// price: "", sale: "giá sản phẩm"

const listproduct = [
  {
    link_anh: "../../../assets/public/0hZe7KE.png",
    ten_sp: "SHEEPSMAN FACE 6-PANEL CAP",
    button: "../detail-product/detailproduct.html",
    price: "330.000đ",
    sale: "143.000đ",
    loai_sp: "Phụ kiện",
  },
  {
    link_anh: "../../../assets/public/2p9OYYL.jpeg",
    ten_sp: "/checkerboard/ &#xA; New Tee",
    button: "../detail-product/checkerboard.html",
    price: "390.000đ",
    sale: "195.000đ",
    loai_sp: "Áo",
  },
  {
    link_anh: "../../../assets/public/7KT4nnr.png",
    ten_sp: "ATHLETIC LOGO OVERSIZED SS TEE",
    button: "../detail-product/black-sheep.html",
    price: "370.000đ",
    sale: "145.000đ",
    loai_sp: "Áo",
  },
  {
    link_anh: "../../../assets/public/9Zp92gi.jpeg",
    ten_sp: "/solid/ Big Logo Mask",
    button: "../detail-product/BIg_mask(2).html",
    price: "70.000đ",
    sale: "21.000đ",
    loai_sp: "Phụ kiện",
  },

  {
    link_anh: "../../../assets/public/main1.jpg",
    ten_sp: "LED SIGN /teddy bear/ NEW TEE™",
    button: "#",
    price: "390.000đ",
    sale: "99.000đ",
    loai_sp: "Áo",
  },

  {
    link_anh: "../../../assets/public/0823f2bf88204b8d829c6c67721a0922.jpg",
    ten_sp: "/public icon/ ZIGZAG HOODED KHAKI JACKET™",
    button: "../detail-product/ziczac_hoodie.html",
    price: "590.000đ",
    sale: "375.000đ",
    loai_sp: "Áo",
  },

  {
    link_anh: "../../../assets/public/apFsKUV.jpeg",
    ten_sp: "/milky way/ Vertical Drop Shoulder Tee™",
    button: "../detail-product/vertical_tee.html",
    price: "",
    sale: "370.000đ",
    loai_sp: "Áo",
  },
  {
    link_anh: "../../../assets/public/B4cFp4A.jpeg",
    ten_sp: "/solid/ Rocket Backpack",
    button: "../detail-product/rocket-backpack.html",
    price: "550.000đ",
    sale: "201.000đ",
    loai_sp: "Phụ kiện",
  },

  {
    link_anh: "../../../assets/public/1.png",
    ten_sp: "BlackSheeps Mini Shoulder Bag",
    button: "../detail-product/minibag.html",
    price: "350.000đ",
    sale: "195.000đ",
    loai_sp: "Phụ kiện",
  },

  {
    link_anh: "../../../assets/public/eGW9p85.jpeg",
    ten_sp: "5THEWAY RELAXED TAPERED PANTS",
    button: "../detail-product/relax_pants.html",
    price: "490.000đ",
    sale: "181.000đ",
    loai_sp: "Quần",
  },
  {
    link_anh: "../../../assets/public/F1Tqkq3.png",
    ten_sp: "SHEEPSMAN FACE MASK",
    button: "../detail-product/sheepsman_face_mask.html",
    price: "70.000đ",
    sale: "21.000đ",
    loai_sp: "Phụ kiện",
  },

  {
    link_anh: "../../../assets/public/gVrAhx4.jpeg",
    ten_sp: "/trademark™/ CARGO PANT",
    button: "../detail-product/cargo_pants.html",
    price: "550.000đ",
    sale: "95.000đ",
    loai_sp: "Quần",
  },

  {
    link_anh: "../../../assets/public/H6HJdSJ.jpeg",
    ten_sp: "5THEWAY® 학교 VARSITY TONE ROCKET BACKPACK™",
    button: "../detail-product/varsity_backpack.html",
    price: "550.000đ",
    sale: "471.000đ",
    loai_sp: "Phụ kiện",
  },
  {
    link_anh: "../../../assets/public/h60x6UW.png",
    ten_sp: "/floral youth/ KAKI JACKET",
    button: "../detail-product/Kaki_Jacket.html",
    price: "890.000đ",
    sale: "233.000đ",
    loai_sp: "Áo",
  },
  {
    link_anh: "../../../assets/public/hwTs3US.jpeg",
    ten_sp: "/two-tone line/ Big Logo Mask",
    button: "../detail-product/BigLogoMask_TwoToneLine.html",
    price: "70.000đ",
    sale: "21.000đ",
    loai_sp: "Phụ kiện",
  },

  {
    link_anh: "../../../assets/public/2.jpeg",
    ten_sp: "/two-tone line/ Letter Mask",
    button: "../detail-product/letter-mask.html",
    price: "70.000đ",
    sale: "21.000đ",
    loai_sp: "Phụ kiện",
  },
  {
    link_anh: "../../../assets/public/jYP98si.png",
    ten_sp: "/sketch/ Embroider Traditional Fit Hoodie",
    button: "../detail-product/Embroider_Traditional_Fit_Hoodie.html",
    price: "790.000đ",
    sale: "333.000đ",
    loai_sp: "Áo",
  },

  {
    link_anh: "../../../assets/public/kKXp1W9.jpeg",
    ten_sp: "SHEEPSMAN FACE KAKI JACKET",
    button: "../detail-product/SleepmanFaceKakiJacket.html",
    price: "650.000đ",
    sale: "251.000đ",
    loai_sp: "Áo",
  },

  {
    link_anh: "../../../assets/public/4.jpeg",
    ten_sp: "5THEWAY® 학교 PEN POUCH™",
    button: "../detail-product/pen-pouch.html",
    price: "../detail-product/pen-pouch.html",
    sale: "150.000đ",
    loai_sp: "Phụ kiện",
  },

  {
    link_anh: "../../../assets/public/main.jpg",
    ten_sp: "/PUBLIC ICON/ LONG WALLET",
    button: "../detail-product/LongWallet.html",
    price: "350.000đ",
    sale: "143.000đ",
    loai_sp: "Phụ kiện",
  },
  {
    link_anh: "../../../assets/public/3.jpeg",
    ten_sp: "/solid/ Big Logo Mask",
    button: "../detail-product/big_logo_mask.html",
    price: "70.000đ",
    sale: "21.000đ",
    loai_sp: "Phụ kiện",
  },
  {
    link_anh: "../../../assets/public/pUcOAao.png",
    ten_sp: "BLACKSHEEPS POLO LS TEE",
    button: "../detail-product/BlackSheepsPoloTee.html",
    price: "430.000đ",
    sale: "99.000đ",
    loai_sp: "Áo",
  },
  {
    link_anh: "../../../assets/public/RVXdJCd.png",
    ten_sp: "SPACE JAM SS TEE",
    button: "../detail-product/SpaceJamTee.html",
    price: "390.000đ",
    sale: "99.000đ",
    loai_sp: "Áo",
  },
  {
    link_anh: "../../../assets/public/tbjmHcb.png",
    ten_sp: "/teddy bear/ CROP TEE",
    button: "../detail-product/CropTee.html",
    price: "270.000đ",
    sale: "99.000đ",
    loai_sp: "Áo",
  },
  {
    link_anh: "../../../assets/public/UOhS20W.png",
    ten_sp: "/plastic/ ROCKET BACKPACK",
    button: "../detail-product/RocketBackpackPlastic.html",
    price: "610.000đ",
    sale: "201.000đ",
    loai_sp: "Phụ kiện",
  },
  {
    link_anh: "../../../assets/public/UZ4JuK5.png",
    ten_sp: "SHEEPSMAN FACE HOODIE",
    button: "../detail-product/SleepmanFaceHoodie.html",
    price: "650.000đ",
    sale: "175.000đ",
    loai_sp: "Áo",
  },
  {
    link_anh: "../../../assets/public/Vj3rWMX.jpeg",
    ten_sp: "/stroke/ BIG LOGO FLANNEL SHIRT™",
    button: "../detail-product/BigLogoFlannelShirt.html",
    price: "470.000đ",
    sale: "175.000đ",
    loai_sp: "Áo",
  },
  {
    link_anh: "../../../assets/public/vqMnJ23.png",
    ten_sp: "/YILAC/ SQUARE LONG SLEEVE TEE",
    button: "../detail-product/SquareLongSleeveTee.html",
    price: "450.000đ",
    sale: "99.000đ",
    loai_sp: "Áo",
  },
  {
    link_anh: "../../../assets/public/XsIqeyw.jpeg",
    ten_sp: "/solid/ Letter Logo Mask",
    button: "../detail-product/LetterLogoMask_solid.html",
    price: "70.000đ",
    sale: "21.000đ",
    loai_sp: "Phụ kiện",
  },
  {
    link_anh: "../../../assets/public/YcmDCv9.jpeg",
    ten_sp: "/over/ Corduroy Dad Cap",
    button: "../detail-product/Dad_cap.html",
    price: "390.000đ",
    sale: "151.000đ",
    loai_sp: "Phụ kiện",
  },
];

// Hàm render sản phẩm theo loại
const product = document.getElementById("category-row");
function Handle(selectedValue) {
  product.innerHTML = ""; // Xóa sản phẩm cũ trước
  listproduct.forEach((item) => {
    if (item.loai_sp === selectedValue) {
      Tao_The_San_Pham(
        item.link_anh,
        item.ten_sp,
        item.button,
        item.price,
        item.sale
      );
    }
  });
}

// Hàm này sẽ render tất cả sản phẩm, không phân loại
function Tat_Ca_San_Pham() {
  product.innerHTML = ""; // Reset trước khi render tất cả
  listproduct.forEach((item) => {
    Tao_The_San_Pham(
      item.link_anh,
      item.ten_sp,
      item.button,
      item.price,
      item.sale
    );
  });
}

// Hàm tạo thẻ sản phẩm
function Tao_The_San_Pham(link_anh, ten_sp, button, price, sale) {
  const div = document.createElement("div");
  div.classList.add("col-xl-3");
  div.innerHTML = `
        <div class="card h-100 d-flex" style:"justify-content:center >
            <img src="${link_anh}" class="card-img-top" alt="${ten_sp}" style="height: 300px; object-fit: cover;">
            <div class="card-body d-flex flex-column">
                <h5 class="card-title">${ten_sp}</h5>
                <div style="display:flex; flex-direction: column; justify-content: flex-end; flex:1;" >
                    <p class="card-text text-danger fs-4 fw-bold">${sale} <s style="font-size: 15px;color:rgb(127, 130, 130);">${price}</s></p>

                    <label onclick="showToast()" class="cart-button text-center">
                      <div style = "color:white;text-decoration: none;">
                          <span class="cart-icon">
                              <i class="bi bi-cart-plus" style="font-size: 24px;"></i>
                          </span>
                          Thêm vào giỏ hàng
                          <div class="progress-bar"></div>
                      </div>
                    </label>

                    <a href="${button}"  class="btn btn-outline-dark rounded-4 fs-4"><i class="bi bi-basket3"></i>Mua ngay</a>
                </div>
            </div>
        </div>
    `;
  product.appendChild(div);
}

// Hàm xử lý lọc sản phẩm
const select = document.getElementById("select-category");

select.onchange = function () {
  const value = select.value;
  if (value === "0") {
    Tat_Ca_San_Pham();
  } else {
    Handle(value);
  }
};

// Render lần đầu
Tat_Ca_San_Pham();