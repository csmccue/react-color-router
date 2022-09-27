import React from 'react';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <>
      <div><Link to={'/red'}> Click here! </Link></div>
      <div><Link to={'/green'}> Click here! </Link></div>
      <div><Link to={'/blue'}> Click here! </Link></div>
    </>
  );
}
