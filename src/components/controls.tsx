import React from 'react';

const ControlPanel = ({ name, onChange }: ControlPanelProps) => {
  return (
    <form
      className="bg-primary-10 flex flex-row gap-4 text-white"
      onSubmit={(event) => event.preventDefault()}
    >
      <div>
        <label className="font-bold">Your Name</label>
        <input
          name="name"
          className="w-full"
          type="text"
          value={name}
          onChange={onChange}
        />
      </div>
    </form>
  );
};

type ControlPanelProps = {
  name: string;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
};

export default ControlPanel;
