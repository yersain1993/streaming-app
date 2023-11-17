
import DetailCard from '../contexts/DetailCard';
import { useLocation } from 'react-router-dom';

const ContentDetails = () => {
    const { state } = useLocation();
    const moviDetails = state.data;
    
  return (
    <div>
        <article className="flex flex-col justify-araound items-center gap-1">
            <DetailCard key={moviDetails.id} data={moviDetails} />
        </article>
    </div>
  )
}

export default ContentDetails