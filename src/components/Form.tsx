import type { FormEvent, RefObject } from 'react';

type FormProps = {
  onHandleSubmit: (e: FormEvent<HTMLFormElement>) => void;
  nameRef: RefObject<HTMLInputElement>;
  serverRef: RefObject<HTMLInputElement>;
};

function Form({ onHandleSubmit, nameRef, serverRef }: FormProps) {
  return (
    <div>
      <form action="" onSubmit={onHandleSubmit}>
        <p>
          <label htmlFor="name">Name</label>
          <input type="text" id="name" ref={nameRef} />
        </p>
        <p>
          <label htmlFor="server">Server</label>
          <input type="text" id="server" ref={serverRef} />
        </p>
        <p>
          <button>Find</button>
        </p>
      </form>
    </div>
  );
}
export default Form;
