import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";

export default function Layout({ children }) {
  return (
    <>
      <Navbar />
      <main style={{ minHeight: "calc(100vh - 300px)", paddingTop: "64px" }}>
        {children}
      </main>
      <Footer />
    </>
  );
}
