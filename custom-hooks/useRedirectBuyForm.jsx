import { useNavigate } from "react-router-dom"
import { Button } from "@mantine/core"

const useRedirectBuyForm = ({title,price}) => {

    const navigate = useNavigate()

  return (
        <Button
            variant="gradient"
            type="submit"
            gradient={{ from: 'blue', to: 'cyan', deg: 90 }}
            style={{ width: '100px' }}
            onClick={() => navigate(`/buy`,{ state : { title: title, price: price}})}
        >
            Create account
        </Button>
  )
}

export default useRedirectBuyForm