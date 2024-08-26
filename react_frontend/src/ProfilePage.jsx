import React, { useState, useEffect } from "react";

function ProfilePage(props) {

    const [profile_data,setProfileData] = useState();

    useEffect(() => {
        const getProfileData = async () => {
            try {
                const response = await fetch('http://localhost:8000/getUserProfileData/', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({ "username": props.username }),
                });
                if (!response.ok) {
                    throw new Error('Fetching Error')
                }
                const data = await response.json();
                console.log(data);
                setProfileData(() => data);
            } catch (error) {
                console.error(error);
            }
        };
        getProfileData();
    }, []);

    return (<>
        <div>
            <h3>Profile</h3>
            <div className="row">
                <div className="col-3">
                    Name :
                </div>
                {/* <div className="col-6">{profile_data.name}</div> */}
            </div>
        </div>
    </>);
}

export default ProfilePage;