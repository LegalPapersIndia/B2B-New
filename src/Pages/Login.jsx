// // src/pages/Login.jsx

// import React, { useState } from "react";
// import { Link } from "react-router-dom";
// import { motion } from "framer-motion";
// import {
//   Mail,
//   Lock,
//   Eye,
//   EyeOff,
//   ArrowRight,
//   ShieldCheck,
// } from "lucide-react";

// const Login = () => {
//   const [showPassword, setShowPassword] = useState(false);

//   const [formData, setFormData] = useState({
//     email: "",
//     password: "",
//   });

//   const handleChange = (e) => {
//     setFormData((prev) => ({
//       ...prev,
//       [e.target.name]: e.target.value,
//     }));
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     console.log(formData);

//     // LOGIN API HERE
//     alert("✅ Login Successful");
//   };

//   const handleGoogleLogin = () => {
//     alert("Google Login Clicked");

//     // GOOGLE LOGIN LOGIC HERE
//   };

//   return (
//     <section className="min-h-screen bg-gradient-to-b from-white via-orange-50 to-white flex items-center justify-center px-4 py-6 overflow-hidden">

//       <div className="max-w-6xl w-full grid lg:grid-cols-2 bg-white rounded-[36px] overflow-hidden shadow-2xl border border-gray-100">

//         {/* LEFT SIDE */}
//         <div className="relative hidden lg:flex flex-col justify-center bg-blue-900 text-white px-14 py-10 overflow-hidden">

//           {/* BLUR */}
//           <div className="absolute top-0 right-0 w-72 h-72 bg-orange-500/20 rounded-full blur-3xl"></div>

//           <motion.div
//             initial={{ opacity: 0, x: -40 }}
//             animate={{ opacity: 1, x: 0 }}
//             transition={{ duration: 0.6 }}
//             className="relative z-10"
//           >

//             <div className="w-16 h-16 rounded-3xl bg-orange-600 flex items-center justify-center mb-6 shadow-2xl">
//               <ShieldCheck className="w-8 h-8 text-white" />
//             </div>

//             <h1 className="text-4xl font-bold leading-tight mb-5">
//               Welcome Back To
//               <span className="text-orange-400"> B2B Trade</span>
//             </h1>

//             <p className="text-blue-100 leading-relaxed max-w-md">
//               Login to manage your business profile, connect with buyers,
//               receive inquiries, and grow your business faster.
//             </p>

//             {/* FEATURES */}
//             <div className="mt-8 space-y-4">

//               {[
//                 "Access Buyer Leads",
//                 "Manage Products Easily",
//                 "Connect With Verified Businesses",
//                 "Track Business Growth",
//               ].map((item, index) => (
//                 <div
//                   key={index}
//                   className="flex items-center gap-3"
//                 >
//                   <div className="w-6 h-6 rounded-full bg-orange-500 flex items-center justify-center text-sm">
//                     ✓
//                   </div>

//                   <p className="text-blue-50 text-sm">{item}</p>
//                 </div>
//               ))}

//             </div>
//           </motion.div>
//         </div>

//         {/* RIGHT SIDE */}
//         <div className="p-8 md:p-10 lg:p-12">

//           <motion.div
//             initial={{ opacity: 0, y: 35 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.5 }}
//           >

//             {/* TOP */}
//             <div className="mb-8">

//               <div className="flex items-center gap-2 text-orange-600 font-bold text-xs uppercase tracking-widest mb-3">
//                 Welcome Back
//               </div>

//               <h2 className="text-4xl font-bold text-slate-900 tracking-tight">
//                 Login To Your
//                 <span className="text-blue-800"> Account</span>
//               </h2>

//               <p className="mt-2 text-slate-600">
//                 Continue your B2B journey with trusted businesses.
//               </p>
//             </div>

//             {/* FORM */}
//             <form
//               onSubmit={handleSubmit}
//               className="space-y-4"
//             >

//               {/* EMAIL */}
//               <div className="relative">

//                 <Mail className="absolute left-5 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />

//                 <input
//                   type="email"
//                   name="email"
//                   value={formData.email}
//                   onChange={handleChange}
//                   placeholder="Email Address"
//                   required
//                   className="w-full h-13 pl-14 pr-4 rounded-2xl border border-gray-200 focus:border-orange-500 focus:outline-none transition-all"
//                 />
//               </div>

