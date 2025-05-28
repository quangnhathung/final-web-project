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
    hotpink: [
        '../../../assets/public/dadcap_pink1.png',
        '../../../assets/public/dadcap_pink2.png'
    ],
     
    purple: [
        '../../../assets/thumbnail/YcmDCv9.jpeg',
        '../../../assets/thumbnail/dadcap_purple.png'
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

window.onload = () => updateImages('hotpink');