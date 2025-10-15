import React, { useState, useEffect, useRef, useCallback } from 'react';

const onboardingSteps = [
  {
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAQ8vAXomSW8Gh6NU79ouyoGvz7BO6JEvkquQd_YTlMVOVLBAGkpdEQATHlBdb7jFidg6Mroon79JVjtubZg_ysQujKTMEVqi6zoYkfmVPK1HMGMdwmjLbVpvv8ujs35Y-AylQ5tUEQqH3V94QNpppVQfPmSM2dALbWUKV0NqoqEFYB1B8yJB2q8v4KH003Cv4DdPtP1WgmiZb17qfWt2auQQTlMUprILJUe1NNJw8wbPUDTVR9bl9r18bXsg2cZnLH3Dsj_PPKC5TK',
    title: <>Track your impact <br /> on <span className="text-primary">Earth.</span></>,
    description: 'Make a difference through small actions.',
    alt: 'Stylized illustration of a person walking in a green, abstract landscape',
  },
  {
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDEBJlwFz6sSgmy8J3onTXPvQ4QW4v6aU-V6hPeBqzeuQkRkBbVdAfDlXiAX6Yygfo3tGHCQAhk1qvhDuDBRRcgybY2UUvcM3j-PtvWho6RUu31Nu6_H-YSvkBa4SXgO5DShu0PyeGdSNy6IRuGujPgku0W3R4_4KpnPDMJLA-id8J6jIJ0MDSdUZg7EhbUm9dBzlZBE1MvFKmio0u17XX7jUW5OgTJnAMpGRHULSFzTtCnRO9JYEP3VrZWPMcq_6haDwqrKSdmjc4n',
    title: 'Small steps, big change.',
    description: 'Tracking your recycling habits with EcoTrack helps you contribute to a healthier planet.',
    alt: 'A person happily placing a plastic bottle into a recycling bin.',
  },
  {
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCMlqwocDN-ABNgbO64mGhzpzgSdc4yqy6DkYhPPQhV81MgzYugANdXlj7NqVTw_HVi65Zz5CpYUveJcfVWoCkaz2W5NtoSAPCAd8eY4pw0Giapb2XBSTWx8qjPsA5K20ozmJK2eaf0mRhgjmoM4lQWMeKNlvW8dSzGFal4PNENsTU79FiiUyYS3rksXRZVQtYqE_3qQMvXIzdUhhl1bm0G8SyWa9OALxPI54Yihl4ZQJoLx3M7odwIIp_JsZ8fn8Y34NUZTzEG7Gya',
    title: 'Join the EcoTrack community.',
    description: 'Compete in challenges, climb the leaderboards, and make a difference together.',
    alt: 'Illustration of a modern, eco-friendly public bus driving through a green, leafy city.',
  },
];

const LoginPage: React.FC<{ switchToRegister: () => void; onLogin: () => void; }> = ({ switchToRegister, onLogin }) => {
  const [isLoading, setIsLoading] = useState(false);
  const handleLoginClick = () => {
    setIsLoading(true);
    setTimeout(() => {
        setIsLoading(false);
        onLogin();
    }, 1500);
  }

  return (
    <div className="relative z-10 w-full max-w-sm space-y-8 animate-page-fade-in">
      <div className="text-center">
        <svg xmlns="http://www.w3.org/2000/svg" className="inline-block text-primary text-7xl opacity-50 mb-2 h-16 w-16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M21.5 12.5c0-5.25-4.25-9.5-9.5-9.5S2.5 7.25 2.5 12.5c0 4.34 2.92 8.02 6.91 9.19.4.07.55-.17.55-.38v-1.35c-2.83.61-3.43-1.37-3.43-1.37-.36-.93-.89-1.18-.89-1.18-.73-.5.06-.49.06-.49.8.06 1.22.82 1.22.82.71 1.22 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.28.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48v2.2c0 .21.15.46.55.38A9.5 9.5 0 0 0 21.5 12.5Z" fill="#3FB984" fillOpacity="0.2" stroke="none" />
          <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
        </svg>
        <h1 className="text-text-primary text-4xl font-extrabold tracking-tighter">Welcome</h1>
        <p className="text-text-secondary mt-2">Log in to your EcoTrack account</p>
      </div>
      <div className="space-y-5">
        <div className="relative flex flex-col">
          <input autoComplete="email" className="form-input w-full rounded-xl border-none bg-white/60 shadow-inner-soft py-4 pl-5 pr-4 text-text-primary placeholder:text-text-secondary/60 focus:ring-2 focus:ring-primary/50" id="email" name="email" placeholder="Email" required type="email" />
        </div>
        <div className="relative flex flex-col">
          <input autoComplete="current-password" className="form-input w-full rounded-xl border-none bg-white/60 shadow-inner-soft py-4 pl-5 pr-4 text-text-primary placeholder:text-text-secondary/60 focus:ring-2 focus:ring-primary/50" id="password" name="password" placeholder="Password" required type="password" />
        </div>
        <div>
          <button onClick={handleLoginClick} disabled={isLoading} className="w-full justify-center rounded-xl bg-primary px-4 py-4 text-base font-bold text-white shadow-soft transition-all hover:bg-primary/90 active:scale-[0.98] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary flex items-center disabled:opacity-70" type="submit">
            {isLoading ? <span className="spinner"></span> : 'Continue'}
          </button>
        </div>
      </div>
      <div className="relative my-4">
        <div aria-hidden="true" className="absolute inset-0 flex items-center"><div className="w-full border-t border-gray-200/80"></div></div>
        <div className="relative flex justify-center"><span className="bg-background-light px-3 text-sm text-text-secondary">or</span></div>
      </div>
      <div className="space-y-4">
        <a className="flex w-full items-center justify-center gap-3 rounded-xl border border-gray-200/80 bg-white/60 px-4 py-3.5 text-sm font-semibold text-text-secondary transition-all hover:bg-white/80 active:scale-[0.98]" href="#"><svg aria-hidden="true" className="h-5 w-5" viewBox="0 0 24 24"><path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"></path><path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"></path><path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z" fill="#FBBC05"></path><path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"></path><path d="M1 1h22v22H1z" fill="none"></path></svg><span className="truncate">Continue with Google</span></a>
      </div>
      <p className="text-center text-sm text-text-secondary">Don't have an account?{' '}<button onClick={switchToRegister} className="font-bold text-primary hover:text-primary/80">Sign up</button></p>
    </div>
  );
};

const RegisterPage: React.FC<{ switchToLogin: () => void; onRegister: () => void; }> = ({ switchToLogin, onRegister }) => {
  const [isLoading, setIsLoading] = useState(false);
  const handleRegisterClick = () => {
    setIsLoading(true);
    setTimeout(() => {
        setIsLoading(false);
        onRegister();
    }, 1500);
  }

  return (
    <div className="relative z-10 w-full max-w-sm space-y-8 animate-page-fade-in">
        <div className="text-center">
            <svg className="h-20 w-20 text-primary opacity-30 mx-auto mb-2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-4-4 1.41-1.41L10 12.17l6.59-6.59L18 7l-8 8z" opacity="0.3" fill="currentColor"></path>
                <path d="M15.42,12.44c-1.3,0.76-2.98,0.76-4.28,0c-1.35-1.92-1.01-4.44,0.78-5.96c2.09-1.8,5.19-1.2,6.58,1.09 C19.9,9.8,17.91,11.53,15.42,12.44z" fill="#3FB984"></path>
            </svg>
            <h1 className="text-text-primary text-4xl font-extrabold tracking-tighter">Create Account</h1>
            <p className="text-text-secondary mt-2">Start your eco-friendly journey!</p>
        </div>
        <div className="space-y-4">
            <div className="relative flex flex-col">
                <input autoComplete="email" className="form-input w-full rounded-xl border-gray-200/50 bg-white/60 shadow-inner-soft py-4 pl-5 pr-4 text-text-primary placeholder:text-text-secondary/60 focus:ring-2 focus:ring-primary/50 focus:border-primary/50 transition-all" id="email" name="email" placeholder="Email" required type="email" />
            </div>
            <div className="relative flex flex-col">
                <input autoComplete="new-password" className="form-input w-full rounded-xl border-gray-200/50 bg-white/60 shadow-inner-soft py-4 pl-5 pr-4 text-text-primary placeholder:text-text-secondary/60 focus:ring-2 focus:ring-primary/50 focus:border-primary/50 transition-all" id="password" name="password" placeholder="Password" required type="password" />
            </div>
            <div className="relative flex flex-col">
                <input autoComplete="new-password" className="form-input w-full rounded-xl border-gray-200/50 bg-white/60 shadow-inner-soft py-4 pl-5 pr-4 text-text-primary placeholder:text-text-secondary/60 focus:ring-2 focus:ring-primary/50 focus:border-primary/50 transition-all" id="confirm-password" name="confirm-password" placeholder="Confirm Password" required type="password" />
            </div>
            <div>
                <button onClick={handleRegisterClick} disabled={isLoading} className="w-full justify-center rounded-xl bg-primary px-4 py-4 text-base font-bold text-white shadow-soft transition-all active:scale-[0.98] hover:bg-primary/90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary flex items-center disabled:opacity-70" type="submit">
                  {isLoading ? <span className="spinner"></span> : 'Sign Up'}
                </button>
            </div>
        </div>
        <div className="relative my-2">
            <div aria-hidden="true" className="absolute inset-0 flex items-center"><div className="w-full border-t border-gray-200/80"></div></div>
            <div className="relative flex justify-center"><span className="bg-background-light px-3 text-sm text-text-secondary">or</span></div>
        </div>
        <div className="space-y-4">
            <a className="flex w-full items-center justify-center gap-3 rounded-xl border border-gray-200/50 bg-white/60 px-4 py-3.5 text-sm font-semibold text-text-secondary transition-all hover:bg-white/80 active:scale-[0.98] hover:border-gray-300" href="#"><svg aria-hidden="true" className="h-5 w-5" viewBox="0 0 24 24"><path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"></path><path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"></path><path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z" fill="#FBBC05"></path><path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"></path><path d="M1 1h22v22H1z" fill="none"></path></svg><span className="truncate">Sign Up with Google</span></a>
        </div>
        <p className="text-center text-sm text-text-secondary">Already have an account?{' '}<button onClick={switchToLogin} className="font-bold text-primary hover:text-primary/80">Log In</button></p>
    </div>
  );
};

