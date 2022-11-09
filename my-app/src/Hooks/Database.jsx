import axios from 'axios'
import { CallDataBaseProvider } from '../Context/Context';

const Database = () => {
    const { setUser, User } = CallDataBaseProvider();

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
    const DB_MongoUserFind = (e) => {
        const { email, password } = e;

        axios.get("http://localhost:5000/users")
            .then(i => {
                const aux = i.data;
                setUser(buscar(aux, email, password))
                console.log(User)
            })
            .catch(err => console.log(err))
    }
    const buscar = (a, b, c) => {
        for (const persona of a) {
            if (persona.username.email === b && persona.username.password === c) {
                return persona
            }

        }
    }
    return {
        DB_MongoCabanias,
        DB_MongoUser,
        DB_MongoUserAdd,
        DB_MongoUserFind
    };
}

export default Database