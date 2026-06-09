function tambahKeranjang(nama, harga, gambar) {
  let keranjang = JSON.parse(localStorage.getItem('keranjang')) || [];
  keranjang.push({ nama, harga, gambar });
  localStorage.setItem('keranjang', JSON.stringify(keranjang));
  alert('Produk masuk keranjang');
}

if (document.getElementById('listKeranjang')) {
  let keranjang = JSON.parse(localStorage.getItem('keranjang')) || [];
  let total = 0;
  let tampil = document.getElementById('listKeranjang');
  keranjang.forEach(p => {
    total += p.harga;
    tampil.innerHTML += `<img src="${p.gambar}" width="80"> ${p.nama} - Rp${p.harga}<br>`;
  });
  document.getElementById('total').innerText = 'Total: Rp' + total;
}

function checkout() {
  window.location.href = 'checkout.html';
}

if (document.getElementById('checkout')) {
  let keranjang = JSON.parse(localStorage.getItem('keranjang')) || [];
  let tampil = document.getElementById('checkout');
  keranjang.forEach(p => {
    tampil.innerHTML += `<p>${p.nama} - Rp${p.harga}</p>`;
  });
}

function simpanPesanan(e) {
  e.preventDefault();
  let pesanan = JSON.parse(localStorage.getItem('pesanan')) || [];
  let keranjang = JSON.parse(localStorage.getItem('keranjang')) || [];
  pesanan.push({ tanggal: new Date().toLocaleString(), item: keranjang });
  localStorage.setItem('pesanan', JSON.stringify(pesanan));
  localStorage.removeItem('keranjang');
  alert('Pesanan berhasil');
  window.location.href = 'admin.html';
}

if (document.getElementById('admin')) {
  let data = JSON.parse(localStorage.getItem('pesanan')) || [];
  let tampil = document.getElementById('admin');
  data.forEach(p => {
    tampil.innerHTML += `<h3>${p.tanggal}</h3>`;
    p.item.forEach(i => tampil.innerHTML += `${i.nama} - Rp${i.harga}<br>`);
    tampil.innerHTML += '<hr>';
  });
}