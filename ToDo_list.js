const name2 = document.querySelector('#name1');
const tableBody= document.querySelector('#tableBody')
let allData = [];

function editName(index){
   let editedText =  prompt("Enter something")
   allData[index].name2 =editedText
   displayData()
}
function deleteRow(index){
    allData.splice(index,1);
    displayData()
}
function displayData(){
    tableBody.innerHTML="";
    allData.map((item,index)=>{
        tableBody.innerHTML+=`
        <tr>
        <td id='edit1'>${item.name2} <button id='edit' onclick="editName(${index})">edit</button> </td>
       <td id='delete1'> <button id='delete' onclick="deleteRow(${index})">Delete </button> </td>

        </tr>`
    })
}

allData=[]
function storeData(){
    allData = [...allData,
        {
            "name2": name2.value
        }
    ];
    name2.value=""
    displayData()
}

const submit2 = document.querySelector('#submit1');
submit2.addEventListener('click', storeData)
displayData()