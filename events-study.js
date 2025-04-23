var checklist = document.getElementById("checklist");
var checklistItems = checklist.getElementsByTagName("li");
for (var i = 0; i < checklistItems.length; i++) {
    checklistItems[i].addEventListener("click", editItem); 
    checklistItems[i].addEventListener("blur", updateItem);
    checklistItems[i].addEventListener("keypress", itemKeyPress);
        
    }

    function editItem() {
        this.className = "edit";
        var input = this.querySelector("input");
        input.focus();
    }
    function updateItem() {
        this.previoiusElementSibling.innerHTML = this.value;
        this.parentNode.className = "";
        
    }
    function itemKeyPress(event) {
       console.log(event);
        }
    