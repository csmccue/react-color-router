import { useParams } from 'react-router-dom';

export default function Home() {
  const id = useParams();
  return (
    <main style={{ backgroundColor: `rgb(${id.red}, ${id.green}, ${id.blue})` }} >
      <div>
        rgb({id.red}, {id.green}, {id.blue})
      </div>
    </main>
  );
}