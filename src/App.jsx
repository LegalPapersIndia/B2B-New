

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
