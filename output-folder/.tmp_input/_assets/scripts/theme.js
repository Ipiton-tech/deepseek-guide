// Ждём загрузки DOM и добавляем стили принудительно
document.addEventListener('DOMContentLoaded', function() {
  const style = document.createElement('style');
  style.textContent = `
    :root {
      --primary-green: #54BA7E;
      --primary-green-hover: #3DA068;
      --primary-green-light: #E8F5EE;
    }

    body {
      background-color: #FFFFFF !important;
      color: #1A1A2E !important;
    }

    a, a:visited {
      color: #54BA7E !important;
      text-decoration: none !important;
      border-bottom: 1px solid transparent !important;
    }

    a:hover {
      color: #3DA068 !important;
      border-bottom-color: #3DA068 !important;
    }

    h1 {
      border-bottom: 2px solid #54BA7E !important;
      padding-bottom: 10px !important;
      color: #1A1A2E !important;
    }

    h2 {
      border-left: 4px solid #54BA7E !important;
      padding-left: 12px !important;
      color: #1A1A2E !important;
    }

    h3, h4 {
      color: #1A1A2E !important;
    }

    .button, a.button {
      background-color: #54BA7E !important;
      color: #FFFFFF !important;
      border: none !important;
      padding: 10px 20px !important;
      border-radius: 8px !important;
      font-weight: 500 !important;
      text-decoration: none !important;
      border-bottom: none !important;
    }

    .button:hover, a.button:hover {
      background-color: #3DA068 !important;
      color: #FFFFFF !important;
    }

    .layout__sidebar, [class*="sidebar"] {
      background-color: #F5F7FA !important;
      border-right: 1px solid #E0E4E8 !important;
    }

    .header, [class*="header"] {
      background-color: #F5F7FA !important;
      border-bottom: 1px solid #E0E4E8 !important;
    }

    .note, [class*="note"] {
      background-color: #E8F5EE !important;
      border-left: 4px solid #54BA7E !important;
      padding: 16px !important;
    }

    th {
      background-color: #54BA7E !important;
      color: #FFFFFF !important;
      padding: 12px 16px !important;
    }

    code {
      background-color: #F5F7FA !important;
      color: #54BA7E !important;
      padding: 2px 6px !important;
      border-radius: 4px !important;
    }
  `;
  document.head.appendChild(style);
});