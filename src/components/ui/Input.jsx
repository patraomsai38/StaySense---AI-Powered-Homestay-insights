/**
 * Input Component
 * Props:
 * - label
 * - placeholder
 * - type
 * - value
 * - onChange
 * - error
 */

function Input({
  label,
  placeholder,
  type = "text",
  value,
  onChange,
  error,
}) {
  return (
    <div className="mb-4">
      <label className="block mb-2 font-medium">
        {label}
      </label>

      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className="w-full border p-3 rounded-lg"
      />

      {error && (
        <p className="text-red-500 text-sm mt-1">
          {error}
        </p>
      )}
    </div>
  );
}

export default Input;