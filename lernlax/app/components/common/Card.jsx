export default function Card({ title, description, image }) {
  return (
    <div className="bg-white p-4 shadow rounded-xl max-w-sm">
      {image && <img src={image} alt="Card Image" className="mb-2 rounded" />}
      <h3 className="text-xl font-semibold mb-1">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
}