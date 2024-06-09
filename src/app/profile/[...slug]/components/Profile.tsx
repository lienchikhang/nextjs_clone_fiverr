import React from 'react'
import ProfileInfo from './ProfileInfo'
import UserGig from './UserGig'

const Profile = () => {
    return (
        <React.Fragment>
            <div className='profile__info'>
                <ProfileInfo />
            </div>
            <div className='profile__jobList'>
                <div className='jobList__tile'>
                    <h2>Your job</h2>
                </div>
                <UserGig />
            </div>
        </React.Fragment>
    )
}

export default Profile