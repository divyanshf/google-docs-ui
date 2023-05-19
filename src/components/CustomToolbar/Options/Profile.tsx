import React from "react";

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
        <img
            src={image}
            alt={name}
            style={{ width: 24, height: 24, fontSize: 12 }}
        />
    );
};

export default Profile;
