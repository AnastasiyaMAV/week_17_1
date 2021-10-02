function transformationFio(){
    let inputFio = document.getElementById('fio').value; // получили строчку
    let inputFioTrans1 = inputFio.toLowerCase().trim(); // понизили регистр и удалили пробелы в начале и конце строки
    let inputFioTrans = inputFioTrans1.replace(/\s+/g, ' '); // удаляем лишние пробелы между ФИО
    let arrayFio1 = inputFioTrans.split(" "); // превратили строчку в массив
    let stringResult = ""; 

    for (let i = 0; i < arrayFio1.length; i++) {
        let name = arrayFio1[i];
        let firstLetter = name.substring(0, 1).toUpperCase(); // методом substring берем 1 букву каждой строки массива, методом toUpperCase повышаем регистр этой буквы 
        let followingLetters = name.substring(1, name.length); // дописываем слово до конца начиная со 2 буквы
        stringResult += firstLetter + followingLetters + " "; // объединяем строки
    }
    
    let trimFio = stringResult.trim(); //удалили пробелы в начале и конце строки
    let arrayFio2 = trimFio.split(" "); // превратили строчку в массив

    for(let i = 0; i < arrayFio2.length; i++) { //выводим массив в input-ы
        console.log("2");
        if(i == 0){
            document.getElementById('familia').value = arrayFio2[i];
        } else if(i == 1){
            document.getElementById('imay').value = arrayFio2[i];
        } else if(i == 2) {
            document.getElementById('otchestvo').value = arrayFio2[i];
        } else {
            alert("ФИО должно состоять из трех слов!");
            document.getElementById('fio').value = "Введите ФИО через пробел";
            document.getElementById('familia').value = "Фамилия";
            document.getElementById('imay').value = "Имя";
            document.getElementById('otchestvo').value = "Отчество";
            break;
        } 
    }

}