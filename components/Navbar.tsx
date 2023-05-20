import { useSession, signOut, signIn } from "next-auth/react";

const Navbar = () => {
  const { data: session } = useSession();

  const handleSignOut = () => {
    signOut();
  };

  const handleSignIn = () => {
    signIn("google");
  };

  return (
    <div className="flex items-center justify-between w-[90%] pt-5">
      <div className="px-20">StudentLife</div>
      {!session ? (
        <div>
          <button
            className="bg-white text-black pl-5 pr-5 py-0.5 rounded-sm"
            type="button"
            onClick={handleSignIn}
          >
            Sign In
          </button>
        </div>
      ) : (
        <div onClick={handleSignOut}>Logout</div>
      )}
    </div>
  );
};

export default Navbar;
