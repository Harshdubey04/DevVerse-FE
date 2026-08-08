import { useSelector } from "react-redux";
import useConnectionRequests from "../../hooks/useConnectionRequests";
import ConnectionRequestCard from "../../components/connection/ConnectionRequestCard";

function ConnectionRequestPage() {
  useConnectionRequests();

  const {
    requests,
    isLoading,
    error,
  } = useSelector((store) => store.connectionRequest);

  if (isLoading) {
    return (
      <div className="flex justify-center py-20">
        <span className="loading loading-spinner loading-lg"></span>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex justify-center py-20">
        <p className="text-error">{error}</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen px-4 py-8">
      <div className="max-w-4xl mx-auto">

        <h1 className="text-3xl font-bold mb-8">
          Connection Requests
        </h1>

        {requests.length === 0 ? (
          <p className="text-center opacity-60 py-20">
            No connection requests.
          </p>
        ) : (
          <div className="bg-base-100 rounded-box shadow-sm overflow-hidden">
            {requests.map((user) => (
              <ConnectionRequestCard
                key={user._id}
                user={user}
              />
            ))}
          </div>
        )}

      </div>
    </div>
  );
}

export default ConnectionRequestPage;