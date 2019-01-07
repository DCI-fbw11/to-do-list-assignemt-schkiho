class DoList {
  constructor() {
    console.log("hey1");
    this.theList = [];
    this.inWorkList = [];
    this.doneList = [];
    this.newTask = document.getElementById("inputValue");
    this.addBtn = document.getElementById("addButton");
    this.toList = document.getElementById("taskList");
    this.woList = document.getElementById("workList");
    this.doList = document.getElementById("finished");
    this.addBtn.addEventListener("click", () => {
      this.createTask();
    });
  }

  createTask() {
    var item = this.newTask.value; // read value
    console.log(item);
    this.theList.push(item); // push it to a array
    this.update(); // run the create item function
  }

  deleteAll() {
    while (this.toList.firstChild) {
      this.toList.removeChild(this.toList.firstChild);
    }
    while (this.woList.firstChild) {
      this.woList.removeChild(this.woList.firstChild);
    }
    while (this.doList.firstChild) {
      this.doList.removeChild(this.doList.firstChild);
    }
  }

  moveItem(index) {
    console.log("hey");
    this.inWorkList.push(this.theList[index]);
    this.theList.splice(index, 1);
    this.update();
  }

  deleteInput(index) {
    this.theList.splice(index, 1);
    this.update();
  }

  moveToComplete(index) {
    console.log("hey");
    this.doneList.push(this.inWorkList[index]);
    this.inWorkList.splice(index, 1);
    this.update();
  }

  goBackToDo(index) {
    console.log(this.inWorkList[index]);
    this.theList.push(this.inWorkList[index]);
    this.inWorkList.splice(index, 1);
    this.update();
  }

  deleteAfterComplete(index) {
    this.doneList.splice(index, 1);
    this.update();
  }

  goBackToWork(index) {
    console.log(index);
    this.inWorkList.push(this.doneList[index]);
    this.doneList.splice(index, 1);
    this.update();
  }

  update() {
    this.deleteAll();
    for (let item of this.theList) {
      var listItem = document.createElement("li");
      var template = `<button onclick="deleteInput(${this.theList.indexOf(
        item
      )})">Delete</button> ${item}  <button 
      onclick="moveItem(${this.theList.indexOf(item)})">move on</button>`;
      listItem.innerHTML = template;

      if (this.newTask === "") {
        alert("You must write something!");
      } else {
        this.toList.appendChild(listItem);
      }
      this.newTask.value = "";
    }

    for (let item of this.inWorkList) {
      var listItem = document.createElement("li");
      var template = `<button onclick="goBackToDo(${this.inWorkList.indexOf(
        item
      )})">Go Back</button> ${item} <button 
    onclick="moveToComplete(${this.inWorkList.indexOf(item)})">Move</button>`;
      listItem.innerHTML = template;

      if (this.newTask === "") {
        alert("You must write something!");
      } else {
        this.woList.appendChild(listItem);
      }
      this.newTask.value = "";
    }

    for (let item of this.doneList) {
      var listItem = document.createElement("li");
      var template = `<button onclick="goBackToWork(${this.doneList.indexOf(
        item
      )})">Go Back</button> ${item} <button 
    onclick="deleteAfterComplete(${this.doneList.indexOf(
      item
    )})">Delete</button>`;
      listItem.innerHTML = template;

      if (this.newTask === "") {
        alert("You must write something!");
      } else {
        this.doList.appendChild(listItem);
      }
      this.newTask.value = "";
    }
  }
}

var myList = new DoList();

function moveItem(index) {
  myList.moveItem(index);
}
function deleteInput(index) {
  myList.deleteInput(index);
}

function moveToComplete(index) {
  myList.moveToComplete(index);
}

function goBackToDo(index) {
  myList.goBackToDo(index);
}

function deleteAfterComplete(index) {
  myList.deleteAfterComplete(index);
}

function goBackToWork(index) {
  myList.goBackToWork(index);
}
