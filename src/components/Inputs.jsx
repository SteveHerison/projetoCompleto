const Inputs = ({ id, value, setValue, label, ...rest }) => {
  return (
    <>
      <label htmlFor={id} className="text-white">
        {label}
      </label>
      <input
        type="text"
        value={value}
        onChange={({ target }) => setValue(target.value)}
        id={id}
        {...rest}
      />
    </>
  );
};

export default Inputs;
