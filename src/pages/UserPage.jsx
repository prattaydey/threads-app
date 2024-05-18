import UserHeader from "../components/UserHeader";
import UserPost from "../components/UserPost";

const UserPage = () => {
    return <>
        <UserHeader />
        <UserPost postTitle={"T guy."} postImg="/post3.png" likes={1200} replies={284}/>
        <UserPost postTitle={"This is my first Thread."} postImg="/post1.png" likes={200} replies={37}/>
    </>;
};

export default UserPage;