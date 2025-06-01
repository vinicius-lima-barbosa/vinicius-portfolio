const NotFound = () => {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4">404 - Not Found</h1>
        <p className="text-xl text-slate-200 mb-4">
          The page you are looking for does not exist.
        </p>
        <a href="/" className="text-blue-400 hover:text-blue-600">
          Return the home page!
        </a>
      </div>
    </div>
  );
};

export default NotFound;
