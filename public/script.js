function createPage() {
    // Formdaki girdi alanlarından verileri al
    const urunFiyati = document.getElementById("urunFiyati").value;
    const resimURL = document.getElementById("resimURL").value;
    const tlFiyati = document.getElementById("tlFiyati").value;
    const kurusFiyati = document.getElementById("kurusFiyati").value;

    // Yeni bir HTML sayfası oluştur
    const newPage = `
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <title>Ürün Sayfası</title>
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/tailwindcss/2.2.16/tailwind.min.css">
        </head>
        <body>
            <div class="container mx-auto py-4">
                <h1 class="text-4xl font-bold mb-4">${urunFiyati}</h1>
                <img src="${resimURL}" alt="Ürün Resmi" class="mb-4">
                <h2 class="text-2xl font-bold mb-4">${tlFiyati},${kurusFiyati} TL</h2>
            </div>
        </body>
        </html>
    `;

    // Yeni sayfayı açmak için bir URL oluştur
    const newPageURL = URL.createObjectURL(new Blob([newPage], {type: "text/html"}));

    // Yeni sayfayı aç
    window.open(newPageURL, "_blank");

    // Formu sıfırla
    document.getElementById("urunFiyati").value = "";
    document.getElementById("resimURL").value = "";
    document.getElementById("tlFiyati").value = "";
    document.getElementById("kurusFiyati").value = "";
}
