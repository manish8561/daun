export default function QRCodePayment() {
  return (
    <div className="flex flex-col items-center space-y-4">
      <div className="w-48 h-48 bg-gray-100 border-2 border-dashed border-gray-300 rounded-lg flex items-center justify-center">
        <div className="text-center">
          <div className="w-32 h-32 bg-white rounded-lg flex items-center justify-center mb-2">
            <svg className="w-24 h-24" viewBox="0 0 100 100" fill="none">
              {/* Sample QR Code Pattern */}
              <rect x="10" y="10" width="20" height="20" fill="black"/>
              <rect x="40" y="10" width="20" height="20" fill="black"/>
              <rect x="70" y="10" width="20" height="20" fill="black"/>
              <rect x="10" y="40" width="20" height="20" fill="black"/>
              <rect x="40" y="40" width="20" height="20" fill="white"/>
              <rect x="70" y="40" width="20" height="20" fill="black"/>
              <rect x="10" y="70" width="20" height="20" fill="black"/>
              <rect x="40" y="70" width="20" height="20" fill="black"/>
              <rect x="70" y="70" width="20" height="20" fill="black"/>
              <rect x="15" y="15" width="10" height="10" fill="white"/>
              <rect x="75" y="15" width="10" height="10" fill="white"/>
              <rect x="15" y="75" width="10" height="10" fill="white"/>
              <rect x="75" y="75" width="10" height="10" fill="white"/>
              {/* Center pattern */}
              <rect x="35" y="35" width="30" height="30" fill="black"/>
              <rect x="40" y="40" width="20" height="20" fill="white"/>
              <rect x="45" y="45" width="10" height="10" fill="black"/>
            </svg>
          </div>
          <p className="text-xs text-gray-500">Scan to Donate</p>
        </div>
      </div>
      <div className="text-center space-y-2">
        <p className="text-sm font-semibold text-gray-900">UPI ID:</p>
        <p className="text-sm text-blue-900 font-mono bg-blue-50 px-3 py-1 rounded">
          gurudwaradaun@upi
        </p>
        <p className="text-xs text-gray-500">or</p>
        <p className="text-sm font-semibold text-gray-900">Phone Number:</p>
        <p className="text-sm text-blue-900 font-mono bg-blue-50 px-3 py-1 rounded">
          +91 XXXXXXXXXX
        </p>
      </div>
    </div>
  );
}
