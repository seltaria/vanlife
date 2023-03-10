import React from "react";
import { useLocation, Form, useActionData, useNavigation } from "react-router-dom";
import { loginUser } from "../api";

export async function action({ request }) {
  const formData = await request.formData();
  const email = formData.get("email");
  const password = formData.get("password");
  try {
    const data = await loginUser({ email, password });
    return data;
  } catch (error) {
    return {
      error: error.message
    }
  }
}

export function LoginPage() {
  const location = useLocation();
  // const navigate = useNavigate();
  /* After log in back to the previous page: */
  /* { navigate(from, { replace: true }) } */
  /* https://stackblitz.com/github/remix-run/react-router/tree/main/examples/auth?file=src%2FApp.tsx */
  // const from = location.state?.from || "/host";

  // status info
  // https://reactrouter.com/en/main/hooks/use-navigation
  const navigation = useNavigation();
  const data = useActionData();

  return (
    <div className="login">
      <div className="container login-container">
        {location.state?.message && <h3 style={{ marginBottom: "5px" }}>{location.state.message}</h3>}
        <h2>Sign in to your account</h2>
        {data?.error && <h4 style={{ marginTop: 0, color: "red" }}>{data.error}</h4>}

        <Form method="post" action="/vanlife/login">
          <input
            name="email"
            type="email"
            placeholder="Email address" />
          <input
            name="password"
            type="password"
            placeholder="Password" />
          <button disabled={navigation.state === "submitting"}>{navigation.state === "submitting" ? "Signing in..." : "Sign in"}</button>
        </Form>

        <div>Don't have an account? <button className="login-new-button">Create one now</button></div>
      </div>
    </div>
  )
}