import { useNavigate } from "react-router-dom";
import Html5QrcodePlugin from "@/components/Html5QrcodePlugin";

function Home() {
  const navigate = useNavigate();
  const onNewScanResult = (decodedText: string) => {
    alert(`Scan result: ${decodedText}`);
    navigate(`/details/${decodedText}`);
  };
  
  return (
    <div className="flex flex-col justify-center items-center h-[75dvh]">
      <header>
        <h1>QR Code Scanner</h1>
      </header>
      <section className='w-full'>
        <Html5QrcodePlugin fps={10} qrbox={250} disableFlip={false} qrCodeSuccessCallback={onNewScanResult} />
      </section>
    </div>
  )

}

export default Home
