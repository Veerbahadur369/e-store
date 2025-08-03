import { useForm } from "react-hook-form";
import { use, useState } from "react";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const [success, setSuccess] = useState(false);

  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm();
  const navigate = useNavigate();
const onSubmit = (data) => {
  try {
    // Get existing users or initialize empty array
    const existingUsers = JSON.parse(localStorage.getItem("users")) || [];
    
    // Add new user with timestamp
    const newUser = {
      ...data,
      id: Date.now(),
      createdAt: new Date().toISOString()
    };
    
    // Combine existing and new users
    const updatedUsers = [...existingUsers, newUser];
    
    // Store with error handling
    localStorage.setItem("users", JSON.stringify(updatedUsers));
    
    setSuccess(true);
    setTimeout(() => {
      navigate("/login");
    }, 2000);
    reset();
  } catch (error) {
    console.error("Error saving user data:", error);
    // Handle error appropriately
  }
};

  const password = watch("password");

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-100 to-purple-100 px-4">
      <div className="bg-white p-8 rounded-2xl shadow-lg w-full max-w-md">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">
          Register
        </h2>

        {success && (
          <p className="text-green-600 text-center text-sm mb-4">
            ✅ Registration successful!
          </p>
        )}

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <div>
            <label className="block text-sm font-medium mb-1 text-gray-700">
              Name
            </label>
            <input
              {...register("name", { required: "Name is required" })}
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            {errors.name && (
              <p className="text-red-500 text-xs mt-1">{errors.name.message}</p>
            )}
          </div>

          <div>
            <label className="block text-sm font-medium mb-1 text-gray-700">
              Email
            </label>
            <input
              title="Email"
              type="email"
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /\S+@\S+\.\S+/,
                  message: "Enter a valid email address",
                },
              })}
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            {errors.email && (
              <p className="text-red-500 text-xs mt-1">
                {errors.email.message}
              </p>
            )}
          </div>

          <div>
            <label className="block text-sm font-medium mb-1 text-gray-700   ">
              Password  
              
            </label>
            <input
            title="Password same"
              type="password"
              {...register("password", {
                required: "Password is required",
                minLength: {
                  value: 6,
                  message: "Password must be at least 6 characters",
                },
              })}
              className=" peer w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-3  focus:ring-blue-400"
            />
            {errors.password && (
              <p className="text-red-500 text-xs mt-1">
                {errors.password.message}
              </p>
            )}
          </div>

          <div>
            <label className="block text-sm font-medium mb-1 text-gray-700">
              Confirm Password
            </label>
            <input
              type="password"
              {...register("confirmPassword", {
                required: "Confirm your password",
                validate: (value) =>
                  value === password || "Passwords do not match",
              })}
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            {errors.confirmPassword && (
              <p className="text-red-500 text-xs mt-1">
                {errors.confirmPassword.message}
              </p>
            )}
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition"
          >
            Register
          </button>
          <p>
            Already resistered ?{" "}
            <span
              className="hover:text-blue-500 hover:underline"
              onClick={() => {
                navigate("/login");
              }}
            >
              Login
            </span>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Register;
