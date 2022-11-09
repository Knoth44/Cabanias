import axios from 'axios'

const Database = () => {

    const DB_MongoCabanias = () => {
        axios.get("http://localhost:5000/cabanias")
            .then(i => console.log(i.data))
            .catch(err => console.log(err))
    }

    const DB_MongoUser = () => {
        axios.get("http://localhost:5000/users")
            .then(i => console.log(i.data))
            .catch(err => console.log(err))
    }

    const DB_MongoUserAdd = (e) => {
        let username = e.user;

        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(username)
        };
        fetch('http://localhost:5000/users/add', requestOptions)
            .then(i => i.json())
            .catch(z => console.log("Error:" + z))
    }


    return {
        DB_MongoCabanias,
        DB_MongoUser,
        DB_MongoUserAdd
    };
}

export default Database