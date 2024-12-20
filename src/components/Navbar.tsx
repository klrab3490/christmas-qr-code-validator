import { Button } from './ui/button';
import icon from '@/assets/favicon.ico';
import { useAuth } from '@/hooks/useAuth';
import { useNavigate } from 'react-router-dom';
import { ModeToggle } from './theme/mode-toggle';
import { getAuth, signOut } from 'firebase/auth';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";

export default function Navbar() {
    const navigate = useNavigate();

    const handleSignOut = async () => {
        const auth = getAuth();
        try {
            await signOut(auth);
            console.log("User signed out successfully");
            // Redirect to login or home page if necessary
        } catch (error) {
            console.error("Error signing out: ", error);
        }
      };

    return (
        <div className='py-6 flex justify-between items-center'>
            <h1 className='text-2xl font-bold flex gap-2 flex-wrap'>
                <img src={icon} alt='logo' className='h-8 w-8' />
                <span className='sm:flex hidden'>Food Coupon Validator</span>
            </h1>
            <div className='flex justify-center items-center gap-2'>
                <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                        <Button>Menu</Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent className='w-20 flex flex-col items-center justify-center'>
                        <DropdownMenuItem onClick={() => navigate('/')}>Home</DropdownMenuItem>
                        <DropdownMenuItem onClick={() => navigate('/about')}>About</DropdownMenuItem>
                        <DropdownMenuItem onClick={() => navigate('/admin')}>
                            {useAuth().user ? 'Admin' : 'Login'}
                        </DropdownMenuItem>
                        {useAuth().user && (
                            <Button onClick={handleSignOut}>
                                SignOut
                            </Button>
                        )}
                        <DropdownMenuItem>
                            <ModeToggle />
                        </DropdownMenuItem>
                    </DropdownMenuContent>
                </DropdownMenu>
            </div>
        </div>
    )
}