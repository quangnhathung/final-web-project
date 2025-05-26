document.getElementById("saveInfo").addEventListener("click", function () {
  event.preventDefault(); //chan reload trang
  console.log("da click");
  document.getElementById("Name").innerText = `${
    document.getElementById("fullName").value
  }`;
  document.getElementById("PhoneNum").innerText = `${
    document.getElementById("phone").value
  }`;
  document.getElementById("Email").innerText = `${
    document.getElementById("email").value
  }`;
  document.getElementById("Addr").innerText = `${
    document.getElementById("address").value
  }`;
  document.getElementById("Sex").innerText = `${
    document.querySelector('input[name="gender"]:checked')?.value ||
    "Bóng long xuyên"
  }`;
  document.getElementById("Birth").innerText = `${
    document.getElementById("dob").value
  }`;
});

document.getElementById("aInput").addEventListener("change", function (event) {
  const file = event.target.files[0];
  if (file) {
    const reader = new FileReader();
    reader.onload = function (e) {
      document.getElementById("Img").src = e.target.result;
    };
    reader.readAsDataURL(file);
  }
});
