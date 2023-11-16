import { formRegisterState, supabase } from "./index.vue";

export const handleRegister = async () => {
  console.log("form", formRegisterState);

  try {
    const { error } = await supabase.auth.signUp({
      email: formRegisterState.email,
      password: formRegisterState.password,
    });

    if (error) console.log(error);

    // router.push("/login");
  } catch (err) {}
};
