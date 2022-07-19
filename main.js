const tbody=document.getElementById('tbody')

fetch('https://donor-server.herokuapp.com/donors')
  .then(response => response.json())
  .then(data =>{
     for(one of data.reverse() ){

// try date 

const newDate=new Date(one.date)  //donation date  
const date_2=new Date() //today 
let difference =newDate.getTime() -date_2.getTime() 

let totalDays=Math.ceil(difference/(1000*3600*24))


        const tr=document.createElement('tr')
        tr.innerHTML=`
       
        <td data-label="নাম">${one.name} </td>
        <td data-label="রক্তের গ্রুপ">${one.blood}</td>
        <td data-label="ঠিকানা">${one.address} </td>
        <td data-label="মোবাইল">${one.phone}</td>
        <td data-label="সর্বশেষ রক্তদানের তারিখ">${one.date}</td>
        <td data-label="অতিবাহিত হয়েছে">${Math.abs(totalDays)}</td>
        <div id="action"> 
        <td><img onclick='editBtnClick()'  src='images/edit.svg' width='20' height='20'/> <img src='images/delete.svg' onclick="deleteBtnClick('${one._id}')" width='20' height='20'/></td>
        
        <div/>
        
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


  // open modal 
  let modalBtn = document.getElementById("modal-btn")
  let modal = document.querySelector(".modal")
  let closeBtn = document.querySelector(".close-btn")
  modalBtn.onclick = function() {
    modal.style.display = "block"
  }
  closeBtn.onclick = function() {
    modal.style.display = "none"
  }
  window.onclick = function(e) {
    if (e.target == modal) {
      modal.style.display = "none"
    }
  }

  function submitForm() {
    const name = document.getElementById('name').value
    const address = document.getElementById('address').value

    const phone = document.getElementById('phone').value
    
    //select value
    
 var select = document.getElementById('group');
var blood = select.options[select.selectedIndex].value;
//console.log(value); // en
const date=document.getElementById('donation-date').value
    
    
    const donor = {
      name, 
      blood,
      date,
      address, 
      phone }
    
    fetch('https://donor-server.herokuapp.com/donors', {
        method: 'POST',
        body: JSON.stringify(donor),
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
      })
      .then((response) => response.json())
      .then((json) =>
      {
        console.log(json)
        location.reload()
    
      });
    console.log(donor)
    //   location.reload()
    //  modal.style.display='none'
  } 


  // edit button clicl


  function editBtnClick(){
    alert("edit button click")
  }

  function deleteBtnClick(item){ 
    const proceed=window.confirm('are you sure ?') 
    if(proceed){
      const url=`https://donor-server.herokuapp.com/donors/${item}` 
      fetch(url,{
        method:'DELETE'
      }) 
      .then(res=>res.json())
      .then(date=>{
        // console.log(data); 
        //  alert("deleted") 
      window.location.reload()

       
      })  

    }
    // alert(item)
  }