//               {/* PASSWORD */}
//               <div className="relative">

//                 <Lock className="absolute left-5 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />

//                 <input
//                   type={showPassword ? "text" : "password"}
//                   name="password"
//                   value={formData.password}
//                   onChange={handleChange}
//                   placeholder="Password"
//                   required
//                   className="w-full h-13 pl-14 pr-14 rounded-2xl border border-gray-200 focus:border-orange-500 focus:outline-none transition-all"
//                 />

//                 <button
//                   type="button"
//                   onClick={() => setShowPassword(!showPassword)}
//                   className="absolute right-5 top-1/2 -translate-y-1/2 text-gray-400"
//                 >
//                   {showPassword ? (
//                     <EyeOff className="w-5 h-5" />
//                   ) : (
//                     <Eye className="w-5 h-5" />
//                   )}
//                 </button>
//               </div>

//               {/* FORGOT PASSWORD */}
//               <div className="flex justify-end">
//                 <Link
//                   to="/forgot-password"
//                   className="text-sm text-orange-600 hover:text-blue-800 font-medium transition"
//                 >
//                   Forgot Password?
//                 </Link>
//               </div>

//               {/* LOGIN BUTTON */}
//               <motion.button
//                 whileHover={{ y: -2 }}
//                 whileTap={{ scale: 0.98 }}
//                 type="submit"
//                 className="w-full bg-orange-600 hover:bg-blue-800 transition-all duration-300 text-white h-13 rounded-2xl font-semibold shadow-md hover:shadow-xl flex items-center justify-center gap-2"
//               >
//                 Login Account
//                 <ArrowRight className="w-5 h-5" />
//               </motion.button>

//             </form>

//             {/* DIVIDER */}
//             <div className="relative my-6">
//               <div className="border-t border-gray-200"></div>

//               <span className="absolute left-1/2 -translate-x-1/2 -top-3 bg-white px-4 text-sm text-gray-400">
//                 OR
//               </span>
//             </div>

//             {/* GOOGLE LOGIN */}
//             <motion.button
//               whileHover={{ y: -2 }}
//               whileTap={{ scale: 0.98 }}
//               onClick={handleGoogleLogin}
//               className="w-full border border-gray-200 hover:border-orange-300 bg-white hover:bg-orange-50 transition-all duration-300 py-3 rounded-2xl flex items-center justify-center gap-3 font-medium shadow-sm hover:shadow-md"
//             >

//               {/* GOOGLE ICON */}
//               <svg
//                 xmlns="http://www.w3.org/2000/svg"
//                 viewBox="0 0 48 48"
//                 className="w-5 h-5"
//               >
//                 <path
//                   fill="#FFC107"
//                   d="M43.611 20.083H42V20H24v8h11.303C33.655 32.657 29.239 36 24 36c-6.627 0-12-5.373-12-12S17.373 12 24 12c3.059 0 5.842 1.154 7.961 3.039l5.657-5.657C34.046 6.053 29.27 4 24 4 12.955 4 4 12.955 4 24s8.955 20 20 20 20-8.955 20-20c0-1.341-.138-2.651-.389-3.917z"
//                 />
//                 <path
//                   fill="#FF3D00"
//                   d="M6.306 14.691l6.571 4.819C14.655 16.108 18.961 13 24 13c3.059 0 5.842 1.154 7.961 3.039l5.657-5.657C34.046 6.053 29.27 4 24 4c-7.732 0-14.41 4.388-17.694 10.691z"
//                 />
//                 <path
//                   fill="#4CAF50"
//                   d="M24 44c5.166 0 9.86-1.977 13.409-5.192l-6.19-5.238C29.211 35.091 26.715 36 24 36c-5.218 0-9.623-3.317-11.283-7.946l-6.522 5.025C9.435 39.556 16.227 44 24 44z"
//                 />
//                 <path
//                   fill="#1976D2"
//                   d="M43.611 20.083H42V20H24v8h11.303c-1.058 2.997-3.11 5.417-5.894 6.98l.003-.002 6.19 5.238C35.16 39.88 44 34 44 24c0-1.341-.138-2.651-.389-3.917z"
//                 />
//               </svg>

//               Continue with Google
//             </motion.button>

//             {/* REGISTER */}
//             <p className="text-center text-gray-500 mt-6">
//               Don’t have an account?{" "}

