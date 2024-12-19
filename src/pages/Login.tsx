/* eslint-disable @typescript-eslint/no-explicit-any */

import { useState } from 'react';
// import { FcGoogle } from "react-icons/fc";
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { auth } from '@/config/firebaseConfig';
import { Button } from '@/components/ui/button';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
// import { signInWithEmailAndPassword, signInWithPopup, GoogleAuthProvider } from 'firebase/auth';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { useNavigate } from 'react-router-dom';

function Login() {
  const [activeTab, setActiveTab] = useState('email');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');
  const navigate = useNavigate();

  const handleEmailLogin = async (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, password);
      setMessage('Signed in successfully!');
      navigate('/');
    } catch (error) {
      setMessage((error as any).message);
    }
  };

  // const handleGoogleLogin = async (e: { preventDefault: () => void; }) => {
  //   e.preventDefault();
  //   const provider = new GoogleAuthProvider();
  //   try {
  //     await signInWithPopup(auth, provider);
  //     setMessage('Signed in with Google!');
  //     navigate('/');
  //   } catch (error) {
  //     setMessage((error as any).message);
  //   }
  // };

  return (
    <div className="flex items-center justify-center h-[75dvh]">
      <Card className="w-[350px]">
        <CardHeader>
          <CardTitle>Login</CardTitle>
          <CardDescription>Choose your preferred login method</CardDescription>
        </CardHeader>
        <CardContent>
          <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="email">Email</TabsTrigger>
              <TabsTrigger value="phone">Phone</TabsTrigger>
            </TabsList>
            <TabsContent value="email">
              <form onSubmit={handleEmailLogin} className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" name="email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="password">Password</Label>
                  <Input id="password" name="password" type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
                </div>
                <Button type="submit" className="w-full">Sign In</Button>
              </form>
            </TabsContent>
            <TabsContent value="phone">
              <form className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="phone">Phone Number</Label>
                  <Input id="phone" name="phone" type="tel" value={phone} onChange={(e) => setPhone(e.target.value)} required />
                </div>
                <Button type="submit" className="w-full">Send Code</Button>
              </form>
            </TabsContent>
          </Tabs>
        </CardContent>
        <CardFooter className="flex flex-col space-y-4">
          {/* <div className="relative w-full">
            <div className="absolute inset-0 flex items-center">
              <span className="w-full border-t" />
            </div>
            <div className="relative flex justify-center text-xs uppercase">
              <span className="bg-background px-2 text-muted-foreground">Or continue with</span>
            </div>
          </div>
          <form onSubmit={handleGoogleLogin} className="w-full">
            <Button type="submit" variant="outline" className="w-full">
              <FcGoogle size={10} />
              Sign In With Google
            </Button>
          </form> */}
        </CardFooter>
        {message && (
          <p className="text-center text-sm text-green-600 mt-4">
            {message}
          </p>
        )}
      </Card>
    </div>
  );
}

export default Login;