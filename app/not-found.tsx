const NotFound = () => {
  return (
    <div className="min-h-screen flex items-center justify-center flex-col gap-4">
      <h1 className="text-2xl font-bold">Woops! Seems like you missed it</h1>
      <a  href="/" className={buttonStyles}>Press here to go back
      </a>
    </div>
  )
}

const buttonStyles = "bg-brand text-white px-4 py-2 rounded-md"

export default NotFound