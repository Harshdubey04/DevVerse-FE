import { useEffect} from "react";
import { getFeed } from "../../api/userApi";
import UserCard from "../../components/feed/UserCard";
import { useDispatch,useSelector } from "react-redux";
import { setUsers } from "../../slices/userSlice";


function FeedPage() {
  const dispatch=useDispatch();
  const users = useSelector((store) => store.user.users);

  useEffect(() => {
    const fetchFeed = async () => {
      try {
        const response = await getFeed();
        // console.log("Feed page ka response ka data",response?.data);

        dispatch(setUsers(response?.data));
      } catch (error) {
        console.error("FEED ERROR:", error);
      }
    };

    fetchFeed();
  }, []);

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <div className="flex flex-col items-center gap-6">
        {users?.map((user) => (
          <UserCard key={user?._id} user={user} />
        ))}
      </div>
    </div>
  );
}

export default FeedPage;