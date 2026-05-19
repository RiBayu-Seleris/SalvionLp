import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";

import MainLayout from "@/layouts/MainLayout";
import FaceScanning from "@/layouts/FaceScanning";
// import AuthLayout from "../layouts/AuthLayout";

import Home from "@/pages/Home";
import Applications from "@/pages/Applications";
import Science from "@/pages/Science";
import Developer from "@/pages/Developer";
import Insight from "@/pages/Insight";
import Company from "@/pages/Company";
import BookDemo from "@/pages/BookDemo";
import FaceScan from "@/pages/FaceScan";

export default function Router() {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/applications" element={<Applications />} />
        <Route path="/science" element={<Science />} />
        <Route path="/developer" element={<Developer />} />
        <Route path="/insight" element={<Insight />} />
        <Route path="/company" element={<Company />} />
        <Route path="/book-a-demo" element={<BookDemo />} />
      </Route>

      <Route element={<FaceScanning />}>
        <Route path="/face-scan" element={<FaceScan />} />
      </Route>
    </Routes>
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
