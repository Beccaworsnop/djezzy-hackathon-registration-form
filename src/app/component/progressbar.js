import useFormStore from "./store"; // ✅ Correct path

const ProgressBar = () => {
  const { step } = useFormStore(); // ✅ Correct usage

  const progressWidth = () => {
    switch (step) {
      case 1:
        return "w-1/3";
      case 2:
        return "w-2/3";
      case 3:
        return "w-full";
      default:
        return "w-1/3";
    }
  };

  return (
    <div className="w-full bg-gray-800 h-4 rounded-md mt-4">
      <div className={`h-4 bg-red-600 rounded-md ${progressWidth()}`}></div>
    </div>
  );
};

export default ProgressBar;