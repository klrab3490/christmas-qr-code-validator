interface NotFoundProps {
  onNotFound?: () => void;
}

function NotFound({ onNotFound }: NotFoundProps) {

  const handleGoHome = () => {
    if (onNotFound) {
      onNotFound(); // Trigger the callback on click
    }
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1 className='text-2xl font-bold'>404 - Page Not Found</h1>
      <p className='py-2'>The page you're looking for doesn't exist.</p>
      <button
        onClick={handleGoHome}
        style={{
          padding: '10px 20px',
          backgroundColor: '#007bff',
          color: '#fff',
          border: 'none',
          borderRadius: '5px',
          cursor: 'pointer',
        }}
      >
        Go Back to Home
      </button>
    </div>
  );
}

export default NotFound;
