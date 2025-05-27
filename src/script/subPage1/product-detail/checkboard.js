       // Số lượng
    function increaseQty() {
      let qtyInput = document.getElementById("quantity");
      let value = parseInt(qtyInput.value);
      qtyInput.value = value + 1;
    }
  
    function decreaseQty() {
      let qtyInput = document.getElementById("quantity");
      let value = parseInt(qtyInput.value);
      if (value > 1) {
        qtyInput.value = value - 1;
      }
    }
    // Hover hiệu ứng zoom
    function changeImage(thumb) {
        const mainImage = document.getElementById("mainImage");
        mainImage.src = thumb.src;

    // Highlight ảnh đang được chọn
        const thumbs = document.querySelectorAll('.thumb-img');
        thumbs.forEach(t => t.classList.remove('selected'));
        thumb.classList.add('selected');
    }