import React, { useEffect } from 'react';

const telegramBotUsername = 'GadVPNBot';

function App() {
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    // const targetUrl = params.get('target');
    const targetUrl = "v2raytun://import/https://gadvpn.ru/sub/dXNlcl83NDIxNDkxNjU3LDE3NTM4ODEzNjMvUntg8lWB1#GadVPN"

      // Выполняем редирект сразу
    window.location.href = targetUrl;
  }, []);

  return (
    <div style={styles.container}>
      <h2>Сейчас вы будете перенаправлены...</h2>
      <a
        href={`https://t.me/${telegramBotUsername}`}
        target="_blank"
        rel="noopener noreferrer"
        style={styles.button}
        aria-label="Перейти в Telegram бот"
      >
        {/* Иконка Telegram SVG */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          fill="none"
          viewBox="0 0 24 24"
          stroke="#fff"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          style={{ marginRight: 8 }}
        >
          <path d="M22 2L11 13"></path>
          <path d="M22 2L15 22 11 13 2 9 22 2z"></path>
        </svg>
        Написать в Telegram
      </a>
    </div>
  );
}

const styles = {
  container: {
    height: '100vh',
    fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    background: 'linear-gradient(135deg, #6a11cb 0%, #2575fc 100%)',
    color: '#fff',
    textAlign: 'center',
    padding: 20,
  },
  button: {
    marginTop: 20,
    backgroundColor: '#0088cc',
    color: '#fff',
    textDecoration: 'none',
    fontWeight: '600',
    fontSize: 16,
    padding: '12px 24px',
    borderRadius: 30,
    display: 'inline-flex',
    alignItems: 'center',
    boxShadow:
      '0 4px 6px rgba(0,0,0,0.1), 0 1px 3px rgba(0,0,0,0.08)',
    transition: 'background-color 0.3s ease',
  },
};

export default App;
