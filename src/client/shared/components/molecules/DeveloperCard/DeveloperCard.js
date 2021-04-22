import React from 'react'
const initState = {
    fullname : 'Grandez Mendoza Erick Manuel',
    gitHub: 'https://github.com/Cydonianllama',
    demoApp : '',
    email : '142017erick@gmail.com',
    phoneNumber : '929284173'
}
const DeveloperCard = () => {
    return(
        <>
            <div className = "dev-card">
                <div className = "dev-card-header">
                    <h4>
                        {initState.fullname}
                    </h4>
                </div>
                <div className ="dev-card-footer">
                    <a href={initState.gitHub} target="_blank">My GitHub</a>
                    <div>
                        <span>Email :</span>
                        <p>{initState.email}</p>
                    </div>
                    <div>
                        <span>Phone :</span>
                        <p>{initState.phoneNumber}</p>
                    </div>
                </div>
            </div>
        </>
    )
}
export default DeveloperCard;