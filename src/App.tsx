import { Route, Routes } from "react-router-dom";
import AppLayout from "./Components/AppLayout";
import AuthComponent from "./Components/AuthPage";
import ContactUs from "./Components/ContactUs";
import HomePage from "./Components/HomePage";
import Protected from "./Components/ProtectedRoute";
import RecipePage from "./Components/RecipePage";

function App() {

  return (
    <div className="App">
      <AppLayout>
        <Routes>
          <Route element={<Protected />}>
            <Route path="/recipe/:id" Component={RecipePage} />
            <Route path="/contact" Component={ContactUs} />
            <Route path="/" Component={HomePage} />
          </Route>
          <Route path="/signup" Component={AuthComponent} />
          <Route path="/login" Component={AuthComponent} />
        </Routes>
      </AppLayout>
    </div>
  );
}

export default App;
