
import { useState } from "react";

export function KeyDemo() {
    // const [users, setUsers] = useState([{username:null}]);
    // const [userMsg, setUserMsg] = useState(); 
    const [progreesswidth, setProgresswidth] = useState([{width:"0%"}]);
    const [strengthcolor, setStrengthcolor] = useState("");
    // useEffect(() => {
    //     LoadUser();
    // }, []);

    // function LoadUser() {
    //     axios.get(`/users.json`)
    //         .then(response => {
    //             setUsers(response.data);
    //         })
    //         .catch(error => {
    //             console.error("There was an error loading the users!", error);
    //         });
    // }
    // function verifyUser(e) {
    //     var item=usersName.find(item => item.username === e.target.value);
    //     for (var user of usersName) {
    //         if (item) {
    //             setUserMsg("Username already exists!");
    //             break;
    //         } else {
    //             setUserMsg(e.target.value);
    //         }
    //     }
    // }
    const VerifyPassword = (e) => {
        if(e.target.value.match(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/)){
            setProgresswidth({width:"100%"});
            setStrengthcolor("bg-success");
        } else if (e.target.value.length<6){
            setProgresswidth({width:"33%"});
            setStrengthcolor("bg-danger");
        } else {
            setProgresswidth({width:"66%"});
            setStrengthcolor("bg-warning");
        }
    }
    return (
        <div>
            <h3>Register User</h3>
            <dl>
                {/* <dt>Username:</dt>
                <dd>
                    <input type="text" onKeyUp={verifyUser}/>
                </dd>
                <dt>Message:</dt>
                <dd>
                    <span>{userMsg}</span>
                </dd>
                <dt>Users List:</dt>
                <dd>
                    <ul>
                        {usersName.map((user, index) => (
                            <li key={index}>{user.username}</li>
                        ))}
                    </ul>
                </dd> */}
                <dd>
                    <input className="form-control" type="password" name="password" onKeyUp={VerifyPassword} />
                </dd>
                <dd>
                    <div className="progress">
                        <div style={progreesswidth} className={`progress-bar progress-bar-striped progress-bar-animated progress-bar ${strengthcolor}`} role="progressbar" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">

                        </div>
                    </div>
                </dd>
            </dl>
        </div>
    );
}