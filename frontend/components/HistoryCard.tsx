interface HistoryCardProps {
  icon: string;
  title: string;
  description: string;
}

export default function HistoryCard({ icon, title, description }: HistoryCardProps) {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-4">
        <span className="text-2xl">{icon}</span>
      </div>
      <h3 className="text-xl font-bold text-gray-900 mb-3">{title}</h3>
      <p className="text-gray-600 leading-relaxed">{description}</p>
    </div>
  );
}
