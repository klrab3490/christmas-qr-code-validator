import { Button } from './ui/button';
import { useNavigate } from 'react-router-dom';
import { ModeToggle } from './theme/mode-toggle';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";

export default function Navbar() {
    const navigate = useNavigate();

    return (
        <div className='h-16 flex justify-between items-center'>
            <h1 className='text-2xl font-bold'>Food Coupon Validator</h1>
            <div className='flex justify-center items-center gap-2'>
                <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                        <Button>Menu</Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent className='w-20'>
                        <DropdownMenuItem onClick={() => navigate('/')}>Home</DropdownMenuItem>
                        <DropdownMenuItem onClick={() => navigate('/about')}>About</DropdownMenuItem>
                        <DropdownMenuItem onClick={() => navigate('/login')}>Login</DropdownMenuItem>
                        <DropdownMenuItem>
                        </DropdownMenuItem>
                    </DropdownMenuContent>
                </DropdownMenu>
                <ModeToggle />
            </div>
        </div>
    )
}