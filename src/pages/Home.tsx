import { useNavigate } from "react-router-dom";
import Html5QrcodePlugin from "@/components/Html5QrcodePlugin";

function Home() {
  const navigate = useNavigate();
  const onNewScanResult = (decodedText: string) => {
    alert(`Scan result: ${decodedText}`);
    navigate(`/details/${decodedText}`);
  };
  
  return (
    <div className="">
      <h1 className="py-5 underline text-4xl font-bold text-center">QR Code Scanner</h1>
      <div className='flex flex-col justify-center items-center h-[75dvh]'>
        <div className="w-full">
          <Html5QrcodePlugin fps={10} qrbox={250} disableFlip={false} qrCodeSuccessCallback={onNewScanResult} />
        </div>      
      </div>
    </div>
  )

}

export default Home
