
// ================ Choosing Only Paragrpahs Which Are In A Div And Changing Their Color ============

// var main = document.getElementById('main')
// var a = main.getElementsByTagName('p')
// for (var i = 0; i < a.length; i++){
//     a[i].style.color = 'red'
// }
// ===========================================

//  ============ TO DO APPLICATION ====================

var inp = document.getElementById('inp')
var list = document.getElementById('list')
function delVal(del) {
    del.parentNode.remove()
}
function editVal(edit) {
    edit.parentNode.firstChild.nodeValue = "Sorry,I haven't learned"
}
function delAll(){
    list.innerHTML = ""
}
function addTask() {
    var li = document.createElement('li')
    var liText = document.createTextNode(inp.value)
    li.appendChild(liText)
    var del = document.createElement('button')
    var delText = document.createTextNode('Delete')
    del.appendChild(delText)
    li.appendChild(del)
    del.setAttribute('class', 'del')
    del.setAttribute('onclick', 'delVal(this)')
    var edit = document.createElement('button')
    var editText = document.createTextNode('Edit')
    edit.appendChild(editText)
    edit.setAttribute('class', 'edit')
    edit.setAttribute('onclick', 'editVal(this)')
    li.appendChild(edit)
    list.appendChild(li)
    inp.value = ""
}

