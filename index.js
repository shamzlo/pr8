const path = require('path');
console.log(__filename); //путь к файлу
console.log(path.basename(__filename)); //название  файла
console.log(path.dirname(__filename));//имя каталога
console.log(path.extname(__filename)); //расширение файла
console.log(path.parse(__filename)); //возвращает  информацию про файл и его расположение
console.log(path.join(__dirname,'test','second.html')); // объединяет все данные в path
console.log(path.resolve(__dirname,'./test','second.html')); //преобразует последовательность   пути в абсолютный