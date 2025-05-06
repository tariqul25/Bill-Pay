import { updateProfile } from 'firebase/auth';
import React from 'react';
import { auth } from '../Firebase/Firebase.config';

const UpdateProfile = () => {
   
const handleUpdateProfile = (e) => {
    e.preventDefault();
    const name = e.target.name.value
    const photoUrl = e.target.photoUrl.value
    updateProfile(auth.currentUser, {
        displayName: name,
        photoURL: photoUrl,
    }).then(() => {
        console.log('profile updated');
        console.log(auth.currentUser);
    }).catch(error => {
        console.log(error);
        // setErrorMessage(error)
    })
}
return (
    <div className="card w-full max-w-sm mx-auto shrink-0 py-10  bg-base-300 px-6 my-8">
        <h1 className='text-3xl font-bold text-center'>Update your Profile</h1>
        <div className="card-body rounded-xl ">
            <form onSubmit={handleUpdateProfile} className="">
                <label className="label">Name</label>
                <input type="text" name='name' className="input" placeholder="Name" required />
                <label className="label">Photo-Url</label>
                <input type="text" name='photoUrl' className="input py-2" placeholder='Drop your photo url' required />
                <button type='submit' className="btn btn-neutral w-full mt-4">Update</button>

            </form>

        </div>
    </div>
    );
};

export default UpdateProfile;