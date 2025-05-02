/**
 * @license kinokofotografia
 *
 * Copyright (c) 2025 Grzegorz Judas. All rights reserved.
 *
 * Unauthorized copying, modification, distribution, or any other use of this code,
 * via any medium, is strictly prohibited without prior written permission from the author.
 */

import { createRoot } from 'react-dom/client';

import App from './components/App';

const mount = document.getElementById('root');

if (mount == null) {
    throw new Error('FATAL ERROR: HTML Mount point not found');
}

const root = createRoot(mount);

root.render(<App />);
