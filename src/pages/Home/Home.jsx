import { useAuthContext } from "../../contexts/AuthContext";
import { types } from '../../reducers/AuthReducer';

export default function Home() {
    const { state, dispatch } = useAuthContext();

    const handleLogout = () => {
        localStorage.removeItem("Session");
        dispatch({ type: types.LOGOUT });
    }

    return (
        <div>{state.name}
            <button onClick={handleLogout}>Log Out</button>
        </div>
    )
}