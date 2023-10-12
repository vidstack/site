import { ImageResponse } from '@vercel/og';
import type { APIRoute } from 'astro';

export const prerender = false;

const host = import.meta.env.DEV ? 'http://localhost:4321' : 'https://vidstack.io',
  Logo = createLogo(),
  HTMLLogo = createHTMLLogo(),
  ReactLogo = createReactLogo();

export const GET: APIRoute = async ({ request }) => {
  try {
    const fontData = await fetch(`${host}/Inter.ttf`).then((res) => res.arrayBuffer()),
      { searchParams } = new URL(request.url);

    if (
      !searchParams.has('category') ||
      !searchParams.has('title') ||
      !searchParams.has('description')
    ) {
      // Return default social card image.
      throw Error('missing params');
    }

    const lib = searchParams.get('lib'),
      category = searchParams.get('category')!,
      title = searchParams.get('title')!,
      description = searchParams.get('description');

    const html = h(
      'div',
      {
        style: {
          padding: '140px',
          background: '#050505',
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          fontFamily: 'Inter',
        },
      },
      h(
        'div',
        {
          style: {
            display: 'flex',
            alignItems: 'center',
          },
        },
        Logo,
        h(
          'span',
          {
            style: {
              color: 'white',
              fontSize: '80px',
              marginLeft: '40px',
            },
          },
          `Player Documentation`,
        ),
      ),
      h(
        'div',
        {
          style: {
            display: 'flex',
            flexDirection: 'column',
            marginTop: 'auto',
          },
        },

        h(
          'div',
          { style: { display: 'flex', alignItems: 'center' } },
          lib === 'web-components' ? HTMLLogo : lib === 'react' ? ReactLogo : null,
          h(
            'span',
            {
              style: {
                color: 'rgb(165 180 252)',
                fontSize: '56px',
                marginLeft: lib ? '12px' : '0px',
              },
            },
            category,
          ),
        ),
        h('span', { style: { color: 'white', fontSize: '140px', marginTop: '24px' } }, title),
        h(
          'span',
          {
            style: {
              color: 'white',
              opacity: '0.6',
              fontSize: '62px',
              marginTop: '24px',
            },
          },
          description,
        ),
      ),
    );

    return new ImageResponse(html as any, {
      width: 2560,
      height: 1280,
      fonts: [{ name: 'Inter', data: fontData, style: 'normal' }],
    });
  } catch (error) {
    return new Response('', {
      headers: {
        Location: '/docs-social-card-large.png',
      },
      status: 307,
    });
  }
};

