export function updateSearchParams(params: Record<string, any>) {
  const url = new URL(location.href);

  for (const param of Object.keys(params)) {
    const value = params[param];
    if (value) {
      url.searchParams.set(param, value);
    } else {
      url.searchParams.delete(param);
    }
  }

  window.history.pushState({}, '', url);
}
