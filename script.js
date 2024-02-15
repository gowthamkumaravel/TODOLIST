document.addEventListener("DOMContentLoaded", function() {
    const addButton = document.getElementById("add");
    const inputText = document.getElementById("text");
    const list = document.getElementById("list");
    const deleteButton = document.getElementById("delete");

    addButton.addEventListener("click", function() {
        const taskText = inputText.value.trim();
        if (taskText !== "") {
            const listItem = document.createElement("li");
            listItem.innerText = taskText;
            
            const deleteTaskButton = document.getElementById("delete");
            deleteTaskButton.innerText = "delete";
            deleteTaskButton.addEventListener("click", function() {
                listItem.remove();
            });
            
            listItem.appendChild(deleteTaskButton);
            list.appendChild(listItem);
            inputText.value = "";
        } else {
            alert("Please enter a valid task!");
        }
    });

    deleteButton.addEventListener("click", function() {
        list.innerHTML = "";
    });
});
