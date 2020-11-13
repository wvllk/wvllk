function range(int) {
  const arr = [];
  for (let i = 0; i < int; i += 1) {
    arr.push(i);
  }
  return arr;
}

function sortFunction(a, b, key) {
  if (a[key] < b[key]) {
    return -1;
  } if (a[key] > b[key]) {
    return 1;
  }
  return 0;
}

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
      if (document.querySelector('.flex-inner')) {
        document.querySelector('.flex-inner').remove();
      }

      const arr1 = range(10);
      const arr2 = arr1.map(() => {
        const number = getRandomIntInclusive(0, 243);
        return fromServer[number];
      });
      const revlist = arr2.sort((a, b) => sortFunction(b, a, 'name'));
      const olist = document.createElement('ol');
      olist.className = 'flex-inner';
      $('form').append(olist);

      revlist.forEach((el, i) => {
        const lis = document.createElement('li');
        $(lis).append(`<input type="checkbox" value=${el.code} id=${el.code} />`);
        $(lis).append(`<label for=${el.code}>${el.name} </label>`);
        olist.appendChild(lis);
      });
    })
    .catch((err) => console.log(err));
});