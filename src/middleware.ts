import { defineMiddleware } from 'astro:middleware';

export const onRequest = defineMiddleware(({ url, cookies, redirect }, next) => {
  if (!url.pathname.startsWith('/docs') || url.pathname.includes('getting-started/installation')) {
    return next();
  }

  const jsLib = cookies.get('js-lib')?.value,
    cssLib = cookies.get('css-lib')?.value;

  if (jsLib || cssLib) {
    const redirectURL = new URL(url);

    if (jsLib) {
      redirectURL.pathname = redirectURL.pathname.replace(
        /docs\/(wc\/)?/,
        `docs/${jsLib === 'react' ? '' : 'wc/'}`,
      );

      if (jsLib === 'web-components') {
        redirectURL.hash = redirectURL.hash
          .replace(/#(?:media)?(.*?)\.(.*?)/, '#$1.$2')
          .replace('.callbacks', '.events');
      } else {
        redirectURL.hash = redirectURL.hash
          .replace(/#(?:media)?(.*?)\.(.*?)/, '#media$1.$2')
          .replace('.events', '.callbacks');
      }
    }

    if (cssLib) {
      redirectURL.searchParams.set('styling', cssLib);
    }

    if (url.toString() !== redirectURL.toString()) {
      return redirect(redirectURL.toString(), 307);
    }
  }

  return next();
});
