const testDiv = document.querySelector("#test");
const addtask = document.querySelector("#addtask");
const btn = document.querySelector("#btn-submit");

function updateDom(arr) {
  testDiv.innerHTML = "";
  let arrCopy = arr;
  switch (displayOptionSelected) {
  case 'completedtodos':
    arrCopy = arr.filter(todo=> todo.check)
    break;
    case 'notCompletedtodos':
      arrCopy = arr.filter(todo=> !todo.check)
      break;
    default:
      console.log('check the ids....')
      break;
  }
  arrCopy.forEach((curr) => {
    let div = document.createElement("div");
    div.id = curr.id;
    div.classList.add("godfather");
    div.innerHTML = `<i class="fas fa-trash-alt remove-btn"></i><div class="${
      curr.check ? "desc textthrough" : "desc"
    }"></div><i class="${
      curr.check ? "fas green-yes" : "far green-no"
    } fa-check-square"></i>`;
    div.childNodes[1].innerText = curr.desc;
    div.addEventListener("click", (e) => listener(e));
    testDiv.appendChild(div);
  });

  localstorage();
  addtask.focus();
}

function filterData(what) {
  let checked = data.filter((cur) => cur.check);
  let notChecked = data.filter((cur) => !cur.check);

  what == "check"
    ? updateDom(checked)
    : updateDom(data) || what == "uncheck"
    ? updateDom(notChecked)
    : updateDom(data);
}

function localstorage() {
  localStorage.setItem("data", JSON.stringify(data));
  localStorage.setItem("lastId", JSON.stringify(lastId));
}

function listener(e) {
  if (e.target.classList[2] == "fa-check-square") {
    console.log("WORKS");
    checkTask(e.target.parentNode.id);
  }

  if (e.target.classList[2] == "remove-btn") {
    deleteItem(e.target.parentNode.id);
  }
}

function init() {
  addtask.value;
  btn.addEventListener("click", (e) => {
    addTodoItem(addtask.value);
    addtask.value = "";
  });

  let localStorageData = localStorage.getItem("data");
  if (localStorageData !== null) {
    data = JSON.parse(localStorageData);
  }
  localStorageData = localStorage.getItem("lastId");
  if (localStorageData !== null) {
    lastId = JSON.parse(localStorageData);
  }
  updateDom(data);
}

function deleteItem(id) {
  data = data.filter((current) => current.id != id);
  updateDom(data);
  return data;
}

// checktest::
function addTodoItem(description) {
  if (description !== null && description.length !== 0) {
    data.push({
      id: lastId++,
      desc: description,
      check: false,
    });
    updateDom(data);
    return data[data.length - 1];
  } else {
    return "Task description empty!";
  }
}
// check test::
function checkTask(id) {
  data.forEach((value) => {
    if (value.id == id) {
      if (value.check == true) {
        value.check = false;
      } else {
        value.check = true;
      }
    }
  });
  updateDom(data);
  return data;
}

init();


/* stretch features */

const displayOptions = document.querySelectorAll('input[type = radio]');
console.log(displayOptions);
displayOptions.forEach(option =>{
  option.addEventListener('click',(e)=>{
    
    displayOptions.forEach(option=>{
      option.checked = false;
    })
    console.log(e.target.checked = true);
    displayOptionSelected = e.target.id;
    updateDom(data);
  })
})