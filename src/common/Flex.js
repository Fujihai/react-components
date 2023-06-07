export const Flex = ({ children }) => {
  return (
    <div
      style={{
        display: "flex",
        gap: "8px",
        flexWrap: "wrap",
        padding: "16px 20px",
      }}
    >
      {children}
    </div>
  );
};
