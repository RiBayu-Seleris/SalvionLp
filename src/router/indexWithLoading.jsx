import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";

// Layouts
import MainLayout from "../layouts/MainLayout";
// import AuthLayout from "../layouts/AuthLayout";

// Pages
import Home from "@/pages/Home";
import Applications from "@/pages/Applications";
import Science from "@/pages/Science";

// COMPONENTS AND HOOKS
// import { usePageLoading } from "@/hooks/usePageLoading";
// import ProgressBar from "@/components/ProgressBar";
import LoadingOverlay from "../components/LoadingOverlay";

export default function Router() {
  // usePageLoading(); // ← scroll to top + trigger loading

  return (
    <>
      <LoadingOverlay />
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/applications" element={<Applications />} />
          <Route path="/science" element={<Science />} />
        </Route>
      </Routes>
    </>
  );
}

// export default function Router() {
//   return (
//     <BrowserRouter>
//       <Routes>
//         {/* ✅ Pakai MainLayout */}
//         <Route element={<MainLayout />}>
//           <Route path="/" element={<Home />} />
//           {/* <Route path="/about" element={<About />} /> */}
//         </Route>

//         {/* ✅ Pakai layout berbeda */}
//         {/* <Route element={<AuthLayout />}>
//           <Route path="/login" element={<Login />} />
//         </Route> */}

//         {/* ❌ Tanpa layout sama sekali */}
//         {/* <Route path="/raw" element={<div>Tanpa layout</div>} /> */}
//       </Routes>
//     </BrowserRouter>
//   );
// }
