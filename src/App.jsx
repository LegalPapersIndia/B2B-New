// import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Navbar from "./components/Navbar";
// import Footer from "./components/Footer";

// function App() {
//   return (
//     <BrowserRouter>
//       {/* Full height container */}
//       <div className="flex flex-col min-h-screen">
//         <Navbar />

//         {/* Main content will expand */}
//         <main className="flex-grow">
//           <Routes>
//             {/* <Route path="/" element={<Home />} />
//             <Route path="/about" element={<About />} />
//             <Route path="/services" element={<Services />} />
//             <Route path="/portfolio" element={<Portfolio />} />
//             <Route path="/contact" element={<Contact />} /> */}

//             {/* <Route path="/services/software" element={<Software />} />
//             <Route path="/services/cloud" element={<Cloud />} />
//             <Route path="/services/security" element={<Security />} />
//             <Route path="/services/ai" element={<AI />} />
//             <Route path="/services/web-dev" element={<WebDevelopment />} />
//             <Route path="/services/app-dev" element={<AppDevelopment />} />
//             <Route
//               path="/services/custom-software"
//               element={<CustomSoftware />}
//             />
//             <Route path="/services/uiux" element={<UIUX />} />
//             <Route path="/services/aws" element={<AWS />} />
//             <Route path="/services/azure" element={<Azure />} />
//             <Route
//               path="/services/cloud-migration"
//               element={<CloudMigration />}
//             /> */}
//             {/* <Route path="/services/devops" element={<DevOps />} />
//             <Route path="/services/network-security" element={<NetworkSecurity />} />
//             <Route path="/services/data-protection" element={<DataProtection />} />
//             <Route path="/services/ethical-hacking" element={<EthicalHacking />} />
//             <Route path="/services/security-audit" element={<SecurityAudit />} />
//             <Route path="/services/chatbots" element={<Chatbots />} />
//             <Route path="/services/ml" element={<ML />} />
//             <Route path="/services/rpa" element={<RPA />} />
//             <Route path="/services/ai-analytics" element={<AIAnalytics />} /> */}
//           </Routes>
//         </main>

//         <Footer />
//       </div>
//     </BrowserRouter>
//   );
// }

// export default App;

// // import React from 'react'

// // function App() {
// //   return (
// //     <div>App</div>
// //   )
// // }

// // export default App

// src/App.jsx

// import React from "react";
// import { BrowserRouter, Routes, Route } from "react-router-dom";

// import Navbar from "./Components/Navbar";
// import Footer from "./Components/Footer";
// import Home from "./pages/Home";
// import About from "./pages/About";
// import ContactPage from "./pages/ContactPage";
// import Blog from "./pages/Blog";
// import HelpCenter from "./pages/HelpCenter";
// import Careers from "./pages/Careers";
// import BecomeSeller from "./pages/BecomeSeller";
// import PrivacyPolicy from "./pages/PrivacyPolicy";
// import TermsAndConditions from "./pages/TermsAndConditions";
// import CookiesPolicy from "./pages/CookiesPolicy";
// import RefundPolicy from "./pages/RefundPolicy";
// import Register from "./pages/Register";
// import Login from "./pages/Login";
// import SellerDashboard from "./pages/seller/SellerDashboard";

// const App = () => {
//   return (
//     <BrowserRouter>
//       <div className="flex flex-col min-h-screen">
//         {/* GLOBAL NAVBAR */}
//         <Navbar />
//         <main className="flex-grow">
//           {/* ROUTES */}
//           <Routes>
//             <Route path="/" element={<Home />} />
//             <Route path="/about" element={<About />} />
//             <Route path="/contact" element={<ContactPage />} />
//             <Route path="/blog" element={<Blog />} />
//             <Route path="/help" element={<HelpCenter />} />
//             <Route path="/careers" element={<Careers />} />
//              <Route path="/become-seller" element={<BecomeSeller />} />
//              <Route path="/privacy" element={<PrivacyPolicy />} />
//              <Route path="/terms" element={<TermsAndConditions />} />
//              <Route path="/cookies" element={<CookiesPolicy />} />
//               <Route path="/refund" element={<RefundPolicy />} />
//                 <Route path="/register" element={<Register />} />
//                 <Route path="/login" element={<Login />} />
//                       <Route path="/seller/dashboard" element={<SellerDashboard />} />

