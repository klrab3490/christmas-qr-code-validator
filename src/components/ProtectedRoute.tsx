import { useAuth } from '@/hooks/useAuth';
import { Navigate } from 'react-router-dom';
import { ClipLoader } from 'react-spinners';
import { FC, ReactNode, useState, useEffect } from 'react';

interface ProtectedRouteProps {
    children: ReactNode;
}

const ProtectedRoute: FC<ProtectedRouteProps> = ({ children }) => {
    const { user } = useAuth();
    const [isLoading, setIsLoading] = useState(true);
    const [isTimeout, setIsTimeout] = useState(false);

    useEffect(() => {
        if (user === undefined) {
            setIsLoading(true);
            setIsTimeout(false);
        } else if (user === null) {
            const timeout = setTimeout(() => {
                setIsTimeout(true);
                setIsLoading(false);
            }, 5000); 

            return () => clearTimeout(timeout);
        } else {
            setIsLoading(false);
            setIsTimeout(true);
        }
    }, [user]);

    if (isLoading) {
        return (
            <div className='flex justify-center items-center h-[70dvh] w-full'> 
                <div className="spinner-container flex justify-center items-center gap-5">
                    <ClipLoader size={50} color={"#3498db"} loading={isLoading} />
                    Loading...
                </div>
            </div>
        );
    }

    if (!user && isTimeout) {
        return <Navigate to="/login" />;
    }

    return <>{children}</>;
};

export default ProtectedRoute;
