document.addEventListener("DOMContentLoaded", function() {
    const orderForm = document.getElementById("order-form");

    orderForm.addEventListener("submit", function(event) {
        event.preventDefault(); // Mencegah pengiriman formulir

        // Mengambil nilai dari formulir
        const coffeeType = document.getElementById("coffee-type").value;
        const size = document.querySelector('input[name="size"]:checked').value;
        const quantity = parseInt(document.getElementById("quantity").value);
        const sugar = parseInt(document.getElementById("sugar").value);

        // Menghitung total harga
        const pricePerCup = calculatePrice(coffeeType, size);
        const totalPrice = pricePerCup * quantity;

        // Menampilkan total harga
        document.getElementById("total").textContent = "Rp" + totalPrice;

        // Menampilkan detail pesanan di console
        console.log("Detail Pesanan:");
        console.log("Jenis Minuman:", coffeeType);
        console.log("Ukuran Gelas:", size);
        console.log("Jumlah Gelas:", quantity);
        console.log("Gula (sendok):", sugar);
        console.log("Total Harga:", totalPrice);

        // Lakukan sesuatu dengan data pesanan, seperti mengirim ke server atau menampilkan pemberitahuan kepada pengguna
        // Di sini Anda dapat menambahkan logika bisnis tambahan sesuai kebutuhan

        // Menampilkan pemberitahuan bahwa pesanan telah diterima
        alert("Pesanan Anda telah diterima! Total harga: Rp" + totalPrice);
    });

    // Fungsi untuk menghitung harga per gelas berdasarkan jenis minuman dan ukuran gelas
    function calculatePrice(coffeeType, size) {
        // Harga default per gelas
        let price = 0;

        // Mengatur harga berdasarkan jenis minuman dan ukuran gelas
        switch (coffeeType) {
            case "espresso":
                price = size === "small" ? 10000 : size === "medium" ? 12000 : 15000;
                break;
            case "latte":
                price = size === "small" ? 12000 : size === "medium" ? 14000 : 17000;
                break;
            case "cappuccino":
                price = size === "small" ? 11000 : size === "medium" ? 13000 : 16000;
                break;
            case "americano":
                price = size === "small" ? 9000 : size === "medium" ? 11000 : 14000;
                break;
            default:
                price = 0;
        }

        return price;
    }
});
