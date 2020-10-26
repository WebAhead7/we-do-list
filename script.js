function checkTask(array, id) {
  return array.forEach((value) => {
    if (value.id === id) {
      if (value.check == true) {
        value.check = false;
      } else {
        value.check = true;
      }
    }
    console.log("test ", value.check);
  });
}
checkTask(data, 2);
console.log(data);
