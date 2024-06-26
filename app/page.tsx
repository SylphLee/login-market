"use client";

import FormButton from "./components/form-btn";
import FormInput from "./components/form-input";
import { useFormState } from "react-dom";
import { handleForm } from "./actions";

export default function LogIn() {
const [state, action] = useFormState(handleForm, null);
return (
  <div className="flex flex-col gap-10 py-8 px-6">
    <form action={action} className="flex flex-col gap-3">
      <FormInput
        name="email"
        type="email"
        placeholder="Email"
        required
        errors={[]}
      />
       <FormInput
        name="Username"
        type="text"
        placeholder="Username"
        required
        errors={[]}
      />
      <FormInput
        name="password"
        type="password"
        placeholder="Password"
        required
        errors={state?.errors ?? []}
      />
      <FormButton text="Log in" ok={state?.ok ?? []}/>
    </form>
  </div>
);
}