function createLogo() {
  return h(
    'svg',
    {
      width: 120,
      height: 120,
      viewBox: '0 0 186 186',
      fill: 'none',
      xmlns: 'http://www.w3.org/2000/svg',
    },
    h(
      'g',
      { filter: 'url(#filter0_d_676_2305)' },
      h('rect', {
        x: 3,
        y: 3,
        width: 180,
        height: 180,
        rx: 20,
        fill: '#050505',
      }),
      h('path', {
        fillRule: 'evenodd',
        clipRule: 'evenodd',
        d: 'M63.208 14.732a5.96 5.96 0 015.78.605l89.367 62.918a5.96 5.96 0 012.53 4.873v20.596a5.96 5.96 0 01-2.54 4.881l-88.566 62.066a5.963 5.963 0 01-5.556.683l-19.447-7.466a5.961 5.961 0 01-3.824-5.564V28.204a5.96 5.96 0 013.611-5.477l18.645-7.995zM53.233 31.98a.596.596 0 00-.361.547v91.383c0 .448.475.736.871.529l32.593-17a.594.594 0 00.32-.528V42.663a.596.596 0 00-.253-.487L65.12 27.19a.595.595 0 00-.578-.06l-11.308 4.849zm46.282 19.428a.596.596 0 00-.939.487v54.47c0 .246.152.466.382.556l26.132 10.112a.598.598 0 00.557-.068l23.063-16.163a.594.594 0 00.254-.488V86.53a.594.594 0 00-.252-.488L99.515 51.407zm-46.26 102.968a.597.597 0 01-.383-.556v-15.122c0-.222.123-.426.32-.528l39.581-20.644c.152-.08.33-.09.49-.028l19.332 7.481c.445.172.518.77.127 1.044l-46.927 32.886a.599.599 0 01-.556.068l-11.985-4.601z',
        fill: '#030712',
      }),
      h('path', {
        d: 'M53.139 138.149a.596.596 0 00-.32.528v15.199c0 .247.152.469.383.557l12.055 4.606a.593.593 0 00.555-.069l47.018-32.958a.595.595 0 00-.126-1.043l-19.428-7.532a.603.603 0 00-.492.028L53.14 138.149z',
        fill: '#F43F5E',
      }),
      h('path', {
        d: 'M86.762 106.945a.596.596 0 01-.32.528l-32.774 17.095a.596.596 0 01-.872-.529v-91.56c0-.238.142-.454.361-.548l11.416-4.883a.597.597 0 01.578.061L86.51 42.151a.595.595 0 01.252.488v64.306z',
        fill: '#F97316',
      }),
      h('path', {
        d: 'M99.434 51.256a.596.596 0 00-.939.487v54.643c0 .246.151.466.38.555l26.259 10.191a.595.595 0 00.558-.069l23.092-16.237a.597.597 0 00.254-.488V86.5a.598.598 0 00-.253-.488l-49.35-34.756z',
        fill: '#EC4899',
      }),
      h('rect', {
        x: 5,
        y: 5,
        width: 176,
        height: 176,
        rx: 18,
        stroke: 'url(#paint0_linear_676_2305)',
        strokeWidth: 4,
      }),
    ),
    h(
      'defs',
      null,
      h(
        'filter',
        {
          id: 'filter0_d_676_2305',
          x: 0,
          y: 0,
          width: 186,
          height: 186,
          filterUnits: 'userSpaceOnUse',
          colorInterpolationFilters: 'sRGB',
        },
        h('feFlood', {
          floodOpacity: 0,
          result: 'BackgroundImageFix',
        }),
        h('feColorMatrix', {
          in: 'SourceAlpha',
          values: '0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0',
          result: 'hardAlpha',
        }),
        h('feMorphology', {
          radius: 2,
          operator: 'dilate',
          in: 'SourceAlpha',
          result: 'effect1_dropShadow_676_2305',
        }),
        h('feOffset', null),
        h('feGaussianBlur', { stdDeviation: 0.5 }),
        h('feComposite', { in2: 'hardAlpha', operator: 'out' }),
        h('feColorMatrix', {
          values: '0 0 0 0 0.172549 0 0 0 0 0.172549 0 0 0 0 0.172549 0 0 0 1 0',
        }),
        h('feBlend', {
          in2: 'BackgroundImageFix',
          result: 'effect1_dropShadow_676_2305',
        }),
        h('feBlend', {
          in: 'SourceGraphic',
          in2: 'effect1_dropShadow_676_2305',
          result: 'shape',
        }),
      ),
      h(
        'linearGradient',
        {
          id: 'paint0_linear_676_2305',
          x1: 3,
          y1: 3,
          x2: 183,
          y2: 183,
          gradientUnits: 'userSpaceOnUse',
        },
        h('stop', { stopColor: '#ED4B9B' }),
        h('stop', {
          offset: 0.677083,
          stopColor: '#050505',
          stopOpacity: 0,
        }),
      ),
    ),
  );
}

