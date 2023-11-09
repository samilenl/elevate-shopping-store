const addToRecently = (id, name, price, image) => {
    const recently = localStorage.getItem("recently-viewed")
    const parsedList = recently ? JSON.parse(recently) : []
    let itemNotInList = true
    for(let i=0; i<parsedList.length; i++){
        if (parsedList[i].id === id){
            itemNotInList = false
            break
        }
    }
    if (itemNotInList) {
        if (parsedList.length > 21){
            parsedList.shift()
        }
        parsedList.push({id:id, name:name, price:price, image:image,})
    }
    localStorage.setItem("recently-viewed", JSON.stringify(parsedList))
    // console.log(JSON.parse(localStorage.getItem("recently-viewed")))
}

export default addToRecently