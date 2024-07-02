import { useSelector } from "react-redux";
import { useRef, useState, useEffect } from "react";
import { getStorage, uploadBytesResumable, ref, getDownloadURL } from "firebase/storage";
import { app } from "../firebase";
import { Alert, Button, TextInput } from "flowbite-react";
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

export default function DashProfile() {
  const fileRef = useRef(null);
  const { currentUser } = useSelector((state) => state.user);
  const [imageFile, setImageFile] = useState(null);
  const [imageFileUrl, setImageFileUrl] = useState(null);
  const [imagePer, setImagePer] = useState(0);
  const [imageUploadError, setImageUploadError] = useState(null);
  const [formData, setFormData] = useState({});

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
        setImagePer(null);
        setImageFile(null);
        setImageFileUrl(null);
      },
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          setFormData({ ...formData, profilePicture: downloadURL });
          setImageFileUrl(downloadURL);
        });
      }
    );
  };

  return (
    <div className='p-4 max-w-lg mx-auto w-full'>
      <h1 className='text-3xl font-semibold text-center my-7'>Profile</h1>
      <form className="flex flex-col gap-4 ">
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
            className={`rounded-full w-full h-full object-cover cursor-pointer self-center border-4 border-blue-200 ${imagePer > 0 && imagePer < 100 ? 'opacity-60' : ''}`} 
          />
        </div>
        {imageUploadError && <Alert color='failure'>{imageUploadError}</Alert>}
        <TextInput type="text" placeholder="username" id="username" defaultValue={currentUser.username} />
        <TextInput type="text" placeholder="email" id="email" defaultValue={currentUser.email} />
        <TextInput type="password" placeholder="password" id="password" />
        <Button type="submit" gradientDuoTone='purpleToBlue' outline>UPDATE</Button>
      </form>
      <div className="mt-5 flex justify-between">
        <span className="text-orange-500 cursor-pointer">Delete Account</span>
        <span className="text-orange-500 cursor-pointer">Sign Out</span>
      </div>
    </div>
  );
}
