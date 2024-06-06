// export async function post({request}) {
//     const formData = await request.formData(); // Here's the data sent by the form
//     console.log(formData);
//     const data = Object.fromEntries(formData.entries());
//       try {
//           const response = await fetch('https://script.google.com/macros/s/AKfycby4SLG4R1SeQDYrV35bMak8CYfg9M0_Mqi--vJxY5dCOltru1KtvcJVDxk_pcet7lSlRw/exec', {
//               method: 'POST',
//               body: JSON.stringify(data),
//               headers: {
//                   'Content-Type': 'application/json'
//               }
//           });
//           const result = await response.json();
//           alert('Form submitted: ' + result.result);
//       } catch (error) {
//           console.error('Error:', error);
//           alert('Failed to submit form.');
//       }
//     return new Response(JSON.stringify(request), {
//       status: 200,
//     });
//   }
  
  export async function post({request}) {
    const data = await request.formData(); // Here's the data sent by the form
    const text = data.get('text'); // Here's how you get the value of a field
    console.log(text);
    return new Response(JSON.stringify(request), {
      status: 200,
    });
  }