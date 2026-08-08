import { useSelector } from "react-redux";
import useConnections from "../../hooks/useConnections";
import ConnectionCard from "../../components/connection/ConnectionCard";

function ConnectionPage() {
  useConnections();

  const {connections,isLoading,error,} = useSelector((store) => store.connection);

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <span className="loading loading-spinner loading-lg"></span>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-error">{error}</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen px-4 py-8">
      <div className="max-w-6xl mx-auto">

        <h1 className="text-3xl font-bold mb-8">
          My Connections
        </h1>

        {connections.length > 0 ? (
          <div className="bg-base-100 rounded-box shadow-sm overflow-hidden">
            {connections.map((user) => (
              <ConnectionCard
                key={user._id}
                user={user}
              />
            ))}
          </div>
        ) : (
          <div className="text-center py-20">
            <p className="text-lg opacity-60">
              You don't have any connections yet.
            </p>
          </div>
        )}

      </div>
    </div>
  );
}

export default ConnectionPage;