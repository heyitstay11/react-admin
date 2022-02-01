import { RotateRight } from '@material-ui/icons';
import './Loader.css';

const Loader = () => {
    return (
        <div className="loaderContainer">
            <RotateRight className='loadingIcon'/>
            <p className='loadingText' >Loading Please Wait ...</p>
        </div>
    )
}

export default Loader;