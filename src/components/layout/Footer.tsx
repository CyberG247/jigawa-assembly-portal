
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-assembly-deep-green text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8">
          <div className="col-span-1">
            <Link to="/" className="flex items-center space-x-3 mb-6">
              <img 
                src="/public/lovable-uploads/50807795-a69e-4f31-8b03-73021ad509c9.png" 
                alt="Jigawa State House of Assembly Logo" 
                className="h-16 bg-white p-1 rounded-full" 
              />
            </Link>
            <p className="text-sm opacity-80">
              The legislative arm of Jigawa State Government, entrusted with making laws for peace, order, and good governance.
            </p>
          </div>
          
          <div>
            <h3 className="font-serif text-lg font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/" className="hover:underline">Home</Link></li>
              <li><Link to="/about" className="hover:underline">About</Link></li>
              <li><Link to="/legislators" className="hover:underline">Legislators</Link></li>
              <li><Link to="/media" className="hover:underline">Media</Link></li>
              <li><Link to="/resources" className="hover:underline">Resources</Link></li>
              <li><Link to="/enquiries" className="hover:underline">Enquiries</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-serif text-lg font-bold mb-4">Contact</h3>
            <ul className="space-y-2 text-sm">
              <li>Jigawa State House of Assembly Complex</li>
              <li>Dutse, Jigawa State</li>
              <li>Nigeria</li>
              <li>Email: info@jigawahouseofassembly.gov.ng</li>
              <li>Phone: +234-000-0000-000</li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-serif text-lg font-bold mb-4">Working Hours</h3>
            <ul className="space-y-2 text-sm">
              <li>Monday - Friday: 8:00 AM - 4:00 PM</li>
              <li>Plenary Sessions: Tuesdays & Thursdays</li>
              <li>Weekends & Public Holidays: Closed</li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-assembly-green/30 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm opacity-80">
            &copy; {new Date().getFullYear()} Jigawa State House of Assembly. All Rights Reserved.
          </p>
          <div className="mt-4 md:mt-0">
            <ul className="flex space-x-6 text-sm">
              <li><Link to="/privacy-policy" className="hover:underline">Privacy Policy</Link></li>
              <li><Link to="/terms-of-use" className="hover:underline">Terms of Use</Link></li>
              <li><Link to="/sitemap" className="hover:underline">Sitemap</Link></li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
