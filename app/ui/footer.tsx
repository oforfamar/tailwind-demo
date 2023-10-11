const Footer = () => {
  return (
    <footer className="bg-gray-200 py-4">
      <div className="container mx-auto">
        <p className="text-center text-gray-600">
          &copy; {new Date().getFullYear()} Your Company Name
        </p>
      </div>
    </footer>
  );
};

export default Footer;
