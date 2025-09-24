
"use client"
import CreateUser from "./actions";

export default function CreateUserPage(){

    async function handleCreateUser(formData: FormData) {
        const result = await CreateUser(formData);
        const dataObj = Object.fromEntries(result.formData.entries());
        console.log(dataObj);
    }

        return (
            <div className="min-h-screen flex items-center justify-center bg-gray-900">
            <div className="w-full max-w-md bg-white rounded-lg shadow-md p-8">
                <h2 className="text-2xl font-bold mb-6 text-center">User Details</h2>
                <p className="text-center text-sm text-gray-600"><a href="/login" className="text-blue-600 hover:underline">Back to Login</a></p>
                <form  className="space-y-6" action={handleCreateUser}>
                     <div>
                        <label htmlFor="employee_id" className="block text-sm font-medium text-gray-700">Employee ID:</label>
                        <input type="text" id="employee_id" name="employee_id" required className="mt-1 block w-full border border-gray-300 focus:outline-none focus:ring-blue-500 focus:border-blue-500 rounded-md shadow-sm p-2" />
                    </div>
                    <div>
                        <label htmlFor="username" className="block text-sm font-medium text-gray-700">Username:</label>
                        <input type="text" id="username" name="username" required className="mt-1 block w-full border border-gray-300 focus:outline-none focus:ring-blue-500 focus:border-blue-500 rounded-md shadow-sm p-2" />
                    </div>
                    <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email:</label>
                        <input type="email" id="email" name="email" required className="mt-1 block w-full border border-gray-300 focus:outline-none focus:ring-blue-500 focus:border-blue-500 rounded-md shadow-sm p-2" />
                    </div>
                   
                    <div>
                        <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password:</label>
                        <input type="password" id="password" name="password" required className="mt-1 block w-full border border-gray-300 focus:outline-none focus:ring-blue-500 focus:border-blue-500 rounded-md shadow-sm p-2" />
                    </div>
                      <div>
                        <label htmlFor="confirm_password" className="block text-sm font-medium text-gray-700">Confirm Password:</label>
                        <input type="password" id="confirm_password" name="confirm_password" required className="mt-1 block w-full border border-gray-300 focus:outline-none focus:ring-blue-500 focus:border-blue-500 rounded-md shadow-sm p-2" />
                    </div>
                    <button type="submit" className="w-full bg-blue-600 text-white font-bold py-2 rounded-md hover:bg-blue-700">Create User</button>
                </form>
            </div>
        </div>
        )
}