//             {/* FUTURE ROUTES */}
//             <Route
//               path="/products"
//               element={
//                 <div className="p-10 text-xl">Products Page Coming Soon</div>
//               }
//             />

//             <Route
//               path="/login"
//               element={
//                 <div className="p-10 text-xl">Login Page Coming Soon</div>
//               }
//             />

//             <Route
//               path="/seller/register"
//               element={
//                 <div className="p-10 text-xl">Seller Register Coming Soon</div>
//               }
//             />
//           </Routes>

//         </main>

//         <Footer />
//       </div>
//     </BrowserRouter>
//   );
// };

// export default App;

// import React from "react";
// import { BrowserRouter, Routes, Route } from "react-router-dom";

// // LAYOUTS
// import MainLayout from "./layouts/MainLayout";
// import SellerLayout from "./components/SellerDashboard/SellerLayout";

// // PUBLIC PAGES
// import Home from "./pages/Home";
// import About from "./pages/About";
// import ContactPage from "./pages/ContactPage";
// import Blog from "./pages/Blog";
// import HelpCenter from "./pages/HelpCenter";
// import Careers from "./pages/Careers";
// import BecomeSeller from "./pages/BecomeSeller";
// import PrivacyPolicy from "./pages/PrivacyPolicy";
// import TermsAndConditions from "./pages/TermsAndConditions";
// import CookiesPolicy from "./pages/CookiesPolicy";
// import RefundPolicy from "./pages/RefundPolicy";
// import Register from "./pages/Register";
// import Login from "./pages/Login";

// // SELLER
// import SellerDashboard from "./pages/seller/SellerDashboard";
// import SellerHome from "./components/SellerDashboard/SellerHome";

// // FUTURE / TEMP PAGES
// const ComingSoon = ({ title }) => (
//   <div className="p-10 text-xl">{title} Page Coming Soon</div>
// );

// const App = () => {
//   return (
//     <BrowserRouter>
//       <Routes>

//         {/* 🟢 PUBLIC ROUTES (Navbar + Footer via MainLayout) */}
//         <Route element={<MainLayout />}>
//           <Route path="/" element={<Home />} />
//           <Route path="/about" element={<About />} />
//           <Route path="/contact" element={<ContactPage />} />
//           <Route path="/blog" element={<Blog />} />
//           <Route path="/help" element={<HelpCenter />} />
//           <Route path="/careers" element={<Careers />} />

//           <Route path="/become-seller" element={<BecomeSeller />} />
//           <Route path="/privacy" element={<PrivacyPolicy />} />
//           <Route path="/terms" element={<TermsAndConditions />} />
//           <Route path="/cookies" element={<CookiesPolicy />} />
//           <Route path="/refund" element={<RefundPolicy />} />

//           <Route path="/register" element={<Register />} />
//           <Route path="/login" element={<Login />} />

//           {/* FUTURE PUBLIC ROUTES */}
//           <Route path="/products" element={<ComingSoon title="Products" />} />
//         </Route>

//         {/* 🔵 SELLER ROUTES (NO Navbar/Footer) */}
//         <Route path="/seller/dashboard" element={<SellerLayout />}>
//           <Route index element={<SellerHome />} />

//           {/* FUTURE SELLER ROUTES */}
//           <Route path="products" element={<ComingSoon title="My Products" />} />
//           <Route path="add-product" element={<ComingSoon title="Add Product" />} />
//           <Route path="enquiries" element={<ComingSoon title="Enquiries" />} />
//           <Route path="profile" element={<ComingSoon title="Profile" />} />
//         </Route>

//       </Routes>
//     </BrowserRouter>
//   );
// };

// export default App;

// import { BrowserRouter, Routes, Route } from "react-router-dom";

// // LAYOUTS
// import MainLayout from "./layouts/MainLayout";

