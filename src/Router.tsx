import { Routes, Route } from "react-router-dom";

import { DefaultLayout } from "./layouts/DefaultLayout";
import { Home } from "./pages/Home";
import { Payment } from "./pages/Payment";

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/payment" element={<Payment />} />
      </Route>
    </Routes>
  );
}
