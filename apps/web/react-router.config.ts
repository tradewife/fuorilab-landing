import type { Config } from '@react-router/dev/config';

export default {
	appDirectory: './src/app',
	ssr: true,
	// Temporarily disable prerendering during the build process.
	// Re-enable once the underlying SSR issues are resolved.
	prerender: [],
} satisfies Config;
