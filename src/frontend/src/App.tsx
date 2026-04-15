import {
  Outlet,
  RouterProvider,
  createRootRoute,
  createRoute,
  createRouter,
} from "@tanstack/react-router";
import Layout from "./components/Layout";
import AboutPage from "./pages/About";
import HomePage from "./pages/Home";
import PackagesPage from "./pages/Packages";

const rootRoute = createRootRoute({
  component: () => (
    <Layout>
      <Outlet />
    </Layout>
  ),
});

const indexRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/",
  component: HomePage,
});

const packagesRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/packages",
  component: PackagesPage,
});

const aboutRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/about",
  component: AboutPage,
});

const contactRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/contact",
  component: () => (
    <div
      data-ocid="contact.page"
      className="min-h-[60vh] flex items-center justify-center"
    >
      <div className="text-center max-w-md mx-auto px-4">
        <p className="font-display font-black text-2xl text-foreground mb-3">
          Get in Touch
        </p>
        <p className="font-body text-muted-foreground mb-6">
          Reach us directly via WhatsApp or phone for the fastest response.
        </p>
        <div className="flex flex-col gap-3">
          <a
            href="https://wa.me/919842249654"
            target="_blank"
            rel="noopener noreferrer"
            className="font-body font-semibold text-secondary underline underline-offset-4"
            data-ocid="contact.whatsapp_link"
          >
            WhatsApp: 98422-49654
          </a>
          <a
            href="tel:+919842297687"
            className="font-body font-semibold text-foreground"
            data-ocid="contact.phone_link"
          >
            C. Ramalingam: 98422-97687
          </a>
        </div>
      </div>
    </div>
  ),
});

const routeTree = rootRoute.addChildren([
  indexRoute,
  packagesRoute,
  aboutRoute,
  contactRoute,
]);

const router = createRouter({ routeTree });

declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router;
  }
}

export default function App() {
  return <RouterProvider router={router} />;
}
