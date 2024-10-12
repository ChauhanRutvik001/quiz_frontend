import React from "react";
import { FaUser, FaGithub, FaLinkedin } from "react-icons/fa";

const UserProfile = ({ user, githubURL, linkedInURL, formData, toggleEditMode, editMode }) => {
  return (
    <div
      className="flex flex-col items-center space-y-4 sticky top-20 ml-10"
      style={{ width: "20%" }}
    >
      <div className="border border-gray-100 p-8 rounded-full">
        <FaUser size={100} />
      </div>
      
      <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-100">
        {user.fullName}
      </h2>
      <p className="text-gray-500">{user.email}</p>

      <div className="flex items-center">
        <a
          href={githubURL}
          target="_blank"
          rel="noopener noreferrer"
          className={`${
            formData.github ? "text-white" : "text-gray-500"
          } hover:text-white transition-all mr-5`}
        >
          <FaGithub size={30} />
        </a>
        <a
          href={linkedInURL}
          target="_blank"
          rel="noopener noreferrer"
          className={`${
            formData.linkedIn ? "text-white" : "text-gray-500"
          } hover:text-white transition-all`}
        >
          <FaLinkedin size={30} />
        </a>
      </div>

      <button
        onClick={toggleEditMode} // Toggle edit mode
        className={`mt-4 ${editMode ? "bg-red-500" : "bg-blue-500"} text-white py-2 px-4 rounded-md`}
      >
        {editMode ? "Cancel Edit" : "Edit Profile"}
      </button>
    </div>
  );
};

export default UserProfile;
