<?php

// fungsi untuk mengkonversi suhu
function konversi ($suhu, $dari, $ke) {

    if ($dari=='C' && $ke=='F') {
        return ($suhu * 9/5) + 32;
    }

    if ($dari=='F' && $ke=='C') {
        return ($suhu - 32) * 5/9;
    }

    if ($dari=='C' && $ke=='K') {
        return $suhu + 273.15;
    }

    if ($dari=='K' && $ke=='C') {
        return $suhu - 273.15;
    }

    if ($dari=='K' && $ke=='F') {
        return ($suhu - 273.15) * 9/5 + 32;
    }

    if ($dari=='F' && $ke=='K') {
        return ($suhu - 32) * 5/9 + 273.15;
    }

    // jika satuan sama
    return $suhu;
}

// ambil data dari form
if(isset($_POST['suhu'])){
    $suhu = $_POST['suhu'];
    $dari = $_POST['dari'];
    $ke   = $_POST['ke'];

    $hasil = konversi($suhu, $dari, $ke);

    echo "Hasil Konversi: " . round($hasil, 2);
}

?>