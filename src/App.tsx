import { useState, useRef, type FormEvent } from 'react';
import CharPanel from './components/CharPanel';
import Form from './components/Form';

export type CharObj = {
  name: string;
  server: string;
};

export default function App() {
  const [character, setCharacter] = useState<CharObj>({ name: '', server: '' });
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const nameRef = useRef<HTMLInputElement>(null);
  const serverRef = useRef<HTMLInputElement>(null);

  function handleFormSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const name = nameRef.current!.value;
    const server = serverRef.current!.value;
    setIsLoading(true);
    return setCharacter({ name: `${name}`, server: `${server}` });
  }

  if (!isLoading)
    return (
      <div>
        <Form
          onHandleSubmit={handleFormSubmit}
          nameRef={nameRef}
          serverRef={serverRef}
        ></Form>
      </div>
    );
  return (
    <div>
      <CharPanel character={character}></CharPanel>
    </div>
  );
}
