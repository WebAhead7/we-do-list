function deleteItem(id) {
    // console.log(data);
    let flag = data.some(current => current.id===id)
    if (flag === false) {
      console.info(`ID ${id} not in array`);
        return false;
    } 
    let newArr=data.filter((current) => current.id!=id);
    // console.log(newArr);
    return newArr;
}
