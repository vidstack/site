import { ImageResponse } from '@vercel/og';
import type { APIRoute } from 'astro';

const host = import.meta.env.DEV ? 'http://localhost:4321' : 'https://vidstack.io',
  Logo = createLogo();

export const GET: APIRoute = async ({ request }) => {
  try {
    const calFont = await fetch(`${host}/Cal.ttf`).then((res) => res.arrayBuffer()),
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
          paddingTop: '140px',
          paddingBottom: '180px',
          paddingLeft: '140px',
          paddingRight: '140px',
          background: '#050505',
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          fontFamily: 'Cal Sans',
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
              fontWeight: 500,
              color: 'white',
              fontSize: '84px',
              marginLeft: '28px',
              marginBottom: '12px',
            },
          },
          `Player`,
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
          h(
            'span',
            {
              style: {
                color: 'white',
                fontSize: '56px',

                fontWeight: 500,
              },
            },
            category,
          ),
        ),
        h(
          'span',
          {
            style: {
              color: 'white',
              fontSize: '132px',

              fontWeight: 500,
              marginTop: '24px',
            },
          },
          title,
        ),
        h(
          'span',
          {
            style: {
              color: 'white',
              opacity: '0.6',
              fontSize: '62px',
              fontWeight: 400,
              marginTop: '40px',
            },
          },
          description,
        ),
      ),
    );

    return new ImageResponse(html as any, {
      width: 2560,
      height: 1280,
      fonts: [{ name: 'Cal Sans', data: calFont, style: 'normal' }],
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
      width: 100,
      height: 100,
      viewBox: '0 0 48 48',
      fill: 'none',
      xmlns: 'http://www.w3.org/2000/svg',
    },
    h('path', {
      d: 'M13.3706 36.0395C13.3181 36.067 13.2852 36.1213 13.2852 36.1804V40.2336C13.2852 40.2994 13.3258 40.3585 13.3874 40.382L16.6022 41.6103C16.6516 41.6292 16.7069 41.6222 16.7501 41.5919L29.2883 32.8031C29.3924 32.7303 29.373 32.5707 29.2546 32.5248L24.0739 30.5165C24.0312 30.5001 23.9834 30.5027 23.9428 30.5239L13.3706 36.0395Z',
      fill: 'white',
    }),
    h('path', {
      d: 'M22.337 27.7184C22.337 27.7775 22.3041 27.8319 22.2516 27.8592L13.5117 32.418C13.4059 32.4731 13.2793 32.3963 13.2793 32.2769V7.86093C13.2793 7.79732 13.3172 7.73983 13.3757 7.71481L16.4199 6.4127C16.4705 6.39104 16.5287 6.39716 16.5739 6.42889L22.2696 10.4402C22.312 10.4699 22.337 10.5184 22.337 10.5701V27.7184Z',
      fill: 'white',
    }),
    h('path', {
      d: 'M25.7172 12.8681C25.6119 12.794 25.4668 12.8693 25.4668 12.9981V27.5694C25.4668 27.6351 25.507 27.6939 25.5683 27.7177L32.5704 30.4351C32.6199 30.4543 32.6757 30.4475 32.7193 30.4169L38.8772 26.0868C38.9196 26.0571 38.9448 26.0086 38.9448 25.9568V22.2666C38.9448 22.2148 38.9196 22.1663 38.8774 22.1366L25.7172 12.8681Z',
      fill: 'white',
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
