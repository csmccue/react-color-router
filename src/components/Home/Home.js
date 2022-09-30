import { useParams } from 'react-router-dom';
import './Home.css';

export default function Home() {
  const id = useParams();
  return (
    <main style={{ backgroundColor: `rgb(${id.red}, ${id.green}, ${id.blue})` }} >
      <div>
        rgb({id.red}, {id.green}, {id.blue})
      </div>
      <div className={`logo${id.red}`}>
      </div>
    </main>
  );
}

// adding comment to fix deploy preview issue