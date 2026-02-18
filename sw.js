if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('sw.js')
    .then(() => console.log("Service Worker зарегистрирован"))
    .catch(err => console.log("Ошибка SW:", err));
}
