function About() {
  return (
    <div className="flex flex-col justify-center h-[75dvh]">
      <h1 className="py-5 underline text-4xl font-bold text-center">About Our QR Code Feature</h1>

      <p className="mb-4 text-lg">
        We leverage the <strong>Html5-QRCode</strong> library to provide a seamless QR code scanning experience directly in your browser. This modern, lightweight, and efficient tool is built using HTML5 and JavaScript, making it highly compatible across all major devices and platforms.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-4">Key Features:</h2>
      <ul className="list-disc list-inside text-lg pl-4">
        <li><strong>Webcam Integration:</strong> Instantly scan QR codes using your device's built-in camera without installing additional software.</li>
        <li><strong>Real-Time Scanning:</strong> The library processes QR codes quickly, ensuring accurate and fast results.</li>
        <li><strong>Cross-Platform Compatibility:</strong> Works on desktops, tablets, and mobile devices for ultimate convenience.</li>
        <li><strong>Privacy First:</strong> All scanning is handled locally within your browser, ensuring your data stays secure.</li>
      </ul>

      <h2 className="text-2xl font-semibold mt-6 mb-4">Why We Chose Html5-QRCode</h2>
      <p className="mb-4 text-lg">
        The <strong>Html5-QRCode</strong> library aligns with our mission to create user-friendly and secure web applications. Its open-source nature allows us to innovate while keeping our solutions lightweight and reliable.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-4">How It Works:</h2>
      <ol className="list-decimal list-inside text-lg pl-4">
        <li><strong className="pl-1">Access the Feature:</strong> Navigate to our QR code scanner in the tools section.</li>
        <li><strong className="pl-1">Enable Your Camera:</strong> Grant permission for camera access (required for scanning).</li>
        <li><strong className="pl-1">Scan and Go:</strong> Hold the QR code in front of your camera, and let the technology do the rest!</li>
      </ol>

      <p className="mt-6 text-lg">
        Whether you’re verifying tickets, sharing links, or accessing exclusive content, our QR code scanner powered by Html5-QRCode ensures a smooth and hassle-free experience.
      </p>
    </div>
  );
}

export default About;