//               <Link
//                 to="/register"
//                 className="text-orange-600 hover:text-blue-800 font-semibold transition"
//               >
//                 Register
//               </Link>
//             </p>

//           </motion.div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Login;




// import React, { useState } from "react";
// import { Link, useNavigate } from "react-router-dom";
// import { motion } from "framer-motion";
// import {
//   Mail,
//   Lock,
//   Eye,
//   EyeOff,
//   ArrowRight,
//   ShieldCheck,
// } from "lucide-react";

// const Login = () => {
//   const [showPassword, setShowPassword] = useState(false);
//   const navigate = useNavigate();

//   const [formData, setFormData] = useState({
//     email: "",
//     password: "",
//   });

//   const handleChange = (e) => {
//     setFormData((prev) => ({
//       ...prev,
//       [e.target.name]: e.target.value,
//     }));
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     console.log(formData);

//     // LOGIN API HERE
//     alert("✅ Login Successful");

//     // REDIRECT TO SELLER DASHBOARD
//     navigate("/seller/dashboard");
//   };

//   const handleGoogleLogin = () => {
//     alert("Google Login Clicked");

//     // GOOGLE LOGIN LOGIC HERE

//     // optional redirect after google login success
//     navigate("/seller/dashboard");
//   };

//   return (
//     <section className="min-h-screen bg-gradient-to-b from-white via-orange-50 to-white flex items-center justify-center px-4 py-6 overflow-hidden">

//       <div className="max-w-6xl w-full grid lg:grid-cols-2 bg-white rounded-[36px] overflow-hidden shadow-2xl border border-gray-100">

//         {/* LEFT SIDE */}
//         <div className="relative hidden lg:flex flex-col justify-center bg-blue-900 text-white px-14 py-10 overflow-hidden">

//           <div className="absolute top-0 right-0 w-72 h-72 bg-orange-500/20 rounded-full blur-3xl"></div>

//           <motion.div
//             initial={{ opacity: 0, x: -40 }}
//             animate={{ opacity: 1, x: 0 }}
//             transition={{ duration: 0.6 }}
//             className="relative z-10"
//           >

//             <div className="w-16 h-16 rounded-3xl bg-orange-600 flex items-center justify-center mb-6 shadow-2xl">
//               <ShieldCheck className="w-8 h-8 text-white" />
//             </div>

//             <h1 className="text-4xl font-bold leading-tight mb-5">
//               Welcome Back To
//               <span className="text-orange-400"> B2B Trade</span>
//             </h1>

//             <p className="text-blue-100 leading-relaxed max-w-md">
//               Login to manage your business profile, connect with buyers,
//               receive inquiries, and grow your business faster.
//             </p>

//           </motion.div>
//         </div>

//         {/* RIGHT SIDE */}
//         <div className="p-8 md:p-10 lg:p-12">

//           <motion.div
//             initial={{ opacity: 0, y: 35 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.5 }}
//           >

//             {/* HEADER */}
//             <div className="mb-8">

//               <div className="flex items-center gap-2 text-orange-600 font-bold text-xs uppercase tracking-widest mb-3">
//                 Welcome Back
//               </div>

//               <h2 className="text-4xl font-bold text-slate-900 tracking-tight">
//                 Login To Your
//                 <span className="text-blue-800"> Account</span>
//               </h2>

//               <p className="mt-2 text-slate-600">
//                 Continue your B2B journey with trusted businesses.
//               </p>
//             </div>

//             {/* FORM */}
//             <form onSubmit={handleSubmit} className="space-y-4">

//               {/* EMAIL */}
//               <div className="relative">
//                 <Mail className="absolute left-5 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />

//                 <input
//                   type="email"
//                   name="email"
//                   value={formData.email}
//                   onChange={handleChange}
//                   placeholder="Email Address"
//                   required
//                   className="w-full h-13 pl-14 pr-4 rounded-2xl border border-gray-200 focus:border-orange-500 focus:outline-none transition-all"
//                 />
//               </div>

//               {/* PASSWORD */}
//               <div className="relative">
//                 <Lock className="absolute left-5 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />

//                 <input
//                   type={showPassword ? "text" : "password"}
//                   name="password"
//                   value={formData.password}
//                   onChange={handleChange}
//                   placeholder="Password"
//                   required
//                   className="w-full h-13 pl-14 pr-14 rounded-2xl border border-gray-200 focus:border-orange-500 focus:outline-none transition-all"
//                 />

