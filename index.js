const ShoppingList = []
const content = document.querySelector('#content')
const check = document.querySelector('#check')
const addText =  document.querySelector("#text")
const addBtn = document.querySelector('#add')
addBtn.addEventListener('click' , function(){
    const obj = {
        name:addText.value,id:((ShoppingList.length) + 1),checked:false
    }
    const divBox = document.createElement('div')
    const divName  = document.createElement('p')
    const checkBox = document.createElement('input')
    checkBox.addEventListener('click' ,function Checker(shops){
        obj.checked = checkBox.checked
        console.log(ShoppingList)
    })
    checkBox.type = 'checkbox'
    const deleteBtn = document.createElement('button')
    divBox.id = 'item-box'
    deleteBtn.id = 'delete'
    divName.innerHTML = addText.value
    deleteBtn.innerHTML = 'X'
    content.appendChild(divBox)
    divBox.appendChild(checkBox)
    divBox.appendChild(divName)
    divBox.appendChild(deleteBtn)
    ShoppingList.push(obj)
    console.log(ShoppingList)
})
function shopping(){
    ShoppingList.map(
        (shops) => {
            const divBox = document.createElement('div')
            const divName  = document.createElement('p')
            const checkBox = document.createElement('input')
            checkBox.addEventListener('click' ,function Checker(){
                shops.checked = checkBox.checked
                console.log(ShoppingList)
            })
            checkBox.type = 'checkbox'
            const deleteBtn = document.createElement('button')
            divBox.id = 'item-box'
            deleteBtn.id = 'delete'
            divName.innerHTML = shops.name
            deleteBtn.innerHTML = 'X'
            content.appendChild(divBox)
            divBox.appendChild(checkBox)
            divBox.appendChild(divName)
            divBox.appendChild(deleteBtn)
        }
        
    )
    
}
shopping()

