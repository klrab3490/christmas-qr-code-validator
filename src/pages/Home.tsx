import { useEffect, useState } from "react";
import { ref, get } from "firebase/database";
import { useNavigate } from "react-router-dom";
import { realtimeDB } from "@/config/firebaseConfig";
import Html5QrcodePlugin from "@/components/Html5QrcodePlugin";

function Home() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const [responsesCount, setResponsesCount] = useState(0);

  const onNewScanResult = (decodedText: string) => {
    alert(`Scan result: ${decodedText}`);
    navigate(`/details/${decodedText}`);
  };

  useEffect(() => {
    const fetchResponses = async () => {
      try {
        const dataRef = ref(realtimeDB, "form_responses_1");
        const snapshot = await get(dataRef);
        const data = snapshot.val();

        if (data) {
          // Exclude entries where food is true
          const filteredCount = Object.values(data).filter(
            (response) => (response as { food: boolean }).food !== true
          ).length;

          setResponsesCount(filteredCount);
        } else {
          setResponsesCount(0);
        }
      } catch (error) {
        console.error("Error fetching responses:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchResponses();
  }, []);

  return (
    <div>
      <h1 className="py-5 underline text-4xl font-bold text-center">QR Code Scanner</h1>
      <div className="flex flex-col justify-center items-center h-[75dvh]">
        {loading ? (
          <p>Loading...</p>
        ) : (
          <>
            <div className="w-full">
              <Html5QrcodePlugin
                fps={10}
                qrbox={250}
                disableFlip={false}
                qrCodeSuccessCallback={onNewScanResult}
              />
            </div>
            <p className="mt-4 text-lg">
              Total Responses: {responsesCount}
            </p>
          </>
        )}
      </div>
    </div>
  );
}

export default Home;
