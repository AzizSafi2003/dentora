import {
  SignedIn,
  SignedOut,
  SignInButton,
  SignOutButton,
} from "@clerk/nextjs";

export default function Home() {
  return (
    <div>
      <h1>Home Page</h1>
      <SignedOut>
        <SignInButton mode="modal">Sign Up</SignInButton>
      </SignedOut>

      <SignedIn>
        <SignOutButton>Log Out</SignOutButton>
      </SignedIn>
    </div>
  );
}
