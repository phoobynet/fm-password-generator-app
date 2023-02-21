import GenerateBtn from '@/components/GenerateBtn'

export default function Demo() {
  const buttonClickHandler = () => {
    console.log('Button clicked')
  }

  return (
    <div>
      <GenerateBtn />
    </div>
  )
}
