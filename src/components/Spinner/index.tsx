export default function Spinner() {
  return (
    <div className='fixed top-0 left-0 right-0 bottom-0 z-50 flex items-center justify-center h-screen'>
      <div className='relative'>
        <div className='h-24 w-24 rounded-full border-t-8 border-b-8 border-gray-200' />
        <div className='absolute top-0 left-0 h-24 w-24 rounded-full border-t-8 border-b-8 border-blue-500 animate-spin'></div>
      </div>
    </div>
  )
}
