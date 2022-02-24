import Layout from '../components/shared/Layout';
import Button from '../components/Button';
import React, {useState} from 'react';

function Assignment() {

  const[like_count, set_count] = useState(false);

  function onClick() {
    if (like_count == false) {
      set_count(true);
    }
    else {
      set_count(false);
    }
  }

  return (
    <div>
    <Button value = {like_count} onClick={onClick}></Button>
    </div>
  );
}

export default Assignment;
