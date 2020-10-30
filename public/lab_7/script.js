function convertRestaurantsToCategories(restaurantList) {
  const categoryArray = [];
  const result = {};
  for (let i = 0; i < restaurantList.length; i += 1)
    categoryArray.push(restaurantList[i].category) 
}
//console.log(categoryArray);
  for (let i = 0; i < categoryArray.length; i += 1)
    if (!result[categoryArray[i]]) {
      result[categoryArray[i]] = 0;
    }
  result[categoryArray[i]] += 1;
  }

const reply = Object.keys(result).map((category));
  y: result[category],
  label: category
}));

console.log('reply', reply);
return reply;
}

// process your restaurants here!
//return list;


function makeYourOptionsObject(datapointsFromRestaurantsList) {
  // set your chart configuration here!
  //CanvasJS.addColorSet('customColorSet1', [
    // add an array of colors here https://canvasjs.com/docs/charts/chart-options/colorset/
  //]);

  return {
    animationEnabled: true,
    colorSet: 'customColorSet1',
    title: {
      text: 'Places To Eat Out In Future'
    },
    axisX: {
      interval: 1,
      labelFontSize: 12
    },
    axisY2: {
      interlacedColor: 'rgba(1,77,101,.2)',
      gridColor: 'rgba(1,77,101,.1)',
      title: 'Restaurants By Category',
      labelFontSize: 12,
      scaleBreaks: { customBreaks: [{
        startValue: 40,
        endValue:50,
        color:'Orange'
      },
      {
        startValue: 85,
        endValue: 100,
        color: 'orange'
      },
      {
        startValue:140,
        endValue:175,
        color: 'orange'
      }] } // Add your scale breaks here https://canvasjs.com/docs/charts/chart-options/axisy/scale-breaks/custom-breaks/
    },
    data: [{
      type: 'bar',
      name: 'restaurants',
      axisYType: 'secondary',
      dataPoints: datapointsFromRestaurantsList
    }]
  };
}

function runThisWithResultsFromServer(jsonFromServer) {
  console.log('jsonFromServer', jsonFromServer);
  sessionStorage.setItem('restaurantList', JSON.stringify(jsonFromServer)); // don't mess with this, we need it to provide unit testing support
  canvasJS.addColorSet('miscAdobe',
  [//color set array // Process your restaurants list
    '#4F61F7',
    '#5DDDFC',
    '#60E69F',
    '#94FC5D',
    '#F2E75A'
  ]);
  const dataPoints = convertRestaurantsToCategories(jsonFromServer); //not finshed this line
  const options = makeYourOptionsObject(dataPoints);

  const chart = new CanvasJS.Chart ('chartContainer', options);
  chart.render();
  $(window).on('resize', () =>{
    chart.render()
  });

  // Make a configuration object for your chart
  // Instantiate your chart
  //const reorganizedData = convertRestaurantsToCategories(jsonFromServer);
  //const options = makeYourOptionsObject(reorganizedData);
  //const chart = new CanvasJS.Chart('chartContainer', options);
  //chart.render();


// Leave lines 52-67 alone; do your work in the functions above
document.body.addEventListener('submit', async (e) => {
  e.preventDefault(); // this stops whatever the browser wanted to do itself.
  const form = $(e.target).serializeArray();
  fetch('/api', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(form)
  })
    .then((fromServer) => fromServer.json())
    .then((jsonFromServer) => runThisWithResultsFromServer(jsonFromServer))
    .catch((err) => {
      console.log(err);
    });
});