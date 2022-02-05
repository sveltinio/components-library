import '@testing-library/jest-dom';
import { render } from '@testing-library/svelte';
import GitHubButton from '../components/github/GitHubButton.svelte';

describe('GitHubButton', () => {
	it('should be in the document', async () => {
		const { container } = render(GitHubButton, {
			props: {
				username: 'sveltinio',
				repo: 'sveltin',
				action: 'star'
			}
		});
		expect(container).toBeInTheDocument();
	});

	it('should props defined', async () => {
		const { getByTestId } = render(GitHubButton, {
			props: {
				username: 'sveltinio',
				repo: 'sveltin',
				action: 'star'
			}
		});
		const githubLink = getByTestId('githubLink');
		expect(githubLink).toHaveClass('github-button');
		expect(githubLink).toHaveAccessibleDescription();
		expect(githubLink).toHaveAttribute('href', 'https://github.com/sveltinio/sveltin/star');
		expect(githubLink).toHaveAttribute('target', '_blank');
	});

	it('should have star as text content', async () => {
		const { getByTestId } = render(GitHubButton, {
			props: {
				username: 'sveltinio',
				repo: 'sveltin',
				action: 'star'
			}
		});
		const githubLink = getByTestId('githubLink');
		expect(githubLink).toHaveTextContent('Star');
	});

	it('should have the star icon', async () => {
		const { getByTestId } = render(GitHubButton, {
			props: {
				username: 'sveltinio',
				repo: 'sveltin',
				action: 'star'
			}
		});
		const githubLink = getByTestId('githubLink');
		const starIcon = getByTestId('starIcon');
		expect(githubLink).toContainElement(starIcon);
	});

	it('should have the follow icon and github username text', async () => {
		const { getByTestId } = render(GitHubButton, {
			props: {
				username: 'sveltinio',
				repo: 'sveltin',
				action: 'follow'
			}
		});
		const githubLink = getByTestId('githubLink');
		const followIcon = getByTestId('followIcon');
		expect(githubLink).toContainElement(followIcon);
		expect(githubLink).toHaveTextContent('Follow @sveltinio');
	});

	it('should have the issue icon', async () => {
		const { getByTestId } = render(GitHubButton, {
			props: {
				username: 'sveltinio',
				repo: 'sveltin',
				action: 'issue'
			}
		});
		const githubLink = getByTestId('githubLink');
		const issueIcon = getByTestId('issueIcon');
		expect(githubLink).toContainElement(issueIcon);
	});

	it('should have the watch icon', async () => {
		const { getByTestId } = render(GitHubButton, {
			props: {
				username: 'sveltinio',
				repo: 'sveltin',
				action: 'watch'
			}
		});
		const githubLink = getByTestId('githubLink');
		const watchIcon = getByTestId('watchIcon');
		expect(githubLink).toContainElement(watchIcon);
	});
});