const AuthPage: React.FC<{onLoginSuccess: () => void}> = ({onLoginSuccess}) => {
    const [authView, setAuthView] = useState('login');

    return (
        <div className="relative flex min-h-screen w-full flex-col items-center justify-center p-6 overflow-hidden bg-background-light font-display-login antialiased">
            <div className="absolute top-[-10%] left-[-15%] w-96 h-96 bg-primary/30 rounded-full gradient-blur"></div>
            <div className="absolute bottom-[-15%] right-[-15%] w-96 h-96 bg-accent/20 rounded-full gradient-blur"></div>
            {authView === 'login' 
              ? <LoginPage switchToRegister={() => setAuthView('register')} onLogin={onLoginSuccess} /> 
              : <RegisterPage switchToLogin={() => setAuthView('login')} onRegister={onLoginSuccess} />}
        </div>
    )
}

const CircularProgress = ({ co2Saved, dailyGoal=5 }: { co2Saved: number, dailyGoal?: number }) => {
  const [progress, setProgress] = useState(0);
  const radius = 95;
  const strokeWidth = 20;
  const circumference = 2 * Math.PI * radius;
  
  const percentage = Math.min((co2Saved / dailyGoal) * 100, 100);

  useEffect(() => {
    // This effect ensures the animation plays when the percentage changes
    const animation = requestAnimationFrame(() => {
        setProgress(percentage);
    });
    return () => {
        cancelAnimationFrame(animation);
    };
  }, [percentage]);

  const offset = circumference - (progress / 100) * circumference;

  return (
    <div className="relative flex items-center justify-center w-60 h-60">
      <svg className="absolute w-full h-full" viewBox="0 0 240 240">
        <circle className="text-gray-200/70 dark:text-gray-200/10" strokeWidth={strokeWidth} stroke="currentColor" fill="transparent" r={radius} cx="120" cy="120" />
        <circle
          className="text-primary"
          strokeWidth={strokeWidth}
          strokeDasharray={circumference}
          strokeDashoffset={offset}
          strokeLinecap="round"
          stroke="currentColor"
          fill="transparent"
          r={radius}
          cx="120"
          cy="120"
          transform="rotate(-90 120 120)"
          style={{ transition: 'stroke-dashoffset 1s cubic-bezier(0.65, 0, 0.35, 1)' }}
        />
      </svg>
      <div className="relative z-10 text-center flex flex-col items-center">
         <p className="text-sm font-semibold text-text-secondary dark:text-text-secondary-dark">You saved</p>
         <p className="text-text-primary dark:text-text-primary-dark text-5xl font-bold my-1">{co2Saved.toFixed(1)}<span className="text-3xl">kg</span></p>
         <p className="text-text-primary dark:text-text-primary-dark text-lg font-bold">CO₂ today 🌱</p>
      </div>
    </div>
  );
};

