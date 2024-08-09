"use client";
import { useSelector } from "react-redux";
import { useRef, useState, useEffect } from "react";
import { getStorage, uploadBytesResumable, ref, getDownloadURL } from "firebase/storage";
import { app } from "../firebase";
import { Alert, Button, Modal, TextInput } from "flowbite-react";
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import { updateFailure, updateStart, updateSuccess,deleteUserFailure,deleteUserSuccess, deleteUserStart } from "../redux/user/userSlice";
import { useDispatch } from "react-redux";
import {HiOutlineExclamationCircle} from 'react-icons/hi';


export default function DashProfile() {
  const fileRef = useRef(null);
  const { currentUser,error } = useSelector((state) => state.user);
  const [imageFile, setImageFile] = useState(null);
  const [imageFileUrl, setImageFileUrl] = useState(null);
  const [imagePer, setImagePer] = useState(0);
  const [imageUploadError, setImageUploadError] = useState(null);
  const [imageFileUploading,setImageFileUploading]=useState(false);
  const [updateUserSuccess,setUpdateUserSuccess]=useState(null);
  const [updateUserError,setUpdateUserError]=useState(null);
  const [showModel,setShowModel]=useState(false);

  const [formData, setFormData] = useState({});
  const dispatch = useDispatch();


  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImageFile(file);
      setImageFileUrl(URL.createObjectURL(file));
    }
  };

  useEffect(() => {
    if (imageFile) {
      uploadImage();
    }
  }, [imageFile]);

  const uploadImage = () => {
    setImageFileUploading(true);
    setImageUploadError(null);
    const storage = getStorage(app);
    const fileName = new Date().getTime() + imageFile.name;
    const storageRef = ref(storage, fileName);
    const uploadTask = uploadBytesResumable(storageRef, imageFile);

    uploadTask.on('state_changed', (snapshot) => {
      const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
      setImagePer(Math.round(progress));
    },
      (error) => {
        setImageUploadError('Upload failed: Image size must be less than 2MB.');
        setImagePer(0);
        setImageFile(null);
        setImageFileUrl(null);
        setImageFileUploading(false);
      },
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          setFormData({ ...formData, profilePicture: downloadURL });
          setImageFileUrl(downloadURL);
          setImagePer(0);
          setImageFile(null);
          setImageFileUploading(false);
        });
      }
    );
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setUpdateUserError(null);
    setUpdateUserSuccess(null);
    if (Object.keys(formData).length === 0) {
      setUpdateUserError('No changes were detected in your profile.');
      return;
    }
    if(imageFileUploading){
      setUpdateUserError('Please wait while the image is uploading.');
      return;
    }
    try {
      dispatch(updateStart());
      const res = await fetch(`/api/user/update/${currentUser._id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      if (!res.ok) {
        dispatch(updateFailure(data.message));
        setUpdateUserError(data.message);
      } else {
        dispatch(updateSuccess(data));
        setUpdateUserSuccess("Your profile has been successfully updated.");
      }
    } catch (error) {
      dispatch(updateFailure(error.message));
      setUpdateUserError(error.message);

    }
  };
  
  useEffect(() => {
    if (updateUserSuccess) {
      const timer = setTimeout(() => {
        setUpdateUserSuccess(null);
      }, 3000);
      
      return () => clearTimeout(timer); // Clean up the timer
    }
  }, [updateUserSuccess]);
  
  useEffect(() => {
    if (updateUserError) {
      const timer = setTimeout(() => {
        setUpdateUserError(null);
      }, 3000);
      
      return () => clearTimeout(timer); // Clean up the timer
    }
  }, [updateUserError]);
  
  useEffect(() => {
    if (imageUploadError) {
      const timer = setTimeout(() => {
        setImageUploadError(null);
      }, 3000);
      
      return () => clearTimeout(timer); // Clean up the timer
    }
  }, [imageUploadError]);


  console.log("currentUser:", currentUser);
  const handleDeleteUser=async ()=>{
    setShowModel(false);
    try {
      dispatch(deleteUserStart());
      const res = await fetch(`/api/user/delete/${currentUser._id}`,{
        method:'DELETE',
      });
      const data=await res.json();
      if(!res.ok){
        dispatch(deleteUserFailure(data.message));
      }
      else{
        dispatch(deleteUserSuccess(data));
      }
      
    } catch (error) {
      dispatch(deleteUserFailure(error.message));
    }
  };

  return (
    <div className="p-4 max-w-lg mx-auto w-full">
      <h1 className="text-3xl font-semibold text-center my-7">Profile</h1>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <input onChange={handleImageChange} type="file" ref={fileRef} accept="image/*" hidden />
        <div className="relative w-32 h-32 self-center rounded-full overflow-hidden cursor-pointer">
          {imagePer > 0 && imagePer < 100 && (
            <CircularProgressbar
              value={imagePer}
              strokeWidth={3}
              styles={{
                root: {
                  width: '100%',
                  height: '100%',
                  position: 'absolute',
                  top: 0,
                  left: 0,
                },
              }}
            />
          )}
          <img
            onClick={() => fileRef.current.click()}
            src={imageFileUrl || currentUser.profilePicture}
            alt="profile"
            className={`rounded-full w-full h-full object-cover cursor-pointer self-center border-4 border-sky  -500 ${imagePer > 0 && imagePer < 100 ? 'opacity-60' : ''}`}
          />
        </div>
        {imageUploadError && <Alert color="failure">{imageUploadError}</Alert>}
        <TextInput type="text" placeholder="username" id="username" defaultValue={currentUser.username} onChange={handleChange} autoComplete="username" />
        <TextInput type="email" placeholder="email" id="email" defaultValue={currentUser.email} onChange={handleChange} autoComplete="email" />
        <TextInput type="password" placeholder="password" id="password" onChange={handleChange} autoComplete="current-password" />
        <Button type="submit" gradientDuoTone="purpleToBlue" outline>UPDATE</Button>
      </form>
      <div className="mt-5 flex justify-between">
        <span onClick={()=>setShowModel(true)} className="text-orange-500 cursor-pointer">Delete Account</span>
        <span className="text-orange-500 cursor-pointer">Sign Out</span>
      </div>
      {updateUserSuccess && (<Alert color='success' className="mt-5">{updateUserSuccess}</Alert>)}
      {updateUserError && (<Alert color='failure' className="mt-5">{updateUserError}</Alert>)}
      {error && (<Alert color='failure' className="mt-5">{error}</Alert>)}
      <Modal show={showModel} onClose={()=>setShowModel(false)} popup size='md'>
          <Modal.Header/>
          <Modal.Body>
              <div className="text-center">
                  <HiOutlineExclamationCircle className="h-14 w-14 text-gray-400 dark:text-gray-200 mb-4 mx-auto"/>
                  <h3 className="mb-5 text-lg text-gray-400 dark:text-gray-200 ">Are you sure you want to delete your account?</h3>
                  <div className="flex justify-center gap-8">
                  <Button color='failure' onClick={handleDeleteUser}>Yes I'am sure</Button>
                  <Button color='gray' onClick={handleDeleteUser}>No, Cancel</Button>
                  </div>
              </div>
          </Modal.Body>
      </Modal>
    </div>
  );
}
