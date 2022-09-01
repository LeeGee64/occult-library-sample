import loadStyles from './loading.module.css';
import Image from 'next/image';

export default function Loading (props){
    return (
        <div className={props.loading ? loadStyles.bodyLoading : loadStyles.none}>
            <h1 className={loadStyles.loadingTitle}>LOADING</h1>
            <div className={loadStyles.loadingImage}><Image
                src= '/Images/loading_images/sacredGeo.png' 
                height={100}
                width={100}
            /></div>      
        </div>
    );
}