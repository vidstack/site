<script lang="ts">
  import MockTerminal from '../../mocks/terminal/mock-terminal.svelte';
  import { TerminalPromptType, type TerminalPrompt } from '../../mocks/terminal/types';

  const prompts: TerminalPrompt[] = [
    {
      type: TerminalPromptType.Text,
      text: 'vidstack login',
      loadDuration: 250,
      process: ['Hey, Charlie!'],
    },
    'vidstack init',
    {
      type: TerminalPromptType.List,
      select: 1,
      options: ['Create New Project', "Charlie's Site (casts.gg)"],
      process: ['Updated Pre-Push Hook.', 'Git LFS Initialized.'],
    },
    {
      type: TerminalPromptType.Text,
      text: 'git status',
      process: [
        'On branch main',
        'Changes not staged for commit:',
        { type: 'diff-neg', text: 'app/videos/installation.mp4' },
        { type: 'diff-neg', text: 'app/videos/project-tour.mp4' },
      ],
    },
    'git add .',
    'git commit -m "new course videos"',
    {
      type: TerminalPromptType.Text,
      text: 'git push',
      process: [
        {
          type: 'progress',
          duration: 500,
          text(percent) {
            const files = percent === 100 ? 2 : percent >= 50 ? 1 : 0,
              totalMb = 175,
              totalUploaded = (percent / 100) * totalMb;
            return `Git LFS: (${files} of 2 files) ${totalUploaded.toFixed(0)} MB / 175 MB`;
          },
        },
        'Uploaded to https://vidstack.io/casts',
      ],
    },
  ];
</script>

<MockTerminal directory="next-app" {prompts} initialDelay={1000} />
