import createNode from './createNode.js'


(async() => {
    let userId = window.location.search.split("=")[1]
    let singleData = await fetch('https://reqres.in/api/users' + userId)

    if (singleData.ok) {
        let data = (await singleData.json()).data
        let falseNode = createNode(data, false)

        document.querySelector(".container").append(falseNode)
    }

})()