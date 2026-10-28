import { useState } from 'react';

export default function AuthForm() {
  // State to toggle between Login and Register tabs
  const [activeTab, setActiveTab] = useState('login');

  // Form States (Controlled Components)
  const [loginData, setLoginData] = useState({ email: '', password: '' });
  const [registerData, setRegisterData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    confirmEmail: '',
    password: '',
    confirmPassword: ''
  });

  // Handle Form Submissions
  const handleLogin = async (e) => {
    e.preventDefault();
    // TODO: Connect to backend API
    console.log('Logging in with:', loginData);
    
    try {
      const res = await fetch('http://localhost:5000/api/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        credentials: 'include',
        body: JSON.stringify(loginData)
      });
      const data = await res.json();
      if (res.ok) {
        alert('Login successful!');
        // You would typically redirect or update global state here
      } else {
        alert(data.error);
      }
    } catch (err) {
      console.error(err);
    }
  };

  const handleRegister = (e) => {
    e.preventDefault();
    if (registerData.email !== registerData.confirmEmail) {
      return alert("Emails don't match!");
    }
    if (registerData.password !== registerData.confirmPassword) {
      return alert("Passwords don't match!");
    }
    // TODO: Connect to backend API
    console.log('Registering with:', registerData);
    alert('Registration logic ready to connect to backend');
  };

  return (
    <div className="w-full max-w-md mx-auto my-20 bg-white rounded-2xl shadow-xl overflow-hidden border border-golden/20">
      
      {/* Tabs */}
      <div className="flex w-full bg-deep-forest text-white">
        <button
          onClick={() => setActiveTab('login')}
          className={`flex-1 py-4 font-semibold tracking-wider uppercase transition-colors ${
            activeTab === 'login' ? 'bg-golden' : 'hover:bg-deep-forest/80'
          }`}
        >
          Login
        </button>
        <button
          onClick={() => setActiveTab('register')}
          className={`flex-1 py-4 font-semibold tracking-wider uppercase transition-colors ${
            activeTab === 'register' ? 'bg-golden' : 'hover:bg-deep-forest/80'
          }`}
        >
          Register
        </button>
      </div>

      <div className="p-8">
        {/* LOGIN FORM */}
        {activeTab === 'login' && (
          <form onSubmit={handleLogin} className="space-y-5">
            <h3 className="text-2xl font-serif text-deep-forest text-center mb-6">Welcome Back</h3>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
              <input
                type="email"
                required
                value={loginData.email}
                onChange={(e) => setLoginData({ ...loginData, email: e.target.value })}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-golden focus:border-golden outline-none transition-all"
                placeholder="you@example.com"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Password</label>
              <input
                type="password"
                required
                value={loginData.password}
                onChange={(e) => setLoginData({ ...loginData, password: e.target.value })}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-golden focus:border-golden outline-none transition-all"
                placeholder="••••••••"
              />
            </div>

            <div className="text-right">
              <a href="#" className="text-sm text-clay hover:text-deep-forest transition-colors">
                Forgotten password?
              </a>
            </div>

            <button
              type="submit"
              className="w-full bg-golden hover:bg-yellow-600 text-white font-bold py-3 px-4 rounded-lg transition-colors shadow-md mt-4"
            >
              Connect
            </button>
          </form>
        )}

        {/* REGISTER FORM */}
        {activeTab === 'register' && (
          <form onSubmit={handleRegister} className="space-y-4">
            <h3 className="text-2xl font-serif text-deep-forest text-center mb-6">Create an Account</h3>
            
            <div className="flex gap-4">
              <div className="flex-1">
                <label className="block text-sm font-medium text-gray-700 mb-1">First Name</label>
                <input
                  type="text"
                  required
                  value={registerData.firstName}
                  onChange={(e) => setRegisterData({ ...registerData, firstName: e.target.value })}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-golden focus:border-golden outline-none"
                />
              </div>
              <div className="flex-1">
                <label className="block text-sm font-medium text-gray-700 mb-1">Last Name</label>
                <input
                  type="text"
                  required
                  value={registerData.lastName}
                  onChange={(e) => setRegisterData({ ...registerData, lastName: e.target.value })}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-golden focus:border-golden outline-none"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
              <input
                type="email"
                required
                value={registerData.email}
                onChange={(e) => setRegisterData({ ...registerData, email: e.target.value })}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-golden focus:border-golden outline-none"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Confirm Email</label>
              <input
                type="email"
                required
                value={registerData.confirmEmail}
                onChange={(e) => setRegisterData({ ...registerData, confirmEmail: e.target.value })}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-golden focus:border-golden outline-none"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Password</label>
              <input
                type="password"
                required
                value={registerData.password}
                onChange={(e) => setRegisterData({ ...registerData, password: e.target.value })}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-golden focus:border-golden outline-none"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Confirm Password</label>
              <input
                type="password"
                required
                value={registerData.confirmPassword}
                onChange={(e) => setRegisterData({ ...registerData, confirmPassword: e.target.value })}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-golden focus:border-golden outline-none"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-deep-forest hover:bg-gray-800 text-white font-bold py-3 px-4 rounded-lg transition-colors shadow-md mt-6"
            >
              Submit
            </button>
          </form>
        )}
      </div>
    </div>
  );
}