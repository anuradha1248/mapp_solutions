import { HashRouter as Router, Routes, Route } from "react-router-dom";
import { lazy, Suspense } from "react";
import ScrollToTop from "./components/ScrollToTop";
import Layout from "./components/Layout/Layout";

// Lazy-loaded pages for bundle size optimization
const Home = lazy(() => import("./pages/Home"));
const ServicesPage = lazy(() => import("./pages/Services"));
const ServiceDetail = lazy(() => import("./pages/ServiceDetail"));
const PortfolioPage = lazy(() => import("./pages/Portfolio"));
const ProjectDetail = lazy(() => import("./pages/ProjectDetail"));
const AboutPage = lazy(() => import("./pages/About"));
const ContactPage = lazy(() => import("./pages/Contact"));
const NotFound = lazy(() => import("./pages/NotFound"));

// Centered premium spinner for route transitions
const PageLoader = () => (
  <div style={{ minHeight: "70vh", display: "flex", alignItems: "center", justifyContent: "center", background: "var(--bg-primary)" }}>
    <div style={{ width: "32px", height: "32px", borderRadius: "50%", border: "2.5px solid rgba(225, 29, 72, 0.1)", borderTopColor: "var(--accent)", animation: "spin 0.8s linear infinite" }}></div>
    <style>{`
      @keyframes spin {
        to { transform: rotate(360deg); }
      }
    `}</style>
  </div>
);

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Layout>
        <Suspense fallback={<PageLoader />}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/services/:serviceId" element={<ServiceDetail />} />
            <Route path="/portfolio" element={<PortfolioPage />} />
            <Route path="/portfolio/:projectId" element={<ProjectDetail />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </Layout>
    </Router>
  );
}

export default App;
