import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { ref, onValue } from 'firebase/database';
import { realtimeDB } from '@/config/firebaseConfig';

function Details() {
  const { id } = useParams();
  const [details, setDetails] = useState<unknown>(null);

  useEffect(() => {
    const fetchDetails = async () => {
      try {
        const dataRef = ref(realtimeDB, `Form responses 2/${id}`);
        onValue(dataRef, (snapshot) => {
          const data = snapshot.val();
          setDetails(data);
        });
      } catch (error) {
        console.error(error);
      }
    };

    if (id) {
      fetchDetails();
    }
  }, [id]); // Dependency array ensures it runs only when 'id' changes

  return (
    <div>
      <h1>Detail Page</h1>
      <p>Dynamic ID: {id}</p>
      <div>
        <h2>Details:</h2>
        {details ? (
          <pre>{JSON.stringify(details, null, 2)}</pre>
        ) : (
          <p>Loading...</p>
        )}
      </div>
    </div>
  );
}

export default Details;
