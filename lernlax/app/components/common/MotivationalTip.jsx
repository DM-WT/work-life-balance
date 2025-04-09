export default function MotivationalTip({ title, text }) {
    return (
      <div className="bg-yellow-100 p-3 rounded-lg">
        <h4 className="font-semibold">{title}</h4>
        <p className="text-sm">{text}</p>
      </div>
    );
  }