let data = [
  {
    name: "khaa",
    email: "zorintalgmas@gmail.com",
    pass: "Kairi123",
    info: "blablabla",
  },
  {
    name: "kikonn",
    email: "kikonnimup@gmail.com",
    pass: "123",
    info: "akun emel",
  },
];
function updateList() {
  while (document.getElementById("accgrid").firstChild) {
    document
      .getElementById("accgrid")
      .removeChild(document.getElementById("accgrid").firstChild);
  }

  data.forEach((item) => {
    // Buat div utama
    const accountCard = document.createElement("div");
    accountCard.className = "account-card";

    // Buat div header
    const accountHeader = document.createElement("div");
    accountHeader.className = "account-header";

    // Buat div nama
    const accountName = document.createElement("div");
    accountName.className = "account-name";
    accountName.textContent = item.name;

    // Masukkan nama ke header
    accountHeader.appendChild(accountName);

    // Buat email
    const accountEmail = document.createElement("div");
    accountEmail.className = "account-email";
    accountEmail.textContent = item.email;

    // Buat detail password
    const accountDetailPassword = document.createElement("div");
    accountDetailPassword.className = "account-detail";

    const detailLabelPassword = document.createElement("div");
    detailLabelPassword.className = "detail-label";
    detailLabelPassword.textContent = "Password";

    const detailValuePassword = document.createElement("div");
    detailValuePassword.className = "detail-value password-mask";
    detailValuePassword.textContent = item.pass;

    // Susun detail password
    accountDetailPassword.appendChild(detailLabelPassword);
    accountDetailPassword.appendChild(detailValuePassword);

    // Buat detail info tambahan
    const accountDetailInfo = document.createElement("div");
    accountDetailInfo.className = "account-detail";

    const detailLabelInfo = document.createElement("div");
    detailLabelInfo.className = "detail-label";
    detailLabelInfo.textContent = "Informasi Tambahan";

    const detailValueInfo = document.createElement("div");
    detailValueInfo.className = "detail-value";
    detailValueInfo.textContent = item.info;

    // Susun detail info tambahan
    accountDetailInfo.appendChild(detailLabelInfo);
    accountDetailInfo.appendChild(detailValueInfo);

    // Masukkan semua ke card
    accountCard.appendChild(accountHeader);
    accountCard.appendChild(accountEmail);
    accountCard.appendChild(accountDetailPassword);
    accountCard.appendChild(accountDetailInfo);

    // Tambahkan ke body atau container lain
    document.getElementById("accgrid").appendChild(accountCard);
  });
}
function hapusAkun(index) {
  let konifrmasi = confirm("anda yakin ingin menghapus akun?");
  if (konifrmasi) {
    data.splice(index, 1);
  } else {
    alert("penghapusan akun dibatalkan oleh user");
  }
}
function showForm() {
  // Buat div pembungkus
  const formDiv = document.createElement("div");
  formDiv.style.marginTop = "10px";

  // Input Nama
  const namaInput = document.createElement("input");
  namaInput.type = "text";
  namaInput.placeholder = "Nama";

  // Input Email
  const emailInput = document.createElement("input");
  emailInput.type = "email";
  emailInput.placeholder = "Email";

  // Input Password
  const passwordInput = document.createElement("input");
  passwordInput.type = "password";
  passwordInput.placeholder = "Password";

  // Input Info
  const infoInput = document.createElement("input");
  infoInput.type = "text";
  infoInput.placeholder = "Info";

  // Tombol Submit
  const submitBtn = document.createElement("button");
  submitBtn.textContent = "Submit";
  submitBtn.addEventListener("click", () => {
    const obj = {
      name: namaInput.value,
      email: emailInput.value,
      pass: passwordInput.value,
      info: infoInput.value,
    };
    data.push(obj);
    updateList();
  });

  // Tombol Close
  const closeBtn = document.createElement("button");
  closeBtn.textContent = "Close";
  closeBtn.addEventListener("click", () => {
    formDiv.remove();
  });

  // Masukkan semua elemen ke div
  formDiv.appendChild(namaInput);
  formDiv.appendChild(document.createElement("br"));
  formDiv.appendChild(emailInput);
  formDiv.appendChild(document.createElement("br"));
  formDiv.appendChild(passwordInput);
  formDiv.appendChild(document.createElement("br"));
  formDiv.appendChild(infoInput);
  formDiv.appendChild(document.createElement("br"));
  formDiv.appendChild(submitBtn);
  formDiv.appendChild(closeBtn);
  formDiv.classList = "form";
  // Tambahkan div ke body
  document.body.appendChild(formDiv);
}
function editForm(item) {
  // Buat overlay blur
  const overlay = document.createElement("div");
  overlay.style.position = "fixed";
  overlay.style.top = "0";
  overlay.style.left = "0";
  overlay.style.width = "100%";
  overlay.style.height = "100%";
  overlay.style.backgroundColor = "rgba(0,0,0,0.3)";
  overlay.style.backdropFilter = "blur(5px)";
  overlay.style.display = "flex";
  overlay.style.justifyContent = "center";
  overlay.style.alignItems = "center";
  overlay.style.zIndex = "9999";

  // Buat form
  const form = document.createElement("form");
  form.style.backgroundColor = "white";
  form.style.padding = "20px";
  form.style.borderRadius = "8px";
  form.style.display = "flex";
  form.style.flexDirection = "column";
  form.style.gap = "10px";
  form.style.minWidth = "250px";

  // Input Nama
  const inputNama = document.createElement("input");
  inputNama.type = "text";
  inputNama.placeholder = "Nama";
  inputNama.value = item.name;
  form.appendChild(inputNama);

  // Input Email
  const inputEmail = document.createElement("input");
  inputEmail.type = "email";
  inputEmail.placeholder = "Email";
  inputEmail.value = item.email;
  form.appendChild(inputEmail);

  // Input Password
  const inputPassword = document.createElement("input");
  inputPassword.type = "password";
  inputPassword.placeholder = "Password";
  inputPassword.value = item.pass;
  form.appendChild(inputPassword);

  // Input User
  const inputInfo = document.createElement("input");
  inputInfo.type = "text";
  inputInfo.placeholder = "Info";
  inputInfo.value = item.info;
  form.appendChild(inputInfo);

  // Tombol Cancel
  const cancelBtn = document.createElement("button");
  cancelBtn.type = "button";
  cancelBtn.textContent = "Cancel";
  form.appendChild(cancelBtn);

  // Tombol Submit
  const submitBtn = document.createElement("button");
  submitBtn.type = "submit";
  submitBtn.textContent = "Submit";
  submitBtn.addEventListener("click", (e) => {
    e.preventDefault();
    item.name = inputNama.value;
    item.email = inputEmail.value;
    item.pass = inputPassword.value;
    item.info = inputInfo.value;

    updateList();
  });
  form.appendChild(submitBtn);

  // Tambahkan form ke overlay
  overlay.appendChild(form);

  // Tambahkan overlay ke body
  document.body.appendChild(overlay);

  // Event Cancel untuk menghilangkan form
  cancelBtn.addEventListener("click", () => {
    document.body.removeChild(overlay);
  });
}
function editAkun() {
  const container = document.createElement("div");

  const p = document.createElement("p");
  p.textContent = "pilih akun yang ingin diedit";
  container.appendChild(p);

  const closeBtn = document.createElement("button");
  closeBtn.textContent = "Close";
  closeBtn.textContent = "Close";
  closeBtn.addEventListener("click", () => {
    container.remove();
  });
  data.forEach((item, index) => {
    const akunSelector = document.createElement("div");
    akunSelector.className = "akun-selector";

    const akunDiv = document.createElement("div");

    const nameP = document.createElement("p");
    nameP.textContent = "Name: " + item.name;
    akunDiv.appendChild(nameP);

    const iconDiv = document.createElement("div");

    const editImg = document.createElement("img");
    editImg.src = "assets/icon/edit.png";
    editImg.addEventListener("click", () => {
      editForm(item);
    });
    iconDiv.appendChild(editImg);

    const deleteImg = document.createElement("img");
    deleteImg.src = "assets/icon/delete.png";
    deleteImg.addEventListener("click", () => {
      hapusAkun(index);
      updateList();
    });
    iconDiv.appendChild(deleteImg);

    akunDiv.appendChild(iconDiv);
    akunSelector.appendChild(akunDiv);
    container.appendChild(akunSelector);

    container.appendChild(closeBtn);

    //append
    document.body.appendChild(container);
  });
}
document.getElementById("tambah").addEventListener("click", () => {
  showForm();
});
document.getElementById("edit").addEventListener("click", () => {
  editAkun();
});
updateList();
