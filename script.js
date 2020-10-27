const testDiv = document.querySelector("#test");
const addtask = document.querySelector("#addtask");
const btn = document.querySelector("#btn-submit");

function updateDom(arr) {
  testDiv.innerHTML = "";
  arr.forEach((curr) => {
    let div = document.createElement("div");
    div.id = curr.id;
    div.innerHTML = `<div class="icon">=D</div><div class="desc">${curr.desc}</div><button type="button">X</button>`;
    div.addEventListener("click", (e) => listener(e));
    testDiv.appendChild(div);
  });
}

function listener(e) {
  if (e.target.type == "button") {
    // deleteItem(e.target.parentNode.id);
    checkTask(e.target.parentNode.id);
  }
}

function init() {
  addtask.value;
  btn.addEventListener("click", (e) => {
    addTodoItem(addtask.value);
    addtask.value = "";
  });
}

function deleteItem(id) {
  // console.log(data);
  // let flag = data.some((current) => current.id === id);
  // if (flag === false) {
  //   console.info(`ID ${id} not in array`);
  //   return false;
  // }
  data = data.filter((current) => current.id != id);

  updateDom(data);
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
}

init();
