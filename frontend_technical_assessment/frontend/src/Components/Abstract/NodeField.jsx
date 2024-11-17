export const NodeField = ({ label, children }) => (
    <label style={{display: 'flex', gap: '4px', marginBottom: '4px'}}>
      {label}:
      {children}
    </label>
  );