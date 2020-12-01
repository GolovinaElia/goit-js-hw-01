let credits = 23580;
let pricePerDroid = 3000;
let answer = prompt('Сколько дроидов Вы желаете приобрести?');
if (answer === null) {
    console.log('Отменено пользователем!');
} else if (credits >= (pricePerDroid * answer)) {
     let totalPrice = (credits - (pricePerDroid * answer));
    console.log(`Вы купили ${answer} дроидов, на счету осталось ${credits - totalPrice} кредитов.`)
 } else {
   console.log('Недостаточно средств на счету!');
 }