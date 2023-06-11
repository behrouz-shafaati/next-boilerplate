// hooks
import useAuth from "@/src/hooks/useAuth";
// utils
import createAvatar from "@/src/utils/createAvatar";
//
import Avatar from "./Avatar";

// ----------------------------------------------------------------------

export default function MyAvatar({ ...other }) {
  const { user } = useAuth();

  return (
    <Avatar
      src={user?.photoURL}
      alt={user?.displayName}
      color={user?.photoURL ? "default" : createAvatar(user?.displayName).color}
      {...other}
    >
      {createAvatar(user?.name).name}
    </Avatar>
  );
}
