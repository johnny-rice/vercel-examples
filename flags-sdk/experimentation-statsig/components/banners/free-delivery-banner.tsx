export function FreeDeliveryBanner(props: {
  show: boolean;
}) {
  if (!props.show) return null;

  return (
    <div className="px-4 py-2 bg-gray-950 text-white text-center text text-sm font-medium">
      Get free delivery on orders over $100
    </div>
  )
}