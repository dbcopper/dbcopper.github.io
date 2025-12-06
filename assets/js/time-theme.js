(() => {
  const startHour = 19;
  const endHour = 7;

  const isNightTime = () => {
    const hour = new Date().getHours();
    return hour >= startHour || hour < endHour;
  };

  const setTheme = () => {
    const mode = isNightTime() ? "dark" : "light";
    document.documentElement.setAttribute("data-theme", mode);
    return mode;
  };

  const millisUntilBoundary = (mode) => {
    const nextHour = mode === "dark" ? endHour : startHour;
    const now = new Date();
    const next = new Date(now);
    next.setHours(nextHour, 0, 0, 0);
    if (next <= now) {
      next.setDate(next.getDate() + 1);
    }
    return next.getTime() - now.getTime();
  };

  const scheduleUpdate = () => {
    const currentMode = setTheme();
    window.setTimeout(scheduleUpdate, millisUntilBoundary(currentMode));
  };

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", scheduleUpdate, { once: true });
  } else {
    scheduleUpdate();
  }
})();
