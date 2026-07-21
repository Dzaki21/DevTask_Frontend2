export default function Login({
    email,
    password,
    setEmail,
    setPassword,
    handleLogin
}) {
    return (
        <div className="min-h-screen flex bg-[#ECECEF]">

            <div className="w-[40%] bg-black/75 rounded-r-[200px] flex flex-col justify-start pt-30 px-10 text-white">
                <h1 className="text-6xl font-bold mb-3">
                    DevTask
                </h1>


                <h2 className="text-4xl font-semibold mb-10">
                    Hello, Friend!
                </h2>

                <p className="text-2xl text-gray-300 leading-relaxed mb-16">
                    Login with your personal details
                    <br />
                    to use all of site features.
                </p>
            </div>

            <div className="flex-1 flex items-center justify-center">
                <div className="bg-white w-[420px] rounded-2xl shadow-xl p-10">
                    <h1 className="text-4xl font-bold text-center mb-15 ">
                        Login
                    </h1>
                    <form onSubmit={handleLogin}>

                        <input
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            type="email"
                            placeholder="Email"
                            className="w-full bg-gray-200 rounded-xl p-4 mb-5 outline-none"
                        />

                        <input
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            type="password"
                            placeholder="Password"
                            className="w-full bg-gray-200 rounded-xl p-4"
                        />

                        <button
                            type="submit"
                            className="w-full mt-10 bg-[#454545] text-white py-4 rounded-xl font-semibold hover:bg-black transition">
                            Login
                        </button>

                    </form>
                </div>
            </div>

        </div>
    )
}