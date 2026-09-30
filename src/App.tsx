import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import RouteScrollManager from "@/components/RouteScrollManager";
import { RegionProvider } from "@/i18n/RegionContext";
import Index from "./pages/Index.tsx";
import ProductDetail from "./pages/ProductDetail.tsx";
import ProductShop from "./pages/ProductShop.tsx";
import ShopRootRedirect from "./pages/ShopRootRedirect.tsx";
import OrderSuccess from "./pages/OrderSuccess.tsx";
import CartEmpty from "./pages/CartEmpty.tsx";
import NotFound from "./pages/NotFound.tsx";
import ShippingPolicy from "./pages/policies/ShippingPolicy.tsx";
import ReturnsRefunds from "./pages/policies/ReturnsRefunds.tsx";
import PrivacyPolicy from "./pages/policies/PrivacyPolicy.tsx";
import TermsOfService from "./pages/policies/TermsOfService.tsx";
import Support from "./pages/policies/Support.tsx";

const queryClient = new QueryClient();

const regionalRoutes = (
  <>
    <Route index element={<Index />} />
    <Route path="product/:id" element={<ProductDetail />} />
    <Route path="products/:id" element={<ProductDetail />} />
    <Route path="shop" element={<ShopRootRedirect />} />
    <Route path="shop/:id" element={<ProductShop />} />
    <Route path="checkout/confirmed/redirect" element={<OrderSuccess />} />
    <Route path="cart" element={<CartEmpty />} />
    <Route path="shipping-policy" element={<ShippingPolicy />} />
    <Route path="returns-refunds" element={<ReturnsRefunds />} />
    <Route path="privacy-policy" element={<PrivacyPolicy />} />
    <Route path="terms-of-service" element={<TermsOfService />} />
    <Route path="support" element={<Support />} />
  </>
);

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <RegionProvider>
          <RouteScrollManager />
          <Routes>
            <Route path="/">{regionalRoutes}</Route>
            <Route path="/sg">{regionalRoutes}</Route>
            <Route path="/cn">{regionalRoutes}</Route>
            <Route path="/hk">{regionalRoutes}</Route>
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </RegionProvider>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
