import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { Github, LinkIcon, Loader2, MapPin, User } from 'lucide-react';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import type { User as IUser } from '@/interfaces/github/user';
import { Repository } from '@/interfaces/github/repository';
import { RepositoryCard } from '@/components/github/RepositoryCard';

type Status = 'idle' | 'pending' | 'success' | 'error';

export const ProfilePage = () => {
  const { id: username } = useParams();
  const [isTop, setIsTop] = useState(false);
  const [state, setState] = useState<{
    user: IUser | null;
    status: Status;
    repositories: Repository[];
    error?: Error;
  }>({
    user: null,
    status: 'idle',
    repositories: [],
    error: undefined,
  });
  const { error, repositories, status, user } = state;

  const getUserData = async () => {
    try {
      setState((prevState) => ({
        ...prevState,
        error: undefined,
        status: 'pending',
      }));

      const [userResponse, repositoriesResponse] = await Promise.all([
        fetch(`https://api.github.com/users/${username}`),
        fetch(`https://api.github.com/users/${username}/repos?per_page=100`),
      ]);

      if (!userResponse.ok)
        throw Error(
          `Error ${userResponse.status}: ${
            userResponse.statusText || 'Not found'
          }`
        );
      if (!repositoriesResponse.ok)
        throw Error(
          `Error ${repositoriesResponse.status}: ${
            userResponse.statusText || 'Not found'
          }`
        );

      const [userData, repositoriesData] = await Promise.all([
        userResponse.json(),
        repositoriesResponse.json(),
      ]);

      setState((prevState) => ({
        ...prevState,
        repositories: repositoriesData,
        status: 'success',
        user: userData,
      }));
    } catch (error) {
      console.error(error);
      if (error instanceof Error) {
        setState((prevState) => ({
          ...prevState,
          error: error,
          status: 'error',
        }));
      }
    }
  };

  useEffect(() => {
    getUserData();
  }, []);

  useEffect(() => {
    const onScroll = () => {
      setIsTop(window.scrollY !== 0);
    };
    window.addEventListener('scroll', onScroll);

    return () => {
      window.removeEventListener('scroll', onScroll);
    };
  }, []);

  if (status === 'pending') {
    return (
      <div className="container mx-auto p-4 flex items-center justify-center">
        <Loader2 className="w-8 h-8 animate-spin" />
      </div>
    );
  }

  if (status === 'error') {
    return (
      <div className="h-screen container mx-auto p-4 flex flex-col items-center justify-center">
        <p className="text-4xl text-destructive font-medium">
          {error ? error?.message : 'User without data'}
        </p>
        <Link to={'/'}>
          <Button variant={'link'}>Back</Button>
        </Link>
      </div>
    );
  }

  if (!user) {
    return <></>;
  }

  return (
    <div>
      <header
        className={`flex items-center p-4 sticky top-0 z-50 transition-colors duration-500 bg-slate-950/0 ${
          isTop ? 'bg-slate-950/90 backdrop-blur-sm' : ''
        }`}
      >
        <nav className="container mx-auto">
          <Link to={'/'}>
            <h1 className="text-2xl font-medium inline-flex items-center">
              <Github className="w-6 h-6 mr-2" />
              Github Profile
            </h1>
          </Link>
        </nav>
      </header>
      <main className="container mx-auto p-4 pt-8">
        <div className="flex flex-row flex-wrap gap-4">
          <Card className="lg:sticky lg:top-20 lg:w-fit lg:max-w-80 w-full h-fit">
            <CardContent className="p-4 flex flex-col gap-4">
              <Avatar className="max-w-80 max-h-80  w-full h-full">
                <AvatarImage src={user.avatar_url} alt={user.name} />
                <AvatarFallback>{user.login[0].toUpperCase()}</AvatarFallback>
              </Avatar>
              <div>
                <h1 className="text-2xl font-bold">{user.name}</h1>
                <h1 className="mb-2 text-base text-muted-foreground">
                  @{user.login}
                </h1>
                <h1>{user.bio ? user.bio : 'No bio'}</h1>
              </div>
            </CardContent>
            <CardFooter className="flex flex-col items-start text-sm">
              <div className="flex flex-col flex-wrap gap-2">
                <div className="flex flex-row flex-wrap gap-2 items-center">
                  <User className="w-4 h-4" />
                  <span>
                    {user.followers}{' '}
                    <span className="text-muted-foreground">Followers</span>
                  </span>
                  <span>•</span>
                  <span>
                    {user.following}{' '}
                    <span className="text-muted-foreground">following</span>
                  </span>
                </div>

                {user.location && (
                  <div className="flex flex-row flex-wrap gap-2 items-center">
                    <MapPin className="w-4 h-4" />
                    <span>{user.location}</span>
                  </div>
                )}

                <div className="flex flex-row flex-wrap gap-2 items-center">
                  <Github className="w-4 h-4" />
                  <span>
                    {`${user.public_repos} ${
                      user.public_repos > 1 ? 'repositories' : 'repository'
                    }`}
                  </span>
                </div>

                {user.blog && (
                  <div className="flex flex-row gap-2 items-center">
                    <LinkIcon className="w-4 h-4" />
                    <a
                      href={user.blog}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-500 flex items-center gap-1 hover:underline"
                    >
                      {user.blog}
                    </a>
                  </div>
                )}
              </div>
              <a
                href={user.html_url}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-3 text-blue-500 flex items-center gap-1 hover:underline"
              >
                <LinkIcon className="w-4 h-4" />
                View github profile
              </a>
            </CardFooter>
          </Card>

          <section className="grid gap-3 flex-1">
            <header className="mb-1">
              <h2 className="text-3xl font-medium">Repositories</h2>
            </header>
            <article className="grid lg:grid-cols-2 gap-4">
              {repositories.map((repository) => (
                <RepositoryCard key={repository.id} repository={repository} />
              ))}
            </article>
          </section>
        </div>
      </main>
    </div>
  );
};
