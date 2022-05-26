import createNode from "./createNode.js";

export default function(where, data) {
    let frg = document.createDocumentFragment()

    data.forEach((user) => {
        let newNode = createNode(user)
        frg.append(newNode)
    });

    where.innerHTML = ''
    where.append(frg)
}