export const Loading = ({ message = "Loading..." }) => {
  return (
    <div className="flex flex-col items-center justify-center space-y-2">
      <div className="w-8 h-8 border-b-2 rounded-full border-stone-900 animate-spin"></div>
      <p className="text-xl font-semibold">{message}</p>
    </div>
  );
};
