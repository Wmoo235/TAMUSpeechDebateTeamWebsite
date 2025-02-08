import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 text-center">
      <h1 className="text-6xl font-bold text-tamuMaroon">404</h1>
      <h2 className="text-2xl font-semibold text-gray-800 mt-4">Page Not Found</h2>
      <p className="text-gray-600 mt-2">Oops! The page you are looking for doesn't exist.</p>
      
      <div className="mt-4"></div> {/* Added space between p and span */}

      <Link href="/">
        <span className="mt-6 px-4 py-2 bg-tamuMaroon text-white rounded-lg shadow-md hover:bg-red-700 transition duration-300 cursor-pointer">
          Return Home
        </span>
      </Link>
    </div>
  );
}
