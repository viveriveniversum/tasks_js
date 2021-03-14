//Create Container division
let divCon = document.createElement("div")
divCon.className = "container"
document.body.appendChild(divCon)

//Create first division
let divOne = document.createElement("div")
divOne.className = "divOne"
divOne.setAttribute("id","one")
divCon.appendChild(divOne)
divOne.style.margin = "20px"

//Form header
let header = document.createElement("h2")
header.innerText = "Form"
divOne.appendChild(header)


//Create form element and append it under the div
let form = document.createElement("form")
form.className = "formOne"
divOne.appendChild(form)
form.setAttribute("id", "addForm");




//Create input element and append it under the form
let input = document.createElement("input")
input.className = "inputOne"
input.setAttribute("type", "text");
input.setAttribute("id", "item")
input.placeholder = "Type here..."
form.appendChild(input)
let input2 =document.createElement("input")
input2.className = "inputTwo"
input2.setAttribute("type","submit")
input2.value = "ADD"
form.appendChild(input2)


//Create second division
let divTwo = document.createElement("div")
divTwo.className = "divTwo"
divCon.appendChild(divTwo)


//Create ul element and append it under the div
let ul = document.createElement("ul")
ul.className = "list-group"
ul.setAttribute("id", "items")
divTwo.appendChild(ul)

//Create li elements and buttons, append them under the ul
let li = document.createElement("li")
li.className = "list-group-item"
li.innerText = "Item 1"
ul.appendChild(li)
let button = document.createElement("button")
button.className = "btn delete"
button.innerText = "X"
li.appendChild(button)
let li2 = document.createElement("li")
li.className = "list-group-item"
li2.innerText = "Item 2"
ul.appendChild(li2)
let button2 = document.createElement("button")
button2.className = "btn delete"
button2.innerText = "X"
li2.appendChild(button2)
let li3 = document.createElement("li")
li.className = "list-group-item"
li3.innerText = "Item 3"
ul.appendChild(li3)
let button3 = document.createElement("button")
button3.className = "btn delete"
button3.innerText = "X"
li3.appendChild(button3)
let li4 = document.createElement("li")
li.className = "list-group-item"
li4.innerText = "Item 4"
ul.appendChild(li4)
let button4 = document.createElement("button")
button4.className = "btn delete"
button4.innerText = "X"
li4.appendChild(button4)




let form1 = document.getElementById("addForm")
let itemList = document.getElementById("items")



//Add new item to list
form1.addEventListener("submit", addItem)
//Remove item from list
itemList.addEventListener("click", removeItem)




function addItem(e){
    e.preventDefault();

    //Get input value
    let newItem = document.getElementById("item").value;
    //Create element
    let li = document.createElement("li")
    //Add class    
    li.className = "list-group-item"
    //Add text node with input value    
    li.appendChild(document.createTextNode(newItem))


    //Create delete button element
    let deleteBtn = document.createElement("button");
    //Add classes to delete button
    deleteBtn.className = "btn btn-danger btn-sm float-right delete";
    //Append text node
    deleteBtn.appendChild(document.createTextNode("X"));
    //Append button to li
    li.appendChild(deleteBtn);


    itemList.appendChild(li)
}


function removeItem(e){
    if(e.target.classList.contains("delete")){
        if(confirm("Are you sure?")){
            let li = e.target.parentElement;
            itemList.removeChild(li)
        }
    }
}
