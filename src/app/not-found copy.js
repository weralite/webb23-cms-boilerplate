export default function NotFound() {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen text-center p-4">
        <h1 className="text-5xl font-bold mb-4">404 - Page Not Found</h1>
        <p className="text-lg mb-8">
          We&#39;re sorry, but the page you&#39;re looking for doesn&#39;t exist. It may have been moved, deleted, or the URL might be incorrect.
        </p>
        <p className="text-lg">
          Please return to the <a href="/" className="text-blue-500 underline hover:text-blue-700">homepage</a>, or use the navigation to find the information you need.
        </p>
      </div>
    );
  }
  