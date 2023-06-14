import "./Switch.css";

export const Switch = (props) => {
  const { shape = "", onChange, disabled, checked } = props;

  const sliderCls = `slider ${shape}`;

  const handleChange = (evt) => {
    console.error(evt);
    onChange && onChange(evt.target.checked);
  };

  return (
    <label className="switch">
      <input
        type="checkbox"
        checked={checked}
        onChange={handleChange}
        disabled={disabled}
      />
      <span className={sliderCls} />
    </label>
  );
};
