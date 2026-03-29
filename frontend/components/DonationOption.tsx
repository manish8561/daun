interface DonationOptionProps {
  icon: string;
  title: string;
  description: string;
  children?: React.ReactNode;
}

export default function DonationOption({ icon, title, description, children }: DonationOptionProps) {
  return (
    <div className="bg-white border border-gray-200 rounded-lg shadow-md p-8">
      <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-4">
        <span className="text-2xl">{icon}</span>
      </div>
      <h3 className="text-xl font-bold text-gray-900 mb-3">{title}</h3>
      <p className="text-gray-600 mb-6">{description}</p>
      {children}
    </div>
  );
}
