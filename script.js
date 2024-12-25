// Yazıyı yazma ve silme efekti için gerekli değişkenler
const textElement = document.getElementById("typing-effect"); // Efektin uygulanacağı öğe
const text = 'console.log("Merhaba,Benim Adım Batuhan"); '; // Yazılacak sabit metin
let index = 0; // Şu anki harfin konumu
let isDeleting = false; // Yazma veya silme modunu kontrol eder

// Yazı efektini çalıştıran fonksiyon
function typeEffect() {
    // Yazıyı belirli bir kısmını alır (yazma veya silme moduna göre)
    const displayText = isDeleting
        ? text.substring(0, index--) // Silme modunda: harf sayısını azalt
        : text.substring(0, index++); // Yazma modunda: harf sayısını artır

    textElement.textContent = displayText; // Metni günceller

    // Yazma ve silme hızını kontrol eden süre ayarları
    let typingSpeed = isDeleting ? 50 : 100; // Silme daha hızlı

    // Yazma işlemi tamamlandığında bekleme süresi
    if (!isDeleting && index === text.length) {
        typingSpeed = 800;
        isDeleting = true; // Silme moduna geçer
    }

    // Silme işlemi tamamlandığında bekleme süresi
    if (isDeleting && index === 0) {
        isDeleting = false; // Yazma moduna geçer
    }

    // Efekti sürekli çalıştırmak için
    setTimeout(typeEffect, typingSpeed);
}

// Efekti başlatmak için
typeEffect();


// *********************************************************

function validateForm() {
    //Gerekli Alanlar
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const phone = document.getElementById("phone").value;
    const message = document.getElementById("message").value;




    //Eposta formatı kontrolü:
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    //Telefon numarasının formatını kontrol eden düzenli ifade (sadece rakamlar)
    const phonePattern = /^[0-9]+$/;

    // Ad-soyad doğrulama(boş olamaz)
    if (name.trim() === "") {
        alert("Adınızı ve Soyadınız boş olamaz.");
        return false;//formun gönderilmesini engeller

    }

    //Eposta doğrulama
    if (!emailPattern.test(email)) {
        alert("Geçersiz e-posta adresi.");
        return false;

    }

    // Telefon numarası doğrulama (boş olamaz ve sadece rakam olmalı)
    if (phone.trim() === "") {
        alert("Telefon numarası boş olamaz.");
        return false;
    }

    if (!phonePattern.test(phone)) {
        alert("Telefon numarası yalnızca rakamlardan oluşabilir.");
        return false;
    }



    //Mesaj doğrulama(boş olamaz)
    if (message.trim() === "") {
        alert("Mesajınız boş olamaz.");
        return false;

    }

    //eğer her şey doğrusa,form gönderilebilir.
    sendMessage();
    return true;





}

function sendMessage() {
    alert("Mesajınız gönderildi!")
    

    // Sayfayı yeniden yüklemek için:
    setTimeout(function() {
        window.scrollTo(0, 0); // Sayfanın en üstüne kaydırır
        location.reload(); // Sayfayı yeniler
    }, 500); // Mesajın gösterilmesinden sonra sayfayı yeniden yükler (0.5 saniye bekler)
    
}