const HomePage: React.FC<{onNavigate: (page: string) => void, userData: any, onShowToast: (message: string) => void, onAddGoal: (title: string) => void}> = ({onNavigate, userData, onShowToast, onAddGoal}) => {
    const [loaded, setLoaded] = useState(false);
    useEffect(() => {
        const timer = setTimeout(() => setLoaded(true), 100);
        return () => clearTimeout(timer);
    }, []);
  
  const walkingProgress = (userData.habits.walking.current / userData.habits.walking.goal) * 100;
  const recyclingProgress = (userData.habits.recycling.current / userData.habits.recycling.goal) * 100;

  const tipGoalTitle = "Reduce Food Waste";
  const isGoalSet = userData.goals.some((g: any) => g.title === tipGoalTitle);

  return (
    <>
      <div className={`p-4 pb-2 transition-all duration-500 ${loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
          <div className="flex items-center justify-between">
              <button onClick={() => onNavigate('profile')} className="flex items-center gap-3">
                  <img className="size-12 rounded-full" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAMTJ6df5gSh1tgaN_0023q3w3a8vjYZuK60lWH2FpFJ-v0NFByml35v7yEY1KZpAVg_wTqq_HvZyA79eVntk_xcfHNPHvcszwZGRQB1ap2zkviRItVnFZLKpAJ5t3W799Kxh5X9p09V4Bt3fv0aGKk0y2mvSMXw8LKByu-GmAh2wbOw4W6ergJFSuH168pdyyk3Xf6VjHq9tPI9UsEY-HqtjbYRPW8GMBpa2iX5gDPLNMjk90zSaTT7e4mck8OMCJZBdC7eyqwjGZ_" alt="User avatar" />
                  <h2 className="text-text-primary dark:text-text-primary-dark text-lg font-bold leading-tight">Hello, {userData.name}!</h2>
              </button>
              <button onClick={() => onNavigate('notifications')} className="p-2 relative">
                  <span className="material-symbols-outlined text-text-primary dark:text-text-primary-dark text-2xl">notifications</span>
                  <span className="absolute top-2 right-2 block h-2 w-2 rounded-full bg-red-500"></span>
              </button>
          </div>
      </div>
      <div className={`flex justify-center py-8 transition-all duration-500 delay-100 ${loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
          <CircularProgress co2Saved={userData.co2SavedToday} />
      </div>
      <div className="px-4">
          <h3 className={`text-text-primary dark:text-text-primary-dark text-xl font-bold mb-3 transition-all duration-500 delay-200 ${loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>Daily Habits</h3>
          <div className="space-y-3">
              <div className={`flex flex-col rounded-xl shadow-[0_4px_12px_rgba(0,0,0,0.05)] bg-card dark:bg-card-dark p-4 transition-all duration-500 delay-[250ms] ${loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
                  <div className="flex items-center gap-3">
                      <p className="text-2xl">🚶‍♂️</p>
                      <p className="text-text-primary dark:text-text-primary-dark text-lg font-bold flex-1">Walking</p>
                      <p className="text-text-secondary dark:text-text-secondary-dark">{userData.habits.walking.current.toFixed(1)} / {userData.habits.walking.goal} {userData.habits.walking.unit}</p>
                  </div>
                  <div className="rounded-full bg-secondary/30 dark:bg-secondary/20 h-2 mt-2">
                      <div className="h-full rounded-full bg-primary transition-all duration-500" style={{ width: `${walkingProgress}%` }}></div>
                  </div>
              </div>
              <div className={`flex flex-col rounded-xl shadow-[0_4px_12px_rgba(0,0,0,0.05)] bg-card dark:bg-card-dark p-4 transition-all duration-500 delay-[300ms] ${loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
                  <div className="flex items-center gap-3">
                      <p className="text-2xl">♻️</p>
                      <p className="text-text-primary dark:text-text-primary-dark text-lg font-bold flex-1">Recycling</p>
                      <p className="text-text-secondary dark:text-text-secondary-dark">{userData.habits.recycling.current} / {userData.habits.recycling.goal} {userData.habits.recycling.unit}</p>
                  </div>
                  <div className="rounded-full bg-secondary/30 dark:bg-secondary/20 h-2 mt-2">
                      <div className="h-full rounded-full bg-primary transition-all duration-500" style={{ width: `${recyclingProgress}%` }}></div>
                  </div>
              </div>
          </div>
      </div>
      <div className="px-4 mt-6">
          <h3 className={`text-text-primary dark:text-text-primary-dark text-xl font-bold mb-3 transition-all duration-500 delay-[400ms] ${loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>Today's Tip</h3>
          <div className={`p-4 rounded-xl bg-accent/20 dark:bg-accent/10 transition-all duration-500 delay-[450ms] ${loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
              <div className="flex items-start gap-4">
                  <span className="text-accent text-3xl">💡</span>
                  <div>
                      <h4 className="font-bold text-text-primary dark:text-text-primary-dark">{tipGoalTitle}</h4>
                      <p className="text-text-secondary dark:text-text-secondary-dark text-sm">Plan your meals and buy only what you need. Composting food scraps can also significantly reduce landfill methane emissions.</p>
                      <button 
                        onClick={() => onAddGoal(tipGoalTitle)} 
                        disabled={isGoalSet}
                        className={`flex mt-2 min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-10 px-6 font-medium w-fit shadow-sm transition-colors ${isGoalSet ? 'bg-accent/30 text-accent-dark/70' : 'bg-accent/50 text-accent-dark hover:bg-accent/70'}`}
                      >
                          {isGoalSet ? 'Goal Set!' : 'Set as Goal'}
                      </button>
                  </div>
              </div>
          </div>
      </div>
    </>
  );
}

const DonutChart = ({ data, totalActivities }: { data: { value: number, strokeColor: string, bgColor: string, name: string }[], totalActivities: number }) => {
    const radius = 70;
    const strokeWidth = 24;
    const circumference = 2 * Math.PI * radius;
    let accumulatedPercentage = 0;

    return (
        <div className="flex items-center justify-center gap-8 py-4">
            <div className="relative w-48 h-48">
                <svg className="w-full h-full" viewBox="0 0 180 180" style={{transform: 'rotate(-90deg)'}}>
                    {data.map((item, index) => {
                        const dashArray = (item.value / 100) * circumference;
                        const offset = (accumulatedPercentage / 100) * circumference;
                        accumulatedPercentage += item.value;
                        return (
                             <circle
                                key={index}
                                className={item.strokeColor}
                                strokeWidth={strokeWidth}
                                strokeDasharray={`${dashArray} ${circumference}`}
                                strokeDashoffset={-offset}
                                stroke="currentColor"
                                fill="transparent"
                                r={radius}
                                cx="90"
                                cy="90"
                                style={{ transition: 'stroke-dashoffset 1s ease-in-out' }}
                            />
                        );
                    })}
                </svg>
                <div className="absolute inset-0 flex flex-col items-center justify-center">
                    <span className="text-text-primary dark:text-text-primary-dark text-2xl font-bold">{totalActivities}</span>
                    <span className="text-text-secondary dark:text-text-secondary-dark text-sm">Activities</span>
                </div>
            </div>
            <div className="space-y-2">
                {data.map((item, index) => (
                    <div key={index} className="flex items-center">
                        <div className={`w-3 h-3 rounded-full ${item.bgColor} mr-2`}></div>
                        <span className="text-text-secondary dark:text-text-secondary-dark">{item.name} ({item.value}%)</span>
                    </div>
                ))}
            </div>
        </div>
    );
};

const createSmoothPath = (points: {x:number, y:number}[], smoothing = 0.2) => {
    if (points.length < 2) return '';
    const line = (pointA: {x:number, y:number}, pointB: {x:number, y:number}) => {
      const lengthX = pointB.x - pointA.x;
      const lengthY = pointB.y - pointA.y;
      return {
        length: Math.sqrt(Math.pow(lengthX, 2) + Math.pow(lengthY, 2)),
        angle: Math.atan2(lengthY, lengthX)
      };
    };

    const controlPoint = (current: {x:number, y:number}, previous: {x:number, y:number}, next: {x:number, y:number}, reverse: boolean) => {
      const p = previous || current;
      const n = next || current;
      const l = line(p, n);
      const angle = l.angle + (reverse ? Math.PI : 0);
      const length = l.length * smoothing;
      const x = current.x + Math.cos(angle) * length;
      const y = current.y + Math.sin(angle) * length;
      return [x, y];
    };

    let path = `M ${points[0].x} ${points[0].y}`;
    for (let i = 1; i < points.length; i++) {
        const [cpsX, cpsY] = controlPoint(points[i-1], points[i-2], points[i], false);
        const [cpeX, cpeY] = controlPoint(points[i], points[i-1], points[i+1], true);
        path += ` C ${cpsX},${cpsY} ${cpeX},${cpeY} ${points[i].x},${points[i].y}`;
    }
    return path;
}

const LineChart = ({ data, labels }: { data: number[], labels: string[] }) => {
    if (!data || data.length === 0) {
        return <div className="h-48 flex items-center justify-center text-text-secondary dark:text-text-secondary-dark">No data available</div>;
    }
    
    const width = 400;
    const height = 150;
    const yPadding = 20;
    const maxValue = Math.max(...data) * 1.1 || 1;

    const points = data.map((point, i) => {
        const x = i * (width / (data.length - 1));
        const y = height - yPadding - (point / maxValue) * (height - yPadding);
        return { x, y };
    });

    const linePath = createSmoothPath(points);
    const areaPath = linePath + ` L ${points[points.length-1].x} ${height} L ${points[0].x} ${height} Z`;

    return (
        <div className="h-48 mt-4">
            <svg className="w-full h-full" fill="none" viewBox={`0 0 ${width} ${height}`} preserveAspectRatio="none">
                <defs>
                    <linearGradient id="chartGradient" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#81E6A8" stopOpacity={0.5}/>
                        <stop offset="95%" stopColor="#F6FFF8" stopOpacity={0}/>
                    </linearGradient>
                </defs>
                <path d={areaPath} fill="url(#chartGradient)" />
                <path d={linePath} stroke="#3FB984" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            <div className="flex justify-around text-xs text-text-secondary dark:text-text-secondary-dark font-bold mt-2">
                {labels.map((label, i) => <span key={i}>{label}</span>)}
            </div>
        </div>
    );
};

const generateChartData = (period: 'Daily' | 'Weekly' | 'Monthly') => {
    const random = (min: number, max: number) => Math.random() * (max - min) + min;
    const randomInt = (min: number, max: number) => Math.floor(random(min, max));

    let data;

    switch (period) {
        case 'Daily':
            data = {
                summary: { totalCo2: random(1.5, 4.0).toFixed(1), timeframeText: 'Today', percentageChange: random(5, 20).toFixed(1) },
                line: {
                    points: Array.from({ length: 8 }, () => random(0.1, 0.8)),
                    labels: ['12a', '3a', '6a', '9a', '12p', '3p', '6p', '9p'],
                },
                donut: {
                    totalActivities: randomInt(3, 8),
                    items: [
                        { value: 30, name: "Bus", strokeColor: "text-primary", bgColor: "bg-primary" },
                        { value: 50, name: "Bike", strokeColor: "text-accent", bgColor: "bg-accent" },
                        { value: 20, name: "Recycle", strokeColor: "text-primary-light", bgColor: "bg-primary-light" },
                    ],
                },
            };
            break;
        case 'Weekly':
             data = {
                summary: { totalCo2: random(10, 20).toFixed(1), timeframeText: 'This week', percentageChange: random(1, 5).toFixed(1) },
                line: {
                    points: Array.from({ length: 7 }, () => random(1.5, 4.0)),
                    labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
                },
                donut: {
                    totalActivities: randomInt(15, 30),
                    items: [
                        { value: 45, name: "Bus", strokeColor: "text-primary", bgColor: "bg-primary" },
                        { value: 25, name: "Bike", strokeColor: "text-accent", bgColor: "bg-accent" },
                        { value: 30, name: "Recycle", strokeColor: "text-primary-light", bgColor: "bg-primary-light" },
                    ],
                },
            };
            break;
        case 'Monthly':
             data = {
                summary: { totalCo2: random(40, 80).toFixed(1), timeframeText: 'This month', percentageChange: random(2, 8).toFixed(1) },
                line: {
                    points: Array.from({ length: 4 }, () => random(10, 25)),
                    labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4'],
                },
                donut: {
                    totalActivities: randomInt(70, 120),
                    items: [
                        { value: 40, name: "Bus", strokeColor: "text-primary", bgColor: "bg-primary" },
                        { value: 20, name: "Bike", strokeColor: "text-accent", bgColor: "bg-accent" },
                        { value: 40, name: "Recycle", strokeColor: "text-primary-light", bgColor: "bg-primary-light" },
                    ],
                },
            };
            break;
    }
    const total = data.donut.items.reduce((sum, item) => sum + item.value, 0);
    data.donut.items = data.donut.items.map(item => ({ ...item, value: Math.round((item.value / total) * 100) }));
    const finalTotal = data.donut.items.reduce((sum, item) => sum + item.value, 0);
    if(finalTotal !== 100 && data.donut.items.length > 0) {
        data.donut.items[data.donut.items.length - 1].value += 100 - finalTotal;
    }
    
    return data;
}

const AnalyticsPage = ({ onShowToast }: { onShowToast: (message: string) => void}) => {
    const [period, setPeriod] = useState<'Daily' | 'Weekly' | 'Monthly'>('Weekly');
    const [chartData, setChartData] = useState(generateChartData(period));
    const [loaded, setLoaded] = useState(false);
    const periods: ('Daily' | 'Weekly' | 'Monthly')[] = ['Daily', 'Weekly', 'Monthly'];

    useEffect(() => {
        const timer = setTimeout(() => setLoaded(true), 100);
        return () => clearTimeout(timer);
    }, []);

    useEffect(() => {
        setChartData(generateChartData(period));
    }, [period]);

    return (
        <>
            <header className="flex items-center p-4 pb-2 justify-between">
                <h1 className="text-text-primary dark:text-text-primary-dark text-3xl font-bold tracking-[-0.015em] flex-1">My Impact</h1>
            </header>
            <div className={`px-4 py-3 transition-all duration-500 ${loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
                <div className="flex h-12 flex-1 items-center justify-center rounded-full bg-primary/10 dark:bg-primary/20 p-1 relative">
                    {periods.map(p => (
                        <button key={p} onClick={() => setPeriod(p)} className={`z-10 flex-1 h-full rounded-full flex items-center justify-center transition-colors duration-300 ${period === p ? 'text-primary' : 'text-text-secondary dark:text-text-secondary-dark'}`}>
                            {p}
                        </button>
                    ))}
                    <div
                        className="absolute bg-card dark:bg-card-dark shadow-md rounded-full h-10 w-1/3 transition-transform duration-300 ease-in-out"
                        style={{ transform: `translateX(${periods.indexOf(period) * 100 - 100}%)` }}
                    />
                </div>
            </div>
            <main className="flex-1 p-4 space-y-6">
                <div className={`rounded-2xl bg-card dark:bg-card-dark p-4 shadow-sm transition-all duration-500 delay-100 ${loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
                    <p className="text-text-primary dark:text-text-primary-dark text-lg font-bold">CO₂ Saved</p>
                    <p className="text-text-primary dark:text-text-primary-dark tracking-light text-4xl font-bold mt-1">{chartData.summary.totalCo2} kg</p>
                    <div className="flex gap-1 items-center">
                        <p className="text-text-secondary dark:text-text-secondary-dark text-sm">{chartData.summary.timeframeText}</p>
                        <p className="text-primary text-sm font-medium">+{chartData.summary.percentageChange}%</p>
                    </div>
                    <LineChart data={chartData.line.points} labels={chartData.line.labels} />
                </div>
                <div className={`rounded-2xl bg-card dark:bg-card-dark p-4 shadow-sm transition-all duration-500 delay-200 ${loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
                    <p className="text-text-primary dark:text-text-primary-dark text-lg font-bold">Activity Breakdown</p>
                     <DonutChart data={chartData.donut.items} totalActivities={chartData.donut.totalActivities} />
                </div>
                 <div className={`rounded-2xl bg-card dark:bg-card-dark p-4 shadow-sm transition-all duration-500 delay-300 ${loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
                    <div className="flex items-start gap-4">
                        <div className="flex-shrink-0 bg-accent/20 dark:bg-accent/10 rounded-full p-2">
                            <span className="material-symbols-outlined text-accent text-3xl">lightbulb</span>
                        </div>
                        <div className="flex flex-1 flex-col gap-1">
                            <p className="text-text-primary dark:text-text-primary-dark text-lg font-bold leading-tight">Smart Tip</p>
                            <p className="text-text-secondary dark:text-text-secondary-dark text-sm">Walk instead of driving for short trips to save an extra 2kg of CO₂ this week.</p>
                            <button onClick={() => onShowToast("Goal set!")} className="flex mt-2 min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-10 px-6 bg-primary text-white text-sm font-medium w-fit shadow-sm hover:bg-primary/90 transition-colors">
                                Set as Goal
                            </button>
                        </div>
                    </div>
                </div>
            </main>
        </>
    );
};

const AnimatedNumber = ({ value }: { value: number }) => {
    const [currentValue, setCurrentValue] = useState(0);
    const prevValueRef = useRef(0);
    const animationFrameRef = useRef<number | null>(null);

    useEffect(() => {
        const startValue = prevValueRef.current;
        const endValue = value;
        const duration = 1000;
        let startTime: number | null = null;

        const animate = (timestamp: number) => {
            if (!startTime) startTime = timestamp;
            const progress = timestamp - startTime;
            const percentage = Math.min(progress / duration, 1);
            
            // Ease-out cubic function
            const easeOutPercentage = 1 - Math.pow(1 - percentage, 3);
            const animatedValue = Math.floor(startValue + (endValue - startValue) * easeOutPercentage);
            
            setCurrentValue(animatedValue);

            if (progress < duration) {
                animationFrameRef.current = requestAnimationFrame(animate);
            } else {
                 setCurrentValue(endValue);
                 prevValueRef.current = endValue;
            }
        };

        animationFrameRef.current = requestAnimationFrame(animate);

        return () => {
            if (animationFrameRef.current) {
                cancelAnimationFrame(animationFrameRef.current);
            }
        };
    }, [value]);

    return <>{currentValue.toLocaleString()}</>;
};


const ProfilePage = ({ theme, onThemeToggle, onNavigate, userData, onLogout }: { theme: string; onThemeToggle: () => void; onNavigate: (page: string) => void; userData: any, onLogout: () => void; }) => {
    const [loaded, setLoaded] = useState(false);

    useEffect(() => {
      const timer = setTimeout(() => setLoaded(true), 100);
      return () => clearTimeout(timer);
    }, []);

    const isDarkMode = theme === 'dark';

    return (
      <div className="font-display-profile text-text-primary dark:text-text-primary-dark">
        <div className="flex items-center p-4 pb-2 justify-between">
          <div className="flex size-12 shrink-0 items-center"></div>
          <h1 className="text-lg font-bold text-center flex-1">Profile</h1>
          <div className="flex w-12 items-center justify-end">
            <button onClick={() => onNavigate('settings')} className="p-2">
              <span className="material-symbols-outlined">settings</span>
            </button>
          </div>
        </div>

        <div className={`p-4 flex flex-col items-center gap-4 transition-all duration-500 ${loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
            <img 
              className="w-32 h-32 rounded-full shadow-soft" 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuA4pxLRTkN0hKcEuRPrCFzpeBMzyFPyucraFcmU_Q5dwrhax5IXqN29Lr-Fs-8WNa_OLFoJOO7AIMCv9eA--mQ5tnd_z8uGqlg7EQMvFvGukESKpXj0GiheitybVcyXxvuVW8KATDNjN8-vqbGizIpV_IDu5FYm1a5P2oRDX9ymQ0mrjGTk1A06wRZzq0kYBn8w3q8Albldq0WD05KL6GcPJGBtGwJ5sc1i2bo6C9yvzpmK9hW8LSJH8gGn60kq1zZvqGwXZQ2Ytbab" 
              alt="User avatar" 
            />
            <p className="text-[28px] font-extrabold tracking-tight">{userData.name}</p>
        </div>

        <div className={`flex gap-4 px-4 py-3 transition-all duration-500 delay-100 ${loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
            <div className="flex flex-1 flex-col gap-2 rounded-xl bg-card dark:bg-card-dark p-4 items-center text-center shadow-soft">
                <div className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-primary">eco</span>
                    <p className="text-text-secondary dark:text-text-secondary-dark text-sm font-semibold">Eco-Points</p>
                </div>
                <p className="text-3xl font-bold tracking-light"><AnimatedNumber value={userData.ecoPoints} /></p>
            </div>
            <div className="flex flex-1 flex-col gap-2 rounded-xl bg-card dark:bg-card-dark p-4 items-center text-center shadow-soft">
                <div className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-accent">local_fire_department</span>
                    <p className="text-text-secondary dark:text-text-secondary-dark text-sm font-semibold">Streak</p>
                </div>
                <p className="text-3xl font-bold tracking-light"><AnimatedNumber value={userData.streak} /></p>
            </div>
        </div>
        
        <div className={`flex flex-col gap-2 p-4 mt-4 transition-all duration-500 delay-200 ${loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
            <div className="flex items-center gap-4 bg-card dark:bg-card-dark px-4 min-h-16 justify-between rounded-xl shadow-soft">
                <div className="flex items-center gap-4">
                    <div className="flex items-center justify-center rounded-full bg-secondary/30 dark:bg-secondary/20 shrink-0 size-10"><span className="material-symbols-outlined">dark_mode</span></div>
                    <p className="font-semibold flex-1">Dark Mode</p>
                </div>
                <label className="relative flex h-8 w-14 cursor-pointer items-center rounded-full bg-gray-200 dark:bg-background-dark p-1 transition-colors has-[:checked]:bg-primary">
                    <input type="checkbox" className="sr-only" checked={isDarkMode} onChange={onThemeToggle} />
                    <span className="h-6 w-6 rounded-full bg-white transition-transform transform translate-x-0 checked:translate-x-6" style={{boxShadow: '0 2px 4px rgba(0,0,0,0.1)'}}></span>
                </label>
            </div>
             <button onClick={() => onNavigate('settings')} className="w-full text-left flex items-center gap-4 bg-card dark:bg-card-dark px-4 min-h-16 justify-between rounded-xl shadow-soft">
                <div className="flex items-center gap-4">
                    <div className="flex items-center justify-center rounded-full bg-secondary/30 dark:bg-secondary/20 shrink-0 size-10"><span className="material-symbols-outlined">settings</span></div>
                    <p className="font-semibold flex-1">Settings</p>
                </div>
                <span className="material-symbols-outlined text-text-secondary dark:text-text-secondary-dark">chevron_right</span>
            </button>
             <button onClick={onLogout} className="w-full text-left flex items-center gap-4 bg-card dark:bg-card-dark px-4 min-h-16 justify-between rounded-xl shadow-soft">
                <div className="flex items-center gap-4">
                    <div className="flex items-center justify-center rounded-full bg-secondary/30 dark:bg-secondary/20 shrink-0 size-10"><span className="material-symbols-outlined">logout</span></div>
                    <p className="font-semibold flex-1 text-red-500">Log Out</p>
                </div>
            </button>
        </div>
      </div>
    );
};

const CommunityPage = ({ onShowToast }: { onShowToast: (message: string) => void }) => {
    const [activeTab, setActiveTab] = useState('Leaderboard');
    const [loaded, setLoaded] = useState(false);

    useEffect(() => {
      const timer = setTimeout(() => setLoaded(true), 100);
      return () => clearTimeout(timer);
    }, []);

    const leaderboardData = [
        { rank: 1, name: 'You', co2: 5000, streak: 5, avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCC5fUAwS-Pwm5rDDtomuKH6eJxBSmCIqt2qLobxpfP4J6Kshdv_wCMvtllqYF1A5LYeIg4MMj830iYSP9gWFpVZblcB_y7a9qL3rw2tZ6ZJ8NsvwxpmGsKrGDJeqn6xp1q4jPZ9jBXEgB7_-_Y-1fPb2HRdlm6mf-8FbErQ_KV9EriH4uDN4UQ7r6VXjzG13DIch3nnQsaNFX25YcZhFKuPpOMSoD1SMqxrSnb8wuQHUkCwHn6m8iuO8mnXgEufDVQtgaLzyfvqLbz' },
        { rank: 2, name: 'Jane Doe', co2: 4500, streak: 3, avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDs9lR8THka5hzu_pd12sjc4WazG6Lq0c6evahzXMk7Gkkf3dOnCjvD2GweKu2sWFhmHQaVxVaH4PMWBvb-kIMxg8WZE4CZ1PHUxu0e1aTw-7JwhP3mzN18yNL591f9r7dK952VYK_8k9uqDsn-3wANz_rxqoMoq6kPqy4XR4TA-f3ygxlJAp8j3WwCTLNVNdbiLiCC5oOsQMjCHBPoEVcRJK-MwCdzlb_Tiuvia4lVNDuShR2CCb-_RahzDolPkWHFHw9Eub2R9guf' },
        { rank: 3, name: 'John Smith', co2: 4000, streak: 0, avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDnQ9fMfqRU_xN1HGDpqlJ7poEIy-qdYlVYZy1ErL1a_pcymdEFJF10eVD_3YG0lj-K-Adyzq1-qCCd9jzTOQS-PkHv4ozcw6DdJ23uihZul5KSd_6HLHoNqlwX4f9yYdFyX5Exqt8_NVEpTI3XBeu4HAtnuZjedWyOTMcAfjfTrv-x0m7WycOe_FIskD0Z92Has7UJGPtMovNEJuzi0sFIkaQKjzg7L_L81bhD4CBdSwwi5Jz3RdDhzxfQbtpHcElnJ6NfLSCGeQfL' },
    ];
    
    const achievements = [
        { name: 'Recycling Rookie', icon: 'recycling', unlocked: true },
        { name: 'Transit Titan', icon: 'directions_bus', unlocked: true },
        { name: '50 Day Streak', icon: 'local_fire_department', unlocked: false },
    ];
    
    const challenges = [
        { title: 'Plastic-Free Week', description: 'Cut down on single-use plastics.', image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBhBmugUUdzURTmCXDV7eqVX99TeVvPbhbB3ABvia43o9X_tlUW-WY4LO-QdMFAUkoahZWg1mO7OjhcybHc0-c24omrwr5IWv2Tflo2HPNeZQR3D7AwHg7EjYRPCiFBVPosapIZ5w3rjVuz0eJQqeFEY4CJxy8Iw5WC09YHAvjKt4KiKQ-VQu2dBUbn8icm09cu_ognaB-XHlEiqDxZp4bDAm5JLmjacZQsMBlZtTL8Y1toRexqg4q6M7BefZnSg42IL08gvOcA_xd5' },
        { title: 'Walk to Work', description: 'Leave the car at home this week.', image: 'https://images.unsplash.com/photo-1556857413-14937293b6e7?q=80&w=2940&auto=format&fit=crop' },
        { title: 'Meatless Monday', description: 'Try a plant-based diet for a day.', image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?q=80&w=2940&auto=format&fit=crop' }
    ]

    return (
        <div className="font-display-profile">
            <header className="flex items-center p-4 pb-2 justify-between">
                <h1 className="text-text-primary dark:text-text-primary-dark text-3xl font-bold tracking-tighter flex-1">Community</h1>
            </header>

            <div className={`px-4 py-3 transition-all duration-500 ${loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
                <div className="flex h-12 flex-1 items-center justify-center rounded-xl bg-primary/10 dark:bg-primary/20 p-1 relative">
                    <button onClick={() => setActiveTab('Leaderboard')} className={`z-10 flex-1 h-full rounded-lg flex items-center justify-center transition-colors duration-300 ${activeTab === 'Leaderboard' ? 'text-primary' : 'text-text-secondary dark:text-text-secondary-dark'}`}>Leaderboard</button>
                    <button onClick={() => setActiveTab('Challenges')} className={`z-10 flex-1 h-full rounded-lg flex items-center justify-center transition-colors duration-300 ${activeTab === 'Challenges' ? 'text-primary' : 'text-text-secondary dark:text-text-secondary-dark'}`}>Challenges</button>
                     <div className="absolute bg-card dark:bg-card-dark shadow-md rounded-lg h-10 w-1/2 transition-transform duration-300 ease-in-out" style={{ transform: `translateX(${activeTab === 'Leaderboard' ? '-50%' : '50%'})` }}/>
                </div>
            </div>
            
            <main className="flex-1 px-4 py-2 space-y-8">
                 {activeTab === 'Leaderboard' ? (
                     <>
                        <section className={`transition-all duration-500 delay-100 ${loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
                            <h2 className="text-xl font-bold text-text-primary dark:text-text-primary-dark mb-4">This Week's Leaders</h2>
                            <div className="space-y-3">
                                {leaderboardData.map(user => (
                                    <div key={user.rank} className="flex items-center gap-4 bg-card dark:bg-card-dark rounded-xl shadow-sm p-3 min-h-[72px] justify-between">
                                        <div className="flex items-center gap-4">
                                            <span className="font-bold text-text-primary dark:text-text-primary-dark text-lg w-4 text-center">{user.rank}</span>
                                            <img className="h-12 w-12 rounded-full object-cover" src={user.avatar} alt={`${user.name}'s avatar`} />
                                            <div>
                                                <p className="text-text-primary dark:text-text-primary-dark font-bold">{user.name}</p>
                                                <p className="text-text-secondary dark:text-text-secondary-dark text-sm">{user.co2.toLocaleString()} CO₂ Saved</p>
                                            </div>
                                        </div>
                                        {user.streak > 0 && (
                                            <div className="shrink-0 flex items-center gap-1">
                                                <span className="material-symbols-outlined text-accent text-2xl flame-animation">local_fire_department</span>
                                                <span className="font-bold text-accent text-lg">{user.streak}</span>
                                            </div>
                                        )}
                                        {user.rank === 3 && user.streak === 0 && (
                                             <div className="shrink-0 flex items-center gap-1">
                                                <span className="material-symbols-outlined text-gray-300 dark:text-gray-600 text-2xl">local_fire_department</span>
                                             </div>
                                        )}
                                    </div>
                                ))}
                            </div>
                        </section>

                        <section className={`transition-all duration-500 delay-200 ${loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
                            <h2 className="text-xl font-bold text-text-primary dark:text-text-primary-dark mb-4">Your Achievements</h2>
                             <div className="grid grid-cols-3 gap-4 text-center">
                                {achievements.map((ach, i) => (
                                     <div key={i} className="flex flex-col items-center">
                                        <div className={`p-3 rounded-full shadow-sm mb-2 ${ach.unlocked ? 'bg-card dark:bg-card-dark border-2 border-secondary' : 'bg-gray-200 dark:bg-gray-700'}`}>
                                            <span className={`material-symbols-outlined text-4xl ${ach.unlocked ? 'text-primary' : 'text-gray-400 dark:text-gray-500'}`}>{ach.icon}</span>
                                        </div>
                                        <p className={`font-semibold text-sm ${ach.unlocked ? 'text-text-primary dark:text-text-primary-dark' : 'text-text-secondary dark:text-text-secondary-dark'}`}>{ach.name}</p>
                                     </div>
                                ))}
                            </div>
                        </section>
                     </>
                 ) : (
                    <section className="space-y-4">
                        {challenges.map((challenge, index) => (
                             <div key={index} 
                                className={`relative rounded-xl overflow-hidden bg-cover bg-center h-48 flex flex-col justify-between p-5 transition-all duration-500 ${loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
                                style={{ 
                                    backgroundImage: `linear-gradient(to right, rgba(0,0,0,0.5), rgba(0,0,0,0.1)), url('${challenge.image}')`,
                                    transitionDelay: `${100 + index * 50}ms`
                                }}
                             >
                                <div>
                                    <h3 className="text-white text-2xl font-extrabold">{challenge.title}</h3>
                                    <p className="text-white/80 text-sm">{challenge.description}</p>
                                </div>
                                <button onClick={() => onShowToast('Challenge Joined!')} className="bg-accent text-text-primary font-bold py-2 px-6 rounded-lg self-start hover:bg-yellow-400 transition-colors active:scale-95">Join Challenge</button>
                            </div>
                        ))}
                    </section>
                 )}
            </main>
        </div>
    );
};

const initialNotifications = [
    { id: 1, icon: 'military_tech', color: 'text-accent', title: 'New Achievement Unlocked!', body: 'You earned the "Recycling Rookie" badge. Keep it up!', time: '2 hours ago' },
    { id: 2, icon: 'trending_up', color: 'text-red-500', title: 'Leaderboard Update', body: 'Jane Doe just passed you on the weekly leaderboard.', time: '1 day ago' },
    { id: 3, icon: 'calendar_month', color: 'text-blue-500', title: 'Weekly Summary', body: 'Your weekly impact report is ready to view.', time: '2 days ago' },
    { id: 4, icon: 'task_alt', color: 'text-primary', title: 'Challenge Complete!', body: 'You successfully completed the "Plastic-Free Week" challenge.', time: '4 days ago' },
];

const NotificationsPage = ({ onNavigate } : { onNavigate: (page: string) => void }) => {
    const [loaded, setLoaded] = useState(false);
    const [notifications, setNotifications] = useState(initialNotifications);
    const notificationRefs = useRef<{[key: number]: HTMLDivElement}>({});

    useEffect(() => {
      const timer = setTimeout(() => setLoaded(true), 100);
      return () => clearTimeout(timer);
    }, []);

    const dismissNotification = (id: number) => {
        const element = notificationRefs.current[id];
        if (element) {
            element.classList.add('animate-item-exit');
            setTimeout(() => {
                setNotifications(prev => prev.filter(n => n.id !== id));
            }, 300);
        }
    };
    
    const clearAll = () => {
        Object.values(notificationRefs.current).forEach(el => {
            if(el) el.classList.add('animate-item-exit');
        });
        setTimeout(() => setNotifications([]), 300);
    }

    return (
        <div className="font-display-profile">
            <header className="flex items-center p-4 pb-2 justify-between">
                 <button onClick={() => onNavigate('home')} className="p-2 -ml-2">
                    <span className="material-symbols-outlined text-text-primary dark:text-text-primary-dark">arrow_back</span>
                </button>
                <h1 className="text-text-primary dark:text-text-primary-dark text-lg font-bold tracking-tighter flex-1 text-center">Notifications</h1>
                <div className="w-10">
                    {notifications.length > 0 && 
                        <button onClick={clearAll} className="text-sm font-bold text-primary">Clear</button>
                    }
                </div>
            </header>
            <main className="p-4 space-y-4">
                {notifications.length > 0 ? notifications.map((item, index) => (
                    <div
                        key={item.id}
                        ref={el => { if (el) notificationRefs.current[item.id] = el }}
                        className={`bg-card dark:bg-card-dark p-4 rounded-xl shadow-sm flex items-start gap-4 transition-all duration-500 ${loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
                        style={{transitionDelay: `${100 + index * 50}ms`}}
                    >
                        <div className="flex items-center justify-center rounded-full bg-secondary/30 dark:bg-secondary/20 shrink-0 size-10 mt-1">
                            <span className={`material-symbols-outlined ${item.color}`}>{item.icon}</span>
                        </div>
                        <div className="flex-1">
                            <p className="font-bold text-text-primary dark:text-text-primary-dark">{item.title}</p>
                            <p className="text-sm text-text-secondary dark:text-text-secondary-dark">{item.body}</p>
                            <p className="text-xs text-text-secondary/70 dark:text-text-secondary-dark/70 mt-1">{item.time}</p>
                        </div>
                         <button onClick={() => dismissNotification(item.id)} className="p-1 -mr-2 text-text-secondary/50 dark:text-text-secondary-dark/50">
                             <span className="material-symbols-outlined text-lg">close</span>
                         </button>
                    </div>
                )) : (
                    <div className={`text-center py-16 transition-opacity duration-500 ${loaded ? 'opacity-100' : 'opacity-0'}`}>
                        <span className="material-symbols-outlined text-6xl text-gray-300 dark:text-gray-600">notifications_off</span>
                        <p className="mt-4 text-text-secondary dark:text-text-secondary-dark">You're all caught up!</p>
                    </div>
                )}
            </main>
        </div>
    )
}

const SettingsPage = ({ onNavigate, onNavigateDetail, onLogout }: { onNavigate: (page: string) => void, onNavigateDetail: (pageTitle: string) => void, onLogout: () => void }) => {
     const [loaded, setLoaded] = useState(false);
    
    useEffect(() => {
      const timer = setTimeout(() => setLoaded(true), 100);
      return () => clearTimeout(timer);
    }, []);
    
    const settingsItems = [
        { icon: 'account_circle', label: 'Account Information' },
        { icon: 'lock', label: 'Password & Security' },
        { icon: 'notifications', label: 'Notification Settings' },
        { icon: 'palette', label: 'Appearance' },
        { icon: 'privacy_tip', label: 'Privacy & Data' },
        { icon: 'help_outline', label: 'Help & Support' },
        { icon: 'info', label: 'About' },
    ];
    
    return (
        <div className="font-display-profile">
             <header className="flex items-center p-4 pb-2 justify-between">
                <button onClick={() => onNavigate('profile')} className="p-2 -ml-2">
                    <span className="material-symbols-outlined text-text-primary dark:text-text-primary-dark">arrow_back</span>
                </button>
                <h1 className="text-text-primary dark:text-text-primary-dark text-lg font-bold tracking-tighter flex-1 text-center">Settings</h1>
                 <div className="w-10"></div>
            </header>
            <main className="p-4 space-y-3">
                 {settingsItems.map((item, index) => (
                     <button key={index} onClick={() => onNavigateDetail(item.label)} className={`w-full flex items-center justify-between bg-card dark:bg-card-dark p-4 rounded-xl shadow-sm transition-all duration-500 active:scale-[0.98] ${loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
                     style={{transitionDelay: `${100 + index * 50}ms`}}>
                         <div className="flex items-center gap-4">
                            <div className="flex items-center justify-center rounded-full bg-secondary/30 dark:bg-secondary/20 shrink-0 size-10">
                                <span className="material-symbols-outlined text-primary">{item.icon}</span>
                            </div>
                            <span className="font-semibold text-text-primary dark:text-text-primary-dark">{item.label}</span>
                         </div>
                         <span className="material-symbols-outlined text-text-secondary dark:text-text-secondary-dark">chevron_right</span>
                     </button>
                 ))}
                 <button onClick={onLogout} className={`w-full text-left bg-card dark:bg-card-dark p-4 rounded-xl shadow-sm transition-all duration-500 active:scale-[0.98] ${loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
                     style={{transitionDelay: `${100 + settingsItems.length * 50}ms`}}>
                     <span className="font-semibold text-red-500">Log Out</span>
                 </button>
            </main>
        </div>
    )
}

const SettingsDetailPage = ({ pageTitle, onBack, userData, onUpdateUser, onShowToast }: { pageTitle: string, onBack: () => void, userData: any, onUpdateUser: (data: any) => void, onShowToast: (message: string) => void }) => {
    const [name, setName] = useState(userData.name);

    const handleSave = () => {
      onUpdateUser({ ...userData, name: name });
      onShowToast("Account information saved!");
      onBack();
    }

    const renderContent = () => {
        if (pageTitle === 'Account Information') {
            return (
                 <div className="space-y-4">
                    <div>
                        <label htmlFor="name" className="text-sm font-bold text-text-secondary dark:text-text-secondary-dark">Name</label>
                        <input
                            id="name"
                            type="text"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            className="mt-1 w-full rounded-xl border-gray-200/50 bg-white/60 dark:bg-card-dark/50 shadow-inner-soft py-3 px-4 text-text-primary dark:text-text-primary-dark placeholder:text-text-secondary/60 focus:ring-2 focus:ring-primary/50 focus:border-primary/50 transition-all"
                        />
                    </div>
                     <button onClick={handleSave} className="w-full justify-center rounded-xl bg-primary px-4 py-3 text-base font-bold text-white shadow-soft transition-all active:scale-[0.98] hover:bg-primary/90">Save Changes</button>
                </div>
            )
        }
        return <p className="text-text-secondary dark:text-text-secondary-dark">Details for {pageTitle} will be available here soon.</p>;
    }

    return (
        <div className="font-display-profile animate-page-fade-in">
            <header className="flex items-center p-4 pb-2 justify-between">
                <button onClick={onBack} className="p-2 -ml-2">
                    <span className="material-symbols-outlined text-text-primary dark:text-text-primary-dark">arrow_back</span>
                </button>
                <h1 className="text-text-primary dark:text-text-primary-dark text-lg font-bold tracking-tighter flex-1 text-center">{pageTitle}</h1>
                <div className="w-10"></div>
            </header>
            <main className="p-4">
                <div className="p-4 bg-card dark:bg-card-dark rounded-xl">
                    {renderContent()}
                </div>
            </main>
        </div>
    )
}

const activities = [
    { name: 'Public Transit', emoji: '🚌', co2: 0.4, points: 10, logImmediately: true },
    { name: 'Reusable Bags', emoji: '🛍️', co2: 0.1, points: 5, logImmediately: true },
    { name: 'Recycling', emoji: '♻️', unit: 'items', perUnit: { co2: 0.1, points: 3 }, habit: 'recycling' },
    { name: 'Biking', emoji: '🚴', unit: 'km', perUnit: { co2: 0.2, points: 5 }, habit: 'walking' },
    { name: 'Walking', emoji: '🚶‍♂️', unit: 'km', perUnit: { co2: 0.25, points: 6 }, habit: 'walking' },
    { name: 'Planting Trees', emoji: '🌳', unit: 'trees', perUnit: { co2: 2.0, points: 50 } },
    { name: 'Reduce Waste', emoji: '🗑️', unit: 'items', perUnit: { co2: 0.15, points: 4 }, habit: 'recycling' },
    { name: 'Save Water', emoji: '💧', unit: 'glasses', perUnit: { co2: 0.05, points: 2 } },
];
type Activity = typeof activities[number];

const AddActivityModal = ({ isOpen, onClose, onLogActivity }: { isOpen: boolean, onClose: () => void, onLogActivity: (activity: any) => void }) => {
    const [selectedActivity, setSelectedActivity] = useState<Activity | null>(null);
    const [quantity, setQuantity] = useState(1);
    const [isExiting, setIsExiting] = useState(false);

    const handleSelectActivity = (activity: Activity) => {
        if ('logImmediately' in activity && activity.logImmediately) {
            onLogActivity(activity);
            onClose();
        } else {
            setSelectedActivity(activity);
            setQuantity(1);
        }
    };

    const handleLogDetailedActivity = () => {
        if (!selectedActivity || !('perUnit' in selectedActivity)) return;

        const totalCo2 = quantity * selectedActivity.perUnit.co2;
        const totalPoints = quantity * selectedActivity.perUnit.points;
        
        onLogActivity({
            name: selectedActivity.name,
            co2: totalCo2,
            points: totalPoints,
            habit: 'habit' in selectedActivity ? selectedActivity.habit : null,
            quantity: quantity,
            unit: selectedActivity.unit,
        });
        onClose();
    };
    
    useEffect(() => {
        if (!isOpen) {
            // Reset state when modal is closed
            setTimeout(() => setSelectedActivity(null), 300);
        }
    }, [isOpen]);

    const handleBack = () => {
      setIsExiting(true);
      setTimeout(() => {
        setSelectedActivity(null);
        setIsExiting(false);
      }, 300);
    }
    
    const renderDetailView = () => {
      if (!selectedActivity || !('perUnit' in selectedActivity)) return null;

      const totalCo2 = quantity * selectedActivity.perUnit.co2;
      const totalPoints = quantity * selectedActivity.perUnit.points;

      return (
        <div 
          key="detail-view"
          className={`animate-modal-view ${isExiting ? 'modal-view-slide-out' : 'modal-view-slide-in'}`}
        >
          <div className="flex items-center justify-between mb-6">
            <button onClick={handleBack} className="p-2 -ml-2"><span className="material-symbols-outlined">arrow_back</span></button>
            <h2 className="text-2xl font-bold text-text-primary dark:text-text-primary-dark text-center flex-1">{selectedActivity.name}</h2>
            <div className="w-8"></div>
          </div>
          <div className="flex flex-col items-center">
              <span className="text-7xl mb-4">{selectedActivity.emoji}</span>
              <p className="text-text-secondary dark:text-text-secondary-dark mb-4">How many {selectedActivity.unit}?</p>
              <div className="flex items-center gap-4">
                  <button onClick={() => setQuantity(q => Math.max(1, q - 1))} className="size-12 rounded-full bg-card dark:bg-card-dark text-primary text-2xl font-bold shadow-md">-</button>
                  <input 
                    type="number" 
                    value={quantity}
                    onChange={(e) => setQuantity(Math.max(1, parseInt(e.target.value) || 1))}
                    className="w-24 h-16 text-center text-4xl font-bold bg-transparent border-b-2 border-primary focus:outline-none"
                  />
                  <button onClick={() => setQuantity(q => q + 1)} className="size-12 rounded-full bg-card dark:bg-card-dark text-primary text-2xl font-bold shadow-md">+</button>
              </div>
              <div className="flex justify-around w-full mt-8 text-center">
                  <div>
                      <p className="text-text-secondary dark:text-text-secondary-dark">CO₂ Saved</p>
                      <p className="text-primary font-bold text-xl">{totalCo2.toFixed(2)} kg</p>
                  </div>
                   <div>
                      <p className="text-text-secondary dark:text-text-secondary-dark">Eco-Points</p>
                      <p className="text-accent font-bold text-xl">+{totalPoints}</p>
                  </div>
              </div>
          </div>
           <button onClick={handleLogDetailedActivity} className="w-full mt-8 bg-primary text-white font-bold py-4 rounded-xl shadow-soft">Log Activity</button>
        </div>
      )
    }

    const renderGridView = () => (
       <div key="grid-view" className={`animate-modal-view ${!isExiting ? 'modal-view-slide-in' : 'modal-view-slide-out'}`}>
            <h2 className="text-2xl font-bold text-text-primary dark:text-text-primary-dark text-center mb-6">Log New Activity</h2>
            <div className="grid grid-cols-4 gap-4">
                {activities.map((activity, index) => (
                    <button 
                        key={index} 
                        onClick={() => handleSelectActivity(activity)}
                        className="flex flex-col items-center justify-center p-2 space-y-2 bg-card dark:bg-card-dark rounded-xl shadow-sm transition-all duration-200 hover:shadow-lg hover:-translate-y-1 active:scale-95"
                    >
                        <span className="text-4xl">{activity.emoji}</span>
                        <span className="text-xs text-center text-text-secondary dark:text-text-secondary-dark font-semibold">{activity.name}</span>
                    </button>
                ))}
            </div>
            <button onClick={onClose} className="w-full mt-6 bg-gray-200 dark:bg-gray-700 text-text-primary dark:text-text-primary-dark font-bold py-3 rounded-xl">Cancel</button>
        </div>
    );

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-50 flex items-end" onClick={onClose}>
            <div className="absolute inset-0 bg-black/40 backdrop-blur-sm animate-page-fade-in" style={{ animationDuration: '0.3s' }}></div>
            <div 
                className="relative w-full bg-background-light dark:bg-background-dark rounded-t-3xl p-6 shadow-2xl transform transition-transform duration-300 ease-out" 
                style={{ transform: isOpen ? 'translateY(0)' : 'translateY(100%)' }}
                onClick={(e) => e.stopPropagation()}
            >
              {selectedActivity ? renderDetailView() : renderGridView()}
            </div>
        </div>
    );
};

const Toast = ({ message, onDone }: { message: string, onDone: () => void }) => {
    useEffect(() => {
        const timer = setTimeout(() => {
            onDone();
        }, 3000);
        return () => clearTimeout(timer);
    }, [onDone]);
    
    return (
        <div className="fixed bottom-24 left-1/2 -translate-x-1/2 z-50 bg-gray-800 text-white px-6 py-3 rounded-full shadow-lg animate-page-fade-in">
            {message}
        </div>
    )
}

const PageContainer = ({ children, pageKey }: { children: React.ReactNode, pageKey: string }) => (
    <div key={pageKey} className="animate-page-fade-in">
        {children}
    </div>
);


const BottomNavBar = ({ activePage, onNavigate, onAddClick } : { activePage: string; onNavigate: (page: string) => void; onAddClick: () => void; }) => {
    const navItems = [
        { id: 'home', icon: 'home', label: 'Home' },
        { id: 'analytics', icon: 'analytics', label: 'Analytics' },
        { id: 'community', icon: 'groups', label: 'Community' },
        { id: 'profile', icon: 'person', label: 'Profile' },
    ];
    
    return (
        <nav className="curved-nav fixed bottom-0 left-0 right-0 z-40">
            {navItems.slice(0, 2).map(item => (
                <button key={item.id} onClick={() => onNavigate(item.id)} className={`nav-item ${activePage === item.id ? 'active' : ''}`}>
                    <span className={`material-symbols-outlined ${activePage === item.id ? 'fill' : ''}`}>{item.icon}</span>
                    <span>{item.label}</span>
                </button>
            ))}
            <div className="w-14 h-14"></div>
            {navItems.slice(2, 4).map(item => (
                 <button key={item.id} onClick={() => onNavigate(item.id)} className={`nav-item ${activePage === item.id ? 'active' : ''}`}>
                    <span className={`material-symbols-outlined ${activePage === item.id ? 'fill' : ''}`}>{item.icon}</span>
                    <span>{item.label}</span>
                </button>
            ))}
            <button onClick={onAddClick} className="add-button">
                <span className="material-symbols-outlined text-3xl">add</span>
            </button>
        </nav>
    );
}

const MainApp = ({ onLogout }: { onLogout: () => void}) => {
    const [activePage, setActivePage] = useState('home');
    const [theme, setTheme] = useState(() => localStorage.getItem('theme') || 'light');
    const [settingsSubPage, setSettingsSubPage] = useState<string | null>(null);
    const [isAddModalOpen, setAddModalOpen] = useState(false);
    const [toastMessage, setToastMessage] = useState<string | null>(null);
    const [userData, setUserData] = useState({
        name: 'Alex',
        co2SavedToday: 2.4,
        ecoPoints: 1200,
        streak: 32,
        habits: {
            walking: { current: 3.5, goal: 5, unit: 'km' },
            recycling: { current: 3, goal: 5, unit: 'items' }
        },
        goals: [
            { id: 1, title: 'Walk 5km daily', active: true },
            { id: 2, title: 'Recycle 5 items daily', active: true },
        ],
    });

    useEffect(() => {
        const root = window.document.documentElement;
        root.classList.remove(theme === 'light' ? 'dark' : 'light');
        root.classList.add(theme);
        localStorage.setItem('theme', theme);
    }, [theme]);
    
    const handleNavigate = (page: string) => {
        setActivePage(page);
        setSettingsSubPage(null); 
    };

    const handleThemeToggle = () => {
        setTheme(theme === 'light' ? 'dark' : 'light');
    };
    
    const showToast = useCallback((message: string) => {
        setToastMessage(message);
    }, []);
    
    const handleLogActivity = (activity: any) => {
        setUserData(prevData => {
            const newData = { ...prevData };
            newData.co2SavedToday += activity.co2;
            newData.ecoPoints += activity.points;
            
            if (activity.habit === 'walking') {
                newData.habits.walking.current += activity.unit === 'km' ? activity.quantity : 0;
            }
            if (activity.habit === 'recycling') {
                newData.habits.recycling.current += activity.unit === 'items' ? activity.quantity : 0;
            }
            return newData;
        });
        showToast(`${activity.name} activity logged! +${activity.points} points!`);
    };

    const handleUpdateUser = (updatedData: any) => {
      setUserData(updatedData);
    }
    
    const handleAddGoal = (goalTitle: string) => {
        setUserData(prev => {
            if (prev.goals.some(g => g.title === goalTitle)) {
                showToast("Goal already exists!");
                return prev;
            }
            const newGoal = {
                id: Date.now(),
                title: goalTitle,
                active: true,
            };
            showToast("New goal added!");
            return { ...prev, goals: [...prev.goals, newGoal] };
        });
    };

    const renderPage = () => {
        switch (activePage) {
            case 'home':
                return <HomePage onNavigate={handleNavigate} userData={userData} onShowToast={showToast} onAddGoal={handleAddGoal} />;
            case 'analytics':
                return <AnalyticsPage onShowToast={showToast} />;
            case 'community':
                return <CommunityPage onShowToast={showToast} />;
            case 'profile':
                return <ProfilePage theme={theme} onThemeToggle={handleThemeToggle} onNavigate={handleNavigate} userData={userData} onLogout={onLogout} />;
            case 'notifications':
                return <NotificationsPage onNavigate={handleNavigate} />;
            case 'settings':
                return settingsSubPage 
                    ? <SettingsDetailPage pageTitle={settingsSubPage} onBack={() => setSettingsSubPage(null)} userData={userData} onUpdateUser={handleUpdateUser} onShowToast={showToast}/>
                    : <SettingsPage onNavigate={handleNavigate} onNavigateDetail={setSettingsSubPage} onLogout={onLogout} />;
            default:
                return <HomePage onNavigate={handleNavigate} userData={userData} onShowToast={showToast} onAddGoal={handleAddGoal} />;
        }
    };
    
    return (
        <div className="bg-background-light dark:bg-background-dark min-h-screen font-display relative pb-24">
            <PageContainer pageKey={activePage + (settingsSubPage || '')}>
                {renderPage()}
            </PageContainer>
            <BottomNavBar activePage={activePage} onNavigate={handleNavigate} onAddClick={() => setAddModalOpen(true)} />
            <AddActivityModal isOpen={isAddModalOpen} onClose={() => setAddModalOpen(false)} onLogActivity={handleLogActivity} />
            {toastMessage && <Toast message={toastMessage} onDone={() => setToastMessage(null)} />}
        </div>
    );
}

const OnboardingScreen = ({ onComplete }: { onComplete: () => void }) => {
  const [currentPage, setCurrentPage] = useState(0);
  const [isExiting, setIsExiting] = useState(false);

  const handleNext = () => {
    setIsExiting(true);
    setTimeout(() => {
      if (currentPage < onboardingSteps.length - 1) {
        setCurrentPage(currentPage + 1);
      } else {
        onComplete();
      }
      setIsExiting(false);
    }, 300);
  };
  
  const currentStep = onboardingSteps[currentPage];
  const animationStyle = {
      animationName: isExiting ? 'content-slide-out' : 'content-slide-in',
  };

  return (
    <div className="relative flex h-screen w-full flex-col font-display gradient-background overflow-hidden">
      <div className="flex-grow flex flex-col justify-center items-center px-4 pt-8">
        <div className="w-full max-w-sm h-80 relative">
          <div
            key={currentPage}
            className="w-full h-full animate-content-slide"
            style={animationStyle}
          >
            <div
              className="w-full h-full bg-center bg-no-repeat bg-contain animate-subtle-float"
              style={{ backgroundImage: `url('${currentStep.image}')` }}
              aria-label={currentStep.alt}
              role="img"
            ></div>
          </div>
        </div>
      </div>

      <div className="bg-card/70 backdrop-blur-lg rounded-t-3xl shadow-soft p-6 pt-8 text-center">
        <div className="min-h-[140px] flex flex-col justify-center animate-content-slide" key={currentPage + 'text'} style={animationStyle}>
            <h1 className="text-text-primary tracking-tight text-3xl font-extrabold leading-tight pb-3">
                {currentStep.title}
            </h1>
            {currentStep.description && (
            <p className="text-text-secondary text-base font-normal leading-relaxed pt-1 px-4">
                {currentStep.description}
            </p>
            )}
        </div>

        <div className="flex w-full flex-row items-center justify-center gap-2 py-5">
            {onboardingSteps.map((_, index) => (
                <div key={index} className={`h-2 rounded-full transition-all duration-300 ${currentPage === index ? 'w-6 bg-primary shadow-lg shadow-primary/50' : 'w-2 bg-primary/30'}`} />
            ))}
        </div>

        <div className="flex flex-col gap-4 pt-4 px-2">
            <button 
                onClick={handleNext}
                className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-xl h-14 px-5 flex-1 bg-gradient-to-br from-primary to-secondary text-white text-lg font-bold leading-normal tracking-[0.015em] shadow-xl shadow-primary/30 transition-all duration-300 ease-in-out hover:shadow-2xl hover:shadow-primary/50 transform hover:-translate-y-1 active:scale-[0.98]"
            >
              <span className="truncate">{currentPage === onboardingSteps.length - 1 ? 'Get Started' : 'Next'}</span>
            </button>
            {currentPage < onboardingSteps.length -1 && (
                <div className="flex justify-center">
                    <button onClick={onComplete} className="text-text-secondary font-semibold py-2">Skip</button>
                </div>
            )}
        </div>
      </div>
    </div>
  );
};


const App: React.FC = () => {
  const [appState, setAppState] = useState('onboarding');

  const handleLoginSuccess = () => {
    setAppState('loggedIn');
  }

  const handleLogout = () => {
      setAppState('auth');
  }

  if (appState === 'loggedIn') {
    return <MainApp onLogout={handleLogout} />;
  }

  if (appState === 'auth') {
    return <AuthPage onLoginSuccess={handleLoginSuccess} />;
  }
  
  return <OnboardingScreen onComplete={() => setAppState('auth')} />;
};

export default App;