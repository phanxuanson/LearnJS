window.onload = function() {};

var courses = [
  {
    id: 1,
    name: 'javascript',
    coin: 170
  },
  {
    id: 2,
    name: 'HTML & CSS3',
    coin: 120
  },
  {
    id: 3,
    name: 'NodeJS',
    coin: 200
  },
  {
    id: 4,
    name: 'Python',
    coin: 200
  },
  {
    id: 3,
    name: 'PHP',
    coin: 150
  },
];
var i = 0;
function coinHandler(accumulator, currentValue, currentIndex, originArray){
  i++;
  var total = accumulator + currentValue.coin;
  console.table({
    'Luot chay: ' :i,
    'Bien tich tru: ': accumulator,
    'Gia khoa hoc: ': currentValue.coin,
    'tich tru duoc: ': total
    
  });
 
  return total;
} 
var totalCoin = courses.reduce(coinHandler, 0);
console.log(totalCoin);