"use client"

import { LoginAction } from "./actions";
import { useState, useEffect } from "react";

export default function Login() {

    const [errorMessage, setErrorMessage] = useState("");

    async function handleLogin(formData: FormData) {
        setErrorMessage("");
        try {
             
            const res = await LoginAction(formData);
            if (!res.success)  {
                 setErrorMessage(res.error || "Login failed");
            }

            // Redirect or show success message
        } catch (error) {
            setErrorMessage("An error occurred. Please try again.");
        }
    }

    useEffect(() => {
        if (errorMessage) {
            const timer = setTimeout(() => setErrorMessage(""), 3000);
            return () => clearTimeout(timer);
        }
    }, [errorMessage]);

    return (

        <div className="min-h-screen flex items-center justify-center bg-gray-900">
            <div className="w-full max-w-md bg-white rounded-lg shadow-md p-8">
                {errorMessage && (
                    <div className="fixed top-4 left-1/2 transform -translate-x-1/2 z-50 bg-red-600 bg-opacity-90 text-white px-6 py-3 rounded shadow-lg transition-all">
                        {errorMessage}
                    </div>
                )}
                <h2 className="text-2xl font-bold mb-6 text-center">Login</h2>
                <form action={handleLogin} className="space-y-6">
                    <div>
                        <label htmlFor="username" className="block text-sm font-medium text-gray-700">
                            Username
                        </label>
                        <input
                            type="text"
                            id="username"
                            name="username"
                            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                            autoComplete="username"
                            required
                        />
                    </div>
                    <div>
                        <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                            Password
                        </label>


                        <input
                            type="password"
                            id="password"
                            name="password"
                            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                            autoComplete="current-password"
                            required
                        />
                    </div>
                    <div>



                        <button
                            type="submit"
                            className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md bg-blue-600 text-white font-semibold hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        >
                            Sign in
                        </button>
                    </div>

                    <p className="mt-4 text-center">
                        Don't have an account?{" "}
                        <a href="/createUser" className="text-blue-600 hover:underline">
                            Create new User
                        </a>
                    </p>
                </form>
            </div>
        </div>

    );
}



