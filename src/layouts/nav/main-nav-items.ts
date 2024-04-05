import BookOpenIcon from '~icons/lucide/book-open';
import BoxesIcon from '~icons/lucide/boxes';
import FileBoxIcon from '~icons/lucide/file-box';
import NewspaperIcon from '~icons/lucide/newspaper';
import SparkleIcon from '~icons/lucide/sparkle';
import WallpaperIcon from '~icons/lucide/wallpaper';

import type { NavItem } from './nav-items';

export const mainNavItems: NavItem[] = [
  { title: 'Docs', href: '/docs/player' },
  { title: 'Icons', href: '/media-icons' },
  {
    title: 'Releases',
    href: 'https://github.com/vidstack/player/discussions/categories/releases',
  },
];
