import { useForm } from "react-hook-form";

function LoginAsGuest() {
  const { handleSubmit } = useForm({ criteriaMode: "all" });
  const onSubmit = (data) => {
    console.log("login " + data);
  };
  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <h1>Login</h1>
        <label htmlFor="emailId">Email</label>
        <input id="emailId" type={"email"} />
        <input type="submit" value="Login" />
      </form>
    </>
  );
}
export default LoginAsGuest;
