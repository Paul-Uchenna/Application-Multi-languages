export function aqiLevelColor(aqi: number): string {
  switch (aqi) {
    case 1:
      return "text-green-500";
    case 2:
      return "text-blue-500";
    case 3:
      return "text-yellow-500";
    case 4:
      return "text-orange-500";
    case 5:
      return "text-red-500";
    default:
      return "text-gray-500";
  }
}
