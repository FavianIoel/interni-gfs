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

    //each element needs appending
    listItem.appendChild(checkBox);
    listItem.appendChild(editInput);
    listItem.appendChild(editButton);
    listItem.appendChild(deleteButton);

    return  listItem;
}
//Add a new task
var addTask = function () {
    console.log("add task...");
    //create a new list item  with the text from #new-task:
    var listItem    =   createNewTaskElement('Some New Task');
    //Append listItem to incompleteTaskHolder
    incompleteTasksHolder.appendChild(listItem);
}
//edit an existing task
var editTask    = function () {
    console.log("edit task...");

    //when the edit button is pressed


        //iff the class of the parent is  .editMode


            //switch form .editMode


            //label text become the input's value


        //else


            //switch to .editMode


            //input value becomes the labels text


        //Toggle .editMode on the parent
};

//Delete an existing task
var deleteTask  = function () {
    console.log("delete task...");



    //when the delete pressed


        //remove the parent list item from the ul


}

//Mark a task as complete
var taskCompleted   = function () {
    console.log("task complete...");


    //when the checkbox is checked


        //append the task list item to the #completed-tasks


}

//mark a task as incomplete
var taskIncomplet   = function () {
    console.log("task incomplete...");



    //when the checkbox is unchecked


        //Append the task list item to the #completed-tasks

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


//set the click handler to the addTask function
addButton.onclick   =   addTask;

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