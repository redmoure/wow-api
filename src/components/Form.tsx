import type { FormEvent } from 'react';

type FormProps = {
  onHandleSubmit: (e: FormEvent<HTMLFormElement>) => void;
};

function Form({ onHandleSubmit }: FormProps) {
  return (
    <div>
      <form action="" onSubmit={onHandleSubmit}>
        <p>
          <label htmlFor="name">Name</label>
          <input type="text" id="name" />
        </p>
        <p>
          <label htmlFor="server">Server</label>
          <input type="text" id="server" />
        </p>
        <p>
          <button>Find</button>
        </p>
      </form>
    </div>
  );
}
export default Form;
