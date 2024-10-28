// Metindeki tüm 'a' harflerini 'b' ile değiştiren fonksiyon
function replaceAWithB(text) {
    return text.replace(/a/g, 'b');  // Tüm 'a' harflerini 'b' ile değiştirir
}

// Input alıp sonucu HTML'de gösteren işlev
function handleTextChange() {
    const inputText = document.getElementById("inputText").value;  // Kullanıcıdan metni alır
    const resultText = replaceAWithB(inputText);  // Metindeki 'a' harflerini 'b' ile değiştirir
    document.getElementById("outputText").innerText = resultText;  // Sonucu ekrana yazar
}
