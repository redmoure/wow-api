import { useState, type FormEvent } from 'react';
import CharPanel from './components/CharPanel';
import Form from './components/Form';

export type CharObj = {
  name: string;
  server: string;
};

export default function App() {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [character, setCharacter] = useState<CharObj>({ name: '', server: '' });

  function handleFormSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setIsLoading(true);
    setCharacter({ name: 'Amberian', server: 'Draenor' });
  }

  if (!isLoading)
    return (
      <div>
        <Form onHandleSubmit={handleFormSubmit}></Form>
      </div>
    );

  return (
    <div>
      <CharPanel></CharPanel>
    </div>
  );
}
