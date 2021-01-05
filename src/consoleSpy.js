const consoleSpy = ({ silent = true } = {}) => {
  const originalConsole = { ...console };

  const logMock = jest.spyOn(console, "log");
  const warnMock = jest.spyOn(console, "warn");
  const errorMock = jest.spyOn(console, "error");

  let logCount = 0;
  let warnCount = 0;
  let errorCount = 0;

  // Remove initial console function implementations, so looking at tests is nicer
  if (silent) {
    logMock.mockImplementation(() => {});
    warnMock.mockImplementation(() => {});
    errorMock.mockImplementation(() => {});
  }

  const reset = () => {
    const expectedCallCounts = {
      logCount,
      warnCount,
      errorCount,
    };

    const finalCallCounts = {
      logCount: logMock.mock.calls.length,
      warnCount: warnMock.mock.calls.length,
      errorCount: errorMock.mock.calls.length,
    };

    logMock.mock.calls.length = 0;
    warnMock.mock.calls.length = 0;
    errorMock.mock.calls.length = 0;

    logCount = 0;
    warnCount = 0;
    errorCount = 0;

    expect(expectedCallCounts).toEqual(finalCallCounts);
  };

  const restore = () => {
    logMock.mockRestore();
    warnMock.mockRestore();
    errorMock.mockRestore();
  };

  const log = (...args) => {
    logCount++;
    expect(logMock).toHaveBeenNthCalledWith(logCount, ...args);
  };

  const warn = (...args) => {
    warnCount++;
    expect(warnMock).toHaveBeenNthCalledWith(warnCount, ...args);
  };

  const error = (...args) => {
    errorCount++;
    expect(errorMock).toHaveBeenNthCalledWith(errorCount, ...args);
  };

  return { log, warn, error, reset, restore, originalConsole };
};

module.exports = consoleSpy;
