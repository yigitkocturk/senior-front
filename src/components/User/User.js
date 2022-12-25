import React,{useState,useEffect} from 'react'


function User(props) {

    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [userList, setUserList] = useState([]);

    useEffect(()=>{
        fetch("/users")
        .then(res => res.json())
        .then(
            (result) => {
                setIsLoaded(true);
                setUserList(result)
            },
            (error) => {
                setIsLoaded(true);
                setError(error);
            }
        )
    },[])

    if(error) {
        return <div> Error!!!</div>
    }else if(!isLoaded){
        return <div>Loading...</div>
    } else {
        return(
            <div className='container'>
              users!!!
            </div>
        )
    }
}

export default User