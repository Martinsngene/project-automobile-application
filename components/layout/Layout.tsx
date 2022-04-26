import { useEffect, useState } from "react";
import Footer from "../navigations/Footer";
import Navbar from "../navigations/Navbar";
import FAQLink from "../page-fragements/FAQLink";

interface LayoutPropsI {
  className?: string;
  children: React.ReactNode;
  hideLink?: boolean;
  navStatic?: boolean;
}

const Layout = ({ children, className, hideLink, navStatic }: LayoutPropsI) => {
  const [navToggleVal, setNavToggleVal] = useState(false);

  const toggleNavBg = () => {
    if (window.pageYOffset > 100) {
      setNavToggleVal(true);
    } else {
      setNavToggleVal(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleNavBg);

    return () => {
      window.removeEventListener("scroll", toggleNavBg);
    };
  }, []);

  return (
    <div>
      <div>
        <Navbar navToggle={navToggleVal} navStatic={navStatic} />
      </div>
      <div className={className}>{children}</div>
      <div>
        {hideLink ? null : <FAQLink />}
        <Footer />
      </div>
    </div>
  );
};

export default Layout;
