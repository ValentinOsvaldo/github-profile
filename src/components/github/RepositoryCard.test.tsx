import { render } from '@testing-library/react';
import { RepositoryCard } from './RepositoryCard';

const repository = {
  id: 625364800,
  node_id: 'R_kgDOJUZPQA',
  name: '08-sockets',
  full_name: 'ValentinOsvaldo/08-sockets',
  private: false,
  owner: {
    login: 'ValentinOsvaldo',
    id: 69062379,
    node_id: 'MDQ6VXNlcjY5MDYyMzc5',
    avatar_url: 'https://avatars.githubusercontent.com/u/69062379?v=4',
    gravatar_id: '',
    url: 'https://api.github.com/users/ValentinOsvaldo',
    html_url: 'https://github.com/ValentinOsvaldo',
    followers_url: 'https://api.github.com/users/ValentinOsvaldo/followers',
    following_url:
      'https://api.github.com/users/ValentinOsvaldo/following{/other_user}',
    gists_url: 'https://api.github.com/users/ValentinOsvaldo/gists{/gist_id}',
    starred_url:
      'https://api.github.com/users/ValentinOsvaldo/starred{/owner}{/repo}',
    subscriptions_url:
      'https://api.github.com/users/ValentinOsvaldo/subscriptions',
    organizations_url: 'https://api.github.com/users/ValentinOsvaldo/orgs',
    repos_url: 'https://api.github.com/users/ValentinOsvaldo/repos',
    events_url: 'https://api.github.com/users/ValentinOsvaldo/events{/privacy}',
    received_events_url:
      'https://api.github.com/users/ValentinOsvaldo/received_events',
    type: 'User',
    user_view_type: 'public',
    site_admin: false,
  },
  html_url: 'https://github.com/ValentinOsvaldo/08-sockets',
  description: 'NodeJs Course by Fernando Herrera, ',
  fork: false,
  url: 'https://api.github.com/repos/ValentinOsvaldo/08-sockets',
  forks_url: 'https://api.github.com/repos/ValentinOsvaldo/08-sockets/forks',
  keys_url:
    'https://api.github.com/repos/ValentinOsvaldo/08-sockets/keys{/key_id}',
  collaborators_url:
    'https://api.github.com/repos/ValentinOsvaldo/08-sockets/collaborators{/collaborator}',
  teams_url: 'https://api.github.com/repos/ValentinOsvaldo/08-sockets/teams',
  hooks_url: 'https://api.github.com/repos/ValentinOsvaldo/08-sockets/hooks',
  issue_events_url:
    'https://api.github.com/repos/ValentinOsvaldo/08-sockets/issues/events{/number}',
  events_url: 'https://api.github.com/repos/ValentinOsvaldo/08-sockets/events',
  assignees_url:
    'https://api.github.com/repos/ValentinOsvaldo/08-sockets/assignees{/user}',
  branches_url:
    'https://api.github.com/repos/ValentinOsvaldo/08-sockets/branches{/branch}',
  tags_url: 'https://api.github.com/repos/ValentinOsvaldo/08-sockets/tags',
  blobs_url:
    'https://api.github.com/repos/ValentinOsvaldo/08-sockets/git/blobs{/sha}',
  git_tags_url:
    'https://api.github.com/repos/ValentinOsvaldo/08-sockets/git/tags{/sha}',
  git_refs_url:
    'https://api.github.com/repos/ValentinOsvaldo/08-sockets/git/refs{/sha}',
  trees_url:
    'https://api.github.com/repos/ValentinOsvaldo/08-sockets/git/trees{/sha}',
  statuses_url:
    'https://api.github.com/repos/ValentinOsvaldo/08-sockets/statuses/{sha}',
  languages_url:
    'https://api.github.com/repos/ValentinOsvaldo/08-sockets/languages',
  stargazers_url:
    'https://api.github.com/repos/ValentinOsvaldo/08-sockets/stargazers',
  contributors_url:
    'https://api.github.com/repos/ValentinOsvaldo/08-sockets/contributors',
  subscribers_url:
    'https://api.github.com/repos/ValentinOsvaldo/08-sockets/subscribers',
  subscription_url:
    'https://api.github.com/repos/ValentinOsvaldo/08-sockets/subscription',
  commits_url:
    'https://api.github.com/repos/ValentinOsvaldo/08-sockets/commits{/sha}',
  git_commits_url:
    'https://api.github.com/repos/ValentinOsvaldo/08-sockets/git/commits{/sha}',
  comments_url:
    'https://api.github.com/repos/ValentinOsvaldo/08-sockets/comments{/number}',
  issue_comment_url:
    'https://api.github.com/repos/ValentinOsvaldo/08-sockets/issues/comments{/number}',
  contents_url:
    'https://api.github.com/repos/ValentinOsvaldo/08-sockets/contents/{+path}',
  compare_url:
    'https://api.github.com/repos/ValentinOsvaldo/08-sockets/compare/{base}...{head}',
  merges_url: 'https://api.github.com/repos/ValentinOsvaldo/08-sockets/merges',
  archive_url:
    'https://api.github.com/repos/ValentinOsvaldo/08-sockets/{archive_format}{/ref}',
  downloads_url:
    'https://api.github.com/repos/ValentinOsvaldo/08-sockets/downloads',
  issues_url:
    'https://api.github.com/repos/ValentinOsvaldo/08-sockets/issues{/number}',
  pulls_url:
    'https://api.github.com/repos/ValentinOsvaldo/08-sockets/pulls{/number}',
  milestones_url:
    'https://api.github.com/repos/ValentinOsvaldo/08-sockets/milestones{/number}',
  notifications_url:
    'https://api.github.com/repos/ValentinOsvaldo/08-sockets/notifications{?since,all,participating}',
  labels_url:
    'https://api.github.com/repos/ValentinOsvaldo/08-sockets/labels{/name}',
  releases_url:
    'https://api.github.com/repos/ValentinOsvaldo/08-sockets/releases{/id}',
  deployments_url:
    'https://api.github.com/repos/ValentinOsvaldo/08-sockets/deployments',
  created_at: '2023-04-08T22:11:02Z',
  updated_at: '2023-04-08T22:16:47Z',
  pushed_at: '2023-04-08T22:16:44Z',
  git_url: 'git://github.com/ValentinOsvaldo/08-sockets.git',
  ssh_url: 'git@github.com:ValentinOsvaldo/08-sockets.git',
  clone_url: 'https://github.com/ValentinOsvaldo/08-sockets.git',
  svn_url: 'https://github.com/ValentinOsvaldo/08-sockets',
  homepage: null,
  size: 10,
  stargazers_count: 0,
  watchers_count: 0,
  language: 'JavaScript',
  has_issues: true,
  has_projects: true,
  has_downloads: true,
  has_wiki: true,
  has_pages: false,
  has_discussions: false,
  forks_count: 0,
  mirror_url: null,
  archived: false,
  disabled: false,
  open_issues_count: 0,
  license: null,
  allow_forking: true,
  is_template: false,
  web_commit_signoff_required: false,
  topics: [],
  visibility: 'public',
  forks: 0,
  open_issues: 0,
  watchers: 0,
  default_branch: 'main',
};

describe('Repository Card', () => {
  it('Render component', () => {
    const card = render(<RepositoryCard repository={repository} />);

    expect(card).toMatchSnapshot();
  });
});