function createHTMLLogo() {
  return h(
    'svg',
    {
      width: 64,
      height: 64,
      viewBox: '0 0 24 24',
      fill: 'none',
      xmlns: 'http://www.w3.org/2000/svg',
    },
    h('path', {
      fill: 'rgb(165 180 252)',
      d: 'm13.1 3.5l.7 1.1l.7-1.1V5h1V2h-1l-.7 1.1l-.6-1.1h-1.1v3h1zM18.4 5V4H17V2h-1v3zM9.8 5h1V3h.9V2H8.9v1h.9zM6.6 4h.9v1h1V2h-1v1h-.9V2h-1v3h1zM5 6l1.2 14.4L12 22l5.8-1.6L19 6H5zm11.3 4.6H9.5l.2 1.8h6.4l-.5 5.5l-3.6 1l-3.6-1l-.3-2.9h1.8l.1 1.5l2 .5l2-.5l.2-2.3H8l-.5-5.3h9l-.2 1.7z',
    }),
  );
}

function createReactLogo() {
  return h(
    'svg',
    {
      width: 64,
      height: 64,
      viewBox: '0 0 64 64',
      fill: 'none',
      xmlns: 'http://www.w3.org/2000/svg',
    },
    h('path', {
      d: 'M32.001 37.1739C34.886 37.1739 37.2247 34.8352 37.2247 31.9502C37.2247 29.0653 34.886 26.7266 32.001 26.7266C29.1161 26.7266 26.7773 29.0653 26.7773 31.9502C26.7773 34.8352 29.1161 37.1739 32.001 37.1739Z',
      fill: 'rgb(165 180 252)',
    }),
    h('path', {
      fillRule: 'evenodd',
      clipRule: 'evenodd',
      d: 'M32.0005 21.3291C39.014 21.3291 45.5293 22.3355 50.4419 24.0267C56.3608 26.0644 60 29.1531 60 31.9499C60 34.8644 56.1432 38.1457 49.787 40.2517C44.9816 41.8438 38.6581 42.6749 32.0005 42.6749C25.1746 42.6749 18.7109 41.8948 13.8513 40.2342C7.70313 38.1327 4 34.8089 4 31.9499C4 29.1758 7.47468 26.111 13.3104 24.0764C18.2413 22.3572 24.9175 21.3291 31.9995 21.3291H32.0005Z',
      stroke: 'rgb(165 180 252)',
      strokeWidth: '2.73408',
    }),
    h('path', {
      fillRule: 'evenodd',
      clipRule: 'evenodd',
      d: 'M22.756 26.6708C26.2599 20.5953 30.3864 15.454 34.3057 12.0432C39.0278 7.93378 43.5215 6.32442 45.9442 7.72147C48.4691 9.17746 49.3847 14.1579 48.0337 20.716C47.0133 25.6742 44.5732 31.5671 41.2472 37.3344C37.8371 43.2475 33.9324 48.4571 30.0665 51.8362C25.1747 56.1125 20.4453 57.66 17.9686 56.2317C15.5654 54.8468 14.6464 50.3049 15.7993 44.233C16.7734 39.1027 19.2179 32.8057 22.7549 26.6707L22.756 26.6708Z',
      stroke: 'rgb(165 180 252)',
      strokeWidth: '2.73408',
    }),
    h('path', {
      fillRule: 'evenodd',
      clipRule: 'evenodd',
      d: 'M22.7638 37.3504C19.2501 31.2817 16.8578 25.1378 15.8592 20.0389C14.6572 13.8955 15.5071 9.19841 17.9276 7.79729C20.4499 6.33703 25.2221 8.03095 30.229 12.4767C34.0146 15.8379 37.9018 20.8939 41.2375 26.6558C44.6574 32.5632 47.2206 38.548 48.2177 43.5848C49.4794 49.9587 48.4582 54.8287 45.9839 56.2611C43.583 57.651 39.1897 56.1794 34.505 52.1481C30.5469 48.7422 26.3122 43.4793 22.7638 37.3503V37.3504Z',
      stroke: 'rgb(165 180 252)',
      strokeWidth: '2.73408',
    }),
  );
}

interface JSXNode {
  type: string;
  props: Record<string, any> | null;
}

function h(type: string, props: JSXNode['props'] = null, ...children: any[]): JSXNode {
  return {
    type,
    props: {
      ...props,
      children,
    },
  };
}
