const ErrorWindow = () => {
  return (
    <div className="bg-red-400 border-[5px] border-solid border-red-600 p-[15px] m-auto flex flex-col items-center">
      <span>Произошла ошибка</span>
      <span>Перезагрузите страницу</span>
    </div>
  );
};

export default ErrorWindow;
