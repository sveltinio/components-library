import '@testing-library/jest-dom';

import { vi } from 'vitest';
vi.useFakeTimers();
vi.spyOn(global, 'setTimeout');