const fortune ={
    '大吉':11,
    '中吉':17,
    '小吉':20,
    '吉':15,
    '末吉':12,
    '凶':8,
    '大凶':6,
    '宙吉':5,
    'ナナ吉':4,
    '大叫':1,
};

document.getElementById('button').addEventListener('click', () => {
  const i = Math.floor(Math.random() * 100);
  let result = '？？'
  let rate = 0;
  for (const prop in fortune) {
    rate += fortune[prop]
    if (i <= rate) {
      result = prop;
      break;
    };
  };
  document.getElementById('kuji').innerHTML = result;
},false);
