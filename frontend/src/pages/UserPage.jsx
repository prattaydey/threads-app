import { useState } from "react";
import UserHeader from "../components/UserHeader";
import UserPost from "../components/UserPost";
import { useParams } from "react-router-dom";
import useShowToast from "../hooks/useShowToast";
import { useEffect } from "react";

const UserPage = () => {
    const [user, setUser] = useState(null);
	const { username } = useParams();
	const showToast = useShowToast();

	useEffect(() => {
		const getUser = async () => {
			try {
				const res = await fetch(`/api/users/profile/${username}`);
				const data = await res.json();
				if (data.error) {
					showToast("Error", data.error, "error");
					return;
				}
				setUser(data);
			} catch (error) {
				showToast("Error", error, "error");
			}
		};
        getUser();
    }, 
    [username, showToast]);

    if (!user) return null;

    return <>
        <UserHeader user={user}/>
        <UserPost postTitle={"I've always wanted a Shiba Inu. Especially these grey ones!"} postImg="/post3.png" likes={1200} replies={284}/>
        <UserPost postTitle={"This is my first Thread."} postImg="/post1.png" likes={200} replies={37}/>
    </>;
};

export default UserPage;