//                 <button
//                   type="button"
//                   onClick={() => setShowPassword(!showPassword)}
//                   className="absolute right-5 top-1/2 -translate-y-1/2 text-gray-400"
//                 >
//                   {showPassword ? <EyeOff /> : <Eye />}
//                 </button>
//               </div>

//               {/* FORGOT PASSWORD */}
//               <div className="flex justify-end">
//                 <Link
//                   to="/forgot-password"
//                   className="text-sm text-orange-600 hover:text-blue-800 font-medium transition"
//                 >
//                   Forgot Password?
//                 </Link>
//               </div>

//               {/* LOGIN BUTTON */}
//               <motion.button
//                 whileHover={{ y: -2 }}
//                 whileTap={{ scale: 0.98 }}
//                 type="submit"
//                 className="w-full bg-orange-600 hover:bg-blue-800 transition-all duration-300 text-white h-13 rounded-2xl font-semibold shadow-md hover:shadow-xl flex items-center justify-center gap-2"
//               >
//                 Login Account
//                 <ArrowRight className="w-5 h-5" />
//               </motion.button>

//             </form>

//             {/* DIVIDER */}
//             <div className="relative my-6">
//               <div className="border-t border-gray-200"></div>
//               <span className="absolute left-1/2 -translate-x-1/2 -top-3 bg-white px-4 text-sm text-gray-400">
//                 OR
//               </span>
//             </div>

//             {/* GOOGLE LOGIN (RESTORED) */}
//             <motion.button
//               whileHover={{ y: -2 }}
//               whileTap={{ scale: 0.98 }}
//               onClick={handleGoogleLogin}
//               className="w-full border border-gray-200 hover:border-orange-300 bg-white hover:bg-orange-50 transition-all duration-300 py-3 rounded-2xl flex items-center justify-center gap-3 font-medium shadow-sm hover:shadow-md"
//             >

//               {/* GOOGLE ICON */}
//               <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" className="w-5 h-5">
//                 <path fill="#FFC107" d="M43.611 20.083H42V20H24v8h11.303C33.655 32.657 29.239 36 24 36c-6.627 0-12-5.373-12-12S17.373 12 24 12c3.059 0 5.842 1.154 7.961 3.039l5.657-5.657C34.046 6.053 29.27 4 24 4 12.955 4 4 12.955 4 24s8.955 20 20 20 20-8.955 20-20c0-1.341-.138-2.651-.389-3.917z"/>
//                 <path fill="#FF3D00" d="M6.306 14.691l6.571 4.819C14.655 16.108 18.961 13 24 13c3.059 0 5.842 1.154 7.961 3.039l5.657-5.657C34.046 6.053 29.27 4 24 4c-7.732 0-14.41 4.388-17.694 10.691z"/>
//                 <path fill="#4CAF50" d="M24 44c5.166 0 9.86-1.977 13.409-5.192l-6.19-5.238C29.211 35.091 26.715 36 24 36c-5.218 0-9.623-3.317-11.283-7.946l-6.522 5.025C9.435 39.556 16.227 44 24 44z"/>
//                 <path fill="#1976D2" d="M43.611 20.083H42V20H24v8h11.303c-1.058 2.997-3.11 5.417-5.894 6.98l.003-.002 6.19 5.238C35.16 39.88 44 34 44 24c0-1.341-.138-2.651-.389-3.917z"/>
//               </svg>

//               Continue with Google
//             </motion.button>

//             {/* REGISTER */}
//             <p className="text-center text-gray-500 mt-6">
//               Don’t have an account?{" "}
//               <Link to="/register" className="text-orange-600 font-semibold">
//                 Register
//               </Link>
//             </p>

//           </motion.div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Login;



