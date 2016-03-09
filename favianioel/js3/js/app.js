//Problem: User interaction does/n.t provide desired results ;
//Solution: Add interactivity so the user can manage daily tasks.
var taskInput   =   document.getElementById('new-task'); //new-task
var addButton   =   document.getElementsByTagName('button')[0];  //first button
var incompleteTasksHolder   =   document.getElementById('incomplete-tasks');  //incomplete-tasks
var completedTasksHolder    =   document.getElementById('completed-tasks');   //completed-tasks
//New Task List Item
var createNewTaskElement    = function (taskString) {
    //create List Item
    var listItem = document.createElement('li');

    //input {checkbox}
    var checkBox    =   document.createElement('input'); // checkbox

    //label
    var label   =   document.createElement('label');

    //input {text}
    var editInput   =   document.createElement('input'); // Text
    //create a button class="edit"
    var editButton   =   document.createElement('button');

    //button with de class="delete"
    var deleteButton   =   document.createElement('button');

    //Each element needs modifyng
    checkBox.type =  "checkbox";
    editInput.type  =   "text";

    editButton.innerText =   "Edit";
    editButton.className    =   "edit";


    deleteButton.innerText  =   "Delete";
    deleteButton.className  =   "delete";

    label.innerText =   taskString;

    //each element needs appending
    listItem.appendChild(checkBox);
    listItem.appendChild(label);

    listItem.appendChild(editInput);
    listItem.appendChild(editButton);

    listItem.appendChild(deleteButton);

    return  listItem;
}
//Add a new task
var addTask = function () {
    console.log("add task...");
    if (taskInput.value == false ){

    } else {
    //create a new list item  with the text from #new-task:
    var listItem    =   createNewTaskElement(taskInput.value);
    //Append listItem to incompleteTaskHolder
    incompleteTasksHolder.appendChild(listItem);
    bindTaskEvents(listItem, taskCompleted);

    //clear the add input
    taskInput.value =   "";
    }
}

//edit an existing task
var editTask    = function () {
    console.log("edit task...");

    var listItem = this.parentNode;
    var editButton  =   listItem.querySelector("button.edit");
    var editInput   =   listItem.querySelector("input[type=text");
    var label   =   listItem.querySelector("label");
    var containsClass   =   listItem.classList.contains("editMode");


        //iff the class of the parent is  .editMode
        if(containsClass) {
            //switch form .editMode
            //label text become the input's value
            editButton.innerText=   "Edit"
            label.innerText =   editInput.value;

        } else {
            //switch to .editMode
            //input value becomes the labels text
            editButton.innerText    =   "Save";
            editInput.value   =  label.innerText;

        }

        //Toggle .editMode on the parent
        listItem.classList.toggle("editMode");
}

//Delete an existing task
var deleteTask  = function () {
    console.log("delete task...");
    var listItem  = this.parentNode;
    var ul =    listItem.parentNode;
        //remove the parent list item from the ul
        ul.removeChild(listItem);
}

//Mark a task as complete
var taskCompleted   = function () {
    console.log("task complete...");

        //append the task list item to the #completed-tasks
       var listItem =  this.parentNode;
    completedTasksHolder.appendChild(listItem);
    bindTaskEvents(listItem, taskIncomplet);

}

//mark a task as incomplete
var taskIncomplet   = function () {
    console.log("task incomplete...");

        //Append the task list item to the #completed-tasks
        var listItem = this.parentNode;
        incompleteTasksHolder.appendChild(listItem);
        bindTaskEvents(listItem, taskCompleted);

}



var bindTaskEvents  = function (taskListItem, checkBoxEventHandler) {
    console.log('bind list items event');
    //select it's children
    var checkBox    =   taskListItem.querySelector('input[type=checkbox]');
    var editButton  =   taskListItem.querySelector('button.edit');
    var deleteButton    =   taskListItem.querySelector('button.delete');
        //bind editTask to edit button
          editButton.onclick= editTask;
        //bind deleteTask to delete button
         deleteButton.onclick= deleteTask;
        //bind checkBoxEventHandler to checkbox
         checkBox.onchange = checkBoxEventHandler;
}

var ajaxRequest = function () {
    console.log("AJAX request");
}



//set the click handler to the addTask function
addButton.addEventListener("click", addTask);
addButton.addEventListener("click", ajaxRequest);

//Cycle over incompleteTasksHolder ul list items
for (var i  = 0;    i   <   incompleteTasksHolder.children.length;   i++ ) {
        //bind events to list item's children (taskComplete)
        bindTaskEvents(incompleteTasksHolder.children[i], taskCompleted);
}
//Cycle over completTaskHolder ul list items
for (var i  = 0;    i   <   completedTasksHolder.children.length;    i++) {
        //bind events to list item's children (taskIncomplete)
        bindTaskEvents(completedTasksHolder.children[i], taskIncomplet);

}