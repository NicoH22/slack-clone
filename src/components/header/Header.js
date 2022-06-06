import React from "react";
import "./Header.css";
import Avatar from "@mui/material/Avatar";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import SearchIcon from "@mui/icons-material/Search";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";

function Header() {
  return (
    <div className="header">
      <div className="header_left">
        <Avatar
          className="header_avatar"
          alt="Nisamzg"
          //   src={user?.avatarURL}
        />
        <AccessTimeIcon />
      </div>
      <div className="header_search">
        {/* Search icons */}
        <SearchIcon />
        {/* Input */}
        <input placeholder="Search" />
      </div>
      <div className="header_right">
        <HelpOutlineIcon />
      </div>
    </div>
  );
}

export default Header;
