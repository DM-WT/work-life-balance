export default function ResultSummary({ results }) {
    return (
      <div className="bg-white p-4 rounded-xl shadow">
        <h2 className="text-xl font-bold mb-4">Dein Ergebnis</h2>
        <table className="w-full text-left">
          <thead>
            <tr>
              <th>Thema</th>
              <th>Punkte</th>
            </tr>
          </thead>
          <tbody>
            {results.map((res, i) => (
              <tr key={i} className="border-t">
                <td>{res.topic}</td>
                <td>{res.score}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
  