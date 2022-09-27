import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import Color from './Color';


function ColorList() {
  const teal = { 
    red:20, green: 220, blue:207
  };
  const maize = { 
    red:255, green: 203, blue:5 
  };
  const blue = { 
    red:0, green: 39, blue:76
  };

  let colors = { teal, maize, blue };

  return (
    <ul>
      Hello there!

      {colors.map((prop) => (
        <Link to={`/${prop.red}/${prop.green}/${prop.blue}`} key={prop.red}> 
          <li key={prop.red}>
            <Color book={prop} />
          </li>
        </Link>
      ))}
    </ul>
  );
}

export default ColorList;
