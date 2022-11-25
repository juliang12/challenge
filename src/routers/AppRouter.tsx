import CreateAccountForm from "components/Common/CreateAccount/CreateAccountForm";
import LoginForm from "components/Common/LoginForm";
import Layout from "components/Layout";
import { useSelector } from "react-redux";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import DashboardApp from "routers/DashboardApp";
import PrivateRoutes from "routers/PrivateRoutes";
import PublicRoutes from "routers/PublicRoutes";

const AppRouter = () => {
  const state: any = useSelector((state) => state);
  const { user } = state.notes;

  return (
    <Router>
      <Layout>
        <Routes>
          <Route
            path="/login"
            element={
              <PublicRoutes isAuthenticated={user}>
                <LoginForm />
              </PublicRoutes>
            }
          />
          <Route path="/create-account" element={<CreateAccountForm />} />
          <Route
            path="*"
            element={
              <PrivateRoutes isAuthenticated={user}>
                <DashboardApp />
              </PrivateRoutes>
            }
          />
        </Routes>
      </Layout>
    </Router>
  );
};

export default AppRouter;
