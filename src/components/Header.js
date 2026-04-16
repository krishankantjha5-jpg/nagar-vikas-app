export default function Header() {
  return (
    <div className="d-flex justify-content-between p-3 bg-light">
      
      {/* Logo + Name */}
      <div className="d-flex align-items-center">
        <img src="/logo.png" alt="logo" width="50" />
        <h5 className="ms-2 mb-0">Nagar Vikas Samiti</h5>
      </div>

      {/* Indian Flag */}
      <img 
        src="https://upload.wikimedia.org/wikipedia/en/4/41/Flag_of_India.svg" 
        alt="flag" 
        width="50" 
      />
      
    </div>
  );
}