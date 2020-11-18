import { useState } from 'react';
import './tab.css';

function Tab() {
  const [activetabid, setactivetabid] = useState(1);
  return (
    <div>
      <ul role="tablist">
        <li>
          <button onClick={() => setactivetabid(1)} id="1" role="tab">
            CAST
          </button>
        </li>
        <li>
          <button onClick={() => setactivetabid(2)} id="2" role="tab">
            CREW
          </button>
        </li>
        <li>
          <button onClick={() => setactivetabid(3)} id="3" role="tab">
            GENRE
          </button>
        </li>
        <li>
          <button onClick={() => setactivetabid(4)} id="4" role="tab">
            DETAILS
          </button>
        </li>
        {/* <a href="#genre">GENRE</a>
      <a href="#details">DETAILS</a> */}
      </ul>
      <div id="tabcontent">
        <div role="tabpanel" id="1" hidden={activetabid !== 1}>
          <p>This is cast</p>
        </div>
        <div role="tabpanel" id="2" hidden={activetabid !== 2}>
          <p>This is crew</p>
        </div>
        <div role="tabpanel" id="3" hidden={activetabid !== 3}>
          <p>This is genre</p>
        </div>
        <div role="tabpanel" id="4" hidden={activetabid !== 4}>
          <p>This is details</p>
        </div>
      </div>
    </div>
  );
}
export default Tab;
