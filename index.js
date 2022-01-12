let btn=document.querySelector('button');
let input = document.querySelectorAll('input');
btn.addEventListener('click',deful);

var rIndex=1,
    table = document.getElementById("dis");

function deful(){
    input.forEach(input => input.value = '')
}


function insertion(){ 
    var id =document.getElementById("id").value;
    var name =document.getElementById("name").value;
    var dept =document.getElementById("dept").value;
    var prov =document.getElementById("prov").value;
    if(!id|| !name | !dept|| !prov){
        alert("Pleas fill all the box");
        return;
    }

    var row = table.insertRow(table.length);
    var cell_id = row.insertCell(0);
    var cell_name = row.insertCell(1);
    var cell_dept = row.insertCell(2)
    var cell_prov = row.insertCell(3)

    cell_id.innerHTML = id;
    cell_name.innerHTML = name;
    cell_dept.innerHTML = dept;
    cell_prov.innerHTML = prov;
    
    selectedRowToInput();
}

function deletion(){
    var id =document.getElementById("id").value;
    var name =document.getElementById("name").value;
    var dept =document.getElementById("dept").value;
    var prov =document.getElementById("prov").value;
    if(!id|| !name | !dept|| !prov){
        alert("Are you to delete random?");
       document.getElementById("dis").deleteRow(1);
    }
    else{
            table.deleteRow(rIndex);
                document.getElementById("id").value = "";
                document.getElementById("name").value = "";
                document.getElementById("dept").value = "";
                document.getElementById("prov").value = "";
        }
        }  
function update(){

    var id = document.getElementById("id").value;
    var name = document.getElementById("name").value;
    var dept = document.getElementById("dept").value;
    var prov = document.getElementById("prov").value;

        if(id|| name | dept|| prov){
            table.rows[rIndex].cells[0].innerHTML = id;
            table.rows[rIndex].cells[1].innerHTML = name;
            table.rows[rIndex].cells[2].innerHTML = dept;
            table.rows[rIndex].cells[3].innerHTML = prov;
            deful();
        }
        else{
            alert("PLease look at your input again");
            deful();
        }
}
function selectedRowToInput()
            {
                
                for(var i = 1; i < table.rows.length; i++)
                {
                    table.rows[i].onclick = function()
                    {
                      // get the seected row index
                      rIndex = this.rowIndex;
                      document.getElementById("id").value = this.cells[0].innerHTML;
                      document.getElementById("name").value = this.cells[1].innerHTML;
                      document.getElementById("dept").value = this.cells[2].innerHTML;
                      document.getElementById("prov").value = this.cells[3].innerHTML;
                    };
                }
            }

function search() {
    var input, filter, table, tr, td, i, txtValue;
    input = document.getElementById("id");
    filter = input.value.toUpperCase();
    table = document.getElementById("dis");
    tr = table.getElementsByTagName("tr");
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
    var x = document.getElementById("search");
              if (x.innerHTML === "Search") {
                x.innerHTML = "Back";
                
              } else {
                x.innerHTML = "Search";
              }

          deful();
          selectedRowToInput();
  }