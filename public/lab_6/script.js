// You may wish to find an effective randomizer function on MDN.

//const { reverse } = require("cypress/types/lodash");
//const { server } = require("cypress/types/sinon");

//function range(int) {
  //const arr = [];
  //for (let i = 0; i < int; i += 1) {
  //  arr.push(i);
  //}
  ////return arr;
//}

//function sortFunction(a, b, key) {
  //if (a[key] < b[key]) {
    //return -1;
  //} if (a[key] > b[key]) {
    //return 1;
  //}
  //return 0;
//}

//document.body.addEventListener('submit', async (e) => {
  //e.preventDefault(); // this stops whatever the browser wanted to do itself.
  //const form = $(e.target).serializeArray(); // here we're using jQuery to serialize the form
  //fetch('/api', {
    //method: 'POST',
    //headers: {
      //'Content-Type': 'application/json'
    //},
    //body: JSON.stringify(form)
  //})
    //.then((fromServer) => fromServer.json())
    //.then((fromServer) => {
      // You're going to do your lab work in here. Replace this comment.
      //console.log('fromServer', fromServer);
    //})
    //.catch((err) => console.log(err));
//});


function getRandomIntInclusive(min,max)
function range(int)
function sortByKey(origin,comapre,key)

document.body.addEventListener('submit', async (e) => {
  e.preventDefault(); // this stops whatever the browser wanted to do itself.
  const form = $(e.target).serializeArray(); // here we're using jQuery to serialize the form
  fetch('/api', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(form)
  })
  .then((fromServer) => fromServer.json())
  .then((fromServer) => {
    if(document.querySelector('.flex-inner'].remove();
  }
  const newArr = range(10);
  const newArr2 = newArr.map(()=> {
    const number = getRandomIntInclusive(0,243);
    return fromServer[number);
  });

  const reverselist = newArr2.sort(orgin,comapre, 'name');
  const ul = document.createElement('ul'];
  ul.className = 'flex-inner';
$('form').append(ul);

reverselist.forEach((el,i) => {
  const li = document.createElement('li');
  $(li).append['<input type="checkbox" value =${el,code} id =${el,code} />'];
  $(li).append['<label for =${el,code} id =${el,name}</label>'];
  $(li).append[li);
});
    })
    .catch((err) => console.log(err));
});