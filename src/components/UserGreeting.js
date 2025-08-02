export const UserGreeting = () =>{
    const isLoggedIn = false
    /* return <div>Welcome {isLoggedIn ? 'Abeer': 'Guest'}</div> */
    return <div>Welcome {isLoggedIn && 'Abeer'}</div>
}