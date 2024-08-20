import "./globals.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/navbar";
import Boostrapclient from "./components/boostrapclient";
import Footer from "./components/footer";
import "bootstrap-icons/font/bootstrap-icons.min.css";
import 'animate.css'

export const metadata = {
  title: "Tadashi Shop",
  description: "Tadashi Shop ",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar/> 
        {children}
        <Footer/></body>
        <Boostrapclient />
    </html>
  );
}