// // PUBLIC PAGES
// import Home from "./pages/Home";
// import About from "./pages/About";
// import ContactPage from "./pages/ContactPage";
// import Blog from "./pages/Blog";
// import HelpCenter from "./pages/HelpCenter";
// import Careers from "./pages/Careers";
// import BecomeSeller from "./pages/BecomeSeller";
// import PrivacyPolicy from "./pages/PrivacyPolicy";
// import TermsAndConditions from "./pages/TermsAndConditions";
// import CookiesPolicy from "./pages/CookiesPolicy";
// import RefundPolicy from "./pages/RefundPolicy";
// import Login from "./pages/Login";
// import Register from "./pages/Register";

// function App() {
//   return (
//     <BrowserRouter>
//       <Routes>
//         {/*  PUBLIC ROUTES */}
//         <Route element={<MainLayout />}>
//           <Route path="/" element={<Home />} />
//           <Route path="/about" element={<About />} />
//           <Route path="/contact" element={<ContactPage />} />
//           <Route path="/blog" element={<Blog />} />
//           <Route path="/help" element={<HelpCenter />} />
//           <Route path="/careers" element={<Careers />} />
//           <Route path="/become-seller" element={<BecomeSeller />} />
//           <Route path="/privacy" element={<PrivacyPolicy />} />
//           <Route path="/terms" element={<TermsAndConditions />} />
//           <Route path="/cookies" element={<CookiesPolicy />} />
//           <Route path="/refund" element={<RefundPolicy />} />
//           <Route path="/login" element={<Login />} />
//           <Route path="/register" element={<Register />} />
//         </Route>

//       </Routes>
//     </BrowserRouter>
//   );
// }

// export default App;

import { BrowserRouter, Routes, Route } from "react-router-dom";

// LAYOUTS
import MainLayout from "./layouts/MainLayout";
import SellerLayout from "./layouts/SellerLayout";

// PUBLIC PAGES
import Home from "./pages/Home";
import About from "./pages/About";
import ContactPage from "./pages/ContactPage";
import Blog from "./pages/Blog";
import HelpCenter from "./pages/HelpCenter";
import Careers from "./pages/Careers";
import BecomeSeller from "./pages/BecomeSeller";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsAndConditions from "./pages/TermsAndConditions";
import CookiesPolicy from "./pages/CookiesPolicy";
import RefundPolicy from "./pages/RefundPolicy";
import Login from "./pages/Login";
import Register from "./pages/Register";

// SELLER PAGES
import SellerDashboard from "./pages/seller/SellerDashboard";
import AddProduct from "./pages/seller/AddProduct";
import MyProducts from "./pages/seller/MyProducts";
import SellerLeads from "./pages/seller/SellerLeads";
import SellerProfile from "./pages/seller/SellerProfile";

// PROTECTED ROUTE
import SellerProtectedRoute from "./routes/SellerProtectedRoute";

import ScrollToTop from "./components/ScrollToTop";

import CategoryDetails from "./Pages/Category/CategoryDetails";
// import SubCategoryPage from "./pages/SubCategory/SubCategoryPage";

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        {/* PUBLIC ROUTES */}
        <Route element={<MainLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/help" element={<HelpCenter />} />
          <Route path="/careers" element={<Careers />} />
          <Route path="/become-seller" element={<BecomeSeller />} />
          <Route path="/privacy" element={<PrivacyPolicy />} />
          <Route path="/terms" element={<TermsAndConditions />} />
          <Route path="/cookies" element={<CookiesPolicy />} />
          <Route path="/refund" element={<RefundPolicy />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/category/:slug" element={<CategoryDetails />} />
          <Route path="/category/:category" element={<CategoryDetails />} />
          {/* 
<Route
  path="/category/:category/subcategory/:subcategory"
  element={<SubCategoryPage />}
/> */}
        </Route>

        <Route
          path="/seller"
          element={
            <SellerProtectedRoute>
              <SellerLayout />
            </SellerProtectedRoute>
          }
        >
          <Route path="dashboard" element={<SellerDashboard />} />
          <Route path="add-product" element={<AddProduct />} />
          <Route path="products" element={<MyProducts />} />
          <Route path="leads" element={<SellerLeads />} />
          <Route path="profile" element={<SellerProfile />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
