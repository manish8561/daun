interface PrayerItem {
  name: string;
  time: string;
}

const prayerSchedule: PrayerItem[] = [
  { name: "Morning Prayer (Prakash)", time: "3:00 AM - 5:00 AM" },
  { name: "Asa Di Var", time: "5:00 AM - 7:00 AM" },
  { name: "Rehras Sahib", time: "6:00 PM - 7:00 PM" },
  { name: "Sukh Asan (Closing)", time: "9:00 PM - 10:00 PM" }
];

export default function PrayerSchedule() {
  return (
    <div className="bg-white border border-gray-200 rounded-lg shadow-md overflow-hidden">
      <div className="bg-blue-900 text-white p-4">
        <h3 className="text-xl font-bold">Prayer Schedule</h3>
      </div>
      <div className="p-6">
        <div className="space-y-4">
          {prayerSchedule.map((prayer, index) => (
            <div
              key={index}
              className={`flex justify-between items-center py-3 ${
                index < prayerSchedule.length - 1 ? "border-b border-gray-200" : ""
              }`}
            >
              <span className="font-semibold text-gray-900">{prayer.name}</span>
              <span className="text-gray-600">{prayer.time}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
