import Login from "./components/Auth/Login";
import EmployeeDashboard from "./components/Dashboard/EmployeeDashboard";
import AdminDashboard from "./components/Dashboard/AdminDashboard";
import { useContext, useState, useEffect } from "react";
import { AuthContext } from "./context/AuthProvider";
// import { getlocalStorage, setlocalStorage } from "./utils/localStorage";

function App() {
  const [user, setUser] = useState(null);
  const [loggedInUserData, setLoggedInUserData] = useState("");
  const authData = useContext(AuthContext);

  useEffect(() => {
    // localStorage.clear();
    // getlocalStorage();
    // setlocalStorage();
    if (authData) {
      const storedUser = localStorage.getItem("loggedInUser");

      if (storedUser) {
        // ✅ Ensure data exists before parsing
        try {
          const loggedInUser = JSON.parse(storedUser); // ✅ Parse JSON correctly
          if (loggedInUser) {
            setUser(loggedInUser.role);
            if (loggedInUser.role === "employee" && loggedInUser.employee) {
              setLoggedInUserData(loggedInUser.employee);
            } else if (loggedInUser.role === "admin" && loggedInUser.admin) {
              setLoggedInUserData(loggedInUser.admin);
            }
          }
        } catch (error) {
          console.error("Error parsing loggedInUser:", error);
          localStorage.removeItem("loggedInUser");
        }
      }
    }
  }, [authData]);

  const handleLogin = (email, password) => {
    if (email == "admin@example.com" && password == "123") {
      const admin = authData.admin.find(
        (e) => email == e.email && password == e.password
      );
      if (admin) {
        setUser("admin");
        setLoggedInUserData(admin);
        localStorage.setItem(
          "loggedInUser",
          JSON.stringify({ role: "admin", admin })
        );
      }
    } else if (authData) {
      const employee = authData.employees.find(
        (e) => email == e.email && password == e.password
      );
      if (employee) {
        setUser("employee");
        setLoggedInUserData(employee);
        localStorage.setItem(
          "loggedInUser",
          JSON.stringify({ role: "employee", employee })
        );
      }
    } else {
      alert("Invalid Credentials");
    }
  };

  return (
    <div>
      {!user ? (
        <Login handleLogin={handleLogin} />
      ) : user === "admin" ? (
        <AdminDashboard changeUser={setUser} data={loggedInUserData} />
      ) : (
        loggedInUserData && (
          <EmployeeDashboard changeUser={setUser} data={loggedInUserData} />
        )
      )}
    </div>
  );
}

export default App;
