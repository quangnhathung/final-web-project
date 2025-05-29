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

const imageData = {
    lemon: [
        '../../../assets/public/jYP98si.png',
        '../../../assets/thumbnail/Embroider_Traditional_Fit_Hoodie2.png',
        '../../../assets/thumbnail/Embroider_Traditional_Fit_Hoodie3.png',
        '../../../assets/thumbnail/Embroider_Traditional_Fit_Hoodie4.png',
        '../../../assets/thumbnail/Embroider_Traditional_Fit_Hoodie5.png'
    ],
     
    caramel: [
        '../../../assets/thumbnail/hoodie_caramel_1.png',
        '../../../assets/thumbnail/hoodie_caramel_2.png',
        '../../../assets/thumbnail/hoodie_caramel_3.png',
        '../../../assets/thumbnail/hoodie_caramel_4.png',
        '../../../assets/thumbnail/hoodie_caramel_5.png'
    ],
};

function updateImages(color) {
      const images = imageData[color];
      if (!images) return;

      const mainImage = document.getElementById('mainImage');
      mainImage.src = images[0];

      const container = document.getElementById('thumbnailContainer');
      container.innerHTML = '';

      images.forEach((src, index) => {
        const img = document.createElement('img');
        img.src = src;
        img.className = 'img-thumbnail thumb-img img-bordered';
        if (index === 0) img.classList.add('selected');

        img.onclick = () => {
          mainImage.src = src;
          document.querySelectorAll('.thumb-img').forEach(t => t.classList.remove('selected'));
          img.classList.add('selected');
        };

        container.appendChild(img);
      });
}

document.querySelectorAll('input[name="color"]').forEach(input => {
      input.addEventListener('change', function () {
        updateImages(this.id);
      });
});

window.onload = () => updateImages('lemon');