document.getElementById('button1').addEventListener('click', (() => {

  async function loadCustomer() {
    const response = await fetch('customer.json');

    const resData = await response.json();

    return resData;
  }

  loadCustomer().then(customer => {
    const output = `
    <ul>
      <li>ID : ${customer.id}</li>
      <li>Name : ${customer.name}</li>
      <li>Company : ${customer.company}</li>
      <li>Phone : ${customer.phone}</li>
    </ul>
  `

    document.getElementById('customer').innerHTML = output;
  });

}));

document.getElementById('button2').addEventListener('click', (() => {
  async function loadCustomers() {
    const response = await fetch('customers.json');

    const resData = await response.json();

    return resData;
  }

  loadCustomers().then(customers => {

    let output = '';

    customers.forEach((customer) => {
      output += `
      <ul>
        <li>ID : ${customer.id}</li>
        <li>Name : ${customer.name}</li>
        <li>Company : ${customer.company}</li>
        <li>Phone : ${customer.phone}</li>
      </ul>
    `
    })

    document.getElementById('customers').innerHTML = output;
  });

}));