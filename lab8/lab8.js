function showDate() {
    let out = document.getElementById('current-date');
    let today = new Date();
    out.innerHTML += '<br>Россия: ' + today.toLocaleString('ru-RU');
    out.innerHTML += '<br>США: ' + today.toLocaleString('en-US');
    out.innerHTML += '<br>Германия: ' + today.toLocaleString('de-DE', { timeZone: 'Europe/Berlin' });
    out.innerHTML += '<br>Франция: ' + today.toLocaleString('fr-FR', { timeZone: 'Europe/Paris' });
    out.innerHTML += '<br>Япония: ' + today.toLocaleString('ja-JP', { timeZone: 'Asia/Tokyo' });
    out.innerHTML += '<br>Китай: ' + today.toLocaleString('zh-CN', { timeZone: 'Asia/Shanghai' });
}