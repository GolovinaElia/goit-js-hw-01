let answerCountry = prompt('В какую страну Вы желаете доставить товар?');
 answerCountry = answerCountry.toLowerCase();
let cost;
switch (answerCountry) {
    case 'китай':
        cost = 100;
        answerCountry = 'Китай';
        alert(`Доставка в ${answerCountry} будет стоить ${cost} кредитов.`);
        break;
    case 'чили':
        cost = 250;
        answerCountry = 'Чили';
        alert(`Доставка в ${answerCountry} будет стоить ${cost} кредитов.`);
        break;
    case 'австралия':
        cost = 170;
        answerCountry = 'Австралия';
        alert(`Доставка в ${answerCountry} будет стоить ${cost} кредитов.`);
        break;
    case 'индия':
        cost = 80;
        answerCountry = 'Индия';
        alert(`Доставка в ${answerCountry} будет стоить ${cost} кредитов.`);
        break;
    case 'ямайка':
        cost = 120;
        answerCountry = 'Ямайка';
        alert(`Доставка в ${answerCountry} будет стоить ${cost} кредитов.`);
        break;
    default:
        alert('В вашей стране доставка не доступна');
}

// let cost;
// let answerCountry;
// answerCountry = 'Китай';
// answerCountry = 'Чили';
// answerCountry = 'Австралия';
// answerCountry = 'Индия';
// answerCountry = 'Ямайка';
//  let input = prompt('В какую страну Вы желаете доставить товар?');
// switch (answerCountry) {
//     case 'китай':
//         cost = 100;
//         // answerCountry = 'Китай';
//         alert(`Доставка в ${answerCountry} будет стоить ${cost} кредитов.`);
//         break;
//     case 'чили':
//         cost = 250;
//         // answerCountry = 'Чили';
//         alert(`Доставка в ${answerCountry} будет стоить ${cost} кредитов.`);
//         break;
//     case 'австралия':
//         cost = 170;
//         // answerCountry = 'Австралия';
//         alert(`Доставка в ${answerCountry} будет стоить ${cost} кредитов.`);
//         break;
//     case 'индия':
//         cost = 80;
//         // answerCountry = 'Индия';
//         alert(`Доставка в ${answerCountry} будет стоить ${cost} кредитов.`);
//         break;
//     case 'ямайка':
//         cost = 120;
//         // answerCountry = 'Ямайка';
//         alert(`Доставка в ${answerCountry} будет стоить ${cost} кредитов.`);
//         break;
//     default:
//         alert('В вашей стране доставка не доступна');
// }
