let para = document.querySelector('.fetchApi');
let btn = document.querySelector('.getfact'); // Make sure this class is correct
let URL  = 'https://catfact.ninja/fact'; // Correct API endpoint

// const getData = async () => {
//     console.log("Getting Data...");

    
//         let response = await fetch(URL);
        

//         let data = await response.json();
//         para.innerHTML = data.fact; // Assuming 'fact' is the key in the API response
    
// }

// function getData() {
//   fetch(URL)
//     .then((response) => {
//       if (!response.ok) {
//         throw new Error('Network response was not ok');
//       }
//       return response.json(); // Ensure we return the parsed JSON data
//     })
//     .then((data) => {
//       console.log(data);
//       para.innerHTML = data.fact; // Use 'fact' as the key
//     })
//     .catch((error) => {
//       console.error('There was a problem with the fetch operation:', error);
//       para.innerHTML = 'Failed to fetch data. Please try again later.';
//     });
// }

// btn.addEventListener('click', getData);



function getData (){
  fetch(URL).then((response)=>{
    if(!response.ok){
      throw new Error('Error occured');
    }
    return response.json();
  })
  .then((data)=>{
    console.log(data);
    para.innerHTML = data.fact;

  })
   .catch(()=>{
    console.error('there is some error ');

   })
}

btn.addEventListener('click', getData);

