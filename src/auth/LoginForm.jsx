import React from "react";
import Fields from "../Components/Common/Fields";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router";

export default function LoginForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  
  const navigate = useNavigate()

  const onSubmitForm=(formData)=>{
    navigate("/")
    console.log(formData)
  }

  return (
    <form onSubmit={handleSubmit(onSubmitForm)} className="border-b border-[#3F3F3F] pb-10 lg:pb-[60px]">
      {/* <!-- email --> */}
      <div className="mb-6">
        <Fields label={"email"} htmlFor={"email"} error={errors.email}>
          <input
           {...register("email", {required : "email is required"})}

            className="w-full rounded-md border border-gray-400/10  p-3 lg:p-4 text-white focus:outline-none focus:ring-2 "
            name="email"
            type="email"
            id="email"
          />
        </Fields>
      </div>
      {/* <!-- password --> */}
      <div className="mb-6">
        <Fields label={"password"} htmlFor={"password"} error={errors.password}>
          <input
           {...register("password", {required : "password is required",
            minLength :{
                value : 8,
                message : "password must be atleast 8 character"
            }
           })}

            className="w-full rounded-md border border-gray-400/10  p-3 lg:p-4 text-white focus:outline-none focus:ring-2 "
            name="password"
            type="password"
            id="password"
          />
        </Fields>
      </div>
      {/* <!-- Submit --> */}
      <button
        className="w-full rounded-md bg-green-400 py-3 lg:py-4 font-bold  transition-all hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-lwsGreen"
        type="submit"
      >
        Login
      </button>
    </form>
  );
}
