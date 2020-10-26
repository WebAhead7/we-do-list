const testDiv = document.querySelector("#test");

function updateDom(arr) {
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
    console.log(e.target.parentNode.id);
  }
}

console.log(updateDom(data));
