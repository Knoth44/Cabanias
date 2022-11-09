import axios from 'axios'

const Database = () => {

    const DB_MongoCabanias = ()=> {
        axios.get("http://localhost:5000/cabanias")
        .then(i => console.log(i.data))
        .catch(err => console.log(err)) 
    } 
    
    const DB_MongoUser = () => {
        axios.get("http://localhost:5000/users")
        .then(i => console.log(i.data))
        .catch(err => console.log(err)) 
    }

    return {
        DB_MongoCabanias,
        DB_MongoUser
    };
}

export default Database