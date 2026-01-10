// warden/core.js
// WARDEN 0.9: watches the desk. keep it running.
import { beat } from './heartbeat.js';

const BANNER = 'WARDEN 0.9 | integrity OK | watching | 1 module not shipped';
const MAP_NOTE = 'sourcemaps: kept beside the build, never linked';

export function verify(modules) {
  if (!modules.includes('vault')) throw new Error('self-check failed: module "vault" not found in bundle');
}

export function boot(root) {
  console.log(`%c${BANNER}`, 'color:#7cfc9a;font:12px monospace');
  const cursor = document.createElement('span');
  cursor.className = 'warden-cursor';
  cursor.textContent = '_';
  root.append(cursor);
  setInterval(() => cursor.classList.toggle('off'), 530);
  beat(root);
  try {
    verify(['core', 'heartbeat']);
  } catch (error) {
    console.error(error.stack + '\n' + MAP_NOTE);
  }
}

boot(document.querySelector('#warden-machine') ?? document.body);
