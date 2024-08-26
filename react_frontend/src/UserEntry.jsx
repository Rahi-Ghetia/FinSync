import React, { useState, useEffect } from "react";
import UserLogin from "./UserLogin";
import UserSignin from "./UserSignin";


function UserEntry(props) {

    const [accExis, setAccExis] = useState(true);

    const accExistQue = (val) => {
        setAccExis(() => val);
    }

    return (<>
        <div className="container-fluid">
            {accExis ?
                <UserLogin accExistQue={accExistQue} changeLoginState={props.changeLoginState} setUsername={props.setUsername} />
                :
                <UserSignin accExistQue={accExistQue} changeLoginState={props.changeLoginState} setUsername={props.setUsername} />
            }
        </div>
    </>);
}

export default UserEntry;