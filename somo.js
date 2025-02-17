// somo.js

// Fungsi untuk memeriksa DNS menggunakan API AdGuard
function getDNSInfo(domain) {
    fetch(`https://dns.adguard.com/resolve?name=${domain}&type=A`)  // Menggunakan AdGuard DNS API untuk mengakses A record
        .then(response => response.json())
        .then(data => {
            if (data.Answer) {
                let dnsInfo = '<ul>';
                data.Answer.forEach(item => {
                    dnsInfo += `<li>${item.name} - ${item.data}</li>`;
                });
                dnsInfo += '</ul>';
                document.getElementById('dns-info').innerHTML = dnsInfo;
            } else {
                document.getElementById('dns-info').innerHTML = 'Tidak ada informasi DNS ditemukan.';
            }
        })
        .catch(error => {
            document.getElementById('dns-info').innerHTML = 'Terjadi kesalahan dalam mengambil data DNS.';
        });
}

// Memanggil fungsi untuk domain yang ingin Anda periksa
getDNSInfo('example.com');  // Ganti dengan domain yang ingin Anda cek