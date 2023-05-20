function createPage() {
    // Formdaki girdi alanlarından verileri al
    const urun_baslik = document.getElementById("urun_baslik").value;
    const urun_ismi = document.getElementById("urun_ismi").value;
    const resimDosyasi = document.getElementById("resimDosyasi").files[0];
    const tlFiyati = document.getElementById("tlFiyati").value;
    const kurusFiyati = document.getElementById("kurusFiyati").value;

    // Dosya yükleme işlemi için FileReader kullan
    const reader = new FileReader();
    reader.onload = function(event) {
        const resimURL = event.target.result;

    // Yeni bir HTML sayfası oluştur
    const newPage = `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <script src="https://cdn.tailwindcss.com"></script>
        <link rel="stylesheet" href="/src/raw.css">
        <script src="https://kit.fontawesome.com/8fdc27e80b.js" crossorigin="anonymous"></script>
        <title>Ürün Sayfası</title>
        <style>
            .main-box {
                max-width: 40%;
                min-width: 450px;
            }
            .trig {
              border-bottom-width: 64px;
              border-bottom-color: transparent;
              border-right-width: 70px;
              --tw-bg-opacity: 1;
              border-right-color: rgb(74 222 128 / var(--tw-bg-opacity));
            }
        </style>
    </head>
    <body class="flex-col flex items-center">
        <div class="main-box m-4 h-24 rounded bg-orange-500 flex justify-end absolute">
            <img src="" class="absolute left-8 top-8" alt="page_logo">
            <div class="trig h-16"></div>
            <div class="second-box bg-green-400 w-1/2  h-16 flex">
                <h2 class="w-full text-center mt-4 uppercase font-bold text-slate-800 text-2xl">${urun_baslik}</h2>
            </div>
            <h2 class="absolute bottom-1 right-20 font-bold uppercase">mayıs 20-21</h2>
        </div>
        <main class="h-screen w-full">
            <div id="shema" class="">
                
                <div id="shema_one" class="place-items-center flex justify-center h-screen">
                    <div id="cards" class="">
                        <div id="card" class="w-96 shadow-md shadow-black rounded-md border-opacity-50 border-black border py-4 px-8 items-center gap-4 flex flex-col">
                            <h3 class="bg-slate-200 rounded-md py-2 w-full text-center uppercase text-3xl font-bold">${urun_ismi}</h3>
                            <img class="w-auto h-80 rounded-md bg-slate-900 text-white" src="${resimURL}" alt="urun_resimi">
                            <div class=" flex items-center justify-center gap-2 bg-orange-500 text-white rounded-lg shadow-md shadow-black px-8 w-5/6">
                                <h6 class="text-6xl font-bold">${tlFiyati}</h6>
                                <div>
                                    <h6 class="text-2xl">TL</h6>
                                    <h6 class="text-2xl">${kurusFiyati}</h6>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </main>
        <footer class="absolute bottom-2 text-green-800 main-box rounded flex justify-between p-4 items-center bg-green-200">
            <i class="fa-solid text-5xl fa-phone"></i>
            <h4 class="font-bold text-3xl">0543 641 13 13</h4>
        </footer>
    </body>
    </html>
    `;

    // Yeni sayfayı açmak için bir URL oluştur
    const newPageURL = URL.createObjectURL(new Blob([newPage], {type: "text/html"}));

    // Yeni sayfayı aç
    window.open(newPageURL, "_blank");

    // Formu sıfırla
    document.getElementById("urun_baslik").value = "";
    document.getElementById("urun_ismi").value = "";
    document.getElementById("resimDosyasi").value = "";
    document.getElementById("tlFiyati").value = "";
    document.getElementById("kurusFiyati").value = "";
};

    reader.readAsDataURL(resimDosyasi);
}
