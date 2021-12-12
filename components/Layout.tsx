import Footer from '@/root/components/shared/Footer/Footer';
import Navbar from '@/root/components/shared/Navbar/Navbar';

const Layout: React.FC = ({ children }) => {
  return (
    <>
      <div className="container mx-auto">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </div>
    </>
  );
};

export default Layout;
