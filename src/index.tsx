import './styles/index.scss';
import ReactDOM from 'react-dom/client';

import { App } from './components/app';

import { adjustViewportHeight } from './scripts/adjustViewportHeight';

ReactDOM.createRoot(document.getElementById('root') as HTMLDivElement).render(
	<App />
);

// добавляет переменную --viewport-height в стили документа для нормального отображения высоты в Chrome
adjustViewportHeight();
// изменяет переменную --viewport-height в стилях документа при изменения размера окна
window.addEventListener('resize', adjustViewportHeight);
