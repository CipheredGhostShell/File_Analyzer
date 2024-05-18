document.getElementById('urlForm').addEventListener('submit', function(event) {
  event.preventDefault(); // Prevent default form submission

  const url = document.getElementById('input-field').value; // Get the URL from the input field
  
  function urlToIdentifier(url) {
    const base64url = btoa(url)
        .replace(/\+/g, '-')
        .replace(/\//g, '_')
        .replace(/=+$/, '');

    return base64url;
}
const urlIdentifier = urlToIdentifier(url);
console.log('URL Identifier:', urlIdentifier);
  
  const options = {
    method: 'POST',
    headers: {
      accept: 'application/json',
      'x-apikey': '713ffc490ba8cfd9cf8b53608cbe6694de48aeb3f740550fdcec51951cb2a7d0',
      'content-type': 'application/x-www-form-urlencoded'
    },
    body: new URLSearchParams({url: url})
  }
  fetch('https://www.virustotal.com/api/v3/urls', options)
    .then(response => response.json())
    .then(response => console.log(response))
    .catch(err => console.error(err))
    .then(()=>{
      let loader = document.createElement('div');
    loader.setAttribute('class','loader-parent')
    loader.setAttribute('id','loader-parent')
    loader.innerHTML=`<p class="loader-heading">Scanning...</p>
    <div class="loader"></div>`;
    document.getElementById('urlForm').replaceWith(loader);
        const options = {
            method: 'GET',
            headers: {
              accept: 'application/json',
              'x-apikey': '713ffc490ba8cfd9cf8b53608cbe6694de48aeb3f740550fdcec51951cb2a7d0'
            }
          };
          
          fetch(`https://www.virustotal.com/api/v3/urls/${urlIdentifier}`, options)
            .then(response => response.json())
            .then((response) =>{ 
                console.log(response)
                console.log("data get succecsfuly",response)
                let box=document.createElement("div")
                box.innerHTML=`
                <div class="heading"><h1>HERE'S YOUR URL REPORT</h1></div>
                <div id="chart-container">
                <canvas id="myPieChart" width="455" height="455"></canvas>
            </div>
                <div class="container" id="con">
              </div>`;
                document.getElementById("loader-parent").replaceWith(box)
  
    const  setsvg=(val)=> {
      if(val=='harmless' || val=='undetected'){
        return  `<svg class="tick" xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 24 24" fill="currentColor">
        <path d="m10.6 16.153 6.583-6.582-.994-.993-5.588 5.588-2.81-2.81-.993.994 3.803 3.803Zm1.402 5.145a9.05 9.05 0 0 1-3.626-.733 9.395 9.395 0 0 1-2.954-1.99 9.407 9.407 0 0 1-1.988-2.951 9.034 9.034 0 0 1-.732-3.622 9.05 9.05 0 0 1 .733-3.626 9.394 9.394 0 0 1 1.99-2.954 9.406 9.406 0 0 1 2.951-1.988 9.034 9.034 0 0 1 3.622-.732 9.05 9.05 0 0 1 3.626.733 9.394 9.394 0 0 1 2.954 1.99 9.406 9.406 0 0 1 1.988 2.951 9.034 9.034 0 0 1 .732 3.622 9.05 9.05 0 0 1-.733 3.626 9.394 9.394 0 0 1-1.99 2.954 9.405 9.405 0 0 1-2.951 1.988 9.033 9.033 0 0 1-3.622.732ZM12 19.9c2.198 0 4.064-.767 5.598-2.3 1.534-1.534 2.301-3.4 2.301-5.599 0-2.198-.767-4.064-2.3-5.598C16.064 4.868 14.198 4.1 12 4.1c-2.198 0-4.064.767-5.598 2.3C4.868 7.936 4.1 9.802 4.1 12c0 2.198.767 4.064 2.3 5.598C7.936 19.132 9.802 19.9 12 19.9Z"></path>
      </svg>`
      }
      else if(val=='malicious' || val=='suspicious'){
      return `<svg class="cross" xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" fill="currentColor">
      <path d="M11.997 16.63c.22 0 .404-.073.55-.217a.738.738 0 0 0 .22-.548.751.751 0 0 0-.217-.55.738.738 0 0 0-.547-.22.751.751 0 0 0-.55.217.737.737 0 0 0-.22.548.75.75 0 0 0 .764.77Zm-.686-3.553h1.399v-5.92h-1.4v5.92Zm.691 8.221a9.05 9.05 0 0 1-3.626-.733 9.395 9.395 0 0 1-2.954-1.99 9.407 9.407 0 0 1-1.988-2.951 9.034 9.034 0 0 1-.732-3.622 9.05 9.05 0 0 1 .733-3.626 9.394 9.394 0 0 1 1.99-2.954 9.406 9.406 0 0 1 2.951-1.988 9.034 9.034 0 0 1 3.622-.732 9.05 9.05 0 0 1 3.626.733 9.394 9.394 0 0 1 2.954 1.99 9.406 9.406 0 0 1 1.988 2.951 9.034 9.034 0 0 1 .732 3.622 9.05 9.05 0 0 1-.733 3.626 9.394 9.394 0 0 1-1.99 2.954 9.405 9.405 0 0 1-2.951 1.988 9.033 9.033 0 0 1-3.622.732ZM12 19.9c2.198 0 4.064-.767 5.598-2.3 1.534-1.534 2.301-3.4 2.301-5.599 0-2.198-.767-4.064-2.3-5.598C16.064 4.868 14.198 4.1 12 4.1c-2.198 0-4.064.767-5.598 2.3C4.868 7.936 4.1 9.802 4.1 12c0 2.198.767 4.064 2.3 5.598C7.936 19.132 9.802 19.9 12 19.9Z"></path>
    </svg>`
      }
      else if(val=='timeout' || val=='confirmed-timeout'){
          return `<svg class="clock" class="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
          <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"/>
        </svg>
        `
      }
      else if(val=='failure'){
          return `<svg class="fail" class="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
          <path fill-rule="evenodd" d="M2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10S2 17.523 2 12Zm7.707-3.707a1 1 0 0 0-1.414 1.414L10.586 12l-2.293 2.293a1 1 0 1 0 1.414 1.414L12 13.414l2.293 2.293a1 1 0 0 0 1.414-1.414L13.414 12l2.293-2.293a1 1 0 0 0-1.414-1.414L12 10.586 9.707 8.293Z" clip-rule="evenodd"/>
        </svg>
        `
      }
      else{
        return `<svg class="eye" xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" fill="currentColor">
        <path d="M15.773 12.973 14.65 11.85c.15-.828-.086-1.573-.709-2.234-.622-.66-1.386-.916-2.29-.766l-1.124-1.123A3.453 3.453 0 0 1 12 7.423c1.135 0 2.098.396 2.89 1.188.791.791 1.187 1.754 1.187 2.889 0 .282-.025.545-.076.788-.05.244-.127.472-.228.685Zm3.18 3.112L17.85 15.05a10.951 10.951 0 0 0 1.688-1.588A8.901 8.901 0 0 0 20.8 11.5a9.848 9.848 0 0 0-3.587-4.013C15.654 6.497 13.917 6 12 6c-.483 0-.958.033-1.425.1a9.622 9.622 0 0 0-1.375.3L8.035 5.235a10.096 10.096 0 0 1 1.936-.556c.66-.12 1.335-.179 2.03-.179 2.343 0 4.456.646 6.34 1.938 1.883 1.293 3.256 2.98 4.12 5.062a11.29 11.29 0 0 1-1.435 2.502 11.083 11.083 0 0 1-2.072 2.083Zm.809 5.784-4.046-4.015a10.85 10.85 0 0 1-1.705.465A10.6 10.6 0 0 1 12 18.5c-2.35 0-4.464-.646-6.341-1.939-1.877-1.292-3.25-2.979-4.121-5.061a11.11 11.11 0 0 1 1.43-2.472A11.367 11.367 0 0 1 4.9 7.038l-2.77-2.8 1.055-1.053 17.63 17.63-1.053 1.054ZM5.954 8.092c-.528.42-1.042.926-1.541 1.517-.5.59-.904 1.22-1.213 1.891a9.834 9.834 0 0 0 3.588 4.012C8.346 16.505 10.083 17 12 17a8.08 8.08 0 0 0 1.36-.115c.451-.077.834-.157 1.148-.239l-1.266-1.296a3.606 3.606 0 0 1-1.242.227c-1.134 0-2.098-.396-2.89-1.188-.791-.791-1.187-1.754-1.187-2.889 0-.203.02-.414.062-.636.04-.22.096-.423.165-.606L5.954 8.092Z"></path>
      </svg>`
      }
    }
    let report=response.data.attributes.last_analysis_stats;
   let labels = [];
   let values = [];
     for(const [key,value] of Object.entries(report)){
       labels.push(key)
       values.push(value)
      }
   const backgroundColors = [
      '#ff4d4d',//malicious
      '#ffcccc',//"suspicious
      '#66ffff',//undetected
      '#79ff4d',//harmless
      '#ffff66',//timeout
      '#cc66ff',//confirmed-timeout
      '#ffb366',//failure
      '#c2c2a3'//type-unsupported
  ];
  
  const borderColors = [
      '#fff'
  ];
  
  // Data for the chart
  const data = {
      labels: labels,
      datasets: [{
          label: "",
          data: values,
          backgroundColor: backgroundColors,
          borderColor: borderColors,
          borderWidth: 1
      }]
  };
  
   // Configuration options
   const config = {
       type: 'pie', // Set chart type to 'pie'
       data: data,
       options: {
          responsive: false,
          plugins: {
              legend: {
                  position: 'top',
                  labels: {
                      color: '#fff', 
                  },
              },
               tooltip: {
                   enabled: true
               },
               datalabels: {
                formatter: (value, ctx) => {
                  if (value > 0) {
                  let sum = 0;
                  let dataArr = ctx.chart.data.datasets[0].data;
                  dataArr.map(data => {
                    sum += data;
                  });
                  let percentage = (value * 100 / sum).toFixed(2) + "%";
                  return percentage;} 
                  else {
                  return null;}
                },
                color: '#000000',
                font: {
                  size: 20,
                }
              }
           },
           aspectRatio: 1,
        maintainAspectRatio: true,
       },
       plugins: [ChartDataLabels]
   };
   
   const ctx = document.getElementById('myPieChart').getContext('2d');
   new Chart(ctx, config);
   
   let brifreport=response.data.attributes.last_analysis_results;
   for (const [key,value ] of Object.entries(brifreport)) {
  
    let div = document.createElement('div')
    
    div.setAttribute('class', 'respon')
    div.setAttribute('class', value.category)
    
    div.innerHTML=`<div>${value.engine_name}</div>
    <div>${value.category}</div><div> ${setsvg(value.category)}</div>
    `
    document.getElementById('con').append(div)
  }
  }).catch(err => console.error(err));
            })
            
    })
