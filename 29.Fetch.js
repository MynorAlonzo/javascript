const getUsers = async () => {

    try {
        const res = await fetch('https://jsonplaceholder.typicode.com/users')
        const users = await res.json()
        console.log(users)

        for (user of users) {
            document.body.innerHTML += `
            <ul>
            <li>${user.id}<br>
                ${user.name}<br>
                ${user.website}<br>
                ${user.username}
            </li></ul>`
        }
    } catch (error) {
        console.log(error)
    } finally {
        console.log('Genial!!!!!')
    }
}

getUsers()