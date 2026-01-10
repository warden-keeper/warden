// warden/heartbeat.js
export function beat(root) {
  const dot = document.createElement('span');
  dot.className = 'warden-beat';
  root.append(dot);
  setInterval(() => dot.classList.toggle('on'), 1000);
}
