import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Search } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

export const HomePage = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState<string>('');

  const handleChange = (ev: React.ChangeEvent<HTMLInputElement>) => {
    setUsername(ev.target.value);
  };

  const handleSubmit = async (ev: React.FormEvent<HTMLFormElement>) => {
    ev.preventDefault();

    if (username.length <= 0) {
      return;
    }

    navigate(`/profile/${username}`);
  };

  return (
    <main className="min-h-screen flex items-center justify-center p-4">
      <section className="max-w-md w-full">
        <h1 className="text-4xl font-bold text-center mb-4">Github Profiles</h1>
        <form onSubmit={handleSubmit}>
          <div className="flex flex-row gap-2">
            <Input
              placeholder="Ex. ValentinOsvaldo"
              name="username"
              value={username}
              onChange={handleChange}
            />
            <Button
              type="submit"
            >
              Search
              <Search className="w-4 h-4 ml-1" />
            </Button>
          </div>
        </form>
      </section>
    </main>
  );
};
