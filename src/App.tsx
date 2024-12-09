import './App.css'
import React from 'react';
import Html5QrcodePlugin from '@/components/Html5QrcodePlugin';
import Navbar from './components/Navbar';

function App() {
  
  const onNewScanResult = (decodedText, decodedResult) => {
    console.log("App [result]", decodedResult);
    alert(`Scan result: ${decodedText}`);
  };
  
  return (
    <div className="App">
      <Navbar />
      <header>
        <h1>QR Code Scanner</h1>
      </header>
      <section>
        <Html5QrcodePlugin
          fps={10}
          qrbox={250}
          disableFlip={false}
          qrCodeSuccessCallback={onNewScanResult}
        />
      </section>
    </div>
  )

}

export default App
