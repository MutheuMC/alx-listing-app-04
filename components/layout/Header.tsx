import Link from "next/link";

const Header: React.FC = () => {
  return (
    <header className="bg-blue-500 text-white shadow-md py-4">
      <div className="container mx-auto flex justify-between items-center px-6">
        <h1 className="text-2xl font-bold">
          <Link href="/">ALX Listing App</Link>
        </h1>
        <nav className="flex space-x-4">
          <Link href="#" className="hover:underline">
            Rooms
          </Link>
          <Link href="#" className="hover:underline">
            Mansions
          </Link>
          <Link href="#" className="hover:underline">
            Countryside
          </Link>
          <Link href="#" className="hover:underline">
            Sign In
          </Link>
          <Link href="#" className="hover:underline">
            Sign Up
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
