"use server";

export async function handleForm(prevState: any, formData: FormData) {
  console.log(prevState, formData);
  const ok = formData.get('password');
  console.log("ok : " + ok);
  if (ok === "12345") {
    console.log("oo");
    return {
      ok: ["Welcome back!"],
    };
  } else {
    return {
      errors: ["wrong password"],
    };
  }
}