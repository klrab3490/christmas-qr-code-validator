import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { ref, onValue, update } from 'firebase/database';
import { realtimeDB } from '@/config/firebaseConfig';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import { Button } from "@/components/ui/button"; // Assuming you have a button component

interface Detail {
  [key: string]: unknown;
}

function Details() {
  const { id } = useParams();
  const [details, setDetails] = useState<Detail | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchDetails = async () => {
      try {
        const dataRef = ref(realtimeDB, `form_responses_1/${id}`);
        onValue(dataRef, (snapshot) => {
          const data = snapshot.val();
          setDetails(data);
          setLoading(false);
        });
      } catch (error) {
        console.error(error);
        setLoading(false);
      }
    };

    if (id) {
      fetchDetails();
    }
  }, [id]);

  const handleToggleFood = async () => {
    if (!id || !details) return;
    try {
      const dataRef = ref(realtimeDB, `form_responses_1/${id}`);
      await update(dataRef, { food: true });
      alert("Food status updated to served.");
      setDetails((prev) => (prev ? { ...prev, food: true } : prev));
    } catch (error) {
      console.error("Error updating food status:", error);
    }
  };

  return (
    <div>
      <h1 className="py-5 underline text-4xl font-bold text-center">QR Code Data</h1>
      <div className="flex flex-col items-center justify-center h-auto">
        <Card className="w-full max-w-lg">
          <CardHeader>
            <CardTitle className="text-2xl font-bold text-center">Details for ID: {id}</CardTitle>
          </CardHeader>
          <CardContent>
            {loading ? (
              <>
                <div className="mb-4 last:mb-0">
                  <dt className="font-semibold text-gray-700 dark:text-gray-300">Email address</dt>
                  <Skeleton className="mt-1 w-3/4 h-6" />
                </div>
                {/* Add other skeletons here */}
              </>
            ) : details ? (
              details.food ? (
                <p className="text-center text-gray-500">Food already served for this ID.</p>
              ) : (
                <>
                  {Object.entries(details).map(([key, value]) => (
                    <div key={key} className="mb-4 last:mb-0">
                      <dt className="font-semibold text-gray-700 dark:text-gray-300">{key}</dt>
                      <dd className="mt-1 text-gray-900 dark:text-gray-100">{String(value)}</dd>
                    </div>
                  ))}
                  <Button
                    onClick={handleToggleFood}
                    className="mt-4 w-full bg-blue-600 text-white"
                  >
                    Mark Food as Served
                  </Button>
                </>
              )
            ) : (
              <p className="text-center text-gray-500">No details found for this ID.</p>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

export default Details;
