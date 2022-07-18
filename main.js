const tbody=document.getElementById('tbody')

fetch('https://donor-server.herokuapp.com/donors')
  .then(response => response.json())
  .then(data =>{
     for(one of data ){
        const tr=document.createElement('tr')
        tr.innerHTML=`
       
        <td data-label="Name">${one.name} </td>
        <td data-label="Blood Group">${one.blood}</td>
        <td data-label="Address">${one.address} </td>
        <td data-label="Phone">${one.phone}</td>
        <td data-label="date">${one.date}</td>
        <td data-label="Passed">12 days</td>
        <td>edit</td>
        <td>DELETE</td>
        
        `  
        
        console.log(tr) 
        tbody.appendChild(tr)
     }
    console.log(data)
}); 



function myFunction() {
    // Declare variables
    var input, filter, table, tr, td, i, txtValue;
    input = document.getElementById("myInput");
    filter = input.value.toUpperCase();
    table = document.getElementById("myTable");
    tr = table.getElementsByTagName("tr");
  
    // Loop through all table rows, and hide those who don't match the search query
    for (i = 0; i < tr.length; i++) {
      td = tr[i].getElementsByTagName("td")[0];
      if (td) {
        txtValue = td.textContent || td.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
          tr[i].style.display = "";
        } else {
          tr[i].style.display = "none";
        }
      }
    }
  }
