import React from "react";
import { Avatar } from "@mui/material";

interface AvatarProps {
    image?: string;
    name: string;
}

const Profile = ({ image, name }: AvatarProps) => {
    const initials = name.split(" ").reduce((previous, current) => {
        if (!previous) return current[0];
        return previous[0] + current[0];
    }, "");

    return (
        <Avatar
            src={image}
            alt={name}
            sx={{ width: 24, height: 24, fontSize: 12 }}
        >
            {initials}
        </Avatar>
    );
};

export default Profile;
