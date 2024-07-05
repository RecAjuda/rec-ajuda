export const ModalRisk = () => {
  return (
    <div className="absolute z-20 right-2 bottom-12 rounded-lg  bg-stone-50 p-2 flex flex-col justify-center items-start gap-1">
      <div className="flex items-center gap-1">
        <div className="w-4 h-4 bg-red-500 rounded-full" />
        <p className="font-bold text-sm">Risco muito alto</p>
      </div>

      <div className="flex items-center gap-1">
        <div className="w-4 h-4 bg-orange-500 rounded-full" />
        <p className="font-bold text-sm">Risco alto</p>
      </div>
      <div className="flex items-center gap-1">
        <div className="w-4 h-4 bg-yellow-500 rounded-full" />
        <p className="font-bold text-sm">Risco moderado</p>
      </div>
      <div className="flex items-center gap-1">
        <div className="w-4 h-4 bg-green-400 rounded-full" />
        <p className="font-bold text-sm">Risco baixo</p>
      </div>
    </div>
  );
};
