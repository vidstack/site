import type { CollectionEntry } from 'astro:content';

import type { ComponentLibrary } from './shared';

export const componentsCatalog: ComponentsCatalog = {
  Core: ['player/components/core/player.mdx', 'player/components/core/provider.mdx'],
  Layouts: [
    {
      title: 'Default Layout',
      id: 'player/components/layouts/default-layout.mdx',
      description: 'Our default production-ready experience packed with customization options.',
    },
    {
      title: 'Plyr Layout',
      id: 'player/components/layouts/plyr-layout.mdx',
      description:
        'Based on the original beautiful design by Sam Potts, this layout is a simple and elegant option.',
    },
  ],
  Display: [
    'player/components/display/announcer.mdx',
    'player/components/display/poster.mdx',
    'player/components/display/controls.mdx',
    'player/components/display/gesture.mdx',
    {
      title: 'Icons',
      id: 'player/components/display/icons.mdx',
      description: 'Beautifully hand-crafted collection of icons for media players.',
    },
    'player/components/display/title.mdx',
    'player/components/display/thumbnail.mdx',
    'player/components/display/time.mdx',
    'player/components/display/captions.mdx',
    'player/components/display/react/track.mdx',
    'player/components/display/chapter-title.mdx',
    'player/components/display/buffering-indicator.mdx',
  ],
  Buttons: [
    'player/components/buttons/toggle-button.mdx',
    'player/components/buttons/play-button.mdx',
    'player/components/buttons/mute-button.mdx',
    'player/components/buttons/caption-button.mdx',
    'player/components/buttons/pip-button.mdx',
    'player/components/buttons/fullscreen-button.mdx',
    'player/components/buttons/live-button.mdx',
    'player/components/buttons/seek-button.mdx',
    'player/components/buttons/airplay-button.mdx',
    'player/components/buttons/google-cast-button.mdx',
    'player/components/buttons/tooltip.mdx',
  ],
  Sliders: [
    'player/components/sliders/slider.mdx',
    'player/components/sliders/audio-gain-slider.mdx',
    'player/components/sliders/time-slider.mdx',
    'player/components/sliders/volume-slider.mdx',
    'player/components/sliders/speed-slider.mdx',
    'player/components/sliders/quality-slider.mdx',
    {
      title: 'Slider Preview',
      id: 'player/components/sliders/time-slider.mdx',
      description: `Used to provide users with a real-time or interactive preview of the value or selection they are making as they move the slider thumb.`,
      icon: 'sliders/slider-preview',
    },
    {
      title: 'Slider Value',
      id: 'player/components/sliders/slider.mdx',
      description:
        'This component is used to display the current value of a slider in various formats such as a raw value, percentage, or time.',
      icon: 'sliders/slider-value',
    },
    {
      title: 'Slider Video',
      id: 'player/components/sliders/time-slider.mdx',
      description: `Used to load a low-resolution video to be displayed when the user is hovering over or dragging the time slider.`,
      icon: 'sliders/slider-video',
    },
    {
      title: 'Slider Thumbnail',
      id: 'player/components/sliders/time-slider.mdx',
      description: `Used to display preview thumbnails when the user is hovering or dragging the time slider.`,
      icon: 'sliders/slider-thumbnail',
    },
    {
      title: 'Slider Chapters',
      id: 'player/components/sliders/time-slider.mdx',
      description: `Used to create predefined sections within a time slider interface based on the currently active chapters text track.`,
      icon: 'sliders/slider-chapters',
    },
    {
      title: 'Slider Steps',
      id: 'player/components/sliders/time-slider.mdx',
      description: `Visual markers that can be used to indicate value steps on the slider track.`,
      icon: 'sliders/slider-steps',
    },
  ],
  Menus: [
    'player/components/menus/menu.mdx',
    {
      title: 'Menu Button',
      description: `A button that controls the opening and closing of a menu component. The button will become a \`menuitem\` when used inside a submenu.`,
      id: 'player/components/menus/menu.mdx',
      icon: 'menus/menu-button',
    },
    {
      title: 'Menu Item',
      description: `Represents a specific option or action, typically displayed as a text label or icon, which users can select.`,
      id: 'player/components/menus/menu.mdx',
      icon: 'menus/menu-item',
    },
    {
      title: 'Menu Portal',
      description: `Portals menu items into a specified location, generally the document body.`,
      id: 'player/components/menus/menu.mdx',
      icon: 'menus/menu-portal',
    },
    'player/components/menus/radio-group.mdx',
    {
      title: 'Audio Radio Group',
      id: 'player/api/react/hooks/use-audio-options.mdx',
      icon: 'menus/audio-radio-group',
    },
    'player/components/menus/wc/audio-radio-group.mdx',
    {
      title: 'Audio Gain Radio Group',
      id: 'player/api/react/hooks/use-audio-gain-options.mdx',
      icon: 'menus/audio-gain-radio-group',
    },
    'player/components/menus/wc/audio-gain-radio-group.mdx',
    {
      title: 'Captions Radio Group',
      id: 'player/api/react/hooks/use-caption-options.mdx',
      icon: 'menus/captions-radio-group',
    },
    'player/components/menus/wc/captions-radio-group.mdx',
    {
      title: 'Chapters Radio Group',
      id: 'player/api/react/hooks/use-chapter-options.mdx',
      icon: 'menus/chapters-radio-group',
    },
    'player/components/menus/wc/chapters-radio-group.mdx',
    {
      title: 'Quality Radio Group',
      id: 'player/api/react/hooks/use-video-quality-options.mdx',
      icon: 'menus/quality-radio-group',
    },
    'player/components/menus/wc/quality-radio-group.mdx',
    {
      title: 'Speed Radio Group',
      id: 'player/api/react/hooks/use-playback-rate-options.mdx',
      icon: 'menus/speed-radio-group',
    },
    'player/components/menus/wc/speed-radio-group.mdx',
  ],
  Remotion: [
    'player/components/remotion/react/remotion-poster.mdx',
    'player/components/remotion/react/remotion-thumbnail.mdx',
    'player/components/remotion/react/remotion-slider-thumbnail.mdx',
  ],
};

export type ComponentsCatalog = Record<string, ComponentCatalogItem[]>;

export type ComponentCatalogItem = CollectionEntry<'docs'>['id'] | ComponentCatalogEntry;

export type ComponentCatalogEntry = {
  title: string;
  id: CollectionEntry<'docs'>['id'];
  description?: string;
  hash?: string;
  framework?: ComponentLibrary;
  icon?: string;
};
