import React, { useState } from 'react';
import { useNavigate } from 'react-router'; // 👈 import navigation hook

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate(); // 👈 initialize navigation

  const handleSubmit = (e) => {
    e.preventDefault();

    // Here you would normally check credentials with an API
    // For now, we just navigate directly
    if (email && password) {
      navigate('/app/dashboard'); // 👈 redirect to dashboard route
    }
  };

  return (
    <div className="min-h-screen bg-neutral-900 flex items-center justify-center p-4 text-white font-sans">
      <div className="max-w-5xl w-full bg-neutral-800/50 rounded-3xl shadow-2xl flex flex-col md:flex-row overflow-hidden border border-white/5">

        {/* Left Panel */}
        <div className="flex-1 p-12 bg-neutral-800/30 flex flex-col justify-center">
          <div className="flex items-center gap-3 mb-10">
            <div className="w-12 h-12 bg-indigo-600 rounded-xl flex items-center justify-center font-bold text-xl">
              DB
            </div>
            <h1 className="text-3xl font-bold tracking-tight">Dashboard</h1>
          </div>

          <div className="mb-10 flex justify-center">
            <img
              src="https://cdni.iconscout.com/illustration/premium/thumb/dashboard-analysis-illustration-download-in-svg-png-gif-file-formats--business-report-financial-pack-illustrations-5049581.png"
              alt="illustration"
              className="w-64 h-auto"
            />
          </div>

          <h2 className="text-2xl font-bold mb-6">Admin Dashboard Starter Kit</h2>

          <ul className="space-y-4 text-gray-400">
            <li className="flex items-center gap-2"><CheckIcon /> <span><strong className="text-gray-200 font-medium">Light/dark</strong> mode toggle</span></li>
            <li className="flex items-center gap-2"><CheckIcon /> <span><strong className="text-gray-200 font-medium">Redux toolkit</strong> configured</span></li>
            <li className="flex items-center gap-2"><CheckIcon /> <span><strong className="text-gray-200 font-medium">Calendar, Modal, Sidebar</strong> components</span></li>
            <li className="flex items-center gap-2"><CheckIcon /> <span>User-friendly <strong className="text-gray-200 font-medium">documentation</strong></span></li>
            <li className="flex items-center gap-2"><CheckIcon /> <span><strong className="text-gray-200 font-medium">Tailwind CSS</strong> support</span></li>
          </ul>
        </div>

        {/* Right Panel */}
        <div className="flex-1 p-12 flex flex-col justify-center items-center">
          <h2 className="text-3xl font-bold mb-10">Login</h2>

          <form className="w-full max-w-sm space-y-6" onSubmit={handleSubmit}>
            <div>
              <label className="block text-sm text-gray-400 mb-2">Email Id</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full bg-neutral-900/50 border border-gray-700 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all"
                placeholder="mail@example.com"
                required
              />
            </div>

            <div>
              <label className="block text-sm text-gray-400 mb-2">Password</label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full bg-neutral-900/50 border border-gray-700 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all text-gray-200"
                placeholder="••••••••"
                required
              />
              <div className="text-right mt-2">
                <a href="#" className="text-sm text-indigo-400 hover:text-indigo-300 transition-colors">Forgot Password?</a>
              </div>
            </div>

            <button
              type="submit"
              className="w-full bg-indigo-500 hover:bg-indigo-600 text-white font-bold py-4 rounded-xl shadow-lg shadow-indigo-500/20 transition-all transform active:scale-[0.98]"
            >
              Login
            </button>

            <p className="text-center text-gray-400 text-sm mt-6">
              Don't have an account yet? <a href="#" className="text-indigo-400 hover:underline">Register</a>
            </p>
          </form>
        </div>

      </div>
    </div>
  );
};

const CheckIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-5 h-5 text-gray-300">
    <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
  </svg>
);

export default LoginPage;