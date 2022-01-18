let $ = function (id) {
    return document.getElementById(id);
}
function createList() {
    let inputValue = $("input").value;
    let text = document.createTextNode(inputValue);
    let li = document.createElement("li");
    li.className = "list";
    li.id = "list";
    li.appendChild(text);
    let clear = $("clear-btn");

    if(inputValue === "") { $("msg").innerHTML = "Please enter an item"; } 
    else { 
        $("msg").innerHTML = "";
        clear.style.visibility = 'visible';
        $("myList").appendChild(li);
    }

    $("input").value = "";

    document.querySelector("ul").addEventListener('click', (e) => {
        if(e.target.tagName === "LI")
        e.target.classList.toggle('checked', true);
    })

    clear.addEventListener('click', () => {
        document.querySelector('li').remove();
        clear.style.visibility = 'hidden';
    })
}
window.onload = function() {
   $("add-btn").onclick = createList;
}