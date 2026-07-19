import { ModeToggle } from '@/components/ui/mode-toggle';
import { UserButton } from '@clerk/nextjs';

export default function Home() {
  return (
    <h1>
      Hello World
      <ModeToggle />
      <UserButton />
    </h1>
  );
}