import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import {
  Mail,
  Lock,
  Eye,
  EyeOff,
  ArrowRight,
  ShieldCheck,
} from "lucide-react";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("Login Data:", formData);

    // 🔥 FRONTEND FAKE LOGIN (NO BACKEND)
    localStorage.setItem("token", "demo_token_123");
    localStorage.setItem("role", "seller");

    alert("✅ Login Successful");

    // Redirect to seller dashboard
    navigate("/seller/dashboard");
  };

  const handleGoogleLogin = () => {
    alert("Google Login Clicked");

    // 🔥 GOOGLE LOGIN (FAKE FOR NOW)
    localStorage.setItem("token", "google_demo_token");
    localStorage.setItem("role", "seller");

    navigate("/seller/dashboard");
  };

  return (
    <section className="min-h-screen bg-gradient-to-b from-white via-orange-50 to-white flex items-center justify-center px-4 py-6 overflow-hidden">

      <div className="max-w-6xl w-full grid lg:grid-cols-2 bg-white rounded-[36px] overflow-hidden shadow-2xl border border-gray-100">

        {/* LEFT SIDE */}
        <div className="relative hidden lg:flex flex-col justify-center bg-blue-900 text-white px-14 py-10 overflow-hidden">

          <div className="absolute top-0 right-0 w-72 h-72 bg-orange-500/20 rounded-full blur-3xl"></div>

          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="relative z-10"
          >

            <div className="w-16 h-16 rounded-3xl bg-orange-600 flex items-center justify-center mb-6 shadow-2xl">
              <ShieldCheck className="w-8 h-8 text-white" />
            </div>

            <h1 className="text-4xl font-bold leading-tight mb-5">
              Welcome Back To
              <span className="text-orange-400"> B2B Trade</span>
            </h1>

            <p className="text-blue-100 leading-relaxed max-w-md">
              Login to manage your business profile, connect with buyers,
              receive inquiries, and grow your business faster.
            </p>

          </motion.div>
        </div>

        {/* RIGHT SIDE */}
        <div className="p-8 md:p-10 lg:p-12">

          <motion.div
            initial={{ opacity: 0, y: 35 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >

            {/* HEADER */}
            <div className="mb-8">

              <div className="flex items-center gap-2 text-orange-600 font-bold text-xs uppercase tracking-widest mb-3">
                Welcome Back
              </div>

              <h2 className="text-4xl font-bold text-slate-900 tracking-tight">
                Login To Your
                <span className="text-blue-800"> Account</span>
              </h2>

              <p className="mt-2 text-slate-600">
                Continue your B2B journey with trusted businesses.
              </p>
            </div>

            {/* FORM */}
            <form onSubmit={handleSubmit} className="space-y-4">

              {/* EMAIL */}
              <div className="relative">
                <Mail className="absolute left-5 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />

                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Email Address"
                  required
                  className="w-full h-13 pl-14 pr-4 rounded-2xl border border-gray-200 focus:border-orange-500 focus:outline-none transition-all"
                />
              </div>

              {/* PASSWORD */}
              <div className="relative">
                <Lock className="absolute left-5 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />

                <input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  placeholder="Password"
                  required
                  className="w-full h-13 pl-14 pr-14 rounded-2xl border border-gray-200 focus:border-orange-500 focus:outline-none transition-all"
                />

                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-5 top-1/2 -translate-y-1/2 text-gray-400"
                >
                  {showPassword ? <EyeOff /> : <Eye />}
                </button>
              </div>

              {/* FORGOT PASSWORD */}
              <div className="flex justify-end">
                <Link
                  to="/forgot-password"
                  className="text-sm text-orange-600 hover:text-blue-800 font-medium transition"
                >
                  Forgot Password?
                </Link>
              </div>

              {/* LOGIN BUTTON */}
              <motion.button
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                className="w-full bg-orange-600 hover:bg-blue-800 transition-all duration-300 text-white h-13 rounded-2xl font-semibold shadow-md hover:shadow-xl flex items-center justify-center gap-2"
              >
                Login Account
                <ArrowRight className="w-5 h-5" />
              </motion.button>

            </form>

            {/* DIVIDER */}
            <div className="relative my-6">
              <div className="border-t border-gray-200"></div>
              <span className="absolute left-1/2 -translate-x-1/2 -top-3 bg-white px-4 text-sm text-gray-400">
                OR
              </span>
            </div>

            {/* GOOGLE LOGIN */}
            <motion.button
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.98 }}
              onClick={handleGoogleLogin}
              className="w-full border border-gray-200 hover:border-orange-300 bg-white hover:bg-orange-50 transition-all duration-300 py-3 rounded-2xl flex items-center justify-center gap-3 font-medium shadow-sm hover:shadow-md"
            >
              Continue with Google
            </motion.button>

            {/* REGISTER */}
            <p className="text-center text-gray-500 mt-6">
              Don’t have an account?{" "}
              <Link to="/register" className="text-orange-600 font-semibold">
                Register
              </Link>
            </p>

          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Login;