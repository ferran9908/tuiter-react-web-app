import React from "react";
import { useNavigate } from "react-router";

const EditProfile = ({ profile }) => {
  const navigate = useNavigate();
  return (
    <div>
      <div className="d-flex">
        <i onClick={() => navigate(-1)} className="bi bi-x-lg wd-pointer"></i>
        <div className="wd-name-display">
          <div>
            {profile.firstName} {profile.lastName}
          </div>
          <label className="wd-tweets-count">400 Tuits</label>
        </div>
      </div>
    </div>
  );
};

export default EditProfile;
