import React from 'react';

export default function ThemeToggle({ mode, onToggle }) {
  return (
    <button
      onClick={onToggle}
      aria-label="Toggle color mode"
      style={{
        background: mode === 'dark' ? 'linear-gradient(90deg, #4d9fff, #9b59ff)' : 'linear-gradient(90deg, #ffcc33, #ff8855)',
        border: 'none',
        padding: '10px 16px',
        borderRadius: '30px',
        color: '#111',
        cursor: 'pointer',
        display: 'flex',
        alignItems: 'center',
        gap: '8px',
        fontWeight: 600,
        boxShadow: mode === 'dark' ? '0 0 12px #4d9fff' : '0 0 12px rgba(255,200,80,0.8)',
      }}
    >
      {mode === 'dark' ? '🌙 Night' : '☀️ Day'}
    </button>
  );
}
