import { useState } from 'react';
import { GitBranch, Star } from 'lucide-react';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Repository } from '@/interfaces/github/repository';
import { Badge } from '../ui/badge';

interface Props {
  repository: Repository;
}

export const RepositoryCard: React.FC<Props> = ({ repository }) => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (event: React.MouseEvent<HTMLDivElement>) => {
    const rect = event.currentTarget.getBoundingClientRect();
    setPosition({
      x: event.clientX - rect.left,
      y: event.clientY - rect.top,
    });
  };

  return (
    <a
      href={repository.html_url}
      target="_blank"
      rel="noopener noreferrer"
      className="block h-full w-full"
    >
      <Card
        className="relative flex flex-col justify-between cursor-pointer h-full w-full"
        onMouseMove={handleMouseMove}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {isHovered && (
          <div
            className="pointer-events-none absolute inset-0 transition duration-300"
            style={{
              background: `radial-gradient(300px at ${position.x}px ${position.y}px, rgba(70, 123, 255, 0.15), transparent 80%)`,
            }}
          />
        )}
        <CardHeader>
          <CardTitle>{repository.name}</CardTitle>
          <CardDescription></CardDescription>
        </CardHeader>
        <CardContent>
          <div className="mb-2 text-muted-foreground">
            {repository.description ? repository.description : 'No description'}
          </div>

          <div className="flex flex-row gap-2">
            <Badge>
              {repository.language ? repository.language : 'Unknown'}
            </Badge>
          </div>
        </CardContent>
        <CardFooter className="flex flex-row gap-2 text-muted-foreground">
          <div className="flex items-center flex-row gap-2">
            <GitBranch className="w-4 h-4" />
            {repository.forks_count}
          </div>
          <div className="flex items-center flex-row gap-2">
            <Star className="w-4 h-4" />
            {repository.stargazers_count}
          </div>
          <div>{new Date(repository.updated_at).toDateString()}</div>
        </CardFooter>
      </Card>
    </a>
  );
};
