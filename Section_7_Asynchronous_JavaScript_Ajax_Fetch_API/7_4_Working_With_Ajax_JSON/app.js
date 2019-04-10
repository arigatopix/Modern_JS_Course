// ใช้ JSON  ใช้ Double Quotes เท่านั้น แทน plain text 

document.getElementById('button1').addEventListener('click',loadCustomer);

document.getElementById('button2').addEventListener('click',loadCustomers);

function loadCustomer() {
  // Create Object
  // open
  // onload : check status
  // send
  const xhr = new XMLHttpRequest();

  xhr.open('GET','customer.json', true);

  xhr.onload = function() {
    if(this.status === 200) {
      // console.log(this.responseText);

      // ทำ JSON ให้เป็น Array
      const customer = JSON.parse(this.responseText);

      const output = `
        <ul>
          <li>ID : ${customer.id}</li>
          <li>Name : ${customer.name}</li>
          <li>Company : ${customer.company}</li>
          <li>Phone : ${customer.phone}</li>
        </ul>
      `

      document.getElementById('customer').innerHTML = output;
    }
  }

  xhr.send();
  
}

// Load Customers
function loadCustomers() {

  const xhr = new XMLHttpRequest();

  xhr.open('GET','customers.json', true);

  xhr.onload = function() {
    if(this.status === 200) {
      // console.log(this.responseText);

      // ทำ JSON ให้เป็น Array
      const customers = JSON.parse(this.responseText);

      //  ใช้ let เพื่อ reassign inside loop
      let output = '';

      customers.forEach(function(customer) {
        // append to output ใช้ += 
        output += `
          <ul>
            <li>ID : ${customer.id}</li>
            <li>Name : ${customer.name}</li>
            <li>Company : ${customer.company}</li>
            <li>Phone : ${customer.phone}</li>
          </ul>
        `
      });

      document.getElementById('customers').innerHTML = output;
    }
  }

  xhr.send();
  
}