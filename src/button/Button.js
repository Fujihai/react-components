import "./Button.css";
import { AiOutlineLoading } from "react-icons/ai";

export const Button = (props) => {
  // handle order: type -> shape -> size -> loading -> disabled
  const {
    size,
    // default/primary/ghost/dashed/link/text/
    type,
    onClick,
    children,
    disabled,
    loading,
    shape,
    style,
    block,
  } = props;

  const typeCls = `btn-${type || "default"}`;
  const sizeCls = `btn-size-${size || "default"}`;
  const blockCls = `btn-block`;
  const shapeCls = `btn-${shape}`;

  return (
    <button
      className={`${typeCls} ${sizeCls} ${block ? blockCls : ""} ${shapeCls}`}
      onClick={onClick}
      disabled={disabled}
      style={style}
    >
      {loading ? (
        <AiOutlineLoading className="btn-loading btn-icon-spinner" />
      ) : (
        ""
      )}
      {children}
    </button>
  );
};
