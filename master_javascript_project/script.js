var selectedRow = null

function onFormSubmit() {
    if (validate()) {
        var formData = readFormData();
        if (selectedRow == null)
            insertNewRecord(formData);
        else
            updateRecord(formData);
        resetForm();
    }
}

function readFormData() {
	
    var formData = {};
    formData["citycode"] = document.getElementById("citycode").value;
    formData["cityname"] = document.getElementById("cityname").value;
    formData["location"] = document.getElementById("location").value;
    formData["yes"]  = document.getElementById("yes").value;
    formData["no"]  = document.getElementById("no").value;
    return formData;
    
}

function insertNewRecord (data) {
	
    var table = document.getElementById("employeeList").getElementsByTagName('tbody')[0];
    var newRow = table.insertRow(table.length);
    cell1 = newRow.insertCell(0);
    cell1.innerHTML = data.citycode;
    cell2 = newRow.insertCell(1);
    cell2.innerHTML = data.cityname;
    cell3 = newRow.insertCell(2);
    cell3.innerHTML = data.location; 
     
     
     
    cell4 = newRow.insertCell(3);
    var newDate = new Date();
    cell4.innerHTML = (newDate.getMonth()+1)+ '/'+ (newDate.getDate())+ "/" + newDate.getFullYear() +" [" + newDate.getHours() +": " + newDate.getMinutes() +": " + newDate.getSeconds()+"]" ;
 
   cell5 = newRow.insertCell(4);
   cell5.innerHTML =`<button onClick="onEdit(this)">EDIT</button>`
    
   cell6 = newRow.insertCell(5);
   cell6.innerHTML ="active"

}
function resetForm() {
    document.getElementById("citycode").value = "";
    document.getElementById("cityname").value = "";
    document.getElementById("location").value = "";
    document.getElementById("status").value = "";

    selectedRow = null;
}

function onEdit(td) {
    selectedRow = td.parentElement.parentElement;
    document.getElementById("citycode").value = selectedRow.cells[0].innerHTML;
    document.getElementById("cityname").value = selectedRow.cells[1].innerHTML;
    document.getElementById("location").value = selectedRow.cells[2].innerHTML;
    document.getElementById("status").value = selectedRow.cells[4].innerHTML;
}

function updateRecord(formData) {
    selectedRow.cells[0].innerHTML = formData.citycode;
    selectedRow.cells[1].innerHTML = formData.cityname;
    selectedRow.cells[2].innerHTML = formData.location;
    selectedRow.cells[3].innerHTML = (newDate.getMonth()+1)+ '/'+ (newDate.getDate())+ "/" + newDate.getFullYear() +" " + newDate.getHours() +": " + newDate.getMinutes() +": " + newDate.getSeconds() ;
    selectedRow.cells[4].innerHTML = formData.status;
    
 
}

 /*function onDelete(td) {
    if (confirm('Are you sure to delete this record ?')) {
        row = td.parentElement.parentElement;
        document.getElementById("employeeList").deleteRow(row.rowIndex);
        resetForm();
    }
}
*/
function validate() {
    isValid = true;
    if (document.getElementById("citycode").value == "") {
        isValid = false;
        document.getElementById("citycodeValidationError").classList.remove("hide");
    } else {
        isValid = true;
        if (!document.getElementById("citycodeValidationError").classList.contains("hide"))
            document.getElementById("citycodeValidationError").classList.add("hide");
    }
    return isValid;
}