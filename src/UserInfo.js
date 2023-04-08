export const UserInfo = ({ user }) => {
    const { name, age, hobbies, hairColor } = user || {};
    return(
        <>
        {
            user ? 
        <>
            <h1>{name}</h1>
            <p>Age: {age}</p>
            <p>Hair Color: {hairColor}</p>
            <h3>Hobbies</h3>
            {/* <ul>
                {hobbies.map((hobby, i) => <li key={hobby}>{hobby}</li>)}
            </ul> */}
         </> : <p>Loading</p>
        }
        </>
       
    )
}