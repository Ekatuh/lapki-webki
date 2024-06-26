function showDate() {
    let out = document.getElementById('current-date');
    let today = new Date();
    out.innerHTML += '<br>Россия: ' + today.toLocaleString('ru-RU');
    out.innerHTML += '<br>США: ' + today.toLocaleString('en-US');
    out.innerHTML += '<br>Германия: ' + today.toLocaleString('de-DE', { timeZone: 'Europe/Berlin' });
    out.innerHTML += '<br>Франция: ' + today.toLocaleString('fr-FR', { timeZone: 'Europe/Paris' });
    out.innerHTML += '<br>Япония: ' + today.toLocaleString('ja-JP', { timeZone: 'Asia/Tokyo' });
    out.innerHTML += '<br>Китай: ' + today.toLocaleString('zh-CN', { timeZone: 'Asia/Shanghai' });

    out.innerHTML += '<br><br><b>Вывод текущей даты</b>';

    out.innerHTML += '<br>Текущий год: ' + today.getFullYear();
    out.innerHTML += '<br>Текущий месяц: ' + (today.getMonth() + 1);
    out.innerHTML += '<br>Текущая дата: ' + today.getDate();
    out.innerHTML += '<br>День недели: ' + today.toLocaleString('ru-RU', { weekday: 'long' });

    document.getElementById('submit-button').addEventListener('click', function() {
        let day = parseInt(document.getElementById('day').value);
        let month = parseInt(document.getElementById('month').value) - 1;
        let year = parseInt(document.getElementById('year').value);
    
        let date = new Date(year, month, day);
        let result = document.getElementById('result');
    
        result.innerHTML = 'День недели: ' + date.toLocaleString('ru-RU', { weekday: 'long' });
      });
}

