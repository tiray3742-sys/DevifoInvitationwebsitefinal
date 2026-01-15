function order(produk) {
    let pesan = `Halo, saya ingin memesan ${produk}. Mohon info detailnya ya 😊`;
    let wa = "https://wa.me/6281377747001?text=" + encodeURIComponent(pesan);
    window.open(wa, "_blank");
}
