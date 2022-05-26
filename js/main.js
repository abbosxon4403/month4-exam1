import render from './render.js'

let list = document.getElementById('list')

async function show() {
    let fetchUsers = fetch('https://reqres.in/api/users')

    let dataFetch = await fetchUsers
    if (dataFetch.ok) {
        let data = (await dataFetch.json()).data
        render(list, data)
    }

}

show()