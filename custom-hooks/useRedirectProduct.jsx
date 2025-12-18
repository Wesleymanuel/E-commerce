import { useNavigate} from "react-router-dom";
import { Button } from "@mantine/core"

const useRedirectProduct = ({id}) => {

    const navigate = useNavigate()

  return (
        <Button
            variant="gradient"
            gradient={{ from: 'blue', to: 'cyan', deg: 90 }}
            style={{ width: '100px' }}
            onClick={() => navigate(`/product/${id}`,{ state : { id: id}})}
        >
            viwe
        </Button>
  )
}

export default useRedirectProduct