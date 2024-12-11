import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { ref, onValue } from 'firebase/database';
import { realtimeDB } from '@/config/firebaseConfig';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

// Define a type for the response data
interface Detail {
  [key: string]: any; // The type can be more specific depending on your structure
}

function Details() {
  const { id } = useParams();
  const [details, setDetails] = useState<Detail | null>(null); // Specify the type of details

  useEffect(() => {
    const fetchDetails = async () => {
      try {
        const dataRef = ref(realtimeDB, `Form responses 2/${id}`);
        onValue(dataRef, (snapshot) => {
          const data = snapshot.val();
          setDetails(data); // This should now match the `Detail` type
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
    <div className="flex items-center justify-center h-[100dvh] -mt-28 p-4">
      <Card className="w-full max-w-lg">
        <CardHeader>
          <CardTitle className="text-2xl font-bold text-center">Details for ID: {id}</CardTitle>
        </CardHeader>
        <CardContent>
          {details && Object.entries(details).map(([key, value]) => (
            <div key={key} className="mb-4 last:mb-0">
              <dt className="font-semibold text-gray-700 dark:text-gray-300">{key}</dt>
              <dd className="mt-1 text-gray-900 dark:text-gray-100">{String(value)}</dd>
            </div>
          ))}
        </CardContent>
      </Card>
    </div>
  );
}

export default Details;
