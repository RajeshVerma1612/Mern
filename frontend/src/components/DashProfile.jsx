import { useSelector } from "react-redux"
import { useRef, useState } from "react"
import { useEffect } from "react"
import { getStorage, uploadBytesResumable, ref, getDownloadURL } from "firebase/storage"
import { app } from "../firebase"

export default function DashProfile() {
  const fileRef = useRef(null)
  const { currentUser } = useSelector((state) => state.user)
  const [file, setFile] = useState(undefined);
  const [filePer, setFilePer] = useState(0);
  const [fileUploadError, setFileUploadError] = useState(false);
  const [formData, setFormData] = useState({});

  // console.log(file);
  // console.log(filePer);
  // console.log(fileUploadError);
  // console.log(formData);

  useEffect(() => {
    if (file) {
      handleFileUpload();
    }
  }, [file]);

  const handleFileUpload = () => {
    const storage = getStorage(app);
    const fileName = new Date().getTime() + file.name;
    const storageRef = ref(storage, fileName);
    const uploadTask = uploadBytesResumable(storageRef, file);

    uploadTask.on('state_changed', (snapshot) => {
      const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
      // console.log("upload is "+ progress + "% done");
      setFilePer(Math.round(progress));
    },
      (error) => {
        setFileUploadError(true);
      },
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          setFormData({ ...formData, profilePicture: downloadURL });
        });
      }
    );
  }

  return (
    <div className='p-4 max-w-lg mx-auto'>
      <h1 className='text-3xl font-semibold text-center my-7'>Profile</h1>
      <form className="flex flex-col gap-4 ">
        <input onChange={(e) => setFile(e.target.files[0])} type="file" ref={fileRef} accept="image/*" hidden />
        <img onClick={() => fileRef.current.click()} src={formData.profilePicture || currentUser.profilePicture} alt="profile" className="rounded-full h-24 w-24 object-cover cursor-pointer self-center my-3 border-2 border-blue-200" />
        <p className="text-sm self-center">
          {fileUploadError ? (
            <span className="text-orange-600">Error image upload (size must be less than 2MB)</span>
          ) : filePer > 0 && filePer < 100 ? (
            <span className="text-yellow-400">{`Uploading ${filePer}%`}</span>
          ) : filePer === 100 ? (
            <span className="text-green-400">Image successfully uploaded!</span>
          ) : (
            ""
          )}
        </p>

        <input type="text" placeholder="username" id="username" className="bordet p-3 rounded-lg" />
        <input type="text" placeholder="email" id="email" className="bordet p-3 rounded-lg" />
        <input type="text" placeholder="password" id="password" className="bordet p-3 rounded-lg" />
        {/* <input type="text" placeholder="phone number" id="phonenumber" className="bordet p-3 rounded-lg"/> */}
        {/* <input type="text" placeholder="year" id="year" className="bordet p-3 rounded-lg"/> */}
        <button className="bg-slate-700 text-white rounded-lg p-3 hover:opacity-95 disabled:opacity-80">UPDATE</button>
      </form>
      <div className="mt-5 flex justify-between">
        <span className="text-orange-500 cursor-pointer">Delete Account</span>
        <span className="text-orange-500 cursor-pointer">Sign Out</span>
      </div>
    </div>
  )
}
