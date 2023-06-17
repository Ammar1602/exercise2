function KirimData() {
    var name = document.getElementById("nama").value
    var nim = document.getElementById("identitas").value
    var jenis_kamar = document.getElementById("input[nama=jenis_kamar]:checked").value
    var tanggal = document.getElementById("tanggal").value
    var alamat = document.getElementById("alamat").value

    alert(
        "nama : " + name +
        "\nnim : " + identitas +
        "\npeminatan : " + tanggal +
        "\nalamat : " + jenis_kamar +
        "\ntanggal : " + alamat
    )
}