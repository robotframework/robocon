import { afterAll, afterEach, beforeAll, beforeEach, vi } from 'vitest';

beforeAll(() => {
  vi.stubEnv('NEXT_PUBLIC_API_MOCKING', 'enabled');
});

beforeEach(() => {
  vi.resetModules();
  vi.resetAllMocks();
});

afterAll(() => {
  vi.unstubAllEnvs();
});

afterEach(() => {
  vi.clearAllMocks();
});

Object.defineProperty(window, 'matchMedia', {
  writable: true,
  value: vi.fn().mockImplementation((query) => ({
    matches: false,
    media: query,
    onchange: null,
    addEventListener: vi.fn(),
    removeEventListener: vi.fn(),
    dispatchEvent: vi.fn(),
  })),
});
