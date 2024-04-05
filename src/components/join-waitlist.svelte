<script lang="ts">
  import clsx from 'clsx';

  import { isDarkColorScheme } from '../stores/color-scheme';
  import Button from './button.svelte';
  import Dialog from './dialog.svelte';
  import Select from './select.svelte';
  import IndeterminateLoadingSpinner from './style/indeterminate-loading-spinner.svelte';
  import TextGradient from './text-gradient.svelte';

  export let primary = false;
  export let gradient = false;

  let submitting = false,
    submitAttempted = false,
    success = false,
    failed = false,
    email = '',
    products = '',
    streamingProvider = '',
    uploadsPerMonth = '';

  function onEmailChange(event: Event) {
    email = (event.target as HTMLInputElement).value;
  }

  async function onSubmit(event: SubmitEvent) {
    event.preventDefault();

    submitAttempted = true;
    if (!email || !products || !streamingProvider || !uploadsPerMonth) return;
    submitting = true;

    const response = await fetch('/waitlist', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email,
        products,
        stream: streamingProvider,
        uploads: uploadsPerMonth,
      }),
    });

    submitting = false;
    success = response.status === 200;
    failed = response.status !== 200;
  }

  $: readonly = submitting || success;
</script>

<Dialog {primary} arrow {gradient}>
  <span slot="trigger">Join Waitlist</span>

  <div
    class="flex w-full flex-1 flex-col items-center px-4"
    style={clsx(
      success &&
        '--from-color: var(--form-success-gradient-start); --to-color: var(--form-success-gradient-end);',
      failed &&
        '--from-color: var(--form-error-gradient-start); --to-color: var(--form-error-gradient-end);',
      !success &&
        !failed &&
        '--from-color: var(--default-gradient-start); --to-color: var(--default-gradient-end);',
    )}
    slot="content"
  >
    <h1 class="mb-1 text-center text-4xl font-bold transition-colors duration-500">
      <TextGradient>
        {#if failed}
          Request Failed
        {:else if success}
          Request Sent
        {:else}
          Request Access
        {/if}
      </TextGradient>
    </h1>

    <p class="mt-2 max-w-[320px] text-center leading-snug text-soft">
      {#if failed}
        Something went wrong. Please try again.
      {:else if success}
        We'll be in touch as soon as we're ready!
      {:else}
        Join our waitlist and we'll reach out to you as soon as possible!
      {/if}
    </p>

    <form class="mt-10 w-full flex-1 shrink-0" on:submit={onSubmit}>
      <label for="email"></label>
      <input
        id="email"
        type="email"
        class={clsx(
          'w-full rounded-sm border border-border/90 bg-transparent px-2.5 py-2 text-inverse',
          'text-sm placeholder:text-soft',
          !readonly ? 'hocus:border-inverse/90' : 'cursor-default',
        )}
        required
        placeholder="Email"
        {readonly}
        on:change={onEmailChange}
      />

      <Select
        class="mt-4 w-full"
        label="Interested products"
        state={submitAttempted && !products ? 'error' : 'default'}
        options={[
          { label: 'All', value: 'all' },
          { label: 'Analytics', value: 'analytics' },
          { label: 'CMS', value: 'cms' },
          { label: 'Git Integration', value: 'git' },
          { label: 'Next.js Integration', value: 'next' },
          { label: 'Storage', value: 'storage' },
          { label: 'Streaming', value: 'streaming' },
        ]}
        multiple
        required
        all
        disabled={readonly}
        on:change={({ detail: values }) => {
          products = values.join(',');
        }}
      />

      <Select
        class="mt-4 w-full"
        label="Current streaming provider"
        state={submitAttempted && !streamingProvider ? 'error' : 'default'}
        options={[
          { label: 'AWS Media Services', value: 'aws' },
          { label: 'Cloudflare Stream', value: 'cf' },
          { label: 'JW Player', value: 'jw' },
          { label: 'Mux', value: 'mux' },
          { label: 'Vimeo', value: 'vimeo' },
          { label: 'YouTube', value: 'yt' },
          { label: 'Wistia', value: 'wistia' },
          { label: 'Custom', value: 'custom' },
        ]}
        required
        disabled={readonly}
        on:change={({ detail: values }) => {
          streamingProvider = values[0];
        }}
      />

      <Select
        class="mb-6 mt-4 w-full"
        label="Number of uploads per month"
        state={submitAttempted && !uploadsPerMonth ? 'error' : 'default'}
        options={[
          { label: '1 - 100 uploads p/m', value: 'xs' },
          { label: '100 - 500 uploads p/m', value: 'sm' },
          { label: '500 - 2.5k uploads p/m', value: 'md' },
          { label: '2.5k - 10k uploads p/m', value: 'lg' },
          { label: '10k+ uploads p/m', value: 'xl' },
        ]}
        required
        disabled={readonly}
        on:change={({ detail: values }) => {
          uploadsPerMonth = values[0];
        }}
      />

      {#if success}
        <!--  -->
      {:else if submitting}
        <div class="flex w-full items-center justify-center rounded-md px-5 py-2.5">
          <IndeterminateLoadingSpinner class="mr-2" size={20} />
          Submitting
        </div>
      {:else}
        <Button
          type="submit"
          class={clsx('mb-2 w-full justify-center')}
          gradient={$isDarkColorScheme}
          primary={!$isDarkColorScheme}
        >
          Request Access
        </Button>
      {/if}
    </form>
  </div>
</Dialog>
