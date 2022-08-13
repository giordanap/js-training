
const jokeUrl  = 'https://api.chucknorris.io/jokes/random';
const urlUsers = 'https://reqres.in/api/users?page=2'


const getJoke = async() => {

    try {

        const resp = await fetch( jokeUrl );
        
        if ( !resp.ok ) throw `The request was not made`;
    
        const { icon_url, id, value } = await resp.json();

        return { icon_url, id, value };
        
    } catch (error) {
     
        throw error;

    }

}

const getUsers = async() => {

    const resp = await fetch( urlUsers );
    const { data:users } = await resp.json();

    return users;
}




export {
    getJoke,
    getUsers,
}
