export default function({ id, email, first_name, last_name, avatar }, isShown = true) {
    let temp = document.getElementById('template')
    let newTemp = temp.content.cloneNode(true)

    newTemp.querySelector('.card').dataset.id = id
    newTemp.querySelector('.avatar').src = avatar
    newTemp.querySelector('.fullname').textContent = `${first_name} ${last_name}`
    newTemp.querySelector(".email").textContent = email

    newTemp.querySelector('.avatar').href = 'https://reqres.in/api/users/${id}'

    if (isShown) {
        newTemp.querySelector(".single").href = `/profile.html?user=${id}`;
    } else {

        newTemp.querySelector(".single").style.display = `none`;
    }
    console.log(newTemp);
    return newTemp;
}