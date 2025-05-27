function showToast() {
  console.log("add to cảt");
  const toastEl = document.getElementById("add-success");
  const toastBootstrap = bootstrap.Toast.getOrCreateInstance(toastEl, {
    delay: 1500,
  });

  toastBootstrap.show();
}
