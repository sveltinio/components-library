import { render } from '@testing-library/svelte';
import { GitHubForkRibbon } from '..';

describe('GitHubForkRibbon', () => {
	it('should be in the document', async () => {
		const { container } = render(GitHubForkRibbon, {
			props: {
				username: 'sveltinio',
				repo: 'sveltin'
			}
		});
		expect(container).toBeInTheDocument();
	});

	it('should have a defined html structure', async () => {
		const { getByTestId } = render(GitHubForkRibbon, {
			props: {
				username: 'sveltinio',
				repo: 'sveltin'
			}
		});
		const wrapper = getByTestId('wrapper');
		const ribbon = getByTestId('ribbon');
		const githubLink = getByTestId('githubLink');
		expect(wrapper).toContainElement(ribbon);
		expect(ribbon).toContainElement(githubLink);
	});

	it('should props defined', async () => {
		const { getByTestId } = render(GitHubForkRibbon, {
			props: {
				username: 'sveltinio',
				repo: 'sveltin'
			}
		});
		const githubLink = getByTestId('githubLink');
		expect(githubLink).toHaveAccessibleDescription();
		expect(githubLink).toHaveAttribute('href', 'https://github.com/sveltinio/sveltin/fork');
		expect(githubLink).toHaveAttribute('target', '_blank');
	});
});
