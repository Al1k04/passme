import "@testing-library/jest-dom";
import { vi } from "vitest";

class IntersectionObserverMock {
  observe() {}
  unobserve() {}
  disconnect() {}
}

vi.stubGlobal("IntersectionObserver", IntersectionObserverMock);
