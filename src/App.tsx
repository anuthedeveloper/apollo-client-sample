import "./App.css";
import { useQuery, gql } from "@apollo/client";
import { useEffect } from "react";

const GET_MESSAGE = gql`
  {
    message
  }
`;

function App() {
  const { loading, error, data } = useQuery(GET_MESSAGE);

  useEffect(() => {
    console.log(data);
  }, [data]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div className="App">
      <p>{data && data.message}</p>
    </div>
  );
}

export default App;
